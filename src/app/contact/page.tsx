import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const metadata = {
  title: 'Contact Us | JobsForCareer',
  description: 'Get in touch with JobsForCareer for partnerships, posting jobs, or general inquiries.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-16 max-w-2xl">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-muted-foreground mb-8">
          Have questions about posting jobs, partnerships, or advertising? We&apos;d love to hear from you.
        </p>

        <form className="space-y-4 bg-background border border-border rounded-2xl p-6">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your name" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" placeholder="How can we help?" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Your message..."
              className="w-full mt-1 rounded-lg border border-border bg-background px-3 py-2 text-sm"
            />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>

        <div className="mt-8 text-sm text-muted-foreground space-y-2">
          <p>Email: <a href="mailto:contact@jobsforcareer.com" className="text-primary">contact@jobsforcareer.com</a></p>
          <p>For recruiters wanting to post jobs, visit our <Link href="/admin" className="text-primary underline">Admin Panel</Link>.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
