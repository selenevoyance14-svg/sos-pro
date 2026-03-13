import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — SOS-Pro.fr",
  description: "Mentions légales du site SOS-Pro.fr",
};

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-gray">
      <h1>Mentions légales</h1>
      <h2>Éditeur du site</h2>
      <p>
        SOS-Pro.fr est un site édité par un particulier.
        <br />
        Contact : contact@sos-pro.fr
      </p>
      <h2>Hébergement</h2>
      <p>
        Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
        91789, États-Unis.
      </p>
      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble du contenu de ce site (textes, images, logo) est
        protégé par le droit d&apos;auteur. Toute reproduction est interdite
        sans autorisation préalable.
      </p>
      <h2>Données personnelles</h2>
      <p>
        Ce site ne collecte aucune donnée personnelle directement. Des cookies
        tiers peuvent être déposés par Google AdSense à des fins publicitaires.
        Vous pouvez configurer votre navigateur pour refuser les cookies.
      </p>
    </div>
  );
}
