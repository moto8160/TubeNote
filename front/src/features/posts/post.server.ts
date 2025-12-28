'use server';
import { fetchWithToken } from '@/utils/fetchWithToken';
import { CreatePostResult, PostListResponse } from './post.type';
import { notFound, redirect } from 'next/navigation';

export async function fetchPosts(): Promise<PostListResponse[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export async function createPost(formData: FormData): Promise<CreatePostResult> {
  const videoUrl = formData.get('url');
  const text = formData.get('text');

  const res = await fetchWithToken(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
    method: 'POST',
    body: JSON.stringify({ videoUrl, text }),
  });

  const json = await res.json();

  if (!res.ok) {
    return { success: false, message: json.message ?? 'エラーが発生しました。' };
  }

  return json;
}

export async function deletePost(formData: FormData): Promise<void | { success: boolean }> {
  const postId = formData.get('postId');
  const currentPath = formData.get('currentPath');

  const res = await fetchWithToken(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    return { success: false };
  }

  redirect(currentPath + '&success=4');
}
