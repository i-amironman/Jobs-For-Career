import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';
import { AnimatedNumber } from '@/components/ui/animated-number';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

interface GovtJobPageProps {
  params: Promise<{ id: string }>;
}

// Mock government job data
const govtJobData = {
  '1': {
    id: '1',
    title: 'Software Engineer',
    agency: 'Department of Defense',
    location: 'Washington, DC',
    type: 'Full Time',
    salary: '$85-120k',
    posted: '3 days ago',
    logo: '🏛️',
    featured: true,
    skills: ['Java', 'Python', 'Security Clearance', 'Agile'],
    description: 'Join the Department of Defense as a Software Engineer working on critical national security projects.',
    requirements: [
      'U.S. citizenship required',
      'Bachelor\'s degree in Computer Science or related field',
      'Active security clearance or ability to obtain one',
      '4+ years of software development experience',
      'Experience with Java and Python',
      'Strong problem-solving skills'
    ],
    responsibilities: [
      'Develop and maintain software systems for national security',
      'Collaborate with cross-functional teams',
      'Ensure software meets security standards',
      'Participate in code reviews',
      'Document technical processes',
      'Stay current with security best practices'
    ],
    benefits: [
      'Competitive government salary',
      'Excellent job security',
      'Comprehensive benefits package',
      'Retirement benefits',
      'Professional development opportunities',
      'Work-life balance',
      'Serving your country'
    ],
    agencyInfo: {
      name: 'Department of Defense',
      type: 'Federal Agency',
      founded: '1947',
      description: 'The Department of Defense is responsible for providing the military forces needed to deter war and ensure the security of the United States.',
      website: 'https://defense.gov',
      headquarters: 'Washington, DC'
    },
    eligibility: [
      'U.S. citizenship required',
      'Security clearance eligibility',
      'Educational requirements',
      'Background check required',
      'Physical fitness standards'
    ],
    applicationProcess: [
      'Online application via USAJOBS',
      'Resume and qualifications review',
      'Written assessment',
      'Security clearance process',
      'Interview and selection',
      'Offer and onboarding'
    ]
  },
  '2': {
    id: '2',
    title: 'Data Analyst',
    agency: 'Social Security Administration',
    location: 'Baltimore, MD',
    type: 'Full Time',
    salary: '$65-85k',
    posted: '1 week ago',
    logo: '🛡️',
    featured: true,
    skills: ['SQL', 'Python', 'Data Visualization', 'Statistics', 'Excel'],
    description: 'Join the Social Security Administration as a Data Analyst working with important social security data.',
    requirements: [
      'U.S. citizenship required',
      'Bachelor\'s degree in relevant field',
      'Experience with data analysis',
      'Strong analytical skills',
      'Proficiency in SQL and Python',
      'Attention to detail'
    ],
    responsibilities: [
      'Analyze social security data trends',
      'Create data visualizations and reports',
      'Support policy development',
      'Ensure data quality and accuracy',
      'Collaborate with various departments',
      'Present findings to stakeholders'
    ],
    benefits: [
      'Federal employee benefits',
      'Job security and stability',
      'Retirement benefits',
      'Health insurance',
      'Professional development',
      'Meaningful work impact'
    ],
    agencyInfo: {
      name: 'Social Security Administration',
      type: 'Federal Agency',
      founded: '1935',
      description: 'The Social Security Administration administers retirement, disability, and survivors benefits.',
      website: 'https://ssa.gov',
      headquarters: 'Baltimore, MD'
    },
    eligibility: [
      'U.S. citizenship required',
      'Educational requirements',
      'Background investigation',
      'Drug testing required',
      'Physical requirements'
    ],
    applicationProcess: [
      'Application via USAJOBS',
      'Qualifications review',
      'Assessment test',
      'Interview process',
      'Background investigation',
      'Job offer and acceptance'
    ]
  },
  '3': {
    id: '3',
    title: 'IT Specialist',
    agency: 'Department of Health',
    location: 'Remote',
    type: 'Full Time',
    salary: '$60-80k',
    posted: '4 days ago',
    logo: '🏥',
    featured: true,
    skills: ['Network Administration', 'Cybersecurity', 'Windows/Linux'],
    description: 'Join the Department of Health as an IT Specialist supporting critical healthcare infrastructure and systems.',
    requirements: [
      'U.S. citizenship required',
      'Bachelor\'s degree in Information Technology or related field',
      '3+ years of IT support experience',
      'Experience with network administration',
      'Knowledge of cybersecurity best practices',
      'Strong problem-solving skills'
    ],
    responsibilities: [
      'Maintain and upgrade computer systems',
      'Provide technical support to healthcare staff',
      'Manage network infrastructure',
      'Implement cybersecurity measures',
      'Ensure data security and compliance',
      'Train staff on new technologies'
    ],
    benefits: [
      'Federal employee benefits package',
      'Excellent health insurance coverage',
      'Retirement benefits with matching',
      'Job security and stability',
      'Professional development opportunities',
      'Work-life balance and flexible hours'
    ],
    agencyInfo: {
      name: 'Department of Health',
      type: 'Federal Agency',
      founded: '1953',
      description: 'The Department of Health is dedicated to protecting and improving the health of all Americans through public health initiatives.',
      website: 'https://hhs.gov',
      headquarters: 'Washington, DC'
    },
    eligibility: [
      'U.S. citizenship required',
      'Background investigation required',
      'Security clearance eligibility',
      'Educational requirements',
      'Physical fitness standards'
    ],
    applicationProcess: [
      'Online application via USAJOBS',
      'Resume and qualifications review',
      'Technical assessment',
      'Security clearance process',
      'Interview with hiring team',
      'Background check and offer'
    ]
  },
  '4': {
    id: '4',
    title: 'Program Analyst',
    agency: 'Department of Treasury',
    location: 'New York, NY',
    type: 'Full Time',
    salary: '$70-90k',
    posted: '2 weeks ago',
    logo: '💰',
    featured: true,
    skills: ['Financial Analysis', 'Excel', 'Risk Assessment', 'Regulations'],
    description: 'Join the Department of Treasury as a Program Analyst working on financial policy and program evaluation.',
    requirements: [
      'U.S. citizenship required',
      'Bachelor\'s degree in Finance, Economics, or related field',
      '2+ years of program analysis experience',
      'Strong analytical and quantitative skills',
      'Experience with financial modeling',
      'Knowledge of federal regulations'
    ],
    responsibilities: [
      'Analyze program effectiveness and efficiency',
      'Develop program evaluation methodologies',
      'Prepare financial reports and recommendations',
      'Monitor program compliance with regulations',
      'Collaborate with cross-functional teams',
      'Present findings to senior management'
    ],
    benefits: [
      'Competitive federal salary',
      'Comprehensive benefits package',
      'Retirement savings plan',
      'Professional development opportunities',
      'Work in major financial hub',
      'Career advancement opportunities'
    ],
    agencyInfo: {
      name: 'Department of Treasury',
      type: 'Federal Agency',
      founded: '1789',
      description: 'The Department of Treasury is responsible for promoting economic prosperity and ensuring the financial security of the United States.',
      website: 'https://treasury.gov',
      headquarters: 'Washington, DC'
    },
    eligibility: [
      'U.S. citizenship required',
      'Background investigation required',
      'Financial analysis experience',
      'Strong analytical skills',
      'Educational requirements'
    ],
    applicationProcess: [
      'USAJOBS application',
      'Resume and transcript review',
      'Financial analysis assessment',
      'Multiple interview rounds',
      'Background investigation',
      'Job offer and onboarding'
    ]
  },
  '5': {
    id: '5',
    title: 'Environmental Engineer',
    agency: 'EPA',
    location: 'Denver, CO',
    type: 'Full Time',
    salary: '$75-95k',
    posted: '1 week ago',
    logo: '🌿',
    featured: true,
    skills: ['Environmental Science', 'GIS', 'Data Analysis', 'Policy'],
    description: 'Join the Environmental Protection Agency as an Environmental Engineer working on environmental protection initiatives.',
    requirements: [
      'U.S. citizenship required',
      'Bachelor\'s degree in Environmental Engineering or related field',
      '2+ years of environmental engineering experience',
      'Experience with GIS and environmental data analysis',
      'Knowledge of environmental regulations',
      'Strong analytical and problem-solving skills'
    ],
    responsibilities: [
      'Conduct environmental impact assessments',
      'Develop and implement environmental protection strategies',
      'Monitor environmental compliance',
      'Analyze environmental data and trends',
      'Prepare technical reports and recommendations',
      'Collaborate with industry stakeholders'
    ],
    benefits: [
      'Federal employee benefits',
      'Environmental protection mission',
      'Professional development opportunities',
      'Work-life balance',
      'Health and wellness programs',
      'Retirement benefits'
    ],
    agencyInfo: {
      name: 'Environmental Protection Agency',
      type: 'Federal Agency',
      founded: '1970',
      description: 'The EPA is responsible for protecting human health and the environment through regulation and enforcement.',
      website: 'https://epa.gov',
      headquarters: 'Washington, DC'
    },
    eligibility: [
      'U.S. citizenship required',
      'Environmental engineering background',
      'Background investigation',
      'Security clearance eligibility',
      'Educational requirements'
    ],
    applicationProcess: [
      'Online application via USAJOBS',
      'Resume and qualifications review',
      'Technical assessment',
      'Environmental case study',
      'Interview with EPA team',
      'Background check and offer'
    ]
  },
  '6': {
    id: '6',
    title: 'HR Specialist',
    agency: 'Office of Personnel Management',
    location: 'Remote',
    type: 'Full Time',
    salary: '$55-70k',
    posted: '5 days ago',
    logo: '👥',
    featured: true,
    skills: ['HR Management', 'Recruitment', 'Training', 'Compliance'],
    description: 'Join the Office of Personnel Management as an HR Specialist supporting federal workforce management initiatives.',
    requirements: [
      'U.S. citizenship required',
      'Bachelor\'s degree in Human Resources or related field',
      '2+ years of HR experience',
      'Knowledge of federal HR regulations',
      'Experience with recruitment and training',
      'Strong communication and interpersonal skills'
    ],
    responsibilities: [
      'Manage recruitment and hiring processes',
      'Develop and implement training programs',
      'Ensure HR compliance with federal regulations',
      'Manage employee relations and benefits',
      'Conduct performance evaluations',
      'Provide HR guidance to management'
    ],
    benefits: [
      'Federal HR career opportunities',
      'Remote work flexibility',
      'Comprehensive benefits package',
      'Professional development in HR',
      'Work-life balance',
      'Job security and stability'
    ],
    agencyInfo: {
      name: 'Office of Personnel Management',
      type: 'Federal Agency',
      founded: '1979',
      description: 'OPM is the federal government\'s HR agency, providing leadership and support to federal agencies on HR matters.',
      website: 'https://opm.gov',
      headquarters: 'Washington, DC'
    },
    eligibility: [
      'U.S. citizenship required',
      'HR experience required',
      'Background investigation',
      'Federal HR knowledge',
      'Communication skills'
    ],
    applicationProcess: [
      'USAJOBS application',
      'Resume and qualifications review',
      'HR knowledge assessment',
      'Interview with OPM team',
      'Background investigation',
      'Job offer and onboarding'
    ]
  }
};

export default async function GovtJobPage({ params }: GovtJobPageProps) {
  const { id } = await params;
  const job = govtJobData[id as keyof typeof govtJobData];

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <img 
                  src="/illustrations/success-stats.png" 
                  alt="Government Job Details" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {job.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {job.type}
              </Badge>
              <Badge variant="outline">
                {job.location}
              </Badge>
              <Badge variant="outline">
                {job.salary}
              </Badge>
            </div>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-2xl">
                  {job.logo}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">{job.agency}</h2>
                  <p className="text-sm text-muted-foreground">{job.posted}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Job Description</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {job.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Responsibilities */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Key Responsibilities</h2>
                    <ul className="space-y-2">
                      {job.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Icons.CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Requirements */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Requirements</h2>
                    <ul className="space-y-2">
                      {job.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Icons.CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Skills */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Required Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <Badge key={index} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Benefits */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Benefits & Perks</h2>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Icons.Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Eligibility */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Eligibility Requirements</h2>
                    <ul className="space-y-2">
                      {job.eligibility.map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Icons.Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Application Process */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Application Process</h2>
                    <div className="space-y-3">
                      {job.applicationProcess.map((step, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                            {index + 1}
                          </div>
                          <span className="text-muted-foreground">{step}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Agency Info */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">Agency Information</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground">{job.agencyInfo.name}</h4>
                        <p className="text-sm text-muted-foreground">{job.agencyInfo.type}</p>
                        <p className="text-sm text-muted-foreground">Founded: {job.agencyInfo.founded}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">{job.agencyInfo.description}</p>
                        <a 
                          href={job.agencyInfo.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm"
                        >
                          Visit Website
                        </a>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          <Icons.MapPin className="h-4 w-4 inline mr-1" />
                          {job.agencyInfo.headquarters}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">Quick Stats</h3>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                          <AnimatedNumber end={12000} suffix="+" duration={2000} />
                        </div>
                        <div className="text-sm text-muted-foreground">Active Positions</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                          <AnimatedNumber end={500} suffix="+" duration={2000} />
                        </div>
                        <div className="text-sm text-muted-foreground">Agencies</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                          <AnimatedNumber end={100000} suffix="+" duration={2000} />
                        </div>
                        <div className="text-sm text-muted-foreground">Applications</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                          <AnimatedNumber end={85} suffix="%" duration={2000} />
                        </div>
                        <div className="text-sm text-muted-foreground">Job Security</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Apply Button */}
                <Card>
                  <CardContent className="p-6">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-lg">
                      Apply Now
                    </Button>
                    <p className="text-sm text-muted-foreground text-center mt-2">
                      Application deadline: 30 days from posting
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}