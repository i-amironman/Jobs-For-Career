import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';

export default function InternshipsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="80" fill="#FF6F00" fillOpacity="0.1"/>
                  <path d="M100 40 L120 70 L160 70 L130 100 L140 140 L100 120 L60 140 L70 100 L40 70 L80 70 Z" fill="#FF6F00" fillOpacity="0.8"/>
                  <circle cx="100" cy="100" r="8" fill="#FFFFFF"/>
                  <path d="M100 20 L100 30" stroke="#FF6F00" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M90 30 L110 30" stroke="#FF6F00" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M85 35 L115 35" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M80 40 L120 40" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M70 140 L100 100 L130 140" stroke="#FF6F00" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <circle cx="85" cy="125" r="3" fill="#FF6F00"/>
                  <circle cx="115" cy="125" r="3" fill="#FF6F00"/>
                  <circle cx="100" cy="115" r="3" fill="#FF6F00"/>
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Launch Your Career with Internships
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Gain valuable work experience and build your professional network. Find the perfect internship to kickstart your career.
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
                      placeholder="Internship title, company..."
                      className="pl-10"
                    />
                  </div>
                  <div className="relative">
                    <Icons.MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Location or Remote"
                      className="pl-10"
                    />
                  </div>
                  <select className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">All Durations</option>
                    <option value="summer">Summer</option>
                    <option value="winter">Winter</option>
                    <option value="fall">Fall</option>
                    <option value="spring">Spring</option>
                    <option value="year-round">Year Round</option>
                  </select>
                </div>
                <div className="flex gap-4">
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    <Icons.Search className="h-4 w-4 mr-2" />
                    Search Internships
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
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 20 L70 40 L70 60 L50 80 L30 60 L30 40 Z" fill="#FF6F00" fillOpacity="0.8"/>
                  <circle cx="50" cy="50" r="8" fill="#FFFFFF"/>
                  <path d="M50 10 L50 15" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M50 85 L50 90" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M20 50 L25 50" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M75 50 L80 50" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-sm text-muted-foreground">Active Internships</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="25" y="30" width="50" height="40" rx="4" fill="#FF6F00" fillOpacity="0.2"/>
                  <rect x="35" y="40" width="30" height="20" rx="2" fill="#FF6F00" fillOpacity="0.8"/>
                  <circle cx="50" cy="50" r="3" fill="#FFFFFF"/>
                  <path d="M20 25 L50 15 L80 25" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  <path d="M20 25 L20 30" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M80 25 L80 30" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M50 70 L50 80" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="25" fill="#FF6F00" fillOpacity="0.2"/>
                  <circle cx="50" cy="50" r="15" fill="#FF6F00" fillOpacity="0.8"/>
                  <circle cx="50" cy="50" r="5" fill="#FFFFFF"/>
                  <path d="M50 25 L50 35" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M50 65 L50 75" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M30 50 L40 50" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M60 50 L70 50" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M35 35 L45 45" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M55 55 L65 65" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">25,000+</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 20 L60 40 L80 40 L65 55 L70 75 L50 60 L30 75 L35 55 L20 40 L40 40 Z" fill="#FF6F00" fillOpacity="0.8"/>
                  <circle cx="50" cy="50" r="3" fill="#FFFFFF"/>
                  <path d="M50 80 L50 85" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M45 85 L55 85" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M50 10 L50 15" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M85 50 L90 50" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M10 50 L15 50" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">88%</div>
              <div className="text-sm text-muted-foreground">Conversion Rate</div>
            </div>
          </div>

          {/* Featured Internships */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Internships</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Software Engineering Intern',
                  company: 'TechCorp Solutions',
                  location: 'San Francisco, CA',
                  duration: 'Summer 2024',
                  stipend: '$25-35/hr',
                  posted: '3 days ago',
                  logo: '🏢',
                  featured: true,
                  skills: ['JavaScript', 'React', 'Node.js', 'Git']
                },
                {
                  title: 'Marketing Intern',
                  company: 'Digital Agency Pro',
                  location: 'Remote',
                  duration: 'Summer 2024',
                  stipend: '$18-25/hr',
                  posted: '1 week ago',
                  logo: '📱',
                  featured: true,
                  skills: ['Social Media', 'Content Writing', 'SEO']
                },
                {
                  title: 'Data Science Intern',
                  company: 'FinanceFlow',
                  location: 'New York, NY',
                  duration: 'Summer 2024',
                  stipend: '$20-30/hr',
                  posted: '2 weeks ago',
                  logo: '💰',
                  featured: true,
                  skills: ['Python', 'SQL', 'Machine Learning', 'Excel']
                },
                {
                  title: 'Product Design Intern',
                  company: 'Design Studio Pro',
                  location: 'Los Angeles, CA',
                  duration: 'Fall 2024',
                  stipend: '$15-22/hr',
                  posted: '4 days ago',
                  logo: '🎨',
                  featured: true,
                  skills: ['Figma', 'Adobe XD', 'Prototyping', 'UI/UX']
                },
                {
                  title: 'Business Development Intern',
                  company: 'StartupHub',
                  location: 'Remote',
                  duration: 'Year Round',
                  stipend: '$12-18/hr',
                  posted: '1 week ago',
                  logo: '🚀',
                  featured: true,
                  skills: ['Sales', 'CRM', 'Communication', 'Research']
                },
                {
                  title: 'Cybersecurity Intern',
                  company: 'SecurityTech Systems',
                  location: 'Washington, DC',
                  duration: 'Summer 2024',
                  stipend: '$22-28/hr',
                  posted: '5 days ago',
                  logo: '🔒',
                  featured: true,
                  skills: ['Network Security', 'Penetration Testing', 'Python', 'Linux']
                },
              ].map((internship, index) => (
                <Card key={index} className="hover:shadow-medium transition-shadow cursor-pointer">
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
                      {internship.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{internship.posted}</span>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

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
                <Card key={index} className="hover:shadow-soft transition-shadow cursor-pointer">
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