import EditForm from '@/features/users/components/EditForm';
import { fetchMyPage } from '@/features/users/user.server';

export default async function UserEditPage() {
  const user = await fetchMyPage();
  return (
    <div className="bg-gray-50 min-h-screen min-w-screen flex flex-col items-center pt-12 px-4">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-xl">
        <p className="text-center text-gray-700">ユーザーの登録情報を更新します。</p>
        <p className="text-sm mb-6 text-center text-gray-700">
          ※ 外部ログインの場合、メールアドレス・パスワードは変更できません。
        </p>
        <EditForm user={user} />
      </div>
    </div>
  );
}
