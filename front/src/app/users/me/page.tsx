import FlashMessage from '@/components/FlashMessage';
import { fetchMyPosts } from '@/features/users/user.server';
import TabContainer from '@/features/videos/components/TabContainer';
import { getCurrentUserId } from '@/utils/getCurrentUserId';
import groupVideos from '@/utils/groupVideos';

export default async function MyPage() {
  const user = await fetchMyPosts();
  // postごとからvideoごとに加工
  const videos = groupVideos(user);
  const currentUserId = await getCurrentUserId();

  return (
    <div className="max-w-7xl mx-auto">
      <FlashMessage />
      <p className="text-center text-sm sm:text-lg text-gray-500 m-4 sm:m-8">
        自分のノートを振り返ろう 📑
      </p>

      <TabContainer videos={videos} posts={user.posts} currentUserId={currentUserId} />
    </div>
  );
}
