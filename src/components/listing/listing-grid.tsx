'use client';

import { useState, useCallback, useMemo } from 'react';
import OpportunityCard from '@/components/cards/opportunity-card';
import ListingFilters from '@/components/filters/listing-filters';
import ListingPagination, { LISTING_PAGE_SIZE } from '@/components/listing/listing-pagination';
import AdSlot from '@/components/ads/ad-slot';
import type { ListingFilterConfig, ListingKind } from '@/lib/listing-filter-config';
import type { PostDocument } from '@/lib/types/post';

interface ListingGridProps {
  posts: PostDocument[];
  listingKind: ListingKind;
  filterConfig: ListingFilterConfig;
  emptyMessage?: string;
}

export default function ListingGrid({
  posts,
  listingKind,
  filterConfig,
  emptyMessage = 'No posts found for your region. Try selecting Global / Remote.',
}: ListingGridProps) {
  const [filtered, setFiltered] = useState(posts);
  const [page, setPage] = useState(1);

  const handleFiltered = useCallback((items: PostDocument[]) => {
    setFiltered(items);
    setPage(1);
  }, []);

  const paginatedPosts = useMemo(() => {
    const start = (page - 1) * LISTING_PAGE_SIZE;
    return filtered.slice(start, start + LISTING_PAGE_SIZE);
  }, [filtered, page]);

  return (
    <>
      <ListingFilters posts={posts} listingKind={listingKind} config={filterConfig} onFiltered={handleFiltered} />

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-lg">{emptyMessage}</p>
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {paginatedPosts.map((post, i) => (
              <div key={post._id}>
                <OpportunityCard post={post} />
                {(i + 1) % 5 === 0 && (
                  <div className="mt-4">
                    <AdSlot slot={`listing-${page}-${i}`} className="min-h-[90px]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <ListingPagination
            page={page}
            totalItems={filtered.length}
            onPageChange={setPage}
          />
        </>
      )}
    </>
  );
}
