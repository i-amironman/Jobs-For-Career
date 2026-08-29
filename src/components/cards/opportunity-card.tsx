'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Icons } from '@/components/ui/icons';
import type { PostDocument } from '@/lib/types/post';
import { getPostRoute, POST_TYPE_LABELS } from '@/lib/types/post';
import { generateSocialTemplate } from '@/lib/social-templates';
import { shareOrCopy } from '@/lib/share';
import { isSaved, toggleSaved } from '@/lib/activity-storage';

interface OpportunityCardProps {
  post: PostDocument;
}

function payLabel(post: PostDocument) {
  return post.compensation || post.amount || post.fee || '';
}

function daysLeft(deadline?: string, publishedAt?: Date) {
  if (deadline) {
    const match = deadline.match(/(\d+)/);
    if (match) return `${match[1]} days left`;
  }
  if (publishedAt) {
    const days = Math.max(1, 30 - Math.floor((Date.now() - new Date(publishedAt).getTime()) / 86400000));
    return `${days} days left`;
  }
  return 'Open now';
}

function postedLabel(publishedAt?: Date) {
  if (!publishedAt) return 'Recently posted';
  const days = Math.floor((Date.now() - new Date(publishedAt).getTime()) / 86400000);
  if (days === 0) return 'Posted today';
  if (days === 1) return 'Posted yesterday';
  if (days < 7) return `Posted ${days} days ago`;
  return `Posted ${new Date(publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;
}

export default function OpportunityCard({ post }: OpportunityCardProps) {
  const href = getPostRoute(post.type, post.slug);
  const pay = payLabel(post);
  const skillsLine = [...post.skills, ...post.tags].slice(0, 5).join(' · ');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(isSaved(post.slug));
  }, [post.slug]);

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await shareOrCopy(post.title, generateSocialTemplate(post, 'whatsapp'));
  };

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSaved(toggleSaved(post));
  };

  return (
    <Link href={href} className="block group">
      <article className="feed-card">
        <div className="flex gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3 mb-1">
              <h3 className="font-bold text-base md:text-[1.05rem] text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                {post.title}
              </h3>
              <div className="h-[52px] w-[52px] rounded-xl border border-border/60 bg-white flex items-center justify-center text-2xl shrink-0 shadow-sm group-hover:scale-105 group-hover:border-primary/20 transition-all duration-300">
                {post.logo}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <p className="text-sm font-semibold text-foreground/80">{post.organization}</p>
              {post.featured && (
                <span className="trusted-badge">
                  <Icons.Shield className="h-2.5 w-2.5" />
                  Trusted
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground mb-3">
              <span className="inline-flex items-center gap-1.5">
                <Icons.Briefcase className="h-3.5 w-3.5 text-primary/60" />
                {POST_TYPE_LABELS[post.type]}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icons.Clock className="h-3.5 w-3.5 text-primary/60" />
                {post.workType || 'Full Time'}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icons.MapPin className="h-3.5 w-3.5 text-primary/60" />
                {post.location}
              </span>
            </div>

            {skillsLine && (
              <p className="text-xs text-muted-foreground/90 font-medium line-clamp-1 mb-4">{skillsLine}</p>
            )}

            <div className="flex items-center justify-between pt-3 border-t border-border/40">
              <div className="flex items-center gap-3 text-[11px] text-muted-foreground font-medium">
                <span>{postedLabel(post.publishedAt)}</span>
                <span className="inline-flex items-center gap-1 text-amber-700">
                  <Icons.Clock className="h-3 w-3" />
                  {daysLeft(post.deadline, post.publishedAt)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleShare}
                  className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Share"
                >
                  <Icons.Share2 className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className={`p-1.5 rounded-lg hover:bg-muted transition-colors ${saved ? 'text-red-500' : 'text-muted-foreground hover:text-red-500'}`}
                  aria-label="Save"
                >
                  <Icons.Heart className={`h-4 w-4 ${saved ? 'fill-current' : ''}`} />
                </button>
                {pay ? (
                  <span className="salary-badge ml-1">{pay}</span>
                ) : (
                  <span className="text-xs font-bold text-primary group-hover:underline">Apply →</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export function OpportunityCardSkeleton() {
  return (
    <div className="feed-card animate-pulse">
      <div className="flex justify-between gap-4">
        <div className="flex-1 space-y-3">
          <div className="h-5 bg-muted rounded-lg w-3/4" />
          <div className="h-4 bg-muted rounded-lg w-1/3" />
          <div className="flex gap-3">
            <div className="h-3 bg-muted rounded w-16" />
            <div className="h-3 bg-muted rounded w-20" />
          </div>
          <div className="h-3 bg-muted rounded w-full" />
        </div>
        <div className="h-[52px] w-[52px] bg-muted rounded-xl shrink-0" />
      </div>
    </div>
  );
}
