import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
  type Section,
} from "@/data/articles";
import { getMetierBySlug } from "@/data/metiers";
import { getAmazonLink } from "@/data/produits-amazon";

const activeGuideHref: Record<string, string> = {
  "/plombier": "/plombier-urgence/",
  "/serrurier": "/serrurier-urgence/",
  "/electricien": "/electricien-urgence/",
  "/chauffagiste": "/chauffagiste-urgence/",
  "/vitrier": "/vitrier-urgence/",
  "/depanneur-auto": "/depanneur-auto-urgence/",
  "/veterinaire": "/veterinaire-urgence/",
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const a = getArticleBySlug(params.slug);
  if (!a) return {};
  return {
    title: { absolute: a.title },
    description: a.description,
    alternates: { canonical: `/blog/${a.slug}` },
    twitter: { card: "summary_large_image", title: a.title, description: a.description, images: ["/opengraph-image"] },
    openGraph: {
      url: `https://sos-pro.fr/blog/${a.slug}/`,
      locale: "fr_FR",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
      title: a.title,
      description: a.description,
      type: "article",
      publishedTime: a.date,
      modifiedTime: a.updated || a.date,
    },
  };
}

function renderSection(s: Section, i: number) {
  switch (s.type) {
    case "h2":
      return (
        <h2
          key={i}
          id={`section-${i}`}
          className="text-2xl font-bold text-gray-900 mt-10 mb-4"
        >
          {s.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={i}
          className="text-xl font-semibold text-gray-900 mt-6 mb-3"
        >
          {s.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="text-gray-700 leading-relaxed mb-4">
          {s.text}
        </p>
      );
    case "ul":
      return (
        <ul
          key={i}
          className="list-disc pl-6 mb-4 space-y-2 text-gray-700"
        >
          {s.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol
          key={i}
          className="list-decimal pl-6 mb-4 space-y-2 text-gray-700"
        >
          {s.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ol>
      );
    case "cta":
      return (
        <div
          key={i}
          className="my-8 bg-red-50 border-l-4 border-red-500 rounded-lg p-6"
        >
          <Link
            href={activeGuideHref[s.href] ?? s.href}
            download={s.href.endsWith(".txt") ? true : undefined}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            {s.text} →
          </Link>
        </div>
      );
    case "amazon":
      return (
        <div
          key={i}
          className="my-8 bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-6"
        >
          {s.titre && (
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {s.titre}
            </h3>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {s.produits.map((p, j) => (
              <a
                key={j}
                href={getAmazonLink(p.recherche)}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex items-start gap-3 p-3 bg-white border border-orange-200 rounded-lg hover:border-orange-400 hover:shadow-md transition-all group"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 group-hover:bg-orange-200 rounded-lg flex items-center justify-center text-lg">
                  🛒
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 text-sm group-hover:text-orange-700">
                    {p.nom}
                  </div>
                  <div className="text-xs text-gray-600 mt-0.5">
                    {p.description}
                  </div>
                  <div className="text-xs text-orange-600 font-medium mt-1">
                    Voir sur Amazon →
                  </div>
                </div>
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3 italic">
            En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.
          </p>
        </div>
      );
  }
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const a = getArticleBySlug(params.slug);
  if (!a) notFound();

  const metier = getMetierBySlug(a.metier);
  const related = getRelatedArticles(a.slug, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    inLanguage: "fr-FR",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    dateModified: a.updated || a.date,
    author: { "@type": "Organization", name: "SOS-Pro.fr", url: "https://sos-pro.fr/methode-editoriale/" },
    publisher: {
      "@type": "Organization",
      name: "SOS-Pro.fr",
      url: "https://sos-pro.fr",
    },
    image: "https://sos-pro.fr/opengraph-image",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sos-pro.fr/blog/${a.slug}`,
    },
  };

  const breadcrumbs = {
    "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://sos-pro.fr/" },
      { "@type": "ListItem", position: 2, name: "Conseils", item: "https://sos-pro.fr/blog/" },
      { "@type": "ListItem", position: 3, name: a.title, item: `https://sos-pro.fr/blog/${a.slug}/` }
    ]
  };
  const formattedDate = new Date(a.updated || a.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <article className="max-w-3xl mx-auto px-4 py-10">
        <nav aria-label="Fil d’Ariane" className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">
            Accueil
          </Link>
          {" › "}
          <Link href="/blog" className="hover:text-red-600">
            Blog
          </Link>
          {" › "}
          <span className="text-gray-700">{a.title}</span>
        </nav>

        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-4">
          {metier && (
            <Link
              href={`/${metier.slug}`}
              className="px-3 py-1 bg-red-50 text-red-600 rounded-full font-medium hover:bg-red-100 transition-colors"
            >
              {metier.icon} {metier.nom}
            </Link>
          )}
          <span>{formattedDate}</span>
          <span>·</span>
          <span>{a.readTime} min de lecture</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
          {a.title}
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8 border-l-4 border-red-500 pl-4 italic">
          {a.intro}
        </p>

        <nav aria-label="Sommaire" className="mb-8 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <h2 className="mb-3 text-lg font-bold text-gray-900">Dans ce guide</h2>
          <ul className="space-y-2 text-sm">
            {a.sections.map((section, index) => section.type === "h2" ? <li key={index}><a className="text-red-700 underline" href={`#section-${index}`}>{section.text}</a></li> : null)}
          </ul>
        </nav>
        <div className="prose prose-gray max-w-none">
          {a.sections.map((s, i) => renderSection(s, i))}
          {a.sources?.length ? (
            <section className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Sources officielles et informations utiles</h2>
              <ul className="space-y-2">
                {a.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer" className="text-red-700 underline">{source.label}</a></li>)}
              </ul>
            </section>
          ) : null}
        </div>

        {metier && <section className="mt-12 rounded-xl border border-red-100 bg-red-50 p-6"><h2 className="text-xl font-bold text-slate-950">Besoin des gestes immédiats ?</h2><p className="mt-2 text-slate-700">Consultez le guide complet avant d’appeler : sécurité, tarifs indicatifs et questions à poser.</p><Link href={`/${metier.slug}/`} className="mt-4 inline-flex rounded-lg bg-red-600 px-5 py-3 font-bold text-white hover:bg-red-700">Guide {metier.nom} →</Link></section>}
      </article>

      {related.length > 0 && (
        <section className="bg-gray-50 py-12 px-4 mt-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              À lire aussi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => {
                const rMetier = getMetierBySlug(r.metier);
                return (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-5 border border-gray-100 flex flex-col"
                  >
                    {rMetier && (
                      <span className="text-xs text-red-600 font-medium mb-2">
                        {rMetier.icon} {rMetier.nom}
                      </span>
                    )}
                    <h3 className="font-bold text-gray-900 mb-2 leading-tight">
                      {r.title}
                    </h3>
                    <p className="text-sm text-gray-600 flex-1 line-clamp-2">
                      {r.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
