import Link from "next/link";
import { categories } from "@/data/metiers";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              SOS<span className="text-yellow-400">Pro</span>.fr
            </h3>
            <p className="text-sm">
              Guides indépendants pour estimer les prix, préparer vos questions
              et éviter les pièges avant d&apos;appeler un professionnel.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Catégories</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categorie/${cat.slug}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {cat.icon} {cat.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Informations</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/affiliation" className="hover:text-white transition-colors">
                  Affiliation et partenaires
                </Link>
              </li>
              <li>
                <Link href="/methode-editoriale" className="hover:text-white transition-colors">
                  Méthode éditoriale
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="hover:text-white transition-colors">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} SOS-Pro.fr — Tous droits réservés</p>
          <p className="mt-3 text-xs">
            En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.
          </p>
        </div>
      </div>
    </footer>
  );
}
