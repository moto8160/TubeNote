import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

export async function getCurrentUserId(): Promise<number | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) return null;

  // joseでは秘密鍵をバイト列に変換して使用する
  const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
  // JWTを検証してペイロードを取得
  const { payload } = await jwtVerify(token, secret);

  if (typeof payload?.sub === 'number') {
    return payload.sub;
  }

  return null;
}
