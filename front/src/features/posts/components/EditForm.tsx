'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchDetailPost, updatePost } from '../post.server';
import { Video } from '@/features/videos/video.type';
import { useSearchParams } from 'next/navigation';
import { redirect } from 'next/navigation';

type Props = {
  postId: number;
};

export default function EditForm({ postId }: Props) {
  const [video, setVideo] = useState<Video | null>(null);
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect');

  useEffect(() => {
    const fetch = async () => {
      const post = await fetchDetailPost(postId);
      setVideo(post.video);
      setText(post.text);
    };

    fetch();
  }, [postId]);

  return (
    <div className="shadow-sm rounded-xl p-10">
      {/* メッセージ */}
      {message && <p className="bg-red-100 text-red-700 p-4 rounded-md mb-4 text-sm">{message}</p>}

      {/* 動画情報 */}
      <div>
        <div>
          <label className="block text-sm font-medium mb-2">YouTube URL</label>
          <input
            name="url"
            value={video?.videoUrl ?? ''}
            disabled
            className="w-full rounded-lg bg-gray-50 border border-gray-500 shadow-sm p-1.5 text-sm mb-6"
          />
        </div>

        {/* プレビュー */}
        <div className="rounded-xl border border-gray-500 shadow-sm bg-gray-50 p-4 min-h-40 mb-8">
          <div className="flex gap-6">
            <div className="relative w-60 aspect-video shrink-0">
              {video && (
                <Image
                  src={video.thumbnailUrl}
                  alt={video.title}
                  fill
                  sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw,25vw"
                  className="object-cover rounded-lg"
                />
              )}
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-medium">{video?.title ?? ''}</p>
              <p className="text-sm mt-4">{video?.authorName ?? ''}</p>
            </div>
          </div>
        </div>
      </div>

      <form
        // Server Actions
        action={async (formData: FormData) => {
          const result = await updatePost(formData);

          if (!result.success) {
            setMessage(result.message);
            return;
          }

          if (redirectTo) {
            redirect(redirectTo + '&success=5');
          } else {
            redirect('/videos' + '?success=5');
          }
        }}
      >
        <div>
          <input type="hidden" name="postId" value={postId} />
          <label className="block text-sm font-medium mb-2">ノート</label>
          <textarea
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="動画を見て学んだことやメモしたいことなどを自由に書いてください"
            className="w-full whitespace-pre-wrap rounded-lg border border-gray-500 shadow-sm p-3 text-xl min-h-120"
          />
        </div>

        {/* ボタン */}
        <button className="flex justify-center mx-auto rounded-lg bg-blue-400 text-white px-8 py-3 mt-6 hover:bg-blue-500 transition">
          投稿する
        </button>
      </form>
    </div>
  );
}
