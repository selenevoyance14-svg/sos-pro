import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { metiers, getMetierBySlug } from "@/data/metiers";
import { villes, getVilleBySlug, getVillesProches } from "@/data/villes";
import {
  getEstimatedTarifs,
  getTarifLabel,
  generateIntroText,
  generateGuideText,
  conseilsChoix,
  quandConsulter,
} from "@/data/content";
import { numerosUrgence, liensUtiles } from "@/data/numeros-utiles";
import { produitsParMetier, getAmazonLink } from "@/data/produits-amazon";

export const dynamicParams = false;

export async function generateStaticParams() {
  const params: { metier: string; ville: string }[] = [];
  for (const m of metiers) {
    for (const v of villes) {
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

  const title = `${metier.nom} à ${ville.nom} (${ville.departement}) — Tarifs, Conseils | SOS-Pro.fr`;
  const description = `${metier.nom} à ${ville.nom} (${ville.codePostal}) : tarifs ${new Date().getFullYear()}, conseils pour bien choisir, questions fréquentes. Guide complet pour trouver un ${metier.nom.toLowerCase()} de confiance à ${ville.nom}.`;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

function generateSchemaOrg(
  metier: ReturnType<typeof getMetierBySlug>,
  ville: ReturnType<typeof getVilleBySlug>
) {
  if (!metier || !ville) return null;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${metier.nom} à ${ville.nom}`,
    description: `Guide complet : ${metier.nom.toLowerCase()} à ${ville.nom}`,
    about: {
      "@type": "ProfessionalService",
      name: metier.nom,
      areaServed: {
        "@type": "City",
        name: ville.nom,
        postalCode: ville.codePostal,
      },
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: metier.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.reponse,
        },
      })),
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

  const villesProches = getVillesProches(ville, 8);
  const autresMetiers = metiers.filter(
    (m) => m.slug !== metier.slug && m.categorie === metier.categorie
  );
  const tousAutresMetiers = metiers.filter(
    (m) => m.slug !== metier.slug && m.categorie !== metier.categorie
  );

  const schema = generateSchemaOrg(metier, ville);
  const tarifs = getEstimatedTarifs(metier.slug, ville);
  const tarifLabel = getTarifLabel(ville);
  const introText = generateIntroText(metier, ville);
  const guideText = generateGuideText(metier, ville);
  const conseils = conseilsChoix[metier.slug] ?? [];
  const motifs = quandConsulter[metier.slug] ?? [];
  const numeros = numerosUrgence[metier.categorie] ?? [];
  const liens = liensUtiles[metier.slug] ?? [];
  const produits = produitsParMetier[metier.slug] ?? [];
  const nomLower = metier.nom.toLowerCase();
  const annee = new Date().getFullYear();
  const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(
    `${metier.nom} ${ville.nom}`
  )}`;

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
            Guide complet {annee} — Tarifs, conseils et informations pratiques
          </p>
          <p className="text-sm opacity-75 mt-2">
            {ville.nom} ({ville.codePostal}) — {ville.population.toLocaleString("fr-FR")} habitants
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-red-600">Accueil</Link>
        {" > "}
        <Link href={`/${metier.slug}`} className="hover:text-red-600">{metier.nom}</Link>
        {" > "}
        <span className="text-gray-800">{ville.nom}</span>
      </nav>

      {/* Sommaire */}
      <section className="max-w-4xl mx-auto px-4 py-4">
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
          <h2 className="font-bold text-gray-900 mb-3">Sommaire</h2>
          <ul className="space-y-1 text-sm">
            <li><a href="#presentation" className="text-red-600 hover:underline">Présentation</a></li>
            <li><a href="#tarifs" className="text-red-600 hover:underline">Tarifs {annee} à {ville.nom}</a></li>
            <li><a href="#quand-consulter" className="text-red-600 hover:underline">Quand faire appel à un {nomLower} ?</a></li>
            <li><a href="#bien-choisir" className="text-red-600 hover:underline">Comment bien choisir son {nomLower}</a></li>
            <li><a href="#faq" className="text-red-600 hover:underline">Questions fréquentes</a></li>
            <li><a href="#numeros" className="text-red-600 hover:underline">Numéros utiles et liens pratiques</a></li>
          </ul>
        </div>
      </section>

      {/* Présentation */}
      <section id="presentation" className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {metier.nom} à {ville.nom} — Ce qu&apos;il faut savoir
          </h2>
          <p className="text-gray-700 mb-4">{metier.description}</p>
          <p className="text-gray-700 mb-4">{introText}</p>
          <p className="text-gray-700">{guideText}</p>
        </div>
      </section>

      {/* Tarifs */}
      {tarifs.length > 0 && (
        <section id="tarifs" className="max-w-4xl mx-auto px-4 py-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Tarifs {nomLower} à {ville.nom} — {annee}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Les tarifs à {ville.nom} sont <strong>{tarifLabel}</strong>. Voici une estimation des prix pratiqués :
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Prestation</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-700">Prix estimé</th>
                    <th className="text-left py-3 pl-4 font-semibold text-gray-700">Unité</th>
                  </tr>
                </thead>
                <tbody>
                  {tarifs.map((t, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-gray-800">{t.prestation}</td>
                      <td className="py-3 px-4 text-right font-medium text-gray-900">
                        {t.prixMin}€ — {t.prixMax}€
                      </td>
                      <td className="py-3 pl-4 text-gray-500">{t.unite}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              * Ces tarifs sont des estimations basées sur les prix moyens pratiqués à {ville.nom} et ses environs. Les prix réels peuvent varier selon le praticien, la complexité de la prestation et la localisation exacte.
            </p>
          </div>
        </section>
      )}

      {/* CTA Google Maps : trouver un pro */}
      <section className="max-w-4xl mx-auto px-4 py-4">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Trouver un {nomLower} à {ville.nom}
          </h3>
          <p className="text-gray-600 mb-4">
            Consultez la carte des {nomLower}s à {ville.nom} avec les avis, horaires et coordonnées sur Google Maps.
          </p>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Voir les {nomLower}s sur Google Maps
          </a>
        </div>
      </section>

      {/* Matériel recommandé Amazon */}
      {produits.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 py-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Matériel et produits recommandés pour {nomLower}
            </h2>
            <p className="text-sm text-gray-500 mb-5">
              Notre sélection de produits utiles, que vous fassiez appel à un {nomLower} à {ville.nom} ou que vous souhaitiez réaliser certaines opérations vous-même.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {produits.map((p, i) => (
                <a
                  key={i}
                  href={getAmazonLink(p.recherche)}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:border-orange-400 hover:bg-orange-50 transition-all group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 group-hover:bg-orange-200 rounded-lg flex items-center justify-center text-lg">
                    🛒
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900 text-sm group-hover:text-orange-700">
                      {p.nom}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {p.description}
                    </div>
                    <div className="text-xs text-orange-600 font-medium mt-1">
                      Voir sur Amazon →
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4 italic">
              En tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats remplissant les conditions applicables. Cela ne change pas le prix pour vous.
            </p>
          </div>
        </section>
      )}

      {/* Quand consulter */}
      {motifs.length > 0 && (
        <section id="quand-consulter" className="max-w-4xl mx-auto px-4 py-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Quand faire appel à un {nomLower} à {ville.nom} ?
            </h2>
            <p className="text-gray-700 mb-4">
              Voici les situations les plus courantes pour lesquelles les habitants de {ville.nom} consultent un {nomLower} :
            </p>
            <ul className="space-y-2">
              {motifs.map((motif, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-500 mt-1 flex-shrink-0">&#10003;</span>
                  <span className="text-gray-700">{motif}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Bien choisir */}
      {conseils.length > 0 && (
        <section id="bien-choisir" className="bg-gray-50 py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Comment bien choisir son {nomLower} à {ville.nom} ?
            </h2>
            <div className="grid gap-3">
              {conseils.map((conseil, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-4 border border-gray-200 flex gap-3"
                >
                  <span className="bg-red-100 text-red-600 font-bold rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm">
                    {i + 1}
                  </span>
                  <p className="text-gray-700 text-sm">{conseil}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-4 py-8">
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
          <details className="bg-white rounded-lg border border-gray-200 p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Combien de {nomLower}s y a-t-il à {ville.nom} ?
            </summary>
            <p className="mt-3 text-gray-600">
              {ville.nom} ({ville.codePostal}) compte plusieurs {nomLower}s en exercice. Le nombre exact varie, mais avec {ville.population.toLocaleString("fr-FR")} habitants, l&apos;offre est {ville.population > 100000 ? "assez large pour permettre de comparer" : "plus limitée, ce qui favorise le bouche-à-oreille"}. Nous vous conseillons de contacter directement les praticiens pour vérifier leurs disponibilités.
            </p>
          </details>
          <details className="bg-white rounded-lg border border-gray-200 p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Les tarifs sont-ils plus chers à {ville.nom} qu&apos;ailleurs ?
            </summary>
            <p className="mt-3 text-gray-600">
              Les tarifs des {nomLower}s à {ville.nom} sont {tarifLabel}. Les prix dépendent de l&apos;expérience du praticien, de sa spécialisation et de la localisation de son cabinet. N&apos;hésitez pas à demander les tarifs par téléphone avant de prendre rendez-vous.
            </p>
          </details>
        </div>
      </section>

      {/* Numéros utiles */}
      <section id="numeros" className="bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Numéros utiles à {ville.nom}
          </h2>
          {numeros.length > 0 && (
            <div className="grid gap-3 mb-6">
              {numeros.map((n, i) => (
                <div key={i} className="bg-white rounded-lg p-4 border border-gray-200 flex items-center gap-4">
                  <div className="bg-red-600 text-white font-bold px-3 py-2 rounded-lg text-sm whitespace-nowrap">
                    {n.numero}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{n.nom}</div>
                    <div className="text-xs text-gray-500">{n.description}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {liens.length > 0 && (
            <>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Liens utiles — {metier.nom}
              </h3>
              <div className="grid gap-3">
                {liens.map((l, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="font-semibold text-gray-900 text-sm">{l.nom}</div>
                    <div className="text-xs text-gray-500 mb-1">{l.description}</div>
                    <span className="text-xs text-red-600">{l.url}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Villes proches */}
      {villesProches.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {metier.nom} dans les villes proches de {ville.nom}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {villesProches.map((v) => (
              <Link
                key={v.slug}
                href={`/${metier.slug}/${v.slug}`}
                className="bg-white rounded-lg p-3 text-center border border-gray-200 hover:border-red-400 hover:shadow-md transition-all"
              >
                <div className="text-sm font-medium text-gray-800">{v.nom}</div>
                <div className="text-xs text-gray-400">{v.departement}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Autres métiers même catégorie */}
      {autresMetiers.length > 0 && (
        <section className="bg-gray-50 py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Autres professionnels à {ville.nom}
            </h2>
            <div className="flex flex-wrap gap-2">
              {autresMetiers.map((m) => (
                <Link
                  key={m.slug}
                  href={`/${m.slug}/${ville.slug}`}
                  className="px-3 py-2 bg-white hover:bg-red-50 hover:text-red-600 border border-gray-200 rounded-full text-sm transition-colors"
                >
                  {m.icon} {m.nom} à {ville.nom}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Autres catégories */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Tous les professionnels à {ville.nom}
        </h2>
        <div className="flex flex-wrap gap-2">
          {tousAutresMetiers.slice(0, 8).map((m) => (
            <Link
              key={m.slug}
              href={`/${m.slug}/${ville.slug}`}
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
