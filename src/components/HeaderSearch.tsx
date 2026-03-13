"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { metiers } from "@/data/metiers";
import { villes } from "@/data/villes";

export default function HeaderSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Fermer le dropdown au clic extérieur
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const q = query.toLowerCase().trim();

  // Recherche dans les métiers et villes
  const matchedMetiers = q.length >= 2
    ? metiers.filter((m) => m.nom.toLowerCase().includes(q)).slice(0, 4)
    : [];

  const matchedVilles = q.length >= 2
    ? villes.filter((v) => v.nom.toLowerCase().includes(q)).slice(0, 4)
    : [];

  const hasResults = matchedMetiers.length > 0 || matchedVilles.length > 0;

  function navigate(url: string) {
    setQuery("");
    setOpen(false);
    router.push(url);
  }

  return (
    <div ref={ref} className="relative">
      <div className="flex items-center bg-white/20 rounded-lg">
        <input
          type="text"
          placeholder="Rechercher un pro, une ville..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          className="bg-transparent text-white placeholder-white/60 px-3 py-2 text-sm w-40 sm:w-56 focus:outline-none focus:w-64 transition-all"
        />
        <svg
          className="w-4 h-4 text-white/60 mr-3 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Dropdown résultats */}
      {open && hasResults && (
        <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
          {matchedMetiers.length > 0 && (
            <div>
              <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase bg-gray-50">
                Professionnels
              </div>
              {matchedMetiers.map((m) => (
                <button
                  key={m.slug}
                  onClick={() => navigate(`/${m.slug}`)}
                  className="w-full text-left px-3 py-2 text-sm text-gray-800 hover:bg-red-50 hover:text-red-600 flex items-center gap-2"
                >
                  <span>{m.icon}</span>
                  <span>{m.nom}</span>
                </button>
              ))}
            </div>
          )}
          {matchedVilles.length > 0 && (
            <div>
              <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase bg-gray-50">
                Villes
              </div>
              {matchedVilles.map((v) => (
                <button
                  key={v.slug}
                  onClick={() => navigate(`/osteopathe/${v.slug}`)}
                  className="w-full text-left px-3 py-2 text-sm text-gray-800 hover:bg-red-50 hover:text-red-600 flex items-center gap-2"
                >
                  <span>📍</span>
                  <span>{v.nom} ({v.departement})</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
