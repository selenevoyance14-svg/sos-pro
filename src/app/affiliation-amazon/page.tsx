import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliation Amazon — SOS-Pro.fr",
  description: "Informations sur les liens affiliés Amazon présents sur SOS-Pro.fr.",
};

export default function AffiliationAmazonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-gray">
      <h1>Affiliation Amazon</h1>
      <p>
        <strong>
          En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.
        </strong>
      </p>
      <p>
        Certaines pages et certains guides de SOS-Pro.fr recommandent du matériel disponible sur Amazon.fr.
        Ces liens sont affiliés : un achat réalisé après avoir suivi l&apos;un de ces liens peut générer une
        commission pour le site, sans surcoût pour vous.
      </p>
      <h2>Prix et disponibilité</h2>
      <p>
        SOS-Pro.fr n&apos;affiche pas de prix Amazon et ne vend pas directement les produits recommandés.
        Le prix applicable, la disponibilité, la livraison, les retours et le service après-vente sont ceux
        indiqués sur Amazon au moment de votre visite.
      </p>
      <h2>Indépendance éditoriale</h2>
      <p>
        Les sélections servent à proposer du matériel en rapport avec le métier ou le problème présenté.
        La présence d&apos;un lien affilié ne constitue pas une garantie concernant un produit ou un vendeur.
      </p>
    </div>
  );
}
