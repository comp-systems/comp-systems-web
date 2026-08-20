import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { getEntries, formatDate } from "@/lib/journal";
import { text } from "@/components/typography";

export const metadata: Metadata = {
  title: "CS Times",
  description: "Comp Systemsのお知らせと、現場での取り組み・考えたことの記録。",
  alternates: { canonical: "https://www.compsystems.net/journal" },
};

export default function JournalPage() {
  const entries = getEntries();

  return (
    <main className="on-light min-h-screen bg-[color:var(--surface)]">
      <NavBar />
      <div className="pt-40 pb-40 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className={`${text.h2} mb-16`}>CS Times</h1>
          {entries.length === 0 ? (
            <p className={text.body}>記事はまだありません。</p>
          ) : (
            entries.map((e) => (
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
            ))
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
