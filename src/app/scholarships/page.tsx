'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';
import { AnimatedNumber } from '@/components/ui/animated-number';
import FilterPanel from '@/components/ui/filter-panel';
import { useFilters } from '@/hooks/use-filters';
import { scholarshipListItems } from '@/lib/scholarship-data';

export default function ScholarshipsPage() {
  const {
    filters,
    filteredItems,
    updateFilters,
    resetFilters,
    resultsCount
  } = useFilters(scholarshipListItems, 'scholarships');

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
                  src="/illustrations/scholarships-hero.png" 
                  alt="Find Your Perfect Scholarship" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Find Your Perfect Scholarship
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover amazing scholarship opportunities to fund your education. Apply for financial aid that matches your academic goals.
            </p>
          </div>

          {/* Filter Panel */}
          <FilterPanel
            filters={filters}
            onFiltersChange={updateFilters}
            onReset={resetFilters}
            type="scholarships"
            resultsCount={resultsCount}
          />

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative flex items-center justify-center">
                <img 
                  src="/illustrations/jobs-stats.png" 
                  alt="Active Scholarships" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                <AnimatedNumber end={3500} suffix="+" duration={2000} />
              </div>
              <div className="text-sm text-muted-foreground">Active Scholarships</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative flex items-center justify-center">
                <img 
                  src="/illustrations/companies-stats.png" 
                  alt="Providers" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                <AnimatedNumber end={250} suffix="+" duration={2000} />
              </div>
              <div className="text-sm text-muted-foreground">Providers</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative flex items-center justify-center">
                <img 
                  src="/illustrations/seekers-stats.png" 
                  alt="Students Helped" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                <AnimatedNumber end={50000} suffix="+" duration={2000} />
              </div>
              <div className="text-sm text-muted-foreground">Students Helped</div>
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
                <AnimatedNumber end={85} suffix="%" duration={2000} />
              </div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>

          {/* Results Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              {resultsCount} {resultsCount === 1 ? 'Scholarship' : 'Scholarships'} Available
            </h2>
            {resultsCount === 0 && (
              <p className="text-muted-foreground">
                No scholarships found matching your criteria. Try adjusting your filters.
              </p>
            )}
          </div>

          {/* Scholarships List */}
          {resultsCount > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredItems.map((scholarship) => (
                <Card key={scholarship.id} className="hover:shadow-medium transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-2xl">
                          {scholarship.logo}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{scholarship.title}</h3>
                          <p className="text-sm text-muted-foreground">{scholarship.provider}</p>
                        </div>
                      </div>
                      {scholarship.featured && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          Featured
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Icons.MapPin className="h-4 w-4 mr-2" />
                        {scholarship.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span className="h-4 w-4 mr-2">$</span>
                        {scholarship.amount}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Icons.Clock className="h-4 w-4 mr-2" />
                        Deadline: {scholarship.deadline}
                      </div>
                    </div>

                    <div className="mb-4">
                      <Badge variant="outline" className="text-xs">
                        {scholarship.field}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Apply before {scholarship.deadline}</span>
                      <Button size="sm" onClick={() => window.location.href = `/scholarships/${scholarship.id}`}>
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Scholarship Categories */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Browse by Field</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: 'STEM', icon: '🔬', scholarships: 1234 },
                { name: 'Business', icon: '💼', scholarships: 987 },
                { name: 'Arts', icon: '🎨', scholarships: 654 },
                { name: 'Healthcare', icon: '🏥', scholarships: 543 },
                { name: 'Education', icon: '🎓', scholarships: 432 },
                { name: 'Engineering', icon: '⚙️', scholarships: 321 },
                { name: 'Social Work', icon: '🤝', scholarships: 210 },
                { name: 'Public Health', icon: '🏥', scholarships: 189 },
              ].map((category, index) => (
                <Card key={`scholarship-category-${index}`} className="hover:shadow-soft transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-3">{category.icon}</div>
                    <h3 className="font-medium text-foreground mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.scholarships} scholarships</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Why Apply for Scholarships?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-soft transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icons.DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Financial Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Reduce the financial burden of education and focus on your studies
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-soft transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icons.Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Academic Recognition</h3>
                  <p className="text-sm text-muted-foreground">
                    Enhance your resume and stand out to future employers
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-soft transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icons.Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Networking Opportunities</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with scholarship providers and fellow recipients
                  </p>
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