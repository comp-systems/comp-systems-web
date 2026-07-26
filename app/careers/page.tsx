import Careers from "@/components/Careers";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "採用情報",
  description:
    "Comp Systems株式会社の採用情報。AI活用支援コンサルティングを共に担う仲間を募集しています。",
  alternates: { canonical: "https://www.compsystems.net/careers" },
};

export default function CareersPage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      <NavBar />
      <div className="pt-24">
        <Careers />
      </div>
      <Footer />
    </main>
  );
}
