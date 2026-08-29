import type { PostDocument } from '@/lib/types/post';
import type { FilterOption, ListingFilterConfig } from '@/lib/listing-filter-config';

export interface IndexedPost {
  post: PostDocument;
  haystack: string;
  location: string;
  workType: string;
  compensation: number;
  publishedAt: number;
}

export function buildPostFilterIndex(posts: PostDocument[]): IndexedPost[] {
  return posts.map((post) => ({
    post,
    haystack: [
      post.title,
      post.description,
      post.organization,
      post.location,
      post.workType,
      post.compensation,
      post.amount,
      post.fee,
      ...post.skills,
      ...post.tags,
      ...post.eligibility,
      ...post.requirements,
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase(),
    location: (post.location || '').toLowerCase(),
    workType: (post.workType || '').toLowerCase(),
    compensation: parseCompensation(post),
    publishedAt: new Date(post.publishedAt || 0).getTime(),
  }));
}

function parseCompensation(post: PostDocument): number {
  const text = [post.compensation, post.amount, post.fee].filter(Boolean).join(' ');
  if (!text) return 0;
  const normalized = text.toLowerCase();
  let multiplier = 1;
  if (/lpa|lac| lakh/.test(normalized)) multiplier = 100000;
  else if (/\bk\b|\d+k/.test(normalized)) multiplier = 1000;
  const nums = normalized.match(/[\d,]+(?:\.\d+)?/g);
  if (!nums?.length) return 0;
  return Math.max(...nums.map((n) => parseFloat(n.replace(/,/g, '')) * multiplier));
}

function matchesOption(entry: IndexedPost, option: FilterOption, filterId: string): boolean {
  if (filterId === 'opportunityType') {
    return entry.post.type === option.value;
  }
  if (filterId === 'workType') {
    const keys = option.keywords ?? [option.value];
    return keys.some((k) => entry.workType.includes(k) || entry.haystack.includes(k));
  }
  if (filterId === 'location') {
    const keys = option.keywords ?? [option.value];
    return keys.some((k) => entry.location.includes(k));
  }
  const keys = option.keywords ?? [option.value];
  return keys.some((k) => entry.haystack.includes(k.toLowerCase()));
}

export function filterIndexedPosts(
  index: IndexedPost[],
  config: ListingFilterConfig,
  search: string,
  selected: Record<string, string[]>,
  sortBy: string,
): PostDocument[] {
  const q = search.trim().toLowerCase();
  const activeFilters = config.filters
    .map((f) => ({
      id: f.id,
      options: f.options.filter((o) => (selected[f.id] ?? []).includes(o.value)),
    }))
    .filter((f) => f.options.length > 0);

  let result = index;

  if (q) {
    result = result.filter((e) => e.haystack.includes(q));
  }

  for (const filter of activeFilters) {
    result = result.filter((entry) =>
      filter.options.some((opt) => matchesOption(entry, opt, filter.id)),
    );
  }

  const sorted = [...result];
  if (sortBy === 'newest') {
    sorted.sort((a, b) => b.publishedAt - a.publishedAt);
  } else if (sortBy === 'title') {
    sorted.sort((a, b) => a.post.title.localeCompare(b.post.title));
  } else if (sortBy === 'salary-desc') {
    sorted.sort((a, b) => b.compensation - a.compensation);
  } else if (sortBy === 'salary-asc') {
    sorted.sort((a, b) => a.compensation - b.compensation);
  }

  return sorted.map((e) => e.post);
}

export function mergeLocationOptions(
  base: FilterOption[],
  posts: PostDocument[],
): FilterOption[] {
  const seen = new Set(base.map((o) => o.value));
  const merged = [...base];
  for (const post of posts) {
    const city = post.location?.split(',')[0]?.trim();
    if (!city) continue;
    const value = city.toLowerCase();
    if (seen.has(value)) continue;
    seen.add(value);
    merged.push({ label: city, value, keywords: [value] });
  }
  return merged;
}

/** @deprecated use filterIndexedPosts */
export function applyListingFilters(
  posts: PostDocument[],
  config: ListingFilterConfig,
  search: string,
  selected: Record<string, string[]>,
  sortBy: string,
): PostDocument[] {
  return filterIndexedPosts(buildPostFilterIndex(posts), config, search, selected, sortBy);
}
