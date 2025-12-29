'use client';
import { startTransition, useEffect, useState } from 'react';
import Image from 'next/image';
import { createPost } from '@/features/posts/post.server';
import { redirect } from 'next/navigation';
import { fetchOEmbed } from '@/features/videos/video.server';
import { YoutubeOEmbedResponse } from '@/features/videos/video.type';

export default function CreateForm() {
  const [url, setUrl] = useState('');
  const [text, setText] = useState('');
  const [video, setVideo] = useState<YoutubeOEmbedResponse | null>(null);
  const [urlMessage, setUrlMessage] = useState('');
  const [message, setMessage] = useState('');

  // URL入力が変わる毎にフェッチ（500msでデバウンス）
  useEffect(() => {
    if (!url) return;

    const timer = setTimeout(() => {
      // Server Actions
      startTransition(async () => {
        const result = await fetchOEmbed(url);

        if (!result.success) {
          setUrlMessage(result.message);
          setVideo(null);
          return;
        }

        setVideo(result.preview);
        setUrlMessage('');
      });
    }, 500);

    // クリーンアップ
    return () => {
      clearTimeout(timer);
    };
  }, [url]);

  return (
    <div className="shadow-sm rounded-xl p-4 sm:p-10">
      <form
        action={async (formData: FormData) => {
          const result = await createPost(formData);

          if (!result.success) {
            setMessage(result.message);
            return;
          }

          redirect('/videos?success=2');
        }}
      >
        {/* メッセージ */}
        {message && (
          <p className="bg-red-100 text-red-700 p-3 rounded-md mb-4 text-sm">{message}</p>
        )}

        {/* URL */}
        <div>
          <label className="block text-sm font-medium mb-2">YouTube URL</label>
          <input
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.youtube.com/watch?v=..."
            className="w-full rounded-lg border border-gray-500 shadow-sm p-2 text-sm"
          />
          <div className="min-h-6">
            {urlMessage && <p className="text-red-500 text-sm ml-2 mt-1">{urlMessage}</p>}
          </div>
        </div>

        {/* プレビュー */}
        <div
          className="rounded-xl border border-gray-500 shadow-sm bg-gray-50 p-2 sm:p-4 
                      min-h-35 sm:min-h-40 mb-6 sm:mb-8"
        >
          {video ? (
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 items-start">
              <div className="relative w-36 aspect-video sm:w-56 sm:aspect-video shrink-0">
                <Image
                  src={video.thumbnailUrl}
                  alt={video.title}
                  fill
                  sizes="(max-width: 640px) 144px,(max-width: 1024px) 50vw,25vw"
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="flex flex-col justify-center mt-1 sm:mt-2">
                <p className="font-medium text-xs sm:text-base leading-tight">{video.title}</p>
                <p className="text-xs sm:text-sm mt-2 text-gray-600">{video.authorName}</p>
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-400">URL入力後、動画のプレビューを表示します</p>
          )}
        </div>

        {/* テキスト */}
        <div>
          <label className="block text-sm font-medium mb-2">ノート</label>
          <textarea
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="学んだこと・メモしたいこと等を自由に書いてください"
            className="w-full whitespace-pre-wrap rounded-lg border border-gray-500 shadow-sm p-3 text-base sm:text-xl min-h-80 sm:min-h-120"
          />
        </div>

        {/* ボタン */}
        <button className="flex justify-center mx-auto rounded-lg bg-blue-400 text-white px-2 sm:px-8 py-1 sm:py-3 mt-2 sm:mt-6 hover:bg-blue-500 transition">
          投稿する
        </button>
      </form>
    </div>
  );
}
