'use client';
import { googleLogin, login } from '@/features/login/login.server';
import { useState } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="flex flex-col items-center pt-12 px-4">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-medium mb-6 text-center text-gray-800">ログイン</h2>
        {message && (
          <p className="bg-red-100 text-red-700 p-4 rounded-md mb-4 text-sm">{message}</p>
        )}
        <form
          // Server Actions
          action={async (formData: FormData) => {
            const result = await login(formData);

            if (!result.success) {
              setMessage(result.message ?? 'ログインに失敗しました');
              return;
            }

            redirect('/videos?success=1');
          }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
          <input
            type="email"
            name="email"
            placeholder="your@example.com"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm mb-4"
          />
          <label className="block text-sm font-medium text-gray-700 mb-1">パスワード</label>
          <input
            type="password"
            name="password"
            placeholder="••••••"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm mb-6"
          />

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                defaultChecked
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">ログイン状態を保持</label>
            </div>
          </div>

          <button className="w-full bg-sky-500 text-white py-2 px-4 rounded-md shadow hover:bg-sky-600 transition">
            ログイン
          </button>
        </form>

        <div className="mt-8 text-sm text-gray-700">
          <p className="flex justify-center gap-1">
            アカウントがない方は
            <Link
              href="/users/create"
              className="text-sky-600 font-medium hover:underline hover:text-sky-700 transition"
            >
              こちら
            </Link>
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <Link href={`${process.env.NEXT_PUBLIC_API_URL}/auth/google`}>
            <Image src="/google_login.svg" alt="Google Login" width={180} height={40} />
          </Link>
        </div>
      </div>
    </div>
  );
}
