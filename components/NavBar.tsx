import Link from "next/link";
import { Lockup, SymbolMark } from "./Logo";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-black/80 backdrop-blur-md border-b border-white/[0.06]">
      <Link href="/" aria-label="Comp Systems ホームへ" className="shrink-0 hover:opacity-80 transition-opacity">
        {/* 狭い幅ではシンボル単体、sm以上でロックアップ（横組み） */}
        <SymbolMark className="h-7 w-auto text-white sm:hidden" />
        <Lockup className="hidden sm:block h-7 w-auto text-white" />
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/" className="text-sm text-white hover:text-white/70 transition-colors hidden sm:block">HOME</Link>
        <Link href="/company" className="text-sm text-white hover:text-white/70 transition-colors">会社概要</Link>
        <Link href="/careers" className="text-sm text-white hover:text-white/70 transition-colors">採用情報</Link>
        <Link href="/#contact" className="text-sm text-white hover:text-white/70 transition-colors">お問い合わせ</Link>
      </div>
    </nav>
  );
}
