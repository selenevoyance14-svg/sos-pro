import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { metiers, getMetierBySlug } from "@/data/metiers";
import { emergencyGuides } from "@/data/emergency-guides";
import { getEstimatedTarifs } from "@/data/content";
import { articles } from "@/data/articles";
import HelloArtisanCta from "@/components/HelloArtisanCta";

const BASE_URL = "https://sos-pro.fr";
const REVIEW_DATE = "2026-09-06";

export async function generateStaticParams() {
  return metiers.map((m) => ({ metier: m.slug }));
}

export async function generateMetadata({ params }: { params: { metier: string } }): Promise<Metadata> {
  const metier = getMetierBySlug(params.metier);
  if (!metier) return {};
  const title = `${metier.nom.replace(" 24h/24", "")} : gestes et tarifs 2026`;
  const description = `${metier.nom} : sécurisez la situation, estimez le prix d’intervention et préparez les questions à poser avant d’appeler.`;
  return {
    title, description,
    alternates: { canonical: `/${metier.slug}/` },
    openGraph: { title, description, url: `${BASE_URL}/${metier.slug}/`, type: "article" },
  };
}

export default function MetierPage({ params }: { params: { metier: string } }) {
  const metier = getMetierBySlug(params.metier);
  if (!metier) notFound();
  const guide = emergencyGuides[metier.slug];
  if (!guide) notFound();
  const tarifs = getEstimatedTarifs(metier.slug, { slug: "france", nom: "France", departement: "", codePostal: "", population: 100000 });
  const relatedArticles = articles.filter((article) => article.metier === metier.slug).slice(0, 4);
  const canonical = `${BASE_URL}/${metier.slug}/`;
  const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: `${metier.nom} : gestes immédiats et tarifs 2026`, description: metier.description, datePublished: "2026-07-30", dateModified: REVIEW_DATE, mainEntityOfPage: { "@type": "WebPage", "@id": canonical }, author: { "@type": "Organization", name: "SOS-Pro.fr", url: `${BASE_URL}/methode-editoriale/` }, publisher: { "@type": "Organization", name: "SOS-Pro.fr", url: BASE_URL } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: metier.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.reponse } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: `${BASE_URL}/` }, { "@type": "ListItem", position: 2, name: "Urgences 24h/24", item: `${BASE_URL}/categorie/urgences/` }, { "@type": "ListItem", position: 3, name: metier.nom, item: canonical }] },
  ];

  return <>
    {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
    <nav aria-label="Fil d’Ariane" className="mx-auto max-w-5xl px-4 py-4 text-sm text-slate-500"><Link href="/">Accueil</Link><span aria-hidden="true"> › </span><Link href="/categorie/urgences/">Urgences</Link><span aria-hidden="true"> › </span><span className="text-slate-800">{metier.nom}</span></nav>
    <header className="bg-gradient-to-br from-red-600 to-red-800 px-4 py-14 text-white"><div className="mx-auto max-w-4xl text-center"><div aria-hidden="true" className="mb-4 text-5xl">{metier.icon}</div><h1 className="text-3xl font-black md:text-5xl">{metier.nom} : que faire immédiatement ?</h1><p className="mx-auto mt-5 max-w-2xl text-lg text-red-50">Gestes de sécurité, prix indicatifs, informations à transmettre et pièges à éviter avant l’intervention.</p><p className="mt-4 text-sm text-red-100">Relu le 6 septembre 2026 · Informations indépendantes</p></div></header>
    <article className="mx-auto max-w-4xl px-4 py-12">
      <p className="text-lg leading-relaxed text-slate-700">{metier.description}</p>
      <aside className="mt-8 rounded-2xl border-l-4 border-red-600 bg-red-50 p-6"><h2 className="text-xl font-black text-red-950">Danger immédiat</h2><p className="mt-2 leading-relaxed text-red-900">{guide.warning}</p><p className="mt-3 font-bold text-red-950">En cas de danger pour une personne, appelez le 112, le 18, le 15 ou le 17 selon la situation.</p></aside>

      <section className="mt-12" id="premiers-gestes"><p className="text-sm font-bold uppercase tracking-widest text-red-600">Priorité sécurité</p><h2 className="mt-2 text-3xl font-black text-slate-950">Les premiers gestes, dans l’ordre</h2><ol className="mt-6 grid gap-4 sm:grid-cols-2">{guide.immediateActions.map((action, index) => <li key={action} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 font-black text-white">{index + 1}</span><span className="leading-relaxed text-slate-700">{action}</span></li>)}</ol></section>

      <section className="mt-12 grid gap-6 md:grid-cols-2"><div className="rounded-2xl bg-slate-900 p-6 text-white"><h2 className="text-2xl font-black">À préciser au téléphone</h2><ul className="mt-5 space-y-3 text-slate-200">{guide.callDetails.map((item) => <li key={item} className="flex gap-3"><span className="text-red-400">✓</span>{item}</li>)}</ul></div><div className="rounded-2xl border border-amber-200 bg-amber-50 p-6"><h2 className="text-2xl font-black text-amber-950">Prix à confirmer avant accord</h2><ul className="mt-5 space-y-3 text-amber-950">{guide.priceChecks.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true">€</span>{item}</li>)}</ul></div></section>

      {tarifs.length > 0 && <section className="mt-12" id="tarifs"><h2 className="text-3xl font-black text-slate-950">Tarifs indicatifs en 2026</h2><p className="mt-3 text-slate-600">Ces fourchettes servent à préparer l’appel. Elles varient selon la zone, l’horaire, la difficulté, le matériel et les pièces. Seul un devis engage le professionnel.</p><div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white"><table className="w-full text-left text-sm"><thead className="bg-slate-100"><tr><th className="p-4">Prestation</th><th className="p-4">Fourchette</th><th className="p-4">Unité</th></tr></thead><tbody>{tarifs.map((tarif) => <tr key={tarif.prestation} className="border-t border-slate-100"><td className="p-4 font-semibold">{tarif.prestation}</td><td className="p-4">{tarif.prixMin} à {tarif.prixMax} €</td><td className="p-4 text-slate-500">{tarif.unite}</td></tr>)}</tbody></table></div></section>}

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-2xl font-black text-slate-950">Sources officielles et utiles</h2><p className="mt-2 text-slate-600">Consultez les consignes de l’organisme compétent lorsque la sécurité ou la réglementation est en jeu.</p><ul className="mt-5 space-y-3">{guide.officialLinks.map((link) => <li key={link.href}><a className="font-bold text-red-700 underline decoration-red-200 underline-offset-4" href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗</a></li>)}</ul></section>
      <div className="mt-12"><HelloArtisanCta compact /></div>

      <section className="mt-12" id="faq"><h2 className="text-3xl font-black text-slate-950">Questions fréquentes sur {metier.nom.toLowerCase()}</h2><div className="mt-6 space-y-4">{metier.faq.map((item, index) => <details key={item.question} className="rounded-xl border border-slate-200 bg-white p-5" open={index === 0}><summary className="cursor-pointer font-bold text-slate-950">{item.question}</summary><p className="mt-3 leading-relaxed text-slate-700">{item.reponse}</p></details>)}</div></section>
      {relatedArticles.length > 0 && <section className="mt-12"><h2 className="text-3xl font-black text-slate-950">Guides complémentaires</h2><div className="mt-6 grid gap-4 sm:grid-cols-2">{relatedArticles.map((item) => <Link key={item.slug} href={`/blog/${item.slug}/`} className="rounded-xl border border-slate-200 bg-white p-5 hover:border-red-300"><h3 className="font-black text-slate-950">{item.title}</h3><p className="mt-2 text-sm text-slate-600">{item.description}</p></Link>)}</div></section>}
      <nav aria-label="Autres guides d’urgence" className="mt-12 border-t border-slate-200 pt-8"><h2 className="text-xl font-black text-slate-950">Autres urgences</h2><div className="mt-4 flex flex-wrap gap-2">{metiers.filter((item) => item.slug !== metier.slug).map((item) => <Link key={item.slug} href={`/${item.slug}/`} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold hover:bg-red-50 hover:text-red-700">{item.icon} {item.nom}</Link>)}</div></nav>
    </article>
  </>;
}
