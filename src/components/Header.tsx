import Link from "next/link";
import { categories } from "@/data/metiers";

export default function Header() {
  return (
    <header className="bg-red-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight">
              SOS<span className="text-yellow-300">Pro</span>
            </span>
            <span className="hidden sm:inline text-sm font-light opacity-80">
              .fr
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categorie/${cat.slug}`}
                className="text-sm font-medium hover:text-yellow-300 transition-colors"
              >
                {cat.icon} {cat.nom}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
