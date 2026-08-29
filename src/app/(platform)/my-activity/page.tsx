'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Icons } from '@/components/ui/icons';
import { useCountry } from '@/context/country-context';
import {
  type ActivityItem,
  getSavedItems,
  getRecentItems,
  hydrateActivityItems,
  removeSaved,
} from '@/lib/activity-storage';
import { getPostRoute, POST_TYPE_LABELS } from '@/lib/types/post';

function ActivityList({
  items,
  emptyMessage,
  onRemove,
}: {
  items: ActivityItem[];
  emptyMessage: string;
  onRemove?: (slug: string) => void;
}) {
  if (items.length === 0) {
    return <p className="text-sm text-muted-foreground px-5 py-6 text-center">{emptyMessage}</p>;
  }

  return (
    <div className="divide-y divide-border/50">
      {items.map((item) => {
        const href = getPostRoute(item.type, item.slug);
        const hasMeta = Boolean(item.organization);

        return (
          <div key={`${item.type}-${item.slug}`} className="group flex items-center gap-4 px-5 py-4 hover:bg-muted/30 transition-colors">
            <Link href={href} className="flex items-center gap-4 flex-1 min-w-0">
              <div className="h-12 w-12 rounded-xl border border-border/60 bg-white flex items-center justify-center text-2xl shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                {item.logo}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {hasMeta ? item.title : item.slug}
                </p>
                {item.organization ? (
                  <p className="text-xs text-muted-foreground mt-0.5 truncate">{item.organization}</p>
                ) : (
                  <p className="text-xs text-muted-foreground mt-0.5 italic">Loading details…</p>
                )}
                <span className="inline-block mt-1.5 text-[10px] font-bold uppercase tracking-wide text-primary/70">
                  {POST_TYPE_LABELS[item.type]}
                </span>
              </div>
              <Icons.ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary shrink-0 opacity-0 group-hover:opacity-100 transition-all" />
            </Link>
            {onRemove && (
              <button
                type="button"
                onClick={() => onRemove(item.slug)}
                className="p-2 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-colors shrink-0"
                aria-label="Remove from saved"
              >
                <Icons.Heart className="h-4 w-4 fill-current text-red-400" />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function MyActivityPage() {
  const { country } = useCountry();
  const [saved, setSaved] = useState<ActivityItem[]>([]);
  const [recent, setRecent] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const savedRaw = getSavedItems();
      const recentRaw = getRecentItems();
      const [savedHydrated, recentHydrated] = await Promise.all([
        hydrateActivityItems(savedRaw, 'saved', country),
        hydrateActivityItems(recentRaw, 'recent', country),
      ]);
      setSaved(savedHydrated);
      setRecent(recentHydrated);
      setLoading(false);
    }
    void load();
  }, [country]);

  const handleRemove = (slug: string) => {
    removeSaved(slug);
    setSaved((prev) => prev.filter((i) => i.slug !== slug));
  };

  const stats = [
    { label: 'Saved Opportunities', count: saved.length, icon: Icons.Heart, color: 'from-rose-50 to-pink-50 text-rose-600' },
    { label: 'Recently Viewed', count: recent.length, icon: Icons.Clock, color: 'from-blue-50 to-indigo-50 text-blue-600' },
  ];

  return (
    <div className="space-y-8 pb-4">
      <div className="gradient-hero rounded-2xl p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-primary">My Activities</h1>
        <p className="text-muted-foreground mt-2">Your saved and recently viewed opportunities in one place.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stats.map(({ label, count, icon: Icon, color }) => (
          <div key={label} className="surface-card p-6 flex items-center gap-4">
            <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0`}>
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-3xl font-extrabold">{count}</p>
              <p className="text-sm text-muted-foreground font-medium">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {loading ? (
        <div className="surface-card text-center py-12 text-muted-foreground text-sm">Loading your activity…</div>
      ) : saved.length === 0 && recent.length === 0 ? (
        <div className="surface-card text-center py-16 px-6">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-xl font-bold mb-2">Nothing here yet!</p>
          <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
            Browse jobs and internships — save ones you like and they&apos;ll show up here.
          </p>
          <Link href="/jobs" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            Explore Jobs <Icons.ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {saved.length > 0 && (
            <section className="surface-card overflow-hidden">
              <div className="px-5 py-4 border-b border-border/60">
                <h2 className="font-semibold">Saved ({saved.length})</h2>
              </div>
              <ActivityList items={saved} emptyMessage="No saved items." onRemove={handleRemove} />
            </section>
          )}
          {recent.length > 0 && (
            <section className="surface-card overflow-hidden">
              <div className="px-5 py-4 border-b border-border/60">
                <h2 className="font-semibold">Recently Viewed ({recent.length})</h2>
              </div>
              <ActivityList items={recent} emptyMessage="No recently viewed items." />
            </section>
          )}
        </div>
      )}
    </div>
  );
}
