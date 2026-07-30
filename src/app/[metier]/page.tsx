import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { metiers, getMetierBySlug } from "@/data/metiers";

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
    title: `${metier.nom} : tarifs 2026 et conseils pour bien choisir`,
    description: `${metier.nom} : prix indicatifs, prestations, questions à poser et pièges à éviter avant de contacter un professionnel.`,
    alternates: { canonical: `/${metier.slug}/` },
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
            Guide {metier.nom}
          </h1>
          <p className="text-lg opacity-90">
            Tarifs indicatifs, critères de choix et questions utiles avant d&apos;appeler
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-gray-700 mb-8">{metier.description}</p>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["1", "Sécurisez", "Éloignez les personnes du danger et coupez l'eau, le gaz ou le courant uniquement si cela peut être fait sans risque."],
            ["2", "Documentez", "Prenez des photos, notez les symptômes de la panne et contactez votre assurance si un sinistre est possible."],
            ["3", "Faites chiffrer", "Demandez le prix du déplacement, la majoration et un devis écrit avant toute réparation non indispensable."],
          ].map(([num, title, text]) => (
            <div key={num} className="rounded-xl border border-gray-200 bg-white p-5">
              <span className="text-sm font-bold text-red-600">ÉTAPE {num}</span>
              <h2 className="mt-2 text-lg font-bold text-gray-900">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p>
            </div>
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
