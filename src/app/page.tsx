import Link from "next/link";
import { Metadata } from "next";
import { categories, metiers } from "@/data/metiers";
import { villes } from "@/data/villes";
import SearchBar from "@/components/SearchBar";

export const metadata: Metadata = {
  title: "SOS-Pro.fr — Trouvez un professionnel près de chez vous",
  description:
    "Guide pratique des professionnels en France : tarifs, conseils, comparatifs. Trouvez rapidement un ostéopathe, plombier, coiffeur, garagiste ou vétérinaire dans votre ville.",
};

export default function HomePage() {
  const topVilles = villes.slice(0, 12);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Trouvez un professionnel près de chez vous
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Thérapeutes, artisans, services — partout en France
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Catégories */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Nos catégories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const catMetiers = metiers.filter(
              (m) => m.categorie === cat.slug
            );
            return (
              <Link
                key={cat.slug}
                href={`/categorie/${cat.slug}`}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {cat.nom}
                </h3>
                <p className="text-gray-600 text-sm">
                  {catMetiers.map((m) => m.nom).join(", ")}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Tous les métiers */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Tous les professionnels
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {metiers.map((m) => (
              <Link
                key={m.slug}
                href={`/${m.slug}`}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-2xl mb-2">{m.icon}</div>
                <div className="text-sm font-medium text-gray-800">
                  {m.nom}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Villes principales */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Villes principales
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {topVilles.map((v) => (
            <div
              key={v.slug}
              className="bg-white rounded-lg p-3 text-center border border-gray-100 hover:border-red-300 transition-colors"
            >
              <Link
                href={`/osteopathe/${v.slug}`}
                className="text-sm font-medium text-gray-800 hover:text-red-600"
              >
                {v.nom}
              </Link>
              <div className="text-xs text-gray-400 mt-1">
                {v.departement}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-6 text-sm text-gray-500">
          Et {villes.length - topVilles.length} autres villes en France
        </p>
      </section>

      {/* SEO Content */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h2 className="text-xl font-bold text-gray-900">
            SOS-Pro.fr, votre guide pratique des professionnels en France
          </h2>
          <p>
            Vous cherchez un <strong>ostéopathe</strong>, un{" "}
            <strong>plombier</strong>, un <strong>coiffeur</strong>, un{" "}
            <strong>garagiste</strong> ou un <strong>vétérinaire</strong> dans
            votre ville ? SOS-Pro.fr vous propose un guide complet par métier et
            par ville pour comparer les tarifs, bien choisir votre professionnel
            et trouver le bon matériel.
          </p>
          <p>
            Notre guide couvre de nombreux domaines : <strong>bien-être
            et santé</strong> (ostéopathes, sophrologues, naturopathes),{" "}
            <strong>artisans du bâtiment</strong> (plombiers, électriciens,
            chauffagistes, vitriers, ramoneurs), <strong>services</strong>{" "}
            (photographes, coachs, jardiniers), <strong>beauté</strong>{" "}
            (coiffeurs, barbiers, esthéticiennes, tatoueurs),{" "}
            <strong>automobile</strong> (garagistes, carrossiers, dépanneurs)
            et <strong>animaux</strong> (vétérinaires, toiletteurs, pet-sitters).
          </p>
          <p>
            Chaque page vous donne les informations essentielles : tarifs
            indicatifs adaptés à votre ville, conseils pour bien choisir,
            questions fréquentes, numéros utiles et matériel recommandé.
          </p>
        </div>
      </section>
    </>
  );
}
