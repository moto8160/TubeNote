import { PostListResponse } from '@/features/posts/post.type';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  post: PostListResponse;
};

export default function PostListCard({ post }: Props) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
      {/* ヘッダー */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-medium">{post.user.name}</span>
        <span className="text-sm text-gray-400">
          {new Date(post.updatedAt).toLocaleDateString('ja-JP')}
        </span>
      </div>

      {/* ボディ */}
      <p className="leading-relaxed mb-8 whitespace-pre-wrap wrap-break-word">{post.text}</p>

      {/* フッター */}
      <Link
        href={`/videos/${post.video.id}`}
        className="flex items-start gap-6 hover:bg-gray-50 transition"
      >
        <Image
          src={post.video.thumbnailUrl}
          alt={post.video.title}
          width={96}
          height={54}
          className="rounded-md object-cover aspect-video relative"
        />
        <div className="flex flex-col">
          <p className="text-sm font-medium mb-2">{post.video.title}</p>
          <span className="text-xs text-gray-500">{post.video.authorName}</span>
        </div>
      </Link>
    </div>
  );
}
