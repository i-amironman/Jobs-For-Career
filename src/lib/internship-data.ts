// Optimized internship data
export interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  stipend: string;
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

// Individual internship data
const internship1: Internship = {
  id: '1',
  title: 'Frontend Development Intern',
  company: 'TechCorp Solutions',
  location: 'San Francisco, CA',
  type: 'Full Time',
  duration: '3 months',
  stipend: '$2000/month',
  posted: '1 day ago',
  logo: '🏢',
  featured: true,
  skills: ['React', 'TypeScript', 'CSS', 'JavaScript'],
  description: 'Join our frontend team to work on cutting-edge web applications using modern JavaScript frameworks.',
  requirements: [
    'Currently pursuing a degree in Computer Science or related field',
    'Basic knowledge of HTML, CSS, and JavaScript',
    'Experience with React is a plus',
    'Strong problem-solving skills',
    'Available for full-time internship'
  ],
  responsibilities: [
    'Assist in developing responsive web applications',
    'Collaborate with senior developers on feature implementation',
    'Participate in code reviews and team meetings',
    'Help maintain and improve existing codebase',
    'Contribute to UI/UX improvements'
  ],
  benefits: [
    'Hands-on experience with modern tech stack',
    'Mentorship from senior developers',
    'Potential for full-time offer',
    'Flexible working hours',
    'Modern office environment',
    'Networking opportunities'
  ],
  companyInfo: {
    name: 'TechCorp Solutions',
    industry: 'Technology',
    size: '500-1000 employees',
    founded: '2015',
    description: 'TechCorp Solutions is a leading technology company specializing in innovative software solutions.',
    website: 'https://techcorp.com',
    headquarters: 'San Francisco, CA'
  },
  eligibility: [
    'Must be currently enrolled in a university program',
    'Available for 3-month full-time internship',
    'Basic programming knowledge required',
    'Good communication skills'
  ],
  applicationProcess: [
    'Online application submission',
    'Technical assessment',
    'Video interview',
    'Team interview',
    'Offer and onboarding'
  ]
};

const internship2: Internship = {
  id: '2',
  title: 'Data Science Intern',
  company: 'DataDrive Analytics',
  location: 'New York, NY',
  type: 'Full Time',
  duration: '6 months',
  stipend: '$2500/month',
  posted: '3 days ago',
  logo: '📊',
  featured: true,
  skills: ['Python', 'Machine Learning', 'SQL', 'Data Analysis'],
  description: 'Work with our data science team to analyze complex datasets and build machine learning models.',
  requirements: [
    'Currently pursuing a degree in Data Science, Statistics, or related field',
    'Strong programming skills in Python',
    'Knowledge of machine learning concepts',
    'Experience with data visualization tools',
    'Analytical mindset'
  ],
  responsibilities: [
    'Analyze large datasets to extract insights',
    'Assist in building and evaluating ML models',
    'Create data visualizations and reports',
    'Collaborate with data engineering team',
    'Participate in research and development'
  ],
  benefits: [
    'Real-world data science experience',
    'Exposure to cutting-edge ML techniques',
    'Professional development opportunities',
    'Competitive stipend',
    'Potential for full-time conversion',
    'Great learning environment'
  ],
  companyInfo: {
    name: 'DataDrive Analytics',
    industry: 'Data Analytics',
    size: '100-200 employees',
    founded: '2018',
    description: 'DataDrive Analytics helps businesses make data-driven decisions through advanced analytics.',
    website: 'https://datadrive.com',
    headquarters: 'New York, NY'
  },
  eligibility: [
    'Must be enrolled in a graduate or undergraduate program',
    'Strong academic record',
    'Python programming experience',
    'Available for 6-month internship'
  ],
  applicationProcess: [
    'Resume and transcript review',
    'Technical coding challenge',
    'Data analysis case study',
    'Multiple rounds of interviews',
    'Final offer and onboarding'
  ]
};

const internship3: Internship = {
  id: '3',
  title: 'Product Design Intern',
  company: 'Creative Studios',
  location: 'Remote',
  type: 'Part Time',
  duration: '4 months',
  stipend: '$1500/month',
  posted: '1 week ago',
  logo: '🎨',
  featured: true,
  skills: ['Figma', 'UI/UX Design', 'Prototyping', 'User Research'],
  description: 'Join our design team to create beautiful and functional user experiences for our products.',
  requirements: [
    'Currently pursuing a degree in Design, HCI, or related field',
    'Proficiency in design tools like Figma or Adobe XD',
    'Strong portfolio demonstrating design skills',
    'Understanding of user-centered design principles',
    'Good communication skills'
  ],
  responsibilities: [
    'Create wireframes and high-fidelity designs',
    'Conduct user research and usability testing',
    'Collaborate with product managers and developers',
    'Design and maintain design systems',
    'Present design concepts to stakeholders'
  ],
  benefits: [
    'Remote work flexibility',
    'Portfolio-building opportunities',
    'Mentorship from senior designers',
    'Exposure to real product development',
    'Flexible working hours',
    'Creative and collaborative environment'
  ],
  companyInfo: {
    name: 'Creative Studios',
    industry: 'Design & Creative',
    size: '50-100 employees',
    founded: '2019',
    description: 'Creative Studios is a design agency focused on creating exceptional digital experiences.',
    website: 'https://creativestudios.com',
    headquarters: 'Remote'
  },
  eligibility: [
    'Must be currently enrolled in a design program',
    'Strong design portfolio required',
    'Experience with Figma or similar tools',
    'Available for part-time internship'
  ],
  applicationProcess: [
    'Portfolio review',
    'Design challenge',
    'Video interview',
    'Team collaboration exercise',
    'Offer and onboarding'
  ]
};

const internship4: Internship = {
  id: '4',
  title: 'Marketing Intern',
  company: 'Growth Marketing Co',
  location: 'Los Angeles, CA',
  type: 'Full Time',
  duration: '3 months',
  stipend: '$1800/month',
  posted: '4 days ago',
  logo: '📈',
  featured: true,
  skills: ['Digital Marketing', 'Social Media', 'Content Creation', 'Analytics'],
  description: 'Help drive our marketing initiatives and learn about growth strategies in a fast-paced environment.',
  requirements: [
    'Currently pursuing a degree in Marketing, Business, or related field',
    'Strong written and verbal communication skills',
    'Experience with social media platforms',
    'Creative thinking and problem-solving abilities',
    'Basic understanding of marketing principles'
  ],
  responsibilities: [
    'Assist in creating social media content',
    'Support digital marketing campaigns',
    'Analyze marketing metrics and prepare reports',
    'Contribute to content creation and copywriting',
    'Help with event planning and execution'
  ],
  benefits: [
    'Hands-on marketing experience',
    'Exposure to various marketing channels',
    'Professional development opportunities',
    'Creative and dynamic work environment',
    'Networking with industry professionals',
    'Potential for full-time role'
  ],
  companyInfo: {
    name: 'Growth Marketing Co',
    industry: 'Digital Marketing',
    size: '50-100 employees',
    founded: '2020',
    description: 'Growth Marketing Co specializes in helping startups and businesses accelerate their growth.',
    website: 'https://growthmarketing.com',
    headquarters: 'Los Angeles, CA'
  },
  eligibility: [
    'Must be enrolled in a university program',
    'Strong interest in marketing',
    'Creative and analytical mindset',
    'Available for full-time internship'
  ],
  applicationProcess: [
    'Application and resume review',
    'Marketing case study',
    'Interview with marketing team',
    'Final interview with management',
    'Offer and onboarding'
  ]
};

const internship5: Internship = {
  id: '5',
  title: 'Software Engineering Intern',
  company: 'CloudTech Systems',
  location: 'Seattle, WA',
  type: 'Full Time',
  duration: '12 weeks',
  stipend: '$3000/month',
  posted: '2 days ago',
  logo: '☁️',
  featured: true,
  skills: ['Java', 'Python', 'Cloud Computing', 'DevOps'],
  description: 'Join our engineering team to work on cloud infrastructure and scalable systems.',
  requirements: [
    'Currently pursuing a degree in Computer Science or Engineering',
    'Strong programming skills in Java or Python',
    'Understanding of cloud computing concepts',
    'Experience with version control systems',
    'Problem-solving abilities'
  ],
  responsibilities: [
    'Develop and maintain cloud-based applications',
    'Assist in system architecture design',
    'Participate in code reviews and testing',
    'Work with DevOps tools and practices',
    'Collaborate with senior engineers on projects'
  ],
  benefits: [
    'Exposure to cutting-edge cloud technologies',
    'Mentorship from experienced engineers',
    'Competitive compensation',
    'Potential for full-time employment',
    'Modern tech stack',
    'Great company culture'
  ],
  companyInfo: {
    name: 'CloudTech Systems',
    industry: 'Cloud Computing',
    size: '300-500 employees',
    founded: '2015',
    description: 'CloudTech Systems provides innovative cloud infrastructure solutions for enterprise clients.',
    website: 'https://cloudtechsystems.com',
    headquarters: 'Seattle, WA'
  },
  eligibility: [
    'Must be enrolled in a computer science program',
    'Strong academic performance',
    'Programming experience required',
    'Available for 12-week internship'
  ],
  applicationProcess: [
    'Online application',
    'Technical coding assessment',
    'System design interview',
    'Team interviews',
    'Offer and background check'
  ]
};

const internship6: Internship = {
  id: '6',
  title: 'Business Development Intern',
  company: 'StartupHub',
  location: 'New York, NY',
  type: 'Part Time',
  duration: '6 months',
  stipend: '$1600/month',
  posted: '5 days ago',
  logo: '🚀',
  featured: true,
  skills: ['Business Strategy', 'Market Research', 'Sales', 'Communication'],
  description: 'Learn about business development and help drive our growth initiatives in the startup ecosystem.',
  requirements: [
    'Currently pursuing a degree in Business, Economics, or related field',
    'Strong analytical and research skills',
    'Excellent communication and presentation abilities',
    'Interest in startups and technology',
    'Self-motivated and proactive'
  ],
  responsibilities: [
    'Conduct market research and analysis',
    'Assist in developing business strategies',
    'Support sales and partnership initiatives',
    'Prepare presentations and reports',
    'Network with potential clients and partners'
  ],
  benefits: [
    'Startup experience and exposure',
    'Business development skills training',
    'Networking opportunities',
    'Flexible work arrangements',
    'Potential for full-time role',
    'Dynamic and fast-paced environment'
  ],
  companyInfo: {
    name: 'StartupHub',
    industry: 'Technology',
    size: '50-100 employees',
    founded: '2020',
    description: 'StartupHub is a fast-growing startup focused on building innovative solutions.',
    website: 'https://startuphub.com',
    headquarters: 'New York, NY'
  },
  eligibility: [
    'Must be enrolled in a business program',
    'Strong interest in startups',
    'Excellent communication skills',
    'Available for part-time internship'
  ],
  applicationProcess: [
    'Resume and cover letter review',
    'Business case study',
    'Multiple interview rounds',
    'Final interview with leadership',
    'Offer and onboarding'
  ]
};

// Optimized data access function
export async function getInternshipById(id: string): Promise<Internship | null> {
  switch (id) {
    case '1': return internship1;
    case '2': return internship2;
    case '3': return internship3;
    case '4': return internship4;
    case '5': return internship5;
    case '6': return internship6;
    default: return null;
  }
}

// For listing pages - minimal data
export interface InternshipListItem {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  stipend: string;
  posted: string;
  logo: string;
  featured: boolean;
  skills: string[];
}

export const internshipListItems: InternshipListItem[] = [
  {
    id: '1',
    title: 'Frontend Development Intern',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    type: 'Full Time',
    duration: '3 months',
    stipend: '$2000/month',
    posted: '1 day ago',
    logo: '🏢',
    featured: true,
    skills: ['React', 'TypeScript', 'CSS', 'JavaScript']
  },
  {
    id: '2',
    title: 'Data Science Intern',
    company: 'DataDrive Analytics',
    location: 'New York, NY',
    type: 'Full Time',
    duration: '6 months',
    stipend: '$2500/month',
    posted: '3 days ago',
    logo: '📊',
    featured: true,
    skills: ['Python', 'Machine Learning', 'SQL', 'Data Analysis']
  },
  {
    id: '3',
    title: 'Product Design Intern',
    company: 'Creative Studios',
    location: 'Remote',
    type: 'Part Time',
    duration: '4 months',
    stipend: '$1500/month',
    posted: '1 week ago',
    logo: '🎨',
    featured: true,
    skills: ['Figma', 'UI/UX Design', 'Prototyping', 'User Research']
  },
  {
    id: '4',
    title: 'Marketing Intern',
    company: 'Growth Marketing Co',
    location: 'Los Angeles, CA',
    type: 'Full Time',
    duration: '3 months',
    stipend: '$1800/month',
    posted: '4 days ago',
    logo: '📈',
    featured: true,
    skills: ['Digital Marketing', 'Social Media', 'Content Creation', 'Analytics']
  },
  {
    id: '5',
    title: 'Software Engineering Intern',
    company: 'CloudTech Systems',
    location: 'Seattle, WA',
    type: 'Full Time',
    duration: '12 weeks',
    stipend: '$3000/month',
    posted: '2 days ago',
    logo: '☁️',
    featured: true,
    skills: ['Java', 'Python', 'Cloud Computing', 'DevOps']
  },
  {
    id: '6',
    title: 'Business Development Intern',
    company: 'StartupHub',
    location: 'New York, NY',
    type: 'Part Time',
    duration: '6 months',
    stipend: '$1600/month',
    posted: '5 days ago',
    logo: '🚀',
    featured: true,
    skills: ['Business Strategy', 'Market Research', 'Sales', 'Communication']
  }
];