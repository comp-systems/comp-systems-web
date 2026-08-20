import Link from "next/link";
import { text } from "./typography";

// トップページから事業案内ページへの導線
export default function BusinessNav() {
  return (
    <section id="business" className="py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className={`${text.h2} mb-16`}>事業案内</h2>

        <Link
          href="/service"
          className="group block p-10 border border-[color:var(--rule)] rounded-2xl hover:border-[color:var(--fg-subtle)] hover:bg-[color:var(--surface-alt)] transition-colors"
        >
          <h3 className={`${text.h3} mb-4`}>AI活用支援・代行事業</h3>
          <p className={`${text.body} max-w-3xl mb-8`}>
            経営、現場の双方の目線から、AI活用を前提とした業務フローを設計し、
            <br />
            AIの活用余地の洗い出しから定着まで、一気通貫で担います。
          </p>
          <span className={`${text.cta} inline-flex items-center gap-2 text-[color:var(--fg-muted)] group-hover:text-[color:var(--fg)] transition-colors`}>
            さらに詳しく →
          </span>
        </Link>
      </div>
    </section>
  );
}
