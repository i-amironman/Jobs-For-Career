import type { PostDocument, PostType } from '@/lib/types/post';

export interface ActivityItem {
  slug: string;
  type: PostType;
  title: string;
  organization: string;
  logo: string;
  savedAt: number;
}

const SAVED_KEY = 'jfc_saved';
const RECENT_KEY = 'jfc_recent';
const MAX_RECENT = 20;

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

/** Normalize legacy slug-only entries into ActivityItem shape. */
export function getSavedItems(): ActivityItem[] {
  const raw = readJson<unknown[]>(SAVED_KEY, []);
  if (!Array.isArray(raw)) return [];

  return raw
    .map((item): ActivityItem | null => {
      if (typeof item === 'string') {
        return {
          slug: item,
          type: 'job',
          title: item.replace(/-/g, ' '),
          organization: '',
          logo: '📋',
          savedAt: 0,
        };
      }
      if (item && typeof item === 'object' && 'slug' in item && 'type' in item) {
        return item as ActivityItem;
      }
      return null;
    })
    .filter((item): item is ActivityItem => item !== null);
}

export function getRecentItems(): ActivityItem[] {
  const raw = readJson<unknown[]>(RECENT_KEY, []);
  if (!Array.isArray(raw)) return [];

  return raw
    .map((item): ActivityItem | null => {
      if (typeof item === 'string') {
        return {
          slug: item,
          type: 'job',
          title: item.replace(/-/g, ' '),
          organization: '',
          logo: '📋',
          savedAt: 0,
        };
      }
      if (item && typeof item === 'object' && 'slug' in item && 'type' in item) {
        return item as ActivityItem;
      }
      return null;
    })
    .filter((item): item is ActivityItem => item !== null);
}

export function isSaved(slug: string): boolean {
  return getSavedItems().some((item) => item.slug === slug);
}

export function savePost(post: PostDocument): void {
  const item: ActivityItem = {
    slug: post.slug,
    type: post.type,
    title: post.title,
    organization: post.organization,
    logo: post.logo,
    savedAt: Date.now(),
  };
  const items = [item, ...getSavedItems().filter((i) => i.slug !== post.slug)];
  localStorage.setItem(SAVED_KEY, JSON.stringify(items));
}

export function removeSaved(slug: string): void {
  const items = getSavedItems().filter((i) => i.slug !== slug);
  localStorage.setItem(SAVED_KEY, JSON.stringify(items));
}

export function toggleSaved(post: PostDocument): boolean {
  if (isSaved(post.slug)) {
    removeSaved(post.slug);
    return false;
  }
  savePost(post);
  return true;
}

export function recordRecentView(post: PostDocument): void {
  const item: ActivityItem = {
    slug: post.slug,
    type: post.type,
    title: post.title,
    organization: post.organization,
    logo: post.logo,
    savedAt: Date.now(),
  };
  const items = [item, ...getRecentItems().filter((i) => i.slug !== post.slug)].slice(0, MAX_RECENT);
  localStorage.setItem(RECENT_KEY, JSON.stringify(items));
}

/** Upgrade legacy slug-only items by fetching from API. Drops items not in selected country. */
export async function hydrateActivityItems(
  items: ActivityItem[],
  persistKey?: 'saved' | 'recent',
  country?: string
): Promise<ActivityItem[]> {
  const countryParam = country ? `&country=${encodeURIComponent(country)}` : '';
  const hydrated = new Map(items.map((i) => [i.slug, i]));
  const needsFetch = items.filter((i) => !i.organization);

  if (needsFetch.length > 0) {
    await Promise.all(
      needsFetch.map(async (item) => {
        try {
          const res = await fetch(`/api/posts?slug=${encodeURIComponent(item.slug)}${countryParam}`);
          if (!res.ok) return;
          const data = await res.json();
          const post = data.posts?.[0];
          if (post) {
            hydrated.set(item.slug, {
              slug: post.slug,
              type: post.type,
              title: post.title,
              organization: post.organization,
              logo: post.logo,
              savedAt: item.savedAt,
            });
          } else {
            hydrated.delete(item.slug);
          }
        } catch {
          // ponytail: skip failed lookups
        }
      })
    );
  }

  if (country && country !== 'GLOBAL') {
    await Promise.all(
      items
        .filter((i) => i.organization)
        .map(async (item) => {
          try {
            const res = await fetch(`/api/posts?slug=${encodeURIComponent(item.slug)}${countryParam}`);
            if (!res.ok) {
              hydrated.delete(item.slug);
              return;
            }
            const data = await res.json();
            if (!data.posts?.[0]) hydrated.delete(item.slug);
          } catch {
            hydrated.delete(item.slug);
          }
        })
    );
  }

  const result = items.map((i) => hydrated.get(i.slug)).filter((i): i is ActivityItem => Boolean(i));

  if (persistKey && result.length !== items.length) {
    localStorage.setItem(persistKey === 'saved' ? SAVED_KEY : RECENT_KEY, JSON.stringify(result));
  } else if (persistKey && needsFetch.some((i) => hydrated.get(i.slug)?.organization)) {
    localStorage.setItem(persistKey === 'saved' ? SAVED_KEY : RECENT_KEY, JSON.stringify(result));
  }

  return result;
}
