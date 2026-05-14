// Numéros d'urgence et utiles par catégorie de métier
export const numerosUrgence: Record<
  string,
  { nom: string; numero: string; description: string }[]
> = {
  artisans: [
    { nom: "Urgences", numero: "15 / 18 / 112", description: "SAMU, Pompiers, Urgences européen" },
    { nom: "EDF Urgence", numero: "09 72 67 50 XX", description: "Remplacez XX par votre département (ex: 75 pour Paris)" },
    { nom: "GDF / GRDF Urgence gaz", numero: "0 800 47 33 33", description: "Fuite de gaz — appel gratuit 24h/24" },
    { nom: "Eau — Veolia", numero: "09 69 32 35 29", description: "Urgence eau / fuite sur réseau public" },
    { nom: "Assurance habitation", numero: "Voir votre contrat", description: "Déclarer un sinistre dans les 5 jours" },
  ],
  "bien-etre": [
    { nom: "SAMU", numero: "15", description: "Urgences médicales" },
    { nom: "SOS Médecins", numero: "3624", description: "Médecin de garde à domicile" },
    { nom: "Pharmacie de garde", numero: "3237", description: "Trouver la pharmacie de garde la plus proche" },
    { nom: "Fil Santé Jeunes", numero: "0 800 235 236", description: "Écoute, information et orientation pour les 12-25 ans" },
    { nom: "SOS Amitié", numero: "09 72 39 40 50", description: "Écoute 24h/24 pour les personnes en détresse" },
  ],
  services: [
    { nom: "Info Service Consommateur", numero: "0 809 540 550", description: "Litiges avec un prestataire" },
    { nom: "Service-Public.fr", numero: "3939", description: "Renseignements administratifs" },
    { nom: "Impôts (crédit d'impôt)", numero: "0 809 401 401", description: "Questions sur les avantages fiscaux services à la personne" },
  ],
  beaute: [
    { nom: "SAMU", numero: "15", description: "Urgences médicales (réaction allergique, malaise)" },
    { nom: "Centre antipoison", numero: "01 40 05 48 48", description: "En cas d'ingestion ou réaction à un produit" },
    { nom: "DGCCRF", numero: "0 809 540 550", description: "Litige avec un institut ou un salon" },
    { nom: "Info Service Consommateur", numero: "3939", description: "Renseignements droits du consommateur" },
  ],
  auto: [
    { nom: "Police / Gendarmerie", numero: "17", description: "Accident, vol de véhicule" },
    { nom: "Urgences européen", numero: "112", description: "Numéro européen toutes urgences" },
    { nom: "Bison Futé", numero: "0 826 022 022", description: "Info trafic routier" },
    { nom: "Info-Route Autoroute", numero: "107.7 FM", description: "Radio info trafic en temps réel" },
    { nom: "Préfecture (carte grise)", numero: "3400", description: "Démarches administratives véhicule" },
  ],
  animaux: [
    { nom: "Centre antipoison animal CAPAE", numero: "02 40 68 77 40", description: "Urgence intoxication animal (Nantes)" },
    { nom: "Centre antipoison CNITV Lyon", numero: "04 78 87 10 40", description: "Urgence intoxication animal (Lyon)" },
    { nom: "SOS Vétérinaire (selon ville)", numero: "Voir local", description: "Garde vétérinaire 24h/24" },
    { nom: "I-CAD identification", numero: "09 77 40 30 77", description: "Animal perdu/trouvé (puce)" },
    { nom: "SPA - Centre national", numero: "01 43 80 40 66", description: "Maltraitance ou signalement" },
  ],
};

// Liens pratiques par type de métier
export const liensUtiles: Record<
  string,
  { nom: string; url: string; description: string }[]
> = {
  osteopathe: [
    { nom: "Registre des Ostéopathes de France", url: "https://www.osteopathie.org", description: "Vérifier qu'un praticien est bien inscrit" },
    { nom: "Syndicat Français des Ostéopathes", url: "https://www.sfosteopathie.org", description: "Trouver un ostéopathe certifié" },
  ],
  sophrologue: [
    { nom: "Chambre Syndicale de Sophrologie", url: "https://www.chambre-syndicale-sophrologie.fr", description: "Annuaire des sophrologues certifiés" },
  ],
  naturopathe: [
    { nom: "OMNES", url: "https://www.omnes.fr", description: "Organisation de la Médecine Naturelle et de l'Éducation Sanitaire" },
    { nom: "FENA", url: "https://www.lafena.fr", description: "Fédération Française de Naturopathie" },
  ],
  hypnotherapeute: [
    { nom: "SFHYP", url: "https://www.sfhyp.fr", description: "Société Française d'Hypnose" },
    { nom: "Institut Français d'Hypnose", url: "https://www.hypnose.fr", description: "Formation et annuaire de praticiens" },
  ],
  plombier: [
    { nom: "Qualibat", url: "https://www.qualibat.com", description: "Vérifier les qualifications d'un artisan" },
    { nom: "Chambre des Métiers", url: "https://www.artisanat.fr", description: "Vérifier l'inscription au registre des métiers" },
  ],
  electricien: [
    { nom: "Qualifelec", url: "https://www.qualifelec.fr", description: "Qualification des entreprises d'électricité" },
    { nom: "Consuel", url: "https://www.consuel.com", description: "Attestation de conformité électrique" },
    { nom: "France Rénov'", url: "https://france-renov.gouv.fr", description: "Aides financières pour la rénovation énergétique" },
  ],
  serrurier: [
    { nom: "DGCCRF", url: "https://www.economie.gouv.fr/dgccrf", description: "Signaler un abus ou une arnaque" },
  ],
  photographe: [
    { nom: "UPP", url: "https://www.upp-auteurs.fr", description: "Union des Photographes Professionnels" },
  ],
  "coach-sportif": [
    { nom: "Ministère des Sports", url: "https://www.sports.gouv.fr", description: "Vérifier la carte professionnelle d'un éducateur sportif" },
  ],
  "professeur-particulier": [
    { nom: "CESU", url: "https://www.cesu.urssaf.fr", description: "Chèque Emploi Service Universel pour déclarer un prof" },
    { nom: "Service-Public.fr", url: "https://www.service-public.fr", description: "Informations sur le crédit d'impôt" },
  ],
  "jardinier-paysagiste": [
    { nom: "CESU", url: "https://www.cesu.urssaf.fr", description: "Déclarer un jardinier à domicile" },
    { nom: "UNEP", url: "https://www.lesentreprisesdupaysage.fr", description: "Union Nationale des Entreprises du Paysage" },
  ],
  demenageur: [
    { nom: "Chambre Syndicale du Déménagement", url: "https://www.csd.fr", description: "Vérifier l'agrément d'un déménageur" },
  ],
};
