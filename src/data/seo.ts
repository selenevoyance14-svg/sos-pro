import type { Metier } from "./metiers";
import type { Ville } from "./villes";

export function isIndexableLocationPage(metier: Metier, ville: Ville) {
  void metier;
  void ville;
  return false;
}

export const EDITORIAL_REVIEW_DATE = "30 juillet 2026";
