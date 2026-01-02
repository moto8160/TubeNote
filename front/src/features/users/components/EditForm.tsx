'use client';
import { login } from '@/features/login/login.server';
import { createUser, updateUser } from '@/features/users/user.server';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import { MyPageResponse } from '../user.type';

type Props = {
  user: MyPageResponse;
};

export default function EditForm({ user }: Props) {
  const isLocal = user.user.provider === 'local';
  // userあり（編集ページ）時は、修正前を初期値にする
  const [name, setName] = useState(user.user.name);
  const [email, setEmail] = useState(user.user.email);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      {message && <p className="bg-red-100 text-red-700 p-4 rounded-md mb-4 text-sm">{message}</p>}
      <form
        // Server Actions
        action={async (formData: FormData) => {
          const updateResult = await updateUser(formData);
          //更新後処理
        }}
      >
        <input type="hidden" name="isLocal" value={String(isLocal)} />

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
          disabled={!isLocal} //外部ログインの時は修正不可
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className={`mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm mb-4 ${
            !isLocal ? 'bg-gray-100' : ''
          }`}
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">パスワード</label>
        <input
          type="password"
          name="password"
          placeholder="••••••"
          required
          disabled={!isLocal}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className={`mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm mb-4  ${
            !isLocal ? 'bg-gray-100' : ''
          }`}
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">パスワード確認</label>
        <input
          type="password"
          name="passwordConfirm"
          placeholder="••••••"
          required
          disabled={!isLocal}
          value={passwordConfirm}
          onChange={(e) => {
            setPasswordConfirm(e.target.value);
          }}
          className={`mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm mb-4  ${
            !isLocal ? 'bg-gray-100' : ''
          }`}
        />

        <button className="w-full bg-sky-500 text-white py-2 px-4 rounded-md shadow mt-4 hover:bg-sky-600 transition">
          更新
        </button>
      </form>
    </>
  );
}
