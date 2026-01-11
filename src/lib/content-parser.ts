import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ContentPost {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  publishDate: string;
  lastUpdated: string;
  category: string;
  content: string;
  excerpt: string;
}

export function parseContentFiles(category: string): ContentPost[] {
  const contentPath = path.join(process.cwd(), 'content', category);
  
  if (!fs.existsSync(contentPath)) {
    return [];
  }

  const files = fs.readdirSync(contentPath).filter(file => file.endsWith('.md'));
  
  return files.map(file => {
    const filePath = path.join(contentPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    
    return {
      slug: file.replace('.md', ''),
      title: data.title || '',
      description: data.description || '',
      keywords: data.keywords || [],
      publishDate: data.publishDate || '',
      lastUpdated: data.lastUpdated || data.publishDate || '',
      category: data.category || category,
      content,
      excerpt: content.slice(0, 150) + '...'
    };
  });
}