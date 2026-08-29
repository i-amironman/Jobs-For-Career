'use client';

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { COUNTRIES, DEFAULT_COUNTRY, getCountry, type Country } from '@/lib/countries';

function persistCountry(code: string) {
  localStorage.setItem('jfc_country', code);
  document.cookie = `jfc_country=${encodeURIComponent(code)};path=/;max-age=31536000;SameSite=Lax`;
}

interface CountryContextValue {
  country: string;
  countryData: Country;
  setCountry: (code: string) => void;
}

const CountryContext = createContext<CountryContextValue>({
  country: DEFAULT_COUNTRY,
  countryData: getCountry(DEFAULT_COUNTRY),
  setCountry: () => {},
});

export function CountryProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [country, setCountryState] = useState(DEFAULT_COUNTRY);

  useEffect(() => {
    const urlCountry = searchParams.get('country');
    const stored = typeof window !== 'undefined' ? localStorage.getItem('jfc_country') : null;
    const initial = urlCountry || stored || DEFAULT_COUNTRY;
    setCountryState(initial);
    persistCountry(initial);
    if (!urlCountry && stored && stored !== DEFAULT_COUNTRY) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('country', stored);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, [searchParams, pathname, router]);

  const setCountry = useCallback(
    (code: string) => {
      setCountryState(code);
      persistCountry(code);
      const params = new URLSearchParams(searchParams.toString());
      params.set('country', code);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  return (
    <CountryContext.Provider value={{ country, countryData: getCountry(country), setCountry }}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry() {
  return useContext(CountryContext);
}

export { COUNTRIES };
