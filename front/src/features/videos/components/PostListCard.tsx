'use client';
import { PostListResponse } from '@/features/posts/post.type';
import Link from 'next/link';
import Image from 'next/image';
import { deletePost } from '@/features/posts/post.server';
import { usePathname, useSearchParams } from 'next/navigation';

type Props = {
  post: PostListResponse;
};

export default function PostListCard({ post }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div className="bg-white border border-sky-50 rounded-2xl p-6 shadow-sm">
      {/* ヘッダー */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="font-medium text-gray-800">{post.user.name}</span>
          <p className="text-sm text-gray-400">
            {new Date(post.updatedAt).toLocaleDateString('ja-JP')}
          </p>
        </div>

        {/* 編集・削除 */}
        <div className="flex items-center gap-2">
          <Link
            href=""
            className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-50 hover:bg-sky-100 transition"
          >
            ✏️
          </Link>

          <form
            onSubmit={(e) => {
              if (!confirm('投稿を削除しますか？')) {
                e.preventDefault(); //フォーム送信をキャンセル
              }
            }}
            // Server Actions
            action={async (formData) => {
              const result = await deletePost(formData);

              if (!result?.success) {
                alert('削除に失敗しました。');
                return;
              }
            }}
          >
            <input type="hidden" name="postId" value={post.id} />
            <input type="hidden" name="currentPath" value={pathname + '?' + searchParams} />
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-50 hover:bg-sky-100 transition">
              🗑️
            </button>
          </form>
        </div>
      </div>

      {/* ボディ */}
      <p className="leading-relaxed mb-6 whitespace-pre-wrap wrap-break-word text-gray-700">
        {post.text}
      </p>

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
