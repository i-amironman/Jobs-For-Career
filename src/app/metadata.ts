import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JobsForCareer | Latest Jobs, Internships & Contests',
  description: 'Find latest jobs, internships and contests for students and freshers. Daily verified opportunities to boost your career with top companies.',
  keywords: ['jobs', 'internships', 'contests', 'students', 'freshers', 'career', 'opportunities', 'placements'],
  authors: [{ name: 'JobsForCareer Team' }],
  creator: 'JobsForCareer',
  publisher: 'JobsForCareer',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jobsforcareer.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'JobsForCareer | Latest Jobs, Internships & Contests',
    description: 'Find latest jobs, internships and contests for students and freshers. Daily verified opportunities to boost your career.',
    url: 'https://jobsforcareer.com',
    siteName: 'JobsForCareer',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JobsForCareer - Latest Jobs, Internships & Contests',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JobsForCareer | Latest Jobs, Internships & Contests',
    description: 'Find latest jobs, internships and contests for students and freshers. Daily verified opportunities to boost your career.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}