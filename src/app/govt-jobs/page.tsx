'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';
import { AnimatedNumber } from '@/components/ui/animated-number';

export default function GovtJobsPage() {
  const categories = [
    { name: 'Healthcare', icon: '🏥', count: 245 },
    { name: 'Technology', icon: '💻', count: 189 },
    { name: 'Education', icon: '🎓', count: 156 },
    { name: 'Defense', icon: '🛡️', count: 134 },
    { name: 'Transportation', icon: '🚗', count: 98 },
    { name: 'Environment', icon: '🌿', count: 87 },
    { name: 'Finance', icon: '💰', count: 76 },
    { name: 'Administration', icon: '📋', count: 65 }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-0 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="text-center mb-12">
              <div className="w-32 h-32 mx-auto mb-6 relative flex items-center justify-center">
                <img 
                  src="/illustrations/govt-jobs-hero.png" 
                  alt="Secure Your Future with Government Jobs" 
                  className="w-full h-full object-contain"
                />
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
                        placeholder="Location..."
                        className="pl-10"
                      />
                    </div>
                    <Button className="w-full">
                      Search Jobs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  <AnimatedNumber end={1200} suffix="+" duration={2000} />
                </div>
                <div className="text-sm text-muted-foreground">Active Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  <AnimatedNumber end={85} suffix="%" duration={2000} />
                </div>
                <div className="text-sm text-muted-foreground">Job Security</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  <AnimatedNumber end={25} suffix="+" duration={2000} />
                </div>
                <div className="text-sm text-muted-foreground">Departments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  <AnimatedNumber end={60} suffix="k" duration={2000} />
                </div>
                <div className="text-sm text-muted-foreground">Employees</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Government Jobs */}
        <section className="py-20">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Featured Government Jobs</h2>
              <p className="text-lg text-muted-foreground">
                Hand-picked opportunities from top government departments
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: '1',
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
                  id: '2',
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
                  id: '3',
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
                  id: '4',
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
                  id: '5',
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
                  id: '6',
                  title: 'HR Specialist',
                  agency: 'Office of Personnel Management',
                  location: 'Remote',
                  type: 'Full Time',
                  salary: '$55-70k',
                  posted: '5 days ago',
                  logo: '👥',
                  featured: true,
                  skills: ['HR Management', 'Recruitment', 'Training', 'Compliance']
                }
              ].map((job, index) => (
                <Card key={job?.id || index} className="hover:shadow-medium transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-2xl">
                          {job?.logo || '🏛️'}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{job?.title || 'Job Title'}</h3>
                          <p className="text-sm text-muted-foreground">{job?.agency || 'Agency'}</p>
                        </div>
                      </div>
                      {job?.featured && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Icons.MapPin className="h-4 w-4 mr-2" />
                        {job?.location || 'Location'}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Icons.Briefcase className="h-4 w-4 mr-2" />
                        {job?.type || 'Job Type'}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Icons.DollarSign className="h-4 w-4 mr-2" />
                        {job?.salary || 'Salary'}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(job?.skills || []).slice(0, 4).map((skill, skillIndex) => (
                        <Badge key={`${skill}-${skillIndex}`} variant="outline" className="text-xs">
                          {skill || 'Skill'}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Browse by Department */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Browse by Department
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore opportunities across different government departments
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {(categories || []).map((category, index) => (
                <Link key={category?.name || index} href={`/govt-jobs/department/${category?.name?.toLowerCase() || 'unknown'}`}>
                  <Card className="hover:shadow-medium transition-shadow cursor-pointer text-center group">
                    <CardContent className="p-6">
                      <div className="text-3xl mb-3">{category?.icon || '📂'}</div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {category?.name || 'Category'}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {category?.count || 0} jobs
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}