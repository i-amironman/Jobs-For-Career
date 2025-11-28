import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  MailIcon,
  PhoneIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  TelegramIcon,
  BriefcaseIcon,
  BookOpenIcon,
  BuildingIcon,
  UsersIcon
} from '@/components/ui/icons'

export function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ]

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: LinkedinIcon },
    { name: 'Telegram', href: '#', icon: TelegramIcon },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-orange-500 flex items-center justify-center">
                  <BriefcaseIcon className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">JobsForCareer</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Your trusted platform for finding latest jobs, internships, and contests. 
                Connecting students and freshers with top career opportunities.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors duration-200"
                      title={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MailIcon className="h-5 w-5 text-orange-400" />
                  <span>support@jobsforcareer.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <PhoneIcon className="h-5 w-5 text-orange-400" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h4 className="font-medium">Subscribe to Newsletter</h4>
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
                  />
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 JobsForCareer.com. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>Made with</span>
                <span className="text-orange-500">♥</span>
                <span>for students and freshers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}