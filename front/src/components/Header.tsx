'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  currentUserId: number | null;
};

export default function Header({ currentUserId }: Props) {
  const pathname = usePathname();

  const active = 'text-gray-900 border-b-2 border-sky-400 pb-0.5';
  const normal = 'text-gray-700 hover:text-gray-900 transition';

  return (
    <header className="w-full shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
        {/* 左側 */}
        <nav className="flex items-center text-base sm:text-xl gap-3 sm:gap-6">
          <Link
            href="/"
            className="text-lg font-semibold text-sky-600 bg-sky-50 px-3 py-1 rounded-md hover:bg-sky-100 transition"
          >
            つべのーと
          </Link>

          <Link href="/videos" className={pathname === '/videos' ? active : normal}>
            みんなのノート
          </Link>

          <Link href="/users/me" className={pathname === '/users/me' ? active : normal}>
            私のノート
          </Link>

          <Link href="/posts/create" className={pathname === '/posts/create' ? active : normal}>
            投稿する
          </Link>
        </nav>

        {/* 右側 */}
        {currentUserId ? (
          <Link
            href="/mypage"
            className={
              pathname === '/mypage'
                ? active + ' text-base sm:text-xl'
                : normal + ' text-base sm:text-xl'
            }
          >
            MyPage
          </Link>
        ) : (
          <nav className="flex items-center text-base sm:text-xl gap-2 sm:gap-3">
            <Link
              href="/login"
              className="px-3 py-1.5 border-2 border-sky-400 text-sky-500 rounded-md hover:bg-sky-50 transition"
            >
              ログイン
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
