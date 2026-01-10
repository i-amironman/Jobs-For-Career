import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { getJobById } from '@/lib/job-data';

interface JobPageProps {
  params: Promise<{ id: string }>;
}

export default async function JobPage({ params }: JobPageProps) {
  const { id } = await params;
  const job = await getJobById(id);

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <img 
                  src="/illustrations/jobs-stats.png" 
                  alt="Job Details" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {job.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {job.type}
              </Badge>
              <Badge variant="outline">
                {job.location}
              </Badge>
              <Badge variant="outline">
                {job.salary}
              </Badge>
            </div>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-2xl">
                  {job.logo}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">{job.company}</h2>
                  <p className="text-sm text-muted-foreground">{job.posted}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Job Description</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {job.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Responsibilities */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Key Responsibilities</h2>
                    <ul className="space-y-2">
                      {job.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Icons.CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Requirements */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Requirements</h2>
                    <ul className="space-y-2">
                      {job.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Icons.CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Skills */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Required Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <Badge key={index} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Benefits */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Benefits & Perks</h2>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Icons.Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Eligibility */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Eligibility</h2>
                    <ul className="space-y-2">
                      {job.eligibility.map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Icons.Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Application Process */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Application Process</h2>
                    <div className="space-y-3">
                      {job.applicationProcess.map((step, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                            {index + 1}
                          </div>
                          <span className="text-muted-foreground">{step}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Company Info */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">Company Information</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground">{job.companyInfo.name}</h4>
                        <p className="text-sm text-muted-foreground">{job.companyInfo.industry}</p>
                        <p className="text-sm text-muted-foreground">{job.companyInfo.size}</p>
                        <p className="text-sm text-muted-foreground">Founded: {job.companyInfo.founded}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">{job.companyInfo.description}</p>
                        <a 
                          href={job.companyInfo.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm"
                        >
                          Visit Website
                        </a>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          <Icons.MapPin className="h-4 w-4 inline mr-1" />
                          {job.companyInfo.headquarters}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Apply Button */}
                <Card>
                  <CardContent className="p-6">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-lg">
                      Apply Now
                    </Button>
                    <p className="text-sm text-muted-foreground text-center mt-2">
                      Application deadline: 30 days from posting
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}