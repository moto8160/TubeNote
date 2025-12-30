'use server';
import { notFound } from 'next/navigation';
import { fetchOEmbedResult, VideoDetailResponse, VideoListResponse } from '../videos/video.type';
import { fetchWithToken } from '@/utils/fetchWithToken';

export async function fetchVideos(): Promise<VideoListResponse[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/videos`);

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export async function fetchVideoDetail(videoId: string): Promise<VideoDetailResponse> {
  const res = await fetchWithToken(`${process.env.NEXT_PUBLIC_API_URL}/videos/${videoId}`, {
    method: 'GET',
  });
  const json = await res.json();

  if (!res.ok) {
    notFound();
  }

  return json;
}

export async function fetchOEmbed(videoUrl: string): Promise<fetchOEmbedResult> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/videos/preview`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ videoUrl }),
  });
  const json = await res.json();

  if (!res.ok) {
    return { success: false, message: json.message ?? 'エラーが発生しました。' };
  }

  return { success: true, preview: json };
}
