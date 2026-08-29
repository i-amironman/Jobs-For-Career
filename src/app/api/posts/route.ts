import { NextRequest, NextResponse } from 'next/server';
import { getPublishedPosts, getFeaturedPosts, countPublishedByType, queryPublishedPosts, getFreshersPosts, countFreshersPosts, queryFreshersPosts } from '@/lib/post-service';
import { resolveCountry } from '@/lib/country-server';
import type { PostType } from '@/lib/types/post';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const typeParam = searchParams.get('type');
    const type = typeParam as PostType | 'freshers' | null;
    const country = await resolveCountry(searchParams.get('country'));
    const featured = searchParams.get('featured') === 'true';
    const count = searchParams.get('count') === 'true';
    const search = searchParams.get('search') ?? undefined;
    const sort = searchParams.get('sort') ?? undefined;
    const filtersRaw = searchParams.get('filters');

    const slug = searchParams.get('slug');
    if (slug) {
      const { getPostBySlug } = await import('@/lib/post-service');
      const post = await getPostBySlug(slug, country);
      return NextResponse.json({ posts: post ? [post] : [] });
    }

    if (count && type) {
      const total =
        type === 'freshers'
          ? await countFreshersPosts(country)
          : await countPublishedByType(type, country);
      return NextResponse.json({ count: total });
    }

    let selected: Record<string, string[]> | undefined;
    if (filtersRaw) {
      try {
        selected = JSON.parse(filtersRaw) as Record<string, string[]>;
      } catch {
        selected = undefined;
      }
    }

    const hasQuery = Boolean(search || sort || (selected && Object.values(selected).some((v) => v.length > 0)));

    if (featured) {
      const posts = await getFeaturedPosts(country);
      return NextResponse.json({ posts });
    }

    if (type && hasQuery) {
      const posts =
        type === 'freshers'
          ? await queryFreshersPosts({ country, search, selected, sort, limit: 500 })
          : await queryPublishedPosts({ type, country, search, selected, sort, limit: 500 });
      return NextResponse.json({ posts });
    }

    if (type === 'freshers') {
      const posts = await getFreshersPosts(country);
      return NextResponse.json({ posts });
    }

    const posts = await getPublishedPosts(type || undefined, country);
    return NextResponse.json({ posts });
  } catch {
    return NextResponse.json({ posts: [], error: 'Database unavailable' }, { status: 503 });
  }
}
