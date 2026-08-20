import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  other: {
    "google-adsense-account": "ca-pub-5064203547863113",
  },
  title: {
    default: "SOS-Pro.fr — Tarifs et conseils avant d'appeler un pro",
    template: "%s | SOS-Pro.fr",
  },
  description:
    "Préparez votre intervention : fourchettes de prix, questions à poser, pièges à éviter et critères pour choisir un professionnel près de chez vous.",
  metadataBase: new URL("https://sos-pro.fr"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "SOS-Pro.fr",
    title: "SOS-Pro.fr — Les bons réflexes avant d'appeler un pro",
    description:
      "Tarifs indicatifs, questions à poser et pièges à éviter avant de contacter un professionnel.",
    url: "https://sos-pro.fr",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOS-Pro.fr — Les bons réflexes avant d'appeler un pro",
    description:
      "Tarifs indicatifs, questions à poser et pièges à éviter avant de contacter un professionnel.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5064203547863113"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} antialiased bg-slate-50 text-slate-950`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
