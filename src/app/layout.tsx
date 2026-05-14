import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "SOS-Pro.fr — Trouvez un professionnel près de chez vous",
    template: "%s | SOS-Pro.fr",
  },
  description:
    "Guide pratique des professionnels en France : tarifs, conseils, comparatifs. Trouvez rapidement un ostéopathe, plombier, coiffeur, garagiste ou vétérinaire dans votre ville.",
  metadataBase: new URL("https://sos-pro.fr"),
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
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
