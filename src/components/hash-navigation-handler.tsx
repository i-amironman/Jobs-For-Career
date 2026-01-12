'use client';

import { useEffect } from 'react';

export default function HashNavigationHandler() {
  useEffect(() => {
    // Handle hash navigation on page load
    const hash = window.location.hash;
    if (hash === '#top-companies') {
      // Small delay to ensure the page is fully rendered
      setTimeout(() => {
        const element = document.getElementById('top-companies');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return null;
}