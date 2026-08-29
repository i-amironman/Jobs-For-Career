import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminSession } from '@/lib/admin-auth';
import { getAllPosts, createPost, slugify } from '@/lib/post-service';
import type { PostType } from '@/lib/types/post';

export async function GET() {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const posts = await getAllPosts();
    return NextResponse.json({ posts });
  } catch {
    return NextResponse.json({ posts: [], error: 'Database unavailable' }, { status: 503 });
  }
}

export async function POST(request: NextRequest) {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const body = await request.json();
    const slug = body.slug || slugify(`${body.title}-${body.organization}`);
    const post = await createPost({
      ...body,
      slug,
      status: 'draft',
      type: body.type as PostType,
    });
    return NextResponse.json({ post }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 400 });
  }
}
