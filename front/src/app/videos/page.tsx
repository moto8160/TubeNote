import { fetchVideos } from '@/features/videos/video.server';
import TabContainer from '@/features/videos/components/TabContainer';
import { fetchPosts } from '@/features/posts/post.server';
import FlashMessage from '@/components/FlashMessage';
import { getCurrentUserId } from '@/utils/getCurrentUserId';

export default async function VideosPage() {
  const videos = await fetchVideos();
  const posts = await fetchPosts();
  const currentUserId = await getCurrentUserId();

  return (
    <div className="max-w-7xl mx-auto">
      <FlashMessage />
      <p className="text-center text-sm sm:text-lg text-gray-500 m-4 sm:m-8">
        みんなの学びを覗いてみよう 📚
      </p>
      <TabContainer videos={videos} posts={posts} currentUserId={currentUserId} />
    </div>
  );
}
