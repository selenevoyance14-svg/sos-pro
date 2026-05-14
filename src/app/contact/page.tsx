import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — SOS-Pro.fr",
  description:
    "Contactez-nous pour toute question, inscription de votre cabinet ou signalement.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
        Contactez-nous
      </h1>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <p className="text-gray-700 mb-6">
          Une question, une suggestion, un signalement ou un partenariat ?
          Contactez-nous par email :
        </p>
        <a
          href="mailto:bonsplansmania@gmail.com"
          className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors"
        >
          contact@sos-pro.fr
        </a>
        <p className="text-sm text-gray-500 mt-6">
          Nous répondons généralement sous 48 heures.
        </p>
      </div>
    </div>
  );
}
