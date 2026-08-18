import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Données, cookies, publicité et droits des visiteurs de SOS-Pro.fr.",
  alternates: { canonical: "/confidentialite/" },
};

export default function ConfidentialitePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-14 prose prose-slate">
      <h1>Politique de confidentialité</h1>
      <h2>Responsable du traitement</h2>
      <p>Nathalie Lebrun, entrepreneur individuel, 524 rue de la Tourrache, 83600 Fréjus, France — <a href="mailto:contact@sos-pro.fr">contact@sos-pro.fr</a>.</p>
      <p>
        SOS-Pro.fr ne demande pas de compte et ne vend pas les coordonnées de
        ses visiteurs. Un courriel envoyé à notre adresse de contact est utilisé
        uniquement pour répondre à la demande.
      </p>
      <h2>Mesure d&apos;audience et publicité</h2>
      <p>
        Google AdSense et ses partenaires peuvent utiliser des cookies ou des
        technologies similaires pour diffuser et mesurer des publicités, sous
        réserve de votre consentement lorsque celui-ci est requis.
      </p>
      <h2>Liens affiliés</h2>
      <p>
        Certains liens vers Amazon sont affiliés. Amazon peut traiter des
        informations conformément à sa propre politique de confidentialité.
      </p>
      <h2>Vos choix</h2>
      <p>
        Vous pouvez refuser ou supprimer les cookies depuis les réglages de
        votre navigateur. Pour toute question concernant vos données, écrivez à{" "}
        <a href="mailto:contact@sos-pro.fr">contact@sos-pro.fr</a>.
      </p>
    </article>
  );
}
