import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';
import { AnimatedNumber } from '@/components/ui/animated-number';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

interface JobPageProps {
  params: Promise<{ id: string }>;
}

// Mock job data - in real app, this would come from database/API
const jobData = {
  '1': {
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
  },
  '2': {
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
  },
  '3': {
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
  },
  '4': {
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
  },
  '5': {
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
  },
  '6': {
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
  }
};

export default async function JobPage({ params }: JobPageProps) {
  const { id } = await params;
  const job = jobData[id as keyof typeof jobData];

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
                  src="/illustrations/jobs-stats.png" 
                  alt="Job Details" 
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
                  <h2 className="text-lg font-semibold text-foreground">{job.company}</h2>
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
                    <h2 className="text-2xl font-bold text-foreground mb-4">Eligibility</h2>
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
                {/* Company Info */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">Company Information</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground">{job.companyInfo.name}</h4>
                        <p className="text-sm text-muted-foreground">{job.companyInfo.industry}</p>
                        <p className="text-sm text-muted-foreground">{job.companyInfo.size}</p>
                        <p className="text-sm text-muted-foreground">Founded: {job.companyInfo.founded}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">{job.companyInfo.description}</p>
                        <a 
                          href={job.companyInfo.website} 
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
                          {job.companyInfo.headquarters}
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
                          <AnimatedNumber end={15000} suffix="+" duration={2000} />
                        </div>
                        <div className="text-sm text-muted-foreground">Active Jobs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                          <AnimatedNumber end={800} suffix="+" duration={2000} />
                        </div>
                        <div className="text-sm text-muted-foreground">Companies</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                          <AnimatedNumber end={75000} suffix="+" duration={2000} />
                        </div>
                        <div className="text-sm text-muted-foreground">Job Seekers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                          <AnimatedNumber end={92} suffix="%" duration={2000} />
                        </div>
                        <div className="text-sm text-muted-foreground">Success Rate</div>
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