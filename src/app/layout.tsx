import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    default: "JobsForCareer.com - Find Jobs & Internships for Students and Freshers",
    template: "%s | JobsForCareer.com"
  },
  description: "Discover the best job opportunities and internships tailored for students and fresh graduates. Connect with top companies and kickstart your career journey with JobsForCareer.com.",
  keywords: [
    "jobs", "internships", "students", "freshers", "career", "entry level", "graduate jobs", 
    "student jobs", "campus recruitment", "first job", "career opportunities", "JobsForCareer"
  ],
  authors: [{ name: "JobsForCareer.com Team" }],
  creator: "JobsForCareer.com",
  publisher: "JobsForCareer.com",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "JobsForCareer.com - Find Jobs & Internships for Students and Freshers",
    description: "Discover the best job opportunities and internships tailored for students and fresh graduates. Connect with top companies and kickstart your career journey.",
    url: "https://jobsforcareer.com",
    siteName: "JobsForCareer.com",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JobsForCareer.com - Find Jobs & Internships",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JobsForCareer.com - Find Jobs & Internships for Students and Freshers",
    description: "Discover the best job opportunities and internships tailored for students and fresh graduates.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="smooth-scroll">
      <body
        className="antialiased bg-background text-foreground font-sans"
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
