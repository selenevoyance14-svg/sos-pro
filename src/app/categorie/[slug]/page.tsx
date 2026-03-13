import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getMetiersByCategorie } from "@/data/metiers";
import { villes } from "@/data/villes";

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const categorie = categories.find((c) => c.slug === params.slug);
  if (!categorie) return {};
  return {
    title: `${categorie.nom} — Annuaire de professionnels | SOS-Pro.fr`,
    description: `Trouvez un professionnel ${categorie.nom.toLowerCase()} près de chez vous. Consultez notre annuaire et prenez rendez-vous rapidement.`,
  };
}

export default function CategoriePage({
  params,
}: {
  params: { slug: string };
}) {
  const categorie = categories.find((c) => c.slug === params.slug);
  if (!categorie) notFound();

  const catMetiers = getMetiersByCategorie(categorie.slug);
  const topVilles = villes.slice(0, 8);

  return (
    <>
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">{categorie.icon}</div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            {categorie.nom}
          </h1>
          <p className="text-lg opacity-90">
            Trouvez votre professionnel {categorie.nom.toLowerCase()} en
            France
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Nos professionnels {categorie.nom.toLowerCase()}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {catMetiers.map((m) => (
            <Link
              key={m.slug}
              href={`/${m.slug}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
            >
              <div className="text-3xl mb-3">{m.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {m.nom}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                {m.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1">
                {topVilles.slice(0, 4).map((v) => (
                  <Link
                    key={v.slug}
                    href={`/${m.slug}/${v.slug}`}
                    className="text-xs px-2 py-1 bg-gray-100 hover:bg-red-50 hover:text-red-600 rounded-full transition-colors"
                  >
                    {v.nom}
                  </Link>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Autres catégories */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Autres catégories
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories
              .filter((c) => c.slug !== categorie.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/categorie/${c.slug}`}
                  className="px-4 py-2 bg-white hover:bg-red-50 hover:text-red-600 border border-gray-200 rounded-lg transition-colors"
                >
                  {c.icon} {c.nom}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
