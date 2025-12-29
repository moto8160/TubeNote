'use client';
import { useState } from 'react';
import { VideoListResponse } from '../video.type';
import VideoListCard from './VideoListCard';
import { PostListResponse } from '@/features/posts/post.type';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import PostListCard from '@/features/posts/components/PostListCard';

type Props = {
  videos: VideoListResponse[];
  posts: PostListResponse[];
  currentUserId: number | null;
};

export default function TabContainer({ videos, posts,currentUserId }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialTab = searchParams.get('tab') ?? 'videos';
  const [active, setActive] = useState(initialTab);

  const changeTab = (tab: string) => {
    setActive(tab);
    router.replace(`?tab=${tab}`, { scroll: false });
  };

  return (
    <>
      <div className="mb-4">
        <div className="flex justify-center text-base sm:text-xl gap-4 sm:gap-6">
          <button
            onClick={() => changeTab('videos')}
            className={`relative pb-1 sm:pb-2 px-2 font-medium transition ${
              active === 'videos'
                ? 'border-b-2 border-blue-300'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            動画ごと
          </button>

          <button
            onClick={() => changeTab('posts')}
            className={`relative pb-1 sm:pb-2 px-2 font-medium transition ${
              active === 'posts'
                ? 'border-b-2 border-blue-300'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            投稿ごと
          </button>
        </div>
      </div>

      {/* コンテンツ */}
      {active === 'videos' ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {videos.map((video) => (
            <li key={video.id}>
              <VideoListCard video={video} />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="space-y-3 sm:space-y-4">
          {posts.map((post) => (
            <li key={post.id}>
              <PostListCard post={post} currentUserId={currentUserId} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
