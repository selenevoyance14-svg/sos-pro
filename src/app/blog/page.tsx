import Link from "next/link";
import { Metadata } from "next";
import { articles } from "@/data/articles";
import { getMetierBySlug } from "@/data/metiers";

export const metadata: Metadata = {
  title: "Blog — Guides et conseils pour trouver un professionnel",
  description:
    "Articles pratiques pour choisir un ostéopathe, un plombier, un photographe ou un coach sportif : tarifs, critères de sélection, pièges à éviter.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Blog SOS-Pro
          </h1>
          <p className="text-lg opacity-90">
            Guides et conseils pour bien choisir votre professionnel
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sorted.map((a) => {
            const metier = getMetierBySlug(a.metier);
            return (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 flex flex-col"
              >
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  {metier && (
                    <span className="px-2 py-1 bg-red-50 text-red-600 rounded-full font-medium">
                      {metier.icon} {metier.nom}
                    </span>
                  )}
                  <span>{a.readTime} min de lecture</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                  {a.title}
                </h2>
                <p className="text-gray-600 text-sm flex-1">{a.description}</p>
                <div className="mt-4 text-sm text-red-600 font-medium">
                  Lire l&apos;article →
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h2 className="text-xl font-bold text-gray-900">
            Choisir un professionnel : nos conseils pratiques
          </h2>
          <p>
            Trouver le bon professionnel — qu&apos;il s&apos;agisse d&apos;un ostéopathe
            pour une lombalgie, d&apos;un plombier pour une fuite ou d&apos;un
            photographe pour votre mariage — demande de savoir poser les bonnes
            questions et de reconnaître les signaux de confiance.
          </p>
          <p>
            Notre blog rassemble des guides pratiques, basés sur les tarifs
            réels observés en 2026 et les retours de consommateurs, pour vous
            aider à éviter les pièges les plus fréquents et à choisir en toute
            sérénité.
          </p>
        </div>
      </section>
    </>
  );
}
