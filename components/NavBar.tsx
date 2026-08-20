"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Lockup } from "./Logo";
import { text } from "./typography";

// 現在地は「白 ＋ 下線」、それ以外は薄いグレーで示す。
// お問い合わせはトップ内アンカーなのでページとしては扱わない。
const links = [
  { href: "/", label: "HOME" },
  { href: "/service", label: "事業案内" },
  { href: "/journal", label: "CS Times" },
  { href: "/company", label: "会社概要" },
  { href: "/careers", label: "採用情報" },
];
const contact = { href: "/#contact", label: "お問い合わせ" };

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  // 開いている間は背面をスクロールさせない ＋ Escで閉じる
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // 同じページのリンクを押した時は遷移させず先頭へ戻す
  const toTopIfSame = (href: string) => (e: React.MouseEvent) => {
    if (isActive(href)) {
      e.preventDefault();
      window.scrollTo({ top: 0 });
    }
    setOpen(false);
  };

  return (
    // ラッパーは position/filter を持たせない。
    // backdrop-blur は fixed の子の基準枠になってしまうため、バーとシートは兄弟に置く。
    <header>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-8 py-5 bg-black/80 backdrop-blur-md border-b border-white/[0.06]">
        {/* ロゴは常に先頭へ。別ページからは通常遷移（Nextが先頭に着地させる） */}
        <Link
          href="/"
          aria-label="Comp Systems ホームへ"
          onClick={toTopIfSame("/")}
          className="shrink-0 hover:opacity-80 transition-opacity"
        >
          <Lockup className="h-6 sm:h-7 w-auto text-white" />
        </Link>

        {/* md以上：リンクを横並び */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                onClick={toTopIfSame(href)}
                className={active ? text.navActive : text.navInactive}
              >
                <span className={active ? "border-b border-white pb-1" : undefined}>
                  {label}
                </span>
              </Link>
            );
          })}
          <Link href={contact.href} className={text.navInactive}>
            {contact.label}
          </Link>
        </div>

        {/* md未満：三本線。押すとシートが開き、開いている間はXになる */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden -mr-2 p-2 text-white"
        >
          <span className="relative block w-6 h-4" aria-hidden="true">
            <span
              className={`absolute left-0 block w-6 h-px bg-current transition-transform duration-300 ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 -translate-y-1/2 block w-6 h-px bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block w-6 h-px bg-current transition-transform duration-300 ${
                open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* md未満のポップアップ。バー(z-50)の下に全面で敷く */}
      <div
        id="mobile-menu"
        inert={!open}
        className={`md:hidden fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-end gap-7 px-6 pt-32 text-right">
          {[...links, contact].map(({ href, label }, i) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                onClick={toTopIfSame(href)}
                style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
                className={`${
                  active ? text.navSheetActive : text.navSheetInactive
                } transition-all duration-300 ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                <span className={active ? "border-b border-white pb-1" : undefined}>
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
