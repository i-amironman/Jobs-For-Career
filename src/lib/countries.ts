export interface Country {
  code: string;
  name: string;
  flag: string;
  currency: string;
  locale: string;
}

export const COUNTRIES: Country[] = [
  { code: 'GLOBAL', name: 'Global / Remote', flag: '🌍', currency: 'USD', locale: 'en' },
  { code: 'IN', name: 'India', flag: '🇮🇳', currency: 'INR', locale: 'en-IN' },
  { code: 'US', name: 'United States', flag: '🇺🇸', currency: 'USD', locale: 'en-US' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', currency: 'GBP', locale: 'en-GB' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', currency: 'CAD', locale: 'en-CA' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', currency: 'AUD', locale: 'en-AU' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', currency: 'EUR', locale: 'de-DE' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬', currency: 'SGD', locale: 'en-SG' },
  { code: 'AE', name: 'UAE', flag: '🇦🇪', currency: 'AED', locale: 'en-AE' },
];

export const DEFAULT_COUNTRY = process.env.NEXT_PUBLIC_DEFAULT_COUNTRY || 'IN';

export function getCountry(code: string): Country {
  return COUNTRIES.find((c) => c.code === code) ?? COUNTRIES[1];
}

export function formatCurrency(amount: string, countryCode: string): string {
  const country = getCountry(countryCode);
  if (amount.startsWith('$') || amount.startsWith('₹') || amount.startsWith('€')) return amount;
  const symbols: Record<string, string> = { INR: '₹', USD: '$', GBP: '£', EUR: '€', CAD: 'C$', AUD: 'A$', SGD: 'S$', AED: 'AED ' };
  return `${symbols[country.currency] ?? '$'}${amount}`;
}
