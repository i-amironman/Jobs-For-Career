'use client';

import { useEffect } from 'react';










export default function ClientHashHandler() {
  useEffect(() => {
    // Handle hash navigation on page load
    const hash = window.location.hash;
    const pathname = window.location.pathname;
    
    if (hash === '#top-companies' && pathname === '/') {
      // Small delay to ensure the page is fully rendered
      const timer = setTimeout(() => {
        const element = document.getElementById('top-companies');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      
      // Cleanup timer
      return () => clearTimeout(timer);
    } else if (hash === '#get-in-touch' && pathname === '/about') {
      // Small delay to ensure the page is fully rendered
      const timer = setTimeout(() => {
        const element = document.getElementById('get-in-touch');
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