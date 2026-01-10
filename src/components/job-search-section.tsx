'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';

const JobSearchSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('all');

  const jobTypes = [
    { value: 'all', label: 'All Jobs' },
    { value: 'full-time', label: 'Full Time' },
    { value: 'part-time', label: 'Part Time' },
    { value: 'internship', label: 'Internship' },
    { value: 'remote', label: 'Remote' },
    { value: 'contract', label: 'Contract' },
  ];

  const featuredJobs = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      type: 'Internship',
      salary: '$25-30/hr',
      posted: '2 days ago',
      logo: '🏢',
      featured: true,
      skills: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: 2,
      title: 'Junior Software Engineer',
      company: 'StartupHub',
      location: 'New York, NY',
      type: 'Full Time',
      salary: '$70-90k',
      posted: '1 week ago',
      logo: '🚀',
      featured: true,
      skills: ['JavaScript', 'Node.js', 'MongoDB']
    },
    {
      id: 3,
      title: 'Marketing Assistant',
      company: 'Digital Agency Pro',
      location: 'Remote',
      type: 'Remote',
      salary: '$45-55k',
      posted: '3 days ago',
      logo: '📱',
      featured: true,
      skills: ['Social Media', 'Content Writing', 'SEO']
    },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Find Your Dream Job
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover thousands of job opportunities from top companies. 
            Start your career journey today.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-card rounded-2xl shadow-soft p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="relative">
                <Icons.Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Job title, keywords, or company"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <Icons.MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="City, state, or remote"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {jobTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-4">
              <Button className="flex-1 bg-primary hover:bg-primary/90">
                <Icons.Search className="h-4 w-4 mr-2" />
                Search Jobs
              </Button>
              <Button variant="outline">
                <Icons.Filter className="h-4 w-4 mr-2" />
                Advanced Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">10,000+</div>
            <div className="text-sm text-muted-foreground">Active Jobs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">50,000+</div>
            <div className="text-sm text-muted-foreground">Job Seekers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">95%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>

        {/* Featured Jobs */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-foreground">Featured Jobs</h3>
            <Button variant="ghost" className="text-primary">
              View All Jobs
              <Icons.ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-medium transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-2xl">
                        {job.logo}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{job.title}</h4>
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
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{job.posted}</span>
                    <Button size="sm" variant="outline">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trending Categories */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6">Trending Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Engineering', icon: '⚙️', jobs: 1234 },
              { name: 'Marketing', icon: '📢', jobs: 856 },
              { name: 'Design', icon: '🎨', jobs: 642 },
              { name: 'Sales', icon: '💼', jobs: 789 },
              { name: 'Finance', icon: '💰', jobs: 543 },
              { name: 'Customer Support', icon: '🎧', jobs: 321 },
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-soft transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <h4 className="font-medium text-foreground mb-1">{category.name}</h4>
                  <p className="text-xs text-muted-foreground">{category.jobs} jobs</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchSection;