import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Comp Systems | AI活用支援コンサルティング",
  description: "徹底的な伴走でAIを定着させ、経営革新を起こす。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={geist.variable}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
