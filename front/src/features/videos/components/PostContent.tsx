'use client';
import { useEffect, useRef, useState } from 'react';

type Props = {
  text: string;
  clampHeight: string;
};

export default function PostContent({ text, clampHeight }: Props) {
  const pRef = useRef<HTMLParagraphElement>(null); //<p>と紐づけ
  const [isClamped, setIsClamped] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const el = pRef.current; //<p>を取得
    if (!el) return;

    // 全文の高さ ＞ 表示している高さ
    setIsClamped(el.scrollHeight > el.clientHeight);
  }, []);

  return (
    <div className="whitespace-pre-wrap">
      {/* カードの高さ調整　展開していなければ固定*/}
      <div className={!isOpened ? `${clampHeight}` : ''}>
        <p
          ref={pRef}
          className={`text-sm leading-relaxed wrap-break-word ${isOpened ? '' : 'line-clamp-4'}`}
        >
          {text}
        </p>

        {/* 全文が省略時のみ表示させる */}
        {isClamped && (
          <button
            onClick={(e) => {
              e.preventDefault(); //カードのLinkを適用しない
              setIsOpened(!isOpened); //トグル処理（true/false切替）
            }}
            className="block mx-auto text-xs mt-2 text-gray-500 hover:underline hover:font-bold"
          >
            {isOpened ? '閉じる' : '続きを見る'}
          </button>
        )}
      </div>
    </div>
  );
}
