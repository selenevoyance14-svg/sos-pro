export interface Metier {
  slug: string;
  nom: string;
  categorie: string;
  description: string;
  icon: string;
  faq: { question: string; reponse: string }[];
}

export const categories = [
  { slug: "bien-etre", nom: "Bien-être & Santé", icon: "🧘" },
  { slug: "artisans", nom: "Artisans & Bâtiment", icon: "🔧" },
  { slug: "services", nom: "Services & Loisirs", icon: "📸" },
];

export const metiers: Metier[] = [
  // === BIEN-ÊTRE ===
  {
    slug: "osteopathe",
    nom: "Ostéopathe",
    categorie: "bien-etre",
    description:
      "L'ostéopathe est un praticien de santé qui traite les troubles fonctionnels du corps par des manipulations manuelles. Il intervient sur les douleurs musculaires, articulaires et viscérales.",
    icon: "🦴",
    faq: [
      {
        question: "Combien coûte une séance d'ostéopathie ?",
        reponse:
          "Une séance d'ostéopathie coûte entre 50€ et 80€ en moyenne. Certaines mutuelles remboursent une partie des séances.",
      },
      {
        question: "L'ostéopathie est-elle remboursée ?",
        reponse:
          "L'ostéopathie n'est pas remboursée par la Sécurité sociale, mais de nombreuses mutuelles proposent un forfait annuel de 1 à 4 séances.",
      },
      {
        question: "Quand consulter un ostéopathe ?",
        reponse:
          "Consultez un ostéopathe en cas de douleurs de dos, torticolis, maux de tête, troubles digestifs, ou après un traumatisme physique.",
      },
    ],
  },
  {
    slug: "sophrologue",
    nom: "Sophrologue",
    categorie: "bien-etre",
    description:
      "Le sophrologue accompagne ses patients dans la gestion du stress, des émotions et de la douleur grâce à des techniques de relaxation, de respiration et de visualisation positive.",
    icon: "🧠",
    faq: [
      {
        question: "Combien coûte une séance de sophrologie ?",
        reponse:
          "Une séance individuelle de sophrologie coûte entre 40€ et 70€. Les séances collectives sont généralement moins chères (15-25€).",
      },
      {
        question: "Combien de séances de sophrologie faut-il ?",
        reponse:
          "En général, 6 à 10 séances suffisent pour constater des résultats durables. La fréquence recommandée est d'une séance par semaine.",
      },
      {
        question: "La sophrologie est-elle remboursée ?",
        reponse:
          "La sophrologie n'est pas remboursée par la Sécurité sociale, mais certaines mutuelles proposent un forfait médecines douces.",
      },
    ],
  },
  {
    slug: "naturopathe",
    nom: "Naturopathe",
    categorie: "bien-etre",
    description:
      "Le naturopathe est un praticien de santé naturelle qui utilise des méthodes comme la phytothérapie, la nutrition et l'aromathérapie pour renforcer les défenses de l'organisme.",
    icon: "🌿",
    faq: [
      {
        question: "Combien coûte une consultation de naturopathie ?",
        reponse:
          "Une première consultation de naturopathie dure environ 1h30 et coûte entre 60€ et 100€. Les suivis coûtent entre 40€ et 70€.",
      },
      {
        question: "Pourquoi consulter un naturopathe ?",
        reponse:
          "On consulte un naturopathe pour améliorer son alimentation, gérer le stress, renforcer son immunité, ou accompagner un traitement médical de façon naturelle.",
      },
      {
        question: "Le naturopathe est-il un médecin ?",
        reponse:
          "Non, le naturopathe n'est pas médecin. Il ne pose pas de diagnostic et ne prescrit pas de médicaments. Il propose un accompagnement complémentaire.",
      },
    ],
  },
  {
    slug: "hypnotherapeute",
    nom: "Hypnothérapeute",
    categorie: "bien-etre",
    description:
      "L'hypnothérapeute utilise l'hypnose pour aider ses patients à surmonter des problèmes comme l'arrêt du tabac, la perte de poids, les phobies ou la gestion du stress.",
    icon: "🌀",
    faq: [
      {
        question: "Combien coûte une séance d'hypnose ?",
        reponse:
          "Une séance d'hypnothérapie coûte entre 60€ et 100€ et dure généralement 1 heure.",
      },
      {
        question: "Combien de séances d'hypnose pour arrêter de fumer ?",
        reponse:
          "En général, 1 à 3 séances suffisent pour l'arrêt du tabac. Certains hypnothérapeutes proposent un protocole en une seule séance.",
      },
      {
        question: "L'hypnose fonctionne-t-elle vraiment ?",
        reponse:
          "L'hypnose est reconnue par l'Inserm comme efficace pour certaines indications comme la douleur, le stress et les addictions. Les résultats varient selon les personnes.",
      },
    ],
  },
  {
    slug: "kinesiologue",
    nom: "Kinésiologue",
    categorie: "bien-etre",
    description:
      "Le kinésiologue utilise le test musculaire pour identifier les déséquilibres énergétiques du corps et propose des corrections adaptées pour restaurer l'équilibre global.",
    icon: "💪",
    faq: [
      {
        question: "Combien coûte une séance de kinésiologie ?",
        reponse:
          "Une séance de kinésiologie coûte entre 50€ et 80€ et dure environ 1 heure.",
      },
      {
        question: "Quelle est la différence entre kinésiologue et kinésithérapeute ?",
        reponse:
          "Le kinésithérapeute est un professionnel de santé qui rééduque le corps par le mouvement. Le kinésiologue utilise le test musculaire pour identifier des blocages émotionnels ou énergétiques.",
      },
      {
        question: "La kinésiologie est-elle remboursée ?",
        reponse:
          "La kinésiologie n'est pas remboursée par la Sécurité sociale. Certaines mutuelles peuvent prendre en charge quelques séances.",
      },
    ],
  },
  {
    slug: "acupuncteur",
    nom: "Acupuncteur",
    categorie: "bien-etre",
    description:
      "L'acupuncteur pratique une médecine traditionnelle chinoise qui consiste à stimuler des points précis du corps avec de fines aiguilles pour rétablir la circulation énergétique.",
    icon: "📍",
    faq: [
      {
        question: "Combien coûte une séance d'acupuncture ?",
        reponse:
          "Une séance d'acupuncture coûte entre 40€ et 80€. Si le praticien est médecin conventionné, une partie peut être remboursée.",
      },
      {
        question: "L'acupuncture fait-elle mal ?",
        reponse:
          "Les aiguilles d'acupuncture sont extrêmement fines. La plupart des patients ressentent une légère sensation mais pas de douleur.",
      },
      {
        question: "Pour quoi consulter un acupuncteur ?",
        reponse:
          "L'acupuncture est efficace pour les douleurs chroniques, le stress, les troubles du sommeil, les allergies et l'accompagnement à la fertilité.",
      },
    ],
  },
  {
    slug: "reflexologue",
    nom: "Réflexologue",
    categorie: "bien-etre",
    description:
      "Le réflexologue stimule des zones réflexes des pieds, des mains ou du visage pour favoriser l'autorégulation du corps et améliorer le bien-être général.",
    icon: "🦶",
    faq: [
      {
        question: "Combien coûte une séance de réflexologie ?",
        reponse:
          "Une séance de réflexologie plantaire coûte entre 40€ et 70€ et dure de 45 minutes à 1 heure.",
      },
      {
        question: "Quels sont les bienfaits de la réflexologie ?",
        reponse:
          "La réflexologie aide à réduire le stress, améliorer la circulation sanguine, soulager les tensions musculaires et favoriser un meilleur sommeil.",
      },
      {
        question: "À quelle fréquence consulter un réflexologue ?",
        reponse:
          "Pour un entretien régulier, une séance par mois est recommandée. En période de stress ou de troubles, une séance par semaine peut être bénéfique.",
      },
    ],
  },

  // === ARTISANS ===
  {
    slug: "plombier",
    nom: "Plombier",
    categorie: "artisans",
    description:
      "Le plombier installe, répare et entretient les systèmes de plomberie : tuyauterie, robinetterie, chauffe-eau, sanitaires. Il intervient aussi en urgence pour les fuites et dégâts des eaux.",
    icon: "🔧",
    faq: [
      {
        question: "Combien coûte un plombier ?",
        reponse:
          "Le tarif horaire d'un plombier varie entre 40€ et 70€ HT. Un dépannage d'urgence coûte entre 100€ et 300€ selon l'intervention.",
      },
      {
        question: "Comment trouver un plombier de confiance ?",
        reponse:
          "Vérifiez que le plombier est inscrit au registre des métiers, demandez plusieurs devis, et consultez les avis en ligne avant de vous décider.",
      },
      {
        question: "Un plombier peut-il intervenir le week-end ?",
        reponse:
          "Oui, de nombreux plombiers proposent des interventions d'urgence 7j/7. Prévoyez un supplément de 50% à 100% pour les interventions en dehors des heures ouvrées.",
      },
    ],
  },
  {
    slug: "electricien",
    nom: "Électricien",
    categorie: "artisans",
    description:
      "L'électricien réalise les installations électriques, effectue les mises aux normes et intervient en dépannage. Il assure la sécurité de votre installation domestique ou professionnelle.",
    icon: "⚡",
    faq: [
      {
        question: "Combien coûte un électricien ?",
        reponse:
          "Le tarif horaire d'un électricien est de 35€ à 60€ HT. Une mise aux normes complète d'un tableau électrique coûte entre 700€ et 2000€.",
      },
      {
        question: "Comment savoir si mon installation électrique est aux normes ?",
        reponse:
          "Faites réaliser un diagnostic électrique par un professionnel certifié. Ce diagnostic est obligatoire pour la vente ou la location d'un logement de plus de 15 ans.",
      },
      {
        question: "Faut-il un électricien certifié ?",
        reponse:
          "Pour obtenir une attestation de conformité Consuel, les travaux doivent être réalisés par un électricien qualifié, idéalement certifié Qualifelec.",
      },
    ],
  },
  {
    slug: "serrurier",
    nom: "Serrurier",
    categorie: "artisans",
    description:
      "Le serrurier intervient pour l'ouverture de portes, le changement de serrures, le blindage de portes et la mise en sécurité de votre domicile ou local professionnel.",
    icon: "🔑",
    faq: [
      {
        question: "Combien coûte une ouverture de porte ?",
        reponse:
          "Une ouverture de porte simple coûte entre 80€ et 150€ en heures ouvrées. Le tarif peut doubler en soirée, week-end ou jour férié.",
      },
      {
        question: "Comment éviter les arnaques de serruriers ?",
        reponse:
          "Méfiez-vous des tarifs anormalement bas, demandez un devis écrit avant intervention, vérifiez les avis en ligne et privilégiez les artisans locaux recommandés.",
      },
      {
        question: "Combien coûte un changement de serrure ?",
        reponse:
          "Le remplacement d'une serrure coûte entre 100€ et 400€ selon le type (3 points, 5 points, certifié A2P). Comptez le prix de la serrure plus la main d'œuvre.",
      },
    ],
  },
  {
    slug: "peintre",
    nom: "Peintre en bâtiment",
    categorie: "artisans",
    description:
      "Le peintre en bâtiment réalise les travaux de peinture intérieure et extérieure, la pose de papier peint, les enduits décoratifs et la préparation des surfaces.",
    icon: "🎨",
    faq: [
      {
        question: "Combien coûte un peintre au m² ?",
        reponse:
          "Le prix de la peinture varie de 20€ à 40€/m² pour les murs (fourniture et pose). Un plafond coûte un peu plus cher, de 25€ à 45€/m².",
      },
      {
        question: "Faut-il faire appel à un peintre professionnel ?",
        reponse:
          "Un peintre professionnel garantit un résultat impeccable, une préparation soignée des surfaces et un choix adapté des peintures. C'est recommandé pour les grandes surfaces.",
      },
      {
        question: "Combien de temps pour peindre une pièce ?",
        reponse:
          "Comptez 1 à 2 jours pour une pièce de 15m², préparation comprise. Les travaux incluent la protection, l'enduit, le ponçage et 2 couches de peinture.",
      },
    ],
  },
  {
    slug: "couvreur",
    nom: "Couvreur",
    categorie: "artisans",
    description:
      "Le couvreur assure la pose, la réparation et l'entretien de la toiture. Il intervient sur les tuiles, ardoises, gouttières, zinguerie et l'isolation par l'extérieur.",
    icon: "🏠",
    faq: [
      {
        question: "Combien coûte une réparation de toiture ?",
        reponse:
          "Une réparation ponctuelle coûte entre 200€ et 800€. Le remplacement complet d'une toiture varie de 100€ à 250€/m² selon les matériaux.",
      },
      {
        question: "Comment savoir si ma toiture doit être refaite ?",
        reponse:
          "Les signes d'alerte sont : tuiles cassées ou manquantes, infiltrations d'eau, mousse abondante, gouttières défaillantes, ou une toiture de plus de 25 ans.",
      },
      {
        question: "Quelle est la durée de vie d'une toiture ?",
        reponse:
          "Une toiture en tuiles dure 30 à 50 ans, en ardoise 75 à 100 ans, et en zinc 30 à 50 ans. Un entretien régulier prolonge sa durée de vie.",
      },
    ],
  },
  {
    slug: "carreleur",
    nom: "Carreleur",
    categorie: "artisans",
    description:
      "Le carreleur pose tous types de carrelages (sol, mur, terrasse) en céramique, grès cérame, faïence ou pierre naturelle. Il assure aussi la rénovation et le remplacement de carrelages.",
    icon: "🔲",
    faq: [
      {
        question: "Combien coûte la pose de carrelage au m² ?",
        reponse:
          "La pose de carrelage coûte entre 25€ et 60€/m² pour la main d'œuvre seule. Le prix total (fourniture + pose) varie de 40€ à 120€/m².",
      },
      {
        question: "Quel carrelage choisir pour ma salle de bain ?",
        reponse:
          "Privilégiez un carrelage antidérapant (classement R10 minimum), résistant à l'humidité. Le grès cérame est le choix le plus populaire pour les salles de bain.",
      },
      {
        question: "Peut-on poser du carrelage sur du carrelage ?",
        reponse:
          "Oui, c'est possible si l'ancien carrelage est en bon état et bien adhérent. Le carreleur appliquera un primaire d'accrochage spécial.",
      },
    ],
  },
  {
    slug: "menuisier",
    nom: "Menuisier",
    categorie: "artisans",
    description:
      "Le menuisier fabrique et installe les éléments en bois : portes, fenêtres, escaliers, placards, cuisines sur mesure. Il travaille aussi les matériaux composites et l'aluminium.",
    icon: "🪚",
    faq: [
      {
        question: "Combien coûte un menuisier ?",
        reponse:
          "Le tarif horaire d'un menuisier est de 35€ à 60€ HT. Un placard sur mesure coûte entre 500€ et 3000€ selon les dimensions et matériaux.",
      },
      {
        question: "Menuisier ou ébéniste : quelle différence ?",
        reponse:
          "Le menuisier travaille sur les éléments structurels (portes, fenêtres, escaliers). L'ébéniste se spécialise dans le mobilier d'art et les finitions haut de gamme.",
      },
      {
        question: "Quel bois choisir pour des fenêtres ?",
        reponse:
          "Le chêne et le méranti sont les plus utilisés pour les fenêtres en bois. Ils offrent une excellente isolation et une grande durabilité.",
      },
    ],
  },

  // === SERVICES ===
  {
    slug: "photographe",
    nom: "Photographe",
    categorie: "services",
    description:
      "Le photographe professionnel réalise des shootings pour mariages, portraits, événements d'entreprise, immobilier et e-commerce. Il maîtrise la prise de vue et la retouche.",
    icon: "📸",
    faq: [
      {
        question: "Combien coûte un photographe de mariage ?",
        reponse:
          "Un photographe de mariage coûte entre 1000€ et 3000€ pour une journée complète avec les photos retouchées et livrées en haute résolution.",
      },
      {
        question: "Comment choisir son photographe ?",
        reponse:
          "Consultez son portfolio, vérifiez son style, lisez les avis clients, et rencontrez-le pour discuter de vos attentes. Le feeling est important.",
      },
      {
        question: "Quel délai pour recevoir ses photos ?",
        reponse:
          "Comptez 2 à 6 semaines pour recevoir les photos retouchées d'un mariage. Pour un portrait ou une séance courte, le délai est généralement d'1 à 2 semaines.",
      },
    ],
  },
  {
    slug: "coach-sportif",
    nom: "Coach sportif",
    categorie: "services",
    description:
      "Le coach sportif propose des séances d'entraînement personnalisées à domicile ou en extérieur. Il adapte les exercices à votre niveau et vos objectifs : perte de poids, musculation, remise en forme.",
    icon: "🏋️",
    faq: [
      {
        question: "Combien coûte un coach sportif ?",
        reponse:
          "Une séance de coaching sportif coûte entre 30€ et 70€ pour 1 heure. Les tarifs varient selon la ville et l'expérience du coach.",
      },
      {
        question: "Le coaching sportif est-il déductible des impôts ?",
        reponse:
          "Oui, si le coach intervient à domicile et est déclaré en service à la personne, vous bénéficiez d'un crédit d'impôt de 50% des sommes versées.",
      },
      {
        question: "À quelle fréquence s'entraîner avec un coach ?",
        reponse:
          "2 à 3 séances par semaine sont idéales pour progresser. Un minimum d'une séance par semaine permet de maintenir la régularité.",
      },
    ],
  },
  {
    slug: "professeur-particulier",
    nom: "Professeur particulier",
    categorie: "services",
    description:
      "Le professeur particulier donne des cours à domicile ou en ligne dans toutes les matières : mathématiques, français, anglais, physique, etc. Il prépare aussi aux examens et concours.",
    icon: "📚",
    faq: [
      {
        question: "Combien coûte un cours particulier ?",
        reponse:
          "Un cours particulier coûte entre 15€ et 50€ de l'heure selon la matière, le niveau et la ville. Les profs agrégés ou spécialisés sont plus chers.",
      },
      {
        question: "Les cours particuliers sont-ils déductibles des impôts ?",
        reponse:
          "Oui, les cours particuliers à domicile donnent droit à un crédit d'impôt de 50% si le professeur est déclaré (CESU, organisme agréé).",
      },
      {
        question: "À partir de quel âge prendre des cours particuliers ?",
        reponse:
          "Les cours particuliers sont bénéfiques dès le primaire (CE2-CM2) pour consolider les bases, et deviennent très utiles au collège et lycée.",
      },
    ],
  },
  {
    slug: "jardinier-paysagiste",
    nom: "Jardinier paysagiste",
    categorie: "services",
    description:
      "Le jardinier paysagiste conçoit, aménage et entretient les espaces verts : jardins, terrasses, parcs. Il réalise la tonte, la taille, les plantations et les aménagements paysagers.",
    icon: "🌳",
    faq: [
      {
        question: "Combien coûte un jardinier ?",
        reponse:
          "Le tarif d'un jardinier est de 25€ à 45€ de l'heure. L'entretien régulier d'un jardin moyen coûte entre 100€ et 200€ par mois.",
      },
      {
        question: "Le jardinage est-il déductible des impôts ?",
        reponse:
          "Oui, les travaux de jardinage à domicile (tonte, taille, débroussaillage) donnent droit à un crédit d'impôt de 50%, plafonné à 5000€/an.",
      },
      {
        question: "Quelle différence entre jardinier et paysagiste ?",
        reponse:
          "Le jardinier assure l'entretien courant. Le paysagiste conçoit et réalise des aménagements complets : création de massifs, terrasses, bassins, éclairages.",
      },
    ],
  },
  {
    slug: "demenageur",
    nom: "Déménageur",
    categorie: "services",
    description:
      "Le déménageur professionnel prend en charge votre déménagement de A à Z : emballage, chargement, transport et déchargement de vos biens. Il propose aussi le garde-meuble.",
    icon: "📦",
    faq: [
      {
        question: "Combien coûte un déménagement ?",
        reponse:
          "Un déménagement coûte entre 500€ et 2000€ pour un studio/T2, et de 1500€ à 5000€ pour une maison. Le prix dépend du volume et de la distance.",
      },
      {
        question: "Quand réserver son déménageur ?",
        reponse:
          "Réservez 1 à 2 mois à l'avance, et 3 mois pour un déménagement en été (haute saison). Demandez toujours 3 devis minimum.",
      },
      {
        question: "Le déménageur est-il responsable des dégâts ?",
        reponse:
          "Oui, le déménageur est responsable des objets transportés. Vérifiez son assurance et déclarez les objets de valeur. Faites un état des lieux à l'arrivée.",
      },
    ],
  },
];

export function getMetierBySlug(slug: string): Metier | undefined {
  return metiers.find((m) => m.slug === slug);
}

export function getMetiersByCategorie(categorieSlug: string): Metier[] {
  return metiers.filter((m) => m.categorie === categorieSlug);
}
