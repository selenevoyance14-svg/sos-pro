import type { Metadata } from "next";
import { EDITORIAL_REVIEW_DATE } from "@/data/seo";

export const metadata: Metadata = {
  title: "Notre méthode éditoriale",
  description:
    "Découvrez comment SOS-Pro.fr prépare ses guides, estime les prix et sélectionne ses recommandations.",
  alternates: { canonical: "/methode-editoriale/" },
};

export default function MethodeEditorialePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-14 prose prose-slate">
      <p className="text-sm font-bold uppercase tracking-widest text-red-600">
        Transparence
      </p>
      <h1>Notre méthode éditoriale</h1>
      <p className="lead">
        SOS-Pro.fr aide à préparer un appel ou une intervention. Nous ne sommes
        ni un annuaire, ni une plateforme de mise en relation, ni un service
        d&apos;urgence.
      </p>

      <h2>Comment sont préparés les guides ?</h2>
      <p>
        Chaque guide rassemble les prestations courantes, les critères de
        sélection, les questions utiles et les précautions propres au métier.
        Les informations sont relues pour rester compréhensibles par tous.
      </p>

      <h2>Comment sont estimés les prix ?</h2>
      <p>
        Les montants affichés sont des fourchettes indicatives. Ils peuvent
        varier selon la région, l&apos;horaire, l&apos;urgence, les fournitures et la
        difficulté. Ils ne remplacent jamais un devis écrit.
      </p>

      <h2>Professionnels et urgences</h2>
      <p>
        Nous ne vérifions, ne classons et ne recommandons aucun professionnel
        individuellement. En cas de danger immédiat, contactez les services
        d&apos;urgence officiels. Pour une intervention, vérifiez l&apos;identité,
        l&apos;assurance et les qualifications du prestataire.
      </p>

      <h2>Publicité et affiliation</h2>
      <p>
        Le site peut afficher des publicités et des liens Amazon affiliés.
        Seuls quelques produits directement utiles au sujet sont présentés.
        Une commission éventuelle ne modifie pas le prix payé.
      </p>

      <p className="text-sm text-slate-500">
        Dernière revue éditoriale : {EDITORIAL_REVIEW_DATE}.
      </p>
    </article>
  );
}
