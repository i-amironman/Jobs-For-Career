'use client';

import { useCallback, useEffect, useMemo, useRef, useState, useTransition } from 'react';
import { Icons } from '@/components/ui/icons';
import FilterDropdown from '@/components/filters/filter-dropdown';
import {
  buildPostFilterIndex,
  filterIndexedPosts,
  mergeLocationOptions,
} from '@/lib/apply-listing-filters';
import type { ListingFilterConfig, ListingKind } from '@/lib/listing-filter-config';
import type { PostDocument } from '@/lib/types/post';
import { useCountry } from '@/context/country-context';

interface ListingFiltersProps {
  posts: PostDocument[];
  listingKind: ListingKind;
  config: ListingFilterConfig;
  onFiltered: (filtered: PostDocument[]) => void;
}

function useDebounced<T>(value: T, delayMs: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(t);
  }, [value, delayMs]);
  return debounced;
}

export default function ListingFilters({
  posts,
  listingKind,
  config,
  onFiltered,
}: ListingFiltersProps) {
  const { country } = useCountry();
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Record<string, string[]>>({});
  const [sortBy, setSortBy] = useState(config.sortOptions[0]?.value ?? 'newest');
  const [remotePosts, setRemotePosts] = useState<PostDocument[] | null>(null);
  const [fetching, setFetching] = useState(false);
  const [, startTransition] = useTransition();
  const abortRef = useRef<AbortController | null>(null);

  const debouncedSearch = useDebounced(search, 250);
  const debouncedSelected = useDebounced(selected, 200);
  const debouncedSort = useDebounced(sortBy, 150);

  const hasActiveQuery =
    debouncedSearch.trim().length > 0 ||
    Object.values(debouncedSelected).some((v) => v.length > 0) ||
    debouncedSort !== (config.sortOptions[0]?.value ?? 'newest');

  const resolvedConfig = useMemo(() => {
    const source = remotePosts ?? posts;
    return {
      ...config,
      filters: config.filters.map((f) =>
        f.mergePostLocations ? { ...f, options: mergeLocationOptions(f.options, source) } : f,
      ),
    };
  }, [config, posts, remotePosts]);

  const workingPosts = remotePosts ?? posts;

  const index = useMemo(() => buildPostFilterIndex(workingPosts), [workingPosts]);

  const filtered = useMemo(
    () => filterIndexedPosts(index, resolvedConfig, search, selected, sortBy),
    [index, resolvedConfig, search, selected, sortBy],
  );

  useEffect(() => {
    onFiltered(filtered);
  }, [filtered, onFiltered]);

  // Server query for large datasets (debounced)
  useEffect(() => {
    if (!hasActiveQuery) {
      setRemotePosts(null);
      setFetching(false);
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    setFetching(true);

    const params = new URLSearchParams({
      type: listingKind,
      country,
      sort: debouncedSort,
    });
    if (debouncedSearch.trim()) params.set('search', debouncedSearch.trim());
    if (Object.values(debouncedSelected).some((v) => v.length > 0)) {
      params.set('filters', JSON.stringify(debouncedSelected));
    }

    fetch(`/api/posts?${params}`, { signal: controller.signal })
      .then((r) => r.json())
      .then((data) => {
        if (!controller.signal.aborted) {
          startTransition(() => setRemotePosts(data.posts ?? []));
        }
      })
      .catch(() => {
        if (!controller.signal.aborted) setRemotePosts(null);
      })
      .finally(() => {
        if (!controller.signal.aborted) setFetching(false);
      });

    return () => controller.abort();
  }, [hasActiveQuery, listingKind, country, debouncedSearch, debouncedSelected, debouncedSort]);

  const setFilterValues = useCallback((id: string, values: string[]) => {
    setSelected((prev) => ({ ...prev, [id]: values }));
  }, []);

  const activeCount =
    Object.values(selected).reduce((n, arr) => n + arr.length, 0) + (search ? 1 : 0);

  const clearAll = () => {
    setSearch('');
    setSelected({});
    setSortBy(config.sortOptions[0]?.value ?? 'newest');
    setRemotePosts(null);
  };

  return (
    <div className="space-y-3">
      <div className="listing-filter-bar scrollbar-hide">
        <div className="listing-filter-item listing-filter-search-wrap">
          <Icons.Search className="listing-filter-search-icon" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={config.searchPlaceholder}
            className="listing-filter-search"
          />
        </div>

        {resolvedConfig.filters.map((filter) => (
          <FilterDropdown
            key={filter.id}
            label={filter.label}
            options={filter.options.map((o) => ({ label: o.label, value: o.value }))}
            selected={selected[filter.id] ?? []}
            onChange={(values) => setFilterValues(filter.id, values)}
          />
        ))}

        <FilterDropdown
          label={config.sortOptions.find((s) => s.value === sortBy)?.label ?? 'Most Recent'}
          options={config.sortOptions}
          selected={[sortBy]}
          onChange={(values) => setSortBy(values[0] ?? 'newest')}
          single
          className="listing-filter-sort"
        />
      </div>

      <div className="flex items-center justify-between gap-3 flex-wrap">
        <p className="text-xs text-muted-foreground font-medium">
          {filtered.length} result{filtered.length !== 1 ? 's' : ''} found
          {fetching && <span className="ml-2 text-primary/70">· updating…</span>}
        </p>
        {activeCount > 0 && (
          <button type="button" onClick={clearAll} className="text-xs font-semibold text-primary hover:underline">
            Clear all filters
          </button>
        )}
      </div>
    </div>
  );
}
