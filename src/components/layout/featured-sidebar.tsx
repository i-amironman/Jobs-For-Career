import Link from 'next/link';
import type { PostDocument, PostType } from '@/lib/types/post';
import { getPostRoute, POST_TYPE_LABELS } from '@/lib/types/post';
import { Icons } from '@/components/ui/icons';
import AdSlot from '@/components/ads/ad-slot';

const TYPE_TINT: Record<PostType, string> = {
  job: 'from-orange-50 to-amber-100',
  internship: 'from-sky-50 to-blue-100',
  scholarship: 'from-emerald-50 to-green-100',
  'govt-job': 'from-slate-50 to-gray-100',
  competition: 'from-yellow-50 to-orange-100',
  'mock-test': 'from-violet-50 to-purple-100',
  'mock-interview': 'from-pink-50 to-rose-100',
  mentorship: 'from-teal-50 to-cyan-100',
  'prep-resource': 'from-indigo-50 to-blue-100',
};

interface FeaturedSidebarProps {
  posts?: PostDocument[];
}

export default function FeaturedSidebar({ posts = [] }: FeaturedSidebarProps) {
  const items = posts.slice(0, 5);

  return (
    <aside className="hidden xl:block w-[280px] shrink-0 sticky-panel custom-scrollbar space-y-4">
      <AdSlot slot="sidebar-top" className="min-h-[250px] rounded-2xl" />

      <div className="featured-sidebar-panel overflow-hidden">
        <div className="featured-sidebar-header">
          <div className="flex items-center gap-2">
            <span className="featured-sidebar-header-icon">
              <Icons.Zap className="h-3.5 w-3.5" />
            </span>
            <div>
              <h3 className="text-sm font-extrabold text-white tracking-tight">Featured</h3>
              <p className="text-[10px] text-white/75 font-medium">Hot picks for you</p>
            </div>
          </div>
        </div>

        <div className="p-3 space-y-2 bg-gradient-to-b from-primary/[0.03] to-transparent">
          {items.length === 0 ? (
            <p className="text-xs text-muted-foreground py-6 text-center">No featured posts yet.</p>
          ) : (
            items.map((post, i) => (
              <Link
                key={post._id}
                href={getPostRoute(post.type, post.slug)}
                className="featured-sidebar-card group"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                {i === 0 && (
                  <span className="featured-sidebar-badge">Top pick</span>
                )}
                <div className={`featured-sidebar-logo bg-gradient-to-br ${TYPE_TINT[post.type]}`}>
                  {post.logo}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-bold text-foreground group-hover:text-primary line-clamp-2 leading-snug transition-colors">
                    {post.title}
                  </p>
                  <p className="text-[10px] font-bold text-primary/70 mt-1 uppercase tracking-wider">
                    {POST_TYPE_LABELS[post.type]}
                  </p>
                  <span className="featured-sidebar-cta">
                    Register Now
                    <Icons.ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>

      <AdSlot slot="sidebar-bottom" className="min-h-[250px] rounded-2xl" />
    </aside>
  );
}
