import CreateForm from '@/features/users/components/CreateForm';

export default function UsersCreatePage() {
  return (
    <div className="bg-gray-50 min-h-screen min-w-screen flex flex-col items-center pt-12 px-4">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-medium mb-6 text-center text-gray-800">ユーザー登録</h2>
        <CreateForm />
      </div>
    </div>
  );
}
