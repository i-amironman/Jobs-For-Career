'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { Icons } from '@/components/ui/icons';
import HomePreviewCard from '@/components/cards/home-preview-card';
import type { PostDocument } from '@/lib/types/post';

interface HomeSectionRowProps {
  title: string;
  subtitle: string;
  viewAllHref: string;
  posts: PostDocument[];
}

export default function HomeSectionRow({ title, subtitle, viewAllHref, posts }: HomeSectionRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
  };

  if (posts.length === 0) return null;

  return (
    <section>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="min-w-0">
          <h2 className="section-title mb-1">{title}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{subtitle}</p>
        </div>
        <Link
          href={viewAllHref}
          className="inline-flex items-center gap-2 shrink-0 px-3 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold hover:bg-primary/15 transition-colors"
        >
          View All
          <span className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center">
            <Icons.ArrowRight className="h-3 w-3" />
          </span>
        </Link>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="home-section-scroll scrollbar-hide"
        >
          {posts.map((post) => (
            <HomePreviewCard key={post._id} post={post} />
          ))}
        </div>

        {posts.length > 3 && (
          <>
            <button
              type="button"
              onClick={() => scroll('left')}
              className="home-section-arrow home-section-arrow--left"
              aria-label={`Scroll ${title} left`}
            >
              <Icons.ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="home-section-arrow home-section-arrow--right"
              aria-label={`Scroll ${title} right`}
            >
              <Icons.ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>
    </section>
  );
}
