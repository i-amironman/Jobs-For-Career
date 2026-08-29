'use client';

import Link from 'next/link';
import { Icons } from '@/components/ui/icons';
import type { PostDocument } from '@/lib/types/post';
import { getPostRoute } from '@/lib/types/post';

function payLabel(post: PostDocument) {
  return post.compensation || post.amount || post.fee || '';
}

interface HomePreviewCardProps {
  post: PostDocument;
}

export default function HomePreviewCard({ post }: HomePreviewCardProps) {
  const href = getPostRoute(post.type, post.slug);
  const pay = payLabel(post);

  return (
    <Link
      href={href}
      className="home-preview-card group snap-start shrink-0"
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="space-y-2 min-w-0 flex-1">
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium truncate">
            <Icons.MapPin className="h-3.5 w-3.5 shrink-0 text-muted-foreground/70" />
            {post.location}
          </p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium truncate">
            <Icons.Briefcase className="h-3.5 w-3.5 shrink-0 text-muted-foreground/70" />
            {post.workType || post.type.replace('-', ' ')}
          </p>
          {pay && (
            <p className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 truncate">
              <Icons.DollarSign className="h-3.5 w-3.5 shrink-0" />
              {pay}
            </p>
          )}
        </div>
        <div className="h-11 w-11 rounded-xl border border-border/60 bg-white flex items-center justify-center text-xl shrink-0 shadow-sm group-hover:scale-105 transition-transform">
          {post.logo}
        </div>
      </div>
      <div>
        <p className="font-bold text-[15px] text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
          {post.title}
        </p>
        <p className="text-xs text-muted-foreground mt-1 font-medium truncate">{post.organization}</p>
      </div>
    </Link>
  );
}
