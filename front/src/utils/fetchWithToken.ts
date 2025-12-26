'use server';
import { cookies } from 'next/headers';
export async function fetchWithToken(url: string, options: RequestInit = {}) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  return fetch(`${url}`, {
    ...options, //method, bodyなど
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}
