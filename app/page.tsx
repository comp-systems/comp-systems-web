import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Comp Systems | AI活用支援・代行",
  description: "AI活用の余地の洗い出しから定着まで一気通貫で担う、大阪の中小企業向けAI活用支援・代行。外部のAI人材として経営革新を起こします。",
  alternates: { canonical: "https://www.compsystems.net" },
};
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Service from "@/components/Service";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <NavBar />
      <Hero />
      <Problem />
      <Service />
      <WhyUs />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
