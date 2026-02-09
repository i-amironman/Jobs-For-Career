'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { AnimatedNumber } from '@/components/ui/animated-number';


const FeaturesSection = () => {
  const features = [
    {
      icon: <Icons.TrendingUp className="h-8 w-8 text-primary" />,
      title: 'Career Growth',
      description: 'Find opportunities that match your skills and help you grow professionally with top companies.',
    },
    {
      icon: <Icons.Users className="h-8 w-8 text-primary" />,
      title: 'Direct Connection',
      description: 'Connect directly with hiring managers and recruiters from leading companies.',
    },
    {
      icon: <Icons.Building2 className="h-8 w-8 text-primary" />,
      title: 'Top Companies',
      description: 'Access job opportunities from Fortune 500 companies and innovative startups.',
    },
    {
      icon: <Icons.Award className="h-8 w-8 text-primary" />,
      title: 'Skill Development',
      description: 'Improve your skills with our comprehensive resources and certification programs.',
    },
    {
      icon: <Icons.Globe className="h-8 w-8 text-primary" />,
      title: 'Global Opportunities',
      description: 'Explore job opportunities from around the world, including remote positions.',
    },
    {
      icon: <Icons.CheckCircle className="h-8 w-8 text-primary" />,
      title: 'Verified Jobs',
      description: 'All job listings are verified to ensure authenticity and prevent scams.',
    },
  ];

  const stats = [
    { value: 95, label: 'Success Rate', suffix: '%' },
    { value: 48, label: 'Avg. Response Time', suffix: 'hrs' },
    { value: 1000, label: 'Daily New Jobs', suffix: '+' },
    { value: 4.8, label: 'User Rating', suffix: '/5' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Choose JobsForCareer?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to helping students and freshers find their perfect career opportunities. 
            Our platform offers unique features designed to accelerate your job search.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {(stats || []).map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                <AnimatedNumber 
                  end={stat.value} 
                  suffix={stat.suffix} 
                  duration={2000} 
                />
              </div>
              <div className="text-sm text-muted-foreground">{stat?.label || ''}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {(features || []).map((feature, index) => (
            <Card key={index} className="hover:shadow-medium transition-shadow group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  {feature?.icon || <Icons.Star className="h-8 w-8 text-primary" />}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature?.title || 'Feature'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature?.description || 'Description'}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get started with JobsForCareer in 4 simple steps and land your dream job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Create Profile', description: 'Sign up and build your professional profile' },
              { step: 2, title: 'Browse Jobs', description: 'Search through thousands of job opportunities' },
              { step: 3, title: 'Apply Instantly', description: 'Apply to jobs with just one click' },
              { step: 4, title: 'Get Hired', description: 'Connect with employers and land your dream job' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item?.step || index + 1}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item?.title || 'Step'}</h3>
                <p className="text-sm text-muted-foreground">{item?.description || 'Description'}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of students and freshers who have found their dream jobs through JobsForCareer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Icons.Zap className="h-5 w-5 mr-2" />
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icons.Building2 className="h-5 w-5 mr-2" />
              Post a Job
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;