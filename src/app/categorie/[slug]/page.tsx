import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getMetiersByCategorie } from "@/data/metiers";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const category = categories.find((item) => item.slug === params.slug);
  if (!category) return {};
  return {
    title: "Urgences 24h/24 : premiers gestes, tarifs et numéros",
    description:
      "Fuite, serrurerie, électricité, chauffage, vitre, automobile ou animal : que faire immédiatement et comment éviter les dépannages abusifs.",
    alternates: { canonical: `/categorie/${category.slug}/` },
  };
}

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = categories.find((item) => item.slug === params.slug);
  if (!category) notFound();
  const guides = getMetiersByCategorie(category.slug);

  return (
    <>
      <section className="bg-slate-950 px-4 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-widest text-red-400">
            SOS-Pro
          </p>
          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            Guides d’urgences 24h/24
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Sécuriser la situation, appeler le bon service, préparer le devis et
            reconnaître les pratiques abusives.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/${guide.slug}/`}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-300 hover:shadow-lg"
            >
              <span className="text-4xl">{guide.icon}</span>
              <h2 className="mt-4 text-xl font-black text-slate-950">
                {guide.nom}
              </h2>
              <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-slate-600">
                {guide.description}
              </p>
              <span className="mt-5 inline-block text-sm font-bold text-red-600">
                Premiers réflexes et tarifs →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
