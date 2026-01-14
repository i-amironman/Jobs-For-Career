import { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Icons } from '@/components/ui/icons';

export const metadata: Metadata = {
  title: 'Terms of Service - JobsForCareer',
  description: 'Read JobsForCareer\'s comprehensive Terms of Service. Understand your rights and responsibilities when using our job search platform. Legal agreement for all users.',
  keywords: ['terms of service', 'legal agreement', 'user agreement', 'terms and conditions', 'legal terms', 'job search terms'],
  openGraph: {
    title: 'Terms of Service - JobsForCareer',
    description: 'Comprehensive terms and conditions for using JobsForCareer job search platform.',
    type: 'website',
  },
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsOfService() {
  const lastUpdated = "December 10, 2024";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-secondary/30 to-primary/10">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center">
                  <Icons.Gavel className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Please read these terms carefully before using JobsForCareer job search platform.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <Icons.Clock className="h-4 w-4" />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Introduction */}
              <Card>
                <CardHeader>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                    <Icons.FileText className="h-5 w-5" />
                    Agreement to Terms
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Welcome to JobsForCareer! These Terms of Service ("Terms") govern your use of our job search platform 
                    and services. By accessing or using JobsForCareer, you agree to be bound by these Terms. 
                    If you disagree with any part of these Terms, please do not use our platform.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    JobsForCareer is a job search platform designed to connect students and freshers with 
                    employment opportunities. These Terms establish the legal framework for using our services 
                    and outline your rights and responsibilities as a user.
                  </p>
                </CardContent>
              </Card>

              {/* Acceptance of Terms */}
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">Acceptance of Terms</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    By using JobsForCareer, you acknowledge and agree to:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Icons.CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Be at least 16 years of age or have parental consent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icons.CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Provide accurate and truthful information in your profile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icons.CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Use the platform for legitimate job search purposes only</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icons.CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Comply with all applicable laws and regulations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* User Responsibilities */}
              <Card>
                <CardHeader>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                    <Icons.Users className="h-5 w-5" />
                    User Responsibilities
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    As a JobsForCareer user, you are responsible for:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Account Security</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Keep your password confidential</li>
                        <li>• Update your information regularly</li>
                        <li>• Report unauthorized access immediately</li>
                        <li>• Maintain accurate profile data</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Content Standards</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Provide truthful information</li>
                        <li>• Upload appropriate resume content</li>
                        <li>• Communicate professionally</li>
                        <li>• Respect other users</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Application Conduct</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Apply only to positions you're qualified for</li>
                        <li>• Follow application instructions</li>
                        <li>• Respond promptly to employers</li>
                        <li>• Withdraw applications if no longer interested</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Legal Compliance</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Follow all employment laws</li>
                        <li>• Respect intellectual property</li>
                        <li>• Avoid fraudulent activities</li>
                        <li>• Maintain professional conduct</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Prohibited Activities */}
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">Prohibited Activities</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    You are strictly prohibited from engaging in the following activities on JobsForCareer:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Account Misuse</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Creating multiple accounts</li>
                        <li>• Using false information</li>
                        <li>• Impersonating others</li>
                        <li>• Sharing account credentials</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Content Violations</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Posting inappropriate content</li>
                        <li>• Spam or fraudulent postings</li>
                        <li>• Discriminatory language</li>
                        <li>• Harassment or abuse</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">System Abuse</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Hacking or unauthorized access</li>
                        <li>• DDoS attacks or disruption</li>
                        <li>• Scraping or data harvesting</li>
                        <li>• Circumventing security measures</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Legal Violations</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Illegal activities</li>
                        <li>• Violating privacy laws</li>
                        <li>• Infringing intellectual property</li>
                        <li>• Engaging in fraud</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Intellectual Property */}
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">Intellectual Property Rights</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    All content on JobsForCareer is protected by intellectual property laws:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icons.CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Platform Content</h4>
                        <p className="text-sm text-gray-600">Job listings, descriptions, and original content</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icons.CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">User Content</h4>
                        <p className="text-sm text-gray-600">Resumes, profiles, and application materials</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icons.CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Third-Party Content</h4>
                        <p className="text-sm text-gray-600">Employer job postings and company information</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Availability */}
              <Card>
                <CardHeader>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                    <Icons.Scale className="h-5 w-5" />
                    Service Availability & Modifications
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    JobsForCareer strives to provide reliable service, but please note:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icons.AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Service Availability</h4>
                        <p className="text-sm text-gray-600">We may experience downtime for maintenance or technical issues</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icons.AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4>Content Changes</h4>
                        <p className="text-sm text-gray-600">Job listings may be removed or modified without notice</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icons.AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4>Service Modifications</h4>
                        <p className="text-sm text-gray-600">Features and pricing may change over time</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Limitation of Liability */}
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">Limitation of Liability</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    To the fullest extent permitted by law, JobsForCareer shall not be liable for:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icons.AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4>Indirect Damages</h4>
                        <p className="text-sm text-gray-600">Loss of profits, data, or business opportunities</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icons.AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4>Third-Party Actions</h4>
                        <p className="text-sm text-gray-600">Employer or user conduct beyond our control</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icons.AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4>Service Interruptions</h4>
                        <p className="text-sm text-gray-600">Platform downtime or technical issues</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                    <Icons.Mail className="h-5 w-5" />
                    Contact Information
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    If you have questions about these Terms of Service, please contact us:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Icons.Mail className="h-4 w-4" />
                        <span>legal@jobsforcareer.com</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Icons.Phone className="h-4 w-4" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                    <p className="text-sm text-purple-800">
                      <strong>Legal Notice:</strong> This Terms of Service constitutes a legally binding agreement.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Governing Law */}
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">Governing Law and Disputes</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of the State of California, 
                    United States, without regard to its conflict of law provisions.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Any disputes arising from these Terms shall be resolved through binding arbitration in 
                    accordance with the rules of the American Arbitration Association.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}