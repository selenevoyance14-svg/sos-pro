import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { metiers, getMetierBySlug } from "@/data/metiers";
import { villes, getVilleBySlug, getVillesProches } from "@/data/villes";

export const dynamicParams = true;

export async function generateStaticParams() {
  // Generate only top 10 cities per metier at build time, rest on-demand
  const topVilles = villes.slice(0, 10);
  const params: { metier: string; ville: string }[] = [];
  for (const m of metiers) {
    for (const v of topVilles) {
      params.push({ metier: m.slug, ville: v.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { metier: string; ville: string };
}): Promise<Metadata> {
  const metier = getMetierBySlug(params.metier);
  const ville = getVilleBySlug(params.ville);
  if (!metier || !ville) return {};

  const title = `${metier.nom} à ${ville.nom} (${ville.departement}) — SOS-Pro.fr`;
  const description = `Trouvez un ${metier.nom.toLowerCase()} à ${ville.nom} (${ville.codePostal}). Tarifs, coordonnées et avis. Prenez rendez-vous rapidement avec un ${metier.nom.toLowerCase()} près de chez vous.`;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

function generateSchemaOrg(metier: ReturnType<typeof getMetierBySlug>, ville: ReturnType<typeof getVilleBySlug>) {
  if (!metier || !ville) return null;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${metier.nom} à ${ville.nom}`,
    description: `Trouvez un ${metier.nom.toLowerCase()} à ${ville.nom}`,
    about: {
      "@type": "ProfessionalService",
      name: metier.nom,
      areaServed: {
        "@type": "City",
        name: ville.nom,
        postalCode: ville.codePostal,
      },
    },
  };
}

export default function MetierVillePage({
  params,
}: {
  params: { metier: string; ville: string };
}) {
  const metier = getMetierBySlug(params.metier);
  const ville = getVilleBySlug(params.ville);
  if (!metier || !ville) notFound();

  const villesProches = getVillesProches(ville, 6);
  const autresMetiers = metiers.filter(
    (m) => m.slug !== metier.slug && m.categorie === metier.categorie
  );

  const schema = generateSchemaOrg(metier, ville);

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      {/* Hero */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">{metier.icon}</div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            {metier.nom} à {ville.nom}
          </h1>
          <p className="text-lg opacity-90">
            Trouvez votre {metier.nom.toLowerCase()} à {ville.nom} (
            {ville.codePostal})
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-red-600">
          Accueil
        </Link>
        {" > "}
        <Link href={`/${metier.slug}`} className="hover:text-red-600">
          {metier.nom}
        </Link>
        {" > "}
        <span className="text-gray-800">{ville.nom}</span>
      </nav>

      {/* Contenu principal */}
      <section className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {metier.nom} à {ville.nom} — Ce qu&apos;il faut savoir
          </h2>
          <p className="text-gray-700 mb-4">{metier.description}</p>
          <p className="text-gray-700">
            À {ville.nom} ({ville.departement}), vous pouvez trouver
            plusieurs {metier.nom.toLowerCase()}s qualifiés. Nous vous
            recommandons de comparer les avis et de demander un premier
            échange avant de prendre rendez-vous.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Vous êtes {metier.nom.toLowerCase()} à {ville.nom} ?
          </h3>
          <p className="text-gray-600 mb-4">
            Inscrivez-vous gratuitement pour apparaître dans notre annuaire
            et recevoir des demandes de clients.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors"
          >
            Inscrire mon cabinet
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Questions fréquentes — {metier.nom} à {ville.nom}
          </h2>
          <div className="space-y-4">
            {metier.faq.map((item, i) => (
              <details
                key={i}
                className="bg-white rounded-lg border border-gray-200 p-4"
                open={i === 0}
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

      {/* Villes proches */}
      {villesProches.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 py-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {metier.nom} dans les villes proches
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {villesProches.map((v) => (
              <Link
                key={v.slug}
                href={`/${metier.slug}/${v.slug}`}
                className="bg-white rounded-lg p-3 text-center border border-gray-200 hover:border-red-400 transition-colors"
              >
                <div className="text-sm font-medium text-gray-800">
                  {v.nom}
                </div>
                <div className="text-xs text-gray-400">
                  {v.departement}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Autres métiers dans cette ville */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Autres professionnels à {ville.nom}
          </h2>
          <div className="flex flex-wrap gap-2">
            {autresMetiers.map((m) => (
              <Link
                key={m.slug}
                href={`/${m.slug}/${ville.slug}`}
                className="px-3 py-1 bg-white hover:bg-red-50 hover:text-red-600 border border-gray-200 rounded-full text-sm transition-colors"
              >
                {m.icon} {m.nom}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
