import Link from 'next/link';
import { getAllPosts } from '@/lib/post-service';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { POST_TYPE_LABELS } from '@/lib/types/post';

const STATUS_COLORS: Record<string, string> = {
  draft: 'bg-slate-100 text-slate-600 border-slate-200',
  approved: 'bg-amber-50 text-amber-700 border-amber-200',
  published: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  archived: 'bg-gray-100 text-gray-500 border-gray-200',
};

export default async function AdminPostsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  let posts: Awaited<ReturnType<typeof getAllPosts>> = [];

  try {
    posts = await getAllPosts(status as 'draft' | 'approved' | 'published' | 'archived' | undefined);
  } catch {
    // DB unavailable
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            All Posts {status && <span className="text-primary capitalize">({status})</span>}
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">{posts.length} posts found</p>
        </div>
        <Link href="/admin/posts/new"><Button>+ Create Post</Button></Link>
      </div>

      <div className="surface-card overflow-hidden divide-y divide-border/50">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/admin/posts/${post._id}`}
            className="flex items-center justify-between px-5 py-4 hover:bg-muted/30 transition-colors group"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-2xl shrink-0">{post.logo}</span>
              <div className="min-w-0">
                <p className="font-medium truncate group-hover:text-primary transition-colors">{post.title}</p>
                <p className="text-sm text-muted-foreground">
                  {POST_TYPE_LABELS[post.type]} · {post.organization} · {post.country}
                </p>
              </div>
            </div>
            <Badge className={`capitalize shrink-0 border text-[10px] ${STATUS_COLORS[post.status] || ''}`}>
              {post.status}
            </Badge>
          </Link>
        ))}
        {posts.length === 0 && (
          <p className="text-muted-foreground text-center py-12">No posts found.</p>
        )}
      </div>
    </div>
  );
}
