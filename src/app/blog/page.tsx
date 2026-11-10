import Link from "next/link";
import { Metadata } from "next";
import { articles, type Article } from "@/data/articles";
import { getMetierBySlug } from "@/data/metiers";

export const metadata: Metadata = {
  title: "Conseils dépannage, équipement et guides locaux",
  description:
    "Conseils dépannage, guides d’achat, fiches commerces et démarches par ville. Préparez vos achats et retrouvez le bon interlocuteur.",
  alternates: { canonical: "/blog/" },
};

const collections: { id: string; title: string; collection: Article["collection"] }[] = [
  { id: "urgences", title: "Urgences et conseils", collection: undefined },
  { id: "equipement", title: "Équipement et produits", collection: "equipement" },
  { id: "commerces", title: "Commerces et artisans", collection: "commerces" },
  { id: "villes", title: "Démarches par ville", collection: "villes" },
];

export default function BlogIndex() {
  const sorted = [...articles].sort((a, b) => (b.updated || b.date).localeCompare(a.updated || a.date) || b.date.localeCompare(a.date));

  return (
    <>
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Blog SOS-Pro
          </h1>
          <p className="text-lg opacity-90">
            Conseils dépannage, équipement, commerces et démarches par ville
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <nav aria-label="Rubriques du blog" className="flex flex-wrap gap-2 mb-10">
          {collections.map((group) => (
            <a key={group.id} href={`#${group.id}`} className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-800 hover:bg-red-100">
              {group.title}
            </a>
          ))}
        </nav>
        {collections.map((group) => (
          <section key={group.id} id={group.id} className="mb-12 scroll-mt-24">
            <h2 className="mb-5 text-2xl font-bold text-gray-900">{group.title}</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {sorted.filter((article) => article.collection === group.collection).map((a) => {
                const metier = getMetierBySlug(a.metier);
                return (
                  <Link
                    key={a.slug}
                    href={`/blog/${a.slug}/`}
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                      {a.title}
                    </h3>
                    <p className="text-gray-600 text-sm flex-1">{a.description}</p>
                    <div className="mt-4 text-sm text-red-600 font-medium">
                      Lire l&apos;article →
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h2 className="text-xl font-bold text-gray-900">
            Choisir un professionnel : nos conseils pratiques
          </h2>
          <p>
            Face à une fuite, une porte bloquée ou une panne, la priorité est de
            sécuriser les personnes et d&apos;éviter d&apos;aggraver les dégâts. Ensuite,
            quelques informations précises permettent d&apos;obtenir un devis plus clair.
          </p>
          <p>
            Nos guides distinguent les gestes sans danger, les situations qui
            exigent les secours et les vérifications utiles avant d&apos;accepter une
            intervention. Les montants restent indicatifs : exigez toujours un devis.
          </p>
        </div>
      </section>
    </>
  );
}
