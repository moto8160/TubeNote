'use server';
import { VideoDetailResponse, VideoListResponse, YoutubeOEmbedResponse } from '../videos/video.type';

export async function fetchVideos(): Promise<VideoListResponse[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/videos`);

  if (!res.ok) {
    throw new Error('Failed to fetch videos');
  }

  return res.json();
}

export async function fetchVideoDetail(videoId: string): Promise<VideoDetailResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/videos/${videoId}`);
  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.message ?? 'Failed to fetch video');
  }

  return json;
}

export async function fetchOEmbed(videoUrl: string): Promise<YoutubeOEmbedResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/videos/preview`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ videoUrl }),
  });
  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.message ?? 'Failed to fetch video Preview');
  }

  return json;
}
