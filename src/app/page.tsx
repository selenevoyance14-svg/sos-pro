import Link from "next/link";
import { Metadata } from "next";
import { categories, metiers } from "@/data/metiers";
import { villes } from "@/data/villes";
import { getLatestArticles } from "@/data/articles";
import { getMetierBySlug } from "@/data/metiers";
import SearchBar from "@/components/SearchBar";

export const metadata: Metadata = {
  title: "SOS-Pro.fr — Trouvez un professionnel près de chez vous",
  description:
    "Guide pratique des professionnels en France : tarifs, conseils, comparatifs. Trouvez rapidement un ostéopathe, plombier, coiffeur, garagiste ou vétérinaire dans votre ville.",
};

const categoryGradients: Record<string, string> = {
  urgences: "from-red-500 to-orange-500",
  "bien-etre": "from-emerald-500 to-teal-500",
  artisans: "from-amber-500 to-orange-600",
  services: "from-indigo-500 to-blue-600",
  beaute: "from-pink-500 to-rose-500",
  auto: "from-slate-700 to-gray-900",
  animaux: "from-lime-500 to-green-600",
};

export default function HomePage() {
  const topVilles = villes.slice(0, 12);
  const latestArticles = getLatestArticles(6);
  const urgenceMetiers = metiers.filter((m) => m.categorie === "urgences");

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 25% 30%, white 1px, transparent 1px), radial-gradient(circle at 75% 70%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="relative max-w-5xl mx-auto px-4 py-20 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="font-medium">Mis à jour — tarifs 2026 vérifiés</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight tracking-tight">
            Le bon pro,<br className="md:hidden" /> près de chez vous
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Thérapeutes, artisans, urgences, beauté, auto, animaux —
            guides clairs, tarifs réels, partout en France.
          </p>
          <SearchBar />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold">{metiers.length}</div>
              <div className="text-xs md:text-sm opacity-80 uppercase tracking-wider">métiers couverts</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold">{villes.length}+</div>
              <div className="text-xs md:text-sm opacity-80 uppercase tracking-wider">villes en France</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold">{categories.length}</div>
              <div className="text-xs md:text-sm opacity-80 uppercase tracking-wider">grands secteurs</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold">100%</div>
              <div className="text-xs md:text-sm opacity-80 uppercase tracking-wider">gratuit, sans pub agressive</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bannière urgences */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 border-y border-red-100 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="text-3xl">🚨</span>
            <div>
              <div className="font-bold text-red-700">Urgences 24h/24</div>
              <div className="text-xs text-gray-600">Plombier, serrurier, électricien…</div>
            </div>
          </div>
          <div className="flex-1 flex flex-wrap gap-2 justify-center md:justify-end">
            {urgenceMetiers.slice(0, 5).map((m) => (
              <Link
                key={m.slug}
                href={`/${m.slug}`}
                className="bg-white border border-red-200 hover:bg-red-600 hover:text-white hover:border-red-600 text-red-700 text-sm font-medium px-3 py-1.5 rounded-full transition-colors"
              >
                {m.nom}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">En 3 étapes</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Comment ça marche</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { num: "1", title: "Choisissez votre métier", desc: "Parcourez 7 grandes catégories pour identifier le pro qu'il vous faut.", icon: "🔍" },
            { num: "2", title: "Consultez le guide", desc: "Tarifs indicatifs, critères de choix, pièges à éviter, FAQ par métier.", icon: "📖" },
            { num: "3", title: "Trouvez près de chez vous", desc: "Plus de 200 villes couvertes, avec des conseils pratiques locaux.", icon: "📍" },
          ].map((step) => (
            <div key={step.num} className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 text-white font-bold rounded-full flex items-center justify-center shadow-md">
                {step.num}
              </div>
              <div className="text-4xl mb-3 mt-2">{step.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Catégories */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">Sept grands univers</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Nos catégories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => {
              const catMetiers = metiers.filter((m) => m.categorie === cat.slug);
              const gradient = categoryGradients[cat.slug] || "from-gray-700 to-gray-900";
              return (
                <Link
                  key={cat.slug}
                  href={`/categorie/${cat.slug}`}
                  className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
                >
                  <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${gradient}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} text-white text-2xl flex items-center justify-center shadow-md`}>
                        {cat.icon}
                      </div>
                      <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-full">
                        {catMetiers.length} pros
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {cat.nom}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {catMetiers.slice(0, 4).map((m) => m.nom).join(", ")}
                      {catMetiers.length > 4 ? "…" : ""}
                    </p>
                    <div className="mt-4 text-sm font-medium text-red-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Voir le détail
                      <span aria-hidden>→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Derniers conseils — Blog */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">Conseils & guides</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Derniers articles du blog</h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-red-600 hover:text-red-700 inline-flex items-center gap-1 self-start md:self-auto"
          >
            Voir tout le blog
            <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((a) => {
            const metier = getMetierBySlug(a.metier);
            return (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all overflow-hidden flex flex-col"
              >
                <div className="h-32 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 flex items-center justify-center text-5xl">
                  {metier?.icon || "📄"}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    {metier && (
                      <span className="px-2 py-0.5 bg-red-50 text-red-700 rounded-full font-medium">
                        {metier.nom}
                      </span>
                    )}
                    <span>{a.readTime} min</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
                    {a.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-1 line-clamp-3">{a.description}</p>
                  <div className="mt-4 text-sm font-medium text-red-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Lire l&apos;article
                    <span aria-hidden>→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Tous les métiers */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">Annuaire complet</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Tous les professionnels</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              {metiers.length} métiers référencés, regroupés par grand univers. Cliquez sur celui que vous cherchez.
            </p>
          </div>
          {categories.map((cat) => {
            const catMetiers = metiers.filter((m) => m.categorie === cat.slug);
            const gradient = categoryGradients[cat.slug] || "from-gray-700 to-gray-900";
            return (
              <div key={cat.slug} className="mb-10 last:mb-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} text-white text-base flex items-center justify-center`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{cat.nom}</h3>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {catMetiers.map((m) => (
                    <Link
                      key={m.slug}
                      href={`/${m.slug}`}
                      className="group bg-white rounded-xl px-4 py-3 hover:bg-red-600 hover:text-white transition-colors border border-gray-100 flex items-center gap-3"
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform">{m.icon}</span>
                      <span className="text-sm font-medium leading-tight">{m.nom}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">Pourquoi SOS-Pro</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Un guide pratique, jamais une pub</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: "💶", title: "Tarifs réels 2026", desc: "Fourchettes de prix indicatives par ville, mises à jour cette année." },
            { icon: "⚖️", title: "Indépendance éditoriale", desc: "Pas de pro sponsorisé en tête de page — juste de l'information utile." },
            { icon: "🛡️", title: "Détection des pièges", desc: "Tous nos guides listent les arnaques courantes et les signaux d'alerte." },
            { icon: "📍", title: "200+ villes couvertes", desc: "De Paris à Saint-Brieuc, des conseils pratiques adaptés à votre région." },
          ].map((b) => (
            <div key={b.title} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-2xl mb-4">
                {b.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Villes principales */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">Couverture nationale</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Villes principales</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {topVilles.map((v) => (
              <Link
                key={v.slug}
                href={`/osteopathe/${v.slug}`}
                className="group bg-white rounded-xl p-4 text-center border border-gray-100 hover:border-red-300 hover:shadow-md transition-all"
              >
                <div className="text-base font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                  {v.nom}
                </div>
                <div className="text-xs text-gray-400 mt-1 font-mono">
                  {v.departement} · {(v.population / 1000).toFixed(0)}k hab.
                </div>
              </Link>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-gray-500">
            Et {villes.length - topVilles.length} autres villes en France couvertes
          </p>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-white py-16 px-4 border-t border-gray-100">
        <div className="max-w-3xl mx-auto prose prose-gray prose-headings:font-extrabold">
          <h2 className="text-2xl font-extrabold text-gray-900">
            SOS-Pro.fr, votre guide pratique des professionnels en France
          </h2>
          <p>
            Vous cherchez un <strong>ostéopathe</strong>, un{" "}
            <strong>plombier</strong>, un <strong>coiffeur</strong>, un{" "}
            <strong>garagiste</strong> ou un <strong>vétérinaire</strong> dans
            votre ville ? SOS-Pro.fr vous propose un guide complet par métier et
            par ville pour comparer les tarifs, bien choisir votre professionnel
            et trouver le bon matériel.
          </p>
          <p>
            Notre guide couvre de nombreux domaines : <strong>bien-être
            et santé</strong> (ostéopathes, sophrologues, naturopathes, hypnothérapeutes, kinésiologues, acupuncteurs, réflexologues),{" "}
            <strong>artisans du bâtiment</strong> (plombiers, électriciens,
            chauffagistes, vitriers, ramoneurs, plaquistes, carreleurs, menuisiers, peintres, couvreurs), <strong>services</strong>{" "}
            (photographes, coachs sportifs, jardiniers paysagistes, professeurs particuliers, déménageurs), <strong>beauté</strong>{" "}
            (coiffeurs, barbiers, esthéticiennes, prothésistes ongulaires, maquilleuses, tatoueurs),{" "}
            <strong>automobile</strong> (garagistes, carrossiers, dépanneurs auto, contrôle technique, lavage)
            et <strong>animaux</strong> (vétérinaires, toiletteurs, comportementalistes, pet-sitters).
          </p>
          <p>
            Chaque page vous donne les informations essentielles : tarifs
            indicatifs adaptés à votre ville, conseils pour bien choisir,
            questions fréquentes, numéros utiles et matériel recommandé. Notre
            blog complète l&apos;annuaire avec des guides détaillés sur les
            pièges à éviter, les bonnes questions à poser et la différence
            entre les pratiques proches (ostéopathe vs kinésithérapeute,
            naturopathe vs médecin, barbier vs coiffeur).
          </p>
        </div>
      </section>
    </>
  );
}
