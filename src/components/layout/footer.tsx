import Link from 'next/link';
import { Icons } from '@/components/ui/icons';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Icons.Briefcase className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">JobsForCareer</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Your trusted platform for finding the perfect job opportunities and internships. 
              Connecting talented students and freshers with their dream companies.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icons.Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icons.Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icons.Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icons.Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/jobs" className="text-muted-foreground hover:text-primary transition-colors">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link href="/companies" className="text-muted-foreground hover:text-primary transition-colors">
                  Top Companies
                </Link>
              </li>
              <li>
                <Link href="/internships" className="text-muted-foreground hover:text-primary transition-colors">
                  Internships
                </Link>
              </li>
              <li>
                <Link href="/remote-jobs" className="text-muted-foreground hover:text-primary transition-colors">
                  Remote Jobs
                </Link>
              </li>
              <li>
                <Link href="/part-time" className="text-muted-foreground hover:text-primary transition-colors">
                  Part Time Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resume-builder" className="text-muted-foreground hover:text-primary transition-colors">
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link href="/career-advice" className="text-muted-foreground hover:text-primary transition-colors">
                  Career Advice
                </Link>
              </li>
              <li>
                <Link href="/interview-tips" className="text-muted-foreground hover:text-primary transition-colors">
                  Interview Tips
                </Link>
              </li>
              <li>
                <Link href="/salary-guide" className="text-muted-foreground hover:text-primary transition-colors">
                  Salary Guide
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Stay Updated</h3>
              <p className="text-muted-foreground">
                Subscribe to our newsletter for the latest job opportunities and career tips.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="px-6 py-2">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} JobsForCareer.com. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Icons.Mail className="h-4 w-4" />
                <span>support@jobsforcareer.com</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icons.Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icons.MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;