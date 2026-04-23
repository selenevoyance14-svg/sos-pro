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
import { villes } from "@/data/villes";

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
    title: a.title,
    description: a.description,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: {
      title: a.title,
      description: a.description,
      type: "article",
      publishedTime: a.date,
    },
  };
}

function renderSection(s: Section, i: number) {
  switch (s.type) {
    case "h2":
      return (
        <h2
          key={i}
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
            href={s.href}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            {s.text} →
          </Link>
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
  const topVilles = villes.slice(0, 8);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    dateModified: a.date,
    author: {
      "@type": "Organization",
      name: "SOS-Pro.fr",
    },
    publisher: {
      "@type": "Organization",
      name: "SOS-Pro.fr",
      url: "https://sos-pro.fr",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sos-pro.fr/blog/${a.slug}`,
    },
  };

  const formattedDate = new Date(a.date).toLocaleDateString("fr-FR", {
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

      <article className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
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

        <div className="prose prose-gray max-w-none">
          {a.sections.map((s, i) => renderSection(s, i))}
        </div>

        {metier && (
          <section className="mt-12 bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Trouver un {metier.nom.toLowerCase()} par ville
            </h2>
            <div className="flex flex-wrap gap-2">
              {topVilles.map((v) => (
                <Link
                  key={v.slug}
                  href={`/${metier.slug}/${v.slug}`}
                  className="px-3 py-1 bg-white hover:bg-red-50 hover:text-red-600 border border-gray-200 rounded-full text-sm transition-colors"
                >
                  {metier.nom} à {v.nom}
                </Link>
              ))}
              <Link
                href={`/${metier.slug}`}
                className="px-3 py-1 bg-red-600 text-white hover:bg-red-700 rounded-full text-sm font-medium transition-colors"
              >
                Voir toutes les villes →
              </Link>
            </div>
          </section>
        )}
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
