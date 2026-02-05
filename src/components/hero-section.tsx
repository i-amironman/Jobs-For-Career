'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';
import { AnimatedNumber } from '@/components/ui/animated-number';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-2">
                <Icons.TrendingUp className="h-4 w-4 mr-2" />
                #1 Platform for Freshers
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Find Your 
                <span className="text-primary"> Dream Job</span>
                <br />
                Start Your Career
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                The ultimate platform for students and freshers to discover exciting job opportunities, 
                internships, and connect with top companies worldwide.
              </p>
            </div>

            {/* Search Bar */}
            <Card className="shadow-medium">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="relative">
                    <Icons.Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Job title, keywords..."
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
                </div>
                <Button className="w-full md:w-auto px-8 py-3">
                  <Icons.Search className="h-4 w-4 mr-2" />
                  Search Jobs
                </Button>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  <AnimatedNumber end={10000} suffix="+" duration={2000} />
                </div>
                <div className="text-sm text-muted-foreground">Active Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  <AnimatedNumber end={500} suffix="+" duration={2000} />
                </div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  <AnimatedNumber end={50000} suffix="+" duration={2000} />
                </div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  <AnimatedNumber end={95} suffix="%" duration={2000} />
                </div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Icons.CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm text-muted-foreground">Verified Jobs</span>
              </div>
              <div className="flex items-center">
                <Icons.Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-sm text-muted-foreground">4.8/5 Rating</span>
              </div>
              <div className="flex items-center">
                <Icons.Zap className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-muted-foreground">Instant Apply</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative z-10">
              <Card className="shadow-strong overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icons.Target className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Start Your Journey Today
                    </h3>
                    <p className="text-muted-foreground">
                      Join thousands of students who found their dream jobs
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Icons.CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-sm text-foreground">Create your professional profile</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Icons.CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-sm text-foreground">Browse thousands of jobs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Icons.CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-sm text-foreground">Apply with one click</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Icons.CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-sm text-foreground">Get hired by top companies</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-8 h-8 bg-primary/20 rounded-full border-2 border-background flex items-center justify-center text-xs font-medium text-primary"
                          >
                            {i}
                          </div>
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-semibold text-primary">50,000+</span> students
                      </div>
                    </div>
                    <Button className="w-full">
                      Get Started Free
                      <Icons.ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-soft p-4 hidden lg:block">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Icons.Award className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Top Rated</div>
                    <div className="text-xs text-muted-foreground">Platform</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-soft p-4 hidden lg:block">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icons.Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">500+</div>
                    <div className="text-xs text-muted-foreground">Companies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;