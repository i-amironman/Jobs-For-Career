'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('jfc_cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('jfc_cookie_consent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 bg-background/95 backdrop-blur border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <p className="text-sm text-muted-foreground flex-1">
          We use cookies to improve your experience and serve relevant ads via Google AdSense.
          See our{' '}
          <Link href="/privacy" className="text-primary underline">Privacy Policy</Link>.
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
