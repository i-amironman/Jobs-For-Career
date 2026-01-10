'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';

export default function ScholarshipsPage() {
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
                  src="/illustrations/scholarships-hero.png" 
                  alt="Fund Your Education with Scholarships" 
                  className="w-full h-full object-cover rounded-lg shadow-soft"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Fund Your Education with Scholarships
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover thousands of scholarship opportunities to help you achieve your educational goals without financial burden.
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
                      placeholder="Scholarship name, field..."
                      className="pl-10"
                    />
                  </div>
                  <div className="relative">
                    <Icons.MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Location or Online"
                      className="pl-10"
                    />
                  </div>
                  <select className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">All Levels</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="graduate">Graduate</option>
                    <option value="postgraduate">Postgraduate</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>
                <div className="flex gap-4">
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    <Icons.Search className="h-4 w-4 mr-2" />
                    Search Scholarships
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
                  alt="Active Scholarships" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">8,500+</div>
              <div className="text-sm text-muted-foreground">Active Scholarships</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img 
                  src="/illustrations/success-stats.png" 
                  alt="Total Awards" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-sm text-muted-foreground">Total Awards</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img 
                  src="/illustrations/seekers-stats.png" 
                  alt="Students Helped" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">35,000+</div>
              <div className="text-sm text-muted-foreground">Students Helped</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <img 
                  src="/illustrations/success-stats.png" 
                  alt="Success Rate" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>

          {/* Featured Scholarships */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Scholarships</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'STEM Excellence Scholarship',
                  provider: 'National Science Foundation',
                  location: 'United States',
                  amount: '$10,000/year',
                  deadline: 'March 15, 2024',
                  logo: '🔬',
                  featured: true,
                  field: 'Science, Technology, Engineering, Math'
                },
                {
                  title: 'Future Leaders Scholarship',
                  provider: 'TechCorp Foundation',
                  location: 'Global',
                  amount: '$25,000',
                  deadline: 'April 1, 2024',
                  logo: '🌟',
                  featured: true,
                  field: 'Computer Science, Business'
                },
                {
                  title: 'Community Impact Scholarship',
                  provider: 'Education First Initiative',
                  location: 'United States',
                  amount: '$5,000',
                  deadline: 'March 30, 2024',
                  logo: '🎓',
                  featured: true,
                  field: 'Education, Social Work'
                },
                {
                  title: 'Innovation Grant',
                  provider: 'StartupHub Ventures',
                  location: 'Remote',
                  amount: '$15,000',
                  deadline: 'April 15, 2024',
                  logo: '🚀',
                  featured: true,
                  field: 'Entrepreneurship, Innovation'
                },
                {
                  title: 'Arts & Culture Scholarship',
                  provider: 'Creative Arts Foundation',
                  location: 'United States',
                  amount: '$8,000',
                  deadline: 'March 25, 2024',
                  logo: '🎨',
                  featured: true,
                  field: 'Arts, Design, Music'
                },
                {
                  title: 'Global Health Scholarship',
                  provider: 'World Health Organization',
                  location: 'Global',
                  amount: '$20,000',
                  deadline: 'May 1, 2024',
                  logo: '🏥',
                  featured: true,
                  field: 'Medicine, Public Health'
                },
              ].map((scholarship, index) => (
                <Card key={index} className="hover:shadow-medium transition-shadow cursor-pointer">
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
                        <Icons.DollarSign className="h-4 w-4 mr-2" />
                        {scholarship.amount}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Icons.Clock className="h-4 w-4 mr-2" />
                        Deadline: {scholarship.deadline}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Field:</strong> {scholarship.field}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Apply before deadline</span>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Scholarship Categories */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: 'STEM', icon: '🔬', scholarships: 3456 },
                { name: 'Business', icon: '💼', scholarships: 2341 },
                { name: 'Arts', icon: '🎨', scholarships: 1876 },
                { name: 'Medicine', icon: '🏥', scholarships: 1654 },
                { name: 'Education', icon: '🎓', scholarships: 1432 },
                { name: 'Social Sciences', icon: '👥', scholarships: 1298 },
                { name: 'Humanities', icon: '📚', scholarships: 987 },
                { name: 'Law', icon: '⚖️', scholarships: 765 },
              ].map((category, index) => (
                <Card key={index} className="hover:shadow-soft transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-3">{category.icon}</div>
                    <h3 className="font-medium text-foreground mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.scholarships} scholarships</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tips Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Scholarship Application Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Start Early</h3>
                  <p className="text-sm text-muted-foreground">
                    Begin your scholarship search at least 6-12 months before deadlines
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Customize Applications</h3>
                  <p className="text-sm text-muted-foreground">
                    Tailor each application to the specific scholarship requirements
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Get Recommendations</h3>
                  <p className="text-sm text-muted-foreground">
                    Secure strong letters of recommendation from teachers and mentors
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