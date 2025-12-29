import EditForm from '@/features/posts/components/EditForm';

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-center text-sm sm:text-lg text-gray-500 m-4 sm:m-8">
        ノートを編集します。
      </p>
      <EditForm postId={Number(id)} />
    </div>
  );
}
