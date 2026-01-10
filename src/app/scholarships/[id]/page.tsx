import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';
import { AnimatedNumber } from '@/components/ui/animated-number';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

interface ScholarshipPageProps {
  params: Promise<{ id: string }>;
}

// Mock scholarship data
const scholarshipData = {
  '1': {
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
  },
  '2': {
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
  },
  '3': {
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
  },
  '4': {
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
  },
  '5': {
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
  },
  '6': {
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
  }
};

export default async function ScholarshipPage({ params }: ScholarshipPageProps) {
  const { id } = await params;
  const scholarship = scholarshipData[id as keyof typeof scholarshipData];

  if (!scholarship) {
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
                  alt="Scholarship Details" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {scholarship.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {scholarship.field}
              </Badge>
              <Badge variant="outline">
                {scholarship.location}
              </Badge>
              <Badge variant="outline">
                {scholarship.amount}
              </Badge>
            </div>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-2xl">
                  {scholarship.logo}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">{scholarship.provider}</h2>
                  <p className="text-sm text-muted-foreground">Deadline: {scholarship.deadline}</p>
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
                    <h2 className="text-2xl font-bold text-foreground mb-4">Scholarship Description</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {scholarship.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Responsibilities */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Scholarship Responsibilities</h2>
                    <ul className="space-y-2">
                      {scholarship.responsibilities.map((responsibility, index) => (
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
                      {scholarship.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Icons.CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Benefits */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Benefits & Perks</h2>
                    <ul className="space-y-2">
                      {scholarship.benefits.map((benefit, index) => (
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
                    <h2 className="text-2xl font-bold text-foreground mb-4">Eligibility Criteria</h2>
                    <ul className="space-y-2">
                      {scholarship.eligibility.map((item, index) => (
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
                      {scholarship.applicationProcess.map((step, index) => (
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
                {/* Provider Info */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">Provider Information</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground">{scholarship.providerInfo.name}</h4>
                        <p className="text-sm text-muted-foreground">{scholarship.providerInfo.type}</p>
                        <p className="text-sm text-muted-foreground">Founded: {scholarship.providerInfo.founded}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">{scholarship.providerInfo.description}</p>
                        <a 
                          href={scholarship.providerInfo.website} 
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
                          {scholarship.providerInfo.headquarters}
                        </p>
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
                      Application deadline: {scholarship.deadline}
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