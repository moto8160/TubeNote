'use client';
import { useState } from 'react';
import { createLike, deleteLike } from '../post.server';

type Props = {
  postId: number;
  isLiked: boolean;
  likeCount: number;
};

export default function LikeButton({ postId, isLiked, likeCount }: Props) {
  const [liked, setLiked] = useState(isLiked);
  const [count, setCount] = useState(likeCount);

  const handleLike = async () => {
    if (liked) {
      // 画面表示を優先する
      setLiked(false);
      setCount(count - 1);

      const result = await deleteLike(postId);

      if (!result.success) {
        // エラー時は元に戻す
        setLiked(true);
        setCount(count + 1);
        alert('エラーが発生しました。');
        return;
      }
    } else {
      setLiked(true);
      setCount(count + 1);

      const result = await createLike(postId);

      if (!result.success) {
        setLiked(false);
        setCount(count - 1);
        alert('エラーが発生しました。');
        return;
      }
    }
  };

  return (
    <button
      onClick={handleLike}
      className={`hover:bg-gray-200 transition ${liked ? 'text-red-500' : 'text-black'}`}
    >
      {liked ? '❤️' : '🤍'} {count}
    </button>
  );
}
