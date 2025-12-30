import ContactForm from '@/components/ContactForm';
import FlashMessage from '@/components/FlashMessage';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <FlashMessage />
      {/* ヒーロー */}
      <section className="max-w-5xl mx-auto px-6 py-28 text-center bg-white">
        <h1 className="text-5xl font-bold text-gray-800 ">
          ようこそ、<span className="text-sky-400">つべのーと</span>へ
        </h1>

        <div className="mt-6 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          <p>“つべのーと”はYouTubeで学んだことを</p>
          <p>自分だけの“学習ノート”として気軽に記録・共有できるサービスです。</p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Link
            href="/videos"
            className="w-fit px-6 py-3 rounded-xl bg-sky-400 text-white font-medium hover:bg-sky-500 transition"
          >
            みんなのノートを見る
          </Link>

          <Link
            href="/posts/create"
            className="w-fit px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            ノートを書く
          </Link>
        </div>
      </section>

      {/* 悩み */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-10">
            こんな悩み、ありませんか？
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                📌 見た動画や内容を忘れてしまう
              </h3>
              <p className="text-sm text-gray-600">
                ノートに記録すれば、どの動画で何を学んだかを簡単に思い出せます。
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                📌 メモがバラバラに散らばる
              </h3>
              <p className="text-sm text-gray-600">
                コメント欄・付箋・メモ帳など...。つべのーとなら1つの場所にまとめて管理できます。
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                📌 何を見て学習すればよいか
              </h3>
              <p className="text-sm text-gray-600">
                みんなが学習に使用している人気の動画を知ることができます。
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">📌 動画を見る時間がない</h3>
              <p className="text-sm text-gray-600">
                みんなのノートを見れば、動画を見なくても内容を知ることができます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 使い方 */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-12">
            使い方は、とてもかんたんです
          </h2>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="text-3xl font-bold text-sky-400 mb-3">STEP 1</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">YouTubeのURLを貼る</h3>
              <p className="text-sm text-gray-600">
                ノートを作りたい動画のURLを貼って、動画情報を自動取得します。
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="text-3xl font-bold text-sky-400 mb-3">STEP 2</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">学んだことをノートに書く</h3>
              <p className="text-sm text-gray-600">
                大事だと思ったポイントや、自分なりの気づきを気軽にメモ。
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="text-3xl font-bold text-sky-400 mb-3">STEP 3</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">見返したり、共有する</h3>
              <p className="text-sm text-gray-600">
                あとで見返して復習したり、誰でも見れるよう公開もできます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800">これからは、動画の学びをノートに残そう</h2>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Link
            href="/videos"
            className="w-fit px-6 py-3 rounded-xl bg-sky-400 text-white font-medium hover:bg-sky-500 transition"
          >
            みんなのノートを見る
          </Link>

          <Link
            href="/posts/create"
            className="w-fit px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            ノートを書く
          </Link>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="py-20 bg-white">
        <ContactForm />
      </section>
    </div>
  );
}
