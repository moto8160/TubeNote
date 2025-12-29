'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type Props = {
  currentUserId: number | null;
};

export default function Header({ currentUserId }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const active = 'text-gray-900 font-medium border-b-2 border-sky-400 pb-0.5';
  const normal = 'text-gray-700 font-normal hover:text-gray-900 transition';

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
        {/* 左側 */}
        <nav className="flex items-center text-lg gap-6">
          <Link
            href="/"
            className="text-lg font-semibold text-sky-600 bg-sky-50 px-3 py-1 rounded-md hover:bg-sky-100 transition"
          >
            つべのーと
          </Link>

          <div className="hidden sm:flex items-center gap-6">
            <Link href="/videos" className={pathname.startsWith('/videos') ? active : normal}>
              みんなのノート
            </Link>

            <Link href="/users/me" className={pathname === '/users/me' ? active : normal}>
              私のノート
            </Link>

            <Link href="/posts/create" className={pathname === '/posts/create' ? active : normal}>
              投稿する
            </Link>
          </div>
        </nav>

        {/* 右側 */}
        <div className="hidden sm:flex text-lg">
          {currentUserId ? (
            <Link href="/mypage" className={pathname === '/mypage' ? active : normal}>
              MyPage
            </Link>
          ) : (
            <nav className="text-lg flex items-center gap-3">
              <Link
                href="/login"
                className="px-3 py-1.5 border-2 border-sky-400 text-sky-500 rounded-md hover:bg-sky-50 transition"
              >
                ログイン
              </Link>
            </nav>
          )}
        </div>

        {/* スマホ：ハンバーガー */}
        <button
          className="sm:hidden p-3 rounded-md hover:bg-gray-100 transition flex flex-col items-center justify-center"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-gray-700 mb-1"></span>
          <span className="w-6 h-0.5 bg-gray-700 mb-1"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </button>
      </div>

      {/* スマホメニュー */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="bg-gray-50 border-t border-gray-200 px-4 py-2 flex flex-col text-sm">
          <Link href="/videos" className="py-3 text-gray-700" onClick={() => setOpen(false)}>
            みんなのノート
          </Link>

          <Link href="/users/me" className="py-3 text-gray-700" onClick={() => setOpen(false)}>
            私のノート
          </Link>

          <Link href="/posts/create" className="py-3 text-gray-700" onClick={() => setOpen(false)}>
            投稿する
          </Link>

          {currentUserId ? (
            <Link href="/mypage" className="py-3 text-gray-700" onClick={() => setOpen(false)}>
              MyPage
            </Link>
          ) : (
            <Link href="/login" className="py-3 text-gray-700" onClick={() => setOpen(false)}>
              ログイン
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
