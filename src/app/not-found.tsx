import Link from "next/link";

export default function NotFound() {
  return <section className="mx-auto max-w-3xl px-4 py-24 text-center"><p className="text-7xl font-black text-red-600">404</p><h1 className="mt-5 text-4xl font-black text-slate-950">Guide introuvable</h1><p className="mt-4 text-lg text-slate-600">La page demandée n’existe pas ou n’est plus disponible.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/" className="rounded-xl bg-red-600 px-6 py-3 font-bold text-white">Revenir à l’accueil</Link><Link href="/categorie/urgences/" className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-800">Voir les urgences</Link></div></section>;
}
