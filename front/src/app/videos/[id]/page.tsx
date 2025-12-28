import FlashMessage from '@/components/FlashMessage';
import VideoDetailCard from '@/features/videos/components/VideoDetailCard';
import { fetchVideoDetail } from '@/features/videos/video.server';

export default async function VideoDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; //分割代入(params.id → id)
  const video = await fetchVideoDetail(id);

  return (
    <div className="max-w-7xl mx-auto">
      <FlashMessage />
      <VideoDetailCard video={video} />
    </div>
  );
}
