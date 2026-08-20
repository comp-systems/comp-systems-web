import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import { text } from "@/components/typography";
import Problem from "@/components/Problem";
import Service from "@/components/Service";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "事業案内",
  description:
    "Comp Systemsの事業案内。中小企業の外部AI人材として、AI活用余地の洗い出しから実装・定着まで一気通貫で担う。",
  alternates: { canonical: "https://www.compsystems.net/service" },
};

export default function ServicePage() {
  return (
    <main className="on-light min-h-screen bg-[color:var(--surface)]">
      <NavBar />
      <div className="pt-24">
        {/* ページの冒頭で事業を名指しする */}
        <section className="pt-16 pb-8 px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className={`${text.h2} mb-12`}>AI活用支援・代行事業</h1>
            <p className={`${text.lead} max-w-4xl`}>
              経営、現場の双方の目線から、AI活用を前提とした業務フローを設計し、
              <br />
              AIの活用余地の洗い出しから定着まで、一気通貫で担います。
            </p>
          </div>
        </section>
        <Problem />
        <Service />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
