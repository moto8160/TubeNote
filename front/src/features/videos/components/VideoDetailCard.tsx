import Link from 'next/link';
import { VideoDetailResponse } from '../video.type';

type Props = {
  video: VideoDetailResponse;
};

export default function VideoDetailCard({ video }: Props) {
  return (
    <div className="">
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

      <ul className="space-y-2">
        {video.posts.map((post) => (
          <li key={post.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <span className="font-medium mb-2">{post.user.name}</span>
              <span className="text-xs text-gray-400">
                {new Date(post.createdAt).toLocaleDateString('ja-JP')}
              </span>
            </div>

            <p className="whitespace-pre-wrap leading-loose wrap-break-word">{post.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
