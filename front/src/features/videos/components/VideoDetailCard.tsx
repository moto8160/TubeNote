import Link from 'next/link';
import { VideoDetailResponse } from '../video.type';
import PostCardContent from '@/features/posts/components/PostCardContent';

type Props = {
  video: VideoDetailResponse;
  currentUserId: number | null;
};

export default function VideoDetailCard({ video, currentUserId }: Props) {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-6 bg-white rounded-xl shadow-sm p-6">
        {/* 動画 */}
        <div className="w-full sm:w-100">
          <div className="aspect-video overflow-hidden rounded-xl">
            <iframe src={video.embedUrl} title={video.title} className="w-full h-full" />
          </div>
        </div>

        {/* タイトルとか */}
        <div className="w-full sm:flex-1">
          <h1 className="text-xl font-semibold mt-2 mb-2">{video.title}</h1>
          <p className="text-sm text-gray-600 mb-2">{video.authorName}</p>
          <Link href={video.videoUrl} className="text-xs hover:text-blue-600 hover:underline">
            {video.videoUrl}
          </Link>
        </div>
      </div>

      {/* ポスト */}
      <p className="text-lg font-semibold ml-2 mt-6 mb-2">{video._count.posts} 件の投稿</p>

      <div>
        <ul className="space-y-4">
          {video.posts.map((post) => (
            <li key={post.id}>
              <div className="bg-white border border-sky-50 rounded-2xl p-6 shadow-sm">
                <PostCardContent
                  id={post.id}
                  text={post.text}
                  updatedAt={post.updatedAt}
                  userId={post.user.id}
                  username={post.user.name}
                  currentUserId={currentUserId}
                  isLiked={post.isLiked}
                  likeCount={post._count.likes}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
