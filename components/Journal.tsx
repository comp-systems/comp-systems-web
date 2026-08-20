import Link from "next/link";
import { getEntries, formatDate } from "@/lib/journal";
import { text } from "./typography";

// お知らせと記事を分けず、日付順のひとつのリストにする。
// 種類はタグで示す（お知らせ / 現場 / 考察）。
export default function Journal() {
  const entries = getEntries(4);
  if (entries.length === 0) return null;

  return (
    <section id="journal" className="py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className={`${text.h2} mb-16`}>CS Times</h2>

        <div>
          {entries.map((e) => (
            <Link
              key={e.slug}
              href={`/journal/${e.slug}`}
              className="group grid sm:grid-cols-[7rem_5rem_1fr] gap-1 sm:gap-8 items-baseline py-6 border-t border-[color:var(--rule)] hover:bg-[color:var(--surface-alt)] transition-colors"
            >
              <span className={text.dtLabel}>{formatDate(e.date)}</span>
              <span className={`${text.small} sm:justify-self-start`}>{e.tag}</span>
              <span className={`${text.dtValue} group-hover:underline underline-offset-4`}>
                {e.title}
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/journal"
          className={`${text.cta} mt-12 inline-flex items-center gap-2 text-[color:var(--fg-muted)] hover:text-[color:var(--fg)] transition-colors`}
        >
          一覧を見る →
        </Link>
      </div>
    </section>
  );
}
