export interface Metier {
  slug: string;
  nom: string;
  categorie: string;
  description: string;
  icon: string;
  faq: { question: string; reponse: string }[];
}

export const categories = [
  { slug: "urgences", nom: "Urgences 24h/24", icon: "🚨" },
  { slug: "bien-etre", nom: "Bien-être & Santé", icon: "🧘" },
  { slug: "artisans", nom: "Artisans & Bâtiment", icon: "🔧" },
  { slug: "services", nom: "Services & Loisirs", icon: "📸" },
  { slug: "beaute", nom: "Beauté & Coiffure", icon: "💅" },
  { slug: "auto", nom: "Auto & Moto", icon: "🚗" },
  { slug: "animaux", nom: "Animaux", icon: "🐾" },
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

  // === ARTISANS (NOUVEAUX) ===
  {
    slug: "chauffagiste",
    nom: "Chauffagiste",
    categorie: "artisans",
    description:
      "Le chauffagiste installe, entretient et dépanne les systèmes de chauffage : chaudières gaz/fioul, pompes à chaleur, planchers chauffants, radiateurs. Il intervient aussi pour les diagnostics énergétiques.",
    icon: "🔥",
    faq: [
      {
        question: "Combien coûte un chauffagiste ?",
        reponse:
          "Le tarif horaire d'un chauffagiste est de 50€ à 80€ HT. Un entretien annuel de chaudière coûte entre 80€ et 180€. L'installation d'une pompe à chaleur varie de 8 000€ à 18 000€.",
      },
      {
        question: "L'entretien chaudière est-il obligatoire ?",
        reponse:
          "Oui, l'entretien annuel d'une chaudière gaz ou fioul est obligatoire en France. C'est le locataire ou propriétaire occupant qui doit le faire réaliser par un professionnel certifié.",
      },
      {
        question: "Faut-il un chauffagiste RGE ?",
        reponse:
          "Pour bénéficier des aides à la rénovation énergétique (MaPrimeRénov', CEE), votre chauffagiste doit être certifié RGE Qualibat ou Qualipac.",
      },
    ],
  },
  {
    slug: "ramoneur",
    nom: "Ramoneur",
    categorie: "artisans",
    description:
      "Le ramoneur nettoie les conduits de fumée des cheminées, poêles à bois et chaudières. Le ramonage est obligatoire 1 à 2 fois par an pour la sécurité et l'efficacité du chauffage.",
    icon: "🧹",
    faq: [
      {
        question: "Combien coûte un ramonage ?",
        reponse:
          "Le ramonage d'une cheminée coûte entre 50€ et 90€. Pour un poêle à granulés, comptez 80€ à 120€. Le ramoneur délivre un certificat exigé par l'assurance.",
      },
      {
        question: "Le ramonage est-il obligatoire ?",
        reponse:
          "Oui, le ramonage est obligatoire 1 à 2 fois par an selon la commune. En cas de sinistre sans certificat de ramonage récent, votre assurance peut refuser de vous indemniser.",
      },
      {
        question: "Quand faire ramoner sa cheminée ?",
        reponse:
          "Idéalement avant la période de chauffe (septembre-octobre) et éventuellement une seconde fois en cours d'hiver pour les utilisateurs intensifs.",
      },
    ],
  },
  {
    slug: "plaquiste",
    nom: "Plaquiste",
    categorie: "artisans",
    description:
      "Le plaquiste réalise les cloisons, plafonds et doublages en plaques de plâtre (placo). Il installe aussi l'isolation thermique et phonique, et prépare les surfaces pour la peinture.",
    icon: "📐",
    faq: [
      {
        question: "Combien coûte la pose de placo au m² ?",
        reponse:
          "La pose de placo coûte entre 25€ et 50€/m² fourni-posé pour une cloison simple. Un plafond suspendu varie de 30€ à 60€/m². Comptez plus pour l'isolation intégrée.",
      },
      {
        question: "Plaquiste ou peintre : qui pose le placo ?",
        reponse:
          "C'est le plaquiste qui pose et joint les plaques. Le peintre intervient ensuite pour la sous-couche et la peinture finale. Certains artisans proposent les deux.",
      },
      {
        question: "Combien de temps pour une cloison en placo ?",
        reponse:
          "Comptez 1 à 2 jours pour une cloison de 5m², jointoiement et séchage compris. Une pièce entière peut être réalisée en 3 à 5 jours.",
      },
    ],
  },
  {
    slug: "vitrier",
    nom: "Vitrier",
    categorie: "artisans",
    description:
      "Le vitrier remplace les vitres cassées, installe les fenêtres double vitrage, les vérandas, miroirs et parois de douche. Il intervient aussi en urgence après un bris ou une effraction.",
    icon: "🪟",
    faq: [
      {
        question: "Combien coûte le remplacement d'une vitre ?",
        reponse:
          "Le remplacement d'une vitre simple coûte entre 100€ et 250€ selon la taille. Une vitre double vitrage varie de 150€ à 400€. En urgence, prévoyez un supplément de 50% à 100%.",
      },
      {
        question: "Un vitrier intervient-il en urgence ?",
        reponse:
          "Oui, la plupart des vitriers proposent une intervention 24h/24 après un bris ou une effraction. Demandez toujours un devis ferme avant intervention pour éviter les arnaques.",
      },
      {
        question: "Double ou triple vitrage : que choisir ?",
        reponse:
          "Le double vitrage suffit pour la majorité des cas (zones tempérées). Le triple vitrage est recommandé pour les régions très froides ou les façades nord exposées au vent.",
      },
    ],
  },

  // === BEAUTÉ (NOUVEAUX) ===
  {
    slug: "coiffeur",
    nom: "Coiffeur",
    categorie: "beaute",
    description:
      "Le coiffeur propose coupes, colorations, brushings, soins capillaires et coiffures pour mariages et événements. Il travaille en salon ou à domicile, pour hommes, femmes et enfants.",
    icon: "💇",
    faq: [
      {
        question: "Combien coûte une coupe chez le coiffeur ?",
        reponse:
          "Une coupe femme coûte entre 25€ et 60€, une coupe homme entre 15€ et 35€. Les colorations varient de 40€ à 120€. Les tarifs sont plus élevés dans les grandes villes.",
      },
      {
        question: "Comment choisir un bon coiffeur ?",
        reponse:
          "Consultez les avis Google, demandez des recommandations, regardez les portfolios Instagram. Une consultation préalable permet de juger du feeling et des conseils techniques.",
      },
      {
        question: "Coiffeur à domicile : tarifs et fonctionnement ?",
        reponse:
          "Le coiffeur à domicile facture 10€ à 25€ de plus qu'en salon. Il se déplace avec son matériel et propose les mêmes prestations. Souvent disponible en soirée et week-end.",
      },
    ],
  },
  {
    slug: "barbier",
    nom: "Barbier",
    categorie: "beaute",
    description:
      "Le barbier est spécialisé dans la taille de barbe, le rasage traditionnel à l'ancienne, les coupes homme et les soins du visage masculins. Il maîtrise les techniques classiques au coupe-chou.",
    icon: "💈",
    faq: [
      {
        question: "Combien coûte une séance chez le barbier ?",
        reponse:
          "Une taille de barbe coûte entre 15€ et 35€. Un rasage traditionnel complet varie de 25€ à 50€. Les formules coupe + barbe sont souvent à 40€-70€.",
      },
      {
        question: "Barbier ou coiffeur : quelle différence ?",
        reponse:
          "Le barbier est spécialisé dans la barbe et le rasage traditionnel. Il maîtrise mieux le rasage au coupe-chou, les dégradés très courts et les soins masculins.",
      },
      {
        question: "Faut-il prendre rendez-vous chez le barbier ?",
        reponse:
          "C'est fortement conseillé, surtout en fin de semaine. Les barbershops populaires sont souvent complets plusieurs jours à l'avance.",
      },
    ],
  },
  {
    slug: "estheticienne",
    nom: "Esthéticienne",
    categorie: "beaute",
    description:
      "L'esthéticienne propose épilations, soins du visage, manucures, maquillage, modelages et soins du corps. Elle travaille en institut ou à domicile, avec des techniques classiques ou high-tech.",
    icon: "✨",
    faq: [
      {
        question: "Combien coûte un soin du visage ?",
        reponse:
          "Un soin du visage classique coûte entre 45€ et 80€. Un soin haut de gamme (anti-âge, oxygénant) varie de 80€ à 150€. Les forfaits 5 séances offrent une réduction.",
      },
      {
        question: "Épilation : quelle technique choisir ?",
        reponse:
          "L'épilation à la cire est la plus économique (30-60€). La lumière pulsée permet une réduction durable (200-500€ par zone). Le laser est le plus efficace mais le plus cher.",
      },
      {
        question: "Esthéticienne à domicile : tarifs ?",
        reponse:
          "À domicile, comptez +10€ à +20€ de frais de déplacement. Les prestations restent les mêmes. Beaucoup d'esthéticiennes sont auto-entrepreneurs et déductibles d'impôts (50%).",
      },
    ],
  },
  {
    slug: "prothesiste-ongulaire",
    nom: "Prothésiste ongulaire",
    categorie: "beaute",
    description:
      "La prothésiste ongulaire pose et entretient les ongles en gel, résine, vernis semi-permanent. Elle propose aussi des décorations nail art et des soins des mains et des pieds.",
    icon: "💅",
    faq: [
      {
        question: "Combien coûte une pose d'ongles ?",
        reponse:
          "Une pose gel ou résine coûte entre 35€ et 65€. Un remplissage varie de 25€ à 45€. Le vernis semi-permanent simple coûte 25€ à 40€. Comptez plus pour le nail art.",
      },
      {
        question: "Combien de temps tiennent les ongles en gel ?",
        reponse:
          "Une pose gel tient 3 à 4 semaines. Le vernis semi-permanent tient 2 à 3 semaines. Prévoyez un remplissage régulier pour éviter d'abîmer l'ongle naturel.",
      },
      {
        question: "La pose d'ongles abîme-t-elle les ongles ?",
        reponse:
          "Pas si la pose et la dépose sont faites par un professionnel qualifié. Une pause de quelques semaines tous les 6 mois est recommandée pour laisser l'ongle respirer.",
      },
    ],
  },
  {
    slug: "maquilleuse",
    nom: "Maquilleuse professionnelle",
    categorie: "beaute",
    description:
      "La maquilleuse professionnelle réalise les maquillages mariage, soirée, shooting photo, cinéma et défilés. Elle se déplace à domicile ou en studio et propose des essais.",
    icon: "💄",
    faq: [
      {
        question: "Combien coûte un maquillage de mariage ?",
        reponse:
          "Un maquillage de mariée coûte entre 80€ et 180€, essai compris. Pour la mariée + témoins, comptez 200€ à 400€. Le déplacement à domicile le jour J est en supplément.",
      },
      {
        question: "Quand faire l'essai maquillage mariage ?",
        reponse:
          "L'essai maquillage se fait 1 à 2 mois avant le mariage, idéalement avec l'essai coiffure. Cela permet d'ajuster le rendu en photos.",
      },
      {
        question: "Maquillage longue tenue : combien de temps ?",
        reponse:
          "Un maquillage pro avec primer et fixateur tient 10 à 16 heures. Les techniques airbrush ou HD sont les plus résistantes pour les mariages et tournages.",
      },
    ],
  },
  {
    slug: "tatoueur",
    nom: "Tatoueur",
    categorie: "beaute",
    description:
      "Le tatoueur réalise des tatouages permanents personnalisés, du flash design au projet sur mesure (réalisme, graphique, traditionnel, japonais, fine line). Il prodigue aussi les conseils de cicatrisation.",
    icon: "🎨",
    faq: [
      {
        question: "Combien coûte un tatouage ?",
        reponse:
          "Un petit tatouage coûte entre 60€ et 150€ (minimum boutique). Une pièce moyenne va de 200€ à 800€. Les grandes pièces réalistes peuvent dépasser 2 000€. Tarif horaire : 80-200€.",
      },
      {
        question: "Comment choisir son tatoueur ?",
        reponse:
          "Regardez le portfolio (Instagram), vérifiez l'hygiène du studio (aiguilles à usage unique, déclaration ARS), demandez des références. Le feeling avec l'artiste est essentiel.",
      },
      {
        question: "Comment soigner un tatouage frais ?",
        reponse:
          "Gardez le film 2-4h, lavez doucement, appliquez une crème cicatrisante 2 fois/jour pendant 2 semaines. Évitez soleil, piscine et bains pendant 1 mois.",
      },
    ],
  },

  // === AUTO / MOTO (NOUVEAUX) ===
  {
    slug: "garagiste",
    nom: "Garagiste",
    categorie: "auto",
    description:
      "Le garagiste entretient et répare les voitures : vidange, freinage, distribution, embrayage, diagnostic électronique. Il propose aussi le contrôle technique de pré-CT.",
    icon: "🔧",
    faq: [
      {
        question: "Combien coûte une vidange voiture ?",
        reponse:
          "Une vidange standard coûte entre 70€ et 150€ (huile + filtre). Une vidange complète avec filtres air/habitacle varie de 120€ à 250€. Les voitures haut de gamme coûtent plus.",
      },
      {
        question: "Garagiste indépendant ou concession ?",
        reponse:
          "Les garagistes indépendants sont 20 à 40% moins chers que les concessions. Ils peuvent intervenir sur tous types de véhicules. La garantie constructeur reste valide.",
      },
      {
        question: "À quelle fréquence entretenir sa voiture ?",
        reponse:
          "Une révision tous les 15 000 km ou 1 an est recommandée. La distribution se change tous les 60 000 à 120 000 km selon le modèle. Les plaquettes de frein tous les 30-50 000 km.",
      },
    ],
  },
  {
    slug: "carrossier",
    nom: "Carrossier",
    categorie: "auto",
    description:
      "Le carrossier répare les bosses, rayures et chocs sur la carrosserie. Il réalise aussi le débosselage sans peinture, le polissage et la peinture complète d'éléments.",
    icon: "🚙",
    faq: [
      {
        question: "Combien coûte une réparation de carrosserie ?",
        reponse:
          "Une petite rayure coûte 50€ à 200€. Une bosse avec peinture varie de 300€ à 800€ par élément. Un débosselage sans peinture (DSP) coûte 100€ à 400€.",
      },
      {
        question: "Faut-il déclarer le sinistre à l'assurance ?",
        reponse:
          "Pour un dégât responsable, déclarez le sinistre dans les 5 jours. L'assurance peut prendre en charge tout ou partie selon votre franchise. Demandez 2 devis minimum.",
      },
      {
        question: "Combien de temps pour réparer la carrosserie ?",
        reponse:
          "Une petite réparation prend 1 à 2 jours. Une intervention importante (changement d'élément + peinture) nécessite 3 à 7 jours, séchage compris.",
      },
    ],
  },
  {
    slug: "depanneur-auto",
    nom: "Dépanneur auto",
    categorie: "auto",
    description:
      "Le dépanneur auto intervient en cas de panne sur la route ou à domicile : batterie à plat, crevaison, panne mécanique. Il propose aussi le remorquage vers un garage.",
    icon: "🚨",
    faq: [
      {
        question: "Combien coûte un dépannage auto ?",
        reponse:
          "Un dépannage sur place coûte entre 80€ et 200€ en heures ouvrées. Un remorquage local varie de 150€ à 350€. Le supplément nuit/week-end est de 50% à 100%.",
      },
      {
        question: "Mon assurance prend-elle en charge le dépannage ?",
        reponse:
          "La garantie assistance de votre assurance auto couvre généralement les pannes au-delà de 50 km du domicile. Vérifiez votre contrat avant d'appeler un dépanneur.",
      },
      {
        question: "Que faire en cas de panne sur autoroute ?",
        reponse:
          "Sur autoroute, vous devez obligatoirement appeler le 17 ou la borne orange. Le dépannage est confié au prestataire autoroutier agréé. Forfait fixe : 142,29€ en 2025.",
      },
    ],
  },
  {
    slug: "controle-technique",
    nom: "Contrôle technique",
    categorie: "auto",
    description:
      "Le centre de contrôle technique vérifie l'état de votre véhicule selon les 133 points réglementaires. Indispensable tous les 2 ans pour les véhicules de plus de 4 ans.",
    icon: "✅",
    faq: [
      {
        question: "Combien coûte le contrôle technique ?",
        reponse:
          "Un contrôle technique coûte entre 70€ et 90€. La contre-visite (en cas de défauts majeurs) varie de 15€ à 30€. Les centres indépendants sont souvent moins chers que les enseignes.",
      },
      {
        question: "Quand faire le contrôle technique ?",
        reponse:
          "Le premier CT se fait dans les 6 mois précédant le 4ème anniversaire du véhicule. Ensuite, tous les 2 ans. Pour une vente, le CT doit dater de moins de 6 mois.",
      },
      {
        question: "Que faire en cas de contre-visite ?",
        reponse:
          "Vous avez 2 mois pour faire les réparations et repasser le CT (uniquement les points en défaut). Si dépassement, vous devez refaire un CT complet.",
      },
    ],
  },
  {
    slug: "lavage-auto",
    nom: "Lavage auto",
    categorie: "auto",
    description:
      "Le centre de lavage auto propose lavage extérieur, nettoyage intérieur, lustrage, polissage, traitement céramique et detailing professionnel.",
    icon: "💦",
    faq: [
      {
        question: "Combien coûte un lavage auto complet ?",
        reponse:
          "Un lavage extérieur en station coûte 5€ à 15€. Un nettoyage intérieur + extérieur complet varie de 30€ à 80€. Un detailing pro complet peut dépasser 200€.",
      },
      {
        question: "Lavage à la main ou portique : que choisir ?",
        reponse:
          "Le lavage à la main est plus doux pour la peinture mais plus cher (40€-100€). Le portique est rapide et économique (8€-15€) mais peut micro-rayer la carrosserie.",
      },
      {
        question: "À quelle fréquence laver sa voiture ?",
        reponse:
          "Un lavage par mois est idéal pour préserver la carrosserie. En hiver, lavez après chaque exposition au sel routier. Évitez les lavages au soleil direct.",
      },
    ],
  },

  // === ANIMAUX (NOUVEAUX) ===
  {
    slug: "veterinaire",
    nom: "Vétérinaire",
    categorie: "animaux",
    description:
      "Le vétérinaire soigne les animaux de compagnie et de ferme : consultations, vaccinations, stérilisations, chirurgies, radiologie. Il intervient aussi en urgence.",
    icon: "🩺",
    faq: [
      {
        question: "Combien coûte une consultation vétérinaire ?",
        reponse:
          "Une consultation standard coûte entre 35€ et 60€. Une vaccination complète varie de 70€ à 120€. Une stérilisation coûte 150€ à 400€ selon l'animal et la taille.",
      },
      {
        question: "Comment trouver un vétérinaire de garde ?",
        reponse:
          "Composez le numéro de votre vétérinaire habituel, le répondeur indique le confrère de garde. Les grandes villes ont aussi des cliniques d'urgence 24h/24.",
      },
      {
        question: "L'assurance animal vaut-elle le coup ?",
        reponse:
          "Pour un jeune animal, une mutuelle santé animale (10-40€/mois) peut être rentable en cas de maladie chronique ou d'accident. Comparez bien les franchises.",
      },
    ],
  },
  {
    slug: "toiletteur",
    nom: "Toiletteur",
    categorie: "animaux",
    description:
      "Le toiletteur lave, démêle, tond et coupe les poils de votre chien ou chat. Il propose aussi le soin des griffes, des oreilles et des dents pour un entretien complet.",
    icon: "✂️",
    faq: [
      {
        question: "Combien coûte un toilettage chien ?",
        reponse:
          "Un toilettage complet petit chien coûte 35€ à 60€. Pour un grand chien à poils longs, comptez 60€ à 100€. Un simple bain varie de 20€ à 40€.",
      },
      {
        question: "À quelle fréquence toiletter son chien ?",
        reponse:
          "Un chien à poils longs nécessite un toilettage toutes les 6-8 semaines. Pour les poils courts, 2 à 3 fois par an suffit. Le brossage hebdomadaire est essentiel.",
      },
      {
        question: "Toiletteur à domicile : avantages ?",
        reponse:
          "Le toiletteur à domicile (camion équipé ou prestation chez vous) évite le stress du transport. Tarif +15 à +30€ par rapport au salon. Pratique pour les chiens âgés ou anxieux.",
      },
    ],
  },
  {
    slug: "comportementaliste",
    nom: "Comportementaliste animalier",
    categorie: "animaux",
    description:
      "Le comportementaliste animalier intervient sur les troubles du comportement : aboiements, agressivité, anxiété, malpropreté. Il propose un suivi adapté avec les méthodes positives.",
    icon: "🐕",
    faq: [
      {
        question: "Combien coûte un comportementaliste ?",
        reponse:
          "Une consultation comportementaliste coûte entre 80€ et 150€ pour un bilan complet. Les séances de suivi varient de 50€ à 80€. À domicile : +20€ à 40€ de déplacement.",
      },
      {
        question: "Éducateur ou comportementaliste : différence ?",
        reponse:
          "L'éducateur canin apprend les ordres de base (assis, rappel). Le comportementaliste traite les troubles du comportement (peur, agressivité, anxiété de séparation).",
      },
      {
        question: "Quand consulter un comportementaliste ?",
        reponse:
          "Dès que votre animal présente un comportement gênant ou inhabituel : aboiements excessifs, agressivité, malpropreté soudaine, destructions. Plus on intervient tôt, mieux c'est.",
      },
    ],
  },
  {
    slug: "pet-sitter",
    nom: "Pet-sitter",
    categorie: "animaux",
    description:
      "Le pet-sitter garde votre animal pendant vos absences : visites à domicile, garde chez lui ou promenades. Alternative économique et personnalisée à la pension.",
    icon: "🐾",
    faq: [
      {
        question: "Combien coûte un pet-sitter ?",
        reponse:
          "Une visite à domicile coûte 12€ à 20€. Une garde de jour 25€ à 40€. Une garde de nuit chez le pet-sitter 18€ à 35€. Une promenade 12€ à 20€.",
      },
      {
        question: "Pet-sitter ou pension : que choisir ?",
        reponse:
          "Le pet-sitter (à domicile) maintient l'environnement habituel de l'animal, idéal pour les chats et chiens stressés. La pension convient aux chiens sociables qui aiment compagnie.",
      },
      {
        question: "Comment choisir un pet-sitter de confiance ?",
        reponse:
          "Privilégiez les plateformes type Animaute, Yoopies, Holidog avec avis vérifiés. Faites une visite d'essai avant le départ. Demandez une copie d'assurance responsabilité civile.",
      },
    ],
  },

  // === URGENCES (NOUVEAU) ===
  {
    slug: "plombier-urgence",
    nom: "Plombier urgence 24h/24",
    categorie: "urgences",
    description:
      "Le plombier d'urgence intervient 24h/24 et 7j/7 pour les fuites d'eau, dégâts des eaux, canalisations bouchées et chauffe-eau en panne. Délai d'intervention rapide pour limiter les dégâts.",
    icon: "🚿",
    faq: [
      {
        question: "Combien coûte un plombier en urgence ?",
        reponse:
          "Une intervention de plomberie en urgence coûte entre 150€ et 400€ selon l'horaire et la nature du problème. Le tarif est majoré de 50% à 100% la nuit, le week-end et les jours fériés.",
      },
      {
        question: "Comment éviter les arnaques en urgence ?",
        reponse:
          "Demandez TOUJOURS un devis ferme par téléphone avant l'intervention. Refusez toute intervention si le tarif annoncé sur place est différent. Vérifiez l'adresse physique du plombier sur Internet.",
      },
      {
        question: "Que faire en attendant le plombier ?",
        reponse:
          "Coupez l'arrivée d'eau au niveau du compteur ou de la vanne d'arrêt. Coupez l'électricité si l'eau approche d'une prise. Prenez des photos pour l'assurance avant tout déplacement.",
      },
    ],
  },
  {
    slug: "serrurier-urgence",
    nom: "Serrurier urgence 24h/24",
    categorie: "urgences",
    description:
      "Le serrurier d'urgence intervient 24h/24 pour les ouvertures de porte claquée, clés perdues, serrures forcées après cambriolage et mise en sécurité immédiate du logement.",
    icon: "🔓",
    faq: [
      {
        question: "Combien coûte un serrurier en urgence ?",
        reponse:
          "Une ouverture de porte simple coûte entre 80€ et 200€ en journée, 150€ à 400€ la nuit/week-end. Méfiez-vous des tarifs anormalement bas qui cachent souvent des arnaques.",
      },
      {
        question: "Comment reconnaître une arnaque de serrurier ?",
        reponse:
          "Tarif téléphonique flou, gonflement du devis sur place, prétexte que la serrure doit être 'cassée pour ouvrir', facturation de pièces non installées. Refusez et appelez la police au 17.",
      },
      {
        question: "Que faire en cas de porte claquée ?",
        reponse:
          "Vérifiez d'abord si un voisin a un double. Contactez votre syndic ou propriétaire si vous êtes locataire. En dernier recours, appelez un serrurier recommandé (assurance, mairie).",
      },
    ],
  },
  {
    slug: "electricien-urgence",
    nom: "Électricien urgence 24h/24",
    categorie: "urgences",
    description:
      "L'électricien d'urgence intervient 24h/24 en cas de coupure de courant générale, disjoncteur qui saute en permanence, fumée ou odeur de brûlé, prise qui claque ou court-circuit.",
    icon: "⚡",
    faq: [
      {
        question: "Combien coûte un électricien en urgence ?",
        reponse:
          "Une intervention en urgence coûte entre 150€ et 350€ selon l'horaire et le problème. Le déplacement seul peut atteindre 80€ à 150€. Majoration nuit/week-end de 50% à 100%.",
      },
      {
        question: "Que faire en cas de coupure de courant ?",
        reponse:
          "Vérifiez si vos voisins sont aussi coupés (problème ENEDIS, appelez le 09 72 67 50 + département). Si seul votre logement est coupé, vérifiez le disjoncteur général et les différentiels.",
      },
      {
        question: "Danger électrique : qui appeler ?",
        reponse:
          "Si odeur de brûlé, fumée ou flamme : coupez le disjoncteur général, appelez les pompiers au 18. Ne touchez à rien avec de l'eau. Une fois sécurisé, appelez un électricien d'urgence.",
      },
    ],
  },
  {
    slug: "depanneur-auto-urgence",
    nom: "Dépanneur auto urgence",
    categorie: "urgences",
    description:
      "Le dépanneur automobile d'urgence intervient 24h/24 sur la route ou à domicile : panne mécanique, batterie à plat, crevaison, accident, clés enfermées. Remorquage vers un garage.",
    icon: "🚗",
    faq: [
      {
        question: "Combien coûte un dépannage auto en urgence ?",
        reponse:
          "Un dépannage de nuit/week-end coûte entre 150€ et 350€. Un remorquage local 150€ à 400€. Sur autoroute, tarif réglementé fixe : 142,29€ en 2025 (175€ poids lourds).",
      },
      {
        question: "Mon assurance prend-elle en charge ?",
        reponse:
          "Appelez d'abord l'assistance de votre assurance auto. La plupart des contrats incluent une garantie assistance 24h/24, souvent gratuite au-delà de 50 km du domicile.",
      },
      {
        question: "Panne sur autoroute : que faire ?",
        reponse:
          "OBLIGATOIRE : composez le 17 ou utilisez une borne orange (tous les 2 km). Le dépannage est confié au prestataire agréé du tronçon. Mettez gilet jaune et triangle.",
      },
    ],
  },
  {
    slug: "vitrier-urgence",
    nom: "Vitrier urgence 24h/24",
    categorie: "urgences",
    description:
      "Le vitrier d'urgence intervient 24h/24 pour les bris de glace après tempête, effraction, vandalisme. Pose de panneau provisoire et remplacement définitif de la vitre.",
    icon: "🪟",
    faq: [
      {
        question: "Combien coûte un vitrier en urgence ?",
        reponse:
          "Une intervention en urgence avec pose de panneau temporaire coûte entre 150€ et 350€. Le remplacement définitif s'ajoute (150€ à 400€ selon la vitre). Majoration nuit/WE +50% à 100%.",
      },
      {
        question: "Vitre cassée : que faire en attendant ?",
        reponse:
          "Sécurisez la zone (gants, balai), récupérez les éclats principaux. Posez un carton ou film plastique avec du gros scotch pour bloquer le vent/froid. Photographiez pour l'assurance.",
      },
      {
        question: "Le vitrier est-il pris en charge par l'assurance ?",
        reponse:
          "Oui dans le cadre d'une effraction ou tempête (garantie habitation). Déclarez le sinistre dans les 5 jours (2 jours en cas de cambriolage avec plainte préalable).",
      },
    ],
  },
  {
    slug: "chauffagiste-urgence",
    nom: "Chauffagiste urgence",
    categorie: "urgences",
    description:
      "Le chauffagiste d'urgence intervient 24h/24 sur les pannes de chaudière en hiver, fuites de gaz, radiateurs qui ne chauffent plus, eau chaude coupée. Sécurité et redémarrage rapide.",
    icon: "🔥",
    faq: [
      {
        question: "Combien coûte une intervention chauffagiste en urgence ?",
        reponse:
          "Un dépannage chaudière en urgence coûte entre 150€ et 400€ (déplacement + main d'œuvre). Les pièces sont en supplément. Majoration nuit/WE +50% à 100%.",
      },
      {
        question: "Odeur de gaz : qui appeler ?",
        reponse:
          "URGENCE ABSOLUE : appelez immédiatement GRDF Sécurité Gaz au 0 800 47 33 33 (gratuit 24h/24). Aérez, ne touchez pas aux interrupteurs, évacuez. Le chauffagiste intervient ensuite.",
      },
      {
        question: "Pas de chauffage en hiver : que faire ?",
        reponse:
          "Vérifiez la pression de la chaudière (1-1,5 bars), le thermostat, l'alimentation gaz/électricité. Si rien ne fonctionne et qu'il fait froid : contactez un chauffagiste d'urgence.",
      },
    ],
  },
  {
    slug: "veterinaire-urgence",
    nom: "Vétérinaire urgence 24h/24",
    categorie: "urgences",
    description:
      "Le vétérinaire d'urgence intervient 24h/24 pour les accidents, intoxications, mises bas difficiles, douleurs aiguës et toutes les urgences vitales de vos animaux de compagnie.",
    icon: "🩺",
    faq: [
      {
        question: "Combien coûte une urgence vétérinaire ?",
        reponse:
          "Une consultation d'urgence coûte entre 80€ et 200€. Une hospitalisation 100€ à 300€/nuit. Une chirurgie d'urgence 500€ à 2000€+. La mutuelle animale peut couvrir une grande partie.",
      },
      {
        question: "Quels sont les signes d'urgence vétérinaire ?",
        reponse:
          "Vomissements/diarrhée répétés, ne tient plus debout, respiration difficile, plaie qui saigne, ingestion d'objet/produit toxique, accouchement compliqué, abdomen gonflé, convulsions.",
      },
      {
        question: "Comment trouver une clinique vétérinaire de garde ?",
        reponse:
          "Composez le numéro de votre vétérinaire habituel — le répondeur indique le confrère de garde. Les grandes villes ont des cliniques 24h/24 (VetUp, ChvetX, Veteo).",
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
