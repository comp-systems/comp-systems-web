import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-black/80 backdrop-blur-md border-b border-white/[0.06]">
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <span className="text-xl sm:text-2xl font-semibold tracking-tight text-white">Comp Systems</span>
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
