import { connectDB } from '@/lib/db';
import { PostModel } from '@/lib/models/post';
import type { PostDocument, PostStatus, PostType } from '@/lib/types/post';

function toPlain(doc: unknown): PostDocument {
  const d = doc as PostDocument & { __v?: number };
  const { __v, ...rest } = d;
  return { ...rest, _id: String(d._id) };
}

function countryFilter(country?: string) {
  if (!country || country === 'GLOBAL') return {};
  return { country };
}

export async function getPostBySlug(slug: string, country?: string): Promise<PostDocument | null> {
  await connectDB();
  const doc = await PostModel.findOne({ slug, status: 'published' }).lean();
  if (!doc) return null;
  const post = toPlain(doc);
  if (country && country !== 'GLOBAL' && post.country !== country) return null;
  return post;
}

export async function getPublishedPosts(
  type?: PostType,
  country?: string,
  limit = 500
): Promise<PostDocument[]> {
  await connectDB();
  const query: Record<string, unknown> = { status: 'published', ...countryFilter(country) };
  if (type) query.type = type;
  const docs = await PostModel.find(query).sort({ publishedAt: -1, createdAt: -1 }).limit(limit).lean();
  return docs.map((d) => toPlain(d));
}

export async function getFeaturedPosts(country?: string, limit = 8): Promise<PostDocument[]> {
  await connectDB();
  const docs = await PostModel.find({
    status: 'published',
    featured: true,
    ...countryFilter(country),
  })
    .sort({ publishedAt: -1 })
    .limit(limit)
    .lean();
  return docs.map((d) => toPlain(d));
}


export async function getPostBySlugAnyStatus(slug: string): Promise<PostDocument | null> {
  await connectDB();
  const doc = await PostModel.findOne({ slug }).lean();
  return doc ? toPlain(doc) : null;
}

export async function getPostById(id: string): Promise<PostDocument | null> {
  await connectDB();
  const doc = await PostModel.findById(id).lean();
  return doc ? toPlain(doc) : null;
}

export async function getAllPosts(status?: PostStatus): Promise<PostDocument[]> {
  await connectDB();
  const query = status ? { status } : {};
  const docs = await PostModel.find(query).sort({ updatedAt: -1 }).lean();
  return docs.map((d) => toPlain(d));
}

export async function getPostCounts(): Promise<{ draft: number; approved: number; published: number; archived: number }> {
  await connectDB();
  const results = await PostModel.aggregate([
    { $group: { _id: '$status', count: { $sum: 1 } } },
  ]);
  const counts = { draft: 0, approved: 0, published: 0, archived: 0 };
  for (const r of results) {
    const key = r._id as keyof typeof counts;
    if (key in counts) counts[key] = r.count;
  }
  return counts;
}

export async function createPost(data: Partial<PostDocument>): Promise<PostDocument> {
  await connectDB();
  const doc = await PostModel.create(data);
  return toPlain(doc.toObject());
}

export async function updatePost(id: string, data: Partial<PostDocument>): Promise<PostDocument | null> {
  await connectDB();
  const doc = await PostModel.findByIdAndUpdate(id, data, { new: true }).lean();
  return doc ? toPlain(doc) : null;
}

export async function deletePost(id: string): Promise<boolean> {
  await connectDB();
  const result = await PostModel.findByIdAndDelete(id);
  return !!result;
}

export async function countPublishedByType(type: PostType, country?: string): Promise<number> {
  await connectDB();
  return PostModel.countDocuments({ type, status: 'published', ...countryFilter(country) });
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function keywordOrClauses(keywords: string[]) {
  return keywords.flatMap((kw) => {
    const r = new RegExp(escapeRegex(kw), 'i');
    return [
      { title: r },
      { organization: r },
      { description: r },
      { location: r },
      { workType: r },
      { skills: r },
      { tags: r },
      { eligibility: r },
      { requirements: r },
    ];
  });
}

/** Server-side filter query — scales to large collections via MongoDB indexes. */
export async function queryPublishedPosts(params: {
  type: PostType;
  country?: string;
  search?: string;
  selected?: Record<string, string[]>;
  sort?: string;
  limit?: number;
}): Promise<PostDocument[]> {
  await connectDB();
  const { getListingFilterConfig } = await import('@/lib/listing-filter-config');
  const config = getListingFilterConfig(params.type);

  const query: Record<string, unknown> = {
    status: 'published',
    type: params.type,
    ...countryFilter(params.country),
  };
  const and: Record<string, unknown>[] = [];

  if (params.search?.trim()) {
    const r = new RegExp(escapeRegex(params.search.trim()), 'i');
    and.push({
      $or: [
        { title: r },
        { organization: r },
        { description: r },
        { skills: r },
        { tags: r },
        { location: r },
        { workType: r },
      ],
    });
  }

  for (const filterDef of config.filters) {
    const values = params.selected?.[filterDef.id];
    if (!values?.length) continue;
    const options = filterDef.options.filter((o) => values.includes(o.value));
    if (!options.length) continue;

    if (filterDef.id === 'workType') {
      and.push({
        $or: options.flatMap((o) =>
          (o.keywords ?? [o.value]).map((kw) => ({ workType: new RegExp(escapeRegex(kw), 'i') })),
        ),
      });
    } else if (filterDef.id === 'location') {
      and.push({
        $or: options.flatMap((o) =>
          (o.keywords ?? [o.value]).map((kw) => ({ location: new RegExp(escapeRegex(kw), 'i') })),
        ),
      });
    } else {
      and.push({
        $or: options.flatMap((o) => keywordOrClauses((o.keywords ?? [o.value]).map((k) => k.toLowerCase()))),
      });
    }
  }

  if (and.length) query.$and = and;

  let sortQuery: Record<string, 1 | -1> = { publishedAt: -1, createdAt: -1 };
  if (params.sort === 'title') sortQuery = { title: 1 };

  const docs = await PostModel.find(query)
    .sort(sortQuery)
    .limit(params.limit ?? 500)
    .lean();

  let posts = docs.map((d) => toPlain(d));

  if (params.sort === 'salary-desc' || params.sort === 'salary-asc') {
    const { buildPostFilterIndex } = await import('@/lib/apply-listing-filters');
    const idx = buildPostFilterIndex(posts);
    idx.sort((a, b) =>
      params.sort === 'salary-desc' ? b.compensation - a.compensation : a.compensation - b.compensation,
    );
    posts = idx.map((i) => i.post);
  }

  return posts;
}

export async function getFreshersPosts(country?: string, limit = 500): Promise<PostDocument[]> {
  const [jobs, internships] = await Promise.all([
    getPublishedPosts('job', country, limit),
    getPublishedPosts('internship', country, limit),
  ]);
  const { filterFreshersPosts, sortPostsByDate } = await import('@/lib/freshers');
  return sortPostsByDate(filterFreshersPosts([...jobs, ...internships]));
}

export async function countFreshersPosts(country?: string): Promise<number> {
  const posts = await getFreshersPosts(country);
  return posts.length;
}

export async function queryFreshersPosts(params: {
  country?: string;
  search?: string;
  selected?: Record<string, string[]>;
  sort?: string;
  limit?: number;
}): Promise<PostDocument[]> {
  const { getFreshersFilterConfig } = await import('@/lib/freshers');
  const { buildPostFilterIndex, filterIndexedPosts } = await import('@/lib/apply-listing-filters');
  const config = getFreshersFilterConfig();
  let posts = await getFreshersPosts(params.country, params.limit ?? 500);

  const index = buildPostFilterIndex(posts);
  posts = filterIndexedPosts(
    index,
    config,
    params.search ?? '',
    params.selected ?? {},
    params.sort ?? 'newest',
  );
  return posts;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 80);
}

export function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}
