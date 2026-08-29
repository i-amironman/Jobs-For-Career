'use client';

import { Suspense } from 'react';
import { ThemeProvider } from '@/context/theme-context';
import { CountryProvider } from '@/context/country-context';

function CountryProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <CountryProvider>{children}</CountryProvider>
    </Suspense>
  );
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <CountryProviderWrapper>{children}</CountryProviderWrapper>
    </ThemeProvider>
  );
}
