'use client';

import { useEffect } from 'react';

export default function ClientHashHandler() {
  useEffect(() => {
    // Handle hash navigation on page load
    const hash = window.location.hash;
    if (hash === '#top-companies') {
      // Small delay to ensure the page is fully rendered
      const timer = setTimeout(() => {
        const element = document.getElementById('top-companies');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      
      // Cleanup timer
      return () => clearTimeout(timer);
    }
  }, []);

  // This component doesn't render anything
  return null;
}