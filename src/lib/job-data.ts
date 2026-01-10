// Optimized job data - only essential information for faster loading
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  logo: string;
  featured: boolean;
  skills: string[];
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  companyInfo: {
    name: string;
    industry: string;
    size: string;
    founded: string;
    description: string;
    website: string;
    headquarters: string;
  };
  eligibility: string[];
  applicationProcess: string[];
}

// Individual job data for faster loading
const job1: Job = {
  id: '1',
  title: 'Senior Frontend Developer',
  company: 'TechCorp Solutions',
  location: 'San Francisco, CA',
  type: 'Full Time',
  salary: '$120-150k',
  posted: '2 days ago',
  logo: '🏢',
  featured: true,
  skills: ['React', 'TypeScript', 'Node.js', 'AWS', 'GraphQL'],
  description: 'We are looking for a talented Senior Frontend Developer to join our growing team. You will be responsible for building and maintaining our web applications using modern JavaScript frameworks.',
  requirements: [
    '5+ years of experience in frontend development',
    'Strong proficiency in React and TypeScript',
    'Experience with modern CSS and responsive design',
    'Familiarity with RESTful APIs and GraphQL',
    'Excellent problem-solving skills'
  ],
  responsibilities: [
    'Develop and maintain responsive web applications',
    'Collaborate with design and backend teams',
    'Write clean, maintainable, and well-documented code',
    'Participate in code reviews and architectural decisions',
    'Optimize applications for maximum speed and scalability'
  ],
  benefits: [
    'Competitive salary and equity package',
    'Comprehensive health, dental, and vision insurance',
    '401(k) retirement plan with company matching',
    'Flexible work arrangements',
    'Professional development opportunities',
    'Modern office space with great amenities'
  ],
  companyInfo: {
    name: 'TechCorp Solutions',
    industry: 'Technology',
    size: '500-1000 employees',
    founded: '2015',
    description: 'TechCorp Solutions is a leading technology company specializing in innovative software solutions for enterprise clients.',
    website: 'https://techcorp.com',
    headquarters: 'San Francisco, CA'
  },
  eligibility: [
    'Must be authorized to work in the United States',
    'Bachelor\'s degree in Computer Science or related field',
    'Willing to work in hybrid environment',
    'Strong communication skills'
  ],
  applicationProcess: [
    'Initial application review',
    'Technical assessment',
    'Interview with hiring manager',
    'Technical interview with team',
    'Final interview with VP of Engineering',
    'Offer and onboarding'
  ]
};

const job2: Job = {
  id: '2',
  title: 'Product Manager',
  company: 'StartupHub',
  location: 'New York, NY',
  type: 'Full Time',
  salary: '$90-120k',
  posted: '1 week ago',
  logo: '🚀',
  featured: true,
  skills: ['Product Strategy', 'Agile', 'Analytics', 'Roadmapping'],
  description: 'We are seeking an experienced Product Manager to lead our product development initiatives and drive our product vision forward.',
  requirements: [
    '3+ years of product management experience',
    'Experience with agile development methodologies',
    'Strong analytical and problem-solving skills',
    'Excellent communication and presentation skills',
    'Data-driven decision making approach'
  ],
  responsibilities: [
    'Define product vision and strategy',
    'Create and maintain product roadmaps',
    'Work closely with engineering, design, and marketing teams',
    'Analyze user feedback and market trends',
    'Monitor product performance and KPIs'
  ],
  benefits: [
    'Competitive salary and equity package',
    'Stock options and profit sharing',
    'Flexible work arrangements',
    'Professional development budget',
    'Health, dental, and vision insurance',
    'Casual dress code and great company culture'
  ],
  companyInfo: {
    name: 'StartupHub',
    industry: 'Technology',
    size: '50-100 employees',
    founded: '2020',
    description: 'StartupHub is a fast-growing startup focused on building innovative solutions for the modern workplace.',
    website: 'https://startuphub.com',
    headquarters: 'New York, NY'
  },
  eligibility: [
    'Bachelor\'s degree or equivalent experience',
    'Must be authorized to work in the United States',
    'Strong communication skills',
    'Ability to work in fast-paced environment'
  ],
  applicationProcess: [
    'Resume screening',
    'Phone interview',
    'Technical assessment',
    'On-site interviews',
    'Reference checks',
    'Offer and onboarding'
  ]
};

const job3: Job = {
  id: '3',
  title: 'UX Designer',
  company: 'Design Studio Pro',
  location: 'Remote',
  type: 'Full Time',
  salary: '$80-100k',
  posted: '3 days ago',
  logo: '🎨',
  featured: true,
  skills: ['Figma', 'Adobe XD', 'Prototyping', 'UI/UX'],
  description: 'We are looking for a creative UX Designer to join our design team and help create amazing user experiences for our clients.',
  requirements: [
    '3+ years of UX design experience',
    'Proficiency in Figma and Adobe XD',
    'Strong portfolio demonstrating design process',
    'Experience with user research and testing',
    'Understanding of responsive design principles'
  ],
  responsibilities: [
    'Create wireframes, prototypes, and high-fidelity designs',
    'Conduct user research and usability testing',
    'Collaborate with product managers and developers',
    'Design and maintain design systems',
    'Present design concepts to stakeholders'
  ],
  benefits: [
    'Fully remote work environment',
    'Flexible working hours',
    'Annual design conference budget',
    'Latest design tools and software',
    'Collaborative and creative team culture',
    'Professional growth opportunities'
  ],
  companyInfo: {
    name: 'Design Studio Pro',
    industry: 'Design & Creative',
    size: '50-100 employees',
    founded: '2018',
    description: 'Design Studio Pro is a boutique design agency specializing in user experience design for digital products.',
    website: 'https://designstudiopro.com',
    headquarters: 'Remote'
  },
  eligibility: [
    'Portfolio with relevant UX design work',
    'Bachelor\'s degree in Design or related field',
    'Strong communication and presentation skills',
    'Ability to work in a collaborative environment'
  ],
  applicationProcess: [
    'Portfolio review',
    'Design challenge',
    'Video interview',
    'Team collaboration exercise',
    'Final interview with design director',
    'Offer and onboarding'
  ]
};

const job4: Job = {
  id: '4',
  title: 'Data Analyst',
  company: 'FinanceFlow',
  location: 'Chicago, IL',
  type: 'Full Time',
  salary: '$70-90k',
  posted: '5 days ago',
  logo: '💰',
  featured: true,
  skills: ['Python', 'SQL', 'Tableau', 'Excel'],
  description: 'Join our data analytics team to help drive business decisions through data insights and visualization.',
  requirements: [
    '2+ years of data analysis experience',
    'Strong SQL and Python skills',
    'Experience with data visualization tools',
    'Analytical mindset and attention to detail',
    'Knowledge of statistical analysis methods'
  ],
  responsibilities: [
    'Analyze complex datasets to identify trends and patterns',
    'Create dashboards and reports for stakeholders',
    'Develop and maintain data pipelines',
    'Collaborate with business teams to understand requirements',
    'Present findings to non-technical audiences'
  ],
  benefits: [
    'Competitive salary with performance bonuses',
    'Comprehensive health and dental insurance',
    '401(k) plan with company matching',
    'Professional development opportunities',
    'Modern office in downtown Chicago',
    'Casual dress code and flexible hours'
  ],
  companyInfo: {
    name: 'FinanceFlow',
    industry: 'Financial Technology',
    size: '200-500 employees',
    founded: '2016',
    description: 'FinanceFlow is a fintech company that provides innovative financial solutions for businesses and consumers.',
    website: 'https://financeflow.com',
    headquarters: 'Chicago, IL'
  },
  eligibility: [
    'Bachelor\'s degree in Data Science, Statistics, or related field',
    'Experience with financial data preferred',
    'Strong analytical and problem-solving skills',
    'US citizenship or work authorization'
  ],
  applicationProcess: [
    'Online application',
    'Technical assessment',
    'Phone screen',
    'Case study presentation',
    'On-site interviews',
    'Background check and offer'
  ]
};

const job5: Job = {
  id: '5',
  title: 'Marketing Manager',
  company: 'Digital Agency Pro',
  location: 'Los Angeles, CA',
  type: 'Full Time',
  salary: '$85-110k',
  posted: '1 week ago',
  logo: '📱',
  featured: true,
  skills: ['Digital Marketing', 'SEO', 'Content Strategy'],
  description: 'We are seeking an experienced Marketing Manager to lead our digital marketing efforts and drive brand growth.',
  requirements: [
    '4+ years of digital marketing experience',
    'Proven track record in campaign management',
    'Strong understanding of SEO and content marketing',
    'Experience with marketing analytics tools',
    'Excellent communication and leadership skills'
  ],
  responsibilities: [
    'Develop and execute comprehensive marketing strategies',
    'Manage digital marketing campaigns across multiple channels',
    'Analyze campaign performance and optimize ROI',
    'Lead and mentor the marketing team',
    'Collaborate with sales and product teams'
  ],
  benefits: [
    'Competitive salary with performance bonuses',
    'Stock options and profit sharing',
    'Flexible work arrangements',
    'Marketing conference and training budget',
    'Health, dental, and vision insurance',
    'Dynamic and creative work environment'
  ],
  companyInfo: {
    name: 'Digital Agency Pro',
    industry: 'Digital Marketing',
    size: '100-200 employees',
    founded: '2017',
    description: 'Digital Agency Pro is a full-service digital marketing agency helping brands grow their online presence.',
    website: 'https://digitalagencypro.com',
    headquarters: 'Los Angeles, CA'
  },
  eligibility: [
    'Bachelor\'s degree in Marketing or related field',
    'Experience managing marketing teams',
    'Strong understanding of digital marketing trends',
    'Creative thinking and strategic mindset'
  ],
  applicationProcess: [
    'Resume and portfolio review',
    'Marketing strategy presentation',
    'Team interview',
    'Executive interview',
    'Reference checks',
    'Offer and onboarding'
  ]
};

const job6: Job = {
  id: '6',
  title: 'Backend Engineer',
  company: 'CloudTech Systems',
  location: 'Seattle, WA',
  type: 'Full Time',
  salary: '$110-140k',
  posted: '4 days ago',
  logo: '☁️',
  featured: true,
  skills: ['Java', 'Spring Boot', 'Microservices', 'Docker'],
  description: 'We are looking for a skilled Backend Engineer to join our cloud infrastructure team and build scalable systems.',
  requirements: [
    '4+ years of backend development experience',
    'Strong proficiency in Java and Spring Boot',
    'Experience with microservices architecture',
    'Knowledge of cloud platforms (AWS, Azure, GCP)',
    'Understanding of containerization and DevOps practices'
  ],
  responsibilities: [
    'Design and develop scalable backend systems',
    'Implement microservices architecture',
    'Work with cloud infrastructure and deployment',
    'Optimize system performance and reliability',
    'Collaborate with frontend and DevOps teams'
  ],
  benefits: [
    'Top-tier salary and equity package',
    'Comprehensive benefits including health and dental',
    '401(k) with generous company matching',
    'Flexible work schedule and remote options',
    'Cutting-edge technology stack',
    'Professional development and training opportunities'
  ],
  companyInfo: {
    name: 'CloudTech Systems',
    industry: 'Cloud Computing',
    size: '300-500 employees',
    founded: '2015',
    description: 'CloudTech Systems is a leading provider of cloud infrastructure solutions for enterprise clients.',
    website: 'https://cloudtechsystems.com',
    headquarters: 'Seattle, WA'
  },
  eligibility: [
    'Bachelor\'s degree in Computer Science or related field',
    'Experience with enterprise-level applications',
    'Strong problem-solving and analytical skills',
    'US citizenship or permanent residency'
  ],
  applicationProcess: [
    'Technical screening',
    'Coding challenge',
    'System design interview',
    'Team interviews',
    'Technical deep dive',
    'Offer and background check'
  ]
};

// Optimized data access function - only loads the requested job
export async function getJobById(id: string): Promise<Job | null> {
  switch (id) {
    case '1': return job1;
    case '2': return job2;
    case '3': return job3;
    case '4': return job4;
    case '5': return job5;
    case '6': return job6;
    default: return null;
  }
}

// For listing pages - minimal data
export interface JobListItem {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  logo: string;
  featured: boolean;
  skills: string[];
}

export const jobListItems: JobListItem[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    type: 'Full Time',
    salary: '$120-150k',
    posted: '2 days ago',
    logo: '🏢',
    featured: true,
    skills: ['React', 'TypeScript', 'Node.js', 'AWS', 'GraphQL']
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'StartupHub',
    location: 'New York, NY',
    type: 'Full Time',
    salary: '$90-120k',
    posted: '1 week ago',
    logo: '🚀',
    featured: true,
    skills: ['Product Strategy', 'Agile', 'Analytics', 'Roadmapping']
  },
  {
    id: '3',
    title: 'UX Designer',
    company: 'Design Studio Pro',
    location: 'Remote',
    type: 'Full Time',
    salary: '$80-100k',
    posted: '3 days ago',
    logo: '🎨',
    featured: true,
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'UI/UX']
  },
  {
    id: '4',
    title: 'Data Analyst',
    company: 'FinanceFlow',
    location: 'Chicago, IL',
    type: 'Full Time',
    salary: '$70-90k',
    posted: '5 days ago',
    logo: '💰',
    featured: true,
    skills: ['Python', 'SQL', 'Tableau', 'Excel']
  },
  {
    id: '5',
    title: 'Marketing Manager',
    company: 'Digital Agency Pro',
    location: 'Los Angeles, CA',
    type: 'Full Time',
    salary: '$85-110k',
    posted: '1 week ago',
    logo: '📱',
    featured: true,
    skills: ['Digital Marketing', 'SEO', 'Content Strategy']
  },
  {
    id: '6',
    title: 'Backend Engineer',
    company: 'CloudTech Systems',
    location: 'Seattle, WA',
    type: 'Full Time',
    salary: '$110-140k',
    posted: '4 days ago',
    logo: '☁️',
    featured: true,
    skills: ['Java', 'Spring Boot', 'Microservices', 'Docker']
  }
];