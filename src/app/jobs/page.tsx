import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';

export default function JobsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Find Your Dream Job
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover thousands of job opportunities from top companies. Start your career journey today.
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
                      placeholder="Job title, keywords..."
                      className="pl-10"
                    />
                  </div>
                  <div className="relative">
                    <Icons.MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Location"
                      className="pl-10"
                    />
                  </div>
                  <select className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">All Categories</option>
                    <option value="technology">Technology</option>
                    <option value="marketing">Marketing</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                  </select>
                </div>
                <div className="flex gap-4">
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    <Icons.Search className="h-4 w-4 mr-2" />
                    Search Jobs
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
              <div className="text-3xl font-bold text-primary mb-2">15,000+</div>
              <div className="text-sm text-muted-foreground">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">800+</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">75,000+</div>
              <div className="text-sm text-muted-foreground">Job Seekers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">92%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>

          {/* Featured Jobs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Senior Frontend Developer',
                  company: 'TechCorp Solutions',
                  location: 'San Francisco, CA',
                  type: 'Full Time',
                  salary: '$120-150k',
                  posted: '2 days ago',
                  logo: '🏢',
                  featured: true,
                  skills: ['React', 'TypeScript', 'Node.js', 'AWS']
                },
                {
                  title: 'Product Manager',
                  company: 'StartupHub',
                  location: 'New York, NY',
                  type: 'Full Time',
                  salary: '$90-120k',
                  posted: '1 week ago',
                  logo: '🚀',
                  featured: true,
                  skills: ['Product Strategy', 'Agile', 'Analytics']
                },
                {
                  title: 'UX Designer',
                  company: 'Design Studio Pro',
                  location: 'Remote',
                  type: 'Full Time',
                  salary: '$80-100k',
                  posted: '3 days ago',
                  logo: '🎨',
                  featured: true,
                  skills: ['Figma', 'Adobe XD', 'Prototyping']
                },
                {
                  title: 'Data Analyst',
                  company: 'FinanceFlow',
                  location: 'Chicago, IL',
                  type: 'Full Time',
                  salary: '$70-90k',
                  posted: '5 days ago',
                  logo: '💰',
                  featured: true,
                  skills: ['Python', 'SQL', 'Tableau', 'Excel']
                },
                {
                  title: 'Marketing Manager',
                  company: 'Digital Agency Pro',
                  location: 'Los Angeles, CA',
                  type: 'Full Time',
                  salary: '$85-110k',
                  posted: '1 week ago',
                  logo: '📱',
                  featured: true,
                  skills: ['Digital Marketing', 'SEO', 'Content Strategy']
                },
                {
                  title: 'Backend Engineer',
                  company: 'CloudTech Systems',
                  location: 'Seattle, WA',
                  type: 'Full Time',
                  salary: '$110-140k',
                  posted: '4 days ago',
                  logo: '☁️',
                  featured: true,
                  skills: ['Java', 'Spring Boot', 'Microservices', 'Docker']
                },
              ].map((job, index) => (
                <Card key={index} className="hover:shadow-medium transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-2xl">
                          {job.logo}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{job.title}</h3>
                          <p className="text-sm text-muted-foreground">{job.company}</p>
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
                        <span className="h-4 w-4 mr-2">$</span>
                        {job.salary}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{job.posted}</span>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Job Categories */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: 'Technology', icon: '💻', jobs: 5432 },
                { name: 'Marketing', icon: '📢', jobs: 3211 },
                { name: 'Design', icon: '🎨', jobs: 2156 },
                { name: 'Sales', icon: '💼', jobs: 1876 },
                { name: 'Finance', icon: '💰', jobs: 1654 },
                { name: 'Healthcare', icon: '🏥', jobs: 1432 },
                { name: 'Education', icon: '🎓', jobs: 1298 },
                { name: 'Customer Support', icon: '🎧', jobs: 987 },
              ].map((category, index) => (
                <Card key={index} className="hover:shadow-soft transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-3">{category.icon}</div>
                    <h3 className="font-medium text-foreground mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.jobs} jobs</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}