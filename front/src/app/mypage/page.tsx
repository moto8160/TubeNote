import { logout } from '@/features/login/login.server';
import { fetchMyPage } from '@/features/users/user.server';

export default async function MyPage() {
  const data = await fetchMyPage();

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* プロフィール */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">プロフィール</h2>

        <div className="space-y-2 text-gray-600">
          <p>
            <span className="font-medium text-gray-700">名前： </span>
            {data.user.name}
          </p>
          <p>
            <span className="font-medium text-gray-700">メール： </span>
            {data.user.email}
          </p>
          <p>
            <span className="font-medium text-gray-700">登録日： </span>
            {new Date(data.user.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* 記録 */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 mb-10">
        <h2 className="text-xl font-semibold mb-6 text-gray-700">あなたの記録</h2>

        <div className="grid grid-cols-2 gap-6 text-center">
          <div className="p-4 bg-sky-50 rounded-xl border border-sky-100">
            <p className="text-2xl font-bold text-gray-800">{data.videoCount}</p>
            <p className="text-sm text-gray-500 mt-1">動画数</p>
          </div>

          <div className="p-4 bg-sky-50 rounded-xl border border-sky-100">
            <p className="text-2xl font-bold text-gray-800">{data.postCount}</p>
            <p className="text-sm text-gray-500 mt-1">投稿数</p>
          </div>
        </div>
      </div>

      {/* ボタン */}
      <div className="flex flex-col gap-4">
        <a
          href="/users/me"
          className="
            w-full text-center py-3 rounded-xl font-medium
            bg-blue-400 text-white 
            hover:bg-blue-500 transition
          "
        >
          自分の投稿を見る
        </a>

        <a
          href="#"
          className="
            w-full text-center py-3 rounded-xl font-medium 
            bg-gray-100 text-gray-700
            hover:bg-gray-200 transition
          "
        >
          プロフィールを編集する(準備中)
        </a>

        <button
          onClick={logout}
          className="
            w-full text-center py-3 rounded-xl font-medium
            bg-red-400 text-white
            hover:bg-red-500 transition
          "
        >
          ログアウト
        </button>
      </div>
    </div>
  );
}
