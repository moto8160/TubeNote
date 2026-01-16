import { PostStatus } from '../post.type';
import LikeButton from './LikeButton';
import PostButton from './PostButton';

type Props = {
  id: number;
  text: string;
  status: PostStatus;
  updatedAt: string;
  userId: number;
  username: string;
  currentUserId: number | null;
  isLiked: boolean;
  likeCount: number;
};

export default function PostCardContent({
  id,
  text,
  status,
  updatedAt,
  userId,
  username,
  currentUserId,
  isLiked,
  likeCount,
}: Props) {
  const isOwner = currentUserId === userId;
  const isPrivate = status === 'private';
  return (
    <>
      {/* ヘッダー */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-800">{username}</span>

          <span className="text-xs text-gray-400">
            {new Date(updatedAt).toLocaleDateString('ja-JP')}
          </span>

          {isOwner && isPrivate && (
            <span
              className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full 
                       bg-gray-100 text-gray-600 border border-gray-300"
            >
              🔒 非公開
            </span>
          )}
        </div>

        {/* 編集・削除 */}
        {isOwner && <PostButton id={id} />}
      </div>

      {/* ボディ */}
      <p className="leading-relaxed mb-6 whitespace-pre-wrap wrap-break-word text-gray-700">
        {text}
      </p>

      {/* いいね */}
      <div className="flex items-center justify-between my-2">
        <LikeButton postId={id} isLiked={isLiked} likeCount={likeCount} />
      </div>
    </>
  );
}
