import FlashMessage from '@/components/FlashMessage';
import { fetchMyPosts } from '@/features/users/user.server';
import TabContainer from '@/features/videos/components/TabContainer';
import groupVideos from '@/utils/groupVideos';

export default async function MyPage() {
  const user = await fetchMyPosts();
  // postごとからvideoごとに加工
  const videos = groupVideos(user);

  return (
    <div className="max-w-7xl mx-auto">
      <FlashMessage />
      <p className="text-center text-lg text-gray-700 m-8">自分のノートを振り返ろう 📑</p>

      <TabContainer videos={videos} posts={user.posts} />
    </div>
  );
}
