'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { AnimatedNumber } from '@/components/ui/animated-number';
import FilterPanel from '@/components/ui/filter-panel';
import { useFilters } from '@/hooks/use-filters';
import { jobListItems } from '@/lib/job-data';

export default function JobsPage() {
  const {
    filters,
    filteredItems,
    updateFilters,
    resetFilters,
    resultsCount
  } = useFilters(jobListItems, 'jobs');

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-0 pb-12">
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

          {/* Filter Panel */}
          <FilterPanel
            filters={filters}
            onFiltersChange={updateFilters}
            onReset={resetFilters}
            type="jobs"
            resultsCount={resultsCount}
          />

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
                <AnimatedNumber end={15000} suffix="+" duration={2000} startOnView={true} />
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
                <AnimatedNumber end={800} suffix="+" duration={2000} startOnView={true} />
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
                <AnimatedNumber end={75000} suffix="+" duration={2000} startOnView={true} />
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
                <AnimatedNumber end={92} suffix="%" duration={2000} startOnView={true} />
              </div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>

          {/* Results Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              {resultsCount} {resultsCount === 1 ? 'Job' : 'Jobs'} Available
            </h2>
            {resultsCount === 0 && (
              <p className="text-muted-foreground">
                No jobs found matching your criteria. Try adjusting your filters.
              </p>
            )}
          </div>

          {/* Jobs List */}
          {resultsCount > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredItems.map((job) => (
                <Card key={job.id} className="hover:shadow-medium transition-shadow cursor-pointer">
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
                      {job.skills.slice(0, 4).map((skill, skillIndex) => (
                        <Badge key={`${skill}-${skillIndex}`} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{job.posted}</span>
                      <Button size="sm" onClick={() => window.location.href = `/jobs/${job.id}`}>
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

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
                <Card key={`category-${index}`} className="hover:shadow-soft transition-shadow cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform flex items-center justify-center rounded-full border-2 border-dashed ${category.bgClass} ${category.borderClass}`}>
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