import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  MailIcon,
  PhoneIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  BriefcaseIcon,
  BookOpenIcon,
  BuildingIcon,
  UsersIcon
} from '@/components/ui/icons'

export function Footer() {
  const footerLinks = {
    ForJobSeekers: [
      { name: 'Browse Jobs', href: '/jobs', icon: BriefcaseIcon },
      { name: 'Internships', href: '/internships', icon: BookOpenIcon },
      { name: 'Career Advice', href: '/career-advice', icon: BookOpenIcon },
      { name: 'Resume Builder', href: '/resume-builder', icon: BookOpenIcon },
    ],
    ForEmployers: [
      { name: 'Post a Job', href: '/post-job', icon: BuildingIcon },
      { name: 'Browse Candidates', href: '/candidates', icon: UsersIcon },
      { name: 'Pricing', href: '/pricing', icon: BuildingIcon },
      { name: 'Recruiting Solutions', href: '/recruiting', icon: UsersIcon },
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
    ],
    Support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: FacebookIcon },
    { name: 'Twitter', href: '#', icon: TwitterIcon },
    { name: 'LinkedIn', href: '#', icon: LinkedinIcon },
    { name: 'Instagram', href: '#', icon: InstagramIcon },
  ]

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="px-4 py-12 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <BriefcaseIcon className="h-4 w-4" />
                </div>
                <span className="text-xl font-bold text-foreground">JobsForCareer</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Your trusted platform for finding best job opportunities and internships. 
                Connect with top companies and kickstart your career journey.
              </p>
              
              {/* Newsletter Subscription */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Stay Updated</h4>
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1"
                  />
                  <Button>Subscribe</Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 mt-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h3 className="font-semibold text-foreground">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center space-x-2"
                      >
                        {link.icon && <link.icon className="h-4 w-4" />}
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="border-t border-border bg-background/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between py-6 px-4">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MailIcon className="h-4 w-4" />
                  <span>support@jobsforcareer.com</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <PhoneIcon className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <div className="h-4 w-4 rounded-full bg-primary"></div>
                  <span>San Francisco, CA</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span className="text-sm text-muted-foreground">
                  © 2024 JobsForCareer.com. All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between py-4 px-4">
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <a href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="/cookies" className="hover:text-primary transition-colors">
                  Cookie Policy
                </a>
                <a href="/accessibility" className="hover:text-primary transition-colors">
                  Accessibility
                </a>
              </div>
              
              <div className="flex items-center space-x-2 mt-2 md:mt-0">
                <span className="text-sm text-muted-foreground">Made with</span>
                <span className="text-primary">♥</span>
                <span className="text-sm text-muted-foreground">for job seekers worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}