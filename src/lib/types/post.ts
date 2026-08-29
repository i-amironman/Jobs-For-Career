export type PostType =
  | 'job'
  | 'internship'
  | 'scholarship'
  | 'govt-job'
  | 'competition'
  | 'mock-test'
  | 'mock-interview'
  | 'mentorship'
  | 'prep-resource';

export type PostStatus = 'draft' | 'approved' | 'published' | 'archived';

export interface OrgInfo {
  name: string;
  industry?: string;
  size?: string;
  founded?: string;
  description?: string;
  website?: string;
  headquarters?: string;
  department?: string;
  type?: string;
}

export interface PostDocument {
  _id?: string;
  type: PostType;
  status: PostStatus;
  slug: string;
  title: string;
  description: string;
  organization: string;
  country: string;
  region?: string;
  locale: string;
  location: string;
  workType: string;
  compensation?: string;
  fee?: string;
  amount?: string;
  deadline?: string;
  skills: string[];
  tags: string[];
  logo: string;
  logoUrl?: string;
  bannerUrl?: string;
  applyUrl?: string;
  featured: boolean;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  eligibility: string[];
  applicationProcess: string[];
  orgInfo?: OrgInfo;
  content?: string;
  seo?: { title?: string; description?: string; keywords?: string[] };
  legacyId?: string;
  publishedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export const POST_TYPE_LABELS: Record<PostType, string> = {
  job: 'Job',
  internship: 'Internship',
  scholarship: 'Scholarship',
  'govt-job': 'Govt Job',
  competition: 'Competition',
  'mock-test': 'Mock Test',
  'mock-interview': 'Mock Interview',
  mentorship: 'Mentorship',
  'prep-resource': 'Prep Resource',
};

export const POST_TYPE_ROUTES: Record<PostType, string> = {
  job: '/jobs',
  internship: '/internships',
  scholarship: '/scholarships',
  'govt-job': '/govt-jobs',
  competition: '/competitions',
  'mock-test': '/mock-tests',
  'mock-interview': '/mock-interview',
  mentorship: '/mentorship',
  'prep-resource': '/prep-zone',
};

export function getPostRoute(type: PostType, slug: string): string {
  return `${POST_TYPE_ROUTES[type]}/${slug}`;
}
