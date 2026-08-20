import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import { SymbolMark } from "@/components/Logo";
import Mission from "@/components/Mission";
import Values from "@/components/Values";
import BusinessNav from "@/components/BusinessNav";
import Journal from "@/components/Journal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Comp Systems | AI活用支援・代行",
  description:
    "テクノロジーで余白を生み、創造力を最大化する。中小企業の外部AI人材として、AI活用余地の洗い出しから実装・定着まで一気通貫で担う。大阪・梅田。",
  alternates: { canonical: "https://www.compsystems.net" },
};

export default function Home() {
  return (
    <main className="bg-black text-white">
      <NavBar />
      {/* トップは理念のみ。事業の詳細は /service へ */}
      <Hero />
      {/* 以降は白地のパネル。Heroの末尾に少しかぶせて、角丸の立ち上がりを見せる */}
      <div className="on-light relative z-10 -mt-10 overflow-hidden rounded-t-[2.5rem] bg-[color:var(--surface)]">
        <Statement />
        {/* Mission と Value は1つの面。背後にシンボルを薄く敷く */}
        <div className="relative overflow-hidden bg-[color:var(--surface-alt)]">
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <SymbolMark
              mono
              className="h-[45%] w-auto text-[color:var(--fg)] opacity-[0.045]"
            />
          </div>
          <div className="relative">
            <Mission />
            <Values />
          </div>
        </div>
        <BusinessNav />
        <Journal />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
