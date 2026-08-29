import ListingGrid from '@/components/listing/listing-grid';
import { getPublishedPosts, countPublishedByType, getFreshersPosts, countFreshersPosts } from '@/lib/post-service';
import { resolveCountry } from '@/lib/country-server';
import { getListingFilterConfig, type ListingKind } from '@/lib/listing-filter-config';
import { getFreshersFilterConfig } from '@/lib/freshers';
import { POST_TYPE_LABELS } from '@/lib/types/post';

interface ListingPageContentProps {
  type: ListingKind;
  title: string;
  subtitle: string;
  country?: string;
}

export default async function ListingPageContent({
  type,
  title,
  subtitle,
  country,
}: ListingPageContentProps) {
  const resolvedCountry = await resolveCountry(country);
  const filterConfig = type === 'freshers' ? getFreshersFilterConfig() : getListingFilterConfig(type);
  let posts: Awaited<ReturnType<typeof getPublishedPosts>> = [];
  let count = 0;

  try {
    if (type === 'freshers') {
      [posts, count] = await Promise.all([
        getFreshersPosts(resolvedCountry),
        countFreshersPosts(resolvedCountry),
      ]);
    } else {
      [posts, count] = await Promise.all([
        getPublishedPosts(type, resolvedCountry),
        countPublishedByType(type, resolvedCountry),
      ]);
    }
  } catch {
    // DB unavailable
  }

  const typeLabel = type === 'freshers' ? 'fresher' : POST_TYPE_LABELS[type].toLowerCase();

  return (
    <div className="space-y-6 pb-2">
      <header>
        <h1 className="listing-count">
          {count > 0 ? (
            <>
              <em>{count}+</em> {title}
            </>
          ) : (
            title
          )}
        </h1>
        <p className="text-muted-foreground mt-2 text-base leading-relaxed max-w-2xl">{subtitle}</p>
        {count > 0 && (
          <p className="text-xs text-muted-foreground/70 mt-2 font-medium">
            Showing fresh {typeLabel} opportunities · Updated daily
          </p>
        )}
      </header>

      <ListingGrid posts={posts} listingKind={type} filterConfig={filterConfig} />
    </div>
  );
}
