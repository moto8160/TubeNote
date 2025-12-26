import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const path = req.nextUrl.pathname;

  const publicPaths = ['/', '/videos', '/login', '/users/create'];

  // 未ログイン
  if (!token) {
    if (!publicPaths.includes(path)) {
      return NextResponse.redirect(new URL('/login?error=1', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api|.well-known).*)'],
};
