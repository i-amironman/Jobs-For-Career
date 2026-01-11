// Optimized scholarship data
export interface Scholarship {
  id: string;
  title: string;
  provider: string;
  location: string;
  amount: string;
  deadline: string;
  logo: string;
  featured: boolean;
  field: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  providerInfo: {
    name: string;
    type: string;
    founded: string;
    description: string;
    website: string;
    headquarters: string;
  };
  eligibility: string[];
  applicationProcess: string[];
}

// Individual scholarship data
const scholarship1: Scholarship = {
  id: '1',
  title: 'STEM Excellence Scholarship',
  provider: 'National Science Foundation',
  location: 'United States',
  amount: '$10,000/year',
  deadline: 'March 15, 2024',
  logo: '🔬',
  featured: true,
  field: 'Science, Technology, Engineering, Math',
  description: 'The STEM Excellence Scholarship recognizes outstanding students pursuing degrees in science, technology, engineering, and mathematics fields.',
  requirements: [
    'Minimum 3.5 GPA in major field',
    'Full-time enrollment in accredited institution',
    'US citizen or permanent resident',
    'Demonstrated academic excellence',
    'Strong research or project experience'
  ],
  responsibilities: [
    'Maintain academic excellence',
    'Participate in research activities',
    'Present at academic conferences',
    'Mentor younger students',
    'Complete annual progress reports'
  ],
  benefits: [
    '$10,000 per year renewable',
    'Research opportunities',
    'Conference travel funding',
    'Professional development',
    'Network with STEM professionals',
    'Academic recognition'
  ],
  providerInfo: {
    name: 'National Science Foundation',
    type: 'Government Agency',
    founded: '1950',
    description: 'NSF is an independent federal agency that supports fundamental research and education in non-medical fields of science and engineering.',
    website: 'https://nsf.gov',
    headquarters: 'Alexandria, VA'
  },
  eligibility: [
    'U.S. citizen or permanent resident',
    'Enrolled in accredited institution',
    'Minimum 3.5 GPA',
    'STEM major or related field',
    'Demonstrated financial need'
  ],
  applicationProcess: [
    'Online application',
    'Academic transcript submission',
    'Letters of recommendation',
    'Personal statement',
    'Review and selection',
    'Award notification'
  ]
};

const scholarship2: Scholarship = {
  id: '2',
  title: 'Future Leaders Scholarship',
  provider: 'TechCorp Foundation',
  location: 'Global',
  amount: '$25,000',
  deadline: 'April 1, 2024',
  logo: '🌟',
  featured: true,
  field: 'Computer Science, Business',
  description: 'The Future Leaders Scholarship supports talented students pursuing degrees in computer science and business fields with leadership potential.',
  requirements: [
    'Minimum 3.2 GPA',
    'Demonstrated leadership experience',
    'Strong academic record',
    'Community involvement',
    'Essay on leadership vision',
    'Three letters of recommendation'
  ],
  responsibilities: [
    'Maintain academic excellence',
    'Participate in leadership activities',
    'Complete leadership development program',
    'Mentor other students',
    'Attend leadership workshops'
  ],
  benefits: [
    '$25,000 one-time award',
    'Leadership training program',
    'Mentorship from industry leaders',
    'Networking opportunities',
    'Career development support',
    'Professional certification'
  ],
  providerInfo: {
    name: 'TechCorp Foundation',
    type: 'Corporate Foundation',
    founded: '2018',
    description: 'TechCorp Foundation supports educational initiatives and develops future technology leaders.',
    website: 'https://techcorp.foundation',
    headquarters: 'San Francisco, CA'
  },
  eligibility: [
    'Enrolled in degree program',
    'Minimum 3.2 GPA',
    'Leadership potential',
    'Strong communication skills',
    'Community service experience'
  ],
  applicationProcess: [
    'Online application',
    'Academic records',
    'Leadership essay',
    'Interview process',
    'Selection committee review',
    'Award notification'
  ]
};

const scholarship3: Scholarship = {
  id: '3',
  title: 'Community Impact Scholarship',
  provider: 'Education First Initiative',
  location: 'United States',
  amount: '$5,000',
  deadline: 'March 30, 2024',
  logo: '🎓',
  featured: true,
  field: 'Education, Social Work',
  description: 'The Community Impact Scholarship supports students dedicated to making positive changes in their communities through education and social work.',
  requirements: [
    'Minimum 3.2 GPA',
    'Demonstrated community service experience',
    'Enrolled in education or social work program',
    'Personal statement on community impact goals',
    'Two letters of recommendation',
    'Official academic transcripts'
  ],
  responsibilities: [
    'Maintain academic excellence',
    'Participate in community service projects',
    'Submit annual progress reports',
    'Attend scholarship networking events',
    'Mentor other scholarship recipients'
  ],
  benefits: [
    '$5,000 annual award',
    'Mentorship from community leaders',
    'Professional development workshops',
    'Networking opportunities',
    'Community service project funding',
    'Leadership training programs'
  ],
  providerInfo: {
    name: 'Education First Initiative',
    type: 'Non-Profit Organization',
    founded: '2010',
    description: 'Education First Initiative is dedicated to supporting students who are committed to making a positive impact in their communities through education.',
    website: 'https://educationfirst.org',
    headquarters: 'Boston, MA'
  },
  eligibility: [
    'US citizen or permanent resident',
    'Enrolled in accredited institution',
    'Demonstrated financial need',
    'Community service experience',
    'Strong academic record'
  ],
  applicationProcess: [
    'Online application submission',
    'Essay on community impact',
    'Letters of recommendation',
    'Academic transcript review',
    'Interview with selection committee',
    'Award notification'
  ]
};

const scholarship4: Scholarship = {
  id: '4',
  title: 'Innovation Grant',
  provider: 'StartupHub Ventures',
  location: 'Remote',
  amount: '$15,000',
  deadline: 'April 15, 2024',
  logo: '🚀',
  featured: true,
  field: 'Entrepreneurship, Innovation',
  description: 'The Innovation Grant supports entrepreneurial students with innovative ideas and the drive to turn them into reality.',
  requirements: [
    'Minimum 3.0 GPA',
    'Innovative business idea or project',
    'Business plan or proposal',
    'Demonstrated entrepreneurial experience',
    'Technical skills relevant to project',
    'Presentation of project concept'
  ],
  responsibilities: [
    'Develop and implement the proposed project',
    'Regular progress updates to mentors',
    'Participate in entrepreneurship workshops',
    'Present project outcomes at demo day',
    'Mentor other aspiring entrepreneurs'
  ],
  benefits: [
    '$15,000 project funding',
    'Mentorship from successful entrepreneurs',
    'Access to startup incubator resources',
    'Legal and business consulting',
    'Networking with investors',
    'Demo day presentation opportunities'
  ],
  providerInfo: {
    name: 'StartupHub Ventures',
    type: 'Venture Capital',
    founded: '2018',
    description: 'StartupHub Ventures invests in early-stage startups and supports entrepreneurial talent through grants and mentorship.',
    website: 'https://startuphub.vc',
    headquarters: 'San Francisco, CA'
  },
  eligibility: [
    'Enrolled in accredited institution',
    'Innovative business concept',
    'Technical or business skills',
    'Strong presentation skills',
    'Commitment to project execution'
  ],
  applicationProcess: [
    'Online application',
    'Business plan submission',
    'Video pitch presentation',
    'Interview with investment committee',
    'Technical assessment',
    'Grant award and onboarding'
  ]
};

const scholarship5: Scholarship = {
  id: '5',
  title: 'Arts & Culture Scholarship',
  provider: 'Creative Arts Foundation',
  location: 'United States',
  amount: '$8,000',
  deadline: 'March 25, 2024',
  logo: '🎨',
  featured: true,
  field: 'Arts, Design, Music',
  description: 'The Arts & Culture Scholarship supports talented students pursuing careers in creative arts, design, and music.',
  requirements: [
    'Minimum 3.0 GPA',
    'Portfolio of artistic work',
    'Enrolled in arts, design, or music program',
    'Artist statement or personal essay',
    'Two letters of recommendation',
    'Academic transcripts'
  ],
  responsibilities: [
    'Maintain academic excellence',
    'Participate in art exhibitions or performances',
    'Submit annual portfolio updates',
    'Attend arts networking events',
    'Contribute to foundation community projects'
  ],
  benefits: [
    '$8,000 annual award',
    'Exhibition and performance opportunities',
    'Professional artist mentorship',
    'Art supplies and materials budget',
    'Studio space access',
    'Industry networking events'
  ],
  providerInfo: {
    name: 'Creative Arts Foundation',
    type: 'Arts Organization',
    founded: '2005',
    description: 'Creative Arts Foundation is dedicated to supporting emerging artists and fostering creativity in all forms of artistic expression.',
    website: 'https://creativearts.org',
    headquarters: 'New York, NY'
  },
  eligibility: [
    'US citizen or permanent resident',
    'Enrolled in accredited arts program',
    'Demonstrated artistic talent',
    'Strong portfolio of work',
    'Financial need consideration'
  ],
  applicationProcess: [
    'Online application',
    'Portfolio submission',
    'Artist statement',
    'Letters of recommendation',
    'Interview with arts committee',
    'Award notification'
  ]
};

const scholarship6: Scholarship = {
  id: '6',
  title: 'Global Health Scholarship',
  provider: 'World Health Organization',
  location: 'Global',
  amount: '$20,000',
  deadline: 'May 1, 2024',
  logo: '🏥',
  featured: true,
  field: 'Medicine, Public Health',
  description: 'The Global Health Scholarship supports students committed to improving healthcare outcomes worldwide through medical and public health initiatives.',
  requirements: [
    'Minimum 3.5 GPA',
    'Enrolled in medical or public health program',
    'Demonstrated commitment to global health',
    'Research or field experience preferred',
    'Strong academic record in science courses',
    'Personal statement on global health goals'
  ],
  responsibilities: [
    'Maintain academic excellence',
    'Participate in global health projects',
    'Submit annual research reports',
    'Attend WHO conferences and events',
    'Contribute to global health initiatives'
  ],
  benefits: [
    '$20,000 annual award',
    'WHO internship opportunities',
    'Global health research funding',
    'International conference travel grants',
    'Mentorship from health professionals',
    'Access to WHO resources and networks'
  ],
  providerInfo: {
    name: 'World Health Organization',
    type: 'International Organization',
    founded: '1948',
    description: 'The World Health Organization is a specialized agency of the United Nations responsible for international public health.',
    website: 'https://who.int',
    headquarters: 'Geneva, Switzerland'
  },
  eligibility: [
    'International students welcome',
    'Enrolled in accredited health program',
    'Strong academic background',
    'Commitment to global health',
    'Language proficiency requirements'
  ],
  applicationProcess: [
    'Online application',
    'Research proposal submission',
    'Academic transcript review',
    'Interview with WHO representatives',
    'Language assessment',
    'Scholarship award'
  ]
};

// Optimized data access function
export async function getScholarshipById(id: string): Promise<Scholarship | null> {
  switch (id) {
    case '1': return scholarship1;
    case '2': return scholarship2;
    case '3': return scholarship3;
    case '4': return scholarship4;
    case '5': return scholarship5;
    case '6': return scholarship6;
    default: return null;
  }
}

// For listing pages - minimal data
export interface ScholarshipListItem {
  id: string;
  title: string;
  provider: string;
  location: string;
  amount: string;
  deadline: string;
  logo: string;
  featured: boolean;
  field: string;
}

export const scholarshipListItems: ScholarshipListItem[] = [
  {
    id: '1',
    title: 'STEM Excellence Scholarship',
    provider: 'National Science Foundation',
    location: 'United States',
    amount: '$10,000/year',
    deadline: 'March 15, 2024',
    logo: '🔬',
    featured: true,
    field: 'Science, Technology, Engineering, Math'
  },
  {
    id: '2',
    title: 'Future Leaders Scholarship',
    provider: 'TechCorp Foundation',
    location: 'Global',
    amount: '$25,000',
    deadline: 'April 1, 2024',
    logo: '🌟',
    featured: true,
    field: 'Computer Science, Business'
  },
  {
    id: '3',
    title: 'Community Impact Scholarship',
    provider: 'Education First Initiative',
    location: 'United States',
    amount: '$5,000',
    deadline: 'March 30, 2024',
    logo: '🎓',
    featured: true,
    field: 'Education, Social Work'
  },
  {
    id: '4',
    title: 'Innovation Grant',
    provider: 'StartupHub Ventures',
    location: 'Remote',
    amount: '$15,000',
    deadline: 'April 15, 2024',
    logo: '🚀',
    featured: true,
    field: 'Entrepreneurship, Innovation'
  },
  {
    id: '5',
    title: 'Arts & Culture Scholarship',
    provider: 'Creative Arts Foundation',
    location: 'United States',
    amount: '$8,000',
    deadline: 'March 25, 2024',
    logo: '🎨',
    featured: true,
    field: 'Arts, Design, Music'
  },
  {
    id: '6',
    title: 'Global Health Scholarship',
    provider: 'World Health Organization',
    location: 'Global',
    amount: '$20,000',
    deadline: 'May 1, 2024',
    logo: '🏥',
    featured: true,
    field: 'Medicine, Public Health'
  }
];