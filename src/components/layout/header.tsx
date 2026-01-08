'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Icons } from '@/components/ui/icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Icons.Briefcase className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">JobsForCareer</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/jobs" className="text-foreground hover:text-primary transition-colors">
              Find Jobs
            </Link>
            <Link href="/companies" className="text-foreground hover:text-primary transition-colors">
              Companies
            </Link>
            <Link href="/resources" className="text-foreground hover:text-primary transition-colors">
              Resources
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
          </nav>

          {/* Desktop Search */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Icons.Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search jobs, companies..."
                className="w-64 pl-10"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Icons.LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
              <Button size="sm">
                <Icons.UserPlus className="h-4 w-4 mr-2" />
                Sign Up
              </Button>
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
          <div className="md:hidden py-4 space-y-4">
            <div className="relative">
              <Icons.Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search jobs, companies..."
                className="w-full pl-10"
              />
            </div>
            
            <nav className="space-y-2">
              <Link href="/jobs" className="block py-2 text-foreground hover:text-primary transition-colors">
                Find Jobs
              </Link>
              <Link href="/companies" className="block py-2 text-foreground hover:text-primary transition-colors">
                Companies
              </Link>
              <Link href="/resources" className="block py-2 text-foreground hover:text-primary transition-colors">
                Resources
              </Link>
              <Link href="/about" className="block py-2 text-foreground hover:text-primary transition-colors">
                About
              </Link>
            </nav>

            <div className="flex flex-col space-y-2">
              <Button variant="ghost" size="sm" className="justify-start">
                <Icons.LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
              <Button size="sm" className="justify-start">
                <Icons.UserPlus className="h-4 w-4 mr-2" />
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;