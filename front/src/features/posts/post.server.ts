'use server';
import { fetchWithToken } from '@/utils/fetchWithToken';
import { PostListResponse, SuccessResponse } from './post.type';

export async function fetchPosts(): Promise<PostListResponse[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}

export async function createPost(formData: FormData): Promise<SuccessResponse> {
  const videoUrl = formData.get('url');
  const text = formData.get('text');

  const res = await fetchWithToken(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
    method: 'POST',
    body: JSON.stringify({ videoUrl, text }),
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.message);
  }

  return json;
}
