import CreateForm from '@/features/posts/components/CreateForm';

export default function CreatePostPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-center text-sm sm:text-lg text-gray-500 m-4 sm:m-8">
        YouTubeを見てノートを残そう ✏️
      </p>
      <CreateForm />
    </div>
  );
}
