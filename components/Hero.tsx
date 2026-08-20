import { text } from "./typography";

// 初回表示ではMISSIONのみが画面に入るようにする（本文はスクロール後のStatementへ）。
// 固定はせず、ページと一緒にスクロールする。
// 高さは 100vh + パネルのかぶせ量(2.5rem)。初回表示に白が出ないようにするため。
// 文言の正本：.company/00_会社情報/01_MVV.md
export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh+2.5rem)] flex items-center justify-center text-center px-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white opacity-[0.05] blur-3xl" />
      </div>

      <h1 className={`${text.h1} relative z-10`}>
        テクノロジーで余白を生み、
        <br className="hidden sm:block" />
        創造力を最大化する。
      </h1>
    </section>
  );
}
