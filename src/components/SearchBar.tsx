"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { metiers } from "@/data/metiers";
import { villes } from "@/data/villes";

export default function SearchBar() {
  const router = useRouter();
  const [metier, setMetier] = useState("");
  const [ville, setVille] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (metier && ville) {
      router.push(`/${metier}/${ville}`);
    } else if (metier) {
      router.push(`/${metier}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <select
          value={metier}
          onChange={(e) => setMetier(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-800 bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
        >
          <option value="">Quel professionnel ?</option>
          {metiers.map((m) => (
            <option key={m.slug} value={m.slug}>
              {m.icon} {m.nom}
            </option>
          ))}
        </select>
        <select
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-800 bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
        >
          <option value="">Dans quelle ville ?</option>
          {villes
            .sort((a, b) => a.nom.localeCompare(b.nom))
            .map((v) => (
              <option key={v.slug} value={v.slug}>
                {v.nom} ({v.departement})
              </option>
            ))}
        </select>
        <button
          type="submit"
          className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors shadow-md"
        >
          Rechercher
        </button>
      </div>
    </form>
  );
}
