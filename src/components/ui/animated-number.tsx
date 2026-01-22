'use client';

import { useEffect, useState } from 'react';

interface AnimatedNumberProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedNumber({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '', 
  className = ''
}: AnimatedNumberProps) {
  const [count, setCount] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    console.log('🎯 AnimatedNumber effect triggered for end:', end);
    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      console.log('📊 Animation progress:', progress, 'Current count:', currentCount);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
        console.log('✅ Animation completed with final value:', end);
      }
    };

    // Start animation immediately after component mounts
    const timer = setTimeout(() => {
      console.log('🚀 Starting animation after timeout');
      requestAnimationFrame(animate);
    }, 100);

    return () => clearTimeout(timer);
  }, [end, duration, isClient]);

  return (
    <div className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}