'use client'

import { Layout } from '@/components/layout/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  SearchIcon,
  BriefcaseIcon,
  BookOpenIcon,
  BuildingIcon,
  UsersIcon,
  TrendingUpIcon,
  ClockIcon,
  MapPinIcon,
  DollarSignIcon,
  ArrowRightIcon,
  StarIcon,
  CheckCircleIcon
} from '@/components/ui/icons'

export default function Home() {
  const featuredJobs = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      type: 'Internship',
      salary: '$25-35/hr',
      posted: '2 days ago',
      featured: true,
    },
    {
      id: 2,
      title: 'Junior Software Engineer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$70-90k',
      posted: '1 week ago',
      featured: true,
    },
    {
      id: 3,
      title: 'Marketing Associate',
      company: 'MarketingPro',
      location: 'Remote',
      type: 'Full-time',
      salary: '$50-65k',
      posted: '3 days ago',
      featured: true,
    },
  ]

  const stats = [
    { icon: BriefcaseIcon, label: 'Active Jobs', value: '10,000+' },
    { icon: BuildingIcon, label: 'Companies', value: '2,500+' },
    { icon: UsersIcon, label: 'Job Seekers', value: '500,000+' },
    { icon: TrendingUpIcon, label: 'Success Rate', value: '95%' },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto px-4">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              🎯 Trusted by 500,000+ Job Seekers
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Find Your <span className="text-gradient">Dream Career</span>
              <br />
              Start Your Journey Today
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover best job opportunities and internships tailored for students and freshers. 
              Connect with top companies and build your future.
            </p>
            
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-8">
              <div className="relative flex-1">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <SearchIcon />
                </div>
                <Input
                  placeholder="Job title, skills, or company"
                  className="pl-12 pr-4 py-4 text-lg"
                />
              </div>
              <div className="relative flex-1">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <MapPinIcon />
                </div>
                <Input
                  placeholder="Location or Remote"
                  className="pl-12 pr-4 py-4 text-lg"
                />
              </div>
              <Button className="px-8 py-4 text-lg">
                Search Jobs
                <ArrowRightIcon />
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="rounded-full">
                <BriefcaseIcon />
                Engineering
              </Button>
              <Button variant="outline" className="rounded-full">
                <BookOpenIcon />
                Internships
              </Button>
              <Button variant="outline" className="rounded-full">
                <BuildingIcon />
                Remote Jobs
              </Button>
              <Button variant="outline" className="rounded-full">
                <TrendingUpIcon />
                Entry Level
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hand-picked jobs and internships from top companies looking for talented students and freshers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {featuredJobs.map((job) => (
              <Card key={job.id} className="group cursor-pointer hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center">
                        <BuildingIcon />
                      </div>
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {job.title}
                        </CardTitle>
                        <CardDescription className="text-foreground font-medium">
                          {job.company}
                        </CardDescription>
                      </div>
                    </div>
                    {job.featured && (
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        Featured
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPinIcon />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSignIcon />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{job.type}</Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <ClockIcon />
                      <span>{job.posted}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-1">
                      <StarIcon className="text-primary" />
                      <span className="text-sm font-medium">4.8</span>
                      <span className="text-sm text-muted-foreground">(23)</span>
                    </div>
                    <Button size="sm">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg">
              View All Jobs
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose JobsForCareer?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make job searching simple, effective, and tailored for students and freshers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <Card className="text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <SearchIcon />
                </div>
                <CardTitle>Smart Search</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Advanced filters and AI-powered recommendations to find jobs that match your skills and preferences.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <UsersIcon />
                </div>
                <CardTitle>Direct Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Connect directly with recruiters and hiring managers. No middlemen, just direct opportunities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon />
                </div>
                <CardTitle>Verified Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  All job listings are verified and updated regularly to ensure authenticity and relevance.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-orange-400">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students and freshers who found their dream jobs through JobsForCareer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Get Started Free
              <ArrowRightIcon />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Post a Job
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}