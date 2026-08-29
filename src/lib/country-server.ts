import { cookies } from 'next/headers';
import { DEFAULT_COUNTRY } from '@/lib/countries';

/** URL param → cookie → default (India unless env overrides). */
export async function resolveCountry(urlCountry?: string | null): Promise<string> {
  if (urlCountry) return urlCountry;
  const cookieStore = await cookies();
  const fromCookie = cookieStore.get('jfc_country')?.value;
  if (fromCookie) return fromCookie;
  return DEFAULT_COUNTRY;
}
