'use client';

import Link from 'next/link';
import type { PostDocument } from '@/lib/types/post';
import { getPostRoute, POST_TYPE_LABELS } from '@/lib/types/post';

const BANNER_GRADIENTS = [
  'from-violet-600 via-purple-600 to-indigo-700',
  'from-orange-500 via-amber-500 to-yellow-500',
  'from-blue-600 via-cyan-500 to-teal-500',
  'from-rose-500 via-pink-500 to-fuchsia-600',
  'from-emerald-500 via-green-500 to-teal-600',
  'from-indigo-600 via-blue-500 to-sky-500',
];

interface FeaturedCarouselProps {
  posts: PostDocument[];
}

function FeaturedCard({ post, index }: { post: PostDocument; index: number }) {
  return (
    <Link
      href={getPostRoute(post.type, post.slug)}
      className="featured-marquee-card group"
    >
      <div className="rounded-2xl overflow-hidden border border-border/50 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
        <div className="featured-banner h-[180px] flex flex-col justify-between p-5 relative">
          <div className={`absolute inset-0 bg-gradient-to-br ${BANNER_GRADIENTS[index % BANNER_GRADIENTS.length]}`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
          <div className="relative flex justify-between items-start">
            <span className="text-4xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
              {post.logo}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/25 backdrop-blur-sm text-white px-2.5 py-1 rounded-full border border-white/20">
              {post.featured ? 'Featured' : 'New'}
            </span>
          </div>
          <div className="relative">
            <p className="text-white/90 text-xs font-semibold truncate">{post.organization}</p>
            <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wide bg-white text-primary px-2.5 py-1 rounded-md shadow-sm">
              Register Now!
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-sm text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <div className="flex items-center justify-between mt-2.5">
            <span className="text-[11px] font-semibold text-muted-foreground">
              {POST_TYPE_LABELS[post.type]}
            </span>
            {(post.fee === 'Free' || !post.fee) && (
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                Free
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedCarousel({ posts }: FeaturedCarouselProps) {
  if (posts.length === 0) return null;

  // ponytail: duplicate for seamless loop; duration scales with item count
  const loop = [...posts, ...posts];
  const durationSec = Math.max(posts.length * 5, 24);

  return (
    <section>
      <h2 className="section-title mb-5">Featured</h2>

      <div className="featured-marquee">
        <div
          className="featured-marquee-track"
          style={{ animationDuration: `${durationSec}s` }}
        >
          {loop.map((post, i) => (
            <FeaturedCard key={`${post._id}-${i}`} post={post} index={i % posts.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
