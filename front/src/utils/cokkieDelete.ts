'use server';
import { cookies } from 'next/headers';

export async function cookieDelete() {
  const cookieStore = await cookies();
  const flash = cookieStore.get('flash')?.value;

  if (flash) {
    cookieStore.set('flash', '');
  }
}
