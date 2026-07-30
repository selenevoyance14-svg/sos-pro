"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { metiers } from "@/data/metiers";

export default function SearchBar() {
  const router = useRouter();
  const [metier, setMetier] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (metier) {
      router.push(`/${metier}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
        <select
          value={metier}
          onChange={(e) => setMetier(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-800 bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
        >
          <option value="">Quelle est votre urgence ?</option>
          {metiers.map((m) => (
            <option key={m.slug} value={m.slug}>
              {m.icon} {m.nom}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors shadow-md"
        >
          Voir les bons réflexes
        </button>
      </div>
    </form>
  );
}
