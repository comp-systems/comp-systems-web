import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

// 記事の実体は content/journal/*.md。
// ファイル名 = URL（スラッグ）。先頭に日付を付けて並びを見やすくしてよい。
//
// フロントマター:
//   ---
//   title: ロゴを刷新しました
//   date: 2026-08-19
//   tag: お知らせ        # お知らせ / 現場 / 考察 の3つに絞る
//   ---

export const TAGS = ["お知らせ", "現場", "考察"] as const;
export type Tag = (typeof TAGS)[number];

export type Entry = {
  slug: string;
  title: string;
  date: string;
  tag: Tag;
  html: string;
};

const DIR = path.join(process.cwd(), "content", "journal");

// YAMLは 2026-08-19 のような日付を Date に変換してしまうため、
// 必ず YYYY-MM-DD の文字列へ正規化する（並び替えと表示の両方がこれに依存する）。
function toISODate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "");
}

function read(): Entry[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(DIR, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug: file.replace(/\.md$/, ""),
        title: String(data.title ?? file),
        date: toISODate(data.date),
        tag: (TAGS.includes(data.tag) ? data.tag : "お知らせ") as Tag,
        html: marked.parse(content, { async: false }) as string,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getEntries(limit?: number): Entry[] {
  const all = read();
  return limit ? all.slice(0, limit) : all;
}

export function getEntry(slug: string): Entry | undefined {
  return read().find((e) => e.slug === slug);
}

/** 2026-08-19 → 2026.08.19 */
export function formatDate(date: string): string {
  return date.replaceAll("-", ".");
}
