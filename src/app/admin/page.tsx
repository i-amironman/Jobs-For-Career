import Link from 'next/link';
import { getPostCounts, getAllPosts } from '@/lib/post-service';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { POST_TYPE_LABELS } from '@/lib/types/post';

const STATUS_COLORS: Record<string, string> = {
  draft: 'bg-slate-100 text-slate-600',
  approved: 'bg-amber-50 text-amber-700 border-amber-200',
  published: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  archived: 'bg-gray-100 text-gray-500',
};

export default async function AdminDashboard() {
  let counts = { draft: 0, approved: 0, published: 0, archived: 0 };
  let recent: Awaited<ReturnType<typeof getAllPosts>> = [];

  try {
    [counts, recent] = await Promise.all([getPostCounts(), getAllPosts()]);
  } catch {
    // DB unavailable
  }

  const total = counts.draft + counts.approved + counts.published + counts.archived;

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground text-sm mt-0.5">{total} total posts across all statuses</p>
        </div>
        <Link href="/admin/posts/new"><Button>+ Create Post</Button></Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {(['draft', 'approved', 'published', 'archived'] as const).map((status) => (
          <Link key={status} href={`/admin/posts?status=${status}`} className="admin-stat-card hover:shadow-md transition-shadow group">
            <p className="text-3xl font-extrabold text-foreground group-hover:text-primary transition-colors">{counts[status]}</p>
            <p className="text-sm text-muted-foreground capitalize mt-1 font-medium">{status}</p>
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <Link href="/admin/posts"><Button variant="outline" size="sm">All Posts</Button></Link>
        <Link href="/admin/posts?status=draft"><Button variant="outline" size="sm">Drafts</Button></Link>
        <Link href="/admin/posts?status=approved"><Button variant="outline" size="sm">Awaiting Publish</Button></Link>
        <Link href="/admin/posts?status=published"><Button variant="outline" size="sm">Live</Button></Link>
      </div>

      <div className="surface-card overflow-hidden">
        <div className="px-5 py-4 border-b border-border/60">
          <h3 className="font-semibold">Recent Posts</h3>
        </div>
        <div className="divide-y divide-border/50">
          {recent.slice(0, 10).map((post) => (
            <Link
              key={post._id}
              href={`/admin/posts/${post._id}`}
              className="flex items-center justify-between px-5 py-4 hover:bg-muted/30 transition-colors group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-2xl shrink-0">{post.logo}</span>
                <div className="min-w-0">
                  <p className="font-medium text-sm truncate group-hover:text-primary transition-colors">{post.title}</p>
                  <p className="text-xs text-muted-foreground">{POST_TYPE_LABELS[post.type]} · {post.organization}</p>
                </div>
              </div>
              <Badge className={`text-[10px] capitalize shrink-0 border ${STATUS_COLORS[post.status] || ''}`}>
                {post.status}
              </Badge>
            </Link>
          ))}
          {recent.length === 0 && (
            <p className="text-muted-foreground text-sm p-8 text-center">No posts yet. Create your first post!</p>
          )}
        </div>
      </div>
    </div>
  );
}
