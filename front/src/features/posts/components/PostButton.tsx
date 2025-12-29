'use client';
import Link from 'next/link';
import { deletePost } from '../post.server';
import { usePathname, useSearchParams } from 'next/navigation';

type Props = {
  id: number;
};

export default function PostButton({ id }: Props) {
  // 処理後に遷移元にリダイレクトさせる
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div className="flex items-center gap-2">
      <Link
        href={`/posts/${id}/edit?redirect=${pathname + '?' + searchParams}`}
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
        <input type="hidden" name="postId" value={id} />
        <input type="hidden" name="currentPath" value={pathname + '?' + searchParams} />
        <button
          type="submit"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-50 hover:bg-sky-100 transition"
        >
          🗑️
        </button>
      </form>
    </div>
  );
}
