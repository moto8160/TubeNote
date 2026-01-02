'use server';
import { fetchWithToken } from '@/utils/fetchWithToken';
import { CreateUserResult, MyPageResponse, MyPostsResponse } from './user.type';
import { notFound } from 'next/navigation';

export async function createUser(formData: FormData): Promise<CreateUserResult> {
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');
  const passwordConfirm = formData.get('passwordConfirm');

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password, passwordConfirm }),
  });
  const json = await res.json();

  if (!res.ok) {
    return { success: false, message: json.message ?? 'エラーが発生しました。' };
  }

  return json;
}


//ここのバックから作成
export async function updateUser(formData: FormData): Promise<> {
  const isLocal = formData.get('isLocal') === 'true';
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');
  const passwordConfirm = formData.get('passwordConfirm');

  const res = await fetchWithToken(`${process.env.NEXT_PUBLIC_API_URL}/users/edit`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      email: isLocal ? email : undefined,
      password: isLocal ? password : undefined,
      passwordConfirm: isLocal ? passwordConfirm : undefined,
    }),
  });
  const json = await res.json();

  if (!res.ok) {
    return { success: false, message: json.message ?? 'エラーが発生しました。' };
  }

  return json;
}

export async function fetchMyPosts(): Promise<MyPostsResponse> {
  const res = await fetchWithToken(`${process.env.NEXT_PUBLIC_API_URL}/users/me`);

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export async function fetchMyPage(): Promise<MyPageResponse> {
  const res = await fetchWithToken(`${process.env.NEXT_PUBLIC_API_URL}/users/mypage`);

  if (!res.ok) {
    notFound();
  }

  return res.json();
}
