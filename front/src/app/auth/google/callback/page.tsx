'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function GoogleCallback() {
  const params = useSearchParams();
  const code = params.get('code');
  const router = useRouter();

  useEffect(() => {
    async function handleGoogle() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/google/callback?code=${code}`,
        { credentials: 'include' }
      );

      const json = await res.json();

      if (json.access_token) {
        document.cookie = `access_token=${json.access_token}; path=/`;
        router.push('/');
      }
    }

    if (code) handleGoogle();
  }, [code]);

  return <p>ログイン処理中...</p>;
}
