import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliation et partenaires",
  description: "Transparence sur les liens affiliés et partenaires de SOS-Pro.fr.",
  alternates: { canonical: "/affiliation/" },
};

export default function AffiliationPage() {
  return (
    <div className="prose prose-gray mx-auto max-w-3xl px-4 py-12">
      <h1>Affiliation et partenaires</h1>
      <p>
        SOS‑Pro.fr publie des guides gratuits. Certains liens clairement identifiés
        sont affiliés&nbsp;: ils peuvent générer une commission pour le site, sans
        surcoût pour l’utilisateur.
      </p>

      <h2>HelloArtisan</h2>
      <p>
        Les boutons «&nbsp;Demander des devis gratuits&nbsp;» renvoient vers un
        formulaire hébergé par HelloArtisan. SOS‑Pro ne recueille pas les données
        saisies dans ce formulaire. Avant de le compléter, consultez les informations
        de confidentialité et les conditions présentées par HelloArtisan.
      </p>

      <h2>Amazon</h2>
      <p>
        En tant que Partenaire Amazon, SOS‑Pro réalise un bénéfice sur les achats
        remplissant les conditions requises. Les prix, la disponibilité, la livraison
        et le service après-vente sont ceux indiqués par Amazon lors de la visite.
      </p>

      <h2>Indépendance éditoriale</h2>
      <p>
        Une rémunération potentielle ne garantit ni la qualité d’un professionnel
        ni le résultat d’une mise en relation. Comparez les offres, vérifiez les
        assurances et exigez un devis écrit avant les travaux.
      </p>
    </div>
  );
}
