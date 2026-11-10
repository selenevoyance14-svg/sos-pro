import type { Article } from "./articles";

type ShopGuide = [
  slug: string,
  shop: string,
  location: string,
  href: string,
  metier: string,
  need: string,
  checklist: string,
  question: string,
  related: string,
];

const shops: ShopGuide[] = [
  [
    "castorama-paris-nation-serrure", "Castorama Nation", "Paris 20e, cours de Vincennes", "https://www.castorama.fr/store/1487", "serrurier-urgence",
    "préparer l’achat d’un cylindre de serrure",
    "Si la porte s’ouvre encore normalement, notez le profil du cylindre et ses deux cotes depuis la vis de fixation. Prenez une photo de la garniture côté intérieur et côté extérieur. Évitez de photographier les dents de la clé ou son code.",
    "Demandez si la référence accepte vos dimensions et si elle dépasse du côté extérieur après pose. Faites préciser comment commander des doubles. Si la porte est fermée et bloquée, demandez d’abord l’avis d’un serrurier.",
    "choisir-cylindre-serrure-mesures",
  ],
  [
    "leroy-merlin-lyon-grand-parilly-joint-porte", "Leroy Merlin Lyon Grand Parilly", "Vénissieux, rue Simone Veil", "https://www.leroymerlin.fr/magasins/lyon-grand-parilly.html", "serrurier-urgence",
    "choisir un joint pour une porte qui laisse passer l’air",
    "Dessinez l’emplacement du jour et notez les écarts entre le haut et le bas. Si vous avez l’ancien joint, relevez la forme du profil et la largeur de sa base. Précisez si le support est peint ou si le joint s’insère dans une rainure.",
    "Faites confirmer la plage de compression et la compatibilité du mode de fixation. Une bande trop épaisse peut gêner la fermeture. Laissez libres les ouvertures de ventilation prévues.",
    "choisir-joint-porte-courant-air",
  ],
  [
    "leroy-merlin-marseille-valentine-detecteur-eau", "Leroy Merlin La Valentine", "quartier de La Valentine à Marseille", "https://www.leroymerlin.fr/magasins/valentine-marseille.html", "plombier-urgence",
    "comparer des détecteurs de fuite d’eau",
    "Mesurez la hauteur libre sous votre lave-linge ou votre meuble. Repérez un point où une fuite atteindrait le capteur et où la pile resterait accessible. Si vous voulez des alertes sur téléphone, testez la couverture réseau à cet endroit.",
    "Faites confirmer si le capteur sonne localement quand le Wi-Fi est coupé. Vérifiez l’existence d’une alerte de pile faible et le coût éventuel d’une passerelle séparée.",
    "choisir-detecteur-fuite-eau",
  ],
  [
    "leroy-merlin-toulouse-balma-bac-evier", "Leroy Merlin Balma", "Balma, avenue Jean-René Lagasse", "https://www.leroymerlin.fr/magasins/balma-toulouse.html", "plombier-urgence",
    "acheter un bac de protection sous évier",
    "Relevez la largeur entre charnières, la profondeur disponible et la position du siphon. Si un tuyau traverse le fond, apportez un croquis coté. Décidez si le bac doit pouvoir être retiré lorsque le meuble est plein.",
    "Comparez la taille utile du plateau à son encombrement extérieur et vérifiez la hauteur des rebords. En cas d’écoulement actif, faites rechercher la cause avant de vous contenter d’une protection du meuble.",
    "choisir-bac-sous-evier",
  ],
  [
    "castorama-merignac-hygrometre", "Castorama Mérignac", "Mérignac, avenue des Martyrs de la Libération", "https://www.castorama.fr/store/2537", "plombier-urgence",
    "préparer des relevés d’humidité dans un logement",
    "Décidez si vous voulez un relevé ponctuel, un minimum et un maximum, ou un historique consultable. Notez l’emplacement envisagé et la distance à laquelle vous devez lire l’écran. Si le but est de comparer deux pièces, prévoyez un protocole identique.",
    "Demandez où trouver la précision annoncée et comment remettre la mémoire à zéro. Une forte humidité près d’une fenêtre ne permet pas de conclure à elle seule à une fuite.",
    "choisir-hygrometre-logement",
  ],
  [
    "castorama-nantes-orvault-lanterne", "Castorama Nantes Orvault", "Orvault, rue Hélène-Boucher", "https://www.castorama.fr/store/1411", "electricien-urgence",
    "choisir une lanterne pour les coupures",
    "Listez les tâches à éclairer : traverser le logement, lire un document ou éclairer une table. Notez quelles piles vous stockez déjà et si la poignée doit permettre une suspension.",
    "Comparez l’autonomie au mode que vous utiliserez, la stabilité du socle et le réglage faible. Le nombre de lumens maximal renseigne peu sur le confort ou la durée d’éclairage en usage courant.",
    "choisir-lanterne-led-panne",
  ],
  [
    "castorama-strasbourg-mundolsheim-film-vitre", "Castorama Strasbourg", "Mundolsheim, route nationale 63", "https://www.castorama.fr/store/1418", "vitrier-urgence",
    "préparer l’achat d’un film occultant pour une vitre",
    "Mesurez la surface vitrée utile, hors cadre. Retrouvez si possible la composition du vitrage et décidez si vous voulez masquer seulement le bas de la fenêtre ou toute la surface.",
    "Demandez si le film est compatible avec ce type de vitre et s’il se retire facilement. Pour un effet miroir, vérifiez la différence de rendu lorsque l’intérieur est éclairé le soir.",
    "choisir-film-occultant-vitre",
  ],
  [
    "castorama-englos-lampe-placard", "Castorama Englos", "secteur d’Englos, centre commercial indiqué à Haubourdin par l’enseigne", "https://www.castorama.fr/store/1477", "electricien-urgence",
    "choisir une lampe de placard autonome",
    "Mesurez la place disponible et repérez le sens d’ouverture de la porte. Si vous voulez lire une étiquette au fond du placard, vérifiez que les étagères et charnières ne coupent pas le faisceau.",
    "Vérifiez l’accès aux piles une fois le support fixé et le fonctionnement du détecteur si le modèle en a un. Pour un placard rarement utilisé, l’accès rapide à un interrupteur peut suffire.",
    "choisir-lampe-a-piles-placard",
  ],
  [
    "norauto-rennes-chantepie-pneus", "Norauto Rennes Chantepie", "parc d’activités Rocade Sud à Chantepie", "https://centres.norauto.fr/ille-et-vilaine/chantepie/parc-d-activites-rocade-sud", "depanneur-auto-urgence",
    "préparer un contrôle de pneu qui perd de la pression",
    "Notez quel pneu est concerné, les valeurs relevées et le délai sur lequel la pression baisse. Gardez l’immatriculation et les dimensions inscrites sur le flanc pour l’appel au centre.",
    "Demandez comment l’atelier vérifie la valve, la roue et le pneu, puis comment il décide si une réparation est possible. En cas de perte rapide ou de dommage visible, demandez à l’assistance comment déplacer le véhicule.",
    "choisir-jauge-pression-pneus",
  ],
  [
    "feu-vert-montpellier-lattes-batterie", "Feu Vert Montpellier Lattes", "Lattes, au sud de Montpellier", "https://www.feuvert.fr/centres-auto/lattes/feu-vert-montpellier-lattes/338.html", "depanneur-auto-urgence",
    "préparer un diagnostic de batterie",
    "Notez si le démarrage difficile arrive après plusieurs jours à l’arrêt ou même après un trajet. Relevez le modèle du véhicule et précisez s’il possède un système Stop & Start.",
    "Demandez ce que couvre le contrôle et si le circuit de charge peut aussi être examiné. Si un remplacement est proposé, faites préciser la référence compatible et les opérations comprises.",
    "choisir-chargeur-entretien-batterie",
  ],
];

const shopArticles: Article[] = shops.map(
  ([slug, shop, location, href, metier, need, checklist, question, related]) => ({
    slug,
    title: shop + " : " + need,
    description: "Préparez votre passage chez " + shop + " pour " + need + ". Mesures utiles et fiche officielle.",
    metier,
    date: "2026-11-10",
    collection: "commerces",
    readTime: 3,
    intro: shop + " se situe dans le secteur suivant : " + location + ". Voici comment " + need + " et quelles informations apporter.",
    sections: [
      { type: "h2", text: "Préparer votre demande" },
      { type: "p", text: checklist },
      { type: "h2", text: "La question à poser sur place" },
      { type: "p", text: question },
      { type: "h2", text: "Avant de vous déplacer" },
      { type: "p", text: "Consultez la fiche officielle ci-dessous pour les horaires et le contact. Faites confirmer par le magasin le stock de la référence ou le créneau atelier avant de partir." },
      { type: "cta", text: "Lire le guide équipement associé", href: "/blog/" + related + "/" },
    ],
    sources: [{ label: shop + " — fiche officielle", href }],
  }),
);

type TradeGuide = [
  slug: string,
  title: string,
  metier: string,
  intro: string,
  preparation: string,
  quote: string,
  followup: string,
];

const trades: TradeGuide[] = [
  [
    "plombier-devis-recherche-fuite-non-destructive", "Recherche de fuite : préparer le devis avec un plombier", "plombier-urgence",
    "Une trace d’humidité indique où l’eau est visible, parfois loin de son point de départ. Un devis de recherche de fuite doit permettre de distinguer la localisation, l’accès et la réparation.",
    "Photographiez l’évolution depuis un endroit sec et notez les pièces voisines. En collectif, transmettez la liste des logements touchés au syndic avant la visite. Demandez à l’assureur s’il attend un rapport ou s’il souhaite organiser lui-même la recherche.",
    "Faites préciser les zones examinées, la remise d’un rapport et le coût d’un accès supplémentaire. Demandez ce qui se passe si la première visite ne localise pas l’origine.",
    "Conservez le rapport et les photos datées. Demandez qui chiffre la réparation une fois la cause trouvée, et à qui revient la remise en état de la surface ouverte.",
  ],
  [
    "serrurier-devis-porte-ferme-mal", "Porte qui ferme mal : préparer la visite d’un serrurier", "serrurier-urgence",
    "Une serrure qui fonctionne porte ouverte mais résiste porte fermée donne un indice utile au serrurier. Un réglage de l’ouvrant et un changement du mécanisme n’impliquent pas les mêmes pièces.",
    "Notez si la poignée revient normalement et où la porte frotte. Relevez si le défaut change avec la température. Arrêtez les essais si la clé force ou si vous risquez de rester enfermé.",
    "Demandez un devis qui distingue réglage, remplacement de cylindre et remplacement du mécanisme. Pour une pièce changée, faites indiquer la référence, le nombre de clés remises et le montant TTC.",
    "Convenez des vérifications avant le départ : fermeture intérieure et extérieure, action de la poignée et passage du pêne. Conservez la facture et les informations utiles pour refaire les clés.",
  ],
  [
    "electricien-devis-coupure-circuit-recurrente", "Coupures à répétition : quelles informations donner à l’électricien ?", "electricien-urgence",
    "Un défaut qui disparaît au moment de la visite est plus facile à diagnostiquer si vous pouvez décrire les circonstances. Tenez un journal des coupures sans ouvrir le tableau ni reproduire un incident.",
    "Notez les pièces affectées, l’heure et les appareils utilisés juste avant. Indiquez si les voisins ont aussi été touchés et si des travaux ont eu lieu récemment dans le logement.",
    "Demandez ce que comprend la première visite : déplacement, diagnostic, compte rendu et éventuelles pièces. Si le diagnostic impose une seconde intervention, faites préciser le mode de chiffrage.",
    "Gardez les observations et les consignes données après le passage. En cas de signe de danger électrique, éloignez-vous et suivez les instructions du service compétent.",
  ],
  [
    "vitrier-devis-double-vitrage-embue", "Double vitrage embué : préparer une demande de devis au vitrier", "vitrier-urgence",
    "Une buée qui reste entre deux vitrages mérite un diagnostic différent de gouttelettes que l’on peut essuyer côté pièce. Le vitrier doit aussi vérifier l’état du cadre avant de proposer une solution.",
    "Photographiez l’aspect à différentes heures et repérez les marquages visibles sans démonter le vitrage. Indiquez l’étage, l’accessibilité et le type d’ouverture. Une mesure approximative suffit pour le premier contact.",
    "Demandez si l’offre concerne le vitrage seul ou la fenêtre complète, et quels éléments justifient ce choix. Faites détailler la dépose, l’évacuation, l’accès et la finition.",
    "Avant la commande, faites valider les cotes définitives et le délai de fabrication. S’il faut protéger l’ouverture provisoirement, demandez comment cette prestation apparaît sur le devis.",
  ],
  [
    "chauffagiste-devis-radiateur-froid", "Radiateur froid : préparer le rendez-vous avec un chauffagiste", "chauffagiste-urgence",
    "Un seul radiateur froid et un logement entier sans chauffage orientent vers des recherches différentes. Décrivez les symptômes sans intervenir sur un appareil ou un réseau collectif.",
    "Notez les pièces touchées, la température constatée et la consigne. Retrouvez la référence de l’installation et la date du dernier entretien. En collectif, demandez au gestionnaire si d’autres logements sont concernés.",
    "Faites distinguer la visite de diagnostic, les pièces et le retour éventuel. Si un remplacement est proposé, demandez quel contrôle a motivé le choix et si la remise en service figure sur le devis.",
    "Notez les réglages validés à la fin du rendez-vous. Si le défaut revient, donnez au professionnel la date, la pièce et les mesures comparables à celles de la première visite.",
  ],
];

const tradeArticles: Article[] = trades.map(
  ([slug, title, metier, intro, preparation, quote, followup]) => ({
    slug,
    title,
    description: intro.split(". ")[0] + ". Les éléments à réunir et les postes à vérifier sur le devis.",
    metier,
    date: "2026-11-10",
    collection: "commerces",
    readTime: 3,
    intro,
    sections: [
      { type: "h2", text: "Préparer la visite" },
      { type: "p", text: preparation },
      { type: "h2", text: "Faire détailler le devis" },
      { type: "p", text: quote },
      { type: "h2", text: "Organiser la suite" },
      { type: "p", text: followup },
      { type: "cta", text: "Relire les points à vérifier avant de signer", href: "/blog/depannage-domicile-devis-questions/" },
    ],
    sources: [
      { label: "Service Public — dépannage à domicile", href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F38350" },
      { label: "Annuaire des Entreprises — vérifier une entreprise", href: "https://annuaire-entreprises.data.gouv.fr/" },
    ],
  }),
);

export const articlesCommerces = [...shopArticles, ...tradeArticles];
