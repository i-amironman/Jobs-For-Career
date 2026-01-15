// Optimized government job data
export interface GovtJob {
  id: string;
  title: string;
  agency: string;
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
  agencyInfo: {
    name: string;
    department: string;
    type: string;
    founded: string;
    description: string;
    website: string;
    headquarters: string;
  };
  eligibility: string[];
  applicationProcess: string[];
}

// Individual government job data
const govtJob1: GovtJob = {
  id: '1',
  title: 'IT Specialist',
  agency: 'Department of Defense',
  location: 'Washington, DC',
  type: 'Full Time',
  salary: '$65-85k',
  posted: '1 week ago',
  logo: '🏛️',
  featured: true,
  skills: ['Cybersecurity', 'Network Administration', 'System Security', 'Clearance'],
  description: 'Join the Department of Defense IT team to support critical national security infrastructure and systems.',
  requirements: [
    'US citizenship required',
    'Bachelor\'s degree in Computer Science or related field',
    'Ability to obtain and maintain security clearance',
    '3+ years of IT experience',
    'Knowledge of cybersecurity best practices'
  ],
  responsibilities: [
    'Maintain and secure government IT systems',
    'Monitor network security and respond to incidents',
    'Implement security policies and procedures',
    'Provide technical support to agency staff',
    'Ensure compliance with federal security standards'
  ],
  benefits: [
    'Comprehensive health and dental insurance',
    'Federal retirement benefits (FERS)',
    'Generous paid time off',
    'Job security and stability',
    'Professional development opportunities',
    'Student loan repayment programs'
  ],
  agencyInfo: {
    name: 'Department of Defense',
    department: 'Defense',
    type: 'Federal Agency',
    founded: '1947',
    description: 'The Department of Defense is the executive department of the U.S. federal government responsible for national security and military affairs.',
    website: 'https://defense.gov',
    headquarters: 'Washington, DC'
  },
  eligibility: [
    'US citizenship required',
    'Ability to obtain Top Secret clearance',
    'Background investigation required',
    'Drug-free workplace',
    'Physical fitness requirements'
  ],
  applicationProcess: [
    'Online application through USAJOBS',
    'Security clearance application',
    'Written examination',
    'Structured interview',
    'Background investigation',
    'Final job offer and onboarding'
  ]
};

const govtJob2: GovtJob = {
  id: '2',
  title: 'Program Analyst',
  agency: 'Environmental Protection Agency',
  location: 'Washington, DC',
  type: 'Full Time',
  salary: '$55-75k',
  posted: '3 days ago',
  logo: '🌿',
  featured: true,
  skills: ['Data Analysis', 'Policy Development', 'Research', 'Communication'],
  description: 'Work with EPA to analyze environmental policies and programs that protect human health and the environment.',
  requirements: [
    'US citizenship required',
    'Bachelor\'s degree in Public Policy, Environmental Science, or related field',
    'Strong analytical and research skills',
    'Excellent written and verbal communication',
    'Experience with data analysis preferred'
  ],
  responsibilities: [
    'Analyze environmental policies and regulations',
    'Conduct research on environmental issues',
    'Prepare reports and recommendations',
    'Coordinate with stakeholders and agencies',
    'Monitor program effectiveness'
  ],
  benefits: [
    'Federal health insurance options',
    'Retirement benefits (FERS)',
    'Flexible work arrangements',
    'Telework opportunities',
    'Professional development funding',
    'Student loan forgiveness programs'
  ],
  agencyInfo: {
    name: 'Environmental Protection Agency',
    department: 'Environmental',
    type: 'Federal Agency',
    founded: '1970',
    description: 'The EPA is an independent executive agency of the U.S. federal government tasked with environmental protection matters.',
    website: 'https://epa.gov',
    headquarters: 'Washington, DC'
  },
  eligibility: [
    'US citizenship required',
    'Background investigation',
    'Drug-free workplace',
    'Environmental compliance knowledge',
    'Strong analytical skills'
  ],
  applicationProcess: [
    'USAJOBS application',
    'Resume and cover letter review',
    'Written assessment',
    'Panel interview',
    'Background check',
    'Job offer and security clearance'
  ]
};

const govtJob3: GovtJob = {
  id: '3',
  title: 'Environmental Engineer',
  agency: 'Department of the Interior',
  location: 'Denver, CO',
  type: 'Full Time',
  salary: '$70-90k',
  posted: '5 days ago',
  logo: '🏞️',
  featured: true,
  skills: ['Environmental Engineering', 'GIS', 'Water Resources', 'Regulatory Compliance'],
  description: 'Join the Department of Interior to work on environmental engineering projects that protect our natural resources.',
  requirements: [
    'US citizenship required',
    'Bachelor\'s degree in Environmental Engineering or related field',
    'Professional Engineer (PE) license preferred',
    'Experience with environmental regulations',
    'Knowledge of environmental impact assessment'
  ],
  responsibilities: [
    'Design and oversee environmental remediation projects',
    'Conduct environmental impact assessments',
    'Ensure compliance with environmental laws',
    'Monitor environmental quality',
    'Develop conservation and restoration plans'
  ],
  benefits: [
    'Federal employee benefits package',
    'Retirement and pension plans',
    'Health and wellness programs',
    'Work-life balance initiatives',
    'Outdoor recreation opportunities',
    'Professional development funding'
  ],
  agencyInfo: {
    name: 'Department of the Interior',
    department: 'Interior',
    type: 'Federal Agency',
    founded: '1849',
    description: 'The Department of Interior manages and conserves most federal lands and natural resources.',
    website: 'https://doi.gov',
    headquarters: 'Washington, DC'
  },
  eligibility: [
    'US citizenship required',
    'Professional engineering license',
    'Background investigation',
    'Physical fitness for field work',
    'Environmental compliance knowledge'
  ],
  applicationProcess: [
    'Online application through USAJOBS',
    'License verification',
    'Technical assessment',
    'Interview with engineering team',
    'Background check',
    'Job offer and onboarding'
  ]
};

const govtJob4: GovtJob = {
  id: '4',
  title: 'HR Specialist',
  agency: 'Social Security Administration',
  location: 'Baltimore, MD',
  type: 'Full Time',
  salary: '$50-70k',
  posted: '1 week ago',
  logo: '🏛️',
  featured: true,
  skills: ['Human Resources', 'Benefits Administration', 'Recruitment', 'Policy Implementation'],
  description: 'Join the SSA HR team to support the administration of social security programs and services.',
  requirements: [
    'US citizenship required',
    'Bachelor\'s degree in Human Resources or related field',
    'Experience with HRIS systems',
    'Knowledge of federal HR policies',
    'Strong interpersonal skills'
  ],
  responsibilities: [
    'Manage employee recruitment and selection',
    'Administer benefits and compensation programs',
    'Handle employee relations issues',
    'Ensure compliance with federal HR regulations',
    'Provide HR support to agency staff'
  ],
  benefits: [
    'Comprehensive federal benefits',
    'Retirement and pension plans',
    'Health insurance options',
    'Job security and advancement',
    'Training and development programs',
    'Student loan repayment assistance'
  ],
  agencyInfo: {
    name: 'Social Security Administration',
    department: 'Health and Human Services',
    type: 'Independent Agency',
    founded: '1935',
    description: 'The SSA administers the Social Security program, providing retirement, disability, and survivor benefits.',
    website: 'https://ssa.gov',
    headquarters: 'Baltimore, MD'
  },
  eligibility: [
    'US citizenship required',
    'Background investigation',
    'Drug-free workplace',
    'HR certification preferred',
    'Federal employment knowledge'
  ],
  applicationProcess: [
    'USAJOBS application',
    'HR knowledge assessment',
    'Interview with HR team',
    'Background investigation',
    'Security clearance',
    'Job offer and onboarding'
  ]
};

const govtJob5: GovtJob = {
  id: '5',
  title: 'Public Affairs Specialist',
  agency: 'Department of State',
  location: 'Washington, DC',
  type: 'Full Time',
  salary: '$60-80k',
  posted: '4 days ago',
  logo: '🌍',
  featured: true,
  skills: ['Public Relations', 'Communication', 'Media Relations', 'Policy'],
  description: 'Work with the Department of State to manage public affairs and communication strategies for diplomatic initiatives.',
  requirements: [
    'US citizenship required',
    'Bachelor\'s degree in Communications, Journalism, or related field',
    'Strong writing and editing skills',
    'Experience with media relations',
    'Ability to obtain security clearance'
  ],
  responsibilities: [
    'Develop and implement communication strategies',
    'Write press releases and speeches',
    'Manage media relations',
    'Coordinate public events',
    'Monitor public opinion and media coverage'
  ],
  benefits: [
    'Federal employee benefits',
    'International travel opportunities',
    'Language training programs',
    'Diplomatic immunity benefits',
    'Professional development',
    'Housing and cost-of-living allowances'
  ],
  agencyInfo: {
    name: 'Department of State',
    department: 'State',
    type: 'Executive Department',
    founded: '1789',
    description: 'The Department of State is the executive department responsible for U.S. foreign policy and international relations.',
    website: 'https://state.gov',
    headquarters: 'Washington, DC'
  },
  eligibility: [
    'US citizenship required',
    'Top Secret clearance required',
    'Background investigation',
    'Language proficiency',
    'Willingness to relocate internationally'
  ],
  applicationProcess: [
    'USAJOBS application',
    'Written assessment',
    'Security clearance application',
    'Multiple interview rounds',
    'Background investigation',
    'Final job offer'
  ]
};

const govtJob6: GovtJob = {
  id: '6',
  title: 'Financial Analyst',
  agency: 'Department of Treasury',
  location: 'New York, NY',
  type: 'Full Time',
  salary: '$70-90k',
  posted: '2 weeks ago',
  logo: '💰',
  featured: true,
  skills: ['Financial Analysis', 'Budgeting', 'Accounting', 'Data Analysis'],
  description: 'Join the Department of Treasury to analyze financial data and support economic policy development.',
  requirements: [
    'US citizenship required',
    'Bachelor\'s degree in Finance, Economics, or Accounting',
    'Strong analytical and mathematical skills',
    'Experience with financial modeling',
    'Knowledge of federal financial systems'
  ],
  responsibilities: [
    'Analyze financial data and trends',
    'Prepare budget recommendations',
    'Monitor program expenditures',
    'Develop financial reports',
    'Ensure compliance with financial regulations'
  ],
  benefits: [
    'Federal financial benefits',
    'Retirement and pension options',
    'Health and dental insurance',
    'Performance-based bonuses',
    'Professional development funding',
    'Student loan repayment programs'
  ],
  agencyInfo: {
    name: 'Department of the Treasury',
    department: 'Treasury',
    type: 'Executive Department',
    founded: '1789',
    description: 'The Department of Treasury is responsible for promoting economic prosperity and ensuring financial security of the United States.',
    website: 'https://treasury.gov',
    headquarters: 'Washington, DC'
  },
  eligibility: [
    'US citizenship required',
    'Background investigation',
    'Financial analysis experience',
    'Drug-free workplace',
    'Strong ethical standards'
  ],
  applicationProcess: [
    'USAJOBS application',
    'Financial analysis assessment',
    'Budget exercise',
    'Interview with finance team',
    'Background check',
    'Job offer and onboarding'
  ]
};

// Optimized data access function
export async function getGovtJobById(id: string): Promise<GovtJob | null> {
  switch (id) {
    case '1': return govtJob1;
    case '2': return govtJob2;
    case '3': return govtJob3;
    case '4': return govtJob4;
    case '5': return govtJob5;
    case '6': return govtJob6;
    default: return null;
  }
}

// For listing pages - minimal data
export interface GovtJobListItem {
  id: string;
  title: string;
  agency: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  logo: string;
  featured: boolean;
  skills: string[];
  company?: string;
}

export const govtJobListItems: GovtJobListItem[] = [
  {
    id: '1',
    title: 'IT Specialist',
    agency: 'Department of Defense',
    location: 'Washington, DC',
    type: 'Full Time',
    salary: '$65-85k',
    posted: '1 week ago',
    logo: '🏛️',
    featured: true,
    skills: ['Cybersecurity', 'Network Administration', 'System Security', 'Clearance'],
    company: 'Department of Defense'
  },
  {
    id: '2',
    title: 'Program Analyst',
    agency: 'Environmental Protection Agency',
    location: 'Washington, DC',
    type: 'Full Time',
    salary: '$55-75k',
    posted: '3 days ago',
    logo: '🌿',
    featured: true,
    skills: ['Data Analysis', 'Policy Development', 'Research', 'Communication'],
    company: 'Environmental Protection Agency'
  },
  {
    id: '3',
    title: 'Environmental Engineer',
    agency: 'Department of the Interior',
    location: 'Denver, CO',
    type: 'Full Time',
    salary: '$70-90k',
    posted: '5 days ago',
    logo: '🏞️',
    featured: true,
    skills: ['Environmental Engineering', 'GIS', 'Water Resources', 'Regulatory Compliance'],
    company: 'Department of the Interior'
  },
  {
    id: '4',
    title: 'HR Specialist',
    agency: 'Social Security Administration',
    location: 'Baltimore, MD',
    type: 'Full Time',
    salary: '$50-70k',
    posted: '1 week ago',
    logo: '🏛️',
    featured: true,
    skills: ['Human Resources', 'Benefits Administration', 'Recruitment', 'Policy Implementation'],
    company: 'Social Security Administration'
  },
  {
    id: '5',
    title: 'Public Affairs Specialist',
    agency: 'Department of State',
    location: 'Washington, DC',
    type: 'Full Time',
    salary: '$60-80k',
    posted: '4 days ago',
    logo: '🌍',
    featured: true,
    skills: ['Public Relations', 'Communication', 'Media Relations', 'Policy'],
    company: 'Department of State'
  },
  {
    id: '6',
    title: 'Financial Analyst',
    agency: 'Department of Treasury',
    location: 'New York, NY',
    type: 'Full Time',
    salary: '$70-90k',
    posted: '2 weeks ago',
    logo: '💰',
    featured: true,
    skills: ['Financial Analysis', 'Budgeting', 'Accounting', 'Data Analysis'],
    company: 'Department of Treasury'
  }
];