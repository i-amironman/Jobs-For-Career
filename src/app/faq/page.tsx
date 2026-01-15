import { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Icons } from '@/components/ui/icons';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - JobsForCareer',
  description: 'Get answers to common questions about JobsForCareer job search platform. Learn about account setup, job applications, and career resources for students and freshers.',
  keywords: ['FAQ', 'frequently asked questions', 'job search help', 'career advice', 'student jobs', 'fresher jobs', 'JobsForCareer support'],
  openGraph: {
    title: 'FAQ - JobsForCareer',
    description: 'Find answers to frequently asked questions about using JobsForCareer job search platform.',
    type: 'website',
  },
  alternates: {
    canonical: '/faq',
  },
};

export default function FAQ() {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: "🚀",
      questions: [
        {
          q: "How do I create an account on JobsForCareer?",
          a: "Creating an account is simple and free! Click the 'Sign Up' button in the header, fill in your basic information including name, email, and password, and verify your email address. The entire process takes less than 2 minutes."
        },
        {
          q: "Is JobsForCareer really free for job seekers?",
          a: "Yes! JobsForCareer is completely free for students and freshers to search for jobs, create profiles, and apply to positions. We believe everyone should have equal access to career opportunities."
        },
        {
          q: "What types of jobs are available on JobsForCareer?",
          a: "We offer a wide range of opportunities including entry-level positions, internships, part-time jobs, remote work, and government jobs across various industries like technology, healthcare, education, finance, and more."
        },
        {
          q: "Do I need work experience to use JobsForCareer?",
          a: "No! JobsForCareer is specifically designed for students and freshers with little to no work experience. We focus on entry-level positions and opportunities suitable for early career professionals."
        }
      ]
    },
    {
      title: "Account Management",
      icon: "👤",
      questions: [
        {
          q: "How do I update my profile information?",
          a: "Log into your account and click on your profile picture or name in the header. From there, you can edit your personal information, education, work experience, skills, and preferences. Don't forget to save your changes!"
        },
        {
          q: "Can I change my email address?",
          a: "Yes, you can update your email address in your account settings. Go to Profile → Account Settings → Email, enter your new email, and verify it through the confirmation link we send you."
        },
        {
          q: "How do I delete my JobsForCareer account?",
          a: "We're sorry to see you go! You can delete your account by going to Profile → Account Settings → Delete Account. Please note that this action is permanent and cannot be undone."
        },
        {
          q: "What happens to my data when I delete my account?",
          a: "We permanently delete your personal information within 30 days. Your job applications and saved searches will also be removed. Some anonymized usage data may be retained for analytics purposes."
        }
      ]
    },
    {
      title: "Job Applications",
      icon: "📋",
      questions: [
        {
          q: "How do I apply for jobs on JobsForCareer?",
          a: "Click on any job listing to view details, then click the 'Apply Now' button. You can either use your JobsForCareer profile or upload your resume. Fill in any additional information required by the employer and submit your application."
        },
        {
          q: "Can I track my job applications?",
          a: "Yes! Your application history is available in your dashboard. You can see which jobs you've applied to, when you applied, and the current status of each application."
        },
        {
          q: "How do I withdraw my application?",
          a: "Go to your dashboard, find the application you want to withdraw, and click 'Withdraw Application'. You can add a brief note about why you're withdrawing if you choose."
        },
        {
          q: "Do employers see my profile when I apply?",
          a: "Yes, employers can view your JobsForCareer profile when you apply. Make sure your profile is complete and professional to make the best impression."
        },
        {
          q: "Can I apply to multiple jobs at once?",
          a: "Absolutely! You can apply to as many jobs as you're qualified for. We encourage you to apply to multiple opportunities to increase your chances of success."
        }
      ]
    },
    {
      title: "Employer Services",
      icon: "🏢",
      questions: [
        {
          q: "How can employers post jobs on JobsForCareer?",
          a: "Employers can create an account and post job listings through our employer dashboard. Contact our sales team at sales@jobsforcareer.com for more information about employer services."
        },
        {
          q: "How do employers find candidates?",
          a: "Employers can search our database of qualified students and freshers using filters like education, skills, location, and experience level. They can also review candidate profiles and contact applicants directly."
        },
        {
          q: "What are the costs for employers?",
          a: "We offer flexible pricing plans for employers based on their needs. Contact our sales team for a customized quote based on your hiring requirements and budget."
        },
        {
          q: "Can employers interview candidates through JobsForCareer?",
          a: "Yes! Employers can schedule interviews directly through our platform. They can also use our messaging system to communicate with candidates before scheduling interviews."
        }
      ]
    },
    {
      title: "Privacy & Security",
      icon: "🔒",
      questions: [
        {
          q: "How does JobsForCareer protect my personal information?",
          a: "We use industry-standard encryption and security measures to protect your data. Your personal information is never shared with third parties without your consent, except as required by law."
        },
        {
          q: "Who can see my profile and resume?",
          a: "Only registered employers who you've applied to can see your profile. Your information is not publicly visible to other users or search engines."
        },
        {
          q: "Can I make my profile private?",
          a: "Yes, you can adjust your privacy settings to control who can see your profile. You can choose to be visible to all employers, only those you've applied to, or completely hidden."
        },
        {
          q: "Is my data safe with JobsForCareer?",
          a: "Absolutely! We take data security seriously and implement robust measures including encryption, regular security audits, and compliance with data protection regulations like GDPR."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: "💻",
      questions: [
        {
          q: "What browsers does JobsForCareer support?",
          a: "JobsForCareer works best on modern browsers including Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated for the best experience."
        },
        {
          q: "Is JobsForCareer mobile-friendly?",
          a: "Yes! Our platform is fully responsive and works great on smartphones and tablets. You can search, apply, and manage your account from any device."
        },
        {
          q: "I'm having trouble logging in. What should I do?",
          a: "First, try resetting your password using the 'Forgot Password' link. If that doesn't work, clear your browser cache and cookies, then try again. Contact support if issues persist."
        },
        {
          q: "Why is the website loading slowly?",
          a: "Slow loading can be due to internet connection, browser cache, or high traffic. Try refreshing the page, clearing cache, or checking your internet connection speed."
        }
      ]
    },
    {
      title: "Career Advice",
      icon: "🎯",
      questions: [
        {
          q: "How can I improve my chances of getting hired?",
          a: "Create a complete profile, tailor your resume for each application, write compelling cover letters, practice interview skills, and build relevant skills through internships or volunteer work."
        },
        {
          q: "Should I apply to jobs I'm not fully qualified for?",
          a: "If you meet 60-70% of the requirements, go for it! Highlight your transferable skills and enthusiasm. Many employers value potential over perfect qualifications."
        },
        {
          q: "How important are internships?",
          a: "Internships are extremely valuable! They provide experience, skills, and networking opportunities that can lead to full-time positions. Apply to internships even if they're unpaid."
        },
        {
          q: "What skills are most in demand?",
          a: "Technical skills like programming, data analysis, and digital marketing are highly sought after. Soft skills like communication, teamwork, and problem-solving are equally important."
        }
      ]
    }
  ];

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
                  <Icons.HelpCircle className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Find answers to common questions about JobsForCareer and get the help you need to succeed in your job search.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <Icons.Search className="h-4 w-4" />
                <span>Comprehensive FAQ for job seekers and employers</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Browse by Category
                </h2>
                <p className="text-lg text-gray-600">
                  Find answers organized by topic for quick navigation
                </p>
              </div>

              {faqCategories.map((category, categoryIndex) => (
                <Card key={categoryIndex} className="mb-8">
                  <CardHeader>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                      <span className="text-2xl">{category.icon}</span>
                      {category.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" className="w-full">
                      {category.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                          <AccordionTrigger className="text-left">
                            <div className="flex items-start gap-3">
                              <Icons.HelpCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900">{faq.q}</h4>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="text-gray-700 leading-relaxed">
                              {faq.a}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our support team is here to help you succeed in your job search journey.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Icons.Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Get help via email within 24 hours
                    </p>
                    <a 
                      href="mailto:support@jobsforcareer.com" 
                      className="text-primary hover:text-primary/80 text-sm font-medium"
                    >
                      support@jobsforcareer.com
                    </a>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Icons.Phone className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Available Mon-Fri, 9 AM-5 PM EST
                    </p>
                    <a 
                      href="tel:+15551234567" 
                      className="text-primary hover:text-primary/80 text-sm font-medium"
                    >
                      +1 (555) 123-4567
                    </a>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Icons.Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Forum</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Connect with other job seekers
                    </p>
                    <a 
                      href="/community" 
                      className="text-primary hover:text-primary/80 text-sm font-medium"
                    >
                      Join Community
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}