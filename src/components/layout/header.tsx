'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  SearchIcon,
  BriefcaseIcon,
  BookOpenIcon,
  BuildingIcon,
  UserIcon,
  SettingsIcon,
  LogInIcon,
  LogOutIcon,
  BellIcon,
  ChevronDownIcon,
  MenuIcon
} from '@/components/ui/icons'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Find Jobs', href: '/jobs', icon: BriefcaseIcon },
    { name: 'Internships', href: '/internships', icon: BookOpenIcon },
    { name: 'Companies', href: '/companies', icon: BuildingIcon },
  ]

  const userNavigation = [
    { name: 'Profile', href: '/profile', icon: UserIcon },
    { name: 'Applications', href: '/applications', icon: BriefcaseIcon },
    { name: 'Settings', href: '/settings', icon: SettingsIcon },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto">
        <div className="flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <BriefcaseIcon className="h-4 w-4" />
              </div>
              <span className="text-xl font-bold text-foreground">JobsForCareer</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{item.name}</span>
                </a>
              )
            })}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <SearchIcon className="h-4 w-4" />
              </div>
              <Input
                placeholder="Search jobs, companies, or skills..."
                className="pl-10"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <BellIcon className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">
                3
              </Badge>
            </Button>

            {/* User Menu */}
            <div className="relative group">
              <Button variant="ghost" className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-sm font-medium">JD</span>
                </div>
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-56 bg-popover border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-1">
                  <div className="px-2 py-1.5 text-sm font-medium">John Doe</div>
                  <div className="border-t border-border my-1"></div>
                  {userNavigation.map((item) => {
                    const Icon = item.icon
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center space-x-2 px-2 py-2 text-sm hover:bg-accent rounded-md transition-colors duration-200"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </a>
                    )
                  })}
                  <div className="border-t border-border my-1"></div>
                  <a
                    href="#"
                    className="flex items-center space-x-2 px-2 py-2 text-sm hover:bg-accent rounded-md transition-colors duration-200"
                  >
                    <LogOutIcon className="h-4 w-4" />
                    <span>Log out</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <MenuIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background px-4 py-4">
            <div className="relative mb-4">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <SearchIcon className="h-4 w-4" />
              </div>
              <Input
                placeholder="Search jobs..."
                className="pl-10"
              />
            </div>
            
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{item.name}</span>
                  </a>
                )
              })}
            </nav>

            <div className="border-t pt-4 mt-4">
              <Button className="w-full">
                <LogInIcon className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}