import type { Metadata } from "next";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import HelloArtisanCta from "@/components/HelloArtisanCta";
import { getLatestArticles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Urgence maison, auto ou animaux : les premiers réflexes",
  description:
    "Fuite, porte bloquée, panne électrique, chauffage, vitre cassée, voiture ou animal : sécurisez la situation avant d'appeler un professionnel.",
  alternates: { canonical: "/" },
};

const officialNumbers = [
  ["112", "Urgence européenne", "Danger immédiat ou doute sur le service à joindre"],
  ["18", "Sapeurs-pompiers", "Incendie, fuite importante, personne en danger"],
  ["15", "SAMU", "Urgence médicale"],
  ["17", "Police secours", "Effraction ou danger pour les personnes"],
  ["0 800 47 33 33", "Urgence sécurité gaz", "Odeur ou fuite de gaz, service GRDF gratuit 24h/24"],
];

const firstReflexes = [
  {
    icon: "🚿",
    title: "Fuite d’eau",
    text: "Fermez l’arrivée d’eau générale, coupez l’électricité si l’eau approche une installation et prenez des photos.",
    href: "/plombier-urgence/",
  },
  {
    icon: "🔓",
    title: "Porte bloquée",
    text: "N’endommagez pas la serrure. Demandez le prix total et refusez un perçage non justifié avant devis.",
    href: "/serrurier-urgence/",
  },
  {
    icon: "⚡",
    title: "Panne électrique",
    text: "Débranchez les appareils, testez le disjoncteur une seule fois et n’ouvrez jamais le tableau sous tension.",
    href: "/electricien-urgence/",
  },
  {
    icon: "🔥",
    title: "Chauffage ou gaz",
    text: "En cas d’odeur de gaz : aérez, ne touchez à aucun interrupteur, sortez et appelez le numéro sécurité gaz.",
    href: "/chauffagiste-urgence/",
  },
  {
    icon: "🪟",
    title: "Vitre cassée",
    text: "Éloignez enfants et animaux, mettez des gants, photographiez les dégâts et protégez provisoirement l’ouverture.",
    href: "/vitrier-urgence/",
  },
  {
    icon: "🚗",
    title: "Panne automobile",
    text: "Gilet avant de sortir, passagers derrière la glissière et appel depuis une borne sur autoroute.",
    href: "/depanneur-auto-urgence/",
  },
  {
    icon: "🩺",
    title: "Urgence vétérinaire",
    text: "Appelez avant de vous déplacer, gardez l’animal au calme et n’administrez aucun médicament humain.",
    href: "/veterinaire-urgence/",
  },
];

export default function HomePage() {
  const latestArticles = getLatestArticles(6);
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SOS-Pro.fr",
    url: "https://sos-pro.fr/",
    description:
      "Guides de premiers réflexes avant l'arrivée d'un professionnel.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(239,68,68,.35),_transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-200">
              Guides gratuits · SOS‑Pro ne vend pas vos coordonnées
            </p>
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Un problème urgent ?<br />
              <span className="text-red-400">Sécurisez avant d’appeler.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Les gestes immédiats, les numéros officiels, les prix indicatifs
              et les pièges à éviter avant l’arrivée du dépanneur.
            </p>
            <div className="mt-9">
              <SearchBar />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-red-100 bg-red-50 px-4 py-5">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-red-950 md:flex-row md:items-center md:justify-between">
          <strong>Danger immédiat : SOS-Pro ne remplace jamais les secours.</strong>
          <span>Appelez le 112, le 18, le 15 ou le 17 selon la situation.</span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-10">
        <HelloArtisanCta compact />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-red-600">
          Que se passe-t-il ?
        </p>
        <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
          Les premiers gestes, urgence par urgence
        </h2>
        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {firstReflexes.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-300 hover:shadow-lg"
            >
              <span className="text-4xl">{item.icon}</span>
              <h3 className="mt-4 text-xl font-extrabold text-slate-950 group-hover:text-red-700">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.text}
              </p>
              <span className="mt-5 inline-block text-sm font-bold text-red-600">
                Voir le guide complet →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 px-4 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-widest text-red-400">
            Numéros officiels
          </p>
          <h2 className="mt-2 text-3xl font-black">À garder sous la main</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {officialNumbers.map(([number, name, description]) => (
              <div key={number} className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
                <div className="text-2xl font-black text-red-400">{number}</div>
                <h3 className="mt-1 font-bold">{name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_.85fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-red-600">
              Avant de dire oui
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">
              Les 5 vérifications anti-arnaque
            </h2>
            <ol className="mt-7 space-y-4">
              {[
                "Demandez le prix du déplacement et la majoration nuit ou week-end.",
                "Exigez un devis écrit avant toute réparation qui n'est pas strictement conservatoire.",
                "Vérifiez le SIRET, l'assurance professionnelle et l'adresse de l'entreprise.",
                "Refusez le remplacement complet si une réparation simple n'a pas été examinée.",
                "Conservez devis, facture, photos et pièces remplacées pour votre assurance.",
              ].map((text, index) => (
                <li key={text} className="flex gap-4 rounded-xl bg-white p-4 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 font-black text-white">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-slate-700">{text}</span>
                </li>
              ))}
            </ol>
          </div>
          <aside className="rounded-3xl bg-red-600 p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-red-100">
              Notre rôle
            </p>
            <h2 className="mt-3 text-3xl font-black">Informer, pas vendre un dépanneur</h2>
            <p className="mt-5 leading-relaxed text-red-50">
              Les guides SOS‑Pro restent gratuits et indépendants. Nous expliquons
              quoi faire, combien une intervention peut coûter et quelles questions
              poser. Notre service partenaire de devis est toujours signalé avant
              que vous quittiez le site.
            </p>
            <Link
              href="/methode-editoriale/"
              className="mt-7 inline-flex rounded-xl bg-white px-5 py-3 font-bold text-red-700"
            >
              Lire notre méthode
            </Link>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <HelloArtisanCta />
      </section>

      {latestArticles.length > 0 ? (
        <section className="border-t border-slate-200 bg-white px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-red-600">
                  Conseils pratiques
                </p>
                <h2 className="mt-2 text-3xl font-black text-slate-950">À lire avant la panne</h2>
              </div>
              <Link href="/blog/" className="hidden font-bold text-red-600 sm:block">
                Tous les guides →
              </Link>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {latestArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}/`}
                  className="rounded-2xl border border-slate-200 p-6 transition hover:border-red-300 hover:shadow-md"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                    {article.readTime} min
                  </span>
                  <h3 className="mt-3 text-lg font-extrabold leading-snug text-slate-950">
                    {article.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">
                    {article.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
