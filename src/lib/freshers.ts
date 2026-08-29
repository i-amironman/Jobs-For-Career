import type { PostDocument } from '@/lib/types/post';
import type { ListingFilterConfig } from '@/lib/listing-filter-config';
import {
  BATCH_YEARS,
  IN_CITIES,
  JOB_CATEGORIES,
  WORK_TYPES,
} from '@/lib/listing-filter-config';

const FRESHER_KEYWORDS = [
  'fresher',
  'fresh graduate',
  'fresh graduates',
  'entry level',
  'entry-level',
  'graduate',
  'graduates',
  'campus',
  'trainee',
  'intern',
  '0-1 year',
  '0 - 1',
  'recent graduate',
];

const SENIOR_TITLE = /\b(senior|sr\.?|lead|principal|staff|director|head of|vp |vice president|architect)\b/i;

function haystack(post: PostDocument): string {
  return [
    post.title,
    post.description,
    post.organization,
    post.workType,
    ...post.skills,
    ...post.tags,
    ...post.eligibility,
    ...post.requirements,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

export function isFresherPost(post: PostDocument): boolean {
  if (post.type === 'internship') return true;

  if (post.type !== 'job') return false;

  const text = haystack(post);
  if (FRESHER_KEYWORDS.some((k) => text.includes(k))) return true;
  if (SENIOR_TITLE.test(post.title)) return false;

  return true;
}

export function filterFreshersPosts(posts: PostDocument[]): PostDocument[] {
  return posts.filter(isFresherPost);
}

export function sortPostsByDate(posts: PostDocument[]): PostDocument[] {
  return [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime(),
  );
}

export function getFreshersFilterConfig(): ListingFilterConfig {
  return {
    searchPlaceholder: 'Search fresher jobs, internships...',
    sortOptions: [
      { label: 'Most Recent', value: 'newest' },
      { label: 'Salary: High to Low', value: 'salary-desc' },
      { label: 'Salary: Low to High', value: 'salary-asc' },
    ],
    filters: [
      {
        id: 'opportunityType',
        label: 'Type',
        options: [
          { label: 'Jobs', value: 'job' },
          { label: 'Internships', value: 'internship' },
        ],
      },
      { id: 'category', label: 'Category', options: JOB_CATEGORIES },
      { id: 'workType', label: 'Work Type', options: WORK_TYPES },
      { id: 'batchYear', label: 'Batch', options: BATCH_YEARS },
      { id: 'location', label: 'Location', options: IN_CITIES, mergePostLocations: true },
    ],
  };
}

// ponytail: assert-based self-check
if (process.env.NODE_ENV !== 'production') {
  const job: PostDocument = {
    type: 'job',
    status: 'published',
    slug: 'senior-dev',
    title: 'Senior Developer',
    description: '5+ years',
    organization: 'Co',
    country: 'IN',
    locale: 'en',
    location: 'Remote',
    workType: 'Full Time',
    skills: [],
    tags: [],
    logo: 'x',
    featured: false,
    requirements: [],
    responsibilities: [],
    benefits: [],
    eligibility: [],
    applicationProcess: [],
  };
  console.assert(!isFresherPost(job), 'freshers: senior job excluded');
  console.assert(isFresherPost({ ...job, type: 'internship', title: 'SWE Intern' }), 'freshers: internship included');
}
