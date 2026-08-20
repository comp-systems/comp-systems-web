import { text } from "./typography";

export default function Contact() {
  return (
    <section id="contact" className="py-40 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className={`${text.h2} mb-6`}>まずはお気軽にご相談ください。</h2>
        <p className={`${text.lead} mb-16`}>無料でAI活用余地を検証します。</p>
        <a
          href="https://calendly.com/masaya-compsystems/30min"
          target="_blank"
          rel="noopener noreferrer"
          className={`${text.cta} inline-flex items-center justify-center px-8 py-4 bg-[color:var(--invert-bg)] text-[color:var(--invert-fg)] rounded-full hover:opacity-85 transition-colors`}
        >
          無料相談を申し込む →
        </a>
      </div>
    </section>
  );
}
