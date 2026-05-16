import { Metier } from "./metiers";
import { Ville } from "./villes";

// Tarifs par métier avec fourchettes détaillées
export const tarifsDetailles: Record<
  string,
  { prestation: string; prixMin: number; prixMax: number; unite: string }[]
> = {
  osteopathe: [
    { prestation: "Première consultation", prixMin: 50, prixMax: 80, unite: "séance" },
    { prestation: "Séance de suivi", prixMin: 45, prixMax: 70, unite: "séance" },
    { prestation: "Ostéopathie pédiatrique (nourrisson)", prixMin: 50, prixMax: 80, unite: "séance" },
    { prestation: "Ostéopathie du sport", prixMin: 55, prixMax: 85, unite: "séance" },
  ],
  sophrologue: [
    { prestation: "Séance individuelle", prixMin: 40, prixMax: 70, unite: "séance (1h)" },
    { prestation: "Séance collective", prixMin: 15, prixMax: 25, unite: "personne" },
    { prestation: "Forfait 5 séances", prixMin: 180, prixMax: 300, unite: "forfait" },
    { prestation: "Sophrologie prénatale", prixMin: 45, prixMax: 75, unite: "séance" },
  ],
  naturopathe: [
    { prestation: "Bilan naturopathique complet", prixMin: 60, prixMax: 100, unite: "1h30" },
    { prestation: "Consultation de suivi", prixMin: 40, prixMax: 70, unite: "1h" },
    { prestation: "Bilan alimentaire", prixMin: 50, prixMax: 80, unite: "séance" },
    { prestation: "Cure détox accompagnée", prixMin: 80, prixMax: 150, unite: "programme" },
  ],
  hypnotherapeute: [
    { prestation: "Séance d'hypnose classique", prixMin: 60, prixMax: 100, unite: "1h" },
    { prestation: "Arrêt du tabac (protocole)", prixMin: 150, prixMax: 300, unite: "1 à 3 séances" },
    { prestation: "Perte de poids", prixMin: 60, prixMax: 100, unite: "séance" },
    { prestation: "Gestion du stress / phobies", prixMin: 60, prixMax: 100, unite: "séance" },
  ],
  kinesiologue: [
    { prestation: "Séance de kinésiologie", prixMin: 50, prixMax: 80, unite: "1h" },
    { prestation: "Kinésiologie enfant", prixMin: 45, prixMax: 70, unite: "45 min" },
    { prestation: "Bilan émotionnel complet", prixMin: 60, prixMax: 90, unite: "1h30" },
  ],
  acupuncteur: [
    { prestation: "Première consultation", prixMin: 50, prixMax: 80, unite: "1h" },
    { prestation: "Séance de suivi", prixMin: 40, prixMax: 70, unite: "45 min" },
    { prestation: "Acupuncture + moxibustion", prixMin: 50, prixMax: 85, unite: "séance" },
    { prestation: "Auriculothérapie", prixMin: 30, prixMax: 60, unite: "séance" },
  ],
  reflexologue: [
    { prestation: "Réflexologie plantaire", prixMin: 40, prixMax: 70, unite: "1h" },
    { prestation: "Réflexologie faciale", prixMin: 35, prixMax: 60, unite: "45 min" },
    { prestation: "Forfait 3 séances", prixMin: 100, prixMax: 180, unite: "forfait" },
  ],
  plombier: [
    { prestation: "Dépannage fuite d'eau", prixMin: 80, prixMax: 200, unite: "intervention" },
    { prestation: "Débouchage canalisation", prixMin: 100, prixMax: 300, unite: "intervention" },
    { prestation: "Remplacement chauffe-eau", prixMin: 400, prixMax: 1200, unite: "fourniture + pose" },
    { prestation: "Installation sanitaire complète", prixMin: 800, prixMax: 3000, unite: "salle de bain" },
    { prestation: "Tarif horaire", prixMin: 40, prixMax: 70, unite: "heure HT" },
  ],
  electricien: [
    { prestation: "Dépannage électrique", prixMin: 80, prixMax: 200, unite: "intervention" },
    { prestation: "Mise aux normes tableau", prixMin: 700, prixMax: 2000, unite: "tableau" },
    { prestation: "Installation prise / interrupteur", prixMin: 50, prixMax: 120, unite: "unité" },
    { prestation: "Rénovation électrique complète", prixMin: 80, prixMax: 120, unite: "m²" },
    { prestation: "Tarif horaire", prixMin: 35, prixMax: 60, unite: "heure HT" },
  ],
  serrurier: [
    { prestation: "Ouverture de porte (jour)", prixMin: 80, prixMax: 150, unite: "intervention" },
    { prestation: "Ouverture de porte (nuit/WE)", prixMin: 150, prixMax: 300, unite: "intervention" },
    { prestation: "Changement serrure 3 points", prixMin: 150, prixMax: 350, unite: "fourniture + pose" },
    { prestation: "Blindage de porte", prixMin: 500, prixMax: 1500, unite: "porte" },
    { prestation: "Double de clé", prixMin: 5, prixMax: 50, unite: "clé" },
  ],
  peintre: [
    { prestation: "Peinture murs", prixMin: 20, prixMax: 40, unite: "m²" },
    { prestation: "Peinture plafond", prixMin: 25, prixMax: 45, unite: "m²" },
    { prestation: "Pose papier peint", prixMin: 15, prixMax: 35, unite: "m²" },
    { prestation: "Ravalement façade", prixMin: 30, prixMax: 80, unite: "m²" },
    { prestation: "Peinture pièce 15m² complète", prixMin: 400, prixMax: 800, unite: "pièce" },
  ],
  couvreur: [
    { prestation: "Réparation ponctuelle", prixMin: 200, prixMax: 800, unite: "intervention" },
    { prestation: "Remplacement toiture tuiles", prixMin: 100, prixMax: 180, unite: "m²" },
    { prestation: "Remplacement toiture ardoise", prixMin: 120, prixMax: 250, unite: "m²" },
    { prestation: "Nettoyage / démoussage toiture", prixMin: 15, prixMax: 30, unite: "m²" },
    { prestation: "Remplacement gouttière", prixMin: 20, prixMax: 50, unite: "mètre linéaire" },
  ],
  carreleur: [
    { prestation: "Pose carrelage sol", prixMin: 25, prixMax: 60, unite: "m² (main d'œuvre)" },
    { prestation: "Pose carrelage mural", prixMin: 30, prixMax: 65, unite: "m²" },
    { prestation: "Pose mosaïque", prixMin: 50, prixMax: 100, unite: "m²" },
    { prestation: "Carrelage terrasse", prixMin: 35, prixMax: 70, unite: "m²" },
  ],
  menuisier: [
    { prestation: "Porte intérieure sur mesure", prixMin: 200, prixMax: 800, unite: "porte posée" },
    { prestation: "Placard sur mesure", prixMin: 500, prixMax: 3000, unite: "placard" },
    { prestation: "Fenêtre bois", prixMin: 300, prixMax: 1000, unite: "fenêtre posée" },
    { prestation: "Escalier sur mesure", prixMin: 2000, prixMax: 8000, unite: "escalier" },
    { prestation: "Tarif horaire", prixMin: 35, prixMax: 60, unite: "heure HT" },
  ],
  photographe: [
    { prestation: "Séance portrait (1h)", prixMin: 100, prixMax: 300, unite: "séance" },
    { prestation: "Reportage mariage (journée)", prixMin: 1000, prixMax: 3000, unite: "journée" },
    { prestation: "Photos immobilières", prixMin: 150, prixMax: 400, unite: "bien" },
    { prestation: "Shooting produit e-commerce", prixMin: 15, prixMax: 50, unite: "photo" },
    { prestation: "Photo d'identité", prixMin: 5, prixMax: 15, unite: "planche" },
  ],
  "coach-sportif": [
    { prestation: "Séance individuelle à domicile", prixMin: 40, prixMax: 70, unite: "1h" },
    { prestation: "Séance en extérieur", prixMin: 30, prixMax: 55, unite: "1h" },
    { prestation: "Séance en petit groupe (2-4)", prixMin: 15, prixMax: 30, unite: "personne/h" },
    { prestation: "Forfait 10 séances", prixMin: 350, prixMax: 600, unite: "forfait" },
    { prestation: "Programme personnalisé en ligne", prixMin: 50, prixMax: 150, unite: "mois" },
  ],
  "professeur-particulier": [
    { prestation: "Cours primaire", prixMin: 15, prixMax: 25, unite: "heure" },
    { prestation: "Cours collège", prixMin: 20, prixMax: 35, unite: "heure" },
    { prestation: "Cours lycée", prixMin: 25, prixMax: 45, unite: "heure" },
    { prestation: "Prépa concours / supérieur", prixMin: 30, prixMax: 60, unite: "heure" },
    { prestation: "Cours de langue", prixMin: 20, prixMax: 40, unite: "heure" },
  ],
  "jardinier-paysagiste": [
    { prestation: "Tonte pelouse", prixMin: 25, prixMax: 45, unite: "heure" },
    { prestation: "Taille de haie", prixMin: 25, prixMax: 50, unite: "heure" },
    { prestation: "Élagage arbre", prixMin: 200, prixMax: 800, unite: "arbre" },
    { prestation: "Création jardin complet", prixMin: 30, prixMax: 80, unite: "m²" },
    { prestation: "Entretien mensuel", prixMin: 100, prixMax: 250, unite: "mois" },
  ],
  demenageur: [
    { prestation: "Déménagement studio", prixMin: 300, prixMax: 800, unite: "local" },
    { prestation: "Déménagement T2-T3", prixMin: 600, prixMax: 1500, unite: "local" },
    { prestation: "Déménagement maison", prixMin: 1500, prixMax: 5000, unite: "selon volume" },
    { prestation: "Monte-meuble", prixMin: 200, prixMax: 600, unite: "demi-journée" },
    { prestation: "Garde-meuble", prixMin: 50, prixMax: 150, unite: "m³/mois" },
  ],
  // === ARTISANS NOUVEAUX ===
  chauffagiste: [
    { prestation: "Entretien annuel chaudière", prixMin: 80, prixMax: 180, unite: "intervention" },
    { prestation: "Dépannage chaudière", prixMin: 100, prixMax: 300, unite: "intervention" },
    { prestation: "Installation chaudière gaz", prixMin: 2500, prixMax: 6000, unite: "fourniture + pose" },
    { prestation: "Installation pompe à chaleur", prixMin: 8000, prixMax: 18000, unite: "PAC air/eau" },
    { prestation: "Tarif horaire", prixMin: 50, prixMax: 80, unite: "heure HT" },
  ],
  ramoneur: [
    { prestation: "Ramonage cheminée", prixMin: 50, prixMax: 90, unite: "intervention" },
    { prestation: "Ramonage poêle à granulés", prixMin: 80, prixMax: 120, unite: "intervention" },
    { prestation: "Ramonage chaudière fioul", prixMin: 90, prixMax: 150, unite: "intervention" },
    { prestation: "Débistrage cheminée", prixMin: 200, prixMax: 500, unite: "intervention" },
    { prestation: "Contrat entretien annuel", prixMin: 80, prixMax: 150, unite: "an" },
  ],
  plaquiste: [
    { prestation: "Pose cloison placo", prixMin: 25, prixMax: 50, unite: "m² fourni-posé" },
    { prestation: "Pose plafond suspendu", prixMin: 30, prixMax: 60, unite: "m²" },
    { prestation: "Doublage isolation murs", prixMin: 40, prixMax: 80, unite: "m²" },
    { prestation: "Jointoiement et finitions", prixMin: 8, prixMax: 18, unite: "m²" },
    { prestation: "Tarif horaire", prixMin: 35, prixMax: 55, unite: "heure HT" },
  ],
  vitrier: [
    { prestation: "Remplacement vitre simple", prixMin: 100, prixMax: 250, unite: "vitre" },
    { prestation: "Remplacement double vitrage", prixMin: 150, prixMax: 400, unite: "vitre" },
    { prestation: "Pose fenêtre PVC", prixMin: 400, prixMax: 1200, unite: "fenêtre posée" },
    { prestation: "Intervention urgence (effraction)", prixMin: 150, prixMax: 400, unite: "intervention" },
    { prestation: "Miroir sur mesure", prixMin: 80, prixMax: 300, unite: "m²" },
  ],
  // === BEAUTÉ ===
  coiffeur: [
    { prestation: "Coupe femme", prixMin: 25, prixMax: 60, unite: "coupe" },
    { prestation: "Coupe homme", prixMin: 15, prixMax: 35, unite: "coupe" },
    { prestation: "Coloration", prixMin: 40, prixMax: 120, unite: "prestation" },
    { prestation: "Mèches/balayage", prixMin: 60, prixMax: 180, unite: "prestation" },
    { prestation: "Brushing", prixMin: 25, prixMax: 50, unite: "prestation" },
    { prestation: "Coiffure mariée", prixMin: 80, prixMax: 200, unite: "essai compris" },
  ],
  barbier: [
    { prestation: "Taille de barbe", prixMin: 15, prixMax: 35, unite: "prestation" },
    { prestation: "Rasage traditionnel", prixMin: 25, prixMax: 50, unite: "prestation" },
    { prestation: "Coupe homme", prixMin: 20, prixMax: 40, unite: "coupe" },
    { prestation: "Forfait coupe + barbe", prixMin: 40, prixMax: 70, unite: "prestation" },
    { prestation: "Soin du visage barbier", prixMin: 30, prixMax: 60, unite: "soin" },
  ],
  estheticienne: [
    { prestation: "Soin du visage classique", prixMin: 45, prixMax: 80, unite: "séance (1h)" },
    { prestation: "Soin anti-âge premium", prixMin: 80, prixMax: 150, unite: "séance (1h30)" },
    { prestation: "Épilation cire jambes complètes", prixMin: 25, prixMax: 50, unite: "prestation" },
    { prestation: "Lumière pulsée (par zone)", prixMin: 50, prixMax: 200, unite: "séance" },
    { prestation: "Modelage corps relaxant", prixMin: 60, prixMax: 120, unite: "1h" },
    { prestation: "Manucure simple", prixMin: 20, prixMax: 40, unite: "prestation" },
  ],
  "prothesiste-ongulaire": [
    { prestation: "Pose gel/résine", prixMin: 35, prixMax: 65, unite: "pose" },
    { prestation: "Remplissage", prixMin: 25, prixMax: 45, unite: "prestation" },
    { prestation: "Vernis semi-permanent", prixMin: 25, prixMax: 40, unite: "pose" },
    { prestation: "French manucure", prixMin: 30, prixMax: 55, unite: "prestation" },
    { prestation: "Nail art (par ongle)", prixMin: 3, prixMax: 15, unite: "ongle" },
    { prestation: "Dépose complète", prixMin: 15, prixMax: 30, unite: "prestation" },
  ],
  maquilleuse: [
    { prestation: "Maquillage soirée", prixMin: 40, prixMax: 80, unite: "prestation" },
    { prestation: "Maquillage mariée", prixMin: 80, prixMax: 180, unite: "essai compris" },
    { prestation: "Maquillage shooting photo", prixMin: 60, prixMax: 150, unite: "séance" },
    { prestation: "Maquillage témoin", prixMin: 40, prixMax: 80, unite: "personne" },
    { prestation: "Cours maquillage individuel", prixMin: 60, prixMax: 120, unite: "1h30" },
  ],
  tatoueur: [
    { prestation: "Petit tatouage (min boutique)", prixMin: 60, prixMax: 150, unite: "pièce" },
    { prestation: "Tatouage moyen (5-15cm)", prixMin: 200, prixMax: 500, unite: "pièce" },
    { prestation: "Tatouage grande pièce", prixMin: 500, prixMax: 2000, unite: "pièce" },
    { prestation: "Tarif horaire", prixMin: 80, prixMax: 200, unite: "heure" },
    { prestation: "Retouche tatouage", prixMin: 0, prixMax: 80, unite: "selon studio" },
  ],
  // === AUTO ===
  garagiste: [
    { prestation: "Vidange standard", prixMin: 70, prixMax: 150, unite: "intervention" },
    { prestation: "Vidange complète + filtres", prixMin: 120, prixMax: 250, unite: "intervention" },
    { prestation: "Changement plaquettes de frein", prixMin: 150, prixMax: 350, unite: "axe" },
    { prestation: "Distribution complète", prixMin: 400, prixMax: 1200, unite: "intervention" },
    { prestation: "Tarif horaire main d'œuvre", prixMin: 50, prixMax: 100, unite: "heure HT" },
    { prestation: "Diagnostic électronique", prixMin: 50, prixMax: 100, unite: "forfait" },
  ],
  carrossier: [
    { prestation: "Polissage rayure superficielle", prixMin: 50, prixMax: 200, unite: "rayure" },
    { prestation: "Réparation bosse + peinture", prixMin: 300, prixMax: 800, unite: "élément" },
    { prestation: "Débosselage sans peinture (DSP)", prixMin: 100, prixMax: 400, unite: "bosse" },
    { prestation: "Peinture aile complète", prixMin: 400, prixMax: 900, unite: "aile" },
    { prestation: "Remplacement pare-choc + peinture", prixMin: 500, prixMax: 1500, unite: "pare-choc" },
  ],
  "depanneur-auto": [
    { prestation: "Dépannage sur place (heures ouvrées)", prixMin: 80, prixMax: 200, unite: "intervention" },
    { prestation: "Dépannage nuit/week-end", prixMin: 150, prixMax: 350, unite: "intervention" },
    { prestation: "Remorquage local (< 30km)", prixMin: 100, prixMax: 250, unite: "remorquage" },
    { prestation: "Forfait autoroute (réglementé)", prixMin: 142, prixMax: 175, unite: "fixe 2025" },
    { prestation: "Démarrage batterie à plat", prixMin: 50, prixMax: 100, unite: "intervention" },
  ],
  "controle-technique": [
    { prestation: "Contrôle technique voiture", prixMin: 70, prixMax: 90, unite: "CT" },
    { prestation: "Contre-visite", prixMin: 15, prixMax: 30, unite: "contre-visite" },
    { prestation: "Contrôle technique utilitaire", prixMin: 80, prixMax: 110, unite: "CT" },
    { prestation: "Contrôle pollution", prixMin: 20, prixMax: 40, unite: "test" },
    { prestation: "Forfait CT + contre-visite", prixMin: 85, prixMax: 110, unite: "forfait" },
  ],
  "lavage-auto": [
    { prestation: "Lavage extérieur portique", prixMin: 6, prixMax: 15, unite: "lavage" },
    { prestation: "Lavage intérieur + extérieur main", prixMin: 30, prixMax: 80, unite: "complet" },
    { prestation: "Detailing pro complet", prixMin: 100, prixMax: 300, unite: "prestation" },
    { prestation: "Traitement céramique", prixMin: 200, prixMax: 800, unite: "voiture" },
    { prestation: "Nettoyage sièges shampoing", prixMin: 50, prixMax: 150, unite: "voiture" },
  ],
  // === ANIMAUX ===
  veterinaire: [
    { prestation: "Consultation standard", prixMin: 35, prixMax: 60, unite: "consultation" },
    { prestation: "Vaccination chien complète", prixMin: 70, prixMax: 120, unite: "rappel annuel" },
    { prestation: "Stérilisation chatte", prixMin: 150, prixMax: 280, unite: "opération" },
    { prestation: "Stérilisation chienne", prixMin: 250, prixMax: 450, unite: "opération" },
    { prestation: "Consultation urgence", prixMin: 60, prixMax: 150, unite: "consultation" },
    { prestation: "Détartrage chien", prixMin: 100, prixMax: 250, unite: "intervention" },
  ],
  toiletteur: [
    { prestation: "Toilettage petit chien", prixMin: 35, prixMax: 60, unite: "toilettage" },
    { prestation: "Toilettage grand chien poils longs", prixMin: 60, prixMax: 100, unite: "toilettage" },
    { prestation: "Bain simple", prixMin: 20, prixMax: 40, unite: "bain" },
    { prestation: "Toilettage chat", prixMin: 40, prixMax: 80, unite: "prestation" },
    { prestation: "Toilettage à domicile", prixMin: 50, prixMax: 130, unite: "déplacement inclus" },
  ],
  comportementaliste: [
    { prestation: "Bilan comportemental complet", prixMin: 80, prixMax: 150, unite: "1h30" },
    { prestation: "Séance de suivi", prixMin: 50, prixMax: 80, unite: "séance" },
    { prestation: "Consultation à domicile", prixMin: 100, prixMax: 180, unite: "déplacement inclus" },
    { prestation: "Forfait 5 séances", prixMin: 250, prixMax: 400, unite: "forfait" },
    { prestation: "Suivi téléphonique mensuel", prixMin: 30, prixMax: 60, unite: "mois" },
  ],
  "pet-sitter": [
    { prestation: "Visite à domicile (1 fois/jour)", prixMin: 12, prixMax: 20, unite: "visite" },
    { prestation: "Garde de jour", prixMin: 25, prixMax: 40, unite: "journée" },
    { prestation: "Garde de nuit chez le pet-sitter", prixMin: 18, prixMax: 35, unite: "nuit" },
    { prestation: "Promenade chien", prixMin: 12, prixMax: 20, unite: "30 min" },
    { prestation: "Garde longue durée (vacances)", prixMin: 15, prixMax: 30, unite: "jour" },
  ],
  // === URGENCES ===
  "plombier-urgence": [
    { prestation: "Déplacement seul (jour)", prixMin: 60, prixMax: 120, unite: "déplacement" },
    { prestation: "Fuite d'eau jour", prixMin: 150, prixMax: 300, unite: "intervention" },
    { prestation: "Fuite d'eau nuit/WE", prixMin: 250, prixMax: 500, unite: "intervention" },
    { prestation: "Débouchage canalisation urgence", prixMin: 180, prixMax: 400, unite: "intervention" },
    { prestation: "Tarif horaire urgence", prixMin: 80, prixMax: 150, unite: "heure HT" },
  ],
  "serrurier-urgence": [
    { prestation: "Ouverture porte simple (jour)", prixMin: 80, prixMax: 200, unite: "intervention" },
    { prestation: "Ouverture porte (nuit/WE)", prixMin: 150, prixMax: 400, unite: "intervention" },
    { prestation: "Ouverture serrure blindée", prixMin: 200, prixMax: 500, unite: "intervention" },
    { prestation: "Changement serrure après effraction", prixMin: 200, prixMax: 600, unite: "fourniture + pose" },
    { prestation: "Mise en sécurité provisoire", prixMin: 100, prixMax: 250, unite: "intervention" },
  ],
  "electricien-urgence": [
    { prestation: "Dépannage électrique (jour)", prixMin: 150, prixMax: 300, unite: "intervention" },
    { prestation: "Dépannage nuit/week-end", prixMin: 200, prixMax: 450, unite: "intervention" },
    { prestation: "Court-circuit / coupure générale", prixMin: 180, prixMax: 400, unite: "intervention" },
    { prestation: "Remplacement disjoncteur en urgence", prixMin: 120, prixMax: 300, unite: "fourniture + pose" },
    { prestation: "Tarif horaire urgence", prixMin: 60, prixMax: 120, unite: "heure HT" },
  ],
  "depanneur-auto-urgence": [
    { prestation: "Dépannage sur place (jour)", prixMin: 80, prixMax: 200, unite: "intervention" },
    { prestation: "Dépannage nuit/week-end", prixMin: 150, prixMax: 350, unite: "intervention" },
    { prestation: "Remorquage local (< 30km)", prixMin: 150, prixMax: 400, unite: "remorquage" },
    { prestation: "Forfait autoroute réglementé", prixMin: 142, prixMax: 175, unite: "fixe 2025" },
    { prestation: "Clés enfermées / dans le contact", prixMin: 80, prixMax: 200, unite: "intervention" },
  ],
  "vitrier-urgence": [
    { prestation: "Pose panneau temporaire urgence", prixMin: 100, prixMax: 250, unite: "intervention" },
    { prestation: "Remplacement vitre simple urgence", prixMin: 150, prixMax: 350, unite: "vitre" },
    { prestation: "Remplacement double vitrage urgence", prixMin: 200, prixMax: 500, unite: "vitre" },
    { prestation: "Intervention nuit/WE supplément", prixMin: 100, prixMax: 250, unite: "majoration" },
    { prestation: "Déplacement seul", prixMin: 60, prixMax: 150, unite: "déplacement" },
  ],
  "chauffagiste-urgence": [
    { prestation: "Dépannage chaudière (jour)", prixMin: 150, prixMax: 350, unite: "intervention" },
    { prestation: "Dépannage chaudière (nuit/WE)", prixMin: 250, prixMax: 500, unite: "intervention" },
    { prestation: "Remplacement pièce d'urgence", prixMin: 150, prixMax: 600, unite: "fourniture + pose" },
    { prestation: "Détartrage / remise en route", prixMin: 120, prixMax: 300, unite: "intervention" },
    { prestation: "Tarif horaire urgence", prixMin: 80, prixMax: 150, unite: "heure HT" },
  ],
  "veterinaire-urgence": [
    { prestation: "Consultation urgence (jour)", prixMin: 80, prixMax: 150, unite: "consultation" },
    { prestation: "Consultation urgence (nuit/WE)", prixMin: 100, prixMax: 200, unite: "consultation" },
    { prestation: "Hospitalisation 24h", prixMin: 100, prixMax: 300, unite: "nuit" },
    { prestation: "Chirurgie d'urgence", prixMin: 500, prixMax: 2000, unite: "intervention" },
    { prestation: "Soins post-opératoires", prixMin: 50, prixMax: 200, unite: "jour" },
  ],
};

// Conseils pour bien choisir par métier
export const conseilsChoix: Record<string, string[]> = {
  osteopathe: [
    "Vérifiez que le praticien est inscrit au Registre National des Ostéopathes (RNO) ou possède le titre DO (Diplôme d'Ostéopathe).",
    "Privilégiez un ostéopathe ayant suivi une formation de 5 ans minimum dans une école agréée.",
    "Demandez si le praticien est spécialisé dans votre problématique (sport, pédiatrie, femme enceinte).",
    "Renseignez-vous sur sa méthode : structurelle, crânienne, viscérale. Chaque approche a ses spécificités.",
    "Consultez les avis en ligne et demandez des recommandations à votre entourage ou votre médecin traitant.",
  ],
  sophrologue: [
    "Vérifiez que le sophrologue possède un certificat professionnel reconnu (RNCP de préférence).",
    "Demandez une première séance découverte, souvent proposée à tarif réduit.",
    "Assurez-vous que le praticien est membre d'un syndicat professionnel (Chambre Syndicale de Sophrologie, SFS).",
    "Discutez de votre objectif (stress, sommeil, confiance) pour vérifier que c'est dans son domaine de compétence.",
    "Le feeling est important : vous devez vous sentir à l'aise avec la voix et l'approche du sophrologue.",
  ],
  naturopathe: [
    "Vérifiez que le naturopathe est certifié par une école reconnue (FENA, OMNES).",
    "Demandez quelles techniques il utilise : nutrition, phytothérapie, aromathérapie, hydrologie.",
    "Un bon naturopathe ne vous demandera jamais d'arrêter un traitement médical en cours.",
    "Méfiez-vous des praticiens qui promettent des guérisons miraculeuses.",
    "Privilégiez les naturopathes affiliés à un syndicat professionnel comme l'OMNES ou le SPN.",
  ],
  hypnotherapeute: [
    "Vérifiez la formation de l'hypnothérapeute : les formations reconnues durent au minimum 200 heures.",
    "Privilégiez les praticiens formés en hypnose ericksonienne, la méthode la plus répandue et validée.",
    "Demandez le nombre de séances estimé pour votre problématique. Un bon praticien est transparent sur ce point.",
    "Assurez-vous qu'il est inscrit auprès d'un organisme professionnel (SFHYP, IFH, ARCHE).",
    "L'hypnose nécessite votre participation active. Un bon hypnothérapeute vous expliquera le processus dès la première séance.",
  ],
  kinesiologue: [
    "Vérifiez que le kinésiologue est certifié par la Fédération Française de Kinésiologie (FFK).",
    "Demandez quelle branche de kinésiologie il pratique : Touch for Health, Brain Gym, kinésiologie émotionnelle.",
    "Un bon kinésiologue ne fait pas de diagnostic médical et ne se substitue pas à un médecin.",
    "Prévoyez une première séance plus longue (1h30) pour le bilan initial.",
    "Portez des vêtements confortables car le test musculaire nécessite de bouger librement.",
  ],
  acupuncteur: [
    "Privilégiez un acupuncteur qui est également médecin — ses actes sont alors partiellement remboursés.",
    "Vérifiez qu'il utilise des aiguilles stériles à usage unique.",
    "Demandez sa formation : DIU d'acupuncture (diplôme inter-universitaire) ou école de médecine chinoise reconnue.",
    "Un bon acupuncteur fait un bilan énergétique complet avant de commencer le traitement.",
    "N'hésitez pas à signaler si une aiguille provoque une douleur persistante pendant la séance.",
  ],
  reflexologue: [
    "Vérifiez que le réflexologue est certifié RNCP (Répertoire National des Certifications Professionnelles).",
    "Demandez sa spécialité : réflexologie plantaire, palmaire, faciale ou auriculaire.",
    "Signalez tout problème de santé, en particulier les problèmes circulatoires ou les grossesses en cours.",
    "Une bonne séance commence par un entretien sur votre état de santé et vos attentes.",
    "Les effets se ressentent souvent après 2 à 3 séances — ne jugez pas sur une seule visite.",
  ],
  plombier: [
    "Vérifiez que le plombier est inscrit au Registre des Métiers et possède une assurance décennale.",
    "Demandez TOUJOURS un devis écrit et détaillé avant toute intervention, même en urgence.",
    "Méfiez-vous des plombiers trouvés sur des flyers dans votre boîte aux lettres — privilégiez les recommandations.",
    "Vérifiez les avis Google et les certifications (Qualibat, RGE pour les travaux d'énergie).",
    "Pour les interventions importantes, demandez au moins 3 devis pour comparer.",
  ],
  electricien: [
    "Exigez un électricien avec une assurance décennale et une attestation de conformité Consuel.",
    "Vérifiez les certifications : Qualifelec pour la qualité, RGE pour les aides énergétiques.",
    "Demandez un devis détaillé avec le coût des fournitures séparé de la main d'œuvre.",
    "Pour une rénovation complète, faites réaliser un diagnostic électrique préalable.",
    "Assurez-vous que l'électricien respecte la norme NF C 15-100 en vigueur.",
  ],
  serrurier: [
    "ATTENTION aux arnaques : ne choisissez jamais un serrurier sur un simple flyer ou une annonce non vérifiée.",
    "Demandez un devis FERME au téléphone avant l'intervention, incluant le déplacement.",
    "Vérifiez que le serrurier a pignon sur rue dans votre ville (adresse physique vérifiable).",
    "Refusez toute intervention si le prix annoncé sur place est très différent du devis téléphonique.",
    "Privilégiez les serruriers recommandés par votre assurance ou votre syndic de copropriété.",
  ],
  peintre: [
    "Demandez à voir des photos de chantiers précédents ou des références clients.",
    "Un bon peintre consacre du temps à la préparation des surfaces (ponçage, enduit, sous-couche).",
    "Vérifiez qu'il possède une assurance responsabilité civile professionnelle.",
    "Demandez le type de peinture utilisé (acrylique, glycéro) et sa qualité (marque professionnelle).",
    "Faites préciser dans le devis le nombre de couches prévues et la préparation incluse.",
  ],
  couvreur: [
    "Exigez une assurance décennale valide — les travaux de toiture sont soumis à cette garantie.",
    "Méfiez-vous du démarchage à domicile pour les travaux de toiture (arnaque fréquente).",
    "Demandez un contrôle de la charpente en plus de la couverture.",
    "Vérifiez les certifications Qualibat et RGE si vous souhaitez bénéficier d'aides pour l'isolation.",
    "Un bon couvreur vous propose un devis après être monté sur le toit pour constater l'état réel.",
  ],
  carreleur: [
    "Demandez à voir des réalisations précédentes, surtout pour des poses complexes (grands formats, mosaïque).",
    "Vérifiez qu'il prend en charge la préparation du support (ragréage, étanchéité).",
    "Un bon carreleur vous conseille sur le choix du carrelage adapté à l'usage (intérieur/extérieur, antidérapant).",
    "Faites préciser dans le devis si les plinthes, les joints et les finitions sont inclus.",
    "Vérifiez son assurance décennale, obligatoire pour les travaux de revêtement de sol.",
  ],
  menuisier: [
    "Demandez si le menuisier fabrique sur mesure ou pose des éléments standards — les prix varient beaucoup.",
    "Vérifiez ses références et demandez à voir des réalisations similaires à votre projet.",
    "Pour les fenêtres, demandez les performances thermiques (coefficient Uw) et la certification du produit.",
    "Un bon menuisier vous conseille sur les essences de bois adaptées à votre usage et votre budget.",
    "Vérifiez les garanties sur les matériaux et la pose (garantie décennale, garantie de parfait achèvement).",
  ],
  photographe: [
    "Consultez attentivement le portfolio en ligne pour vérifier que le style correspond à vos attentes.",
    "Demandez ce qui est inclus : nombre de photos, retouches, tirage, galerie en ligne, droits d'utilisation.",
    "Pour un mariage, rencontrez le photographe en amont — le feeling est essentiel pour des photos naturelles.",
    "Vérifiez les délais de livraison et les conditions en cas d'annulation.",
    "Demandez si un photographe remplaçant est prévu en cas d'empêchement (surtout pour les mariages).",
  ],
  "coach-sportif": [
    "Vérifiez que le coach possède un diplôme reconnu : BPJEPS, DEJEPS, licence STAPS, ou CQP.",
    "Demandez une séance d'essai avant de vous engager sur un forfait.",
    "Un bon coach réalise un bilan physique et définit des objectifs personnalisés avec vous.",
    "Vérifiez qu'il est déclaré en tant que professionnel du service à la personne (pour le crédit d'impôt).",
    "Assurez-vous qu'il possède une assurance responsabilité civile professionnelle.",
  ],
  "professeur-particulier": [
    "Vérifiez le niveau d'études et les compétences dans la matière enseignée.",
    "Demandez si le professeur est familier avec le programme scolaire actuel.",
    "Privilégiez un prof qui s'adapte au rythme de l'élève plutôt qu'un cours magistral.",
    "Vérifiez s'il est déclaré (CESU, auto-entrepreneur ou via un organisme) pour le crédit d'impôt.",
    "Demandez des références ou des témoignages d'anciens élèves.",
  ],
  "jardinier-paysagiste": [
    "Vérifiez que le jardinier est déclaré : auto-entrepreneur, CESU, ou entreprise (pour le crédit d'impôt de 50%).",
    "Demandez s'il est spécialisé dans l'entretien courant ou la création de jardins.",
    "Pour un aménagement paysager, demandez un plan ou une esquisse avant le début des travaux.",
    "Vérifiez qu'il possède les assurances nécessaires, surtout pour l'élagage et l'abattage d'arbres.",
    "Un bon paysagiste vous conseille sur les plantes adaptées au climat et à l'exposition de votre terrain.",
  ],
  demenageur: [
    "Vérifiez que le déménageur est inscrit au registre des transporteurs et possède une assurance.",
    "Demandez une visite technique à domicile pour un devis précis (méfiez-vous des devis par téléphone).",
    "Comparez au moins 3 devis en vérifiant ce qui est inclus : emballage, montage/démontage, assurance.",
    "Vérifiez les conditions de prise en charge en cas de casse ou de détérioration.",
    "Réservez le plus tôt possible, surtout pour les déménagements en été (haute saison).",
  ],
  // === ARTISANS NOUVEAUX ===
  chauffagiste: [
    "Vérifiez que le chauffagiste est certifié RGE pour bénéficier des aides MaPrimeRénov' et CEE.",
    "Pour une pompe à chaleur, exigez la qualification Qualipac (label spécifique PAC).",
    "Demandez un dimensionnement précis selon votre logement (surface, isolation, exposition).",
    "Comparez 3 devis minimum pour les gros travaux (chaudière, PAC).",
    "Vérifiez la garantie sur le matériel (5-10 ans) et la garantie décennale de l'installateur.",
  ],
  ramoneur: [
    "Vérifiez que le ramoneur est inscrit au Registre des Métiers et possède une qualification.",
    "Exigez un certificat de ramonage à la fin de l'intervention — il est demandé par l'assurance.",
    "Méfiez-vous des démarches à domicile à prix cassés : ce sont souvent des arnaques.",
    "Demandez un état des lieux du conduit avant ramonage (caméra pour les cas complexes).",
    "Privilégiez les ramoneurs locaux recommandés par votre mairie ou syndic.",
  ],
  plaquiste: [
    "Exigez une assurance décennale et responsabilité civile professionnelle.",
    "Demandez des références de chantiers similaires (avec photos).",
    "Vérifiez si le plaquiste prend en charge aussi l'isolation thermique/phonique.",
    "Faites préciser dans le devis : qualité du placo (BA13, hydrofuge, phonique), nombre de couches d'enduit.",
    "Un bon plaquiste prépare bien les angles et les jonctions — détail visible après peinture.",
  ],
  vitrier: [
    "Demandez TOUJOURS un devis ferme par téléphone avant intervention en urgence.",
    "Vérifiez les certifications (CEKAL pour les vitrages, NF Fenêtres pour les menuiseries).",
    "Privilégiez les vitriers avec adresse physique et avis Google vérifiables.",
    "Pour le double vitrage, exigez les performances thermiques (Ug ≤ 1,1 W/m²K idéalement).",
    "Méfiez-vous des arnaques : refusez toute intervention si le tarif sur place diffère du devis.",
  ],
  // === BEAUTÉ ===
  coiffeur: [
    "Consultez Instagram et Google pour voir le style du coiffeur et les retours clients.",
    "Demandez une consultation gratuite avant un grand changement (couleur, coupe radicale).",
    "Vérifiez la qualité des produits utilisés (marques pro : L'Oréal, Schwarzkopf, Kérastase).",
    "Pour une coloration, demandez un test de mèche en cas de cheveux fragiles ou colorés depuis longtemps.",
    "Privilégiez les salons qui respectent un protocole d'hygiène (peignes désinfectés, capes propres).",
  ],
  barbier: [
    "Consultez le portfolio Instagram pour vérifier le style et la précision des dégradés.",
    "Vérifiez l'hygiène : lames neuves à chaque client, peignes désinfectés.",
    "Un bon barbier prend le temps de discuter de la coupe avant de commencer.",
    "Pour un rasage traditionnel, préférez un barbier formé spécifiquement au coupe-chou.",
    "Prenez rendez-vous : les bons barbiers sont souvent complets plusieurs jours à l'avance.",
  ],
  estheticienne: [
    "Vérifiez le CAP Esthétique ou BP/BTS Esthétique-Cosmétique (diplômes minimum requis).",
    "Pour la lumière pulsée ou le laser, exigez une formation spécifique et un appareil aux normes CE.",
    "Demandez la marque des produits utilisés (Sothys, Yon-Ka, Décléor, Maria Galland en pro).",
    "Vérifiez la propreté de l'institut : matériel stérilisé, draps changés à chaque cliente.",
    "Pour une première fois, demandez un test cutané sur les soins ou cires nouvelles.",
  ],
  "prothesiste-ongulaire": [
    "Vérifiez le CAP Esthétique ou un certificat de prothésiste ongulaire reconnu.",
    "L'hygiène est cruciale : limes à usage unique ou stérilisées, lampe UV propre, gants jetables.",
    "Demandez à voir des photos de poses récentes (sur Instagram notamment).",
    "Méfiez-vous des prix trop bas : risque de produits bas de gamme ou de pose bâclée.",
    "Vérifiez que la prothésiste utilise des marques pro (OPI, CND, Gelish, Indigo Nails).",
  ],
  maquilleuse: [
    "Consultez le portfolio (Instagram, site web) pour vérifier le style.",
    "Pour un mariage, faites un essai complet 1-2 mois avant — non négociable.",
    "Vérifiez les produits utilisés (MAC, Charlotte Tilbury, NARS = pro reconnus).",
    "Demandez les conditions d'annulation et de retard du jour J.",
    "Privilégiez une maquilleuse qui maîtrise les techniques HD/airbrush pour le mariage et la photo.",
  ],
  tatoueur: [
    "Vérifiez la déclaration ARS du studio (obligatoire en France).",
    "Hygiène : aiguilles à usage unique, gants neufs, surface plastifiée à chaque client.",
    "Consultez le portfolio (Instagram) — chaque tatoueur a un style (réalisme, fine line, traditionnel...).",
    "Demandez un devis et un acompte raisonnable (20-30%) — pas plus.",
    "Un bon tatoueur refuse les zones à risque (cou, mains) pour les premiers tatouages.",
  ],
  // === AUTO ===
  garagiste: [
    "Vérifiez que le garage possède l'agrément constructeur ou est référencé sur des plateformes (iDGarages, Vroomly).",
    "Demandez un devis détaillé AVANT toute intervention.",
    "Préférez un garage avec valise diagnostic multimarques.",
    "Vérifiez les avis Google (au moins 4/5 avec 50+ avis).",
    "Les garages indépendants sont 20-40% moins chers que les concessions sans perte de garantie constructeur.",
  ],
  carrossier: [
    "Exigez un devis détaillé avec coût main d'œuvre / pièces / peinture séparés.",
    "Vérifiez si le carrossier est agréé par votre assurance (intervention sans avance de frais).",
    "Demandez à voir des photos avant/après de réparations similaires.",
    "Privilégiez un carrossier avec garantie 1 an minimum sur les retouches peinture.",
    "Vérifiez les certifications constructeur si vous avez une voiture récente.",
  ],
  "depanneur-auto": [
    "ATTENTION arnaques : appelez d'abord l'assistance de votre assurance avant un dépanneur trouvé en urgence.",
    "Demandez un tarif FERME par téléphone (déplacement + intervention).",
    "Sur autoroute, composez le 17 ou la borne orange — c'est obligatoire.",
    "Vérifiez que le dépanneur a pignon sur rue (adresse physique vérifiable).",
    "Refusez de signer un bon de prise en charge sans avoir vu le devis.",
  ],
  "controle-technique": [
    "Comparez les prix : les centres indépendants sont moins chers que les chaînes (Norisko, Dekra, Autosur).",
    "Préparez votre voiture : ampoules, freins, pneus, échappement, essuie-glaces.",
    "Évitez la fin du mois ou la veille de date butoir : centres surchargés.",
    "Présentez la carte grise et l'attestation d'assurance.",
    "En cas de contre-visite, repassez dans les 2 mois pour éviter un nouveau CT complet.",
  ],
  "lavage-auto": [
    "Préférez le lavage à la main pour les voitures de valeur ou peinture fragile.",
    "Les portiques peuvent micro-rayer : préférez les modèles à brosses textile (et non plastique dur).",
    "Évitez le lavage en plein soleil : les produits sèchent trop vite et laissent des traces.",
    "Pour un detailing pro, vérifiez les références (Instagram, avis Google).",
    "Un traitement céramique protège la peinture 1 à 3 ans selon la qualité.",
  ],
  // === ANIMAUX ===
  veterinaire: [
    "Vérifiez l'inscription à l'Ordre des Vétérinaires (obligatoire en France).",
    "Privilégiez une clinique avec un plateau technique (radio, échographie, laboratoire).",
    "Pour les urgences nocturnes, identifiez la clinique de garde la plus proche en avance.",
    "Demandez un devis pour les opérations programmées (stérilisation, etc.).",
    "Une mutuelle animale est rentable pour les jeunes animaux ou races prédisposées aux maladies.",
  ],
  toiletteur: [
    "Visitez le salon avant : propreté, calme, manipulation douce des animaux.",
    "Demandez le CTM (Certificat de Toiletteur Canin et Félin) ou équivalent.",
    "Pour un chien anxieux, préférez un toiletteur acceptant la présence du maître les premières fois.",
    "Vérifiez les avis : ton bienveillant avec les animaux, pas de cris ni d'attache forcée.",
    "Les toiletteurs à domicile (camion) limitent le stress du transport.",
  ],
  comportementaliste: [
    "Vérifiez la formation : ACO, EduCanin, Vox Animae sont des écoles reconnues.",
    "Privilégiez les méthodes positives (renforcement, friandises) — pas de coercition.",
    "Un bon comportementaliste fait d'abord un bilan complet à domicile.",
    "Demandez des références ou témoignages.",
    "Fuyez les pros qui utilisent collier électrique, étranglement ou coup pour 'éduquer'.",
  ],
  "pet-sitter": [
    "Privilégiez les plateformes avec assurance (Animaute, Yoopies, Holidog).",
    "Faites une visite d'essai avant l'absence longue.",
    "Vérifiez les avis détaillés (note + commentaires).",
    "Exigez des photos/vidéos quotidiennes pendant la garde.",
    "Établissez un contrat écrit : horaires visites, alimentation, contact véto en cas d'urgence.",
  ],
  // === URGENCES — CONSEILS ANTI-ARNAQUE ===
  "plombier-urgence": [
    "EXIGEZ un devis ferme par téléphone AVANT que le plombier se déplace.",
    "Vérifiez l'adresse physique du plombier sur Internet (Pages Jaunes, Google).",
    "Refusez toute intervention si le tarif annoncé sur place diffère du devis téléphonique.",
    "Coupez l'arrivée d'eau au compteur en attendant — limite les dégâts.",
    "En cas d'arnaque caractérisée, portez plainte au commissariat et signalez à la DGCCRF.",
  ],
  "serrurier-urgence": [
    "ATTENTION : la majorité des arnaques en France concernent les serruriers en urgence.",
    "N'appelez JAMAIS le premier numéro affiché en haut de Google (souvent intermédiaires).",
    "Préférez un serrurier recommandé par votre assurance habitation ou syndic.",
    "Demandez un devis ferme : ouverture + remplacement éventuel séparés.",
    "Refusez toute facture de plus de 300€ pour une simple ouverture de porte claquée.",
  ],
  "electricien-urgence": [
    "Avant d'appeler : vérifiez si la coupure est générale en interrogeant ENEDIS au 09 72 67 50 + département.",
    "Demandez un devis téléphonique ferme — refusez les 'on verra sur place'.",
    "En cas d'odeur de brûlé : coupez le disjoncteur général ET appelez les pompiers (18) avant l'électricien.",
    "Vérifiez la certification Qualifelec et l'assurance décennale.",
    "Méfiez-vous des tarifs anormalement bas qui cachent des suppléments énormes.",
  ],
  "depanneur-auto-urgence": [
    "APPELEZ D'ABORD l'assistance de votre assurance auto (numéro sur la carte verte).",
    "Sur autoroute : OBLIGATION d'appeler le 17 ou la borne orange (jamais un dépanneur privé).",
    "Refusez de signer un bon de prise en charge sans avoir vu le devis détaillé.",
    "Mettez gilet jaune + triangle avant de sortir de la voiture (sécurité ET légal).",
    "Photographiez le compteur, plaque et état du véhicule avant le remorquage.",
  ],
  "vitrier-urgence": [
    "Sécurisez d'abord la zone (carton + scotch large) en attendant le vitrier.",
    "Demandez un devis ferme : pose panneau provisoire + remplacement définitif séparés.",
    "Vérifiez l'adresse physique du vitrier (méfiance envers les pubs Google Ads sans local).",
    "Pour effraction : déposez plainte AVANT pour activer la garantie habitation.",
    "Photographiez les dégâts (intérieur + extérieur) pour le dossier assurance.",
  ],
  "chauffagiste-urgence": [
    "ODEUR DE GAZ = appelez le 0 800 47 33 33 (GRDF) AVANT le chauffagiste.",
    "Vérifiez vous-même la pression chaudière (1-1,5 bars) et les voyants avant d'appeler.",
    "Demandez un devis ferme avec le coût des pièces séparé de la main d'œuvre.",
    "Privilégiez un chauffagiste RGE Qualibat ou Qualipac certifié.",
    "Pour les contrats d'entretien annuels, la plupart incluent un dépannage prioritaire 24h/24.",
  ],
  "veterinaire-urgence": [
    "Composez d'abord le numéro de votre vétérinaire habituel : le répondeur indique la garde.",
    "Numéro intoxication animal (24h/24) : CAPAE Nantes 02 40 68 77 40 ou CNITV Lyon 04 78 87 10 40.",
    "Préparez un descriptif clair (âge, race, poids, symptômes, produits ingérés) pour gagner du temps.",
    "Apportez le carnet de santé et les traitements en cours.",
    "Une mutuelle animale rembourse souvent les urgences (vérifiez votre contrat).",
  ],
};

// Génère un coefficient de prix basé sur la taille de la ville
function getPriceCoefficient(ville: Ville): number {
  if (ville.slug === "paris") return 1.3;
  if (ville.population > 500000) return 1.15;
  if (ville.population > 200000) return 1.1;
  if (ville.population > 100000) return 1.05;
  if (ville.population > 50000) return 1.0;
  return 0.95;
}

export function getTarifLabel(ville: Ville): string {
  const coef = getPriceCoefficient(ville);
  if (coef >= 1.25) return "élevés (grande métropole)";
  if (coef >= 1.1) return "légèrement supérieurs à la moyenne";
  if (coef >= 1.0) return "dans la moyenne nationale";
  return "légèrement inférieurs à la moyenne nationale";
}

export function getEstimatedTarifs(
  metierSlug: string,
  ville: Ville
): { prestation: string; prixMin: number; prixMax: number; unite: string }[] {
  const tarifs = tarifsDetailles[metierSlug];
  if (!tarifs) return [];
  const coef = getPriceCoefficient(ville);
  return tarifs.map((t) => ({
    ...t,
    prixMin: Math.round(t.prixMin * coef),
    prixMax: Math.round(t.prixMax * coef),
  }));
}

// Génère du contenu unique pour la page métier/ville
export function generateIntroText(metier: Metier, ville: Ville): string {
  const texts: Record<string, (v: Ville) => string> = {
    "bien-etre": (v) =>
      `${v.nom} est une ville dynamique qui compte de nombreux praticiens de bien-être. Avec une population de ${v.population.toLocaleString("fr-FR")} habitants, la demande en soins de bien-être y est forte et l'offre variée. Que vous soyez à la recherche d'un soulagement pour des douleurs chroniques, d'un accompagnement pour mieux gérer votre stress, ou d'un suivi régulier pour votre équilibre général, vous trouverez à ${v.nom} des praticiens qualifiés pour répondre à vos besoins.`,
    artisans: (v) =>
      `À ${v.nom} (${v.codePostal}), le marché des artisans est actif avec de nombreux professionnels qualifiés. Que ce soit pour une urgence ou un projet de travaux planifié, il est important de bien choisir son artisan. La ville de ${v.nom} et ses ${v.population.toLocaleString("fr-FR")} habitants comptent de nombreux professionnels du bâtiment, certifiés et assurés, prêts à intervenir rapidement.`,
    services: (v) =>
      `${v.nom} (${v.departement}) offre un large choix de prestataires de services pour les particuliers et les professionnels. Avec ${v.population.toLocaleString("fr-FR")} habitants, la ville dispose d'une offre diversifiée. Retrouvez ci-dessous toutes les informations utiles pour bien choisir votre prestataire à ${v.nom}.`,
    beaute: (v) =>
      `${v.nom} (${v.departement}) compte de nombreux professionnels de la beauté et du bien-être : salons de coiffure, barbiers, instituts de beauté, prothésistes ongulaires, maquilleurs et tatoueurs. Avec ${v.population.toLocaleString("fr-FR")} habitants, l'offre est riche et variée pour tous les budgets. Retrouvez les tarifs moyens, conseils pour bien choisir et matériel recommandé pour prolonger les soins entre deux rendez-vous.`,
    auto: (v) =>
      `À ${v.nom}, le secteur automobile regroupe garagistes, carrossiers, dépanneurs, centres de contrôle technique et stations de lavage. Avec ${v.population.toLocaleString("fr-FR")} habitants et son réseau routier, la ville dispose d'une offre étoffée pour l'entretien et la réparation de votre véhicule. Comparez les tarifs et trouvez le professionnel adapté à votre besoin.`,
    animaux: (v) =>
      `${v.nom} (${v.codePostal}) propose de nombreux professionnels pour le bien-être de vos animaux de compagnie : vétérinaires, toiletteurs, comportementalistes et pet-sitters. Avec ${v.population.toLocaleString("fr-FR")} habitants, la demande est forte et l'offre variée. Découvrez les tarifs indicatifs, les bons réflexes pour choisir et les accessoires recommandés.`,
    urgences: (v) =>
      `Une urgence à ${v.nom} (${v.codePostal}) ? Découvrez les bons réflexes, les tarifs réels en heures ouvrées et en nuit/week-end, et surtout comment éviter les arnaques fréquentes lors des interventions en urgence. Avec ${v.population.toLocaleString("fr-FR")} habitants, ${v.nom} dispose de nombreux pros disponibles 24h/24, mais tous ne se valent pas. Voici notre guide pour intervenir en sécurité.`,
  };

  return texts[metier.categorie]?.(ville) ?? "";
}

export function generateGuideText(metier: Metier, ville: Ville): string {
  const nomLower = metier.nom.toLowerCase();
  const isGrandeVille = ville.population > 200000;
  const isParis = ville.slug === "paris";

  let text = `Pour trouver un bon ${nomLower} à ${ville.nom}, nous vous recommandons de suivre quelques étapes simples. `;

  if (isParis) {
    text += `Paris étant une très grande ville, l'offre est abondante mais la qualité varie beaucoup. Prenez le temps de comparer les profils et les avis. Privilégiez un praticien proche de votre domicile ou de votre lieu de travail pour faciliter le suivi. `;
  } else if (isGrandeVille) {
    text += `${ville.nom} étant une grande ville, vous aurez le choix entre plusieurs professionnels. N'hésitez pas à demander des recommandations à votre entourage ou à votre médecin traitant. `;
  } else {
    text += `À ${ville.nom}, le nombre de praticiens est plus limité que dans les grandes métropoles, mais cela peut être un avantage : les professionnels locaux sont souvent bien connus et recommandés par le bouche-à-oreille. `;
  }

  text += `Dans tous les cas, vérifiez les qualifications, les avis en ligne, et n'hésitez pas à contacter le professionnel avant de prendre rendez-vous pour poser vos questions.`;

  return text;
}

// Quand consulter - spécifique au métier
export const quandConsulter: Record<string, string[]> = {
  osteopathe: [
    "Douleurs de dos, lumbagos, sciatiques",
    "Torticolis et cervicalgies",
    "Maux de tête et migraines d'origine mécanique",
    "Troubles digestifs (ballonnements, reflux)",
    "Après un accouchement (mère et nourrisson)",
    "Douleurs liées au sport ou à une mauvaise posture",
    "Stress et tensions musculaires chroniques",
  ],
  sophrologue: [
    "Stress, anxiété, burn-out",
    "Troubles du sommeil, insomnies",
    "Préparation aux examens ou concours",
    "Accompagnement de la grossesse et préparation à l'accouchement",
    "Gestion de la douleur (chronique ou post-opératoire)",
    "Manque de confiance en soi",
    "Phobies et addictions (en complément d'un suivi médical)",
  ],
  naturopathe: [
    "Fatigue chronique, baisse d'énergie",
    "Problèmes digestifs récurrents",
    "Envie d'adopter une meilleure hygiène de vie",
    "Renforcement de l'immunité avant l'hiver",
    "Accompagnement d'un régime alimentaire",
    "Gestion du stress par des méthodes naturelles",
    "Problèmes de peau (eczéma, acné) d'origine interne",
  ],
  hypnotherapeute: [
    "Arrêt du tabac",
    "Perte de poids et troubles alimentaires",
    "Phobies (avion, claustrophobie, arachnophobie...)",
    "Stress post-traumatique",
    "Troubles du sommeil",
    "Douleurs chroniques",
    "Préparation mentale (sport, examens, accouchement)",
  ],
  kinesiologue: [
    "Blocages émotionnels ou stress persistant",
    "Difficultés d'apprentissage chez l'enfant",
    "Manque de confiance en soi",
    "Douleurs chroniques sans cause médicale identifiée",
    "Troubles du sommeil d'origine émotionnelle",
    "Accompagnement d'un changement de vie (deuil, séparation, reconversion)",
  ],
  acupuncteur: [
    "Douleurs chroniques (dos, articulations, migraines)",
    "Stress, anxiété, dépression légère",
    "Troubles du sommeil",
    "Problèmes digestifs",
    "Allergies saisonnières",
    "Accompagnement à la fertilité (PMA)",
    "Sevrage tabagique",
    "Nausées de grossesse",
  ],
  reflexologue: [
    "Stress et tensions nerveuses",
    "Troubles digestifs fonctionnels",
    "Jambes lourdes, mauvaise circulation",
    "Maux de tête fréquents",
    "Troubles du sommeil",
    "Douleurs menstruelles",
    "Convalescence après une maladie ou une opération",
  ],
  plombier: [
    "Fuite d'eau visible ou cachée (tache au plafond, compteur qui tourne)",
    "Évier, lavabo ou WC bouché",
    "Chauffe-eau en panne ou qui coule",
    "Installation d'une nouvelle salle de bain ou cuisine",
    "Mise en conformité de la plomberie (vente immobilière)",
    "Problème de pression d'eau",
    "Remplacement de robinetterie",
  ],
  electricien: [
    "Coupure de courant fréquente ou disjoncteur qui saute",
    "Installation électrique vétuste (plus de 15 ans sans contrôle)",
    "Ajout de prises, interrupteurs ou points lumineux",
    "Installation d'un tableau électrique aux normes",
    "Pose de volets roulants électriques",
    "Installation borne de recharge véhicule électrique",
    "Diagnostic électrique obligatoire (vente ou location)",
  ],
  serrurier: [
    "Porte claquée ou clé perdue",
    "Clé cassée dans la serrure",
    "Tentative de cambriolage (serrure forcée)",
    "Changement de serrure après un déménagement",
    "Blindage de porte pour renforcer la sécurité",
    "Installation d'une serrure connectée",
    "Porte de garage ou portail bloqué",
  ],
  peintre: [
    "Rafraîchissement des murs et plafonds",
    "Préparation d'un bien immobilier pour la vente",
    "Rénovation après dégât des eaux",
    "Changement de décoration intérieure",
    "Ravalement de façade (obligation légale tous les 10 ans dans certaines communes)",
    "Travaux de finition après une rénovation",
    "Application de peinture spéciale (anti-humidité, isolante)",
  ],
  couvreur: [
    "Tuiles cassées ou manquantes après une tempête",
    "Infiltration d'eau dans les combles",
    "Mousse et lichen sur la toiture",
    "Gouttière percée ou bouchée",
    "Toiture de plus de 25 ans sans entretien",
    "Projet d'isolation par l'extérieur (sarking)",
    "Installation de fenêtres de toit (Velux)",
  ],
  carreleur: [
    "Rénovation de salle de bain ou cuisine",
    "Pose de carrelage dans une construction neuve",
    "Remplacement de carreaux cassés ou fissurés",
    "Aménagement d'une terrasse extérieure",
    "Pose de carrelage imitation parquet",
    "Création d'une douche italienne (étanchéité + pose)",
  ],
  menuisier: [
    "Remplacement de fenêtres anciennes (isolation thermique et phonique)",
    "Création de placards et rangements sur mesure",
    "Pose d'un escalier intérieur",
    "Rénovation de portes intérieures",
    "Fabrication de meubles sur mesure",
    "Aménagement de combles (pose de Velux, habillage bois)",
    "Réparation de volets en bois",
  ],
  photographe: [
    "Mariage ou cérémonie",
    "Séance portrait (famille, grossesse, nouveau-né)",
    "Photos pour CV ou profil LinkedIn",
    "Reportage d'entreprise ou événement professionnel",
    "Photos immobilières pour une vente",
    "Shooting e-commerce (produits, catalogue)",
    "Photos d'identité officielles",
  ],
  "coach-sportif": [
    "Reprise du sport après une longue période d'inactivité",
    "Objectif perte de poids avec un programme adapté",
    "Préparation à une compétition (course, triathlon, sport de combat)",
    "Renforcement musculaire et tonification",
    "Rééducation sportive post-blessure (en complément du kiné)",
    "Besoin de motivation et de régularité",
    "Entraînement pendant la grossesse (programme adapté)",
  ],
  "professeur-particulier": [
    "Difficultés scolaires dans une ou plusieurs matières",
    "Préparation au brevet, baccalauréat ou concours",
    "Remise à niveau avant la rentrée",
    "Approfondissement pour les élèves en avance",
    "Apprentissage d'une langue étrangère",
    "Aide aux devoirs régulière",
    "Préparation aux concours post-bac (prépa, médecine, Sciences Po)",
  ],
  "jardinier-paysagiste": [
    "Entretien régulier du jardin (tonte, taille, désherbage)",
    "Création ou réaménagement d'un jardin",
    "Élagage ou abattage d'arbre",
    "Aménagement de terrasse ou allée",
    "Installation d'un système d'arrosage automatique",
    "Préparation du jardin avant l'hiver ou le printemps",
    "Traitement des maladies des plantes et arbres",
  ],
  demenageur: [
    "Déménagement local ou longue distance",
    "Déménagement d'objets lourds ou encombrants (piano, coffre-fort)",
    "Besoin de garde-meuble temporaire",
    "Déménagement d'entreprise ou de bureau",
    "Monte-meuble nécessaire (étage élevé, escalier étroit)",
    "Déménagement international",
    "Emballage et protection de biens fragiles",
  ],
  // === ARTISANS NOUVEAUX ===
  chauffagiste: [
    "Entretien annuel obligatoire de la chaudière",
    "Chaudière en panne ou qui consomme anormalement",
    "Projet de remplacement de chaudière fioul par PAC ou chaudière gaz",
    "Installation d'un plancher chauffant",
    "Pose de robinets thermostatiques pour économies d'énergie",
    "Diagnostic énergétique avant travaux d'isolation",
    "Mise aux normes installation gaz (vente immobilière)",
  ],
  ramoneur: [
    "Avant l'hiver (septembre-octobre) — ramonage obligatoire annuel",
    "Cheminée ou poêle qui tire mal, fumée dans la pièce",
    "Après l'achat d'un logement avec cheminée",
    "Bistre épais dans le conduit (risque de feu de cheminée)",
    "Remise en service après plusieurs années d'inutilisation",
    "Pour obtenir le certificat exigé par l'assurance",
  ],
  plaquiste: [
    "Création d'une cloison pour aménager une pièce",
    "Pose de plafond suspendu (correction acoustique, intégration spots)",
    "Doublage des murs avec isolation thermique",
    "Aménagement de combles",
    "Création d'un dressing ou placard intégré",
    "Réfection après dégât des eaux ou fissures",
  ],
  vitrier: [
    "Bris de vitre (intempéries, choc, effraction)",
    "Remplacement simple vitrage par double vitrage (isolation)",
    "Pose de fenêtres neuves dans le cadre d'une rénovation",
    "Création d'une véranda ou verrière intérieure",
    "Pose de miroirs sur mesure ou parois de douche",
    "Renforcement de sécurité (film anti-effraction, double vitrage feuilleté)",
  ],
  // === BEAUTÉ ===
  coiffeur: [
    "Coupe et entretien régulier (toutes les 6-8 semaines)",
    "Coloration ou changement de couleur",
    "Mèches, balayage, décoloration",
    "Coiffure pour mariage, soirée ou événement",
    "Soins capillaires intensifs (cheveux abîmés, chute)",
    "Coupe enfant et bébé",
    "Lissage brésilien ou défrisage",
  ],
  barbier: [
    "Taille et entretien régulier de la barbe",
    "Rasage traditionnel à l'ancienne",
    "Coupe homme avec dégradé précis",
    "Préparation pour un événement (mariage, photo)",
    "Soins du visage masculin (gommage, masque)",
    "Conseils pour entretien barbe à domicile",
  ],
  estheticienne: [
    "Soin du visage régulier (1x par mois)",
    "Préparation peau pour un événement (mariage, photo)",
    "Épilation jambes, maillot, aisselles",
    "Épilation longue durée (lumière pulsée, laser)",
    "Lutte contre l'acné, taches pigmentaires, rides",
    "Modelage et soins du corps (anti-cellulite, drainage)",
    "Maquillage permanent (sourcils, eye-liner)",
  ],
  "prothesiste-ongulaire": [
    "Pose pour un événement (mariage, soirée, vacances)",
    "Ongles fragiles, cassants, qui se dédoublent",
    "Vous vous rongez les ongles et voulez stopper",
    "Envie de couleurs et de nail art sophistiqué",
    "Entretien régulier (toutes les 3-4 semaines)",
    "Avant un voyage pour tenue longue durée",
  ],
  maquilleuse: [
    "Maquillage de mariée (avec essai préalable)",
    "Shooting photo professionnel ou photoshoot",
    "Soirée importante (gala, anniversaire, cérémonie)",
    "Tournage vidéo ou apparition publique",
    "Cours de maquillage personnalisé pour apprendre",
    "Maquillage spécial scène (théâtre, danse)",
  ],
  tatoueur: [
    "Envie d'un tatouage symbolique (deuil, naissance, étape de vie)",
    "Recouvrement d'un ancien tatouage (cover-up)",
    "Suite d'un projet existant (sleeve, dos, jambe)",
    "Tatouage flash repéré sur Instagram",
    "Projet personnalisé (avec consultation préalable)",
    "Retouche d'un tatouage qui a perdu en intensité",
  ],
  // === AUTO ===
  garagiste: [
    "Vidange et révision (tous les 15 000 km ou 1 an)",
    "Bruit anormal, vibration, voyant moteur allumé",
    "Plaquettes ou disques de frein usés",
    "Distribution à changer (60 000-120 000 km)",
    "Préparation avant contrôle technique",
    "Climatisation qui refroidit mal",
    "Démarrage difficile, batterie faiblissante",
  ],
  carrossier: [
    "Bosses et rayures suite à un accrochage",
    "Choc important (pare-choc, capot, aile abîmés)",
    "Vol ou tentative d'effraction",
    "Vandalisme (rayures volontaires, peinture)",
    "Préparation esthétique avant vente",
    "Carrosserie corrodée par la rouille",
    "Retouche peinture après pose d'attelage",
  ],
  "depanneur-auto": [
    "Batterie à plat (besoin de démarrage assistance)",
    "Crevaison sans roue de secours",
    "Panne mécanique en pleine route",
    "Voiture qui ne démarre plus à domicile",
    "Clés enfermées dans la voiture",
    "Erreur de carburant (diesel/essence)",
    "Accident léger sans blessé (remorquage)",
  ],
  "controle-technique": [
    "Premier CT (dans les 6 mois avant les 4 ans du véhicule)",
    "CT obligatoire tous les 2 ans",
    "Avant la vente du véhicule (CT < 6 mois)",
    "Contre-visite après un échec",
    "CT pollution complémentaire (véhicule diesel > 4 ans)",
    "CT véhicule importé (avant immatriculation)",
  ],
  "lavage-auto": [
    "Préparation pour vente du véhicule",
    "Après l'hiver (sel, boue, traces)",
    "Voiture neuve à protéger (céramique, cire)",
    "Nettoyage approfondi sièges et moquettes",
    "Élimination des odeurs (tabac, animaux)",
    "Lustrage avant photos professionnelles",
    "Entretien régulier (1 fois/mois minimum)",
  ],
  // === ANIMAUX ===
  veterinaire: [
    "Vaccinations annuelles (chien, chat, lapin)",
    "Stérilisation/castration",
    "Animal malade : vomissements, diarrhée, perte d'appétit",
    "Blessure, plaie, boiterie",
    "Visite préventive (animal senior, dépistage)",
    "Identification par puce électronique (obligatoire)",
    "Urgence vitale : accident, intoxication",
  ],
  toiletteur: [
    "Chien à poils longs (caniche, bichon, yorkshire) : toutes les 6-8 semaines",
    "Mue importante au printemps et à l'automne",
    "Nœuds ou poils emmêlés qui ne se démêlent plus",
    "Chien qui sent fort, peau irritée",
    "Couper les griffes trop longues",
    "Chat à poils longs avec nœuds",
    "Préparation pour exposition ou concours",
  ],
  comportementaliste: [
    "Aboiements excessifs (gêne voisinage)",
    "Agressivité envers humains ou autres animaux",
    "Anxiété de séparation (destructions, malpropreté en absence)",
    "Malpropreté soudaine (chien ou chat)",
    "Adoption : intégration d'un nouvel animal",
    "Animal traumatisé (refuge, maltraitance)",
    "Préparation arrivée d'un bébé",
  ],
  "pet-sitter": [
    "Vacances ou week-end sans pouvoir emmener l'animal",
    "Animal craintif ne supportant pas le transport ou la pension",
    "Plusieurs animaux à garder simultanément",
    "Visites pour nourrir et changer la litière (chat surtout)",
    "Promenades quotidiennes pour chien (propriétaire âgé ou occupé)",
    "Hospitalisation du propriétaire",
    "Garde longue durée (déplacement professionnel)",
  ],
  // === URGENCES ===
  "plombier-urgence": [
    "Fuite d'eau importante (visible au compteur ou plafond qui s'effondre)",
    "Dégât des eaux chez vous ou chez le voisin",
    "Canalisation totalement bouchée (toilettes débordent)",
    "Chauffe-eau qui fuit ou explose",
    "Rupture de tuyauterie en plein hiver (gel)",
    "Coupure d'eau soudaine sans raison apparente",
    "Refoulement d'eaux usées dans la baignoire/douche",
  ],
  "serrurier-urgence": [
    "Porte claquée avec clés à l'intérieur",
    "Clé cassée dans la serrure",
    "Clés perdues ou volées (changement urgent)",
    "Cambriolage ou tentative d'effraction",
    "Serrure bloquée (impossible d'ouvrir ou de fermer)",
    "Mise en sécurité après mise à la porte d'un colocataire",
    "Porte forcée par les pompiers ou la police",
  ],
  "electricien-urgence": [
    "Coupure de courant générale dans le logement",
    "Disjoncteur qui saute en permanence",
    "Odeur de brûlé ou fumée sortant d'une prise/tableau",
    "Prise ou interrupteur qui chauffe anormalement",
    "Court-circuit suite à dégât des eaux",
    "Tableau électrique qui claque ou disjoncte sans raison",
    "Panne de courant après orage avec foudre",
  ],
  "depanneur-auto-urgence": [
    "Voiture en panne sur la route ou autoroute",
    "Batterie à plat sans câbles ni booster",
    "Crevaison sans roue de secours",
    "Accident léger sans blessé (remorquage)",
    "Clés enfermées ou cassées dans la voiture",
    "Erreur de carburant (essence dans diesel ou inverse)",
    "Voiture qui refuse de démarrer le matin",
  ],
  "vitrier-urgence": [
    "Bris de vitre suite à effraction (cambriolage)",
    "Vitre cassée par tempête, grêle ou vent fort",
    "Vitre éclatée par choc (ballon, vandalisme)",
    "Vitrage feuilleté de sécurité endommagé",
    "Bris de glace véranda ou puit de jour",
    "Miroir cassé encastré (douche, dressing)",
    "Vitrine commerce vandalisée la nuit",
  ],
  "chauffagiste-urgence": [
    "Chaudière en panne en plein hiver",
    "Plus d'eau chaude soudainement",
    "Odeur de gaz (URGENCE ABSOLUE — appelez GRDF 0 800 47 33 33)",
    "Radiateurs froids malgré chaudière allumée",
    "Fuite d'eau au niveau de la chaudière",
    "Voyant de panne / code erreur sur la chaudière",
    "Chaudière qui claque, siffle ou fait du bruit anormal",
  ],
  "veterinaire-urgence": [
    "Ingestion d'objet ou de produit toxique (chocolat, raisin, médicament)",
    "Vomissements ou diarrhée répétés et incontrôlables",
    "Animal renversé par une voiture",
    "Difficulté respiratoire (halètement extrême, langue bleue)",
    "Convulsions ou crise d'épilepsie",
    "Plaie qui saigne abondamment",
    "Abdomen gonflé et douloureux (suspicion de torsion)",
    "Accouchement difficile (mise bas qui dure trop longtemps)",
  ],
};
