'use client';
import { YoutubeOEmbedResponse } from '@/features/videos/video.type';
import {  useEffect, useState } from 'react';
import Image from 'next/image';
import { createPost } from '@/features/posts/post.server';
import { redirect } from 'next/navigation';
import { fetchOEmbed } from '@/features/videos/video.client';

export default function PostForm() {
  const [url, setUrl] = useState('');
  const [text, setText] = useState('');
  const [video, setVideo] = useState<YoutubeOEmbedResponse | null>(null);
  const [urlMessage, setUrlMessage] = useState('');
  const [message, setMessage] = useState('');

  // URL入力が変わる毎にフェッチ（500msでデバウンス）
  useEffect(() => {
    if (!url) return;

    const timer = setTimeout(async() => {
      try {
        // 動画のプレビューを取得
        const video = await fetchOEmbed(url);
        setVideo(video);
        setUrlMessage('');
      } catch (e) {
        if (e instanceof Error) {
          setUrlMessage(e.message);
          setVideo(null);
        } else {
          setUrlMessage('エラーが発生しました');
        }
      }
    });

    // クリーンアップ
    return () => {
      clearTimeout(timer);
    };
  }, [url]);

  return (
    <div className="shadow-sm rounded-xl p-10">
      <form
        // Server Actions
        action={async (formData: FormData) => {
          try {
            await createPost(formData);
          } catch (e) {
            if (e instanceof Error) {
              setMessage(e.message);
            } else {
              setMessage('エラーが発生しました');
            }
            return;
          }
          redirect('/videos?success=2');
        }}
      >
        {/* メッセージ */}
        {message && (
          <p className="bg-red-100 text-red-700 p-4 rounded-md mb-4 text-sm">{message}</p>
        )}

        {/* URL */}
        <div>
          <label className="block text-sm font-medium mb-2">YouTube URL</label>
          <input
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.youtube.com/watch?v=..."
            className="w-full rounded-lg border border-gray-500 shadow-sm p-1.5 text-sm"
          />
          <div className="min-h-6">
            {urlMessage && <p className="text-red-500 text-sm ml-2 mt-1">{urlMessage}</p>}
          </div>
        </div>

        {/* プレビュー */}
        <div className="rounded-xl border border-gray-500 shadow-sm bg-gray-50 p-4 min-h-40 mb-8">
          {video ? (
            <div className="flex gap-6">
              <div className="relative w-60 aspect-video shrink-0">
                <Image
                  src={video.thumbnail_url}
                  alt={video.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-medium">{video.title}</p>
                <p className="text-sm mt-4">{video.author_name}</p>
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
