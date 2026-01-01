'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { LoginResult } from './login.type';

export async function login(formData: FormData): Promise<LoginResult> {
  const email = formData.get('email');
  const password = formData.get('password');
  const remember = formData.get('remember') === 'on'; // 'on'/null → true/false

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, remember }),
  });
  const json = await res.json();

  if (!res.ok) {
    return { success: false, message: json.message ?? 'エラーが発生しました。' };
  }

  // cookieを取得
  const cookieStore = await cookies();
  // cookieにJWTを設定(name, value, options)
  cookieStore.set('token', json.access_token, {
    httpOnly: true,
    // JWTの有効期限と同じ
    maxAge: remember ? 60 * 60 * 24 * 30 : 60 * 60 * 24,
  });

  return { success: true };
}

export async function logout(): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.delete('remember');
  cookieStore.delete('token');

  redirect('/?success=3');
}
