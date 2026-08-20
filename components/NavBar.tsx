"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Lockup, SymbolMark } from "./Logo";
import { text } from "./typography";

// 現在地は「白 ＋ 下線」、それ以外は薄いグレーで示す。
// お問い合わせはトップ内アンカーなのでページとしては扱わない。
const links = [
  { href: "/", label: "HOME", narrowHidden: true },
  { href: "/service", label: "事業案内" },
  { href: "/journal", label: "CS Times" },
  { href: "/company", label: "会社概要" },
  { href: "/careers", label: "採用情報" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-black/80 backdrop-blur-md border-b border-white/[0.06]">
      {/* ロゴは常に先頭へ。別ページからは通常遷移（Nextが先頭に着地させる） */}
      <Link
        href="/"
        aria-label="Comp Systems ホームへ"
        onClick={(e) => {
          // トップにいる時は遷移させない。Nextの同一ルート遷移はスクロール位置を復元してしまうため
          if (pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0 });
          }
        }}
        className="shrink-0 hover:opacity-80 transition-opacity"
      >
        {/* 狭い幅ではシンボル単体、sm以上でロックアップ（横組み） */}
        <SymbolMark className="h-7 w-auto text-white sm:hidden" />
        <Lockup className="hidden sm:block h-7 w-auto text-white" />
      </Link>
      <div className="flex items-center gap-8">
        {links.map(({ href, label, narrowHidden }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              onClick={(e) => {
                // 今いるページと同じリンクを押した時は、遷移させず先頭へ戻す
                if (active) {
                  e.preventDefault();
                  window.scrollTo({ top: 0 });
                }
              }}
              className={`${active ? text.navActive : text.navInactive}${
                narrowHidden ? " hidden sm:block" : ""
              }`}
            >
              <span className={active ? "border-b border-white pb-1" : undefined}>
                {label}
              </span>
            </Link>
          );
        })}
        <Link href="/#contact" className={text.navInactive}>お問い合わせ</Link>
      </div>
    </nav>
  );
}
