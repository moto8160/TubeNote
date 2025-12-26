import PostForm from '@/features/posts/components/PostForm';

export default function PostsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-center text-lg text-gray-500 m-8">
        YouTubeを見てノートを残そう ✏️
      </p>
      <PostForm />
    </div>
  );
}
