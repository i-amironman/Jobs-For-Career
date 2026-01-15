import { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Icons } from '@/components/ui/icons';

export const metadata: Metadata = {
  title: 'Privacy Policy - JobsForCareer',
  description: 'Comprehensive privacy policy explaining how JobsForCareer collects, uses, and protects your personal information. Learn about your rights and our data protection practices.',
  keywords: ['privacy policy', 'data protection', 'personal information', 'GDPR', 'privacy rights', 'data security'],
  openGraph: {
    title: 'Privacy Policy - JobsForCareer',
    description: 'Learn how JobsForCareer protects your privacy and handles your personal information responsibly.',
    type: 'website',
  },
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPolicy() {
  const lastUpdated = "December 10, 2024";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-0 pb-16 bg-gradient-to-br from-secondary/30 to-primary/10">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center">
                  <Icons.Shield className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
                    Our Commitment to Privacy
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    At JobsForCareer, we are committed to protecting your privacy and ensuring the security of your personal information. 
                    This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our 
                    job search platform. By using JobsForCareer, you agree to the collection and use of information 
                    in accordance with this policy.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We believe in transparency and want you to understand exactly what information we collect and how we use it 
                    to provide you with the best possible job search experience. This policy applies to all users of our 
                    website and services.
                  </p>
                </CardContent>
              </Card>

              {/* Information We Collect */}
              <Card>
                <CardHeader>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                    <Icons.Users className="h-5 w-5" />
                    Information We Collect
                  </h3>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                    <p className="text-gray-700 mb-4">We may collect the following types of personal information:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Icons.CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Name and Contact Details:</strong> Full name, email address, phone number, and location</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icons.CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Professional Information:</strong> Resume, work experience, education, skills, and job preferences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icons.CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Account Information:</strong> Username, password, and profile settings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icons.CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Usage Data:</strong> Pages visited, search queries, and interaction patterns</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                    <p className="text-gray-700 mb-4">We automatically collect certain technical information when you visit our website:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Icons.Globe className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Device and Browser Information:</strong> IP address, browser type, operating system, and device type</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icons.Globe className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Usage Analytics:</strong> Pages viewed, time spent on pages, and click patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icons.Globe className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Cookies and Tracking:</strong> Session cookies and analytics cookies</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* How We Use Your Information */}
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">How We Use Your Information</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We use your personal information to provide and improve our job search services:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Service Delivery</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Create and manage your account</li>
                        <li>• Match you with relevant job opportunities</li>
                        <li>• Send you job notifications</li>
                        <li>• Provide personalized recommendations</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Platform Improvement</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Analyze usage patterns</li>
                        <li>• Improve user experience</li>
                        <li>• Develop new features</li>
                        <li>• Optimize performance</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Data Protection */}
              <Card>
                <CardHeader>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                    <Icons.Shield className="h-5 w-5" />
                    Data Protection and Security
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We implement robust security measures to protect your personal information:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icons.CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Encryption</h4>
                        <p className="text-sm text-gray-600">All data is encrypted using industry-standard SSL/TLS protocols</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icons.CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Access Control</h4>
                        <p className="text-sm text-gray-600">Strict access controls and authentication systems</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icons.CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Regular Audits</h4>
                        <p className="text-sm text-gray-600">Regular security assessments and vulnerability testing</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Your Rights */}
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">Your Privacy Rights</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    You have the following rights regarding your personal information:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Access & Correction</h4>
                      <p className="text-sm text-gray-600">View and update your personal information</p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Data Portability</h4>
                      <p className="text-sm text-gray-600">Request a copy of your data in a portable format</p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Deletion</h4>
                      <p className="text-sm text-gray-600">Request deletion of your personal information</p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Opt-out</h4>
                      <p className="text-sm text-gray-600">Control marketing communications</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                    <Icons.Mail className="h-5 w-5" />
                    Contact Us
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Icons.Mail className="h-4 w-4" />
                        <span>privacy@jobsforcareer.com</span>
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
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-primary">
                      <strong>Response Time:</strong> We will respond to your privacy inquiries within 30 days.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Policy Updates */}
              <Card>
                <CardHeader>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                    <Icons.AlertCircle className="h-5 w-5" />
                    Policy Updates
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. 
                    We will notify you of any material changes by:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Posting the updated policy on our website</li>
                    <li>• Sending email notifications to registered users</li>
                    <li>• Displaying prominent notices on our platform</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Your continued use of JobsForCareer after any changes constitutes acceptance of the updated policy.
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