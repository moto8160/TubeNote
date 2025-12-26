'use client';
import { login } from '@/features/login/login.server';
import { createUser } from '@/features/users/user.server';
import { redirect } from 'next/navigation';
import { useState } from 'react';

export default function CreateForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center pt-12 px-4">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-medium mb-6 text-center text-gray-800">ユーザー登録</h2>
        {message && (
          <p className="bg-red-100 text-red-700 p-4 rounded-md mb-4 text-sm">{message}</p>
        )}
        <form
          // Server Actions
          action={async (formData: FormData) => {
            const createResult = await createUser(formData);
            if (!createResult.success) return setMessage(createResult.message);

            // rememberなしでそのままログインさせる
            const loginResult = await login(formData);
            if (!loginResult.success) return setMessage(loginResult.message);

            redirect('/videos?success=1');
          }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-1">ユーザーネーム</label>
          <input
            type="text"
            name="name"
            placeholder="username"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm mb-4"
          />

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
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm mb-4"
          />

          <label className="block text-sm font-medium text-gray-700 mb-1">パスワード確認</label>
          <input
            type="password"
            name="passwordConfirm"
            placeholder="••••••"
            required
            value={passwordConfirm}
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm mb-8"
          />

          <button className="w-full bg-sky-500 text-white py-2 px-4 rounded-md shadow hover:bg-sky-600 transition">
            登録
          </button>
        </form>
      </div>
    </div>
  );
}
