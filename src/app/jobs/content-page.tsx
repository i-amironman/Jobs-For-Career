import { parseContentFiles } from '@/lib/content-parser';
import Link from 'next/link';

export default function JobsPage() {
  const posts = parseContentFiles('jobs');
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Latest Job Opportunities</h1>
        
        <div className="grid gap-6">
          {posts.map(post => (
            <div key={post.slug} className="bg-card p-6 rounded-lg border">
              <Link href={`/jobs/${post.slug}`}>
                <h2 className="text-2xl font-semibold mb-2 hover:text-primary transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-muted-foreground mb-4">{post.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  {new Date(post.publishDate).toLocaleDateString()}
                </span>
                <Link 
                  href={`/jobs/${post.slug}`}
                  className="text-primary hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}