import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SOS-Pro.fr — les bons réflexes avant d’appeler" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOS-Pro.fr — Les bons réflexes avant d'appeler un pro",
    description:
      "Tarifs indicatifs, questions à poser et pièges à éviter avant de contacter un professionnel.",
    images: ["/opengraph-image"],
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5064203547863113" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased bg-slate-50 text-slate-950`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "SOS-Pro.fr", url: "https://sos-pro.fr/", email: "contact@sos-pro.fr", founder: { "@type": "Person", name: "Nathalie Lebrun" }, publishingPrinciples: "https://sos-pro.fr/methode-editoriale/" }) }} />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
