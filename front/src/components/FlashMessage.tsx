'use client';
import { useSearchParams } from 'next/navigation';

export default function FlashMessage() {
  //クエリ文字列を取得
  const searchParams = useSearchParams();
  // パラメータを取得
  const success = searchParams.get('success');
  const error = searchParams.get('error');

  if (!success && !error) return null;
  let message;

  switch (success) {
    case '1':
      message = 'ログインしました';
      break;
    case '2':
      message = '新規投稿しました';
      break;
    case '3':
      message = 'ログアウトしました';
      break;
    case '4':
      message = '投稿を削除しました';
      break;
    case '5':
      message = '投稿を更新しました';
      break;
  }

  switch (error) {
    case '1':
      message = 'ログインしてください';
      break;
  }

  return (
    <>
      {message && (
        <div className="max-w-7xl mx-auto text-lg px-4 py-3 bg-green-100 text-black rounded-md shadow">
          {message}
        </div>
      )}
    </>
  );
}
