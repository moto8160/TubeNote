'use client';
import { useState } from 'react';
import { VideoListResponse } from '../video.type';
import VideoListCard from './VideoListCard';
import { PostListResponse } from '@/features/posts/post.type';
import PostListCard from './PostListCard';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

type Props = {
  videos: VideoListResponse[];
  posts: PostListResponse[];
};

export default function TabContainer({ videos, posts }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialTab = searchParams.get('tab') ?? 'videos';
  const [active, setActive] = useState(initialTab);

  const changeTab = (tab: string) => {
    setActive(tab);
    router.replace(`?tab=${tab}`, { scroll: false });
  };

  return (
    <div className="">
      <div className="mb-6">
        <div className="flex justify-center text-xl gap-6">
          <button
            onClick={() => changeTab('videos')}
            className={`relative pb-2 px-2 font-medium transition ${
              active === 'videos' ? 'font-medium border-b-3 border-blue-300' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            動画ごと
          </button>

          <button
            onClick={() => changeTab('posts')}
            className={`relative pb-2 px-2 font-medium transition ${
              active === 'posts' ? 'font-medium border-b-3 border-blue-300' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            投稿ごと
          </button>
        </div>
      </div>

      {/* コンテンツ */}
      {active === 'videos' ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {videos.map((video) => (
            <li key={video.id}>
              <VideoListCard video={video} />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id}>
              <PostListCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
