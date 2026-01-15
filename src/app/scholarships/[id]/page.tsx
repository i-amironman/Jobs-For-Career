import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { getScholarshipById } from '@/lib/scholarship-data';
import Link from 'next/link';

interface ScholarshipPageProps {
  params: Promise<{ id: string }>;
}

export default async function ScholarshipPage({ params }: ScholarshipPageProps) {
  const { id } = await params;
  const scholarship = await getScholarshipById(id);

  if (!scholarship) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pt-0 pb-12">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Icons.Award className="h-12 w-12 text-muted-foreground" />
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Scholarship Not Found</h1>
              <p className="text-lg text-muted-foreground mb-8">
                The scholarship you're looking for doesn't exist or has been removed.
              </p>
              <Link href="/scholarships">
                <Button className="bg-primary hover:bg-primary/90">
                  Browse All Scholarships
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
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 pt-0 pb-12">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <img 
                  src="/illustrations/scholarships-hero.png" 
                  alt="Scholarship Details" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {scholarship.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {scholarship.field}
              </Badge>
              <Badge variant="outline">
                {scholarship.location}
              </Badge>
              <Badge variant="outline">
                {scholarship.amount}
              </Badge>
            </div>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-2xl">
                  {scholarship.logo}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">{scholarship.provider}</h2>
                  <p className="text-sm text-muted-foreground">Deadline: {scholarship.deadline}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pt-0 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Scholarship Description</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {scholarship.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Requirements */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Requirements</h2>
                    <ul className="space-y-3">
                      {(scholarship.requirements || []).map((req, index) => (
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
                    <h2 className="text-2xl font-bold text-foreground mb-4">Scholarship Responsibilities</h2>
                    <ul className="space-y-3">
                      {(scholarship.responsibilities || []).map((resp, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Icons.Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
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
                      {(scholarship.benefits || []).map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Icons.Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
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
                      {(scholarship.applicationProcess || []).map((step, index) => (
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
                {/* Provider Info */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">Provider Information</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground">{scholarship.providerInfo.name}</h4>
                        <p className="text-sm text-muted-foreground">{scholarship.providerInfo.type}</p>
                        <p className="text-sm text-muted-foreground">Founded: {scholarship.providerInfo.founded}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">{scholarship.providerInfo.description}</p>
                        <a 
                          href={scholarship.providerInfo.website} 
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
                      {(scholarship.eligibility || []).map((criteria, index) => (
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
                      Application deadline: {scholarship.deadline}
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