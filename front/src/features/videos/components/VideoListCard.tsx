import Link from 'next/link';
import { VideoListResponse } from '../video.type';
import Image from 'next/image';
import PostContent from '@/features/posts/components/PostContent';

type Props = {
  video: VideoListResponse;
};

export default function VideoListCard({ video }: Props) {
  const latestPost = video.posts[0];

  return (
    <Link
      key={video.id}
      href={`/videos/${video.id}`}
      scroll={false}
      className="
              block rounded-xl bg-white border border-gray-100 shadow-sm
              hover:shadow-md hover:-translate-y-1 transition"
    >
      {/* 動画 */}
      <div className="aspect-video relative overflow-hidden rounded-t-xl">
        <Image
          src={video.thumbnailUrl}
          alt={video.title}
          fill
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw,25vw"
          loading="eager"
          className="object-cover"
        />

        {/* バッチ */}
        <div className="absolute top-2 right-2 bg-blue-100  font-medium px-2 py-1 rounded-full shadow-sm">
          <p>📝 {video._count.posts}</p>
        </div>
      </div>

      {/* 投稿 */}
      <div className="p-4">
        <p className="text-sm font-medium line-clamp-2 mb-2">{video.title}</p>
        <p className="text-xs text-gray-600 mb-4">{video.authorName}</p>

        <div className="flex items-baseline gap-2">
          <span className="font-semibold text-gray-800">{latestPost.user.name}</span>
          <span className="text-xs text-gray-400">
            {new Date(latestPost.updatedAt).toLocaleDateString('ja-JP')}
          </span>
        </div>
        <PostContent text={latestPost.text} clampHeight="h-28" />
      </div>
    </Link>
  );
}
