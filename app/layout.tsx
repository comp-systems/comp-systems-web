import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-WKSEDW04H1";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.compsystems.net"),
  title: {
    default: "Comp Systems | AI活用支援コンサルティング",
    template: "%s | Comp Systems",
  },
  description: "AI活用の余地の洗い出しから定着まで一気通貫。中小企業向けAI活用支援コンサルティング。外部のAI人材として経営革新を起こします。",
  openGraph: {
    type: "website",
    siteName: "Comp Systems",
    locale: "ja_JP",
    url: "https://www.compsystems.net",
    title: "Comp Systems | AI活用支援コンサルティング",
    description: "AI活用の余地の洗い出しから定着まで一気通貫。中小企業向けAI活用支援コンサルティング。",
    images: [{ url: "/masaya-ozaki.jpg", width: 1200, height: 630, alt: "Comp Systems" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comp Systems | AI活用支援コンサルティング",
    description: "AI活用の余地の洗い出しから定着まで一気通貫。中小企業向けAI活用支援コンサルティング。",
    images: ["/masaya-ozaki.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Comp Systems",
  description: "AI活用支援コンサルティング",
  url: "https://www.compsystems.net",
  telephone: "080-6391-8299",
  email: "info@compsystems.net",
  founder: { "@type": "Person", name: "尾﨑将也" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "梅田1丁目1番3号 大阪駅前第3ビル11階2号室",
    addressLocality: "大阪市北区",
    addressRegion: "大阪府",
    postalCode: "530-0001",
    addressCountry: "JP",
  },
  areaServed: "JP",
  serviceType: "AIコンサルティング",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={geist.variable}>
      <body className="bg-black text-white antialiased">
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">{`
              window.dataLayer=window.dataLayer||[];
              function gtag(){dataLayer.push(arguments);}
              gtag('js',new Date());
              gtag('config','${GA_ID}');
            `}</Script>
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
