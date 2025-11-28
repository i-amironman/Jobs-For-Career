'use client'

import { useState, useEffect } from 'react'
import { Layout } from '@/components/layout/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  SearchIcon,
  BriefcaseIcon,
  BookOpenIcon,
  BuildingIcon,
  UsersIcon,
  TrendingUpIcon,
  ClockIcon,
  MapPinIcon,
  DollarSignIcon,
  ArrowRightIcon,
  StarIcon,
  CheckCircleIcon,
  CalendarIcon,
  ExternalLinkIcon,
  MailIcon,
  TelegramIcon,
  LinkedinIcon,
  FireIcon,
  TrophyIcon,
  SparklesIcon
} from '@/components/ui/icons'
import { fetchLatestJobs, fetchTopInternships, fetchOngoingContests, getSampleJobs, getSampleInternships, getSampleContests } from '@/lib/data'

export default function Home() {
  const [latestJobs, setLatestJobs] = useState<any[]>([])
  const [topInternships, setTopInternships] = useState<any[]>([])
  const [ongoingContests, setOngoingContests] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        
        // Fetch data from API
        const [jobsData, internshipsData, contestsData] = await Promise.all([
          fetchLatestJobs(3),
          fetchTopInternships(3),
          fetchOngoingContests(3)
        ])

        // Use API data if available, otherwise use sample data
        setLatestJobs(jobsData.length > 0 ? jobsData : getSampleJobs())
        setTopInternships(internshipsData.length > 0 ? internshipsData : getSampleInternships())
        setOngoingContests(contestsData.length > 0 ? contestsData : getSampleContests())
      } catch (error) {
        console.error('Error loading data:', error)
        // Fallback to sample data
        setLatestJobs(getSampleJobs())
        setTopInternships(getSampleInternships())
        setOngoingContests(getSampleContests())
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  return (
    <Layout>
      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-orange-400 text-white">
        {/* AdSense Banner Placeholder - Top */}
        <div className="bg-black/10 py-2 text-center">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-sm">
              📢 AdSense Banner (728x90) - Top Placement
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Find Latest Jobs, Internships & Contests
              <br />
              <span className="text-orange-100">for Students and Freshers</span>
            </h1>
            
            {/* Subtext */}
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-2xl mx-auto">
              Daily verified opportunities to boost your career.
            </p>
            
            {/* Main CTA Button */}
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-4 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
              <SparklesIcon className="h-5 w-5 mr-2" />
              Explore Opportunities
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Button>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">5000+</div>
                <div className="text-orange-100">Active Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">1000+</div>
                <div className="text-orange-100">Internships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">50+</div>
                <div className="text-orange-100">Contests</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">1L+</div>
                <div className="text-orange-100">Students</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Latest Jobs Section */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold flex items-center">
                    <FireIcon className="h-6 w-6 mr-2" />
                    Latest Jobs
                  </CardTitle>
                  <Badge className="bg-white/20 text-white border-white/30">
                    🔥 Hot
                  </Badge>
                </div>
                <CardDescription className="text-orange-100">
                  Fresh opportunities updated daily
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {loading ? (
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="animate-pulse">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-gray-200 rounded"></div>
                          <div className="flex-1">
                            <div className="h-4 bg-gray-200 rounded mb-2"></div>
                            <div className="h-3 bg-gray-200 rounded mb-1"></div>
                            <div className="h-3 bg-gray-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {latestJobs.map((job) => (
                      <div key={job.id} className="border-b border-gray-100 pb-4 last:border-0">
                        <div className="flex items-start space-x-3">
                          <div className="text-2xl">{job.logo}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                              {job.title}
                            </h3>
                            <p className="text-sm text-gray-600">{job.company}</p>
                            <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                              <span className="flex items-center">
                                <MapPinIcon className="h-3 w-3 mr-1" />
                                {job.location}
                              </span>
                              <span className="flex items-center">
                                <DollarSignIcon className="h-3 w-3 mr-1" />
                                {job.salary}
                              </span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <Badge variant="secondary" className="text-xs">
                                {job.type}
                              </Badge>
                              <span className="text-xs text-gray-500">{job.posted}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <Button variant="outline" className="w-full mt-4 border-orange-200 text-orange-600 hover:bg-orange-50">
                  View All Jobs
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Top Internships Section */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold flex items-center">
                    <BookOpenIcon className="h-6 w-6 mr-2" />
                    Top Internships
                  </CardTitle>
                  <Badge className="bg-white/20 text-white border-white/30">
                    🌱 New
                  </Badge>
                </div>
                <CardDescription className="text-green-100">
                  Kickstart your career with top companies
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {loading ? (
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="animate-pulse">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-gray-200 rounded"></div>
                          <div className="flex-1">
                            <div className="h-4 bg-gray-200 rounded mb-2"></div>
                            <div className="h-3 bg-gray-200 rounded mb-1"></div>
                            <div className="h-3 bg-gray-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {topInternships.map((internship) => (
                      <div key={internship.id} className="border-b border-gray-100 pb-4 last:border-0">
                        <div className="flex items-start space-x-3">
                          <div className="text-2xl">{internship.logo}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                              {internship.title}
                            </h3>
                            <p className="text-sm text-gray-600">{internship.company}</p>
                            <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                              <span className="flex items-center">
                                <MapPinIcon className="h-3 w-3 mr-1" />
                                {internship.location}
                              </span>
                              <span className="flex items-center">
                                <ClockIcon className="h-3 w-3 mr-1" />
                                {internship.duration}
                              </span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                                💰 {internship.stipend}
                              </Badge>
                              <span className="text-xs text-gray-500">{internship.posted}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <Button variant="outline" className="w-full mt-4 border-green-200 text-green-600 hover:bg-green-50">
                  View All Internships
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Ongoing Contests Section */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold flex items-center">
                    <TrophyIcon className="h-6 w-6 mr-2" />
                    Ongoing Contests
                  </CardTitle>
                  <Badge className="bg-white/20 text-white border-white/30">
                    🏆 Active
                  </Badge>
                </div>
                <CardDescription className="text-purple-100">
                  Compete and win exciting prizes
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {loading ? (
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="animate-pulse">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-gray-200 rounded"></div>
                          <div className="flex-1">
                            <div className="h-4 bg-gray-200 rounded mb-2"></div>
                            <div className="h-3 bg-gray-200 rounded mb-1"></div>
                            <div className="h-3 bg-gray-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {ongoingContests.map((contest) => (
                      <div key={contest.id} className="border-b border-gray-100 pb-4 last:border-0">
                        <div className="flex items-start space-x-3">
                          <div className="text-2xl">{contest.logo}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                              {contest.title}
                            </h3>
                            <p className="text-sm text-gray-600">{contest.organizer}</p>
                            <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                              <span className="flex items-center">
                                <TrophyIcon className="h-3 w-3 mr-1" />
                                {contest.prize}
                              </span>
                              <span className="flex items-center">
                                <UsersIcon className="h-3 w-3 mr-1" />
                                {contest.participants}
                              </span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-800">
                                ⏰ {contest.deadline}
                              </Badge>
                              <Button size="sm" variant="outline" className="text-xs border-purple-200 text-purple-600 hover:bg-purple-50">
                                Join Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <Button variant="outline" className="w-full mt-4 border-purple-200 text-purple-600 hover:bg-purple-50">
                  View All Contests
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AdSense Placeholder - Middle */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <div className="bg-white rounded-lg p-4 border-2 border-dashed border-gray-300">
              <p className="text-gray-500 font-medium">📢 AdSense Banner (728x90) - Middle Placement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Telegram Join Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Latest Opportunities
            </h2>
            <p className="text-lg text-gray-600">
              Get weekly career updates delivered to your inbox
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Subscription */}
              <div className="text-center">
                <div className="mb-4">
                  <MailIcon className="h-12 w-12 text-orange-500 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Newsletter</h3>
                <p className="text-gray-600 mb-4">Weekly digest of top opportunities</p>
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 border-orange-200 focus:border-orange-500"
                  />
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white border-2 border-orange-500 hover:border-orange-600">
                    Subscribe
                  </Button>
                </div>
              </div>
              
              {/* Telegram Join */}
              <div className="text-center">
                <div className="mb-4">
                  <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                    <TelegramIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Telegram Channel</h3>
                <p className="text-gray-600 mb-4">Instant updates on mobile</p>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white border-2 border-blue-500 hover:border-blue-600">
                  <TelegramIcon className="h-4 w-4 mr-2" />
                  Join Channel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose JobsForCareer?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide the best platform for students and freshers to launch their careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="h-16 w-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Verified Opportunities</h3>
                <p className="text-gray-600">All job listings and internships are verified for authenticity</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="h-16 w-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUpIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
                <p className="text-gray-600">Find opportunities that match your skills and career goals</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="h-16 w-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Student Community</h3>
                <p className="text-gray-600">Join 1L+ students and freshers in our community</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  )
}