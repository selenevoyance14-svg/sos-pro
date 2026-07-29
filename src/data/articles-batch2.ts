import type { Article } from "./articles";

// Deuxieme lot d'articles longue-traine + intention d'achat.
// Cible les metiers sous-representes (0 ou 1 article) pour maximiser
// la conversion Amazon via section { type: "amazon" }.

export const articlesBatch2: Article[] = [
  // ============ URGENCES (6) ============
  {
    slug: "chauffagiste-urgence-panne-hiver-que-faire",
    title: "Panne de chauffage en plein hiver : les bons réflexes avant le pro",
    description:
      "Chaudière qui ne démarre plus, radiateurs froids : nos vérifications de base et le bon équipement de secours à avoir chez soi.",
    metier: "chauffagiste-urgence",
    date: "2026-07-29",
    readTime: 5,
    intro:
      "Une chaudière qui lâche un dimanche de janvier, c'est le stress assuré. Avant d'appeler un chauffagiste d'urgence (comptez 200 à 400 euros de déplacement week-end), quelques vérifications simples résolvent 30 % des pannes.",
    sections: [
      { type: "h2", text: "Les vérifications immédiates" },
      {
        type: "p",
        text: "La pression d'eau est la cause numéro un des chaudières qui refusent de démarrer. Le manomètre doit indiquer entre 1 et 1,5 bar à froid. En dessous, il faut remettre en pression via le robinet de remplissage. Au-dessus de 2,5 bar, il faut purger.",
      },
      {
        type: "p",
        text: "Le disjoncteur de la chaudière peut aussi avoir sauté sans que vous vous en rendiez compte : vérifier le tableau électrique. Enfin, sur les modèles à condensation, le siphon des condensats peut être bouché — un nettoyage à l'eau chaude résout parfois tout.",
      },
      { type: "h2", text: "Anticiper : le kit hiver à avoir chez soi" },
      {
        type: "p",
        text: "Certains équipements permettent de survivre 24 à 48 heures en attendant l'intervention d'un pro, notamment si vous avez des jeunes enfants ou une personne âgée à la maison.",
      },
      {
        type: "amazon",
        titre: "Le kit de secours hiver contre les pannes de chauffage",
        produits: [
          { nom: "Chauffage d'appoint électrique céramique", description: "Chauffe une pièce de 20 m² en 15 min. Silencieux, sécurité anti-basculement.", recherche: "chauffage appoint ceramique 2000w silencieux" },
          { nom: "Couette chaude 400g/m² hiver", description: "Prend le relais quand la chambre descend sous 15 °C.", recherche: "couette chaude hiver 400 gr m2" },
          { nom: "Manomètre de chaudière", description: "Vérifier la pression sans dépendre du cadran d'origine parfois défectueux.", recherche: "manometre chaudiere murale" },
          { nom: "Purgeur de radiateur clé universelle", description: "Purge complète en 5 min : sortir l'air bloqué qui empêche la chaleur.", recherche: "purgeur radiateur cle universelle" },
          { nom: "Détecteur monoxyde de carbone", description: "Obligatoire dès qu'on installe un chauffage d'appoint à combustion.", recherche: "detecteur monoxyde carbone maison" },
        ],
      },
      { type: "h2", text: "Quand appeler vraiment un chauffagiste d'urgence" },
      {
        type: "p",
        text: "Odeur de gaz, panne complète en présence d'un bébé ou d'une personne fragile, code d'erreur clignotant, chaudière qui fuit : ce sont les vraies urgences. Dans les autres cas, un rendez-vous en semaine coûtera 2 à 3 fois moins cher.",
      },
    ],
  },
  {
    slug: "plombier-urgence-fuite-eau-nuit-que-faire",
    title: "Fuite d'eau la nuit : les 5 gestes avant l'arrivée du plombier",
    description:
      "Une fuite qui coule à 3 h du matin : comment couper l'eau, protéger le logement et limiter les dégâts avant l'intervention d'urgence.",
    metier: "plombier-urgence",
    date: "2026-07-29",
    readTime: 5,
    intro:
      "Se réveiller avec de l'eau qui coule au plafond, c'est le cauchemar propriétaire. Bonne nouvelle : quelques gestes simples limitent les dégâts, réduisent la facture d'assurance et évitent que le plombier de garde vous facture aussi le temps qu'il passe à écoper.",
    sections: [
      { type: "h2", text: "Étape 1 : couper l'arrivée d'eau" },
      {
        type: "p",
        text: "Le compteur général se trouve en général dans les parties communes ou dans un coffret extérieur. Fermer entièrement le robinet quart de tour. Si vous ne trouvez pas le compteur, cherchez la vanne d'arrêt sous l'évier de la cuisine ou dans les WC.",
      },
      { type: "h2", text: "Étape 2 : couper l'électricité si l'eau touche des prises" },
      {
        type: "p",
        text: "Une fuite qui atteint un boîtier électrique, une multiprise ou même le sol dans lequel passent des câbles doit couper le disjoncteur général. La priorité absolue est la sécurité, pas le linoléum.",
      },
      { type: "h2", text: "Étape 3 : contenir l'eau et documenter" },
      {
        type: "amazon",
        titre: "Le matériel qui limite les dégâts avant l'intervention",
        produits: [
          { nom: "Bâche épaisse imperméable 3x4 m", description: "Protège meubles et sols en 30 secondes.", recherche: "bache imperm eable epaisse 3x4" },
          { nom: "Serpillière absorbante haute capacité", description: "Absorbe 10 fois son poids en eau : la limite entre inondation et flaque.", recherche: "serpilliere absorbante microfibre grande taille" },
          { nom: "Ruban PTFE plombier", description: "Étanchéification temporaire des raccords qui suintent.", recherche: "ruban teflon ptfe plombier" },
          { nom: "Colliers de serrage inox", description: "Stopper une petite fuite sur un flexible en attendant le pro.", recherche: "collier serrage inox flexible plomberie" },
          { nom: "Aspirateur eau et poussière compact", description: "Pomper 10 litres d'eau en quelques minutes, évite l'assèchement au parquet.", recherche: "aspirateur eau poussiere 20 litres" },
        ],
      },
      { type: "h2", text: "Étape 4 : photographier avant tout ménage" },
      {
        type: "p",
        text: "Prenez des photos et vidéos avant de bouger quoi que ce soit. Elles serviront pour la déclaration à l'assurance. Une fuite bien documentée est indemnisée à 100 %, une fuite sans preuve à 30 %.",
      },
      { type: "h2", text: "Étape 5 : appeler seulement quand tout est stabilisé" },
      {
        type: "p",
        text: "Un plombier de garde facture 150 à 250 euros de déplacement la nuit, plus 80 à 120 euros de l'heure. En stabilisant vous-même, vous gagnez 30 à 60 minutes de main-d'œuvre.",
      },
    ],
  },
  {
    slug: "electricien-urgence-coupure-differentiel-qui-saute",
    title: "Différentiel qui saute sans arrêt : diagnostic avant l'électricien",
    description:
      "Disjoncteur différentiel qui se déclenche à répétition : les causes fréquentes et le matériel pour identifier soi-même l'appareil fautif.",
    metier: "electricien-urgence",
    date: "2026-07-29",
    readTime: 5,
    intro:
      "Un différentiel qui se déclenche est censé protéger : il coupe le courant dès qu'une fuite de courant à la terre est détectée. Le problème, c'est quand il saute 5 fois par jour sans qu'on comprenne pourquoi. Voici comment localiser la panne avant d'appeler un électricien.",
    sections: [
      { type: "h2", text: "Comprendre ce qu'un différentiel détecte" },
      {
        type: "p",
        text: "Le différentiel 30 mA compare l'intensité qui part et celle qui revient. Dès qu'il y a un écart de plus de 30 mA (fuite à la terre, corps humain), il coupe. Il ne saute pas pour rien : il y a toujours un défaut.",
      },
      { type: "h2", text: "La méthode par élimination" },
      {
        type: "p",
        text: "Baisser tous les disjoncteurs divisionnaires, réarmer le différentiel. Puis remonter les disjoncteurs un par un. Celui qui fait sauter le différentiel identifie le circuit fautif. Ensuite, débrancher les appareils du circuit un par un : le dernier branché à faire sauter est le coupable.",
      },
      { type: "h2", text: "Les causes les plus fréquentes" },
      {
        type: "ul",
        items: [
          "Lave-linge ou lave-vaisselle vieillissant : la résistance chauffante fuit à la terre.",
          "Ballon d'eau chaude : même problème avec la résistance thermoplongeur.",
          "Prise extérieure exposée à l'humidité : condensation dans le boîtier.",
          "Chargeur USB bas de gamme sans mise à la terre correcte.",
          "Ligne défectueuse après un travail de perçage ayant abîmé un câble.",
        ],
      },
      {
        type: "amazon",
        titre: "Le matériel pour diagnostiquer et sécuriser",
        produits: [
          { nom: "Testeur de tension sans contact", description: "Vérifie la présence de courant sans démonter — sécurité maximale.", recherche: "testeur tension sans contact voltmetre" },
          { nom: "Multimètre numérique automatique", description: "Mesure tension, résistance et continuité : indispensable pour un vrai diagnostic.", recherche: "multimetre numerique automatique" },
          { nom: "Testeur de prise 220V à LED", description: "Se branche sur une prise et affiche la conformité par voyants : 30 secondes pour vérifier une installation.", recherche: "testeur prise 220v led terre" },
          { nom: "Interrupteur différentiel 40A 30mA", description: "Remplacement d'un différentiel usé — seul un électricien doit le poser.", recherche: "interrupteur differentiel 40a 30ma" },
          { nom: "Lampe frontale rechargeable", description: "Travailler dans le tableau électrique sans dépendre du plafonnier qu'on vient de couper.", recherche: "lampe frontale rechargeable usb" },
        ],
      },
      { type: "h2", text: "Quand appeler un électricien" },
      {
        type: "p",
        text: "Si aucun appareil ne semble fautif ou si le différentiel saute même tous appareils débranchés, c'est le tableau ou une ligne dans le mur. Ne jamais démonter soi-même : appeler un électricien certifié.",
      },
    ],
  },
  {
    slug: "vitrier-urgence-vitre-cassee-nuit-securiser",
    title: "Vitre cassée la nuit : sécuriser en attendant le vitrier",
    description:
      "Vitre brisée par tempête ou effraction : comment sécuriser rapidement l'ouverture avant l'intervention du vitrier de garde.",
    metier: "vitrier-urgence",
    date: "2026-07-29",
    readTime: 4,
    intro:
      "Une vitre cassée en pleine nuit, c'est un logement ouvert aux quatre vents (et parfois aux visiteurs mal intentionnés). Un vitrier de garde coûte 200 à 500 euros selon la taille de la vitre. Voici comment tenir jusqu'au matin avec un budget maîtrisé.",
    sections: [
      { type: "h2", text: "Étape 1 : sécuriser sans se blesser" },
      {
        type: "p",
        text: "Enfiler des gants épais avant tout contact avec le verre. Retirer les gros morceaux à la pince, jamais à la main. Passer un aspirateur ou une balayette pour récupérer les éclats sur le sol : un enfant ou un animal domestique peut se blesser sur une esquille invisible.",
      },
      { type: "h2", text: "Étape 2 : boucher l'ouverture" },
      {
        type: "amazon",
        titre: "Le kit d'urgence pour boucher une vitre cassée",
        produits: [
          { nom: "Film plastique épais 4x5 m", description: "Bâche transparente ou opaque, tenir même en cas de pluie ou vent.", recherche: "bache plastique epaisse 4x5 metres" },
          { nom: "Ruban adhésif toilé haute résistance", description: "Colle sur bois, métal, plâtre — la ceinture pour tenir la bâche.", recherche: "ruban adhesif toile haute resistance" },
          { nom: "Gants anti-coupure niveau 5", description: "Pour manipuler les tessons de verre sans risque.", recherche: "gants anti coupure niveau 5" },
          { nom: "Lunettes de protection", description: "Un éclat au visage peut coûter une cornée — le prix d'une paire est dérisoire.", recherche: "lunettes protection travaux" },
          { nom: "Panneau OSB 2 m² découpé", description: "Plus solide que la bâche pour les vitres du rez-de-chaussée ou en cas d'effraction.", recherche: "panneau osb 12mm decoupe" },
        ],
      },
      { type: "h2", text: "Étape 3 : déclarer sans délai" },
      {
        type: "p",
        text: "Cambriolage : dépôt de plainte au commissariat sous 48 heures pour l'assurance. Bris accidentel : déclaration à l'assureur sous 5 jours ouvrés avec photos. Le contrat habitation couvre presque toujours le bris de glace, y compris pour les vitres de porte-fenêtre.",
      },
      { type: "h2", text: "Étape 4 : commander avec précaution" },
      {
        type: "p",
        text: "Un vitrier de garde facture souvent la pose immédiate en verre standard, moins performant. Si la vitre est un double-vitrage complexe, il vaut mieux boucher solidement 48 heures et prendre rendez-vous en semaine avec un vitrier local — économie possible 40 à 60 %.",
      },
    ],
  },
  {
    slug: "depanneur-auto-batterie-morte-hiver-que-faire",
    title: "Batterie à plat en hiver : démarrer soi-même avant le dépanneur",
    description:
      "Voiture qui ne démarre pas au froid : les gestes pour tester la batterie et redémarrer avec un booster ou des câbles.",
    metier: "depanneur-auto",
    date: "2026-07-29",
    readTime: 5,
    intro:
      "Une batterie qui rend l'âme un matin d'hiver, c'est la scène classique du parking. Avant d'appeler un dépanneur (100 à 180 euros), le redémarrage à domicile est souvent possible avec le bon matériel. Voici la marche à suivre.",
    sections: [
      { type: "h2", text: "Diagnostiquer : batterie ou autre panne" },
      {
        type: "p",
        text: "Signes d'une batterie à plat : phares faibles ou éteints, démarreur qui claque sans lancer, tableau de bord qui clignote. Signes d'une autre panne : batterie chargée mais moteur qui tourne sans démarrer (essence, allumage, alternateur).",
      },
      { type: "h2", text: "Le booster : l'équipement à avoir" },
      {
        type: "p",
        text: "Le booster de batterie moderne est un petit boîtier de la taille d'un livre de poche. Il permet de démarrer une voiture sans dépendre d'un autre véhicule. Un investissement de 60 à 150 euros qui se rentabilise en 1 seul dépannage évité.",
      },
      {
        type: "amazon",
        titre: "L'équipement pour ne plus dépendre du dépanneur",
        produits: [
          { nom: "Booster de batterie 12V 2000A", description: "Redémarre une voiture jusqu'à V8. Sert aussi de powerbank USB.", recherche: "booster batterie voiture 2000a portable" },
          { nom: "Câbles de démarrage professionnels 4m", description: "Section 25 mm² minimum pour vraiment démarrer une voiture — les câbles fins ne suffisent pas.", recherche: "cables demarrage voiture 25mm2 4 metres" },
          { nom: "Testeur de batterie voiture numérique", description: "Vérifie la tension et l'état de santé de la batterie en 30 secondes.", recherche: "testeur batterie voiture numerique 12v" },
          { nom: "Chargeur de batterie 12V intelligent", description: "Recharge en 4 à 8 heures depuis une prise domestique. Maintien de charge automatique.", recherche: "chargeur batterie voiture intelligent 12v" },
          { nom: "Couverture d'hiver moteur", description: "Protège la batterie et le compartiment moteur des chocs thermiques (-15 °C et moins).", recherche: "couverture protection moteur hiver" },
        ],
      },
      { type: "h2", text: "Utiliser un booster : la méthode sûre" },
      {
        type: "ol",
        items: [
          "Vérifier que le booster est chargé (voyant vert).",
          "Moteur coupé, brancher pince rouge sur borne + batterie, puis pince noire sur point de masse (jamais borne - directement, risque d'étincelle sur gaz).",
          "Allumer le booster.",
          "Démarrer le moteur : il doit partir en 3 à 5 secondes.",
          "Débrancher pince noire d'abord, puis rouge.",
          "Rouler 30 min pour recharger la batterie via l'alternateur.",
        ],
      },
      { type: "h2", text: "Quand appeler quand même" },
      {
        type: "p",
        text: "Si le moteur ne démarre toujours pas malgré une batterie chargée, appeler un dépanneur. La panne est ailleurs : alternateur, démarreur, pompe à essence, système d'allumage.",
      },
    ],
  },
  {
    slug: "depanneur-auto-urgence-pneu-creve-autoroute",
    title: "Pneu crevé sur autoroute : sécurité et bons réflexes",
    description:
      "Crevaison en pleine autoroute : comment se mettre en sécurité, appeler le bon service et éviter les erreurs qui coûtent cher.",
    metier: "depanneur-auto-urgence",
    date: "2026-07-29",
    readTime: 5,
    intro:
      "Un pneu qui éclate à 130 km/h, c'est la peur immédiate. Bonne nouvelle : la plupart des voitures modernes tiennent la route grâce à l'ABS. La suite dépend beaucoup de comment on gère l'arrêt et le stationnement. Voici la procédure officielle.",
    sections: [
      { type: "h2", text: "Étape 1 : garder le volant droit et ralentir" },
      {
        type: "p",
        text: "Ne surtout pas freiner brusquement. Serrer le volant à deux mains, lever le pied de l'accélérateur, laisser la voiture ralentir. Freiner progressivement au frein moteur puis léger frein. Se déporter vers la bande d'arrêt d'urgence en surveillant les rétroviseurs.",
      },
      { type: "h2", text: "Étape 2 : sortir de la voiture par le côté droit" },
      {
        type: "p",
        text: "Une fois arrêté, chaussettes gilet réfléchissant AVANT de sortir. Sortir tous par la porte côté droit (opposé à la voie). Se réfugier derrière la barrière de sécurité, jamais dans la voiture. Poser le triangle 30 à 100 mètres en amont.",
      },
      { type: "h2", text: "Étape 3 : appeler le bon service" },
      {
        type: "p",
        text: "Sur autoroute, jamais un dépanneur privé : l'accès est réservé aux dépanneurs agréés par la société d'autoroute. Utiliser une borne d'appel orange (tous les 2 km) ou appeler le 112 qui redirige. Coût forfait officiel 2026 : 148 euros la journée, 226 euros la nuit.",
      },
      {
        type: "amazon",
        titre: "Le kit sécurité auto pour l'autoroute",
        produits: [
          { nom: "Kit triangle + gilet homologué CE", description: "Obligatoire dans chaque voiture (contrôle technique).", recherche: "kit triangle gilet reflechissant homologue ce" },
          { nom: "Compresseur portable 12V", description: "Regonfle un pneu qui perd doucement — sur 100 km, permet de rejoindre un garage.", recherche: "compresseur portable voiture 12v" },
          { nom: "Kit anti-crevaison mousse", description: "Injecte une mousse qui bouche les petits trous. Dépannage 100 km max.", recherche: "kit anti crevaison mousse voiture" },
          { nom: "Cric hydraulique voiture 2 tonnes", description: "Sert à changer la roue de secours plus vite que le cric d'origine.", recherche: "cric hydraulique voiture 2 tonnes" },
          { nom: "Manomètre pression pneus", description: "Vérifier la pression avant les longs trajets — 20 % des crevaisons viennent d'une pression trop basse.", recherche: "manometre pression pneus voiture" },
        ],
      },
      { type: "h2", text: "Ce qu'il ne faut jamais faire" },
      {
        type: "ul",
        items: [
          "Changer la roue soi-même sur autoroute — interdit et dangereux, dépanneur obligatoire.",
          "Rester dans le véhicule pendant l'attente — s'écarter derrière la glissière.",
          "Traverser les voies pour poser le triangle — poser du côté sûr, très en amont.",
          "Refuser un dépannage d'autoroute en pensant appeler moins cher — vous serez évacué de force.",
        ],
      },
    ],
  },
  // ============ ARTISANS DIY (4) ============
  {
    slug: "ramoner-cheminee-soi-meme-materiel-methode",
    title: "Ramoner sa cheminée soi-même : matériel et méthode",
    description:
      "Ramonage obligatoire annuel : matériel professionnel accessible, méthode étape par étape et limites du DIY vs ramoneur pro.",
    metier: "ramoneur",
    date: "2026-07-29",
    readTime: 6,
    intro:
      "Le ramonage annuel est obligatoire pour l'assurance et la sécurité. Un pro coûte 60 à 100 euros. Le matériel pour le faire soi-même est accessible autour de 50 à 80 euros, rentabilisé dès la première année. Attention : le certificat de ramonage exigé par l'assurance ne peut être délivré que par un pro certifié.",
    sections: [
      { type: "h2", text: "Le matériel : hérisson + tiges" },
      {
        type: "p",
        text: "Le kit de base : un hérisson (brosse) au diamètre du conduit (le mesurer avant achat) + des tiges flexibles emboîtables (compter la hauteur de la maison, souvent 6 à 9 mètres). Un système par le bas (par la trappe de nettoyage) est aussi possible pour ceux qui n'aiment pas les toits.",
      },
      {
        type: "amazon",
        titre: "Le kit de ramonage à avoir chez soi",
        produits: [
          { nom: "Kit hérisson + tiges flexibles 9 m", description: "Kit complet DIY pour cheminée ou poêle à bois. Diamètres 150 à 200 mm.", recherche: "kit ramonage herisson tiges 9 metres" },
          { nom: "Aspirateur cendres à filtre haute performance", description: "Aspire les cendres et suies sans les projeter dans la pièce.", recherche: "aspirateur cendres haute performance" },
          { nom: "Bûche de ramonage chimique", description: "Complément 2 fois par saison : elle décolle les dépôts avant ramonage mécanique.", recherche: "buche ramonage chimique cheminee" },
          { nom: "Bâche de protection foyer", description: "Protège le sol et le mobilier autour du foyer pendant l'opération.", recherche: "bache protection travaux foyer cheminee" },
          { nom: "Masque anti-poussière FFP3", description: "Protection efficace contre les fines particules de suie — jamais sans.", recherche: "masque anti poussiere ffp3 travaux" },
        ],
      },
      { type: "h2", text: "Étapes du ramonage manuel" },
      {
        type: "ol",
        items: [
          "Attendre 24 heures après la dernière flambée pour un conduit froid.",
          "Bâcher le foyer et le sol autour.",
          "Monter sur le toit (échelle sécurisée) ou passer par la trappe de nettoyage.",
          "Assembler tiges et hérisson, descendre progressivement en tournant.",
          "Remonter, redescendre 2-3 fois. Bouger dans les zones de coudes.",
          "Récupérer les dépôts au bas du conduit à l'aspirateur cendres.",
          "Vérifier visuellement l'absence de dépôts épais dans le conduit.",
        ],
      },
      { type: "h2", text: "Limites du DIY" },
      {
        type: "p",
        text: "Le ramonage DIY entretient, mais ne délivre pas le certificat exigé par l'assurance. Loi impose un ramonage certifié 1 à 2 fois par an (selon département) par un ramoneur pro. Le DIY est utile en complément (mi-saison, avant la reprise du feu) mais n'exempte pas du passage annuel officiel.",
      },
    ],
  },
  {
    slug: "reparer-trou-placo-plaquiste-methode",
    title: "Reboucher un trou dans le placo : la méthode qui tient",
    description:
      "Trou de perceuse, coup de meuble ou impact : la méthode pour reboucher un trou dans le placo proprement, sans faire venir un plaquiste.",
    metier: "plaquiste",
    date: "2026-07-29",
    readTime: 4,
    intro:
      "Un trou dans le placo, c'est le petit défaut qui traîne des mois parce qu'on croit que c'est compliqué. En vrai, avec le bon matériel, on répare et on repeint proprement en une soirée. Voici la méthode.",
    sections: [
      { type: "h2", text: "Selon la taille : 3 méthodes" },
      {
        type: "ul",
        items: [
          "Trou de moins de 3 cm : enduit direct, séchage, poncage, peinture.",
          "Trou de 3 à 10 cm : pastille de placo autoadhésif + enduit + peinture.",
          "Trou de plus de 10 cm : découpe carrée, plaque de placo neuf découpée, tasseaux de renfort, enduit sur les 4 côtés, peinture.",
        ],
      },
      { type: "h2", text: "Petit trou : la méthode 15 minutes" },
      {
        type: "p",
        text: "Nettoyer les bords du trou. Appliquer un enduit de rebouchage à la spatule, remplir généreusement. Laisser sécher 4 heures. Poncer au papier 180. Peindre en 2 couches avec la peinture d'origine.",
      },
      { type: "h2", text: "Trou moyen : avec pastille autoadhésive" },
      {
        type: "p",
        text: "Poser une pastille de placo autoadhésive sur le trou (elle vient combler la partie manquante). Enduire par-dessus, laisser sécher, poncer, peindre. Le résultat est invisible.",
      },
      {
        type: "amazon",
        titre: "Le kit de réparation placo à avoir",
        produits: [
          { nom: "Enduit de rebouchage prêt à l'emploi", description: "Reboucher sans mélange. Prise rapide.", recherche: "enduit rebouchage placo pret a emploi" },
          { nom: "Kit spatules inox 4 tailles", description: "Petites et grandes surfaces, toutes situations.", recherche: "kit spatules inox enduit peintre" },
          { nom: "Pastilles autoadhésives placo", description: "Répare un trou de 5 à 10 cm en 15 min, sans démonter.", recherche: "pastille autoadhesive placo reparation" },
          { nom: "Papier abrasif 180-240 grains", description: "Poncer proprement l'enduit une fois sec.", recherche: "papier abrasif 180 240 ponçage" },
          { nom: "Retouche peinture blanche mate", description: "Pot de peinture blanche mate pour retoucher les zones réparées.", recherche: "peinture blanche mate retouche 1 litre" },
        ],
      },
      { type: "h2", text: "Quand appeler un plaquiste" },
      {
        type: "p",
        text: "Fissure horizontale continue (structurelle), plaques qui se descellent complètement, humidité qui gonfle le placo (fuite ou mérule) : ce ne sont plus des réparations DIY. Un plaquiste diagnostiquera la cause avant de reboucher.",
      },
    ],
  },
  {
    slug: "remplacer-carreau-vitre-cassee-soi-meme",
    title: "Changer un carreau de vitre soi-même : matériel et méthode",
    description:
      "Remplacer une vitre cassée sur une fenêtre simple : matériel accessible, méthode étape par étape, précautions sécurité.",
    metier: "vitrier",
    date: "2026-07-29",
    readTime: 5,
    intro:
      "Remplacer un carreau simple soi-même est une opération accessible qui économise 100 à 200 euros de vitrier. Attention : ne s'applique qu'aux vitrages simples (fenêtres anciennes, portes de garage, verrières). Pour un double-vitrage moderne, seul un vitrier peut intervenir.",
    sections: [
      { type: "h2", text: "Ce qui est faisable soi-même" },
      {
        type: "p",
        text: "Vitrages simples de moins de 4 mm d'épaisseur, dans un cadre en bois avec mastic. Fenêtres de garage, verrières, châssis anciens. Le remplacement demande de retirer l'ancien mastic, poser la nouvelle vitre, refaire le joint.",
      },
      { type: "h2", text: "Sécurité avant tout" },
      {
        type: "p",
        text: "Gants anti-coupure niveau 5, lunettes de protection, chaussures fermées. Récupérer les tessons dans un carton fermé (jamais un sac plastique).",
      },
      {
        type: "amazon",
        titre: "Le matériel pour remplacer une vitre simple",
        produits: [
          { nom: "Coupe-verre professionnel roulette diamant", description: "Découpe précise du verre neuf à la bonne dimension.", recherche: "coupe verre roulette diamant professionnel" },
          { nom: "Mastic vitrier pot 1 kg", description: "Étanche le vitrage dans le cadre bois. Rester travaillable 45 min.", recherche: "mastic vitrier bois 1 kg" },
          { nom: "Pointes de vitrier boîte", description: "Fixent la vitre au cadre avant mastic.", recherche: "pointes vitrier boite acier" },
          { nom: "Gants anti-coupure niveau 5", description: "Protection main obligatoire lors du démontage.", recherche: "gants anti coupure niveau 5 verre" },
          { nom: "Kit ventouses de vitrier double", description: "Manipuler et poser une vitre lourde sans risque.", recherche: "ventouse vitrier double poignee" },
        ],
      },
      { type: "h2", text: "Étapes de remplacement" },
      {
        type: "ol",
        items: [
          "Retirer les débris de vitre, gants et lunettes.",
          "Enlever l'ancien mastic à la spatule (ou chauffer légèrement au décapeur).",
          "Extraire les pointes anciennes.",
          "Mesurer précisément l'ouverture, retrait 2-3 mm de chaque côté.",
          "Couper la vitre au coupe-verre (règle métallique + roulette).",
          "Poser la vitre, enfoncer 6-8 pointes autour.",
          "Étaler le mastic en biseau avec le couteau à mastic.",
          "Laisser sécher 24 h avant peinture.",
        ],
      },
      { type: "h2", text: "Quand appeler un vitrier" },
      {
        type: "p",
        text: "Double-vitrage, vitrage anti-effraction, feuilleté, sécurité (Securit), vitrages sur mesure : uniquement vitrier professionnel. Il faut aussi commander les vitres spéciales chez un fabricant.",
      },
    ],
  },
  {
    slug: "entretien-chaudiere-gaz-annuel-obligatoire-methode",
    title: "Entretien annuel chaudière gaz : ce qu'un pro vérifie",
    description:
      "Entretien annuel chaudière gaz obligatoire par contrat : les points de contrôle, les pièges à repérer et le matériel domestique de vérification.",
    metier: "chauffagiste",
    date: "2026-07-29",
    readTime: 5,
    intro:
      "L'entretien annuel chaudière gaz est obligatoire (arrêté 2009). Un pro certifié le facture 100 à 180 euros. Voici ce qu'il vérifie exactement, ce que vous pouvez surveiller entre deux passages, et les signaux à repérer pour ne pas se laisser surprendre.",
    sections: [
      { type: "h2", text: "Ce qu'un chauffagiste vérifie vraiment" },
      {
        type: "ul",
        items: [
          "Nettoyage du corps de chauffe et du brûleur.",
          "Analyse des fumées : taux de CO, de CO2, rendement en pourcentage.",
          "Vérification de l'étanchéité gaz (test de fuite).",
          "Contrôle de la pression circuit chauffage (1 à 1,5 bar).",
          "Vérification du vase d'expansion (pression azote 0,8 bar).",
          "Nettoyage des filtres (chauffage et eau chaude).",
          "Test des sécurités : soupape, aquastat, thermocouple ou ionisation.",
          "Émission d'une attestation d'entretien (obligatoire pour l'assurance).",
        ],
      },
      { type: "h2", text: "Ce que vous pouvez surveiller vous-même" },
      {
        type: "p",
        text: "La pression du circuit chauffage tous les mois en saison de chauffe. Sur les modèles à condensation, le siphon des condensats une fois par saison (nettoyage à l'eau chaude). L'odeur de gaz ou d'imbrûlé — jamais normal, appeler immédiatement.",
      },
      {
        type: "amazon",
        titre: "Le matériel domestique pour surveiller sa chaudière",
        produits: [
          { nom: "Détecteur monoxyde de carbone certifié", description: "Obligatoire à proximité d'une chaudière gaz. Alarme sonore fiable.", recherche: "detecteur monoxyde carbone certifie chaudiere" },
          { nom: "Manomètre chaudière remplacement", description: "Vérifier la pression avec un manomètre neuf si le cadran d'origine est bloqué.", recherche: "manometre remplacement chaudiere gaz" },
          { nom: "Détecteur de fuite gaz naturel", description: "Alarme en cas de fuite avant que l'odeur ne soit perceptible.", recherche: "detecteur fuite gaz naturel maison" },
          { nom: "Clé pour purger radiateur", description: "Éliminer l'air qui empêche le rendement du radiateur.", recherche: "cle purge radiateur universelle" },
          { nom: "Thermostat programmable connecté", description: "Économies 15 à 25 % sur la facture chauffage. Contrôle à distance.", recherche: "thermostat programmable connecte wifi" },
        ],
      },
      { type: "h2", text: "Attention aux fausses arnaques" },
      {
        type: "p",
        text: "Certains démarcheurs proposent des contrats d'entretien à 40 euros. Vérifier que le prestataire est certifié RGE ou Qualigaz. En cas de sinistre, une intervention non certifiée fait perdre la couverture assurance.",
      },
    ],
  },
  // ============ BIEN-ETRE (4) ============
  {
    slug: "reprendre-sport-apres-arret-long-methode",
    title: "Reprendre le sport après un long arrêt : la méthode douce",
    description:
      "Reprise sportive après plusieurs mois : le matériel qui protège des blessures et la progression qui tient dans le temps.",
    metier: "coach-sportif",
    date: "2026-07-29",
    readTime: 5,
    intro:
      "Se remettre au sport après 6 mois d'arrêt, c'est trois choses à éviter : trop vite, trop fort, sans matériel. Voici comment reprendre sans se blesser, avec ou sans coach à domicile.",
    sections: [
      { type: "h2", text: "La règle du 10 %" },
      {
        type: "p",
        text: "Augmenter volume et intensité de 10 % maximum par semaine. En course : commencer à 20 min de marche/course alternée, puis progression. En musculation : commencer avec 50 % du poids initial, ajouter 5 % par séance. Cette règle évite 80 % des tendinites de reprise.",
      },
      { type: "h2", text: "Le matériel qui change la donne" },
      {
        type: "amazon",
        titre: "L'équipement domestique pour reprendre sereinement",
        produits: [
          { nom: "Tapis de yoga épais 10 mm", description: "Amortissement des articulations pour gainage et étirements.", recherche: "tapis yoga epais 10 mm confort" },
          { nom: "Bandes de résistance élastiques", description: "Musculation progressive à domicile sans risque. Kit de plusieurs niveaux.", recherche: "bandes resistance elastique musculation kit" },
          { nom: "Foam roller rouleau massage", description: "Récupération musculaire après séance : réduit les courbatures de 40 à 60 %.", recherche: "foam roller rouleau massage recuperation" },
          { nom: "Cardio-fréquencemètre montre GPS", description: "Rester dans la bonne zone de rythme cardiaque, éviter de forcer.", recherche: "montre cardio gps sport polar garmin" },
          { nom: "Baskets running amorti maximal", description: "Absorption des chocs sur les articulations pour une reprise sans douleur.", recherche: "baskets running amorti maximal hoka" },
        ],
      },
      { type: "h2", text: "Programme reprise 4 semaines" },
      {
        type: "ol",
        items: [
          "Semaine 1 : 3 séances de 20-25 min de marche rapide + 10 min de gainage.",
          "Semaine 2 : 3 séances de 30 min (5 min marche / 3 min course x 3) + gainage.",
          "Semaine 3 : 3 séances de 35 min (5 min marche / 5 min course x 3) + musculation légère.",
          "Semaine 4 : 4 séances dont 1 course continue 30 min + 2 musculation + 1 étirements.",
        ],
      },
      { type: "h2", text: "Quand faire appel à un coach" },
      {
        type: "p",
        text: "Reprise après blessure ou opération : indispensable. Objectif spécifique (marathon, prise de masse) : accélère les résultats. Motivation défaillante : le rendez-vous fixe change tout. Comptez 40 à 70 euros la séance à domicile.",
      },
    ],
  },
  {
    slug: "gerer-stress-quotidien-outils-naturels",
    title: "Gérer son stress quotidien : les outils naturels qui marchent",
    description:
      "Cohérence cardiaque, lampe luminothérapie, plantes adaptogènes : nos outils naturels validés pour réduire le stress au quotidien.",
    metier: "sophrologue",
    date: "2026-07-29",
    readTime: 5,
    intro:
      "Le stress chronique attaque le sommeil, la digestion, la santé cardiovasculaire. Avant d'aller en consultation ou de basculer sur l'anxiolytique, quelques outils simples ont fait leurs preuves scientifiquement. Voici lesquels.",
    sections: [
      { type: "h2", text: "La cohérence cardiaque : 5 min qui changent tout" },
      {
        type: "p",
        text: "Respirer 6 fois par minute pendant 5 min, 3 fois par jour. Effet démontré sur la variabilité de la fréquence cardiaque, marqueur direct du stress. Simple, gratuit, efficace en 2-3 semaines.",
      },
      { type: "h2", text: "La luminothérapie contre l'anxiété saisonnière" },
      {
        type: "p",
        text: "Une lampe 10 000 lux, 20 min chaque matin, entre octobre et mars. Réduit l'anxiété saisonnière et les troubles de l'humeur. Effet significatif dès 2 semaines.",
      },
      {
        type: "amazon",
        titre: "Les outils du quotidien anti-stress",
        produits: [
          { nom: "Lampe luminothérapie 10 000 lux", description: "Combat le blues hivernal et l'anxiété saisonnière. 20 min le matin.", recherche: "lampe luminotherapie 10000 lux medicale" },
          { nom: "Casque anti-bruit méditation", description: "Isole complètement pendant les exercices de respiration ou méditation.", recherche: "casque anti bruit meditation focus" },
          { nom: "Diffuseur huiles essentielles ultrasonique", description: "Diffusion douce de lavande, camomille — apaisement immédiat.", recherche: "diffuseur huile essentielle ultrasonique" },
          { nom: "Tapis d'acupression + oreiller", description: "20 min par jour = détente musculaire mesurable, meilleur sommeil.", recherche: "tapis acupression oreiller detente" },
          { nom: "Journal gratitude quotidien", description: "3 min par jour d'écriture. Effet démontré sur l'anxiété en 8 semaines.", recherche: "journal gratitude quotidien anti stress" },
        ],
      },
      { type: "h2", text: "Les plantes adaptogènes reconnues" },
      {
        type: "ul",
        items: [
          "Rhodiola : améliore la résistance au stress, énergie mentale. Attention interactions médicamenteuses.",
          "Ashwagandha : réduit le cortisol. Efficace en 6 à 12 semaines de cure.",
          "Passiflore : facilite l'endormissement sans somnolence diurne.",
          "Valériane : sommeil profond, sans dépendance.",
          "Magnésium marin : décontracte les muscles, réduit les tics de stress.",
        ],
      },
      { type: "h2", text: "Quand consulter un sophrologue ou un pro" },
      {
        type: "p",
        text: "Trouble anxieux généralisé, phobie, crises de panique, insomnie chronique : consulter. Ces outils sont un complément, pas un remplacement du soin médical.",
      },
    ],
  },
  {
    slug: "ameliorer-digestion-naturopathie-conseils",
    title: "Améliorer sa digestion en naturopathie : les bases qui marchent",
    description:
      "Ballonnements, transit lent, brûlures : les habitudes et le matériel naturopathe pour améliorer la digestion au quotidien.",
    metier: "naturopathe",
    date: "2026-07-29",
    readTime: 5,
    intro:
      "Les troubles digestifs touchent 40 % des Français. La naturopathie propose des solutions simples avant de basculer sur les traitements de fond. Voici les bases validées par les naturopathes sérieux.",
    sections: [
      { type: "h2", text: "L'hygiène de vie qui change la digestion" },
      {
        type: "ul",
        items: [
          "Mastiquer chaque bouchée 20 à 30 fois : réduit ballonnements de 50 %.",
          "Boire hors des repas (30 min avant/après), pas pendant.",
          "Manger à heures régulières : le foie et le pancréas se calent.",
          "Diminuer sucre raffiné, farines blanches, ultra-transformés.",
          "Marcher 15 min après le repas : accélère le transit.",
        ],
      },
      { type: "h2", text: "Les plantes digestives sûres" },
      {
        type: "p",
        text: "Fenouil, anis, menthe poivrée : ballonnements post-repas. Curcuma + poivre noir : anti-inflammatoire du tube digestif. Boldo, artichaut : soutien du foie et de la vésicule. Charbon activé : gaz et diarrhées ponctuelles.",
      },
      {
        type: "amazon",
        titre: "Les indispensables digestion en naturopathie",
        produits: [
          { nom: "Tisane digestive bio fenouil menthe", description: "1 tasse après chaque repas — action apaisante immédiate.", recherche: "tisane digestive fenouil menthe bio" },
          { nom: "Bouteille verre 1 L pour eau du jour", description: "Boire 1,5 L d'eau par jour hors repas. Suivi facile.", recherche: "bouteille verre 1 litre eau quotidien" },
          { nom: "Complément probiotiques 30 milliards", description: "Rééquilibre du microbiote intestinal. Cure de 3 mois recommandée.", recherche: "probiotiques 30 milliards intestinal" },
          { nom: "Livre référence naturopathie digestion", description: "Comprendre les mécanismes pour changer durablement ses habitudes.", recherche: "livre naturopathie digestion sante" },
          { nom: "Coussin chauffant abdomen électrique", description: "Détend les tensions du ventre, apaise les spasmes intestinaux.", recherche: "coussin chauffant abdomen electrique" },
        ],
      },
      { type: "h2", text: "Signaux d'alerte : consulter un médecin" },
      {
        type: "p",
        text: "Perte de poids inexpliquée, sang dans les selles, douleurs abdominales fortes, fièvre persistante : ce ne sont pas des troubles fonctionnels. Consulter sans délai. La naturopathie complète, jamais ne remplace un diagnostic médical.",
      },
    ],
  },
  {
    slug: "arreter-de-fumer-hypnose-methode",
    title: "Arrêter de fumer avec l'hypnose : méthode, coût, alternatives",
    description:
      "L'hypnose pour arrêter la cigarette : ce que ça vaut vraiment, prix moyen, taux de succès, et le matériel d'accompagnement.",
    metier: "hypnotherapeute",
    date: "2026-07-29",
    readTime: 5,
    intro:
      "L'hypnose pour arrêter de fumer donne des résultats étonnants sur certains profils, aucun sur d'autres. Voici ce que la science dit vraiment, le prix moyen à prévoir, et les alternatives sérieuses.",
    sections: [
      { type: "h2", text: "Taux de succès réels" },
      {
        type: "p",
        text: "Études convergentes : 20 à 30 % d'arrêt à 6 mois avec hypnose, contre 5 à 10 % sans aide. C'est mieux que placebo mais moins que TCC (thérapie cognitivo-comportementale) qui monte à 35-40 %. Le meilleur résultat est obtenu en combinant plusieurs approches.",
      },
      { type: "h2", text: "Prix et déroulement" },
      {
        type: "p",
        text: "Séance d'hypnothérapie : 80 à 150 euros. Programme complet 3 à 5 séances. Coût total 300 à 750 euros. Non remboursé sauf certaines mutuelles (30 à 150 euros/an). À comparer aux 250 euros/mois d'un fumeur d'un paquet par jour.",
      },
      {
        type: "amazon",
        titre: "Le kit qui accompagne l'arrêt du tabac",
        produits: [
          { nom: "Substituts nicotiniques patches", description: "Efficacité démontrée en association avec toute thérapie. Sans ordonnance.", recherche: "patches nicotine substitut arret tabac" },
          { nom: "Gommes nicotine 2 mg", description: "Compensation ponctuelle des envies fortes. Association avec patches.", recherche: "gommes nicotine 2 mg arret tabac" },
          { nom: "Livre référence arrêt du tabac", description: "L'ouvrage devenu classique, plus efficace que beaucoup de méthodes payantes.", recherche: "livre arret tabac methode reference" },
          { nom: "Bracelet anti-stress massage", description: "Occuper les mains pendant les 3 semaines d'ancrage du sevrage.", recherche: "bracelet anti stress massage relaxation" },
          { nom: "Application méditation pleine conscience", description: "Complément gratuit (existe en abonnement) — 10 min par jour aide au sevrage émotionnel.", recherche: "carte cadeau meditation petit bambou premium" },
        ],
      },
      { type: "h2", text: "Combiner pour maximiser les chances" },
      {
        type: "p",
        text: "Hypnose + substituts nicotiniques + soutien psy (2-3 séances) + suivi de tabacologue (souvent gratuit, hôpital) : les taux de succès grimpent à 50-60 % à 1 an. Personne ne réussit à arrêter seul en général — l'accompagnement est décisif.",
      },
    ],
  },
  // ============ BEAUTE (3) ============
  {
    slug: "manucure-maison-comme-pro-methode",
    title: "Manucure maison comme un pro : méthode et matériel",
    description:
      "Faire sa manucure semi-permanente ou classique à la maison : méthode étape par étape, matériel indispensable, erreurs à éviter.",
    metier: "prothesiste-ongulaire",
    date: "2026-07-29",
    readTime: 5,
    intro:
      "Une manucure en institut coûte 25 à 45 euros. En semi-permanent : 40 à 65 euros. Faire tout ça soi-même est accessible avec le bon matériel, une fois investi environ 80 euros — rentabilisé dès la 3e manucure.",
    sections: [
      { type: "h2", text: "Manucure classique : la méthode 30 min" },
      {
        type: "ol",
        items: [
          "Retirer l'ancien vernis avec dissolvant sans acétone.",
          "Limer chaque ongle dans un seul sens (jamais en va-et-vient).",
          "Repousser les cuticules avec un bâton d'orangier après bain de mains.",
          "Polir chaque ongle avec un bloc polissoir 4 faces.",
          "Appliquer une base coat protectrice.",
          "2 couches fines de vernis (attendre 2 min entre chaque).",
          "Une couche de top coat pour la tenue et la brillance.",
        ],
      },
      { type: "h2", text: "Semi-permanent : plus long mais 3 semaines de tenue" },
      {
        type: "p",
        text: "La technique diffère : gel qui polymérise sous lampe UV/LED. Investissement supplémentaire environ 40 euros pour une lampe, mais tenue 3 semaines vs 3 jours en classique.",
      },
      {
        type: "amazon",
        titre: "Le kit manucure maison qui vaut celui de l'institut",
        produits: [
          { nom: "Lampe UV/LED sèche-vernis 48W", description: "Sèche vernis semi-permanent en 30 secondes. Capteur automatique.", recherche: "lampe uv led secheur vernis 48w semi permanent" },
          { nom: "Kit vernis semi-permanent 6 couleurs + base + top", description: "Kit complet débutant. Compatible lampes UV et LED.", recherche: "kit vernis semi permanent complet base top" },
          { nom: "Set de limes et polissoirs", description: "Limes grain 100/180, blocs polissoirs, bâtons d'orangier.", recherche: "kit limes polissoir manucure professionnel" },
          { nom: "Dissolvant sans acétone", description: "Doux pour les ongles, ne les dessèche pas.", recherche: "dissolvant sans acetone ongles" },
          { nom: "Huile pour cuticules format stylo", description: "Nourrit les contours d'ongles au quotidien. Look net.", recherche: "huile cuticule stylo nail" },
        ],
      },
      { type: "h2", text: "Erreurs à éviter" },
      {
        type: "ul",
        items: [
          "Couper les cuticules — les repousser suffit, la coupe crée des micro-plaies.",
          "Vernir sur ongles humides ou avec crème hydratante récente — décollement garanti.",
          "Couches épaisses — 2 couches fines tiennent 5 fois mieux qu'une couche épaisse.",
          "Décoller le semi-permanent à la main — il faut le retirer à l'acétone, sinon les ongles pèlent.",
        ],
      },
    ],
  },
  {
    slug: "soin-visage-maison-routine-methode",
    title: "Soin visage maison : la routine qui remplace l'esthéticienne",
    description:
      "Nettoyage, exfoliation, masque, hydratation : la routine soin visage complète à faire à la maison. Matériel et étapes.",
    metier: "estheticienne",
    date: "2026-07-29",
    readTime: 5,
    intro:
      "Un soin visage en institut coûte 60 à 120 euros. La routine équivalente à la maison, une fois investis 80 euros de matériel, se fait pour 3-5 euros par soin. Voici la méthode qui donne des résultats visibles.",
    sections: [
      { type: "h2", text: "Étape 1 : le nettoyage double" },
      {
        type: "p",
        text: "Double cleansing : d'abord un démaquillant huileux (huile démaquillante ou baume) qui dissout maquillage et écran solaire, puis un nettoyant doux à l'eau qui rince la peau. Résultat : peau vraiment propre, sans agression.",
      },
      { type: "h2", text: "Étape 2 : l'exfoliation adaptée" },
      {
        type: "p",
        text: "Gommage mécanique 1 fois par semaine (grains fins), ou peeling chimique AHA/BHA 2 à 3 fois par semaine (plus efficace, moins agressif). Jamais les deux le même jour.",
      },
      { type: "h2", text: "Étape 3 : le masque ciblé" },
      {
        type: "p",
        text: "Argile pour peaux grasses, hydratation pour peaux sèches, apaisant pour peaux sensibles. 15 min max, jamais plus.",
      },
      { type: "h2", text: "Étape 4 : l'hydratation" },
      {
        type: "p",
        text: "Sérum ciblé (vitamine C matin, rétinol soir), crème hydratante adaptée, écran solaire SPF50 le matin. Toujours SPF, y compris en hiver — c'est le seul soin anti-âge scientifiquement validé.",
      },
      {
        type: "amazon",
        titre: "Le kit soin visage maison qui fait la différence",
        produits: [
          { nom: "Brosse nettoyante visage silicone rechargeable", description: "Nettoie 6 fois mieux qu'à la main. Silicone antibactérien.", recherche: "brosse nettoyante visage silicone rechargeable" },
          { nom: "Appareil LED lumière rouge visage", description: "Stimule collagène, réduit rides. 10 min par jour, résultats en 8 semaines.", recherche: "appareil led lumiere rouge visage anti age" },
          { nom: "Serviette microfibre visage douce", description: "N'irrite pas la peau après lavage. Séchage rapide.", recherche: "serviette microfibre visage douce" },
          { nom: "Cool roller froid visage acier", description: "Décongestionne les poches sous les yeux au réveil. À garder au frigo.", recherche: "cool roller froid visage acier decongestion" },
          { nom: "Miroir grossissant lumineux LED", description: "Voir les vrais détails de la peau, appliquer précisément.", recherche: "miroir grossissant lumineux led maquillage" },
        ],
      },
      { type: "h2", text: "Quand aller voir une esthéticienne quand même" },
      {
        type: "p",
        text: "Peeling profond, épilation zone sensible, extractions comédons persistants, protocoles anti-âge (radiofréquence, HIFU) : requiert un professionnel. La routine maison entretient, l'institut traite en profondeur.",
      },
    ],
  },
  {
    slug: "coupe-barbe-homme-maison-methode",
    title: "Tailler sa barbe soi-même comme un barbier : méthode",
    description:
      "Tailler sa barbe à la maison avec un résultat pro : matériel, méthode par forme de visage, entretien quotidien.",
    metier: "barbier",
    date: "2026-07-29",
    readTime: 4,
    intro:
      "Une taille de barbe chez le barbier coûte 20 à 45 euros. Le matériel pour la faire soi-même se rentabilise en 4-5 passages. Voici la méthode pour ne pas se rater.",
    sections: [
      { type: "h2", text: "Choisir sa longueur selon la forme de visage" },
      {
        type: "ul",
        items: [
          "Visage rond : barbe plus longue au menton pour allonger.",
          "Visage carré : barbe courte, contour adouci.",
          "Visage ovale : le plus polyvalent, presque tout va bien.",
          "Visage long : barbe courte et large pour équilibrer.",
        ],
      },
      { type: "h2", text: "La méthode taille barbe à domicile" },
      {
        type: "ol",
        items: [
          "Laver la barbe au shampoing barbe la veille — plus facile à peigner.",
          "Peigner dans le sens du poil avec un peigne barbier.",
          "Régler la tondeuse au sabot de longueur souhaitée (commencer plus long, on peut toujours raccourcir).",
          "Tondre de bas en haut, contre le sens du poil, mouvements lents.",
          "Dégrader les côtés (moins long) vers le menton (plus long).",
          "Tracer les contours joues et cou au rasoir (pas plus haut que 2 cm au-dessus de la pomme d'Adam).",
          "Appliquer une huile à barbe pour nourrir et parfumer.",
        ],
      },
      {
        type: "amazon",
        titre: "Le kit barbier maison complet",
        produits: [
          { nom: "Tondeuse à barbe rechargeable Philips OneBlade", description: "Coupe, taille et rase — l'outil polyvalent référence.", recherche: "philips oneblade tondeuse barbe" },
          { nom: "Peigne à barbe bois", description: "Démêle sans électricité statique. Peigne pro.", recherche: "peigne barbe bois professionnel" },
          { nom: "Ciseaux de barbier professionnels", description: "Découpe précise des poils rebelles ou moustache.", recherche: "ciseaux barbier professionnels acier" },
          { nom: "Huile à barbe hydratante", description: "Nourrit poils, adoucit peau, parfum discret.", recherche: "huile barbe hydratante bois de santal" },
          { nom: "Shampoing spécifique barbe", description: "Ne dessèche pas comme un shampoing cheveux classique.", recherche: "shampoing barbe specifique nutrition" },
        ],
      },
      { type: "h2", text: "Quand aller quand même chez le barbier" },
      {
        type: "p",
        text: "Refonte complète après plusieurs mois de laisser-aller, dégradés très pointus, rasage à la lame de sabre : le barbier reste imbattable. Le DIY entretient bien entre deux passages en institut, tous les 2-3 mois.",
      },
    ],
  },
  // ============ AUTO (3) ============
  {
    slug: "reparer-rayure-carrosserie-methode-carrossier",
    title: "Réparer une rayure de carrosserie soi-même : méthode",
    description:
      "Rayure de carrosserie superficielle ou profonde : diagnostic et méthode pour réparer sans passer par le carrossier.",
    metier: "carrossier",
    date: "2026-07-29",
    readTime: 5,
    intro:
      "Un devis carrossier pour une rayure : 200 à 500 euros. Si la rayure est superficielle (ne touche pas la peinture), on répare soi-même en 30 min. Si elle est profonde (jusqu'au métal), l'atelier est indispensable.",
    sections: [
      { type: "h2", text: "Diagnostiquer la profondeur" },
      {
        type: "p",
        text: "Test à l'ongle : si l'ongle accroche, la rayure est profonde. Si l'ongle glisse, c'est superficiel. Vérifier aussi la couleur de la rayure : blanche/grise = vernis seul, couleur différente = jusqu'à la peinture, métal apparent = tôle.",
      },
      { type: "h2", text: "Rayure superficielle : polish et lustrage" },
      {
        type: "ol",
        items: [
          "Laver et sécher la zone.",
          "Appliquer un polish au chiffon microfibre.",
          "Frotter en mouvements circulaires 2 à 3 min.",
          "Essuyer avec un microfibre propre.",
          "Vérifier au soleil : la rayure est effacée ou très atténuée.",
        ],
      },
      { type: "h2", text: "Rayure jusqu'à la peinture : stylo retouche" },
      {
        type: "ol",
        items: [
          "Trouver le code peinture voiture (sticker montant portière).",
          "Commander un stylo retouche exact ce code.",
          "Nettoyer et dégraisser la rayure.",
          "Appliquer une fine couche.",
          "Laisser sécher 24 h.",
          "Poncer légèrement au papier 2000 gouille d'eau.",
          "Polir avec polish.",
        ],
      },
      {
        type: "amazon",
        titre: "Le kit rayure carrosserie DIY",
        produits: [
          { nom: "Polish rayures carrosserie professionnel", description: "Efface rayures superficielles. Compatible toutes couleurs.", recherche: "polish rayures carrosserie professionnel" },
          { nom: "Kit chiffons microfibre voiture", description: "Ne raye pas la peinture. Différentes densités pour polish et lustrage.", recherche: "chiffons microfibre voiture kit" },
          { nom: "Stylo retouche peinture voiture universel", description: "Code peinture sur commande — trouver le sien sur autocollant portière.", recherche: "stylo retouche peinture voiture universel" },
          { nom: "Kit ponçage eau papier 1500-3000", description: "Poncer fin la retouche avant polish, résultat quasi invisible.", recherche: "papier abrasif eau 1500 3000 voiture" },
          { nom: "Cire de protection carrosserie", description: "Protection longue durée après réparation. Applique en 15 min.", recherche: "cire protection carrosserie voiture" },
        ],
      },
      { type: "h2", text: "Quand aller chez le carrossier" },
      {
        type: "p",
        text: "Rayure jusqu'au métal apparent (risque de rouille), bosse associée, plusieurs rayures profondes sur la même zone, voiture récente sous garantie : atelier obligatoire. Le devis est gratuit, ne pas hésiter à comparer 2-3 carrossiers.",
      },
    ],
  },
  {
    slug: "preparer-controle-technique-verifications-essentielles",
    title: "Préparer son contrôle technique : les vérifications essentielles",
    description:
      "Ce qu'il faut vérifier avant le contrôle technique pour éviter la contre-visite et les frais supplémentaires.",
    metier: "controle-technique",
    date: "2026-07-29",
    readTime: 5,
    intro:
      "Un contrôle technique raté, c'est 60 euros de contre-visite plus les réparations. La grande majorité des refus sont pour des raisons simples à corriger avant. Voici la check-list qui évite la contre-visite.",
    sections: [
      { type: "h2", text: "Les 5 causes principales de refus" },
      {
        type: "ul",
        items: [
          "Feux défectueux (ampoule grillée) — 30 % des refus.",
          "Plaquettes de frein usées — 20 % des refus.",
          "Pneus lisses (moins de 1,6 mm) — 15 % des refus.",
          "Voyants moteur allumés au tableau — 10 % des refus.",
          "Pare-brise fissuré ou impact — 8 % des refus.",
        ],
      },
      { type: "h2", text: "Contrôle avant contrôle : la check-list" },
      {
        type: "ol",
        items: [
          "Tester tous les feux (feux de croisement, de route, clignotants, stop, recul, plaque).",
          "Vérifier l'usure des pneus (témoin sur la bande de roulement).",
          "Vérifier les niveaux (huile, liquide de refroidissement, lave-glace).",
          "Regarder si un voyant reste allumé au tableau après démarrage.",
          "Ouvrir et fermer toutes les portes, capot, coffre.",
          "Vérifier le fonctionnement des essuie-glaces.",
          "Tester la ceinture de sécurité (elle doit se bloquer si tirée brusquement).",
          "Regarder si le pare-brise a des impacts dans le champ de vision.",
        ],
      },
      {
        type: "amazon",
        titre: "Le kit pré-contrôle technique",
        produits: [
          { nom: "Kit ampoules voiture spare complet", description: "Coffret 12 ampoules variées. Obligatoire dans certains pays européens.", recherche: "kit ampoules voiture spare complet" },
          { nom: "Manomètre pression pneus digital", description: "Vérifier la pression avant contrôle. Sous-gonflage = usure irrégulière.", recherche: "manometre pression pneus digital voiture" },
          { nom: "Lecteur code OBD2 Bluetooth", description: "Lit les voyants moteur avant contrôle. Efface certains codes après réparation.", recherche: "lecteur obd2 bluetooth voiture diagnostic" },
          { nom: "Kit réparation pare-brise impact", description: "Répare petits impacts avant qu'ils ne fissurent le pare-brise.", recherche: "kit reparation pare brise impact" },
          { nom: "Liquide lave-glace hiver -20°C", description: "Un niveau bas est un motif de contre-visite.", recherche: "liquide lave glace hiver -20 degrés" },
        ],
      },
      { type: "h2", text: "Quand une réparation avant CT est indispensable" },
      {
        type: "p",
        text: "Plaquettes de frein grinçantes, pneus lisses, voyant moteur allumé sans raison identifiable : réparer avant. Une contre-visite oblige à repasser au CT dans les 2 mois — perte de temps et 60 euros supplémentaires.",
      },
    ],
  },
  {
    slug: "laver-voiture-soi-meme-comme-station-pro",
    title: "Laver sa voiture soi-même : la méthode station pro",
    description:
      "Nettoyer sa voiture à domicile avec un résultat de station professionnelle : matériel, méthode et produits qui marchent.",
    metier: "lavage-auto",
    date: "2026-07-29",
    readTime: 5,
    intro:
      "Un lavage extérieur en station coûte 10 à 20 euros, un lavage complet intérieur/extérieur 40 à 80 euros. Le matériel domestique se rentabilise en 8-10 lavages, et le résultat dépasse souvent la station qui abîme la peinture avec ses rouleaux.",
    sections: [
      { type: "h2", text: "Le lavage extérieur en 4 étapes" },
      {
        type: "ol",
        items: [
          "Rinçage abondant à basse pression pour retirer les grosses saletés.",
          "Pré-lavage à la mousse (nettoyant carrosserie + eau) sur toute la voiture.",
          "Lavage à la main avec un gant microfibre méthode 2 seaux (un rincer, un savonner).",
          "Rinçage final et séchage au chiffon microfibre.",
        ],
      },
      { type: "h2", text: "L'intérieur : la méthode qui décrasse vraiment" },
      {
        type: "p",
        text: "Aspirer d'abord tout (sièges, tapis, sols, plage arrière). Puis nettoyer les plastiques au nettoyant multi-usages voiture. Enfin les vitres au nettoyant vitres sans traces.",
      },
      {
        type: "amazon",
        titre: "Le kit lavage voiture domicile complet",
        produits: [
          { nom: "Aspirateur voiture 12V puissant", description: "Se branche allume-cigare, aspire miettes et poils profondément.", recherche: "aspirateur voiture 12v puissant portable" },
          { nom: "Nettoyeur haute pression sans fil portable", description: "Rincer sans arrivée d'eau. Batterie autonome.", recherche: "nettoyeur haute pression portable batterie" },
          { nom: "Gant microfibre lavage voiture", description: "Ne raye pas la peinture. Absorbe boue et savon.", recherche: "gant microfibre lavage voiture" },
          { nom: "Kit chiffons microfibre couleurs différentes", description: "Un par usage : vitres, carrosserie, plastiques, jantes.", recherche: "kit chiffons microfibre voiture couleurs" },
          { nom: "Cire liquide voiture protection", description: "Applique en 20 min, protège 3 mois. Peinture qui rebrillante.", recherche: "cire liquide voiture protection carnauba" },
        ],
      },
      { type: "h2", text: "La technique des 2 seaux : pourquoi c'est important" },
      {
        type: "p",
        text: "Un seau eau savon, un seau eau claire. Toujours rincer le gant dans le seau claire avant de le retremper dans le savon. Sinon on frotte la voiture avec les grains de saleté du dernier passage — micro-rayures garanties après quelques lavages.",
      },
      { type: "h2", text: "Quand aller en station pro" },
      {
        type: "p",
        text: "Auto detailing profond (carrossage, désodorisation, revêtement céramique) : professionnels. Nettoyage à la vapeur pro intérieur : professionnel. Lavage courant hebdomadaire : soi-même, sans hésitation.",
      },
    ],
  },
  // ============ ANIMAUX (2) ============
  {
    slug: "toiletter-chien-maison-materiel-methode",
    title: "Toiletter son chien à la maison : matériel et méthode",
    description:
      "Toiletter son chien à domicile entre deux passages chez le pro : matériel accessible, méthode et limites du DIY.",
    metier: "toiletteur",
    date: "2026-07-29",
    readTime: 5,
    intro:
      "Un toilettage chez le pro coûte 40 à 90 euros selon race. Entre deux passages (tous les 2-3 mois), un entretien maison prolonge la propreté et réduit la fréquence des visites. Voici le matériel et la méthode.",
    sections: [
      { type: "h2", text: "Ce qu'on peut faire soi-même" },
      {
        type: "ul",
        items: [
          "Bain avec shampoing spécifique chien.",
          "Brossage régulier (2-3 fois par semaine minimum).",
          "Nettoyage des oreilles et coupe des ongles.",
          "Coupe légère des poils autour des yeux, des pattes et de l'anus.",
          "Séchage et désodorisation.",
        ],
      },
      { type: "h2", text: "Ce qu'il vaut mieux laisser au pro" },
      {
        type: "ul",
        items: [
          "Coupe stylée par race (Poodle, Bichon, Yorkshire).",
          "Tonte à la machine pour poils longs très emmêlés.",
          "Épilation stripping (races à poil dur).",
          "Traitement anti-parasitaire spécifique.",
        ],
      },
      { type: "h2", text: "Méthode bain à la maison" },
      {
        type: "ol",
        items: [
          "Brosser d'abord à sec pour retirer nœuds et poils morts.",
          "Bain à eau tiède (jamais chaude), tremper progressivement.",
          "Shampoing chien exclusivement (jamais humain — pH différent).",
          "Bien rincer, résidus de savon = démangeaisons.",
          "Séchage serviette + sèche-cheveux tiède (jamais chaud).",
          "Brossage final poils sec.",
        ],
      },
      {
        type: "amazon",
        titre: "Le kit toilettage chien maison",
        produits: [
          { nom: "Shampoing chien spécifique doux", description: "pH adapté peau canine. Sans parfum irritant.", recherche: "shampoing chien specifique ph doux" },
          { nom: "Kit brosses toilettage chien", description: "Brosse cardeuse, peigne inox, brosse démêlante. Toutes races.", recherche: "kit brosses toilettage chien" },
          { nom: "Tondeuse à chien professionnelle", description: "Silencieuse, sans fil, sabots multiples. Racial et confort.", recherche: "tondeuse chien professionnelle silencieuse" },
          { nom: "Coupe-ongles chien avec sécurité", description: "Lame guillotine + garde-coupe pour éviter de couper trop court.", recherche: "coupe ongles chien securite guillotine" },
          { nom: "Serviettes microfibre séchage rapide", description: "Absorbent 5 fois leur poids. Séchage rapide sans agression.", recherche: "serviettes microfibre chien sechage" },
        ],
      },
      { type: "h2", text: "Fréquence et limites" },
      {
        type: "p",
        text: "Bain toutes les 4 à 8 semaines maximum (bains trop fréquents = peau irritée). Brossage 2-3 fois par semaine. Coupe des ongles quand on entend cliqueter sur le sol. Passage chez le pro tous les 2-3 mois pour la coupe technique.",
      },
    ],
  },
  {
    slug: "trousse-premiers-soins-chien-chat-domicile",
    title: "Trousse premiers soins chien et chat : les indispensables",
    description:
      "Trousse premiers soins pour chien et chat à la maison : matériel, conseils et signaux qui doivent faire consulter d'urgence.",
    metier: "veterinaire",
    date: "2026-07-29",
    readTime: 5,
    intro:
      "Un animal blessé un dimanche soir, c'est le stress et la consultation vétérinaire en urgence à 150 euros. Une trousse de premiers soins domestique gère les petits bobos, gagne du temps sur les vrais problèmes, et parfois évite le déplacement.",
    sections: [
      { type: "h2", text: "Les indispensables à avoir" },
      {
        type: "ul",
        items: [
          "Thermomètre rectal (température normale 38-39 °C chien et chat).",
          "Solution physiologique stérile (nettoyer plaies et yeux).",
          "Bétadine dermique (antiseptique de contact).",
          "Compresses stériles et bandes de contention.",
          "Ciseaux à bouts ronds.",
          "Pince à tiques (retire les tiques sans les laisser encastrées).",
          "Muselière tissu (un animal souffrant peut mordre par réflexe).",
          "Charbon activé (empoisonnement léger, sur avis vétérinaire).",
        ],
      },
      { type: "h2", text: "Signaux qui doivent faire consulter en urgence" },
      {
        type: "ul",
        items: [
          "Difficulté à respirer, halètement anormal au repos.",
          "Vomissements ou diarrhée avec sang.",
          "Ventre gonflé et douloureux au toucher.",
          "Incapacité à uriner malgré tentatives.",
          "Convulsions, perte de connaissance.",
          "Plaie profonde, saignement qui ne s'arrête pas.",
          "Ingestion suspectée de produit toxique (chocolat, plantes, médicaments).",
        ],
      },
      {
        type: "amazon",
        titre: "La trousse de premiers soins chien chat prête",
        produits: [
          { nom: "Trousse premiers soins animaux complète", description: "Trousse toute prête avec les indispensables. Compact et transportable.", recherche: "trousse premiers soins chien chat complete" },
          { nom: "Thermomètre digital vétérinaire rapide", description: "Prise température rectale en 10 secondes. Mémoire dernière mesure.", recherche: "thermometre digital veterinaire rapide" },
          { nom: "Pince à tiques inox professionnelle", description: "Retire tiques sans laisser tête. Modèle plusieurs tailles.", recherche: "pince tiques inox professionnelle" },
          { nom: "Muselière tissu ajustable", description: "Sécurité pour manipulation animal blessé ou effrayé.", recherche: "museliere tissu chien ajustable" },
          { nom: "Collerette gonflable douce chien chat", description: "Empêche animal de lécher ou gratter plaie. Alternative douce à la collerette rigide.", recherche: "collerette gonflable chien chat protection" },
        ],
      },
      { type: "h2", text: "Numéros à avoir sur le frigo" },
      {
        type: "p",
        text: "Vétérinaire habituel + garde week-end (souvent différent). Centre anti-poison animal (015 gratuit). Refuge/SPA local en cas d'animal errant blessé trouvé.",
      },
    ],
  },
];
