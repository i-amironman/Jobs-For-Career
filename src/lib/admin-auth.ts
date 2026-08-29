import { cookies } from 'next/headers';

const ADMIN_COOKIE = 'jfc_admin_session';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export async function verifyAdminSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE);
  return session?.value === hashPassword(ADMIN_PASSWORD);
}

export function hashPassword(password: string): string {
  // ponytail: simple hash for env-gated admin; upgrade to bcrypt + NextAuth later
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    hash = (hash << 5) - hash + password.charCodeAt(i);
    hash |= 0;
  }
  return `jfc_${Math.abs(hash)}`;
}

export function createAdminSessionValue(): string {
  return hashPassword(ADMIN_PASSWORD);
}

export { ADMIN_COOKIE };
