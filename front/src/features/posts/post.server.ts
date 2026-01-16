'use server';
import { fetchWithToken } from '@/utils/fetchWithToken';
import {
  CreatePostResult,
  PostDetailResponse,
  PostListResponse,
  UpdatePostResult,
} from './post.type';
import { notFound, redirect } from 'next/navigation';

export async function fetchPosts(): Promise<PostListResponse[]> {
  const res = await fetchWithToken(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
    method: 'GET',
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export async function fetchDetailPost(postId: number): Promise<PostDetailResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}`);

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export async function createPost(formData: FormData): Promise<CreatePostResult> {
  const videoUrl = formData.get('url');
  const text = formData.get('text');
  const status = formData.get('status');

  const res = await fetchWithToken(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
    method: 'POST',
    body: JSON.stringify({ videoUrl, text, status }),
  });

  const json = await res.json();

  if (!res.ok) {
    return { success: false, message: json.message ?? 'エラーが発生しました。' };
  }

  return json;
}

export async function updatePost(formData: FormData): Promise<UpdatePostResult> {
  const postId = formData.get('postId');
  const text = formData.get('text');
  const status = formData.get('status');

  const res = await fetchWithToken(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({ text, status }),
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

  const json = await res.json();

  if (!res.ok) {
    return { success: false };
  }

  // 詳細画面から削除時の404回避
  if (json.videoDeleted) {
    redirect('/videos?success=4');
  } else {
    redirect(currentPath + '&success=4');
  }
}

export async function createLike(postId: number): Promise<{ success: boolean }> {
  const res = await fetchWithToken(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}/likes`, {
    method: 'POST',
  });

  if (!res.ok) {
    return { success: false };
  }

  return { success: true };
}

export async function deleteLike(postId: number): Promise<{ success: boolean }> {
  const res = await fetchWithToken(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}/likes`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    return { success: false };
  }

  return { success: true };
}
