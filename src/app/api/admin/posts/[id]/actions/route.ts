import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminSession } from '@/lib/admin-auth';
import { getPostById, updatePost, wordCount } from '@/lib/post-service';
import { revalidatePath } from 'next/cache';
import { POST_TYPE_ROUTES } from '@/lib/types/post';

export async function POST(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  const action = _req.nextUrl.searchParams.get('action');

  try {
    const post = await getPostById(id);
    if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    if (action === 'approve') {
      const updated = await updatePost(id, { status: 'approved' });
      return NextResponse.json({ post: updated });
    }

    if (action === 'publish') {
      const words = wordCount(post.description + (post.content || ''));
      if (words < 50) {
        return NextResponse.json({ error: `Description too short (${words} words). Need at least 50 words for AdSense quality.` }, { status: 400 });
      }
      const updated = await updatePost(id, { status: 'published', publishedAt: new Date() });
      revalidatePath('/');
      revalidatePath(POST_TYPE_ROUTES[post.type]);
      revalidatePath(`${POST_TYPE_ROUTES[post.type]}/${post.slug}`);
      return NextResponse.json({ post: updated });
    }

    if (action === 'archive') {
      const updated = await updatePost(id, { status: 'archived' });
      return NextResponse.json({ post: updated });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
