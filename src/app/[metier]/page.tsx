import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { metiers, getMetierBySlug } from "@/data/metiers";
import { villes } from "@/data/villes";

export async function generateStaticParams() {
  return metiers.map((m) => ({ metier: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { metier: string };
}): Promise<Metadata> {
  const metier = getMetierBySlug(params.metier);
  if (!metier) return {};
  return {
    title: `${metier.nom} en France — Trouvez votre ${metier.nom.toLowerCase()} | SOS-Pro.fr`,
    description: `Liste des villes où trouver un ${metier.nom.toLowerCase()} en France. Tarifs, avis et coordonnées de ${metier.nom.toLowerCase()}s près de chez vous.`,
  };
}

export default function MetierPage({
  params,
}: {
  params: { metier: string };
}) {
  const metier = getMetierBySlug(params.metier);
  if (!metier) notFound();

  return (
    <>
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">{metier.icon}</div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            {metier.nom} en France
          </h1>
          <p className="text-lg opacity-90">
            Trouvez un {metier.nom.toLowerCase()} dans votre ville
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-gray-700 mb-8">{metier.description}</p>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Choisissez votre ville
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {villes.map((v) => (
            <Link
              key={v.slug}
              href={`/${metier.slug}/${v.slug}`}
              className="bg-white rounded-lg p-3 text-center border border-gray-200 hover:border-red-400 hover:shadow-md transition-all"
            >
              <div className="text-sm font-medium text-gray-800">
                {v.nom}
              </div>
              <div className="text-xs text-gray-400">{v.departement}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Questions fréquentes sur les {metier.nom.toLowerCase()}s
          </h2>
          <div className="space-y-4">
            {metier.faq.map((item, i) => (
              <details
                key={i}
                className="bg-white rounded-lg border border-gray-200 p-4"
              >
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  {item.question}
                </summary>
                <p className="mt-3 text-gray-600">{item.reponse}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Autres métiers */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Autres professionnels
        </h2>
        <div className="flex flex-wrap gap-2">
          {metiers
            .filter((m) => m.slug !== metier.slug)
            .map((m) => (
              <Link
                key={m.slug}
                href={`/${m.slug}`}
                className="px-3 py-1 bg-gray-100 hover:bg-red-50 hover:text-red-600 rounded-full text-sm transition-colors"
              >
                {m.icon} {m.nom}
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}
