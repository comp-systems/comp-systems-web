import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-black/80 backdrop-blur-md border-b border-white/[0.06]">
      <Link href="/" className="text-sm font-semibold tracking-wide text-white hover:text-white/80 transition-colors">
        Comp Systems
      </Link>
      <div className="flex items-center gap-8">
<Link href="/company" className="text-sm text-white hover:text-white/70 transition-colors">会社概要</Link>
        <Link href="/#contact" className="text-sm text-white hover:text-white/70 transition-colors">お問い合わせ</Link>
      </div>
    </nav>
  );
}
