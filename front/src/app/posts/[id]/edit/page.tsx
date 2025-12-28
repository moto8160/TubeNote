import EditForm from '@/features/posts/components/EditForm';

export default function EditPostPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-center text-lg text-gray-500 m-8">投稿を編集します。</p>
      <EditForm />
    </div>
  );
}
