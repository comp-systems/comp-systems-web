import { text } from "./typography";

// 初回表示ではMISSIONのみが画面に入るようにする（本文はスクロール後のStatementへ）。
// 固定はせず、ページと一緒にスクロールする。
// 高さは 100vh + パネルのかぶせ量(2.5rem)。初回表示に白が出ないようにするため。
// 文言の正本：.company/00_会社情報/01_MVV.md
export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh+2.5rem)] flex items-center justify-center text-center px-6">
      {/* 背景：夜のオフィス街（モノクロ化済み）。中央と下端を黒に沈めて文字とパネルのかぶせを立たせる */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('/hero-city.webp')] bg-cover bg-[position:8%_center] opacity-80 sm:bg-center" />
        <div className="absolute inset-0 hidden sm:block bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0)_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-black" />
      </div>

      <h1 className={`${text.h1} relative z-10`}>
        テクノロジーで余白を生み、
        <br className="hidden sm:block" />
        創造力を最大化する。
      </h1>
    </section>
  );
}
