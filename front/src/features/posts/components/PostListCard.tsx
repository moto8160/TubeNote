import { PostListResponse } from '@/features/posts/post.type';
import Link from 'next/link';
import Image from 'next/image';
import PostCardContent from './PostCardContent';

type Props = {
  post: PostListResponse;
};

export default function PostListCard({ post }: Props) {
  return (
    <div className="bg-white border border-sky-50 rounded-2xl p-6 shadow-sm">
      <PostCardContent
        id={post.id}
        text={post.text}
        updatedAt={post.updatedAt}
        username={post.user.name}
      />

      {/* フッター */}
      <Link
        href={`/videos/${post.video.id}`}
        className="flex items-start gap-4 p-3 rounded-xl border border-transparent hover:border-gray-100 transition"
      >
        <Image
          src={post.video.thumbnailUrl}
          alt={post.video.title}
          width={96}
          height={54}
          className="rounded-md object-cover aspect-video"
        />
        <div className="flex flex-col">
          <p className="text-sm font-semibold mb-1 text-gray-800">{post.video.title}</p>
          <span className="text-xs text-gray-500">{post.video.authorName}</span>
        </div>
      </Link>
    </div>
  );
}
