'use client';

import CustomLink from '@/components/ui/custom-link';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Icons } from '@/components/ui/icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <CustomLink href="/" className="flex items-center space-x-2 group">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 animate-gentle-rock">
              <Icons.Briefcase className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">JobsForCareer</span>
          </CustomLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <CustomLink href="/jobs" className="text-foreground hover:text-primary transition-colors font-medium">
              Jobs
            </CustomLink>
            <CustomLink href="/internships" className="text-foreground hover:text-primary transition-colors font-medium">
              Internships
            </CustomLink>
            <CustomLink href="/scholarships" className="text-foreground hover:text-primary transition-colors font-medium">
              Scholarships
            </CustomLink>
            <CustomLink href="/govt-jobs" className="text-foreground hover:text-primary transition-colors font-medium">
              Govt. Jobs
            </CustomLink>
            <CustomLink href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </CustomLink>
          </nav>

          {/* Desktop Search */}
          <div className="hidden lg:flex items-center">
            <div className="relative">
              <Icons.Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search jobs, internships..."
                className="w-64 pl-10"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <Icons.X className="h-5 w-5" /> : <Icons.Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div ref={menuRef} className="md:hidden py-4 space-y-4">
            <div className="relative">
              <Icons.Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search jobs, internships..."
                className="w-full pl-10"
              />
            </div>
            
            <nav className="space-y-2">
              <CustomLink 
                href="/jobs" 
                className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Jobs
              </CustomLink>
              <CustomLink 
                href="/internships" 
                className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Internships
              </CustomLink>
              <CustomLink 
                href="/scholarships" 
                className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Scholarships
              </CustomLink>
              <CustomLink 
                href="/govt-jobs" 
                className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Govt. Jobs
              </CustomLink>
              <CustomLink 
                href="/about" 
                className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </CustomLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;