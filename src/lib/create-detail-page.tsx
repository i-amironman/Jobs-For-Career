import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPostBySlug, getFeaturedPosts } from '@/lib/post-service';
import { resolveCountry } from '@/lib/country-server';
import PostDetailView from '@/components/post/post-detail-view';
import type { PostType } from '@/lib/types/post';

export function createDetailPage(type: PostType) {
  async function generateMetadata({
    params,
    searchParams,
  }: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ country?: string }>;
  }): Promise<Metadata> {
    const { slug } = await params;
    const { country: urlCountry } = await searchParams;
    const country = await resolveCountry(urlCountry);
    const post = await getPostBySlug(slug, country);
    if (!post || post.type !== type) return { title: 'Not Found' };
    return {
      title: `${post.title} | JobsForCareer`,
      description: post.description.slice(0, 160),
      openGraph: { title: post.title, description: post.description.slice(0, 160) },
    };
  }

  async function Page({
    params,
    searchParams,
  }: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ country?: string }>;
  }) {
    const { slug } = await params;
    const { country: urlCountry } = await searchParams;
    const country = await resolveCountry(urlCountry);
    const post = await getPostBySlug(slug, country);
    if (!post || post.type !== type) notFound();

    let featured: Awaited<ReturnType<typeof getFeaturedPosts>> = [];
    try {
      featured = await getFeaturedPosts(country, 5);
    } catch {
      featured = [];
    }

    return <PostDetailView post={post} featuredPosts={featured.filter((p) => p.slug !== post.slug)} />;
  }

  return { Page, generateMetadata };
}
