import type { Metadata } from "next";
import { Geist, Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-WKSEDW04H1";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

// 日本語書体。Geistはラテン文字のみのため、指定しないと日本語がOS既定
// （Mac=ヒラギノ / Win=游ゴシック）にフォールバックし、環境ごとに別物になる。
// 日本語フォントは容量が大きいので preload は行わない（display: swap で後追い適用）。
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.compsystems.net"),
  title: {
    default: "Comp Systems | AI活用支援・代行",
    template: "%s | Comp Systems",
  },
  description: "AI活用の余地の洗い出しから定着まで一気通貫。中小企業向けAI活用支援・代行。外部のAI人材として経営革新を起こします。",
  openGraph: {
    type: "website",
    siteName: "Comp Systems",
    locale: "ja_JP",
    url: "https://www.compsystems.net",
    title: "Comp Systems | AI活用支援・代行",
    description: "AI活用の余地の洗い出しから定着まで一気通貫。中小企業向けAI活用支援・代行。",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Comp Systems" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comp Systems | AI活用支援・代行",
    description: "AI活用の余地の洗い出しから定着まで一気通貫。中小企業向けAI活用支援・代行。",
    images: ["/masaya-ozaki.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Comp Systems",
  legalName: "Comp Systems株式会社",
  description: "AI活用支援・代行",
  url: "https://www.compsystems.net",
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
  serviceType: "AI活用支援・代行",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${geist.variable} ${notoSansJP.variable}`}>
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
