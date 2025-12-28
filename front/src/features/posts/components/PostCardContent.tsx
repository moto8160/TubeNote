import PostButton from './PostButton';

type Props = {
  id: number;
  text: string;
  updatedAt: string;
  username: string;
};

export default function PostCardContent({ id, text, updatedAt, username }: Props) {
  return (
    <>
      {/* ヘッダー */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="font-medium text-gray-800">{username}</span>
          <p className="text-sm text-gray-400">{new Date(updatedAt).toLocaleDateString('ja-JP')}</p>
        </div>

        {/* 編集・削除 */}
        <PostButton id={id} />
      </div>

      {/* ボディ */}
      <p className="leading-relaxed mb-6 whitespace-pre-wrap wrap-break-word text-gray-700">
        {text}
      </p>
    </>
  );
}
