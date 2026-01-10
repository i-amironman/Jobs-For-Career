import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';
import { AnimatedNumber } from '@/components/ui/animated-number';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

interface InternshipPageProps {
  params: Promise<{ id: string }>;
}

// Mock internship data
const internshipData = {
  '1': {
    id: '1',
    title: 'Software Engineering Intern',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    duration: 'Summer 2024',
    stipend: '$25-35/hr',
    posted: '3 days ago',
    logo: '🏢',
    featured: true,
    skills: ['JavaScript', 'React', 'Node.js', 'Git'],
    description: 'Join our dynamic software engineering team for a hands-on internship experience. You\'ll work on real projects and learn from experienced engineers.',
    requirements: [
      'Currently pursuing a degree in Computer Science or related field',
      'Basic understanding of web development concepts',
      'Familiarity with JavaScript and React',
      'Strong problem-solving abilities',
      'Good communication skills'
    ],
    responsibilities: [
      'Assist in developing and maintaining web applications',
      'Participate in code reviews and team meetings',
      'Learn and apply modern development practices',
      'Collaborate with cross-functional teams',
      'Document code and technical processes'
    ],
    benefits: [
      'Competitive hourly stipend',
      'Hands-on experience with real projects',
      'Mentorship from senior engineers',
      'Potential for full-time conversion',
      'Flexible work arrangements',
      'Professional development opportunities'
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
      'Must be currently enrolled in a degree program',
      'Minimum 3.0 GPA',
      'Available for full-time internship',
      'Strong academic background'
    ],
    applicationProcess: [
      'Online application submission',
      'Technical assessment',
      'Phone interview',
      'Team interview',
      'Offer and onboarding'
    ]
  },
  '2': {
    id: '2',
    title: 'Marketing Intern',
    company: 'Digital Agency Pro',
    location: 'Remote',
    duration: 'Summer 2024',
    stipend: '$18-25/hr',
    posted: '1 week ago',
    logo: '📱',
    featured: true,
    skills: ['Social Media', 'Content Writing', 'SEO'],
    description: 'Gain valuable marketing experience in a fast-paced digital agency environment. Perfect for students looking to build their marketing portfolio.',
    requirements: [
      'Currently pursuing a degree in Marketing or related field',
      'Basic understanding of digital marketing concepts',
      'Strong writing and communication skills',
      'Creative thinking abilities',
      'Social media literacy'
    ],
    responsibilities: [
      'Create and manage social media content',
      'Assist with content writing and copyediting',
      'Monitor and analyze campaign performance',
      'Support SEO optimization efforts',
      'Collaborate with creative team members'
    ],
    benefits: [
      'Remote work opportunity',
      'Competitive hourly stipend',
      'Real-world marketing experience',
      'Portfolio-building opportunities',
      'Professional mentorship',
      'Flexible schedule'
    ],
    companyInfo: {
      name: 'Digital Agency Pro',
      industry: 'Marketing & Advertising',
      size: '50-100 employees',
      founded: '2018',
      description: 'Digital Agency Pro is a full-service digital marketing agency helping brands grow their online presence.',
      website: 'https://digitalagencypro.com',
      headquarters: 'Remote'
    },
    eligibility: [
      'Currently enrolled in a degree program',
      'Minimum 3.0 GPA',
      'Available for part-time internship',
      'Interest in digital marketing'
    ],
    applicationProcess: [
      'Online application',
      'Portfolio review',
      'Video interview',
      'Team collaboration exercise',
      'Offer and onboarding'
    ]
  },
  '3': {
    id: '3',
    title: 'Data Science Intern',
    company: 'FinanceFlow',
    location: 'New York, NY',
    duration: 'Summer 2024',
    stipend: '$20-30/hr',
    posted: '2 weeks ago',
    logo: '💰',
    featured: true,
    skills: ['Python', 'SQL', 'Machine Learning', 'Excel'],
    description: 'Join our data science team to work on real-world financial data analysis and machine learning projects.',
    requirements: [
      'Currently pursuing a degree in Data Science, Statistics, or related field',
      'Basic programming knowledge in Python or R',
      'Understanding of statistical concepts',
      'Strong analytical and problem-solving skills',
      'Interest in financial data analysis'
    ],
    responsibilities: [
      'Assist in data cleaning and preprocessing',
      'Develop predictive models for financial forecasting',
      'Create data visualizations and dashboards',
      'Analyze market trends and customer behavior',
      'Support data-driven decision making processes'
    ],
    benefits: [
      'Hands-on experience with real financial data',
      'Mentorship from senior data scientists',
      'Exposure to machine learning algorithms',
      'Professional development workshops',
      'Networking opportunities with industry experts',
      'Potential for full-time conversion'
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
      'Minimum 3.0 GPA',
      'Available for full-time summer internship',
      'Strong academic background in mathematics and statistics',
      'Basic knowledge of programming languages',
      'US citizenship or work authorization'
    ],
    applicationProcess: [
      'Online application with resume',
      'Technical assessment',
      'Video interview',
      'Case study exercise',
      'Team interview',
      'Offer and onboarding'
    ]
  },
  '4': {
    id: '4',
    title: 'Product Design Intern',
    company: 'Design Studio Pro',
    location: 'Los Angeles, CA',
    duration: 'Fall 2024',
    stipend: '$15-22/hr',
    posted: '4 days ago',
    logo: '🎨',
    featured: true,
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'UI/UX'],
    description: 'Gain valuable product design experience working on real client projects in a creative design agency environment.',
    requirements: [
      'Currently pursuing a degree in Design, HCI, or related field',
      'Portfolio demonstrating design skills',
      'Proficiency in design tools like Figma or Adobe XD',
      'Understanding of user-centered design principles',
      'Strong visual design and communication skills'
    ],
    responsibilities: [
      'Create wireframes and user flows',
      'Design user interfaces and interactive prototypes',
      'Conduct user research and usability testing',
      'Collaborate with developers on implementation',
      'Present design concepts to clients'
    ],
    benefits: [
      'Real-world design experience',
      'Portfolio-building opportunities',
      'Mentorship from senior designers',
      'Exposure to client-facing projects',
      'Creative and collaborative work environment',
      'Flexible work arrangements'
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
      'Minimum 3.0 GPA',
      'Available for part-time or full-time internship',
      'Strong design portfolio',
      'Excellent communication skills',
      'Ability to work in collaborative environment'
    ],
    applicationProcess: [
      'Portfolio submission',
      'Design challenge',
      'Video interview',
      'Team collaboration exercise',
      'Final interview with design director',
      'Offer and onboarding'
    ]
  },
  '5': {
    id: '5',
    title: 'Business Development Intern',
    company: 'StartupHub',
    location: 'Remote',
    duration: 'Year Round',
    stipend: '$12-18/hr',
    posted: '1 week ago',
    logo: '🚀',
    featured: true,
    skills: ['Sales', 'CRM', 'Communication', 'Research'],
    description: 'Join our business development team to help drive growth and build strategic partnerships for our startup.',
    requirements: [
      'Currently pursuing a degree in Business, Marketing, or related field',
      'Strong communication and interpersonal skills',
      'Interest in sales and business development',
      'Basic understanding of CRM systems',
      'Self-motivated and results-oriented'
    ],
    responsibilities: [
      'Research and identify potential business opportunities',
      'Assist in developing sales strategies and pitch decks',
      'Support relationship building with potential partners',
      'Help manage CRM and track sales pipeline',
      'Participate in client meetings and presentations'
    ],
    benefits: [
      'Remote work opportunity',
      'Flexible working hours',
      'Exposure to startup business operations',
      'Direct mentorship from business leaders',
      'Commission-based performance incentives',
      'Potential for full-time conversion'
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
      'Minimum 3.0 GPA',
      'Available for part-time internship',
      'Strong interest in entrepreneurship',
      'Excellent written and verbal communication',
      'Self-starter with initiative'
    ],
    applicationProcess: [
      'Online application',
      'Sales pitch exercise',
      'Phone interview',
      'Business case study',
      'Team interview',
      'Offer and onboarding'
    ]
  },
  '6': {
    id: '6',
    title: 'Cybersecurity Intern',
    company: 'SecurityTech Systems',
    location: 'Washington, DC',
    duration: 'Summer 2024',
    stipend: '$22-28/hr',
    posted: '5 days ago',
    logo: '🔒',
    featured: true,
    skills: ['Network Security', 'Penetration Testing', 'Python', 'Linux'],
    description: 'Join our cybersecurity team to gain hands-on experience in protecting digital assets and infrastructure.',
    requirements: [
      'Currently pursuing a degree in Cybersecurity, Computer Science, or related field',
      'Basic understanding of network security concepts',
      'Experience with Linux/Unix systems',
      'Knowledge of programming languages (Python preferred)',
      'Strong analytical and problem-solving skills'
    ],
    responsibilities: [
      'Assist in security assessments and vulnerability testing',
      'Monitor network traffic for suspicious activities',
      'Help develop security policies and procedures',
      'Participate in incident response exercises',
      'Research emerging security threats and technologies'
    ],
    benefits: [
      'Hands-on cybersecurity experience',
      'Exposure to industry-standard security tools',
      'Mentorship from security professionals',
      'Security certifications support',
      'Government and enterprise client exposure',
      'Competitive stipend and benefits'
    ],
    companyInfo: {
      name: 'SecurityTech Systems',
      industry: 'Cybersecurity',
      size: '100-200 employees',
      founded: '2014',
      description: 'SecurityTech Systems is a leading cybersecurity firm providing comprehensive security solutions to government and enterprise clients.',
      website: 'https://securitytech.com',
      headquarters: 'Washington, DC'
    },
    eligibility: [
      'Minimum 3.0 GPA',
      'US citizenship required for government projects',
      'Available for full-time summer internship',
      'Strong interest in cybersecurity',
      'Ability to obtain security clearance'
    ],
    applicationProcess: [
      'Security clearance application',
      'Technical assessment',
      'Background investigation',
      'Technical interview',
      'Security briefing',
      'Offer and onboarding'
    ]
  }
};

export default async function InternshipPage({ params }: InternshipPageProps) {
  const { id } = await params;
  const internship = internshipData[id as keyof typeof internshipData];

  if (!internship) {
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
                  alt="Internship Details" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {internship.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {internship.duration}
              </Badge>
              <Badge variant="outline">
                {internship.location}
              </Badge>
              <Badge variant="outline">
                {internship.stipend}
              </Badge>
            </div>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-2xl">
                  {internship.logo}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">{internship.company}</h2>
                  <p className="text-sm text-muted-foreground">{internship.posted}</p>
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
                    <h2 className="text-2xl font-bold text-foreground mb-4">Internship Description</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {internship.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Responsibilities */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Key Responsibilities</h2>
                    <ul className="space-y-2">
                      {internship.responsibilities.map((responsibility, index) => (
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
                      {internship.requirements.map((requirement, index) => (
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
                    <h2 className="text-2xl font-bold text-foreground mb-4">Skills You'll Learn</h2>
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill, index) => (
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
                      {internship.benefits.map((benefit, index) => (
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
                      {internship.eligibility.map((item, index) => (
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
                      {internship.applicationProcess.map((step, index) => (
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
                        <h4 className="font-semibold text-foreground">{internship.companyInfo.name}</h4>
                        <p className="text-sm text-muted-foreground">{internship.companyInfo.industry}</p>
                        <p className="text-sm text-muted-foreground">{internship.companyInfo.size}</p>
                        <p className="text-sm text-muted-foreground">Founded: {internship.companyInfo.founded}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">{internship.companyInfo.description}</p>
                        <a 
                          href={internship.companyInfo.website} 
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
                          {internship.companyInfo.headquarters}
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
                          <AnimatedNumber end={5000} suffix="+" duration={2000} />
                        </div>
                        <div className="text-sm text-muted-foreground">Active Internships</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                          <AnimatedNumber end={500} suffix="+" duration={2000} />
                        </div>
                        <div className="text-sm text-muted-foreground">Companies</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                          <AnimatedNumber end={25000} suffix="+" duration={2000} />
                        </div>
                        <div className="text-sm text-muted-foreground">Students</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                          <AnimatedNumber end={88} suffix="%" duration={2000} />
                        </div>
                        <div className="text-sm text-muted-foreground">Conversion Rate</div>
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