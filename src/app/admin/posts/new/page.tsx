import PostForm from '@/components/admin/post-form';
import type { PostType } from '@/lib/types/post';

export default async function NewPostPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  return <PostForm initialType={type as PostType | undefined} />;
}
