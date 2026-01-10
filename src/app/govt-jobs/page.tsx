'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';

export default function GovtJobsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="mb-8">
              <div className="w-64 h-40 mx-auto mb-6 relative">
                <img 
                  src="/illustrations/govt-jobs-hero.png" 
                  alt="Secure Your Future with Government Jobs" 
                  className="w-full h-full object-cover rounded-lg shadow-soft"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Secure Your Future with Government Jobs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore stable and rewarding career opportunities in public service. Find your ideal government job with excellent benefits and job security.
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="shadow-medium">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="relative">
                    <Icons.Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Job title, department..."
                      className="pl-10"
                    />
                  </div>
                  <div className="relative">
                    <Icons.MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Location or Remote"
                      className="pl-10"
                    />
                  </div>
                  <select className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">All Agencies</option>
                    <option value="federal">Federal</option>
                    <option value="state">State</option>
                    <option value="local">Local</option>
                    <option value="county">County</option>
                  </select>
                </div>
                <div className="flex gap-4">
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    <Icons.Search className="h-4 w-4 mr-2" />
                    Search Govt Jobs
                  </Button>
                  <Button variant="outline">
                    <Icons.Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img 
                  src="/illustrations/jobs-stats.png" 
                  alt="Active Positions" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">12,000+</div>
              <div className="text-sm text-muted-foreground">Active Positions</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img 
                  src="/illustrations/companies-stats.png" 
                  alt="Agencies" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Agencies</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img 
                  src="/illustrations/seekers-stats.png" 
                  alt="Applications" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">100,000+</div>
              <div className="text-sm text-muted-foreground">Applications</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img 
                  src="/illustrations/success-stats.png" 
                  alt="Job Security" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Job Security</div>
            </div>
          </div>

          {/* Featured Government Jobs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Government Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Software Engineer',
                  agency: 'Department of Defense',
                  location: 'Washington, DC',
                  type: 'Full Time',
                  salary: '$85-120k',
                  posted: '3 days ago',
                  logo: '🏛️',
                  featured: true,
                  skills: ['Java', 'Python', 'Security Clearance', 'Agile']
                },
                {
                  title: 'Data Analyst',
                  agency: 'Social Security Administration',
                  location: 'Baltimore, MD',
                  type: 'Full Time',
                  salary: '$65-85k',
                  posted: '1 week ago',
                  logo: '🛡️',
                  featured: true,
                  skills: ['SQL', 'Python', 'Data Visualization', 'Statistics']
                },
                {
                  title: 'IT Specialist',
                  agency: 'Department of Health',
                  location: 'Remote',
                  type: 'Full Time',
                  salary: '$60-80k',
                  posted: '4 days ago',
                  logo: '🏥',
                  featured: true,
                  skills: ['Network Administration', 'Cybersecurity', 'Windows/Linux']
                },
                {
                  title: 'Program Analyst',
                  agency: 'Department of Treasury',
                  location: 'New York, NY',
                  type: 'Full Time',
                  salary: '$70-90k',
                  posted: '2 weeks ago',
                  logo: '💰',
                  featured: true,
                  skills: ['Financial Analysis', 'Excel', 'Risk Assessment', 'Regulations']
                },
                {
                  title: 'Environmental Engineer',
                  agency: 'EPA',
                  location: 'Denver, CO',
                  type: 'Full Time',
                  salary: '$75-95k',
                  posted: '1 week ago',
                  logo: '🌿',
                  featured: true,
                  skills: ['Environmental Science', 'GIS', 'Data Analysis', 'Policy']
                },
                {
                  title: 'HR Specialist',
                  agency: 'Office of Personnel Management',
                  location: 'Remote',
                  type: 'Full Time',
                  salary: '$55-70k',
                  posted: '5 days ago',
                  logo: '👥',
                  featured: true,
                  skills: ['HR Management', 'Recruitment', 'Training', 'Compliance']
                },
              ].map((job, index) => (
                <Card key={index} className="hover:shadow-medium transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-2xl">
                          {job.logo}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{job.title}</h3>
                          <p className="text-sm text-muted-foreground">{job.agency}</p>
                        </div>
                      </div>
                      {job.featured && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          Featured
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Icons.MapPin className="h-4 w-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Icons.Briefcase className="h-4 w-4 mr-2" />
                        {job.type}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span className="h-4 w-4 mr-2">$</span>
                        {job.salary}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{job.posted}</span>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Government Agencies */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Browse by Agency</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: 'Federal', icon: '🏛️', jobs: 4532 },
                { name: 'State', icon: '🏛️', jobs: 3211 },
                { name: 'Local', icon: '🏘️', jobs: 2156 },
                { name: 'County', icon: '🏛️', jobs: 1876 },
                { name: 'Education', icon: '🎓', jobs: 1654 },
                { name: 'Healthcare', icon: '🏥', jobs: 1432 },
                { name: 'Transportation', icon: '🚗', jobs: 1298 },
                { name: 'Justice', icon: '⚖️', jobs: 987 },
              ].map((agency, index) => (
                <Card key={index} className="hover:shadow-soft transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-3">{agency.icon}</div>
                    <h3 className="font-medium text-foreground mb-1">{agency.name}</h3>
                    <p className="text-sm text-muted-foreground">{agency.jobs} jobs</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Government Job Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-soft transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icons.Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Job Security</h3>
                  <p className="text-sm text-muted-foreground">
                    Enjoy stable employment with excellent job security and benefits
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-soft transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icons.Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Health Benefits</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive health insurance and wellness programs for you and your family
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-soft transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icons.TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Career Growth</h3>
                  <p className="text-sm text-muted-foreground">
                    Clear advancement paths and professional development opportunities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Application Tips */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Government Job Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4 text-center">Step 1: Research & Prepare</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Research agencies and positions</li>
                    <li>Prepare federal resume format</li>
                    <li>Obtain required security clearance</li>
                    <li>Gather necessary documentation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4 text-center">Step 2: Apply Online</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Use USAJOBS.gov portal</li>
                    <li>Create detailed profile</li>
                    <li>Submit required documents</li>
                    <li>Track application status</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}