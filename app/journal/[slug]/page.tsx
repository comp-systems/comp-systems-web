import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { getEntries, getEntry, formatDate } from "@/lib/journal";
import { text } from "@/components/typography";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getEntries().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) return {};
  return {
    title: entry.title,
    alternates: { canonical: `https://www.compsystems.net/journal/${slug}` },
  };
}

export default async function JournalEntryPage({ params }: Params) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) notFound();

  return (
    <main className="on-light min-h-screen bg-[color:var(--surface)]">
      <NavBar />
      <article className="pt-40 pb-40 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-baseline gap-6 mb-6">
            <span className={text.dtLabel}>{formatDate(entry.date)}</span>
            <span className={text.small}>{entry.tag}</span>
          </div>
          <h1 className={`${text.h2} mb-16`}>{entry.title}</h1>
          <div
            className={`${text.body} journal-body`}
            dangerouslySetInnerHTML={{ __html: entry.html }}
          />
          <Link
            href="/journal"
            className={`${text.cta} mt-20 inline-flex items-center gap-2 text-[color:var(--fg-muted)] hover:text-[color:var(--fg)] transition-colors`}
          >
            ← CS Times 一覧へ
          </Link>
        </div>
      </article>
      <Footer />
    </main>
  );
}
