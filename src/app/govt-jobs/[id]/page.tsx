import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { getGovtJobById } from '@/lib/govt-job-data';
import Link from 'next/link';

interface GovtJobPageProps {
  params: Promise<{ id: string }>;
}

export default async function GovtJobPage({ params }: GovtJobPageProps) {
  const { id } = await params;
  const job = await getGovtJobById(id);

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Icons.Briefcase className="h-12 w-12 text-muted-foreground" />
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Government Job Not Found</h1>
              <p className="text-lg text-muted-foreground mb-8">
                The government job you're looking for doesn't exist or has been removed.
              </p>
              <Link href="/govt-jobs">
                <Button className="bg-primary hover:bg-primary/90">
                  Browse All Government Jobs
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
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
                  src="/illustrations/govt-jobs-hero.png" 
                  alt="Government Job Details" 
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
                  <h2 className="text-lg font-semibold text-foreground">{job.agency}</h2>
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

                {/* Requirements */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Requirements</h2>
                    <ul className="space-y-3">
                      {(job.requirements || []).map((req, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Icons.CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Responsibilities */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Responsibilities</h2>
                    <ul className="space-y-3">
                      {(job.responsibilities || []).map((resp, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Icons.Briefcase className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Benefits */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Benefits & Perks</h2>
                    <ul className="space-y-3">
                      {(job.benefits || []).map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Icons.Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
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
                      {(job.applicationProcess || []).map((step, index) => (
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
                {/* Agency Info */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">Agency Information</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground">{job.agencyInfo.name}</h4>
                        <p className="text-sm text-muted-foreground">{job.agencyInfo.department}</p>
                        <p className="text-sm text-muted-foreground">{job.agencyInfo.type}</p>
                        <p className="text-sm text-muted-foreground">Founded: {job.agencyInfo.founded}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">{job.agencyInfo.description}</p>
                        <a 
                          href={job.agencyInfo.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Eligibility */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">Eligibility Criteria</h3>
                    <ul className="space-y-2">
                      {(job.eligibility || []).map((criteria, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Icons.Shield className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{criteria}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Apply Button */}
                <Card>
                  <CardContent className="p-6">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-lg">
                      Apply Now
                      <Icons.ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <p className="text-xs text-muted-foreground mt-3 text-center">
                      Apply through USAJOBS
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