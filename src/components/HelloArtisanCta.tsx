const HELLOARTISAN_AFFILIATE_URL =
  "https://affiliation-lp.helloartisan.com/redirect/2093/";

type HelloArtisanCtaProps = {
  compact?: boolean;
};

export default function HelloArtisanCta({ compact = false }: HelloArtisanCtaProps) {
  return (
    <aside
      className={`overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-950 to-slate-950 text-white shadow-xl ${
        compact ? "p-6 md:p-8" : "p-7 md:p-10"
      }`}
      aria-labelledby="helloartisan-title"
    >
      <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-300">
            Service partenaire · HelloArtisan
          </p>
          <h2
            id="helloartisan-title"
            className={`${compact ? "mt-2 text-2xl" : "mt-3 text-3xl md:text-4xl"} font-black`}
          >
            Besoin d’un artisan pour vos travaux&nbsp;?
          </h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            Décrivez votre projet sur le formulaire sécurisé de HelloArtisan pour
            être mis en relation avec des professionnels adaptés à votre besoin.
          </p>
        </div>
        <div className="shrink-0">
          <a
            href={HELLOARTISAN_AFFILIATE_URL}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-400 px-6 py-4 text-center font-black text-emerald-950 transition hover:bg-emerald-300 focus:outline-none focus:ring-4 focus:ring-emerald-300/40 md:w-auto"
          >
            Demander des devis gratuits →
          </a>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-slate-400">
            Vous quittez SOS‑Pro. Vos informations sont saisies et traitées par
            HelloArtisan. Ce lien peut rémunérer SOS‑Pro, sans surcoût pour vous.
          </p>
        </div>
      </div>
    </aside>
  );
}
