'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';










const CompaniesSection = () => {
  const topCompanies = [
    {
      name: 'TechCorp Solutions',
      logo: '🏢',
      industry: 'Technology',
      location: 'San Francisco, CA',
      employees: '1000-5000',
      rating: 4.8,
      openJobs: 45,
      description: 'Leading technology company specializing in innovative software solutions.',
      benefits: ['Health Insurance', 'Remote Work', 'Stock Options'],
    },
    {
      name: 'StartupHub',
      logo: '🚀',
      industry: 'Software',
      location: 'New York, NY',
      employees: '100-500',
      rating: 4.6,
      openJobs: 23,
      description: 'Fast-growing startup building the future of work productivity tools.',
      benefits: ['Flexible Hours', 'Equity', 'Growth Opportunities'],
    },
    {
      name: 'Digital Agency Pro',
      logo: '📱',
      industry: 'Marketing',
      location: 'Los Angeles, CA',
      employees: '50-100',
      rating: 4.5,
      openJobs: 18,
      description: 'Full-service digital marketing agency helping brands grow online.',
      benefits: ['Creative Environment', 'Training Programs', 'Team Events'],
    },
    {
      name: 'FinanceFlow',
      logo: '💰',
      industry: 'Finance',
      location: 'Chicago, IL',
      employees: '500-1000',
      rating: 4.7,
      openJobs: 32,
      description: 'Innovative fintech company revolutionizing digital banking solutions.',
      benefits: ['Competitive Salary', 'Bonus Structure', 'Career Development'],
    },
  ];

  const companyCategories = [
    { name: 'Technology', count: 1234, icon: '💻' },
    { name: 'Healthcare', count: 856, icon: '🏥' },
    { name: 'Finance', count: 642, icon: '🏦' },
    { name: 'Education', count: 432, icon: '🎓' },
    { name: 'Retail', count: 321, icon: '🛍️' },
    { name: 'Manufacturing', count: 287, icon: '🏭' },
  ];

  return (
    <section id="top-companies" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Top Companies Hiring Now
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover opportunities from leading companies that are actively hiring talented students and freshers.
          </p>
        </div>

        {/* Company Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {(companyCategories || []).map((category, index) => (
            <Card key={index} className="hover:shadow-soft transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{category?.icon || '🏢'}</div>
                <h4 className="font-medium text-foreground mb-1">{category?.name || 'Category'}</h4>
                <p className="text-xs text-muted-foreground">{category?.count || 0} companies</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Top Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {(topCompanies || []).map((company, index) => (
            <Card key={index} className="hover:shadow-medium transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center text-3xl">
                      {company?.logo || '🏢'}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{company?.name || 'Company'}</h3>
                      <p className="text-sm text-muted-foreground">{company?.industry || 'Industry'}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      <Icons.Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium ml-1">{company?.rating || 0}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{company?.openJobs || 0} open jobs</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {company?.description || 'Company description'}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icons.MapPin className="h-4 w-4 mr-2" />
                    {company?.location || 'Location'}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icons.Users className="h-4 w-4 mr-2" />
                    {company?.employees || 'N/A'} employees
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {(company?.benefits || []).map((benefit, benefitIndex) => (
                    <Badge key={benefitIndex} variant="secondary" className="text-xs">
                      {benefit}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1">View Jobs</Button>
                  <Button variant="outline">Follow</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Are you an employer?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Post your job openings on JobsForCareer and connect with talented students and freshers 
            who are eager to start their careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Icons.Building2 className="h-5 w-5 mr-2" />
              Post a Job
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;