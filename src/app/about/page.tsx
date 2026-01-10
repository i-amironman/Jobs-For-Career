import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About JobsForCareer
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are dedicated to connecting talented students and freshers with their dream career opportunities through our comprehensive job platform.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-16">
            <Card className="shadow-medium">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icons.Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  To bridge the gap between education and employment by providing a user-friendly platform that connects students and freshers with meaningful career opportunities.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1,000+</div>
              <div className="text-sm text-muted-foreground">Partner Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25,000+</div>
              <div className="text-sm text-muted-foreground">Jobs Posted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-soft transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icons.Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Student-Centric</h3>
                  <p className="text-sm text-muted-foreground">
                    We prioritize the needs of students and freshers in everything we do.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-soft transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icons.CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Quality Focus</h3>
                  <p className="text-sm text-muted-foreground">
                    We verify all job postings to ensure authenticity and relevance.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-soft transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icons.Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Accessibility</h3>
                  <p className="text-sm text-muted-foreground">
                    Our platform is designed to be accessible to all users.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: 'Sarah Johnson',
                  role: 'CEO & Founder',
                  bio: 'Former HR executive with 15+ years of experience in talent acquisition.',
                  avatar: '👩‍💼'
                },
                {
                  name: 'Michael Chen',
                  role: 'CTO',
                  bio: 'Tech enthusiast passionate about building scalable platforms.',
                  avatar: '👨‍💻'
                },
                {
                  name: 'Emily Rodriguez',
                  role: 'Head of Operations',
                  bio: 'Operations expert focused on user experience and platform growth.',
                  avatar: '👩‍🎓'
                },
                {
                  name: 'David Kim',
                  role: 'Lead Developer',
                  bio: 'Full-stack developer with expertise in modern web technologies.',
                  avatar: '👨‍💻'
                },
              ].map((member, index) => (
                <Card key={index} className="hover:shadow-soft transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{member.avatar}</div>
                    <h3 className="font-semibold text-foreground mb-2">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Story */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <div className="prose max-w-none text-muted-foreground leading-relaxed">
                    <p className="mb-4">
                      JobsForCareer was founded in 2024 with a simple yet powerful vision: to create a platform that truly understands the unique challenges faced by students and freshers entering the job market.
                    </p>
                    <p className="mb-4">
                      After witnessing countless talented graduates struggle to find their first jobs due to lack of experience and connections, our team decided to build a solution that would level the playing field and provide equal opportunities for all.
                    </p>
                    <p className="mb-4">
                      Today, JobsForCareer has grown into a trusted platform serving thousands of students and freshers across various industries, helping them launch their careers with confidence and success.
                    </p>
                    <p>
                      We continue to innovate and improve our platform based on user feedback, ensuring that we remain the go-to resource for early career professionals.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Get in Touch</h2>
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-medium">
                <CardContent className="p-8 text-center">
                  <p className="text-muted-foreground mb-6">
                    Have questions or feedback? We'd love to hear from you!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" className="w-full sm:w-auto">
                      <Icons.Mail className="h-4 w-4 mr-2" />
                      Email Us
                    </Button>
                    <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                      <Icons.Phone className="h-4 w-4 mr-2" />
                      Call Us
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground mt-4">
                    <p>support@jobsforcareer.com</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </CardContent>
              </Card>
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
      </main>
      <Footer />
    </div>
  );
}