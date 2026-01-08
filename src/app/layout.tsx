import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/ui/toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "JobsForCareer - Find Jobs & Internships for Students and Freshers",
  description: "The ultimate platform for students and freshers to discover exciting job opportunities, internships, and connect with top companies worldwide. Start your career journey today!",
  keywords: ["jobs", "internships", "careers", "students", "freshers", "job search", "employment", "recruitment", "entry level jobs", "graduate jobs"],
  authors: [{ name: "JobsForCareer Team" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "JobsForCareer - Find Your Dream Job",
    description: "Connect with top companies and find the perfect job opportunities for students and freshers.",
    url: "https://jobsforcareer.com",
    siteName: "JobsForCareer",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "JobsForCareer - Find Jobs & Internships",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JobsForCareer - Find Your Dream Job",
    description: "The ultimate platform for students and freshers to discover exciting job opportunities and internships.",
    images: ["/logo.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
