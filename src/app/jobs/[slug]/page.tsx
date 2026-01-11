import { notFound } from 'next/navigation';
import { parseContentFiles } from '@/lib/content-parser';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const posts = parseContentFiles('jobs');
  const post = posts.find(p => p.slug === slug);
  
  if (!post) return { title: 'Job Not Found' };

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords.join(', '),
    openGraph: {
      title: post.title,
      description: post.description,
    },
  };
}

export default async function JobPost({ params }: PageProps) {
  const { slug } = await params;
  const posts = parseContentFiles('jobs');
  const post = posts.find(p => p.slug === slug);
  
  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="text-muted-foreground">
              Published: {new Date(post.publishDate).toLocaleDateString()}
              {post.lastUpdated !== post.publishDate && (
                <span> • Updated: {new Date(post.lastUpdated).toLocaleDateString()}</span>
              )}
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
          </div>
        </article>
      </div>
    </div>
  );
}