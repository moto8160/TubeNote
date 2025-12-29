import PostButton from './PostButton';

type Props = {
  id: number;
  text: string;
  updatedAt: string;
  userId: number;
  username: string;
  currentUserId: number | null;
};

export default function PostCardContent({
  id,
  text,
  updatedAt,
  userId,
  username,
  currentUserId,
}: Props) {
  return (
    <>
      {/* ヘッダー */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-baseline gap-2">
          <span className="font-semibold text-gray-800">{username}</span>
          <span className="text-xs text-gray-400">
            {new Date(updatedAt).toLocaleDateString('ja-JP')}
          </span>
        </div>

        {/* 編集・削除 */}
        {currentUserId === userId && <PostButton id={id} />}
      </div>

      {/* ボディ */}
      <p className="leading-relaxed mb-6 whitespace-pre-wrap wrap-break-word text-gray-700">
        {text}
      </p>
    </>
  );
}
