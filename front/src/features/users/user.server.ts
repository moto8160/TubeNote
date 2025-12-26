'use server';
import { fetchWithToken } from '@/utils/fetchWithToken';
import { CreateUserResult, MyPageResponse, MyPostsResponse } from './user.type';

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

  if (res.status >= 500) {
    throw new Error('Failed to Create User');
  }

  if (!res.ok) {
    let message = json.message;

    // DTOが配列でメッセージを返す
    if (Array.isArray(message)) {
      message = message.join('、');
    }

    return { success: false, message };
  }

  return json;
}

export async function fetchMyPosts(): Promise<MyPostsResponse> {
  const res = await fetchWithToken(`${process.env.NEXT_PUBLIC_API_URL}/users/me`);

  if (!res.ok) {
    throw new Error('Failed to Fetch User');
  }

  return res.json();
}

export async function fetchMyPage(): Promise<MyPageResponse> {
  const res = await fetchWithToken(`${process.env.NEXT_PUBLIC_API_URL}/users/mypage`);

  if (!res.ok) {
    throw new Error('Failed to Fetch User');
  }

  return res.json();
}
