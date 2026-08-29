import type { PostType } from '@/lib/types/post';

export interface FilterOption {
  label: string;
  value: string;
  /** Extra keywords matched in title, tags, skills, eligibility, description */
  keywords?: string[];
}

export interface ListingFilterDef {
  id: string;
  label: string;
  options: FilterOption[];
  /** Merge city names extracted from loaded posts */
  mergePostLocations?: boolean;
}

export interface ListingFilterConfig {
  searchPlaceholder: string;
  filters: ListingFilterDef[];
  sortOptions: { label: string; value: string }[];
}

export const BATCH_YEARS: FilterOption[] = ['2029', '2028', '2027', '2026', '2025', '2024', '2023', '2022'].map(
  (y) => ({ label: y, value: y, keywords: [y] }),
);

export const IN_CITIES: FilterOption[] = [
  'Bangalore',
  'Hyderabad',
  'Chennai',
  'Pune',
  'Mumbai',
  'Delhi',
  'Noida',
  'Gurgaon',
].map((c) => ({ label: c, value: c.toLowerCase(), keywords: [c.toLowerCase()] }));

export const WORK_TYPES: FilterOption[] = [
  { label: 'Full Time', value: 'full time', keywords: ['full time', 'full-time'] },
  { label: 'Part Time', value: 'part time', keywords: ['part time', 'part-time'] },
  { label: 'Contract', value: 'contract', keywords: ['contract'] },
  { label: 'Remote', value: 'remote', keywords: ['remote', 'work from home', 'wfh'] },
  { label: 'Freelance', value: 'freelance', keywords: ['freelance'] },
  { label: 'Hybrid', value: 'hybrid', keywords: ['hybrid'] },
];

export const JOB_CATEGORIES: FilterOption[] = [
  { label: 'IT/Software', value: 'it', keywords: ['software', 'developer', 'engineer', 'tech', 'programming', 'react', 'java', 'python'] },
  { label: 'Core Engineering', value: 'core', keywords: ['mechanical', 'civil', 'electrical', 'core engineering'] },
  { label: 'Banking & Finance', value: 'finance', keywords: ['finance', 'banking', 'accounting', 'investment'] },
  { label: 'BPO/Customer Support', value: 'bpo', keywords: ['bpo', 'customer support', 'call center'] },
  { label: 'Sales & Marketing', value: 'marketing', keywords: ['marketing', 'sales', 'digital marketing', 'seo', 'brand'] },
  { label: 'HR & Admin', value: 'hr', keywords: ['hr', 'human resources', 'recruitment', 'admin'] },
  { label: 'Design', value: 'design', keywords: ['design', 'ui', 'ux', 'figma', 'creative'] },
  { label: 'Healthcare & Pharma', value: 'healthcare', keywords: ['healthcare', 'pharma', 'medical', 'nursing'] },
];

const DEFAULT_SORT = [
  { label: 'Most Recent', value: 'newest' },
  { label: 'Salary: High to Low', value: 'salary-desc' },
  { label: 'Salary: Low to High', value: 'salary-asc' },
];

const CONFIG: Record<PostType, ListingFilterConfig> = {
  job: {
    searchPlaceholder: 'Search jobs, skills...',
    sortOptions: DEFAULT_SORT,
    filters: [
      {
        id: 'jobType',
        label: 'Job Type',
        options: [
          { label: 'Fresher', value: 'fresher', keywords: ['fresher', 'fresh graduate', 'entry level', 'graduate'] },
          { label: 'Internship', value: 'internship', keywords: ['intern', 'internship'] },
          { label: 'Experienced', value: 'experienced', keywords: ['experienced', 'senior', 'lead', 'manager'] },
        ],
      },
      { id: 'category', label: 'Category', options: JOB_CATEGORIES },
      { id: 'workType', label: 'Work Type', options: WORK_TYPES },
      { id: 'batchYear', label: 'Batch', options: BATCH_YEARS },
      { id: 'location', label: 'Location', options: IN_CITIES, mergePostLocations: true },
    ],
  },
  internship: {
    searchPlaceholder: 'Search internships, skills...',
    sortOptions: [
      { label: 'Most Recent', value: 'newest' },
      { label: 'Stipend: High to Low', value: 'salary-desc' },
      { label: 'Stipend: Low to High', value: 'salary-asc' },
    ],
    filters: [
      {
        id: 'duration',
        label: 'Duration',
        options: [
          { label: '1-3 months', value: '1-3', keywords: ['1 month', '2 month', '3 month'] },
          { label: '3-6 months', value: '3-6', keywords: ['3 month', '4 month', '5 month', '6 month'] },
          { label: '6+ months', value: '6+', keywords: ['6 month', 'long term'] },
        ],
      },
      { id: 'category', label: 'Category', options: JOB_CATEGORIES },
      { id: 'workType', label: 'Work Type', options: WORK_TYPES },
      { id: 'batchYear', label: 'Batch', options: BATCH_YEARS },
      { id: 'location', label: 'Location', options: IN_CITIES, mergePostLocations: true },
    ],
  },
  competition: {
    searchPlaceholder: 'Search competitions, hackathons...',
    sortOptions: [
      { label: 'Most Recent', value: 'newest' },
      { label: 'Prize: High to Low', value: 'salary-desc' },
      { label: 'Title A–Z', value: 'title' },
    ],
    filters: [
      {
        id: 'compType',
        label: 'Type',
        options: [
          { label: 'Hackathon', value: 'hackathon', keywords: ['hackathon', 'hack'] },
          { label: 'Case Study', value: 'case', keywords: ['case study', 'case'] },
          { label: 'Quiz', value: 'quiz', keywords: ['quiz', 'trivia'] },
          { label: 'Business Plan', value: 'bplan', keywords: ['business plan', 'startup'] },
        ],
      },
      {
        id: 'fee',
        label: 'Entry Fee',
        options: [
          { label: 'Free', value: 'free', keywords: ['free'] },
          { label: 'Paid', value: 'paid', keywords: ['fee', 'paid', '₹', '$'] },
        ],
      },
      { id: 'mode', label: 'Mode', options: WORK_TYPES.filter((w) => ['remote', 'hybrid'].includes(w.value) || w.value === 'full time') },
      { id: 'location', label: 'Location', options: [{ label: 'Online', value: 'online', keywords: ['online', 'virtual'] }, ...IN_CITIES], mergePostLocations: true },
    ],
  },
  scholarship: {
    searchPlaceholder: 'Search scholarships...',
    sortOptions: [
      { label: 'Most Recent', value: 'newest' },
      { label: 'Amount: High to Low', value: 'salary-desc' },
      { label: 'Title A–Z', value: 'title' },
    ],
    filters: [
      {
        id: 'level',
        label: 'Level',
        options: [
          { label: 'Undergraduate', value: 'ug', keywords: ['undergraduate', 'bachelor', 'b.tech', 'b.e'] },
          { label: 'Postgraduate', value: 'pg', keywords: ['postgraduate', 'master', 'mba', 'm.tech'] },
          { label: 'PhD', value: 'phd', keywords: ['phd', 'doctorate', 'research'] },
        ],
      },
      {
        id: 'field',
        label: 'Field',
        options: [
          { label: 'STEM', value: 'stem', keywords: ['stem', 'science', 'engineering', 'technology'] },
          { label: 'Merit', value: 'merit', keywords: ['merit', 'academic'] },
          { label: 'Women in Tech', value: 'women', keywords: ['women', 'girl', 'female'] },
          { label: 'Need-based', value: 'need', keywords: ['need', 'financial aid', 'economically'] },
        ],
      },
      { id: 'batchYear', label: 'Batch', options: BATCH_YEARS },
    ],
  },
  'govt-job': {
    searchPlaceholder: 'Search government jobs...',
    sortOptions: [
      { label: 'Most Recent', value: 'newest' },
      { label: 'Salary: High to Low', value: 'salary-desc' },
      { label: 'Title A–Z', value: 'title' },
    ],
    filters: [
      {
        id: 'department',
        label: 'Department',
        options: [
          { label: 'Administration', value: 'admin', keywords: ['administration', 'admin', 'clerical'] },
          { label: 'Engineering', value: 'engineering', keywords: ['engineering', 'technical'] },
          { label: 'Healthcare', value: 'healthcare', keywords: ['health', 'medical', 'nursing'] },
          { label: 'Security & Defence', value: 'security', keywords: ['security', 'defence', 'police', 'army'] },
        ],
      },
      {
        id: 'jobType',
        label: 'Job Type',
        options: [
          { label: 'Permanent', value: 'permanent', keywords: ['permanent', 'regular'] },
          { label: 'Contract', value: 'contract', keywords: ['contract', 'temporary'] },
        ],
      },
      { id: 'location', label: 'Location', options: IN_CITIES, mergePostLocations: true },
    ],
  },
  'mock-test': {
    searchPlaceholder: 'Search mock tests...',
    sortOptions: [
      { label: 'Most Recent', value: 'newest' },
      { label: 'Title A–Z', value: 'title' },
    ],
    filters: [
      {
        id: 'domain',
        label: 'Domain',
        options: [
          { label: 'Tech & Coding', value: 'tech', keywords: ['software', 'coding', 'dsa', 'engineering'] },
          { label: 'Product & PM', value: 'product', keywords: ['product', 'pm', 'roadmap'] },
          { label: 'Data & Analytics', value: 'data', keywords: ['data', 'analytics', 'statistics'] },
          { label: 'Aptitude', value: 'aptitude', keywords: ['aptitude', 'reasoning', 'quant'] },
        ],
      },
      {
        id: 'level',
        label: 'Level',
        options: [
          { label: 'Beginner', value: 'beginner', keywords: ['beginner', 'easy', 'fresher'] },
          { label: 'Intermediate', value: 'intermediate', keywords: ['intermediate', 'medium'] },
          { label: 'Advanced', value: 'advanced', keywords: ['advanced', 'hard', 'expert'] },
        ],
      },
      { id: 'mode', label: 'Mode', options: [{ label: 'Online', value: 'online', keywords: ['online'] }] },
    ],
  },
  'mock-interview': {
    searchPlaceholder: 'Search mock interviews...',
    sortOptions: [
      { label: 'Most Recent', value: 'newest' },
      { label: 'Title A–Z', value: 'title' },
    ],
    filters: [
      {
        id: 'interviewType',
        label: 'Interview Type',
        options: [
          { label: 'Technical', value: 'technical', keywords: ['technical', 'coding', 'system design'] },
          { label: 'Behavioral', value: 'behavioral', keywords: ['behavioral', 'hr', 'soft skills'] },
          { label: 'Product', value: 'product', keywords: ['product', 'case'] },
          { label: 'HR Round', value: 'hr', keywords: ['hr', 'human resources'] },
        ],
      },
      {
        id: 'role',
        label: 'Role',
        options: [
          { label: 'Software Engineer', value: 'swe', keywords: ['software', 'developer', 'engineer'] },
          { label: 'Data Scientist', value: 'ds', keywords: ['data scientist', 'ml', 'analytics'] },
          { label: 'Product Manager', value: 'pm', keywords: ['product manager', 'pm'] },
        ],
      },
      { id: 'mode', label: 'Mode', options: [{ label: 'Online / AI', value: 'online', keywords: ['online', 'ai', 'virtual'] }] },
    ],
  },
  mentorship: {
    searchPlaceholder: 'Search by skill, industry or company...',
    sortOptions: [
      { label: 'Most Recent', value: 'newest' },
      { label: 'Price: Low to High', value: 'salary-asc' },
      { label: 'Price: High to Low', value: 'salary-desc' },
    ],
    filters: [
      {
        id: 'topic',
        label: 'Topic',
        options: [
          { label: 'Career Guidance', value: 'career', keywords: ['career', 'guidance', 'planning'] },
          { label: 'Interview Prep', value: 'interview', keywords: ['interview', 'mock'] },
          { label: 'Resume Review', value: 'resume', keywords: ['resume', 'cv'] },
          { label: 'MBA Prep', value: 'mba', keywords: ['mba', 'management'] },
        ],
      },
      {
        id: 'format',
        label: 'Format',
        options: [
          { label: '1-on-1 Session', value: '1on1', keywords: ['1-on-1', 'one on one', 'session'] },
          { label: 'Group', value: 'group', keywords: ['group', 'cohort'] },
        ],
      },
      { id: 'mode', label: 'Mode', options: [{ label: 'Online', value: 'online', keywords: ['online', 'virtual'] }] },
    ],
  },
  'prep-resource': {
    searchPlaceholder: 'Search prep resources...',
    sortOptions: [
      { label: 'Most Recent', value: 'newest' },
      { label: 'Title A–Z', value: 'title' },
    ],
    filters: [
      {
        id: 'topic',
        label: 'Topic',
        options: [
          { label: 'Coding & DSA', value: 'coding', keywords: ['coding', 'dsa', 'algorithm'] },
          { label: 'Aptitude', value: 'aptitude', keywords: ['aptitude', 'reasoning'] },
          { label: 'Resume & Career', value: 'career', keywords: ['resume', 'career'] },
        ],
      },
      {
        id: 'format',
        label: 'Format',
        options: [
          { label: 'Self-paced', value: 'self', keywords: ['self-paced', 'self paced'] },
          { label: 'Live', value: 'live', keywords: ['live', 'webinar'] },
        ],
      },
    ],
  },
};

export function getListingFilterConfig(type: PostType): ListingFilterConfig {
  return CONFIG[type];
}

export type ListingKind = PostType | 'freshers';
