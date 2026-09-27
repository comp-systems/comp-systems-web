import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { text } from "@/components/typography";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "Comp Systems への無料相談のお申し込み・お問い合わせ。AI活用の現状をお聞かせください。",
  alternates: { canonical: "https://www.compsystems.net/contact" },
};

export default function ContactPage() {
  return (
    <main className="on-light min-h-screen bg-[color:var(--surface)]">
      <NavBar />
      <section className="pt-40 pb-40 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className={`${text.h2} mb-6`}>お問い合わせ</h1>
          <p className={`${text.body} mb-20`}>
            担当より2営業日以内にご連絡いたします。
          </p>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
