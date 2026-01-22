'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';
import { AnimatedNumber } from '@/components/ui/animated-number';
import FilterPanel from '@/components/ui/filter-panel';
import { useFilters } from '@/hooks/use-filters';
import { govtJobListItems } from '@/lib/govt-job-data';

export default function GovtJobsPage() {
  const {
    filters,
    filteredItems,
    updateFilters,
    resetFilters,
    resultsCount
  } = useFilters(govtJobListItems, 'govt-jobs');

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

            {/* Filter Panel */}
            <FilterPanel
              filters={filters}
              onFiltersChange={updateFilters}
              onReset={resetFilters}
              type="govt-jobs"
              resultsCount={resultsCount}
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
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
            
            {/* Results Header */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {resultsCount} {resultsCount === 1 ? 'Job' : 'Jobs'} Available
              </h3>
              {resultsCount === 0 && (
                <p className="text-muted-foreground">
                  No government jobs found matching your criteria. Try adjusting your filters.
                </p>
              )}
            </div>
            
            {resultsCount > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                          <Icons.DollarSign className="h-4 w-4 mr-2" />
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
                      <Button className="w-full">
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
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
              {categories.map((category, index) => (
                <Card key={category.name} className="hover:shadow-medium transition-shadow cursor-pointer text-center group">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-3">{category.icon}</div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {category.count} jobs
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}