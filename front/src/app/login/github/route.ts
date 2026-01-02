import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get('token');

  if (!token) {
    redirect('/login?error=2');
  }

  const cookieStore = await cookies();
  const remember = cookieStore.get('remember')?.value === 'true';

  cookieStore.set('token', token, {
    httpOnly: true,
    maxAge: remember ? 60 * 60 * 24 * 30 : 60 * 60 * 24,
  });

  redirect('/videos?success=1');
}
