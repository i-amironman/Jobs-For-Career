'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { AnimatedNumber } from '@/components/ui/animated-number';

export default function JobsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 relative flex items-center justify-center">
              <img 
                src="/illustrations/jobs-hero.png" 
                alt="Find Your Dream Job" 
                className="w-full h-full object-contain"
              />
            </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Find Your Dream Job
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover thousands of job opportunities from top companies. Start your career journey today.
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
                      placeholder="Job title, keywords..."
                      className="pl-10"
                    />
                  </div>
                  <div className="relative">
                    <Icons.MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Location"
                      className="pl-10"
                    />
                  </div>
                  <select className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">All Categories</option>
                    <option value="technology">Technology</option>
                    <option value="marketing">Marketing</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                  </select>
                </div>
                <div className="flex gap-4">
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    <Icons.Search className="h-4 w-4 mr-2" />
                    Search Jobs
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
              <div className="w-16 h-16 mx-auto mb-4 relative flex items-center justify-center">
                <img 
                  src="/illustrations/jobs-stats.png" 
                  alt="Active Jobs" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                <AnimatedNumber end={15000} suffix="+" duration={2000} />
              </div>
              <div className="text-sm text-muted-foreground">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative flex items-center justify-center">
                <img 
                  src="/illustrations/companies-stats.png" 
                  alt="Companies" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                <AnimatedNumber end={800} suffix="+" duration={2000} />
              </div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative flex items-center justify-center">
                <img 
                  src="/illustrations/seekers-stats.png" 
                  alt="Job Seekers" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                <AnimatedNumber end={75000} suffix="+" duration={2000} />
              </div>
              <div className="text-sm text-muted-foreground">Job Seekers</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative flex items-center justify-center">
                <img 
                  src="/illustrations/success-stats.png" 
                  alt="Success Rate" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                <AnimatedNumber end={92} suffix="%" duration={2000} />
              </div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>

          {/* Featured Jobs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
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
                  skills: ['React', 'TypeScript', 'Node.js', 'AWS']
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
                  skills: ['Product Strategy', 'Agile', 'Analytics']
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
                  skills: ['Figma', 'Adobe XD', 'Prototyping']
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
                          <p className="text-sm text-muted-foreground">{job.company}</p>
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
                      <Button size="sm" asChild>
                        <Link href={`/jobs/${job.id}`}>
                          Apply Now
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Job Categories */}
          <div>
            <div className="text-center mb-8">
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <img 
                  src="/illustrations/categories-icon.png" 
                  alt="Browse by Category" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Browse by Category</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: 'Technology', icon: '💻', jobs: 5432, bgClass: 'bg-blue-50', borderClass: 'border-blue-300' },
                { name: 'Marketing', icon: '📢', jobs: 3211, bgClass: 'bg-green-50', borderClass: 'border-green-300' },
                { name: 'Design', icon: '🎨', jobs: 2156, bgClass: 'bg-amber-50', borderClass: 'border-amber-300' },
                { name: 'Sales', icon: '💼', jobs: 1876, bgClass: 'bg-red-50', borderClass: 'border-red-300' },
                { name: 'Finance', icon: '💰', jobs: 1654, bgClass: 'bg-purple-50', borderClass: 'border-purple-300' },
                { name: 'Healthcare', icon: '🏥', jobs: 1432, bgClass: 'bg-pink-50', borderClass: 'border-pink-300' },
                { name: 'Education', icon: '🎓', jobs: 1298, bgClass: 'bg-cyan-50', borderClass: 'border-cyan-300' },
                { name: 'Customer Support', icon: '🎧', jobs: 987, bgClass: 'bg-lime-50', borderClass: 'border-lime-300' },
              ].map((category, index) => (
                <Card key={index} className="hover:shadow-soft transition-shadow cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 relative group-hover:scale-110 transition-transform flex items-center justify-center rounded-full border-2 border-dashed ${category.bgClass} ${category.borderClass}`}>
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <h3 className="font-medium text-foreground mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.jobs} jobs</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}