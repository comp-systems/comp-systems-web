import Company from "@/components/Company";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要",
  description: "Comp Systems 代表 尾﨑将也のプロフィール・会社情報。大阪梅田を拠点に、AI活用支援・代行を提供。",
  alternates: { canonical: "https://www.compsystems.net/company" },
};

export default function CompanyPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <NavBar />
      <div className="pt-24">
        <Company />
      </div>
      <Footer />
    </main>
  );
}
