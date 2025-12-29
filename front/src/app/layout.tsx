import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { getCurrentUserId } from '@/utils/getCurrentUserId';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'つべのーと',
  description: 'YouTubeでの学習をノートに記録できるサービス',
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const currentUserId = await getCurrentUserId();

  return (
    <html lang="ja">
      <head>
        <meta name="color-scheme" content="light only" />
      </head>
      <body className="bg-white text-gray-900">
        <Header currentUserId={currentUserId} />
        <main className={`${geistSans.variable}  antialiased`}>{children}</main>
      </body>
    </html>
  );
}
