import { fetchVideos } from '@/features/videos/video.server';
import TabContainer from '@/features/videos/components/TabContainer';
import { fetchPosts } from '@/features/posts/post.server';
import FlashMessage from '@/components/FlashMessage';

export default async function VideosPage() {
  const videos = await fetchVideos();
  const posts = await fetchPosts();

  return (
    <div className="max-w-7xl mx-auto">
      <FlashMessage />
      <p className="text-center text-lg text-gray-700 m-8">みんなの学びを覗いてみよう 📚</p>
      <TabContainer videos={videos} posts={posts} />
    </div>
  );
}
