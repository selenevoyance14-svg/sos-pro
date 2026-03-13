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
};
