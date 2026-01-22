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
import FilterPanel from '@/components/ui/filter-panel';
import { useFilters } from '@/hooks/use-filters';
import { internshipListItems } from '@/lib/internship-data';

export default function InternshipsPage() {
  const {
    filters,
    filteredItems,
    updateFilters,
    resetFilters,
    resultsCount
  } = useFilters(internshipListItems, 'internships');

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
                  src="/illustrations/internships-hero.png" 
                  alt="Launch Your Career with Internships" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Launch Your Career with Internships
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Gain valuable work experience and build your professional network. Find the perfect internship to kickstart your career.
            </p>
          </div>

          {/* Filter Panel */}
          <FilterPanel
            filters={filters}
            onFiltersChange={updateFilters}
            onReset={resetFilters}
            type="internships"
            resultsCount={resultsCount}
          />

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative flex items-center justify-center">
                <img 
                  src="/illustrations/jobs-stats.png" 
                  alt="Active Internships" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                <AnimatedNumber end={5000} suffix="+" duration={2000} startOnView={false} />
              </div>
              <div className="text-sm text-muted-foreground">Active Internships</div>
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
                <AnimatedNumber end={500} suffix="+" duration={2000} startOnView={false} />
              </div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative flex items-center justify-center">
                <img 
                  src="/illustrations/seekers-stats.png" 
                  alt="Students" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                <AnimatedNumber end={25000} suffix="+" duration={2000} startOnView={false} />
              </div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative flex items-center justify-center">
                <img 
                  src="/illustrations/success-stats.png" 
                  alt="Conversion Rate" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                <AnimatedNumber end={88} suffix="%" duration={2000} startOnView={false} />
              </div>
              <div className="text-sm text-muted-foreground">Conversion Rate</div>
            </div>
          </div>

          {/* Results Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              {resultsCount} {resultsCount === 1 ? 'Internship' : 'Internships'} Available
            </h2>
            {resultsCount === 0 && (
              <p className="text-muted-foreground">
                No internships found matching your criteria. Try adjusting your filters.
              </p>
            )}
          </div>

          {/* Internships List */}
          {resultsCount > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredItems.map((internship) => (
                <Card key={internship.id} className="hover:shadow-medium transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-2xl">
                          {internship.logo}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{internship.title}</h3>
                          <p className="text-sm text-muted-foreground">{internship.company}</p>
                        </div>
                      </div>
                      {internship.featured && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          Featured
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Icons.MapPin className="h-4 w-4 mr-2" />
                        {internship.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Icons.Clock className="h-4 w-4 mr-2" />
                        {internship.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span className="h-4 w-4 mr-2">$</span>
                        {internship.stipend}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {internship.skills.slice(0, 4).map((skill, skillIndex) => (
                        <Badge key={`${skill}-${skillIndex}`} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{internship.posted}</span>
                      <Button size="sm" onClick={() => window.location.href = `/internships/${internship.id}`}>
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Internship Categories */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Browse by Field</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: 'Engineering', icon: '⚙️', internships: 2341 },
                { name: 'Business', icon: '💼', internships: 1876 },
                { name: 'Design', icon: '🎨', internships: 1234 },
                { name: 'Marketing', icon: '📢', internships: 1098 },
                { name: 'Data Science', icon: '📊', internships: 876 },
                { name: 'Finance', icon: '💰', internships: 654 },
                { name: 'Healthcare', icon: '🏥', internships: 543 },
                { name: 'Education', icon: '🎓', internships: 432 },
              ].map((category, index) => (
                <Card key={`internship-category-${index}`} className="hover:shadow-soft transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-3">{category.icon}</div>
                    <h3 className="font-medium text-foreground mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.internships} internships</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Why Internships Matter</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-soft transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icons.TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Career Growth</h3>
                  <p className="text-sm text-muted-foreground">
                    Gain hands-on experience and accelerate your career development
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-soft transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icons.Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Networking</h3>
                  <p className="text-sm text-muted-foreground">
                    Build professional connections that last a lifetime
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-soft transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icons.Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Skill Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn industry-specific skills and tools
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