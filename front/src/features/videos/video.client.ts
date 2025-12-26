import { YoutubeOEmbedResponse } from "./video.type";

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
