'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Icons } from '@/components/ui/icons';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      company: 'TechCorp Solutions',
      avatar: '👩‍💻',
      rating: 5,
      testimonial: 'JobsForCareer helped me land my dream job as a software engineer right after graduation. The platform made it easy to find relevant opportunities and connect with recruiters.',
      achievement: 'Hired within 2 weeks',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Intern',
      company: 'Digital Agency Pro',
      avatar: '👨‍💼',
      rating: 5,
      testimonial: 'As a student, I was worried about finding internships, but JobsForCareer made the process so smooth. I found multiple opportunities and ended up with a great internship!',
      achievement: '3 internship offers',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Junior Developer',
      company: 'StartupHub',
      avatar: '👩‍🎓',
      rating: 5,
      testimonial: 'The resume builder and career resources on JobsForCareer helped me improve my profile significantly. I received interview calls from top companies within days.',
      achievement: '5 interview calls',
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Data Analyst',
      company: 'FinanceFlow',
      avatar: '👨‍📊',
      rating: 5,
      testimonial: 'JobsForCareer\'s user-friendly interface and personalized job recommendations made my job search efficient and successful. Highly recommended for freshers!',
      achievement: 'Hired at dream company',
    },
    {
      id: 5,
      name: 'Jessica Taylor',
      role: 'Product Designer',
      company: 'Creative Studio',
      avatar: '👩‍🎨',
      rating: 5,
      testimonial: 'I found my perfect job through JobsForCareer. The platform connected me with amazing companies that value fresh talent and creativity.',
      achievement: 'Salary increased by 40%',
    },
    {
      id: 6,
      name: 'Robert Martinez',
      role: 'Sales Associate',
      company: 'RetailTech',
      avatar: '👨‍💼',
      rating: 5,
      testimonial: 'The job search can be overwhelming, but JobsForCareer made it simple and effective. I found a great sales position that matches my skills perfectly.',
      achievement: 'Promoted after 6 months',
    },
  ];

  const stats = [
    { value: '10,000+', label: 'Success Stories' },
    { value: '4.8/5', label: 'Average Rating' },
    { value: '95%', label: 'Satisfaction Rate' },
    { value: '2 weeks', label: 'Avg. Time to Hire' },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(testimonials?.length || 1, 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(testimonials?.length || 1, 1)) % Math.max(testimonials?.length || 1, 1));
  };

  const goToTestimonial = (index: number) => {
    if (index >= 0 && index < (testimonials?.length || 0)) {
      setCurrentIndex(index);
    }
  };

  // Ensure currentIndex is always valid
  const safeCurrentIndex = Math.min(currentIndex, Math.max((testimonials?.length || 1) - 1, 0));

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Success Stories from Our Users
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from students and freshers who found their dream jobs through JobsForCareer.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {(stats || []).map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat?.value || ''}</div>
              <div className="text-sm text-muted-foreground">{stat?.label || ''}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-medium">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <Icons.Quote className="h-12 w-12 text-primary opacity-20" />
              </div>
              
              <div className="text-center mb-8">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  "{testimonials[safeCurrentIndex]?.testimonial || ''}"
                </p>
                
                <div className="flex items-center justify-center mb-4">
                  {Array.from({ length: testimonials[safeCurrentIndex]?.rating || 0 }).map((_, i) => (
                    <Icons.Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {testimonials[safeCurrentIndex]?.achievement || ''}
                </Badge>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <div className="text-4xl">{testimonials[safeCurrentIndex]?.avatar || '👤'}</div>
                <div className="text-center">
                  <h4 className="font-semibold text-foreground">{testimonials[safeCurrentIndex]?.name || 'Anonymous'}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[safeCurrentIndex]?.role || 'Professional'}</p>
                  <p className="text-sm text-primary">{testimonials[safeCurrentIndex]?.company || 'Company'}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="rounded-full"
                >
                  <Icons.ChevronLeft className="h-4 w-4" />
                </Button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === safeCurrentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="rounded-full"
                >
                  <Icons.ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(testimonials || []).slice(0, 3).map((testimonial, index) => (
            <Card key={testimonial?.id || index} className="hover:shadow-soft transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial?.avatar || '👤'}</div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial?.name || 'Anonymous'}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial?.role || 'Professional'}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {Array.from({ length: testimonial?.rating || 0 }).map((_, i) => (
                    <Icons.Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  "{testimonial?.testimonial?.substring(0, 100) || ''}..."
                </p>
                
                <Badge variant="outline" className="text-xs">
                  {testimonial?.achievement || ''}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of students and freshers who have found their dream jobs through JobsForCareer.
          </p>
          <Button size="lg">
            Start Your Job Search Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;