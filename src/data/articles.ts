export type Section =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "cta"; text: string; href: string }
  | { type: "amazon"; titre?: string; produits: { nom: string; description: string; recherche: string }[] };

export type Article = {
  slug: string;
  title: string;
  description: string;
  metier: string;
  date: string;
  readTime: number;
  intro: string;
  sections: Section[];
};

export const articles: Article[] = [
  {
    slug: "comment-choisir-osteopathe",
    title: "Comment choisir un bon ostéopathe : 7 critères à vérifier",
    description:
      "Guide pratique pour choisir un ostéopathe de confiance en 2026 : diplôme, spécialités, tarifs, avis patients et signaux à éviter.",
    metier: "osteopathe",
    date: "2026-04-23",
    readTime: 6,
    intro:
      "Trouver un ostéopathe compétent n'est pas toujours simple. Entre les différences de formation, les spécialités variées et les tarifs qui oscillent du simple au double selon les villes, il est facile de se tromper. Voici les 7 critères qui permettent vraiment de distinguer un bon professionnel.",
    sections: [
      { type: "h2", text: "1. Vérifier la formation et le diplôme" },
      {
        type: "p",
        text: "Depuis 2014, seuls les titulaires d'un diplôme agréé par le ministère de la Santé peuvent utiliser le titre d'ostéopathe. Cette formation dure cinq ans dans un établissement reconnu. Avant de prendre rendez-vous, vérifiez que le praticien est bien enregistré à l'Agence régionale de santé (ARS) et qu'il possède un numéro ADELI ou RPPS.",
      },
      {
        type: "p",
        text: "Les ostéopathes titulaires d'un diplôme de médecin ou de kinésithérapeute peuvent également exercer. Cette double formation est un plus, mais la qualité d'un ostéopathe dépend surtout de son expérience clinique et de sa rigueur diagnostique.",
      },
      { type: "h2", text: "2. Identifier la spécialité recherchée" },
      {
        type: "p",
        text: "Tous les ostéopathes ne traitent pas les mêmes problématiques. Certains se spécialisent dans l'ostéopathie pédiatrique (nourrissons, enfants), d'autres dans l'accompagnement des sportifs, des femmes enceintes, ou des troubles viscéraux.",
      },
      {
        type: "p",
        text: "Pour un nourrisson qui régurgite ou un bébé qui tourne la tête d'un seul côté, un ostéopathe pédiatrique est indispensable. Pour une sciatique chronique ou une lombalgie, un praticien orienté structurel sera plus adapté.",
      },
      { type: "h2", text: "3. Se renseigner sur les tarifs" },
      {
        type: "p",
        text: "Le tarif moyen d'une consultation d'ostéopathie varie entre 50 et 80 euros en 2026, avec de fortes disparités régionales. À Paris, comptez plutôt 70 à 90 euros ; en province, 50 à 65 euros. Méfiez-vous des tarifs trop bas qui peuvent trahir une formation incomplète, comme des prix excessifs sans justification de spécialisation reconnue.",
      },
      {
        type: "p",
        text: "La plupart des mutuelles remboursent entre 100 et 300 euros par an pour l'ostéopathie. Demandez une facture systématique pour bénéficier de ce remboursement.",
      },
      { type: "h2", text: "4. Lire les avis patients avec recul" },
      {
        type: "p",
        text: "Les avis en ligne (Google, Doctolib, Pages Jaunes) sont un bon indicateur, à condition de les analyser sur la durée. Un praticien avec 50 avis moyens sur plusieurs années est plus fiable qu'un cabinet qui affiche 200 avis cinq étoiles en quelques mois. Lisez les commentaires négatifs : ils sont souvent plus révélateurs que les positifs.",
      },
      { type: "h2", text: "5. Évaluer la qualité de la première consultation" },
      {
        type: "p",
        text: "Un bon ostéopathe prend le temps. La première séance doit durer entre 45 minutes et une heure, incluant un interrogatoire détaillé sur vos antécédents, votre hygiène de vie, vos douleurs. Si le praticien manipule immédiatement sans poser de questions, changez-en.",
      },
      {
        type: "p",
        text: "Un praticien compétent sait aussi dire non : il doit refuser de vous manipuler en cas de contre-indication (fracture récente, ostéoporose sévère, suspicion de cancer) et vous orienter vers un médecin.",
      },
      { type: "h2", text: "6. Privilégier la proximité géographique" },
      {
        type: "p",
        text: "Pour un suivi efficace, mieux vaut un cabinet accessible en 15 à 20 minutes de chez vous. Un bon ostéopathe préconise parfois 2 à 3 séances rapprochées en cas de blocage aigu ; multiplier les déplacements devient vite dissuasif.",
      },
      { type: "h2", text: "7. Faire confiance à son ressenti" },
      {
        type: "p",
        text: "L'ostéopathie repose sur une relation de confiance. Si vous ne vous sentez pas à l'aise, si le praticien minimise vos douleurs ou vous pousse à prendre 10 séances d'office, changez. Un bon ostéopathe vous écoute, explique ses gestes et respecte votre rythme.",
      },
      {
        type: "amazon",
        titre: "Soulager le dos et les cervicales entre deux séances",
        produits: [
          { nom: "Livre de référence d'ostéopathie", description: "Comprendre les principes et techniques pour mieux dialoguer avec votre praticien.", recherche: "livre osteopathie reference" },
          { nom: "Coussin lombaire ergonomique", description: "Soutien du bas du dos au bureau ou en voiture pour limiter les tensions.", recherche: "coussin lombaire ergonomique bureau" },
          { nom: "Tapis d'acupression", description: "Détente musculaire du dos en 15 minutes, complément naturel aux séances.", recherche: "tapis acupression dos" },
          { nom: "Balle de massage trigger point", description: "Libère les noeuds musculaires des trapèzes, lombaires et fessiers.", recherche: "balle massage trigger point" },
          { nom: "Ceinture lombaire de maintien", description: "Soutien ponctuel en cas de lumbago ou de douleurs lombaires aiguës.", recherche: "ceinture lombaire maintien dos" },
          { nom: "Oreiller cervical à mémoire de forme", description: "Alignement nuque-épaules pendant le sommeil, indispensable après cervicalgie.", recherche: "oreiller cervical memoire de forme" },
          { nom: "Rouleau de massage en mousse", description: "Auto-massage des cuisses, mollets et dos pour entretenir la mobilité.", recherche: "rouleau massage mousse foam roller" },
        ],
      },
      {
        type: "cta",
        text: "Trouver un ostéopathe près de chez vous",
        href: "/osteopathe",
      },
      { type: "h2", text: "À retenir" },
      {
        type: "p",
        text: "Choisir un ostéopathe, c'est surtout vérifier sa formation, sa spécialité, ses tarifs et la qualité de son écoute. N'hésitez pas à changer si le premier rendez-vous ne vous convainc pas : un bon praticien n'a rien à cacher.",
      },
    ],
  },
  {
    slug: "tarifs-plombier-2026",
    title: "Tarifs plombier 2026 : dépannage, installation, urgence",
    description:
      "Prix moyen d'un plombier en 2026 : tarif horaire, déplacement, dépannage urgent et travaux d'installation. Éviter les devis abusifs.",
    metier: "plombier",
    date: "2026-04-22",
    readTime: 5,
    intro:
      "Les tarifs d'un plombier varient énormément selon la prestation, la zone géographique et l'urgence. Voici les fourchettes réelles constatées en 2026, et les signes qui doivent vous alerter face à un devis abusif.",
    sections: [
      { type: "h2", text: "Tarif horaire moyen d'un plombier" },
      {
        type: "p",
        text: "En 2026, un plombier facture en moyenne entre 45 et 70 euros de l'heure hors taxes, hors déplacement. En région parisienne et dans les grandes métropoles, le tarif peut monter à 80 ou 90 euros de l'heure. Pour un plombier indépendant en zone rurale, comptez plutôt 40 à 55 euros.",
      },
      {
        type: "p",
        text: "Le taux de TVA appliqué dépend des travaux : 10 % pour une rénovation classique, 5,5 % pour des travaux d'amélioration énergétique, 20 % pour une installation neuve.",
      },
      { type: "h2", text: "Frais de déplacement" },
      {
        type: "p",
        text: "La plupart des plombiers facturent un forfait de déplacement entre 30 et 60 euros, parfois inclus dans la première heure. Au-delà d'un certain rayon (souvent 20 km), un supplément kilométrique s'applique, de l'ordre de 0,50 à 1 euro par kilomètre.",
      },
      { type: "h2", text: "Prix des dépannages courants" },
      { type: "h3", text: "Fuite d'eau" },
      {
        type: "p",
        text: "Pour une fuite simple sur un joint ou un robinet : entre 80 et 150 euros tout compris. Pour une recherche de fuite sous carrelage ou dans un mur, le coût grimpe à 200-500 euros selon la technique employée (caméra thermique, gaz traceur).",
      },
      { type: "h3", text: "Débouchage canalisation" },
      {
        type: "p",
        text: "Débouchage simple au furet : 80 à 180 euros. Débouchage haute pression : 200 à 400 euros. Si une inspection caméra est nécessaire, ajoutez 100 à 200 euros.",
      },
      { type: "h3", text: "Remplacement chauffe-eau" },
      {
        type: "p",
        text: "Pose d'un chauffe-eau électrique 200 L : 400 à 700 euros de main-d'œuvre, auxquels s'ajoute le prix du ballon (250 à 600 euros). Pour un chauffe-eau thermodynamique, la pose monte à 800-1200 euros.",
      },
      { type: "h2", text: "Urgence : attention aux arnaques" },
      {
        type: "p",
        text: "C'est sur les dépannages d'urgence le week-end ou la nuit que les abus sont les plus fréquents. Les majorations légales sont plafonnées : maximum +50 % la nuit (20h-8h), +100 % les dimanches et jours fériés. Certaines entreprises facturent 500 ou 800 euros pour un simple joint à changer.",
      },
      {
        type: "ul",
        items: [
          "Exigez un devis écrit AVANT toute intervention, même en urgence",
          "Refusez toute facturation orale",
          "Vérifiez le numéro SIRET de l'entreprise",
          "Comparez au moins deux devis si la situation le permet",
          "Méfiez-vous des flyers distribués dans les boîtes aux lettres : souvent des intermédiaires qui majorent de 30 à 50 %",
        ],
      },
      { type: "h2", text: "Prix des travaux d'installation" },
      {
        type: "p",
        text: "Installation complète salle de bain : 3000 à 8000 euros selon la gamme. Remplacement d'une colonne d'évacuation : 1500 à 3500 euros. Création d'un réseau d'eau pour un studio : 2000 à 4500 euros. Ces prix incluent main-d'œuvre et fournitures standard.",
      },
      { type: "h2", text: "Comment obtenir un devis juste" },
      {
        type: "p",
        text: "Privilégiez les plombiers recommandés par des voisins ou disposant d'avis Google vérifiés. Demandez systématiquement un devis détaillé avec : main-d'œuvre séparée des fournitures, temps estimé, marques des pièces utilisées, garanties. Un professionnel sérieux accepte toujours de répondre à ces questions.",
      },
      {
        type: "amazon",
        titre: "Le matériel de base pour éviter d'appeler le plombier à 80 €/h",
        produits: [
          { nom: "Mastic plombier étanche", description: "Pour les petites fuites sur joints, robinets et siphons : la pâte à joint indispensable.", recherche: "mastic plombier etanche" },
          { nom: "Assortiment de joints en caoutchouc", description: "Tous les diamètres standard pour remplacer un joint qui fuit en 2 minutes.", recherche: "joints caoutchouc assortiment plomberie" },
          { nom: "Clé à molette multiprise", description: "L'outil universel pour serrer et desserrer écrous de robinetterie sans abîmer.", recherche: "cle multiprise plomberie" },
          { nom: "Ventouse WC professionnelle", description: "Modèle à soufflet, beaucoup plus efficace que les ventouses classiques sur WC bouchés.", recherche: "ventouse wc soufflet professionnelle" },
          { nom: "Ruban téflon PTFE", description: "Le ruban d'étanchéité incontournable pour les raccords filetés sans fuite.", recherche: "ruban teflon ptfe plomberie" },
          { nom: "Détecteur de fuite d'eau connecté", description: "Alarme dès le premier contact avec l'eau, évite les dégâts en cas de fuite cachée.", recherche: "detecteur fuite eau connecte" },
          { nom: "Déboucheur enzymatique écologique", description: "Sans soude caustique : dissout cheveux et graisses sans abîmer les canalisations.", recherche: "deboucheur enzymatique canalisation" },
        ],
      },
      {
        type: "cta",
        text: "Trouver un plombier dans votre ville",
        href: "/plombier",
      },
    ],
  },
  {
    slug: "electricien-rge-pourquoi-verifier",
    title: "Électricien RGE : pourquoi et comment vérifier la certification",
    description:
      "La certification RGE pour un électricien est obligatoire pour bénéficier des aides MaPrimeRénov'. Comment la vérifier et pourquoi c'est important.",
    metier: "electricien",
    date: "2026-04-20",
    readTime: 4,
    intro:
      "La mention RGE (Reconnu Garant de l'Environnement) est devenue incontournable pour tous les travaux de rénovation énergétique. Pour un électricien, cette certification ouvre l'accès aux aides publiques et garantit une compétence reconnue. Voici ce qu'il faut savoir avant de signer un devis.",
    sections: [
      { type: "h2", text: "Qu'est-ce que la certification RGE ?" },
      {
        type: "p",
        text: "Le label RGE est un signe de qualité délivré par des organismes agréés (Qualifelec, Qualibat, Qualit'EnR) aux entreprises du bâtiment qui respectent des critères de formation, de moyens techniques et de transparence. Pour un électricien, l'obtention du RGE concerne généralement les installations photovoltaïques, les bornes de recharge pour véhicules électriques et les systèmes de chauffage économe.",
      },
      { type: "h2", text: "Pourquoi c'est obligatoire pour les aides" },
      {
        type: "p",
        text: "Depuis 2014, toutes les aides publiques à la rénovation énergétique (MaPrimeRénov', éco-prêt à taux zéro, CEE, TVA à 5,5 %) sont conditionnées à l'intervention d'une entreprise certifiée RGE. Faire appel à un électricien non RGE pour installer des panneaux solaires ou une borne de recharge vous fait perdre l'éligibilité à ces aides, qui peuvent représenter plusieurs milliers d'euros.",
      },
      { type: "h2", text: "Comment vérifier que l'électricien est bien RGE" },
      {
        type: "p",
        text: "Ne vous fiez pas au logo affiché sur le devis ou le site de l'entreprise : les faux RGE existent. Deux méthodes fiables pour vérifier :",
      },
      {
        type: "ol",
        items: [
          "Consulter l'annuaire officiel sur france-renov.gouv.fr en saisissant le nom ou le SIRET de l'entreprise",
          "Demander une copie du certificat RGE en cours de validité (renouvelé tous les 4 ans)",
        ],
      },
      {
        type: "p",
        text: "Attention, le RGE est délivré pour un domaine technique précis : un électricien certifié pour le photovoltaïque ne l'est pas forcément pour les pompes à chaleur. Vérifiez que la qualification couvre bien la prestation demandée.",
      },
      { type: "h2", text: "Les autres certifications à connaître" },
      {
        type: "p",
        text: "Au-delà du RGE, un bon électricien doit être titulaire de la qualification Qualifelec, avec une mention spécifique selon la spécialité (domestique, tertiaire, industriel, photovoltaïque, IRVE pour les bornes de recharge). La mention IRVE est obligatoire pour installer une borne supérieure à 3,7 kW.",
      },
      { type: "h2", text: "Assurance décennale : tout aussi important" },
      {
        type: "p",
        text: "Tout électricien doit posséder une assurance décennale qui couvre les dommages pendant 10 ans après la fin des travaux. Demandez systématiquement une attestation à jour avant signature. Un artisan sans décennale vous laisse sans recours en cas de malfaçon.",
      },
      {
        type: "amazon",
        titre: "Réduire sa facture d'électricité en attendant les travaux",
        produits: [
          { nom: "Thermostat connecté pour chauffage", description: "Pilotage à distance et programmation intelligente : jusqu'à 25 % d'économies de chauffage.", recherche: "thermostat connecte chauffage economies" },
          { nom: "Pack d'ampoules LED basse consommation", description: "Remplacer toutes les ampoules de la maison : 80 % de conso en moins, durée de vie x10.", recherche: "ampoules led basse consommation pack" },
          { nom: "Programmateur de prises électriques", description: "Couper veille TV, box, ordinateurs la nuit pour récupérer 50 à 100 € par an.", recherche: "programmateur prises electriques" },
          { nom: "Multimètre digital", description: "Vérifier soi-même les tensions, continuité et identifier un appareil énergivore.", recherche: "multimetre digital electricien amateur" },
          { nom: "Isolant thermique pour combles", description: "L'isolation reste le premier levier d'économies avant d'installer une PAC ou des panneaux.", recherche: "isolant thermique combles renovation" },
          { nom: "Livre de rénovation énergétique", description: "Comprendre MaPrimeRénov', les CEE et hiérarchiser les travaux dans le bon ordre.", recherche: "livre renovation energetique maison" },
        ],
      },
      {
        type: "cta",
        text: "Trouver un électricien certifié dans votre ville",
        href: "/electricien",
      },
      { type: "h2", text: "Les questions à poser avant de signer" },
      {
        type: "ul",
        items: [
          "Quelle est votre qualification RGE et dans quel domaine précis ?",
          "Pouvez-vous me transmettre le certificat en cours de validité ?",
          "Avez-vous une attestation d'assurance décennale à jour ?",
          "Les aides publiques sont-elles mentionnées dans le devis ?",
          "Qui gère le dossier MaPrimeRénov' : vous ou moi ?",
        ],
      },
    ],
  },
  {
    slug: "prix-seance-sophrologie-2026",
    title: "Prix d'une séance de sophrologie en 2026 : tarifs et remboursement",
    description:
      "Combien coûte une séance de sophrologie en 2026 ? Tarifs moyens, variations régionales, remboursement mutuelle et CPF.",
    metier: "sophrologue",
    date: "2026-04-18",
    readTime: 4,
    intro:
      "La sophrologie séduit de plus en plus de Français pour gérer le stress, améliorer le sommeil ou accompagner une maladie. Mais les tarifs restent flous et peu encadrés. Voici les fourchettes réelles en 2026 et les possibilités de prise en charge.",
    sections: [
      { type: "h2", text: "Tarif moyen d'une séance individuelle" },
      {
        type: "p",
        text: "En 2026, une séance individuelle de sophrologie coûte en moyenne entre 50 et 80 euros. La durée standard est de 45 minutes à 1 heure. Les écarts s'expliquent par la formation du praticien, son expérience et la localisation du cabinet.",
      },
      { type: "h3", text: "Fourchettes par zone géographique" },
      {
        type: "ul",
        items: [
          "Paris intra-muros : 70 à 90 euros",
          "Grandes métropoles (Lyon, Marseille, Bordeaux) : 60 à 80 euros",
          "Villes moyennes : 50 à 65 euros",
          "Zones rurales : 40 à 60 euros",
        ],
      },
      { type: "h2", text: "Séances en groupe : une alternative économique" },
      {
        type: "p",
        text: "Les ateliers collectifs (4 à 10 personnes) coûtent entre 15 et 30 euros par séance. Efficaces pour apprendre les bases de la sophrologie, ils sont idéaux en complément d'un suivi individuel ou pour démarrer sans se ruiner. De nombreuses associations proposent des cycles de 8 à 10 séances à partir de 150 euros.",
      },
      { type: "h2", text: "Sophrologie en entreprise" },
      {
        type: "p",
        text: "Les interventions en entreprise sont facturées entre 80 et 200 euros de l'heure selon la taille du groupe et l'expérience du sophrologue. De plus en plus d'employeurs proposent des séances hebdomadaires financées dans le cadre de la qualité de vie au travail.",
      },
      { type: "h2", text: "Remboursement : ce qu'il faut savoir" },
      {
        type: "p",
        text: "La sophrologie n'est pas remboursée par l'Assurance maladie. En revanche, de nombreuses mutuelles prennent en charge tout ou partie des séances au titre des médecines douces, avec des forfaits allant de 100 à 500 euros par an. Vérifiez votre contrat : la rubrique s'appelle souvent médecines alternatives ou thérapies non conventionnelles.",
      },
      { type: "h2", text: "Cas particulier : la sophrologie sur prescription" },
      {
        type: "p",
        text: "Certaines cliniques et hôpitaux proposent la sophrologie dans le cadre d'un parcours de soins (cancer, douleur chronique, préparation à la naissance). Dans ces cas, les séances peuvent être gratuites ou à tarif très réduit. Parlez-en à votre médecin traitant ou à l'équipe soignante.",
      },
      { type: "h2", text: "Comment éviter les mauvaises surprises" },
      {
        type: "p",
        text: "La sophrologie n'est pas une profession réglementée : n'importe qui peut s'installer après une formation courte. Privilégiez les praticiens certifiés par la Chambre Syndicale de la Sophrologie ou la Fédération Française de Sophrologie, titulaires d'un titre RNCP. Demandez toujours le coût total du cycle recommandé avant de vous engager : un bon professionnel n'impose jamais un nombre de séances prédéfini.",
      },
      {
        type: "amazon",
        titre: "Pratiquer la sophrologie à la maison entre deux séances",
        produits: [
          { nom: "Tapis de sophrologie et yoga", description: "Épaisseur confort pour les exercices allongés de relaxation dynamique.", recherche: "tapis yoga sophrologie epais" },
          { nom: "Coussin de méditation rond", description: "Position assise stable pour les visualisations et la respiration consciente.", recherche: "coussin meditation zafu" },
          { nom: "Livre de sophrologie pour débutants", description: "Exercices guidés et théorie pour prolonger le travail du praticien chez vous.", recherche: "livre sophrologie debutant exercices" },
          { nom: "Casque audio méditation guidée", description: "Isolation confortable pour suivre des séances audio de relaxation sans être dérangé.", recherche: "casque audio meditation confortable" },
          { nom: "Diffuseur d'huiles essentielles relaxation", description: "Lavande, petit grain, ylang-ylang : ambiance propice à la détente profonde.", recherche: "diffuseur huiles essentielles ultrasonique" },
          { nom: "Brume d'oreiller à la lavande", description: "Spray apaisant à pulvériser avant le coucher, complément idéal des exercices de sommeil.", recherche: "brume oreiller lavande sommeil" },
        ],
      },
      {
        type: "cta",
        text: "Trouver un sophrologue dans votre ville",
        href: "/sophrologue",
      },
    ],
  },
  {
    slug: "naturopathe-ou-medecin-differences",
    title: "Naturopathe ou médecin : quelles différences et comment choisir",
    description:
      "Naturopathie et médecine classique : deux approches complémentaires. Comprendre leurs différences et savoir quand consulter l'un ou l'autre.",
    metier: "naturopathe",
    date: "2026-04-15",
    readTime: 5,
    intro:
      "Face à un souci de santé, faut-il voir son médecin généraliste ou consulter un naturopathe ? Les deux approches sont très différentes dans leurs objectifs, leurs méthodes et leur cadre légal. Voici comment les distinguer pour faire le bon choix.",
    sections: [
      { type: "h2", text: "Formation et cadre légal : un écart important" },
      {
        type: "p",
        text: "Un médecin généraliste suit 9 à 10 ans d'études supérieures, passe un internat, prête serment d'Hippocrate et est inscrit à l'Ordre des Médecins. Il peut prescrire des médicaments, arrêter le travail, poser des diagnostics et effectuer des examens cliniques.",
      },
      {
        type: "p",
        text: "Un naturopathe, lui, suit une formation de 1 à 4 ans dans une école privée, sans reconnaissance officielle de l'État en France. Le titre n'est pas protégé : il n'existe aucun diplôme national. Cela explique les énormes disparités de compétences entre praticiens.",
      },
      { type: "h2", text: "Philosophies opposées mais pas incompatibles" },
      {
        type: "p",
        text: "La médecine classique traite la maladie avec des molécules ciblées et des actes techniques. Elle est irremplaçable pour l'urgence, les maladies graves, le diagnostic précis. La naturopathie, elle, vise à entretenir la santé par l'hygiène de vie : alimentation, sommeil, gestion du stress, activité physique, plantes.",
      },
      {
        type: "p",
        text: "Les deux approches ne s'opposent pas forcément : de nombreux patients consultent leur médecin pour le diagnostic et le traitement, et un naturopathe pour l'accompagnement global. Plusieurs médecins intègrent aujourd'hui des conseils de naturopathie (phytothérapie, micronutrition) dans leur pratique.",
      },
      { type: "h2", text: "Quand voir un médecin en priorité" },
      {
        type: "ul",
        items: [
          "Douleur aiguë, saignement, fièvre inexpliquée",
          "Perte de poids rapide non voulue",
          "Boule ou grosseur suspecte",
          "Douleur thoracique, essoufflement, malaise",
          "Symptômes neurologiques (paralysie, trouble de la parole)",
          "Bilan régulier, vaccination, dépistage",
        ],
      },
      {
        type: "p",
        text: "Un naturopathe sérieux refuse de prendre en charge ces situations et oriente vers un médecin. Si un naturopathe vous propose de soigner un cancer avec des plantes ou de remplacer un traitement médical prescrit, fuyez immédiatement.",
      },
      { type: "h2", text: "Quand un naturopathe peut apporter un vrai plus" },
      {
        type: "ul",
        items: [
          "Fatigue chronique, troubles du sommeil",
          "Troubles digestifs fonctionnels (ballonnements, transit)",
          "Stress, anxiété légère, gestion émotionnelle",
          "Conseils nutritionnels pour le quotidien",
          "Accompagnement d'une ménopause, d'une perte de poids",
          "Prévention : renforcer son hygiène de vie",
        ],
      },
      { type: "h2", text: "Tarifs et remboursement" },
      {
        type: "p",
        text: "Une consultation chez le médecin généraliste coûte 30 euros (70 % remboursés par la Sécu). Une séance de naturopathie va de 50 à 90 euros, non remboursée par l'Assurance maladie mais parfois prise en charge par les mutuelles dans le forfait médecines douces.",
      },
      { type: "h2", text: "Comment choisir un naturopathe fiable" },
      {
        type: "p",
        text: "En l'absence de diplôme d'État, les seuls repères fiables sont l'appartenance à une fédération reconnue (FENA, OMNES), une formation sur au moins 1200 heures, et un praticien qui travaille en complémentarité avec les médecins. Un bon naturopathe commence toujours par un bilan de vitalité complet et ne promet jamais de guérison miracle.",
      },
      {
        type: "amazon",
        titre: "Les indispensables pour appliquer les conseils naturopathiques au quotidien",
        produits: [
          { nom: "Encyclopédie de naturopathie", description: "L'ouvrage de référence pour comprendre les fondements et appliquer les bonnes pratiques.", recherche: "encyclopedie naturopathie livre" },
          { nom: "Complément alimentaire spiruline bio", description: "Algue ultra-riche en fer, protéines et antioxydants : coup de fouet naturel.", recherche: "spiruline bio comprimes" },
          { nom: "Tisane détox bio", description: "Mélange de plantes (artichaut, romarin, pissenlit) pour soutenir le foie au quotidien.", recherche: "tisane detox bio foie" },
          { nom: "Huile essentielle de ravintsara bio", description: "L'incontournable de l'hiver : antivirale, tonique, validée par les naturopathes.", recherche: "huile essentielle ravintsara bio" },
          { nom: "Infuseur à thé en inox", description: "Pour préparer ses tisanes en vrac sans plastique ni sachet à risques.", recherche: "infuseur the inox boule" },
          { nom: "Capteur de niveau d'énergie / bracelet bien-être", description: "Suivi du sommeil, du stress et de l'activité pour objectiver les progrès naturopathiques.", recherche: "bracelet connecte sommeil stress" },
        ],
      },
      {
        type: "cta",
        text: "Trouver un naturopathe près de chez vous",
        href: "/naturopathe",
      },
    ],
  },
  {
    slug: "serrurier-urgence-eviter-arnaques",
    title: "Serrurier d'urgence : 8 pièges à éviter et comment payer juste",
    description:
      "Ouverture de porte, changement de serrure : les arnaques au serrurier d'urgence explosent. Comment reconnaître un bon pro et payer le juste prix.",
    metier: "serrurier",
    date: "2026-04-12",
    readTime: 5,
    intro:
      "Porte claquée, clés perdues, serrure forcée : l'urgence serrurier est l'une des situations les plus propices aux abus. Factures de 1500 euros pour une simple ouverture de porte, serrures changées inutilement, intervenants sans qualification : voici les 8 pièges les plus courants et comment les éviter.",
    sections: [
      { type: "h2", text: "1. Ne pas appeler le premier numéro trouvé" },
      {
        type: "p",
        text: "Les annuaires en ligne et les pages de tête Google sont truffés de sociétés intermédiaires qui sous-traitent à des artisans facturant au kilomètre. Leur modèle : capter la demande urgente, envoyer un exécutant et prendre une commission énorme. Le coût final est souvent 2 à 3 fois celui d'un serrurier local indépendant.",
      },
      { type: "h2", text: "2. Toujours exiger un devis écrit avant intervention" },
      {
        type: "p",
        text: "La loi impose un devis détaillé et signé avant tout travaux supérieurs à 150 euros, y compris en urgence. Refusez catégoriquement l'intervention si le serrurier prétend que ce n'est pas possible en situation d'urgence. C'est faux et illégal.",
      },
      { type: "h2", text: "3. Se méfier du diagnostic alarmiste" },
      {
        type: "p",
        text: "Un artisan peu scrupuleux vous dira souvent que votre serrure est percée, trop vieille, ou qu'il faut changer le cylindre et les 3 points. Dans 80 % des cas d'ouverture d'urgence (porte claquée avec les clés à l'intérieur), l'ouverture se fait sans abîmer la serrure, avec des outils fins (radio, ventouse). Aucun remplacement n'est nécessaire.",
      },
      { type: "h2", text: "4. Connaître les tarifs réels d'une ouverture" },
      {
        type: "ul",
        items: [
          "Ouverture porte claquée (serrure simple) : 80 à 180 euros",
          "Ouverture porte claquée (serrure haute sécurité) : 150 à 300 euros",
          "Ouverture porte fermée à clé : 150 à 400 euros",
          "Déblocage serrure bloquée : 100 à 250 euros",
          "Majoration nuit (20h-8h) : maximum +50 %",
          "Majoration dimanche/jour férié : maximum +100 %",
        ],
      },
      { type: "h2", text: "5. Refuser le remplacement immédiat" },
      {
        type: "p",
        text: "Même si un changement de serrure s'avère nécessaire après effraction, demandez un devis pour le remplacement et prenez le temps de comparer. Un cylindre standard coûte 40 à 120 euros ; un cylindre haute sécurité 150 à 400 euros. Certains intervenants facturent 600 à 1200 euros pour la même pièce trouvée en grande surface.",
      },
      { type: "h2", text: "6. Vérifier le SIRET et l'assurance" },
      {
        type: "p",
        text: "Avant toute intervention, demandez la carte professionnelle et notez le numéro SIRET. Vous pouvez vérifier en 30 secondes sur societe.com qu'il s'agit bien d'une entreprise déclarée. Un serrurier sérieux présente aussi une attestation d'assurance responsabilité civile et décennale.",
      },
      { type: "h2", text: "7. Payer par chèque ou carte, jamais en espèces" },
      {
        type: "p",
        text: "Le paiement par carte bancaire ou chèque laisse une trace et permet de faire opposition en cas d'abus manifeste. Méfiez-vous des intervenants qui n'acceptent que les espèces : c'est souvent le signe d'une activité non déclarée et d'une absence de recours.",
      },
      { type: "h2", text: "8. Exiger la facture détaillée" },
      {
        type: "p",
        text: "Toute intervention doit donner lieu à une facture mentionnant : nom et SIRET de l'entreprise, nature des travaux, temps passé, coût de la main-d'œuvre, prix des pièces, TVA. Sans facture, impossible de contester le prix ni de faire jouer l'assurance habitation (qui rembourse souvent une partie des frais de serrurerie après effraction).",
      },
      { type: "h2", text: "Le bon réflexe pour la prochaine fois" },
      {
        type: "p",
        text: "Avant même d'avoir un problème, repérez un serrurier local via votre mairie, vos voisins ou des avis Google vérifiés sur la durée. Notez son numéro dans vos contacts. Le jour où vous en aurez besoin, vous gagnerez du temps, de l'argent, et évitez à coup sûr l'arnaque.",
      },
      {
        type: "amazon",
        titre: "Sécuriser sa porte sans attendre l'effraction",
        produits: [
          { nom: "Cylindre haute sécurité A2P", description: "Standard d'assurance habitation : 5 goupilles, anti-perçage, anti-bumping.", recherche: "cylindre haute securite a2p" },
          { nom: "Cadenas anti-effraction", description: "Cadenas en acier trempé pour caves, garages et portails secondaires.", recherche: "cadenas anti effraction acier trempe" },
          { nom: "Kit d'ouverture porte claquée", description: "La fameuse carte rigide et tige plastique pour s'auto-dépanner sans casser la serrure.", recherche: "kit ouverture porte claquee" },
          { nom: "Boîte à clés sécurisée à code", description: "Pour laisser un double aux proches ou à une aide-ménagère sans risque.", recherche: "boite cle securisee code exterieur" },
          { nom: "Alarme connectée pour porte d'entrée", description: "Capteur d'ouverture avec notifications smartphone : dissuasion immédiate.", recherche: "alarme porte connectee wifi" },
          { nom: "Sonnette vidéo avec caméra", description: "Voir et enregistrer qui sonne, même absent : indispensable en cas de démarchage suspect.", recherche: "sonnette video camera connectee" },
        ],
      },
      {
        type: "cta",
        text: "Trouver un serrurier fiable près de chez vous",
        href: "/serrurier",
      },
    ],
  },
  {
    slug: "budget-photographe-mariage-2026",
    title: "Photographe de mariage : quel budget prévoir en 2026 ?",
    description:
      "Prix moyen d'un photographe de mariage en 2026 : forfaits, options, retouche, livre photo. Ce qui influence vraiment le tarif.",
    metier: "photographe",
    date: "2026-04-10",
    readTime: 5,
    intro:
      "Le photographe est l'un des postes les plus importants du budget mariage. Les tarifs varient du simple au quintuple selon le style, la durée de présence et la notoriété du professionnel. Voici les fourchettes réelles en 2026 et ce qui justifie vraiment les écarts.",
    sections: [
      { type: "h2", text: "Budget moyen en 2026" },
      {
        type: "p",
        text: "Un mariage standard se photographie entre 1500 et 3500 euros pour une journée complète. Les forfaits d'entrée de gamme démarrent à 800-1200 euros (demi-journée avec 200 photos retouchées), les très bons photographes locaux se situent entre 2000 et 3500 euros, et les grands noms spécialisés mariage peuvent dépasser 6000 euros.",
      },
      { type: "h2", text: "Ce qui est inclus dans un forfait type" },
      {
        type: "ul",
        items: [
          "Préparatifs des mariés (1 à 2 heures)",
          "Cérémonie civile et/ou religieuse",
          "Séance couple et photos de groupe",
          "Vin d'honneur et début de soirée",
          "Livraison : 300 à 800 photos retouchées en haute définition",
          "Galerie en ligne partageable",
          "Droits d'utilisation personnelle",
        ],
      },
      { type: "h2", text: "Les options qui font grimper le budget" },
      { type: "h3", text: "Second photographe" },
      {
        type: "p",
        text: "Un deuxième opérateur permet de couvrir les deux mariés en parallèle lors des préparatifs et d'avoir des angles différents pendant la cérémonie. Comptez 400 à 800 euros en supplément.",
      },
      { type: "h3", text: "Vidéaste associé" },
      {
        type: "p",
        text: "Certains photographes proposent un pack photo + vidéo à 3500-6000 euros. L'alternative : faire appel à un vidéaste indépendant, souvent plus flexible et meilleur sur la post-production.",
      },
      { type: "h3", text: "Livre photo" },
      {
        type: "p",
        text: "Un album haut de gamme 30x30 cm avec 60 pages coûte entre 350 et 800 euros. La qualité de fabrication (reliure cousue, papier photo premium) justifie la différence de prix avec les livres grand public.",
      },
      { type: "h3", text: "Drone, séance engagement, tirages" },
      {
        type: "p",
        text: "Les prises de vue drone ajoutent 200 à 500 euros (vérifier la certification DGAC). La séance engagement avant le mariage est souvent incluse ou facturée 250-400 euros. Les tirages papier sont vendus en options entre 5 et 30 euros l'unité.",
      },
      { type: "h2", text: "Ce qui justifie vraiment un tarif élevé" },
      {
        type: "p",
        text: "Au-delà de la notoriété, un tarif élevé se justifie par : un matériel haut de gamme (boîtiers full-frame, objectifs lumineux, éclairage pro), une assurance responsabilité civile pro, une expérience de 50+ mariages, un temps de retouche approfondi (10-15 heures minimum), un second photographe inclus.",
      },
      {
        type: "p",
        text: "À l'inverse, méfiez-vous des tarifs très bas (moins de 800 euros pour une journée complète). Ils impliquent souvent un matériel amateur, peu de retouches, et un risque important de résultat décevant le jour J. Un mariage ne se recommence pas : l'économie initiale peut coûter cher.",
      },
      { type: "h2", text: "Comment choisir le bon photographe" },
      {
        type: "ol",
        items: [
          "Regarder au moins 3 reportages mariage complets (pas juste une sélection)",
          "Vérifier que le style de retouche correspond à vos goûts",
          "Rencontrer le photographe en personne avant signature",
          "Demander le contrat écrit (acompte, délais de livraison, plan B en cas d'empêchement)",
          "Lire les avis sur Google et Mariages.net",
          "Confirmer la date et le délai de livraison (2 à 4 mois après le mariage)",
        ],
      },
      {
        type: "amazon",
        titre: "Mettre en valeur les photos de votre mariage après la livraison",
        produits: [
          { nom: "Cadre photo mariage premium", description: "Cadre en bois massif ou laiton pour sublimer la photo emblématique du jour J.", recherche: "cadre photo mariage premium bois" },
          { nom: "Album photo en lin", description: "Album à pages épaisses, couverture lin naturel : la qualité durable pour les souvenirs.", recherche: "album photo lin mariage" },
          { nom: "Cadre photo numérique HD", description: "Diffuser en boucle les centaines de clichés du mariage dans le salon.", recherche: "cadre photo numerique haute definition" },
          { nom: "Clé USB en bois personnalisée", description: "Présentation soignée pour offrir la galerie complète à vos parents ou témoins.", recherche: "cle usb bois personnalisee mariage" },
          { nom: "Livre d'inspiration photographie de mariage", description: "Comprendre les styles (fine art, photojournalistique, lifestyle) avant de choisir.", recherche: "livre photographie mariage inspiration" },
          { nom: "Miroir lumineux à LED", description: "Pour les préparatifs mariée : éclairage uniforme parfait pour les photos make-up.", recherche: "miroir lumineux led maquillage mariee" },
        ],
      },
      {
        type: "cta",
        text: "Trouver un photographe de mariage près de chez vous",
        href: "/photographe",
      },
    ],
  },
  {
    slug: "coach-sportif-domicile-ou-salle",
    title: "Coach sportif à domicile ou en salle : lequel choisir en 2026 ?",
    description:
      "Coaching sportif à domicile ou en salle : comparatif des tarifs, avantages et limites pour choisir la formule adaptée à vos objectifs.",
    metier: "coach-sportif",
    date: "2026-04-08",
    readTime: 4,
    intro:
      "Se faire accompagner par un coach sportif transforme les résultats, à condition de choisir la bonne formule. Entre coaching à domicile, en salle dédiée ou en extérieur, les différences de tarifs et de résultats sont significatives. Comparatif honnête.",
    sections: [
      { type: "h2", text: "Tarifs moyens constatés en 2026" },
      {
        type: "ul",
        items: [
          "Coach à domicile : 60 à 100 euros par séance d'1 heure",
          "Coach en salle privée (studio personnalisé) : 70 à 120 euros",
          "Coach en salle de sport classique : 50 à 80 euros",
          "Coach en extérieur (parc, plage) : 50 à 90 euros",
          "Séances en binôme : divisées par deux par personne, généralement",
          "Forfaits 10 séances : réduction de 10 à 20 %",
        ],
      },
      { type: "h2", text: "Coaching à domicile : les atouts" },
      {
        type: "p",
        text: "Gain de temps maximal : zéro trajet, séance dès qu'elle est finie. Horaires totalement flexibles : tôt le matin, pause déjeuner, après le travail. Idéal pour les personnes à l'emploi du temps chargé, les parents de jeunes enfants ou celles qui redoutent le regard des autres en salle.",
      },
      { type: "h2", text: "Coaching à domicile : les limites" },
      {
        type: "p",
        text: "Le matériel disponible est forcément limité : haltères, élastiques, tapis suffisent pour 80 % des objectifs (remise en forme, perte de poids, gainage). En revanche, pour la musculation avancée, le travail cardio intensif ou la préparation sportive spécifique, l'équipement d'une salle est irremplaçable. Attention aussi aux appartements peu adaptés : plafond bas, voisinage bruyant, manque de place.",
      },
      { type: "h2", text: "Coaching en salle : quand c'est pertinent" },
      {
        type: "p",
        text: "La salle de sport est incontournable pour la préparation physique athlétique, la prise de masse musculaire, le renforcement sur machines guidées, le rééducation progressive après blessure. De nombreux coachs indépendants louent un créneau dans une salle partenaire, sans que vous ayez à payer un abonnement supplémentaire.",
      },
      { type: "h2", text: "Coaching en extérieur : l'option bien-être" },
      {
        type: "p",
        text: "Course, circuit training, boot camp, yoga : l'extérieur offre variété et stimulation mentale. Tarifs souvent plus abordables, pas de matériel à acheter, bénéfice vitamine D et grand air. Limite principale : la météo, et le cadre pas toujours adapté en centre-ville dense.",
      },
      { type: "h2", text: "Comment choisir le bon coach" },
      {
        type: "p",
        text: "Au-delà du lieu, la qualification du coach prime. Exigez un diplôme d'État : BPJEPS AF (Activités de la Forme), DEJEPS, ou diplôme universitaire STAPS. Ces diplômes garantissent une formation en anatomie, physiologie et programmation d'entraînement. Méfiez-vous des coachs autoproclamés avec seulement une certification en ligne.",
      },
      {
        type: "p",
        text: "Demandez à votre coach s'il propose un bilan initial complet : objectifs, antécédents médicaux, mesures, tests physiques. Un professionnel sérieux consacre la première séance à ce bilan et refuse de commencer sans évaluation de base.",
      },
      { type: "h2", text: "Combien de séances pour voir des résultats ?" },
      {
        type: "p",
        text: "Une séance hebdomadaire combinée à 2-3 entraînements autonomes produit des résultats visibles en 8 à 12 semaines. Un suivi de 3 à 6 mois est généralement nécessaire pour ancrer les bonnes habitudes et atteindre un objectif solide (perte de poids, prise de masse, préparation d'un événement).",
      },
      {
        type: "amazon",
        titre: "Le matériel pour s'entraîner à domicile entre deux séances",
        produits: [
          { nom: "Tapis de fitness antidérapant", description: "Confort articulations pour gainage, abdos et étirements sur sol dur.", recherche: "tapis fitness antiderapant" },
          { nom: "Set d'élastiques de résistance", description: "5 niveaux de résistance : alternative compacte aux haltères pour tout le corps.", recherche: "elastiques resistance set" },
          { nom: "Kit d'haltères ajustables", description: "De 2 à 24 kg en quelques secondes : gain de place et progression sans limite.", recherche: "halteres ajustables 24kg" },
          { nom: "Ballon suisse fitness", description: "Travail de la sangle abdominale et de la stabilité, validé par tous les coachs.", recherche: "ballon suisse fitness gym ball" },
          { nom: "Kit suspension TRX", description: "Le système de sangles plébiscité pour le poids du corps complet sans machine.", recherche: "trx suspension training kit" },
          { nom: "Montre cardio GPS", description: "Suivi fréquence cardiaque, calories et VO2 max pour mesurer les progrès objectivement.", recherche: "montre cardio gps sport" },
          { nom: "Corde à sauter pro lestée", description: "20 minutes = 400 calories : l'outil cardio le plus efficace par mètre carré.", recherche: "corde sauter pro lestee" },
          { nom: "Bouteille shaker protéine", description: "Pour préparer ses shakes ou son eau citron-BCAA avant chaque séance.", recherche: "shaker proteine bouteille sport" },
        ],
      },
      {
        type: "cta",
        text: "Trouver un coach sportif dans votre ville",
        href: "/coach-sportif",
      },
    ],
  },
  {
    slug: "hypnotherapie-prix-indications",
    title: "Hypnothérapie : prix, indications et déroulement d'une séance",
    description:
      "Tout savoir avant une séance d'hypnothérapie : prix moyen, pathologies traitées, nombre de séances nécessaires et critères pour choisir.",
    metier: "hypnotherapeute",
    date: "2026-04-05",
    readTime: 5,
    intro:
      "L'hypnothérapie s'est imposée comme un outil sérieux pour traiter de nombreux troubles, du tabagisme aux phobies en passant par l'insomnie. Mais le marché est devenu très hétérogène. Tour d'horizon des prix, indications et pièges à éviter en 2026.",
    sections: [
      { type: "h2", text: "Prix moyen d'une séance" },
      {
        type: "p",
        text: "Une séance d'hypnothérapie coûte en moyenne 70 à 120 euros en 2026, pour une durée de 1 heure à 1h30. Les tarifs varient selon la zone géographique et la spécialisation du praticien. À Paris, une séance chez un hypnothérapeute réputé peut monter à 150-200 euros.",
      },
      {
        type: "p",
        text: "Certaines prestations spécifiques sont facturées en forfait : arrêt du tabac en 1 à 3 séances pour 150-350 euros, perte de poids sur 4-6 séances pour 400-800 euros, traitement d'une phobie sur 3-5 séances pour 300-600 euros.",
      },
      { type: "h2", text: "Pour quelles problématiques ça fonctionne" },
      {
        type: "ul",
        items: [
          "Arrêt du tabac (efficacité démontrée dans plusieurs études)",
          "Troubles anxieux, phobies spécifiques (avion, dentiste, ascenseur)",
          "Troubles du sommeil, insomnie chronique",
          "Gestion du stress et des émotions",
          "Douleurs chroniques (fibromyalgie, migraines, douleurs post-chirurgicales)",
          "Troubles alimentaires légers (grignotage, compulsions)",
          "Préparation mentale (examens, prise de parole, compétition)",
          "Accompagnement psychothérapeutique en complément d'un suivi classique",
        ],
      },
      { type: "h2", text: "Quand l'hypnothérapie n'est pas adaptée" },
      {
        type: "p",
        text: "L'hypnose est contre-indiquée en cas de troubles psychiatriques lourds non stabilisés : schizophrénie, troubles dissociatifs, paranoïa, états psychotiques. Elle ne remplace jamais un traitement médical pour les dépressions sévères ou les troubles bipolaires. Un bon hypnothérapeute refuse la prise en charge dans ces situations et oriente vers un psychiatre.",
      },
      { type: "h2", text: "Déroulement d'une première séance" },
      {
        type: "p",
        text: "La première séance dure souvent 1h30. Elle commence par un long échange sur votre problématique, votre histoire, vos attentes. L'hypnothérapeute vous explique ensuite ce qu'est l'hypnose (état de conscience modifié, totalement conscient, sans perte de contrôle) et répond à vos questions.",
      },
      {
        type: "p",
        text: "La phase d'hypnose proprement dite dure 20 à 40 minutes. Vous restez assis ou allongé, les yeux fermés, en pleine conscience de ce qui se passe autour de vous. Rien ne peut vous être imposé contre votre volonté : c'est l'un des grands malentendus sur l'hypnose.",
      },
      { type: "h2", text: "Combien de séances sont nécessaires ?" },
      {
        type: "p",
        text: "L'hypnothérapie se distingue des psychothérapies longues par son efficacité rapide. La plupart des motifs de consultation se traitent en 3 à 6 séances. Si après 5-6 séances aucun progrès notable n'apparaît, il faut interroger l'approche : soit le problème dépasse le cadre de l'hypnose, soit le praticien n'est pas adapté.",
      },
      { type: "h2", text: "Comment choisir un hypnothérapeute fiable" },
      {
        type: "p",
        text: "Le titre d'hypnothérapeute n'est pas protégé : vérifiez impérativement la formation. Privilégiez un praticien titulaire d'une formation reconnue (Milton Erickson, nouvelle hypnose, hypnose humaniste) validée par un organisme professionnel : Confédération Francophone d'Hypnose et Thérapies Brèves, SFH, AFHYP.",
      },
      {
        type: "p",
        text: "Certains professionnels de santé (médecins, dentistes, sages-femmes, psychologues) se sont formés à l'hypnose médicale (IFH, EFH). Ce double profil offre une sécurité supplémentaire car le praticien reste soumis à un code de déontologie.",
      },
      { type: "h2", text: "Remboursement" },
      {
        type: "p",
        text: "Les séances d'hypnothérapie ne sont pas remboursées par l'Assurance maladie, sauf quand elles sont pratiquées par un médecin ou un psychologue conventionné (dans ce cas, seule la consultation médicale est remboursée, pas la technique elle-même). De nombreuses mutuelles proposent un forfait médecines douces qui peut couvrir 100 à 400 euros par an.",
      },
      {
        type: "amazon",
        titre: "Prolonger les bénéfices de l'hypnose chez soi",
        produits: [
          { nom: "Livre d'auto-hypnose", description: "Méthode pas à pas pour pratiquer seul entre deux séances avec le thérapeute.", recherche: "livre auto hypnose methode" },
          { nom: "Casque audio dédié sommeil", description: "Bandeau ultra-fin, audio sans fil pour s'endormir avec une séance guidée.", recherche: "casque audio sommeil bandeau" },
          { nom: "Masque de sommeil ergonomique", description: "Modèle 3D qui ne presse pas les yeux, idéal pour les insomniaques.", recherche: "masque sommeil ergonomique 3d" },
          { nom: "Audio méditation guidée et hypnose", description: "Programmes thématiques (anxiété, tabac, confiance) à écouter en autonomie.", recherche: "audio meditation hypnose guidee" },
          { nom: "Journal de pleine conscience", description: "Carnet structuré pour noter émotions, déclencheurs et progrès entre les séances.", recherche: "journal pleine conscience carnet" },
          { nom: "Sons de bols tibétains", description: "Vibrations apaisantes pour induire l'état hypnotique et ralentir le mental.", recherche: "bols tibetains sons relaxation" },
        ],
      },
      {
        type: "cta",
        text: "Trouver un hypnothérapeute près de chez vous",
        href: "/hypnotherapeute",
      },
    ],
  },
  {
    slug: "demenageur-pieges-eviter",
    title: "Déménageur professionnel : 10 pièges à éviter avant de signer",
    description:
      "Arnaque au déménageur, devis flous, frais cachés : les 10 pièges les plus fréquents et comment choisir un professionnel fiable.",
    metier: "demenageur",
    date: "2026-04-02",
    readTime: 6,
    intro:
      "Le secteur du déménagement est malheureusement connu pour ses abus : devis sous-estimés, surfacturation le jour J, objets cassés sans indemnisation. Voici les 10 pièges les plus fréquents en 2026 et les réflexes pour les éviter.",
    sections: [
      { type: "h2", text: "1. Le devis trop bas qui explose le jour J" },
      {
        type: "p",
        text: "Règle n°1 : un devis sérieux est réalisé après visite à domicile, physique ou en visio. Un devis par téléphone sur simple description verbale est toujours approximatif et invite aux suppléments. Si un déménageur accepte de chiffrer sans voir le volume, méfiez-vous : il rattrapera les écarts le jour même.",
      },
      { type: "h2", text: "2. L'absence de numéro de transporteur" },
      {
        type: "p",
        text: "Toute entreprise de déménagement doit être inscrite au registre des transporteurs et posséder une licence (à demander à la DREAL). Ce numéro doit figurer sur le devis. Sans licence, l'entreprise n'a aucune obligation d'assurance vis-à-vis de vos biens transportés : vous êtes sans recours en cas de casse.",
      },
      { type: "h2", text: "3. Le forfait déménagement sans détail" },
      {
        type: "p",
        text: "Un devis sérieux détaille : volume estimé (en m³), nombre de déménageurs, type de véhicule, durée estimée, distance, emballage fourni ou non, démontage/remontage des meubles, accès (étage, monte-meuble nécessaire ?). Un forfait global à 1500 euros sans détail est un drapeau rouge.",
      },
      { type: "h2", text: "4. Les frais d'accès cachés" },
      {
        type: "p",
        text: "Vérifiez que le devis inclut tout ce qui complique l'accès : étage sans ascenseur, nombre de marches, distance entre le camion et la porte, stationnement payant ou monte-meuble. Ces surcoûts sont souvent ajoutés le jour du déménagement si le devis initial ne les mentionne pas.",
      },
      { type: "h2", text: "5. La mauvaise formule : économique, standard ou luxe" },
      {
        type: "p",
        text: "Trois formules classiques existent : économique (vous emballez tout), standard (emballage de la vaisselle et objets fragiles par le déménageur), luxe (tout est emballé, démonté, remonté). L'écart de prix peut aller du simple au triple. Choisissez en fonction de votre temps disponible et de la valeur des objets à transporter.",
      },
      { type: "h2", text: "6. L'assurance contractuelle insuffisante" },
      {
        type: "p",
        text: "L'assurance de base (ou garantie contractuelle) indemnise sur une valeur forfaitaire par kilogramme, souvent très faible (autour de 250 euros/m³). Pour des biens précieux (mobilier design, œuvres d'art, haute-fidélité), souscrivez une déclaration de valeur qui couvre la valeur réelle des objets, contre un supplément de 1 à 3 % de la valeur déclarée.",
      },
      { type: "h2", text: "7. Le paiement intégral avant déménagement" },
      {
        type: "p",
        text: "Un acompte de 20 à 30 % à la signature est normal. Le solde doit être réglé à la livraison, après vérification des biens. Refusez tout paiement intégral d'avance : c'est illégal dans le secteur du déménagement et vous prive de tout levier en cas de problème.",
      },
      { type: "h2", text: "8. L'absence de lettre de voiture" },
      {
        type: "p",
        text: "La lettre de voiture est le document qui formalise le transport : inventaire détaillé, état des biens, signatures au départ et à l'arrivée. Sans ce document, aucune indemnisation n'est possible en cas de casse ou de perte. Exigez-le systématiquement.",
      },
      { type: "h2", text: "9. Les avis trop parfaits" },
      {
        type: "p",
        text: "Méfiez-vous des sociétés affichant 200 avis 5 étoiles sur un an. Croisez les sources : Google, Trustpilot, Pages Jaunes, mais aussi les forums de consommateurs. Une bonne entreprise a forcément quelques avis négatifs sur plusieurs années, avec des réponses argumentées du gérant.",
      },
      { type: "h2", text: "10. Le jour J, les réflexes indispensables" },
      {
        type: "ul",
        items: [
          "Vérifier l'inventaire avant le chargement, noter les objets déjà endommagés",
          "Photographier les biens fragiles emballés",
          "Contrôler l'inventaire à la livraison, AVANT de signer",
          "Noter sur la lettre de voiture toute réserve (boîte abîmée, meuble rayé)",
          "Conserver le double de tous les documents",
          "Déclarer la casse dans les 10 jours à l'entreprise par lettre recommandée",
        ],
      },
      { type: "h2", text: "Bonus : comment réduire la facture" },
      {
        type: "p",
        text: "Déménager hors période haute (été, fin de mois, rentrée) peut réduire le tarif de 20 à 40 %. Un déménagement groupé (partage d'un camion avec un autre client sur le même trajet) divise aussi les coûts. Enfin, les aides Action Logement (jusqu'à 1000 euros) ou la prime CAF peuvent couvrir une partie des frais selon votre situation.",
      },
      {
        type: "amazon",
        titre: "S'équiper pour préparer son déménagement et économiser sur la formule",
        produits: [
          { nom: "Pack de cartons de déménagement assortis", description: "Tailles standards + cartons penderie : la base pour bien commencer l'emballage.", recherche: "cartons demenagement pack assortiment" },
          { nom: "Scotch armé renforcé", description: "Rouleaux ultra-résistants pour fermer les cartons lourds sans qu'ils s'ouvrent.", recherche: "scotch arme renforce demenagement" },
          { nom: "Papier bulle XL", description: "Grands rouleaux pour vaisselle, miroirs et objets fragiles : indispensable.", recherche: "papier bulle xl rouleau" },
          { nom: "Sangles à cliquet de transport", description: "Sécuriser les meubles dans le camion ou la remorque pour éviter la casse.", recherche: "sangles cliquet transport meubles" },
          { nom: "Diable pliable de déménagement", description: "Transporter cartons et électroménager seul, jusqu'à 150 kg, gain de dos énorme.", recherche: "diable pliable demenagement 150kg" },
          { nom: "Marqueurs permanents gros trait", description: "Étiqueter clairement chaque carton par pièce et contenu : gain de temps à l'arrivée.", recherche: "marqueurs permanents gros trait noir" },
          { nom: "Housses de protection matelas", description: "Housse plastique avec poignées pour transporter matelas sans tache ni humidité.", recherche: "housse protection matelas demenagement" },
        ],
      },
      {
        type: "cta",
        text: "Trouver un déménageur fiable dans votre ville",
        href: "/demenageur",
      },
    ],
  },

  // === ARTICLES DIY (NOUVEAUX) ===
  {
    slug: "comment-deboucher-evier-sans-plombier",
    title: "Comment déboucher un évier sans plombier : 5 méthodes efficaces",
    description: "Évier bouché ? 5 méthodes pour le déboucher rapidement sans plombier : ventouse, bicarbonate, furet, produits chimiques. Économisez 100€.",
    metier: "plombier",
    date: "2026-05-16",
    readTime: 7,
    intro:
      "Un évier bouché, c'est souvent l'urgence du dimanche soir, juste avant l'arrivée des invités. Pas de panique : dans 8 cas sur 10, vous pouvez le déboucher vous-même en 15 minutes pour quelques euros, plutôt que d'appeler un plombier à 150 € la visite. Voici les 5 méthodes qui marchent vraiment, par ordre de difficulté.",
    sections: [
      { type: "h2", text: "1. La ventouse, l'arme universelle" },
      { type: "p", text: "C'est la première chose à essayer, et souvent la plus efficace. Bouchez le trop-plein avec un chiffon humide pour créer un vide étanche. Versez quelques centimètres d'eau dans l'évier pour couvrir la coupelle de la ventouse. Pompez énergiquement 10 à 20 fois, en alternant pression et aspiration. Le bouchon (cheveux, restes alimentaires) remonte généralement à la surface." },
      { type: "p", text: "Pour les éviers très bouchés, utilisez une ventouse professionnelle à manche long et coupelle large : elle développe bien plus de pression qu'une ventouse classique de cuisine." },
      {
        type: "amazon",
        titre: "Le matériel pour déboucher efficacement",
        produits: [
          { nom: "Ventouse pro coupelle large", description: "Crée bien plus de pression qu'une ventouse standard", recherche: "ventouse professionnelle debouchage" },
          { nom: "Furet de plomberie 5m", description: "Atteint les bouchons profonds dans la canalisation", recherche: "furet plomberie 5 metres" },
          { nom: "Déboucheur naturel bicarbonate + vinaigre", description: "Solution écologique sans danger pour les canalisations", recherche: "deboucheur naturel bicarbonate vinaigre" },
          { nom: "Pistolet déboucheur à air", description: "Pression d'air haute efficacité, alternative aux produits chimiques", recherche: "pistolet deboucheur air canalisation" },
        ],
      },
      { type: "h2", text: "2. Bicarbonate + vinaigre blanc : la méthode naturelle" },
      { type: "p", text: "Versez d'abord une casserole d'eau bouillante dans l'évier. Ensuite, versez 200 g de bicarbonate de soude, puis 200 ml de vinaigre blanc. La réaction chimique mousse abondamment — c'est normal. Laissez agir 30 minutes, puis rincez avec une nouvelle casserole d'eau bouillante." },
      { type: "p", text: "Cette méthode dissout les graisses et les résidus organiques sans abîmer les canalisations. Parfaite en entretien préventif tous les mois." },
      { type: "h2", text: "3. Le furet de plomberie pour les bouchons profonds" },
      { type: "p", text: "Si le bouchon est plus loin dans la canalisation, le furet est indispensable. Démontez le siphon sous l'évier (placez un seau dessous, ça va déborder). Insérez le furet dans la canalisation murale et tournez la manivelle pour faire avancer la spirale métallique. Quand vous sentez une résistance : tournez plus fort pour casser le bouchon, puis retirez lentement." },
      { type: "p", text: "Un furet de 5 mètres suffit pour 95 % des cas domestiques. Pour les copropriétés avec canalisations longues, optez pour 10 mètres." },
      { type: "h2", text: "4. Démonter et nettoyer le siphon" },
      { type: "p", text: "Si rien d'autre ne marche, démontez le siphon (la pièce en U sous l'évier). Placez un seau dessous, dévissez les deux bagues plastiques, et nettoyez l'intérieur. C'est souvent là que se logent cheveux, graisses figées et déchets. Profitez-en pour changer les joints si besoin." },
      { type: "h2", text: "5. Le déboucheur chimique en dernier recours" },
      { type: "p", text: "Les produits type Destop ou similaires sont efficaces mais agressifs pour les canalisations (surtout en PVC). À utiliser seulement en dernier recours, jamais sur un évier en inox ou émaillé sans protection. Respectez scrupuleusement les consignes de sécurité (gants, lunettes, aération)." },
      { type: "h2", text: "Quand appeler un plombier ?" },
      { type: "p", text: "Si aucune méthode ne fonctionne après 1 heure d'essais, le bouchon est probablement très profond ou structurel. Faites appel à un plombier — mais demandez TOUJOURS un devis ferme par téléphone avant intervention pour éviter les arnaques." },
      {
        type: "cta",
        text: "Trouver un plombier près de chez vous",
        href: "/plombier",
      },
    ],
  },
  {
    slug: "changer-joint-robinet-soi-meme",
    title: "Changer un joint de robinet qui fuit : tutoriel pas à pas",
    description: "Robinet qui goutte ? Apprenez à changer le joint vous-même en 15 minutes. Économisez le plombier (80-120 €) et arrêtez le gaspillage d'eau.",
    metier: "plombier",
    date: "2026-05-16",
    readTime: 6,
    intro:
      "Un robinet qui goutte, c'est 5 litres d'eau gaspillés par jour, soit 1 800 litres par an. Un joint usé coûte 2 € et se remplace en 15 minutes avec des outils basiques. Inutile d'appeler un plombier à 80 €. Voici le tuto pas à pas pour changer un joint de robinet, valable pour la quasi-totalité des modèles classiques.",
    sections: [
      { type: "h2", text: "Identifier le type de robinet" },
      { type: "p", text: "Avant tout, identifiez votre robinet. Les deux types les plus courants : (1) le robinet classique à deux poignées (eau chaude/eau froide séparées) avec un joint en caoutchouc à l'intérieur de chaque poignée, et (2) le mitigeur monocommande avec une cartouche céramique. Pour ce tuto, on traite le robinet classique — le plus simple à réparer." },
      { type: "h2", text: "Les outils nécessaires" },
      {
        type: "amazon",
        titre: "Tout le matériel pour changer un joint",
        produits: [
          { nom: "Kit complet joints robinetterie", description: "Assortiment de tous les joints standards français", recherche: "kit joints robinetterie assortiment" },
          { nom: "Clé à molette ajustable", description: "Outil indispensable pour démonter le robinet", recherche: "cle a molette plomberie" },
          { nom: "Tournevis cruciforme et plat", description: "Pour démonter la poignée", recherche: "tournevis cruciforme plat set" },
          { nom: "Téflon ruban étanchéité", description: "Pour assurer l'étanchéité au remontage", recherche: "teflon ruban etancheite plomberie" },
        ],
      },
      { type: "h2", text: "Étape 1 : Couper l'eau" },
      { type: "p", text: "Cherchez les vannes d'arrêt sous l'évier ou la vasque (généralement 2 petites vannes sur les arrivées eau chaude / eau froide). Tournez-les à fond dans le sens horaire pour couper. À défaut, coupez l'arrivée d'eau générale au compteur." },
      { type: "p", text: "Ouvrez ensuite le robinet pour purger les tuyaux et libérer la pression résiduelle." },
      { type: "h2", text: "Étape 2 : Démonter la poignée" },
      { type: "p", text: "Repérez la vis de fixation de la poignée — souvent cachée sous un petit cache plastique de couleur (rouge ou bleu). Soulevez-le avec un tournevis plat. Dévissez la vis cruciforme en dessous et retirez la poignée." },
      { type: "h2", text: "Étape 3 : Démonter la tête du robinet" },
      { type: "p", text: "Avec une clé à molette, dévissez la grosse vis hexagonale (la 'tête') qui retient le mécanisme. Tirez doucement pour sortir la tête. Vous verrez le joint au bout — c'est lui le coupable de la fuite." },
      { type: "h2", text: "Étape 4 : Remplacer le joint" },
      { type: "p", text: "Le joint est maintenu par une petite vis ou simplement coincé dans son logement. Retirez-le et mettez-le à plat à côté de votre kit de joints pour identifier la bonne taille (généralement 12, 14, 16 ou 18 mm de diamètre). Placez le nouveau joint exactement à la même position." },
      { type: "h2", text: "Étape 5 : Remonter et tester" },
      { type: "p", text: "Remontez dans l'ordre inverse : tête du robinet (avec ruban téflon sur le filetage pour l'étanchéité), poignée, vis, cache. Ouvrez doucement les vannes d'arrêt. Testez le robinet : il ne doit plus goutter. Si la fuite persiste, c'est probablement la cartouche complète qu'il faut changer (30 € environ) — toujours faisable soi-même." },
      { type: "h2", text: "Astuce préventive" },
      { type: "p", text: "Pour éviter l'usure prématurée des joints : ne forcez jamais à la fermeture du robinet. Une fermeture délicate suffit. Si vous devez serrer fort pour stopper le filet d'eau, c'est que le joint est déjà à changer." },
      {
        type: "cta",
        text: "Besoin d'un plombier ? Comparez les tarifs",
        href: "/plombier",
      },
    ],
  },
  {
    slug: "reparer-chasse-eau-qui-coule",
    title: "Réparer une chasse d'eau qui coule en continu : guide complet",
    description: "Chasse d'eau qui fuit ? Identifiez la cause (flotteur, joint, mécanisme) et réparez en 30 min. Économisez jusqu'à 200 € d'eau par an.",
    metier: "plombier",
    date: "2026-05-16",
    readTime: 8,
    intro:
      "Une chasse d'eau qui coule en permanence, c'est 200 litres d'eau gaspillés par jour — soit 200 € sur votre facture annuelle. La cause est presque toujours mécanique : flotteur déréglé, joint usé ou mécanisme entartré. Et la bonne nouvelle, c'est que vous pouvez réparer ça vous-même en 30 minutes avec 5 € de pièces.",
    sections: [
      { type: "h2", text: "Diagnostiquer le problème" },
      { type: "p", text: "Soulevez le couvercle du réservoir (attention, il est lourd et fragile). Vous voyez deux mécanismes : (1) le robinet flotteur (qui contrôle le remplissage) et (2) le clapet de chasse (qui libère l'eau au moment de la chasse). Selon où l'eau s'écoule, le problème est différent." },
      { type: "p", text: "Si l'eau coule dans la cuvette en permanence : c'est le clapet qui ne ferme pas bien. Si l'eau coule par le trop-plein du réservoir : c'est le flotteur qui ne coupe pas." },
      { type: "h2", text: "Solution 1 : Régler le flotteur" },
      { type: "p", text: "Si le flotteur est trop haut, l'eau dépasse le trop-plein et s'écoule sans arrêt. Sur un flotteur à boule : tordez la tige vers le bas. Sur un flotteur cylindrique moderne : ajustez la vis de réglage pour abaisser le niveau d'eau de 1-2 cm sous le trop-plein." },
      {
        type: "amazon",
        titre: "Pièces de rechange chasse d'eau",
        produits: [
          { nom: "Mécanisme chasse d'eau complet universel", description: "Remplace toute la mécanique en une fois", recherche: "mecanisme chasse eau complet universel" },
          { nom: "Robinet flotteur silencieux", description: "Anti-bruit, économie d'eau", recherche: "robinet flotteur silencieux" },
          { nom: "Joint chasse d'eau bonde", description: "Joint de remplacement standard", recherche: "joint chasse eau bonde" },
          { nom: "Détartrant anti-calcaire WC", description: "Nettoie le mécanisme entartré", recherche: "detartrant anti calcaire wc puissant" },
        ],
      },
      { type: "h2", text: "Solution 2 : Changer le joint de clapet" },
      { type: "p", text: "Si l'eau s'écoule en continu dans la cuvette : (1) coupez l'arrivée d'eau (vanne derrière le WC), (2) tirez la chasse pour vider le réservoir, (3) démontez le clapet — il se dévisse ou se déclipse selon les modèles, (4) retirez le joint en caoutchouc usé et nettoyez le siège du clapet (souvent entartré), (5) remplacez le joint par un neuf identique." },
      { type: "h2", text: "Solution 3 : Remplacer tout le mécanisme" },
      { type: "p", text: "Si votre mécanisme a plus de 10 ans ou est très entartré, autant tout remplacer. Un kit complet (robinet flotteur + clapet) coûte 20-40 € et s'installe en 30 minutes. Choisissez un kit universel ou compatible avec votre marque de WC." },
      { type: "h2", text: "Astuce : tester avec du colorant alimentaire" },
      { type: "p", text: "Pour vérifier si votre clapet fuit (même petite fuite invisible), versez quelques gouttes de colorant alimentaire dans le réservoir. Attendez 15 minutes sans tirer la chasse. Si la cuvette se colore, le clapet fuit." },
      { type: "h2", text: "Économies réalisées" },
      { type: "p", text: "Une chasse qui coule en continu, c'est environ 200 € par an sur la facture d'eau. Une réparation à 15-30 € s'amortit en moins d'un mois. Et en plus, c'est un geste écologique majeur (75 m³ d'eau économisés par an)." },
      {
        type: "cta",
        text: "Pas envie de bricoler ? Trouvez un plombier",
        href: "/plombier",
      },
    ],
  },
  {
    slug: "changer-prise-electrique-aux-normes",
    title: "Changer une prise électrique aux normes : guide sécurité",
    description: "Prise abîmée ou jaunie ? Apprenez à la remplacer en sécurité aux normes NF C 15-100. Tuto pas à pas avec outils et précautions.",
    metier: "electricien",
    date: "2026-05-16",
    readTime: 7,
    intro:
      "Une prise électrique qui chauffe, jaunit ou présente un jeu doit être changée immédiatement — c'est un risque d'incendie réel. La bonne nouvelle : changer une prise est une opération simple, accessible aux bricoleurs avertis, à condition de respecter scrupuleusement les règles de sécurité. Tarif électricien : 80-150 €. Tarif DIY : 5-15 €.",
    sections: [
      { type: "h2", text: "Sécurité avant tout" },
      { type: "p", text: "Avant toute intervention électrique : (1) coupez le disjoncteur général du tableau OU le disjoncteur dédié de la pièce, (2) vérifiez l'absence de tension avec un testeur sans contact ou un multimètre, (3) prévenez votre entourage que vous travaillez sur l'électricité (collez un mot sur le tableau). Ne jamais travailler sous tension." },
      {
        type: "amazon",
        titre: "Outils sécurité électricien",
        produits: [
          { nom: "Testeur de tension sans contact", description: "Vérifie l'absence de courant en sécurité", recherche: "testeur tension sans contact" },
          { nom: "Kit tournevis isolés 1000V", description: "Tournevis sécurité électricien certifiés", recherche: "tournevis isole electricien 1000v" },
          { nom: "Pince à dénuder automatique", description: "Dénude les fils sans abîmer le cuivre", recherche: "pince denuder automatique" },
          { nom: "Prise électrique 16A standard", description: "Prise standard NF C 15-100", recherche: "prise electrique 16a standard nf" },
          { nom: "Multimètre numérique débutant", description: "Vérifie tension et continuité", recherche: "multimetre numerique debutant" },
        ],
      },
      { type: "h2", text: "Étape 1 : Démonter l'ancienne prise" },
      { type: "p", text: "Dévissez la vis centrale de la plaque de finition et retirez-la. Vous voyez maintenant le mécanisme. Vérifiez à nouveau l'absence de tension avec le testeur (oui, encore une fois). Dévissez les 2 vis latérales qui maintiennent le mécanisme dans le boîtier. Tirez doucement pour sortir la prise." },
      { type: "h2", text: "Étape 2 : Débrancher les fils" },
      { type: "p", text: "Vous voyez 3 fils branchés : phase (généralement rouge ou marron), neutre (bleu) et terre (vert/jaune). Notez bien leur position ou prenez une photo avant de débrancher. Sur les bornes à vis : dévissez. Sur les bornes automatiques : appuyez sur la languette et tirez le fil." },
      { type: "h2", text: "Étape 3 : Brancher la nouvelle prise" },
      { type: "p", text: "Les codes couleurs sont obligatoires : (1) terre (vert/jaune) sur la borne centrale T, (2) phase (rouge/marron/noir) sur la borne L, (3) neutre (bleu) sur la borne N. Si les fils sont abîmés ou trop courts : dénudez-les sur 8-10 mm avec la pince à dénuder. Vissez fermement (sans abîmer le cuivre) ou enfoncez bien dans les bornes auto." },
      { type: "h2", text: "Étape 4 : Remonter et tester" },
      { type: "p", text: "Remettez le mécanisme dans le boîtier (sans plier les fils), vissez les 2 vis latérales. Replacez la plaque de finition. Remettez le disjoncteur en marche. Testez la prise avec un appareil non critique (lampe). Vérifiez aussi que la terre fonctionne en branchant un appareil avec terre." },
      { type: "h2", text: "Quand appeler un électricien" },
      { type: "p", text: "Faites appel à un pro si : (1) les fils sont anciens (gaine en tissu, sans terre), (2) vous voyez des traces de brûlé dans le boîtier, (3) vous n'êtes pas sûr de l'installation. Pour la mise aux normes complète d'un logement, un électricien certifié Qualifelec délivre une attestation Consuel obligatoire." },
      {
        type: "cta",
        text: "Trouver un électricien certifié dans votre ville",
        href: "/electricien",
      },
    ],
  },
  {
    slug: "peindre-mur-sans-traces-debutant",
    title: "Peindre un mur sans traces ni reprises : tuto pour débutants",
    description: "Apprenez à peindre un mur comme un pro : préparation, choix du matériel, technique du W. Résultat impeccable même pour les débutants.",
    metier: "peintre",
    date: "2026-05-16",
    readTime: 8,
    intro:
      "Peindre un mur soi-même peut faire économiser 400 à 800 € par pièce. Mais le résultat dépend à 70 % de la préparation et du matériel, et à 30 % seulement de la technique. Avec ce guide, même un débutant complet peut obtenir un rendu professionnel, sans traces de rouleau ni reprises visibles.",
    sections: [
      { type: "h2", text: "Le matériel qui fait la différence" },
      { type: "p", text: "C'est l'erreur n°1 des débutants : acheter le rouleau le moins cher. Un rouleau bas de gamme laisse des poils, des traces et nécessite plus de couches. Investissez 15-25 € dans un bon rouleau microfibres avec manchon de qualité : le résultat sera incomparable." },
      {
        type: "amazon",
        titre: "Le matériel indispensable",
        produits: [
          { nom: "Rouleau microfibres professionnel", description: "Application uniforme sans traces", recherche: "rouleau microfibres professionnel peinture" },
          { nom: "Peinture acrylique murs 10L", description: "Peinture qualité pro pour un rendu impeccable", recherche: "peinture acrylique mur 10 litres haute qualite" },
          { nom: "Bâche de protection 4x5m", description: "Protège sols et meubles", recherche: "bache protection peinture 4x5" },
          { nom: "Ruban de masquage professionnel", description: "Découpes nettes plinthes et plafonds", recherche: "ruban masquage peinture professionnel" },
          { nom: "Enduit de rebouchage prêt à l'emploi", description: "Pour fissures et trous avant peinture", recherche: "enduit rebouchage pret emploi" },
          { nom: "Escabeau 4 marches stable", description: "Pour atteindre haut du mur", recherche: "escabeau 4 marches stable" },
        ],
      },
      { type: "h2", text: "Étape 1 : Préparer la pièce (1h)" },
      { type: "p", text: "Sortez tous les meubles que vous pouvez. Pour les autres, regroupez-les au centre et bâchez. Protégez le sol avec une bâche épaisse maintenue par du ruban adhésif. Démontez les caches de prises et interrupteurs (sécuriser avec du scotch). Posez du ruban de masquage sur les plinthes, plafonds, fenêtres, portes." },
      { type: "h2", text: "Étape 2 : Préparer le mur (1-2h)" },
      { type: "p", text: "Le mur doit être propre, lisse et sec. Lessivez à l'éponge avec de l'eau + lessive Saint-Marc pour les murs gras (cuisine). Rebouchez les trous et fissures avec de l'enduit de rebouchage, lissez à la spatule. Poncez légèrement quand c'est sec (24h)." },
      { type: "p", text: "Sur un mur jamais peint ou très absorbant (plâtre neuf), appliquez une sous-couche d'impression. Sur un mur déjà peint en bon état, sautez cette étape." },
      { type: "h2", text: "Étape 3 : Les angles au pinceau" },
      { type: "p", text: "Commencez par peindre les angles et bordures au pinceau (autour des plinthes, plafonds, prises) sur 5 cm de large. C'est l'étape la plus précise et la plus longue. Travaillez par section : ne laissez jamais sécher un angle avant d'attaquer le rouleau dans la zone." },
      { type: "h2", text: "Étape 4 : La technique du W au rouleau" },
      { type: "p", text: "C'est LE secret pour un rendu sans traces. Trempez le rouleau dans la peinture sans le saturer. Égouttez-le sur la grille de la bac à peinture. Appliquez la peinture en traçant un grand 'W' ou 'M' sur le mur, puis croisez horizontalement pour étaler uniformément, et terminez toujours par des passes verticales lentes du haut vers le bas." },
      { type: "p", text: "Travaillez par carrés de 1 m × 1 m, en chevauchant légèrement les zones précédentes pendant qu'elles sont encore humides ('travailler dans le frais')." },
      { type: "h2", text: "Étape 5 : La deuxième couche" },
      { type: "p", text: "Respectez le temps de séchage indiqué (souvent 4-6h pour l'acrylique). La deuxième couche est obligatoire pour un rendu uniforme, surtout avec des couleurs claires. Appliquez-la perpendiculairement à la première (si la 1ère était verticale, faites la 2ème horizontale)." },
      { type: "h2", text: "Astuce pro : retirer le ruban au bon moment" },
      { type: "p", text: "Retirez le ruban de masquage quand la peinture est sèche au toucher mais pas complètement dure (environ 1h après la dernière couche). Si vous attendez trop, vous risquez d'arracher des morceaux de peinture avec le scotch." },
      {
        type: "cta",
        text: "Préférez un pro ? Trouvez un peintre près de chez vous",
        href: "/peintre",
      },
    ],
  },
  {
    slug: "refaire-joints-carrelage-salle-bain",
    title: "Refaire les joints de carrelage de salle de bain soi-même",
    description: "Joints noircis ou moisis ? Refaire les joints de carrelage est simple et redonne un coup de jeune à la salle de bain. Tuto étape par étape.",
    metier: "carreleur",
    date: "2026-05-16",
    readTime: 6,
    intro:
      "Des joints de carrelage noircis ou moisis donnent immédiatement un aspect sale et vieillot à la salle de bain, même si le carrelage est neuf. Refaire les joints soi-même coûte 20-30 € et 3-4 heures de travail, contre 300-600 € pour un carreleur. Voici la méthode complète pour un résultat impeccable.",
    sections: [
      { type: "h2", text: "Quand refaire les joints ?" },
      { type: "p", text: "Les joints de carrelage durent 10 à 15 ans en moyenne. Refaites-les si : ils sont noirs ou tachés de moisissures qui ne partent plus, ils s'effritent ou tombent par endroits, ils sont creusés ou poreux. En zone d'eau (douche, baignoire), surveillez plus régulièrement." },
      {
        type: "amazon",
        titre: "Le matériel pour refaire les joints",
        produits: [
          { nom: "Joint carrelage hydrofuge salle de bain", description: "Résiste à l'humidité, anti-moisissures", recherche: "joint carrelage hydrofuge salle bain" },
          { nom: "Grattoir à joints triangulaire", description: "Retire l'ancien joint efficacement", recherche: "grattoir joints carrelage triangulaire" },
          { nom: "Fer à joint inox lissage", description: "Lisse parfaitement le nouveau joint", recherche: "fer a joint inox" },
          { nom: "Anti-moisissures joint puissant", description: "Nettoyage joints avant remplacement", recherche: "anti moisissures joint puissant" },
          { nom: "Pistolet à mastic professionnel", description: "Pour appliquer le silicone sanitaire", recherche: "pistolet a mastic professionnel" },
          { nom: "Silicone sanitaire blanc anti-moisi", description: "Pour les angles et bordures baignoire", recherche: "silicone sanitaire blanc anti moisissure" },
        ],
      },
      { type: "h2", text: "Étape 1 : Retirer les anciens joints" },
      { type: "p", text: "Avec un grattoir à joints triangulaire (ou un cutter), grattez l'ancien joint sur toute sa profondeur. Travaillez lentement pour ne pas rayer le carrelage. Vous devez voir le support en béton ou la colle au fond. Aspirez ensuite toute la poussière avec un aspirateur." },
      { type: "p", text: "Pour les zones très moisies, vaporisez un produit anti-moisissures, laissez agir 30 minutes et essuyez. Sinon les spores reviendront sous le nouveau joint." },
      { type: "h2", text: "Étape 2 : Préparer le joint" },
      { type: "p", text: "Choisissez impérativement un mortier-joint hydrofuge pour salle de bain (CG2 selon la norme EN 13888). Préparez-le dans un seau avec de l'eau froide, en suivant exactement les proportions du sac. Mélangez avec une truelle jusqu'à obtenir une pâte épaisse, sans grumeaux. Laissez reposer 5 minutes avant utilisation." },
      { type: "h2", text: "Étape 3 : Appliquer le joint" },
      { type: "p", text: "Avec une raclette en caoutchouc, appliquez le joint en diagonale par rapport aux carreaux, en appuyant fortement pour bien remplir tous les interstices. Travaillez par zones de 1 m² environ. Enlevez l'excédent en raclant en diagonale avec la raclette." },
      { type: "h2", text: "Étape 4 : Lisser et nettoyer" },
      { type: "p", text: "Attendez 15-30 minutes que le joint commence à durcir (à peine raffermi). Lissez les joints avec un fer à joint humide pour un rendu régulier. Essuyez les carreaux avec une éponge humide (rincée plusieurs fois) en passant en diagonale, pour ne pas creuser le joint." },
      { type: "h2", text: "Étape 5 : Polir les carreaux" },
      { type: "p", text: "Quand le joint est complètement sec (24-48h), polissez les carreaux avec un chiffon doux et sec pour éliminer le voile blanc résiduel. Les joints sont prêts à l'usage mais évitez les projections d'eau intense pendant 7 jours." },
      { type: "h2", text: "Astuce : silicone aux angles" },
      { type: "p", text: "Aux angles intérieurs et aux jonctions entre carrelage et baignoire/évier, n'utilisez PAS de mortier-joint (il se fissure avec les mouvements). Utilisez un silicone sanitaire anti-moisissures, appliqué au pistolet et lissé au doigt mouillé." },
      {
        type: "cta",
        text: "Travaux plus importants ? Contactez un carreleur",
        href: "/carreleur",
      },
    ],
  },
  {
    slug: "installer-etagere-murale-solide",
    title: "Installer une étagère murale solide : guide complet par type de mur",
    description: "Étagère qui tombe ? Apprenez à choisir les bonnes chevilles selon votre mur (béton, placo, brique) et installer une étagère qui ne bouge pas.",
    metier: "menuisier",
    date: "2026-05-16",
    readTime: 7,
    intro:
      "Une étagère qui s'arrache du mur, c'est rarement la faute de l'étagère — c'est presque toujours la mauvaise cheville ou un mauvais ancrage. Avant de fixer quoi que ce soit, il faut identifier la nature du mur (béton, brique, placo). Voici le guide pour installer une étagère qui supportera 20 kg ou plus, sans craindre la chute.",
    sections: [
      { type: "h2", text: "Identifier le type de mur" },
      { type: "p", text: "Tapotez le mur avec votre doigt : (1) son mat et plein → béton ou parpaing, (2) son creux → placoplâtre ou cloison creuse, (3) son sourd avec petit écho → brique pleine ou plâtre. En cas de doute, percez un petit trou : si la mèche s'enfonce facilement et que vous voyez une poudre blanche, c'est du placo. Si vous voyez une poudre rouge ou grise, c'est de la brique ou du béton." },
      {
        type: "amazon",
        titre: "Outils et fixations indispensables",
        produits: [
          { nom: "Perceuse-visseuse sans fil", description: "Polyvalente bricolage maison", recherche: "perceuse visseuse sans fil" },
          { nom: "Niveau à bulle 60cm", description: "Étagère parfaitement horizontale", recherche: "niveau a bulle 60cm" },
          { nom: "Détecteur de matériaux mur", description: "Trouve les câbles, conduites, montants", recherche: "detecteur materiaux mur" },
          { nom: "Kit chevilles Molly pour placo", description: "Spécial cloisons creuses, tient 15-25 kg", recherche: "chevilles molly placo" },
          { nom: "Chevilles béton SX Fischer", description: "Référence pour béton et brique pleine", recherche: "chevilles beton sx fischer" },
          { nom: "Forets béton et bois assortiment", description: "Toutes les tailles utiles", recherche: "forets beton bois assortiment" },
        ],
      },
      { type: "h2", text: "Choisir la bonne cheville" },
      { type: "p", text: "Pour BÉTON / PARPAING : chevilles plastique standard (type Fischer SX), longueur 40-60 mm. Pour BRIQUE CREUSE : chevilles à expansion type Spit Fix ou Molly métalliques. Pour PLACO : chevilles Molly métalliques (jamais de chevilles plastique standard qui se déchirent). Pour CHARGE LOURDE (>30 kg) : chevilles chimiques ou ancrages mécaniques." },
      { type: "h2", text: "Étape 1 : Tracer et vérifier" },
      { type: "p", text: "Placez l'étagère à l'endroit voulu, marquez les emplacements des fixations au crayon. Utilisez un niveau à bulle pour vérifier l'horizontalité. Avant de percer, passez un détecteur de matériaux pour repérer câbles électriques, conduites d'eau et montants métalliques (placo)." },
      { type: "h2", text: "Étape 2 : Percer correctement" },
      { type: "p", text: "Sur BÉTON/BRIQUE : utilisez le mode percussion de la perceuse avec un foret béton. La taille du foret = exactement le diamètre de la cheville (6 mm pour cheville SX 6). Percez à la profondeur de la cheville + 5 mm. Aspirez la poussière dans le trou." },
      { type: "p", text: "Sur PLACO : utilisez un foret bois, sans percussion. La taille du foret dépend du type de cheville Molly (consultez l'emballage)." },
      { type: "h2", text: "Étape 3 : Poser les chevilles" },
      { type: "p", text: "BÉTON : enfoncez la cheville plastique au marteau jusqu'à ras du mur. Vissez ensuite la vis qui va faire éclater la cheville pour son blocage. PLACO : pour cheville Molly, enfoncez à la main, puis utilisez une pince spéciale Molly (ou une vis) pour la faire ouvrir derrière la plaque. Tirez vers vous pour vérifier qu'elle est bien plaquée." },
      { type: "h2", text: "Étape 4 : Fixer l'étagère" },
      { type: "p", text: "Présentez l'étagère, vissez les vis dans les chevilles en serrant fermement (sans excès — vous risquez d'arracher la cheville). Vérifiez à nouveau le niveau. Faites un test de charge en tirant vers le bas avec le poids prévu avant de poser vos objets." },
      { type: "h2", text: "Pour les charges très lourdes" },
      { type: "p", text: "Pour des livres, un meuble en bois massif ou une étagère qui dépasse 1 m de long : doublez les fixations. Et idéalement, repérez les MONTANTS métalliques du placo (vis directes dedans = ultra solide) ou installez des supports équerre supplémentaires." },
      {
        type: "cta",
        text: "Travaux sur mesure ? Contactez un menuisier",
        href: "/menuisier",
      },
    ],
  },
  {
    slug: "changer-cylindre-serrure-soi-meme",
    title: "Changer un cylindre de serrure soi-même : tuto en 10 minutes",
    description: "Clés perdues, déménagement, sécurité ? Changer un cylindre de serrure se fait en 10 minutes sans serrurier. Économisez 100-200 €.",
    metier: "serrurier",
    date: "2026-05-16",
    readTime: 5,
    intro:
      "Vous emménagez dans un nouveau logement, vous avez perdu vos clés, ou vous voulez renforcer la sécurité ? Changer un cylindre de serrure (le 'barillet') est une opération simple, accessible à tous, qui prend 10 minutes. Pas besoin d'un serrurier facturant 150-300 €. Voici le tuto avec les pièges à éviter.",
    sections: [
      { type: "h2", text: "Mesurer le cylindre actuel" },
      { type: "p", text: "Avant d'acheter un nouveau cylindre, il faut mesurer l'ancien. Sortez votre clé et ouvrez la porte. Mesurez (1) la longueur totale du cylindre d'une face à l'autre, et (2) la position de la vis de fixation (au milieu, plus à gauche ou à droite)." },
      { type: "p", text: "Les longueurs standards sont : 30/30 (60 mm), 30/40 (70 mm), 35/45 (80 mm). Si votre porte est blindée, mesurez précisément car un cylindre trop court ou trop long ne fonctionnera pas." },
      {
        type: "amazon",
        titre: "Cylindres et outils recommandés",
        produits: [
          { nom: "Cylindre serrure haute sécurité A2P", description: "Norme A2P résiste au crochetage", recherche: "cylindre serrure haute securite a2p" },
          { nom: "Cylindre européen 5 goupilles", description: "Cylindre standard sécurité moyenne", recherche: "cylindre europeen 5 goupilles" },
          { nom: "Tournevis cruciforme magnétique", description: "Pour démonter la vis de la serrure", recherche: "tournevis cruciforme magnetique" },
          { nom: "Lubrifiant serrure graphite", description: "Entretien serrure après remplacement", recherche: "lubrifiant serrure graphite" },
          { nom: "Verrou supplémentaire 3 points", description: "Sécurité renforcée porte d'entrée", recherche: "verrou 3 points porte entree" },
        ],
      },
      { type: "h2", text: "Étape 1 : Dévisser la vis du cylindre" },
      { type: "p", text: "Ouvrez la porte. Cherchez sur la tranche de la porte (côté serrure) une vis verticale, généralement à l'extrémité inférieure de la têtière (la plaque métallique). Dévissez-la complètement avec un tournevis cruciforme. Mettez-la de côté." },
      { type: "h2", text: "Étape 2 : Sortir l'ancien cylindre" },
      { type: "p", text: "Insérez votre clé dans le cylindre et tournez-la légèrement (1/4 de tour) jusqu'à ce que le panneton (la petite came au milieu du cylindre) soit aligné avec le corps du cylindre. Tirez doucement le cylindre vers vous : il doit sortir d'un coup. Si ça résiste, ajustez la position de la clé." },
      { type: "h2", text: "Étape 3 : Préparer le nouveau cylindre" },
      { type: "p", text: "Le nouveau cylindre fonctionne de la même façon. Insérez une nouvelle clé dedans et faites le 1/4 de tour pour aligner le panneton. Présentez le cylindre dans la serrure, du même côté que l'ancien (très important : sinon ça ne rentre pas)." },
      { type: "h2", text: "Étape 4 : Insérer et fixer" },
      { type: "p", text: "Glissez le nouveau cylindre dans le logement. Il doit s'insérer en douceur. Tournez la clé pour rentrer le panneton dans sa position normale (vertical). Revissez la vis de fixation sur la tranche de la porte. Testez la clé plusieurs fois avant de refermer." },
      { type: "h2", text: "Astuce sécurité : choisir un bon cylindre" },
      { type: "p", text: "Pour une porte d'entrée, ne lésinez pas. Un cylindre haut de gamme certifié A2P (★, ★★ ou ★★★) résiste au crochetage, au cassage et au perçage. Le coût est de 60 à 200 €, mais c'est ce qui décourage la plupart des cambrioleurs (qui n'attaquent un cylindre qu'au-delà de 5 minutes d'effort)." },
      { type: "h2", text: "Quand appeler un serrurier ?" },
      { type: "p", text: "Si la clé refuse de tourner même en forçant, ou si le cylindre est bloqué dans la serrure, appelez un serrurier — mais attention aux arnaques. Demandez TOUJOURS un devis ferme par téléphone avant qu'il se déplace. Préférez un pro recommandé par votre assurance habitation." },
      {
        type: "cta",
        text: "Trouver un serrurier de confiance",
        href: "/serrurier",
      },
    ],
  },
  {
    slug: "demousser-toiture-soi-meme",
    title: "Démousser sa toiture soi-même : guide sécurisé et efficace",
    description: "Mousse, lichens sur le toit ? Apprenez à démousser votre toiture en sécurité avec démoussant et pulvérisateur. Économisez 800-2000 €.",
    metier: "couvreur",
    date: "2026-05-16",
    readTime: 7,
    intro:
      "Une toiture envahie par les mousses et lichens, c'est inesthétique mais surtout dangereux : la végétation retient l'eau et accélère la dégradation des tuiles. Un démoussage professionnel coûte 800 à 2 000 € selon la surface. La bonne nouvelle : un démoussage simple (sans haute pression) est faisable soi-même pour 50-100 €, à condition de respecter les règles de sécurité.",
    sections: [
      { type: "h2", text: "Sécurité : la priorité absolue" },
      { type: "p", text: "Le travail sur toiture est la première cause d'accidents domestiques graves. Avant de monter sur le toit : (1) vérifiez la météo (jamais par pluie, vent ou humidité), (2) équipez-vous d'un harnais de sécurité fixé à un point fort, (3) utilisez un échafaudage stable plutôt qu'une échelle, (4) ne montez JAMAIS seul. Si vous avez le moindre doute, faites appel à un pro." },
      {
        type: "amazon",
        titre: "Matériel démoussage toiture",
        produits: [
          { nom: "Démoussant toiture concentré 5L", description: "Élimine mousses et lichens efficacement", recherche: "demoussant toiture 5 litres concentre" },
          { nom: "Pulvérisateur 16L pression", description: "Application uniforme sans haute pression", recherche: "pulverisateur 16 litres pression" },
          { nom: "Hydrofuge toiture incolore", description: "Protège après démoussage", recherche: "hydrofuge toiture incolore" },
          { nom: "Harnais de sécurité travail hauteur", description: "Indispensable sécurité toit", recherche: "harnais securite travail hauteur" },
          { nom: "Brosse rigide longue manche", description: "Brossage léger des dépôts", recherche: "brosse rigide longue manche" },
          { nom: "Combinaison de protection chimique", description: "Protège des produits démoussants", recherche: "combinaison protection chimique jetable" },
        ],
      },
      { type: "h2", text: "Étape 1 : Brossage léger" },
      { type: "p", text: "Si la couche de mousse est épaisse, commencez par un brossage léger avec une brosse rigide à long manche, du faîtage vers la gouttière. N'utilisez JAMAIS un karcher ou nettoyeur haute pression : ça arrache les tuiles, abîme la porosité et envoie l'eau sous les tuiles. Le brossage manuel suffit." },
      { type: "h2", text: "Étape 2 : Application du démoussant" },
      { type: "p", text: "Diluez le démoussant selon les indications du fabricant (souvent 1/5 dans l'eau). Versez dans le pulvérisateur et appliquez en pluie fine sur l'ensemble de la toiture, du faîtage vers le bas. Travaillez par temps sec et sans vent (le produit ne doit pas être lavé par la pluie ni emporté ailleurs)." },
      { type: "h2", text: "Étape 3 : Laisser agir" },
      { type: "p", text: "Le démoussant agit en 2 à 6 mois selon la météo : il tue les mousses qui se détacheront ensuite naturellement avec la pluie. Inutile de rincer immédiatement. C'est plus lent qu'un nettoyage haute pression mais infiniment plus sûr pour la toiture." },
      { type: "h2", text: "Étape 4 : Hydrofuger (optionnel mais recommandé)" },
      { type: "p", text: "6 mois après le démoussage, quand le toit est propre, appliquez un hydrofuge incolore. Ce traitement rend les tuiles imperméables et prévient la repousse des mousses pendant 5 à 10 ans. Application identique au démoussant (pulvérisateur)." },
      { type: "h2", text: "Périodicité recommandée" },
      { type: "p", text: "Faites un démoussage tous les 3 à 5 ans en moyenne, ou dès que vous voyez 30 % de la toiture envahie. Inspectez visuellement le toit chaque printemps depuis le sol (jumelles) pour détecter les zones à problème." },
      { type: "h2", text: "Quand appeler un couvreur ?" },
      { type: "p", text: "Si vous voyez des tuiles cassées, déplacées ou manquantes, des fissures sur les conduits de cheminée, ou si la mousse est tellement épaisse qu'elle a soulevé les tuiles : c'est le moment d'appeler un couvreur professionnel. Pour les toitures hautes (R+2 et plus), ne prenez aucun risque : le démoussage pro coûte 5-15 €/m² mais inclut la sécurité et la garantie." },
      {
        type: "cta",
        text: "Trouver un couvreur près de chez vous",
        href: "/couvreur",
      },
    ],
  },
  {
    slug: "tailler-haies-bonne-periode",
    title: "Quand et comment tailler ses haies pour une croissance parfaite",
    description: "Quelle est la bonne période pour tailler vos haies ? Quel matériel choisir ? Le guide complet pour des haies denses et bien formées.",
    metier: "jardinier-paysagiste",
    date: "2026-05-16",
    readTime: 6,
    intro:
      "Une haie mal taillée se dégarnit, devient déséquilibrée et perd sa fonction esthétique et brise-vue. À l'inverse, une taille régulière au bon moment booste la densité et la santé de la haie. Voici le calendrier précis, les bonnes techniques et le matériel qui font la différence entre une haie de paysagiste et un buisson abandonné.",
    sections: [
      { type: "h2", text: "Quand tailler : le calendrier" },
      { type: "p", text: "Les meilleures périodes : (1) FIN MAI - DÉBUT JUIN : taille de formation après la pousse de printemps, indispensable pour les haies denses (laurier, thuya, charmille). (2) FIN AOÛT - DÉBUT SEPTEMBRE : taille d'entretien d'été avant la descente de sève. (3) FIN OCTOBRE - NOVEMBRE : taille de structure pour les espèces caduques (charme, hêtre)." },
      { type: "p", text: "ATTENTION : depuis 2022, il est INTERDIT de tailler les haies entre le 15 mars et le 31 juillet pour préserver les oiseaux nicheurs. Cette règle est officielle pour les agriculteurs mais étendue aux particuliers dans plusieurs communes." },
      {
        type: "amazon",
        titre: "Le matériel idéal pour la taille",
        produits: [
          { nom: "Taille-haie sans fil 18V", description: "Léger, maniable, autonome 1h", recherche: "taille haie sans fil 18v" },
          { nom: "Taille-haie thermique grosse haie", description: "Pour grandes longueurs et bois dur", recherche: "taille haie thermique professionnel" },
          { nom: "Sécateur professionnel Felco", description: "Référence pour les branches précises", recherche: "secateur felco" },
          { nom: "Ébrancheur télescopique", description: "Pour atteindre les branches hautes", recherche: "ebrancheur telescopique" },
          { nom: "Gants jardinage anti-coupure", description: "Protection mains et avant-bras", recherche: "gants jardinage anti coupure haute" },
          { nom: "Bâche jardin récolte taille", description: "Récupère facilement les déchets de coupe", recherche: "bache jardin recolte" },
        ],
      },
      { type: "h2", text: "La forme idéale : trapèze inversé" },
      { type: "p", text: "Une haie doit toujours être TAILLÉE EN TRAPÈZE INVERSÉ : plus large à la base qu'au sommet. Pourquoi ? Pour que la lumière atteigne le bas de la haie, qui sinon se dégarnit progressivement. Inclinez les côtés de 10° à 20° vers l'intérieur." },
      { type: "h2", text: "Technique de taille étape par étape" },
      { type: "p", text: "(1) Commencez par les CÔTÉS, en partant du bas et en remontant en faisant des mouvements de bas en haut. (2) Taillez ensuite le SOMMET en passant l'appareil horizontalement. (3) Affinez les ANGLES et faites les finitions au sécateur pour les branches récalcitrantes. (4) Reculez régulièrement pour vérifier la régularité." },
      { type: "p", text: "Astuce pro : tendez un cordeau à hauteur souhaitée le long de la haie pour avoir une ligne droite parfaite, surtout sur les grandes longueurs." },
      { type: "h2", text: "Quel taille-haie choisir ?" },
      { type: "p", text: "Pour une haie de moins de 20 m linéaires, branches fines : un taille-haie sans fil 18V suffit, léger et silencieux. Pour 20-100 m : un taille-haie thermique offre puissance et autonomie. Au-delà : préférez un pro ou un taille-haie sur perche pour les haies hautes." },
      { type: "h2", text: "Erreurs à éviter" },
      { type: "p", text: "(1) Tailler par temps de pluie ou gel : risque d'infections fongiques. (2) Tailler à mi-saison de croissance (avril-mai) : ça épuise la plante. (3) Couper trop court d'un coup : ne jamais retirer plus d'1/3 du feuillage. (4) Oublier de désinfecter les outils entre 2 haies : risque de transmettre des maladies." },
      {
        type: "cta",
        text: "Travaux plus importants ? Trouvez un paysagiste",
        href: "/jardinier-paysagiste",
      },
    ],
  },
  {
    slug: "brushing-maison-comme-pro",
    title: "Faire un brushing à la maison comme un pro coiffeur",
    description: "Brushing volume et tenue toute la journée à la maison ? Apprenez les gestes du coiffeur avec le bon matériel. Économisez 25-50 € par séance.",
    metier: "coiffeur",
    date: "2026-05-16",
    readTime: 6,
    intro:
      "Un brushing chez le coiffeur coûte 25 à 50 €, soit jusqu'à 1 200 €/an pour celles qui s'en offrent un par semaine. Avec le bon matériel et la bonne technique, vous pouvez reproduire un brushing salon à la maison en 20 minutes — volume, tenue et brillance compris. Voici la méthode complète.",
    sections: [
      { type: "h2", text: "Le matériel qui change tout" },
      { type: "p", text: "Le sèche-cheveux du commerce à 30 € ne donnera jamais le rendu d'un brushing pro. Un sèche-cheveux professionnel ionique (avec moteur AC) sèche 2 fois plus vite et lisse la cuticule du cheveu pour la brillance. C'est l'investissement n°1." },
      {
        type: "amazon",
        titre: "Matériel pro pour brushing maison",
        produits: [
          { nom: "Sèche-cheveux professionnel ionique 2200W", description: "Le matériel de coiffeur, moteur AC", recherche: "seche cheveux professionnel ionique 2200w" },
          { nom: "Brosse soufflante One-Step Revlon", description: "Brushing volume en 1 geste, sans expertise", recherche: "brosse soufflante one step revlon" },
          { nom: "Brosse ronde céramique grande taille", description: "Pour les longueurs, donne volume et tenue", recherche: "brosse ronde ceramique grande taille" },
          { nom: "Spray thermo-protecteur cheveux", description: "OBLIGATOIRE avant chaleur, protège des dommages", recherche: "spray thermo protecteur cheveux" },
          { nom: "Mousse coiffante volume professionnelle", description: "Tenue et volume longue durée", recherche: "mousse coiffante volume professionnelle" },
          { nom: "Pince à cheveux séparation", description: "Pour travailler mèche par mèche", recherche: "pince a cheveux separation coiffure" },
        ],
      },
      { type: "h2", text: "Étape 1 : La préparation" },
      { type: "p", text: "Lavez vos cheveux avec un shampoing volume si vous cherchez du gonflant. Essorez bien avec une serviette en microfibres (jamais en frottant). Appliquez un spray thermo-protecteur des longueurs aux pointes (jamais sur les racines). Ajoutez une noisette de mousse coiffante volume répartie partout." },
      { type: "h2", text: "Étape 2 : Sécher partiellement" },
      { type: "p", text: "Avant le brushing proprement dit, séchez vos cheveux à 70-80 % avec le sèche-cheveux, tête en bas, sans brosse. Cela donne du volume aux racines et raccourcit le temps de brushing." },
      { type: "h2", text: "Étape 3 : Séparer en sections" },
      { type: "p", text: "Avec des pinces, séparez vos cheveux en 4 sections : (1) les côtés gauche et droit du haut du crâne, (2) la nuque, (3) le dessus, (4) la frange si vous en avez. Travaillez section par section, de la nuque vers le haut." },
      { type: "h2", text: "Étape 4 : Le brushing à la brosse ronde" },
      { type: "p", text: "Prenez une mèche de 3-5 cm. Placez la brosse ronde céramique en dessous, près des racines. Tirez la brosse vers le bas tout en suivant avec le sèche-cheveux (orienté vers le bas pour fermer la cuticule). À la fin, enroulez les pointes autour de la brosse et chauffez 3 secondes, puis air froid 3 secondes pour fixer." },
      { type: "p", text: "ALTERNATIVE FACILE : la brosse soufflante 'One-Step' Revlon combine sèche-cheveux + brosse en un seul outil. Idéale pour débutantes, elle donne un super volume en 1 geste sans coordination main-main." },
      { type: "h2", text: "Étape 5 : Fixation finale" },
      { type: "p", text: "Une fois toutes les mèches travaillées, finalisez avec une passe d'air froid sur l'ensemble pour fixer la mise en forme. Ajoutez 2-3 sprays de laque légère à 30 cm pour la tenue, sans alourdir. Évitez les sprays de brillance qui plombent." },
      { type: "h2", text: "Astuce : le brushing dure 3-4 jours" },
      { type: "p", text: "Pour faire durer le brushing : (1) dormez en chignon haut lâche, (2) utilisez un shampoing sec aux racines au jour 2, (3) ravivez avec un fer à boucler ou un coup de brosse ronde + sèche-cheveux le matin." },
      {
        type: "cta",
        text: "Pour un changement complet, trouvez un coiffeur",
        href: "/coiffeur",
      },
    ],
  },
  {
    slug: "changer-ampoule-phare-voiture",
    title: "Changer une ampoule de phare de voiture en 10 minutes",
    description: "Phare grillé ? Changer une ampoule de voiture est rapide et coûte 5-15 € au lieu de 50-80 € chez le garagiste. Tuto par type d'ampoule.",
    metier: "garagiste",
    date: "2026-05-16",
    readTime: 5,
    intro:
      "Une ampoule de phare grillée, c'est l'amende garantie au prochain contrôle de police (135 € + perte de visibilité). Et chez le garagiste, le simple remplacement coûte 30 à 80 € (pièce + main d'œuvre). En réalité, c'est une opération de 10 minutes accessible à tous, pour 5-15 €. Voici le tuto par type d'ampoule.",
    sections: [
      { type: "h2", text: "Identifier votre ampoule" },
      { type: "p", text: "Les types les plus courants : H1 (longue portée), H4 (feux croisement/route combinés), H7 (croisement uniquement), H11 (anti-brouillard), W5W (veilleuse), P21W (clignotant/feu de recul). Consultez le manuel de votre voiture ou regardez l'inscription sur l'ancienne ampoule." },
      {
        type: "amazon",
        titre: "Ampoules et accessoires",
        produits: [
          { nom: "Kit ampoules H7 standard", description: "L'ampoule la plus courante en France", recherche: "kit ampoules h7 voiture" },
          { nom: "Kit ampoules H4 longue durée", description: "Pour voitures avec phares combinés", recherche: "kit ampoules h4 voiture" },
          { nom: "Kit complet toutes ampoules voiture", description: "Pack secours toutes positions véhicule", recherche: "kit complet ampoules voiture" },
          { nom: "Gants en coton fins mécanique", description: "OBLIGATOIRE manipulation ampoule", recherche: "gants coton fins mecanique" },
          { nom: "Lampe frontale LED", description: "Mains libres pour intervention sous capot", recherche: "lampe frontale led puissante" },
          { nom: "Ampoules H7 LED ultra blanches", description: "Upgrade vers LED pour meilleure visibilité", recherche: "ampoules h7 led ultra blanches" },
        ],
      },
      { type: "h2", text: "Précaution absolue : les gants" },
      { type: "p", text: "Ne touchez JAMAIS le verre d'une ampoule halogène à mains nues. La graisse de vos doigts crée des points chauds qui font éclater l'ampoule. Portez des gants en coton fins ou tenez l'ampoule par son culot uniquement." },
      { type: "h2", text: "Étape 1 : Accéder au phare" },
      { type: "p", text: "Ouvrez le capot, repérez l'arrière du phare. Sur certaines voitures, l'accès se fait directement par-dessus. Sur d'autres (BMW, Audi récentes), il faut parfois retirer une roue, des protections plastiques, ou même la batterie pour accéder. Consultez le manuel ou une vidéo YouTube spécifique à votre modèle." },
      { type: "h2", text: "Étape 2 : Démonter l'ancienne ampoule" },
      { type: "p", text: "Repérez le capot en plastique ou caoutchouc à l'arrière du phare. Tournez-le 1/4 de tour dans le sens antihoraire pour le retirer. Vous voyez maintenant le connecteur électrique de l'ampoule. Débranchez-le délicatement (poussez sur la languette de blocage)." },
      { type: "p", text: "Tournez l'ampoule d'1/4 de tour antihoraire (selon les modèles) OU appuyez sur une languette métallique pour la libérer. Sortez-la doucement par le culot." },
      { type: "h2", text: "Étape 3 : Mettre la nouvelle ampoule" },
      { type: "p", text: "Sortez la nouvelle ampoule de son emballage en la tenant par le culot (gants !). Insérez-la dans le logement en respectant le détrompeur (encoche). Verrouillez-la (tour ou clip selon modèle). Rebranchez le connecteur électrique fermement." },
      { type: "h2", text: "Étape 4 : Tester et refermer" },
      { type: "p", text: "AVANT de refermer le capot arrière du phare, allumez les phares depuis l'intérieur de la voiture pour vérifier que l'ampoule fonctionne. Si oui : remettez le capot caoutchouc/plastique, vérifiez qu'il est bien étanche. Refermez le capot moteur." },
      { type: "h2", text: "Astuce : changer les 2 ampoules en même temps" },
      { type: "p", text: "Les ampoules vieillissent ensemble. Si une est grillée, l'autre est souvent en bout de course. Profitez-en pour changer les 2 — économie de temps et meilleure visibilité." },
      { type: "h2", text: "Upgrade vers LED ?" },
      { type: "p", text: "Les ampoules LED durent 10 fois plus longtemps, consomment moins et offrent une meilleure visibilité. ATTENTION : elles ne sont pas homologuées pour la route en France si votre voiture n'est pas d'origine LED. Risque d'amende au contrôle technique. Vérifiez la réglementation avant d'acheter." },
      {
        type: "cta",
        text: "Problème plus complexe ? Trouvez un garagiste",
        href: "/garagiste",
      },
    ],
  },
  {
    slug: "eviter-arnaque-serrurier-urgence",
    title: "Comment éviter les arnaques de serrurier en urgence : guide complet",
    description: "Porte claquée la nuit ? Les arnaques de serruriers d'urgence sont massives. Voici comment vous protéger avant et pendant l'intervention.",
    metier: "serrurier-urgence",
    date: "2026-05-16",
    readTime: 7,
    intro:
      "Les arnaques de serruriers en urgence sont la première source de plaintes auprès de la DGCCRF en France. Factures gonflées (jusqu'à 3 000 € pour une porte claquée), pièces facturées non posées, prétexte que la serrure doit être 'cassée pour ouvrir'... Voici comment vous protéger AVANT et PENDANT l'intervention.",
    sections: [
      { type: "h2", text: "Le mode opératoire des arnaqueurs" },
      { type: "p", text: "Les arnaqueurs payent (cher) pour apparaître en première position sur Google quand vous tapez 'serrurier urgence + votre ville'. Le téléphone est un call-center qui envoie ensuite un sous-traitant local payé à la commission. Le sous-traitant a tout intérêt à gonfler la facture : (1) il prétendra que la serrure est forcée et doit être remplacée, (2) il facturera des pièces non installées, (3) il vous fera signer un bon de prise en charge avant de chiffrer." },
      { type: "h2", text: "Les 5 règles d'or AVANT d'appeler" },
      {
        type: "ol",
        items: [
          "Vérifiez d'abord si un voisin a un double de vos clés ou si vous pouvez attendre l'arrivée d'un proche.",
          "Si vous êtes locataire : appelez votre propriétaire ou syndic — ils ont souvent un double et un serrurier référencé.",
          "Pour les ouvertures de porte simples claquées (sans clés à l'intérieur) : appelez d'abord les pompiers (18) — gratuit et possible si vraie urgence.",
          "Si vous avez une assurance habitation avec garantie 'porte claquée' (vérifiez votre contrat), appelez d'abord l'assistance.",
          "N'appelez JAMAIS le premier numéro affiché en haut de Google (Pubs Google Ads = souvent intermédiaires).",
        ],
      },
      { type: "h2", text: "Comment trouver un vrai serrurier local" },
      { type: "p", text: "Privilégiez : (1) un serrurier recommandé par votre assurance habitation, (2) un artisan local inscrit au Registre des Métiers (vérifiable sur le site de la CMA), (3) un pro avec adresse physique et avis Google sur la longue durée (50+ avis sur plusieurs années), (4) une recommandation directe d'un voisin ou d'un commerce de quartier (boulangerie, tabac)." },
      {
        type: "amazon",
        titre: "Préparez-vous AVANT l'urgence",
        produits: [
          { nom: "Double de clé sécurisé enveloppe", description: "Cachez un double chez un voisin de confiance", recherche: "boitier double cle securise enveloppe" },
          { nom: "Mini coffre extérieur à code", description: "Cachez un double clé en sécurité", recherche: "mini coffre exterieur code clé" },
          { nom: "Serrure connectée Bluetooth maison", description: "Ouverture par smartphone, plus jamais bloqué", recherche: "serrure connectee bluetooth maison" },
          { nom: "Verrou supplémentaire 3 points", description: "Renforce après cambriolage", recherche: "verrou 3 points porte entree" },
          { nom: "Cylindre haute sécurité A2P", description: "Investir avant l'incident", recherche: "cylindre haute securite a2p" },
        ],
      },
      { type: "h2", text: "PENDANT l'intervention : les bons réflexes" },
      { type: "p", text: "(1) EXIGEZ un devis écrit AVANT toute intervention, même 5 minutes de travail. (2) Le devis doit détailler : déplacement, prestation, pièces, TVA. (3) Refusez tout supplément non prévu. (4) NE SIGNEZ JAMAIS un bon de prise en charge ouvert. (5) Photographiez l'état de la serrure AVANT et APRÈS — preuves utiles en cas de litige." },
      { type: "h2", text: "Que faire si vous êtes victime ?" },
      { type: "p", text: "(1) Refusez de payer la totalité — proposez le montant raisonnable du devis téléphonique initial. (2) Demandez au serrurier de partir si la situation s'envenime. (3) Déposez plainte au commissariat dans les 24h. (4) Signalez à la DGCCRF via signal.conso.gouv.fr. (5) Faites opposition au paiement par carte bancaire dans les 8 jours. (6) Contactez UFC-Que Choisir ou 60 Millions de Consommateurs." },
      { type: "h2", text: "Les vrais tarifs en 2026" },
      { type: "p", text: "Pour une simple OUVERTURE DE PORTE CLAQUÉE (clé à l'intérieur, pas verrou tiré) : 80-150 € en journée, 150-300 € en nuit/week-end. Pour OUVERTURE FORCÉE (verrou tiré, A2P) : 200-400 €. Pour CHANGEMENT DE SERRURE complet : 200-600 € selon le modèle. Tout devis supérieur à 600 € pour ces 3 cas est suspect." },
      {
        type: "cta",
        text: "Trouvez un serrurier de confiance dans votre ville",
        href: "/serrurier-urgence",
      },
    ],
  },
  {
    slug: "premiers-soins-animal-urgence",
    title: "Premiers soins à votre animal : gestes d'urgence vie ou mort",
    description: "Chien ou chat blessé, intoxiqué, en détresse ? Les bons gestes d'urgence avant l'arrivée chez le vétérinaire peuvent sauver la vie de votre animal.",
    metier: "veterinaire-urgence",
    date: "2026-05-16",
    readTime: 8,
    intro:
      "Quand votre animal a un accident, est intoxiqué ou en détresse respiratoire, chaque minute compte. Avant l'arrivée chez le vétérinaire, les bons gestes peuvent sauver une vie — ou éviter l'aggravation. Voici le guide des urgences les plus fréquentes pour chiens et chats, à imprimer et garder à portée de main.",
    sections: [
      { type: "h2", text: "Numéros à connaître par cœur" },
      { type: "p", text: "AVANT toute urgence, ayez ces numéros : (1) votre vétérinaire habituel (le répondeur indique la garde), (2) Centre Antipoison Animal CAPAE Nantes : 02 40 68 77 40 (24h/24), (3) Centre Antipoison CNITV Lyon : 04 78 87 10 40, (4) Clinique vétérinaire d'urgence 24h/24 la plus proche (renseignez-vous AVANT)." },
      { type: "h2", text: "URGENCE 1 : Ingestion de produit toxique" },
      { type: "p", text: "Aliments toxiques pour chien/chat : chocolat, raisin, oignon/ail, xylitol (chewing-gum), avocat, café, alcool. Produits : médicaments humains (paracétamol = MORTEL pour le chat), antigel, mort-aux-rats, plantes ornementales (lis pour le chat = mortel)." },
      { type: "p", text: "Que faire : (1) APPELEZ IMMÉDIATEMENT le centre antipoison animal — gardez l'emballage du produit ingéré. (2) Ne faites JAMAIS vomir sans avis vétérinaire (certains produits sont plus dangereux à la remontée). (3) Notez l'heure d'ingestion, la quantité estimée, le poids de l'animal. (4) Transportez l'animal en gardant calme et chaleur." },
      {
        type: "amazon",
        titre: "Trousse de premiers soins animal",
        produits: [
          { nom: "Trousse premiers soins animal complète", description: "Indispensable à la maison et en voiture", recherche: "trousse premiers soins animal complete" },
          { nom: "Solution antiseptique animal", description: "Désinfection plaies sans alcool", recherche: "solution antiseptique animal" },
          { nom: "Bandages auto-adhésifs vétérinaire", description: "Bandage qui ne colle pas aux poils", recherche: "bandages auto adhesifs veterinaire" },
          { nom: "Muselière souple urgence chien", description: "Animal blessé peut mordre par réflexe", recherche: "museliere souple chien urgence" },
          { nom: "Couverture de survie pour animal", description: "Choc thermique, transport blessé", recherche: "couverture survie chien" },
          { nom: "Caisse transport renforcée animal", description: "Transport sécurisé vers le vétérinaire", recherche: "caisse transport renforcee chien chat" },
          { nom: "Seringue dosage médicament animal", description: "Donner médicaments précisément", recherche: "seringue orale dosage chien chat" },
          { nom: "Thermomètre vétérinaire rectal", description: "Surveiller la température normale", recherche: "thermometre veterinaire rectal" },
        ],
      },
      { type: "h2", text: "URGENCE 2 : Coup de chaleur (été)" },
      { type: "p", text: "Symptômes : halètement extrême, gencives rouges/violettes, désorientation, vomissements, perte de conscience. Mortel en 10-15 minutes." },
      { type: "p", text: "Que faire : (1) Déplacez l'animal dans un endroit FRAIS (jamais dans l'eau glacée — risque de choc). (2) Mouillez progressivement avec de l'eau tiède aux extrémités (pattes, ventre, tête). (3) Faites boire de l'eau fraîche par petites quantités si conscient. (4) Ventilez avec un éventail ou ventilateur. (5) Foncez chez le véto même si l'animal semble récupérer (risque de choc tardif)." },
      { type: "h2", text: "URGENCE 3 : Accident de la route" },
      { type: "p", text: "Même un animal qui semble peu blessé peut avoir des hémorragies internes. (1) Ne le déplacez QUE si nécessaire (route, autre danger) — utilisez un support rigide (planche, carton). (2) Manipulez avec une muselière souple (l'animal blessé mord par réflexe, même son maître). (3) Couvrez avec une couverture de survie pour limiter le choc thermique. (4) Filez chez le véto SANS DÉLAI." },
      { type: "h2", text: "URGENCE 4 : Difficulté respiratoire" },
      { type: "p", text: "Symptômes : halètement non lié à la chaleur, langue/gencives bleues, respiration sifflante, animal couché incapable de respirer normalement. Cela peut être : insuffisance cardiaque, œdème pulmonaire, corps étranger dans la gorge, allergie sévère." },
      { type: "p", text: "Que faire : (1) Calmez l'animal, ne le forcez pas à bouger. (2) Vérifiez sa gueule (objet visible ? rouge ? gonflé ?). (3) Si un objet est coincé visible et facilement accessible : essayez de le retirer (gants, prudence). (4) Foncez chez le véto. (5) Si arrêt respiratoire : massage cardiaque possible en urgence ABSOLUE (3 pressions thoraciques pour 1 insufflation au museau)." },
      { type: "h2", text: "URGENCE 5 : Plaie qui saigne" },
      { type: "p", text: "(1) Appliquez une compresse propre sur la plaie. (2) COMPRESSEZ fermement avec votre main pendant 5 minutes (sans soulever pour vérifier — laissez le caillot se former). (3) Bandez avec bandage auto-adhésif (vétérinaire) sans trop serrer (vérifiez que les doigts/pattes ne deviennent pas froids). (4) Si la plaie saigne par jet pulsé : c'est artériel, urgence VITALE, garrot temporaire au-dessus." },
      { type: "h2", text: "Constantes normales à connaître" },
      {
        type: "ul",
        items: [
          "Température rectale CHIEN : 38-39°C (au-dessus de 39,5°C = fièvre)",
          "Température rectale CHAT : 38-39°C (idem)",
          "Fréquence respiratoire CHIEN au repos : 10-30/min",
          "Fréquence respiratoire CHAT au repos : 20-30/min",
          "Fréquence cardiaque CHIEN : 60-160 BPM selon taille",
          "Fréquence cardiaque CHAT : 110-180 BPM",
          "Couleur normale des gencives : ROSE (pâle, blanche, jaune ou violette = urgence)",
        ],
      },
      { type: "h2", text: "Préparez la trousse maintenant" },
      { type: "p", text: "Une trousse de premiers soins animal coûte 20-40 € et peut sauver une vie. Indispensables : compresses stériles, désinfectant doux (chlorhexidine), bandages auto-adhésifs vétérinaire, ciseaux à bouts ronds, muselière souple, couverture de survie, gants jetables, sérum physiologique. Gardez-en une à la maison ET une en voiture." },
      {
        type: "cta",
        text: "Trouver un vétérinaire d'urgence 24h/24",
        href: "/veterinaire-urgence",
      },
    ],
  },

  // === 20 nouveaux articles ajoutés 2026-05-23 ===
  {
    slug: "prix-electricien-2026",
    title: "Prix d'un électricien en 2026 : tarif horaire, devis, urgence",
    description:
      "Combien coûte un électricien en 2026 ? Tarif horaire, prix d'un tableau, mise aux normes, dépannage d'urgence et conseils pour comparer les devis.",
    metier: "electricien",
    date: "2026-05-17",
    readTime: 8,
    intro:
      "Faire venir un électricien chez soi coûte plus cher qu'on l'imagine, et les écarts de tarifs entre artisans dépassent souvent 30 %. Avant de signer un devis, mieux vaut connaître les prix réels pratiqués en 2026 et savoir ce qui justifie un surcoût.",
    sections: [
      { type: "h2", text: "Tarif horaire moyen d'un électricien en 2026" },
      {
        type: "p",
        text: "Le tarif horaire d'un électricien qualifié se situe entre 40 et 65 € HT en 2026, hors déplacement. À Paris et dans les grandes métropoles, la fourchette grimpe à 55-75 € HT. Un artisan installé en zone rurale facture plutôt 35-50 € HT, mais peut majorer le déplacement.",
      },
      {
        type: "p",
        text: "À ce tarif s'ajoute presque toujours un forfait de déplacement, compris entre 25 et 60 € selon la distance. Certaines entreprises pratiquent un forfait global comprenant l'heure plus le déplacement, ce qui permet de mieux comparer les devis.",
      },
      { type: "h2", text: "Prix des prestations courantes" },
      {
        type: "ul",
        items: [
          "Remplacement d'une prise ou interrupteur : 50 à 90 €",
          "Pose d'un point lumineux supplémentaire : 80 à 180 €",
          "Installation d'un radiateur électrique : 150 à 350 €",
          "Mise aux normes d'un tableau électrique : 800 à 2 200 €",
          "Rénovation électrique complète d'un T3 : 4 500 à 9 000 €",
          "Installation d'une borne de recharge voiture : 900 à 1 800 € (aides déduites)",
        ],
      },
      { type: "h2", text: "Pourquoi exiger un devis détaillé" },
      {
        type: "p",
        text: "Tout chantier supérieur à 150 € doit faire l'objet d'un devis écrit, gratuit et signé. Ce document doit lister précisément la main-d'œuvre, le matériel, les déplacements et la TVA applicable. La TVA est de 10 % en rénovation pour les logements de plus de deux ans, contre 20 % pour le neuf et certaines prestations d'entretien.",
      },
      {
        type: "p",
        text: "Un devis trop vague, sans détail de pièces ni temps estimé, est un signal d'alerte. Demander deux à trois devis reste la meilleure façon de repérer un prix anormal, en hausse comme en baisse.",
      },
      { type: "h2", text: "Tarif d'un électricien en urgence" },
      {
        type: "p",
        text: "Une intervention en urgence, week-end ou de nuit, est facturée entre 150 et 400 € pour une heure de travail, déplacement inclus. La majoration légale peut atteindre 100 % en horaires nocturnes et 50 % le dimanche. Beaucoup d'entreprises appliquent un forfait minimum, même pour un simple disjoncteur à réarmer.",
      },
      {
        type: "amazon",
        titre: "Le matériel utile pour vérifier ou dépanner avant l'électricien",
        produits: [
          { nom: "Multimètre numérique", description: "Mesurer tension, courant et continuité avant d'appeler un pro", recherche: "multimetre numerique electricien" },
          { nom: "Tournevis testeur de phase", description: "Vérifier rapidement si une prise est sous tension", recherche: "tournevis testeur de phase" },
          { nom: "Testeur de courant sans contact", description: "Détecter la présence de tension sans démonter", recherche: "testeur courant sans contact" },
          { nom: "Kit prises et interrupteurs", description: "Avoir des rechanges aux normes NF sous la main", recherche: "kit prises interrupteurs nf" },
          { nom: "Disjoncteurs différentiels 30 mA", description: "Composant clé du tableau aux normes NF C 15-100", recherche: "disjoncteur differentiel 30 ma" },
          { nom: "Gants isolants électricien", description: "Protection indispensable pour toute intervention sur tension", recherche: "gants isolants electricien" },
          { nom: "Pince à dénuder automatique", description: "Pour préparer proprement les fils électriques", recherche: "pince denuder automatique" },
        ],
      },
      { type: "h2", text: "Mise aux normes : un poste à anticiper" },
      {
        type: "p",
        text: "La norme NF C 15-100 impose un tableau avec disjoncteur différentiel 30 mA, des circuits dédiés et une liaison équipotentielle dans la salle de bains. Un logement de plus de quinze ans présente presque toujours des écarts à corriger. Comptez entre 800 et 2 200 € pour un tableau neuf, plus le tirage de fils si l'installation est ancienne.",
      },
      { type: "h2", text: "Aides financières disponibles" },
      {
        type: "p",
        text: "Plusieurs travaux électriques ouvrent droit à des aides en 2026 : MaPrimeRénov' pour l'installation d'une pompe à chaleur, prime CEE pour un radiateur performant, taux de TVA réduit à 5,5 % pour la rénovation énergétique. L'électricien doit être certifié RGE Qualifelec ou Qualibat pour que vous puissiez en bénéficier.",
      },
      {
        type: "cta",
        text: "Trouver un électricien près de chez vous",
        href: "/electricien",
      },
      { type: "h2", text: "Repérer un devis trop cher (ou trop bas)" },
      {
        type: "p",
        text: "Un devis très en-dessous du marché cache souvent un matériel bas de gamme ou une absence d'assurance décennale. À l'inverse, un devis 30 % au-dessus n'est pas forcément justifié : demandez les références des artisans, les certifications affichées et vérifiez le numéro SIRET.",
      },
      { type: "h2", text: "À retenir" },
      {
        type: "p",
        text: "En 2026, comptez 40 à 65 € HT de l'heure pour un électricien, plus le déplacement. Un devis écrit, détaillé et signé reste la meilleure protection contre les mauvaises surprises. Pour les travaux d'ampleur, privilégier un artisan certifié RGE permet de débloquer des aides et de garantir la conformité de l'installation.",
      },
    ],
  },
  {
    slug: "tarif-serrurier-urgence-2026",
    title: "Tarif serrurier urgence 2026 : prix réels et arnaques à éviter",
    description:
      "Combien coûte un serrurier en urgence en 2026 ? Tarifs jour, nuit, week-end, signaux d'arnaque et bons réflexes avant d'appeler.",
    metier: "serrurier-urgence",
    date: "2026-05-17",
    readTime: 8,
    intro:
      "Une porte claquée ou une serrure forcée à 23 h n'attend pas. C'est précisément ce moment de stress que certains serruriers indélicats exploitent, avec des factures qui peuvent dépasser 1 500 €. Voici les tarifs réels en 2026 et comment éviter les pièges les plus courants.",
    sections: [
      { type: "h2", text: "Tarif d'une ouverture de porte" },
      {
        type: "p",
        text: "Une ouverture de porte simple en journée coûte entre 80 et 180 € en 2026, déplacement compris. Pour une serrure trois points sans casse, comptez 130 à 250 €. Le tarif inclut généralement 30 à 60 minutes de travail. En cas d'intervention longue, certaines entreprises facturent un temps additionnel.",
      },
      { type: "h2", text: "Majorations de nuit, week-end et jours fériés" },
      {
        type: "ul",
        items: [
          "Intervention entre 20 h et 8 h : majoration de 50 à 100 %",
          "Week-end et jours fériés : majoration de 50 à 100 %",
          "Cumul nuit + dimanche : majoration jusqu'à 150 %",
          "Forfait minimum d'intervention : 80 à 150 € la plupart du temps",
        ],
      },
      {
        type: "p",
        text: "En clair, une ouverture qui coûte 100 € en journée peut grimper à 250 € un dimanche soir. C'est légal, à condition que les majorations soient annoncées par téléphone et reprises sur le devis.",
      },
      { type: "h2", text: "Prix du changement de serrure" },
      {
        type: "p",
        text: "Le changement d'une serrure trois points coûte entre 250 et 500 € fourniture et pose, et grimpe à 350-800 € pour une serrure cinq points certifiée A2P. Une serrure A2P trois étoiles, recommandée par les assureurs après cambriolage, peut atteindre 1 000 € posée. Le cylindre seul coûte 80 à 250 €.",
      },
      { type: "h2", text: "Les arnaques classiques en urgence" },
      {
        type: "p",
        text: "L'arnaque la plus courante consiste à annoncer un tarif bas au téléphone, puis à justifier sur place une réparation lourde inutile : remplacement complet alors qu'un simple décoincement suffisait, perçage facturé en double, pièces fictives ajoutées au devis.",
      },
      {
        type: "ul",
        items: [
          "Tarif téléphonique flou ou refus de donner un prix avant intervention",
          "Pression psychologique : porte 'irrécupérable', cambriolage imminent",
          "Devis signé sous contrainte avec un montant non négocié",
          "Refus de fournir une facture détaillée",
          "Numéro de téléphone surtaxé pour la prise de contact",
        ],
      },
      { type: "h2", text: "Les bons réflexes avant d'appeler" },
      {
        type: "p",
        text: "Avant d'appeler en panique, vérifier si un voisin a un double, contacter le bailleur ou le syndic, ou tester de glisser une radio plastique souple si la porte est juste claquée et qu'aucun verrou n'est tiré. Une porte claquée sans verrou n'a pas besoin d'être perforée : un bon serrurier ouvre en quelques minutes sans casse.",
      },
      {
        type: "amazon",
        titre: "Renforcer sa sécurité avant ou après un incident",
        produits: [
          { nom: "Cylindre de serrure A2P de rechange", description: "Pour remplacer un barillet sans changer toute la serrure", recherche: "cylindre serrure a2p" },
          { nom: "Kit anti-effraction porte d'entrée", description: "Cornière anti-pince et renforts pour porte vulnérable", recherche: "kit anti effraction porte" },
          { nom: "Cadenas haute sécurité", description: "Idéal portail, cave ou garage exposés", recherche: "cadenas haute securite" },
          { nom: "Boîte à clés sécurisée extérieure", description: "Pour éviter de rester à la porte sans appeler un serrurier", recherche: "boite a cles securisee exterieure" },
          { nom: "Kit duplicata de clé", description: "Faire faire un double avant d'en avoir besoin en urgence", recherche: "kit duplicata cle vierge" },
          { nom: "Verrou supplémentaire de sécurité", description: "Renforce une porte palière sans gros travaux", recherche: "verrou supplementaire porte" },
          { nom: "Alarme de porte sans fil", description: "Système d'alerte sonore peu coûteux", recherche: "alarme porte sans fil" },
        ],
      },
      { type: "h2", text: "Toujours exiger un devis ferme par écrit" },
      {
        type: "p",
        text: "La loi impose un devis écrit avant intervention, signé par le client. Refuser de signer n'importe quel devis avant d'avoir lu chaque ligne. En cas de doute, demander à appeler un proche, et noter le nom de l'entreprise, son adresse physique et son numéro SIRET pour vérifier son existence légale.",
      },
      {
        type: "cta",
        text: "Trouver un serrurier d'urgence vérifié près de chez vous",
        href: "/serrurier-urgence",
      },
      { type: "h2", text: "Que faire en cas d'abus" },
      {
        type: "p",
        text: "Si le tarif final dépasse fortement l'estimation téléphonique, payer par carte plutôt qu'en espèces pour pouvoir contester, conserver la facture et déposer une réclamation auprès de la DGCCRF via le portail SignalConso. Une plainte est possible pour pratique commerciale trompeuse.",
      },
      { type: "h2", text: "À retenir" },
      {
        type: "p",
        text: "Un serrurier sérieux annonce un tarif fourchette par téléphone, fournit un devis écrit avant toute action et facture une ouverture simple entre 80 et 250 € selon l'horaire. Au-delà, c'est qu'il y a soit un vrai blindage à percer, soit une arnaque. Dans le doute, raccrocher et appeler un second professionnel reste le meilleur réflexe.",
      },
    ],
  },
  {
    slug: "prix-couvreur-toiture-2026",
    title: "Prix d'un couvreur en 2026 : réfection, démoussage, isolation",
    description:
      "Tarifs 2026 d'un couvreur : démoussage, réparation, réfection complète, isolation par l'extérieur et aides à connaître avant de signer un devis.",
    metier: "couvreur",
    date: "2026-05-18",
    readTime: 9,
    intro:
      "Refaire sa toiture est l'un des chantiers les plus coûteux d'une maison, et les écarts de devis entre couvreurs peuvent dépasser 40 %. Pour s'y retrouver, voici les prix moyens 2026 et les postes qui justifient vraiment une différence de tarif.",
    sections: [
      { type: "h2", text: "Tarif horaire et conditions d'intervention" },
      {
        type: "p",
        text: "Un couvreur facture en moyenne 45 à 70 € HT de l'heure en 2026, hors fournitures. La plupart des chantiers ne sont toutefois pas chiffrés à l'heure mais au mètre carré, ce qui rend la comparaison plus pertinente. Le déplacement et le montage de l'échafaudage sont souvent intégrés au devis global.",
      },
      { type: "h2", text: "Prix d'un démoussage" },
      {
        type: "p",
        text: "Le démoussage d'une toiture coûte entre 12 et 25 € HT du mètre carré en 2026, incluant le nettoyage haute pression, le traitement anti-mousse et, en option, l'application d'un hydrofuge. Pour une maison de 100 m² de toiture, comptez entre 1 200 et 2 500 € selon l'état initial et la difficulté d'accès.",
      },
      {
        type: "p",
        text: "Un démoussage tous les cinq à dix ans prolonge la durée de vie de la couverture. Méfiance toutefois face aux démarcheurs qui sonnent à la porte avec une offre 'spéciale toiture' à prix cassé : c'est l'une des arnaques les plus signalées chez les seniors.",
      },
      { type: "h2", text: "Réparation ponctuelle" },
      {
        type: "ul",
        items: [
          "Remplacement de 5 à 10 tuiles cassées : 200 à 500 €",
          "Réparation d'une fuite ponctuelle : 250 à 800 €",
          "Remplacement d'une gouttière zinc (10 m) : 400 à 900 €",
          "Réfection d'un solin de cheminée : 300 à 700 €",
          "Pose d'un velux standard : 1 200 à 2 500 €",
        ],
      },
      { type: "h2", text: "Coût d'une réfection complète" },
      {
        type: "p",
        text: "Refaire entièrement une toiture coûte entre 100 et 250 € du mètre carré en 2026, selon les matériaux. Une couverture en tuiles mécaniques se situe vers 100-150 €/m², les tuiles plates terre cuite entre 130 et 200 €/m², l'ardoise naturelle entre 180 et 280 €/m² et le zinc à joint debout entre 200 et 300 €/m².",
      },
      {
        type: "p",
        text: "À ces prix s'ajoutent la dépose de l'ancienne couverture (15-30 €/m²), l'évacuation des déchets et, si nécessaire, le remplacement de la charpente abîmée. Pour une maison de 120 m² au sol, l'enveloppe globale dépasse souvent 25 000 €.",
      },
      { type: "h2", text: "Isolation de toiture par l'extérieur" },
      {
        type: "p",
        text: "L'isolation par sarking, posée en même temps que la réfection, coûte entre 150 et 280 € du mètre carré. Ce surcoût est en grande partie compensé par MaPrimeRénov' et la prime CEE Coup de pouce. Le gain énergétique est immédiat, en particulier sur les combles aménagés.",
      },
      {
        type: "amazon",
        titre: "Entretenir sa toiture entre deux passages du couvreur",
        produits: [
          { nom: "Produit démoussage toiture concentré", description: "Traitement curatif contre mousses et lichens", recherche: "produit demoussage toiture concentre" },
          { nom: "Anti-mousse longue durée toiture", description: "Effet préventif sur plusieurs années", recherche: "anti mousse toiture longue duree" },
          { nom: "Hydrofuge toiture incolore", description: "Protège tuiles et ardoises de l'humidité", recherche: "hydrofuge toiture incolore" },
          { nom: "Pulvérisateur 16 litres à pression", description: "Pour appliquer un anti-mousse uniformément", recherche: "pulverisateur 16 litres pression" },
          { nom: "Harnais de sécurité antichute toiture", description: "Indispensable pour toute intervention en hauteur", recherche: "harnais securite antichute toiture" },
          { nom: "Échelle télescopique 4 mètres", description: "Pour accéder aux toitures basses en sécurité", recherche: "echelle telescopique 4 metres" },
          { nom: "Crochets d'échelle de toit", description: "Stabilise l'échelle sur la couverture", recherche: "crochet echelle de toit" },
        ],
      },
      { type: "h2", text: "Aides et certifications à exiger" },
      {
        type: "p",
        text: "Pour bénéficier des aides 2026, le couvreur doit être certifié RGE Qualibat. Sans cette mention, aucune prime ne sera versée, même si le matériel utilisé est performant. Vérifier la mention sur le devis, et la confirmer sur france-renov.gouv.fr.",
      },
      {
        type: "cta",
        text: "Trouver un couvreur certifié près de chez vous",
        href: "/couvreur",
      },
      { type: "h2", text: "Garantie décennale obligatoire" },
      {
        type: "p",
        text: "Tout couvreur doit présenter une attestation d'assurance décennale en cours de validité. Cette garantie couvre les défauts d'étanchéité et de structure pendant dix ans après réception. Un artisan qui refuse de fournir cette attestation doit être écarté, même si son devis paraît attractif.",
      },
      { type: "h2", text: "À retenir" },
      {
        type: "p",
        text: "En 2026, comptez 12-25 €/m² pour un démoussage, 100-250 €/m² pour une réfection complète, et prévoyez les aides RGE pour amortir une isolation par l'extérieur. Trois devis détaillés, une attestation décennale et la certification RGE Qualibat sont les trois vérifications indispensables avant de signer.",
      },
    ],
  },
  {
    slug: "devis-demenagement-comparer-2026",
    title: "Devis déménagement 2026 : comment les comparer sans se faire avoir",
    description:
      "Comparer des devis de déménagement en 2026 : volume, formules, assurance, options cachées. Le guide pour ne pas exploser son budget.",
    metier: "demenageur",
    date: "2026-05-18",
    readTime: 8,
    intro:
      "Un même déménagement peut se chiffrer du simple au triple selon les entreprises sollicitées. Les écarts s'expliquent rarement par la qualité, mais surtout par des formules différentes et des options dissimulées. Voici comment lire un devis sans se faire piéger.",
    sections: [
      { type: "h2", text: "Faire estimer le volume avec précision" },
      {
        type: "p",
        text: "Le prix d'un déménagement dépend d'abord du volume en mètres cubes. Pour un studio, comptez 10-15 m³, pour un T2 environ 20 m³, pour un T3 entre 25 et 35 m³, et pour une maison de quatre chambres entre 50 et 70 m³. Une visite technique gratuite, sur place ou en visio, reste le moyen le plus fiable d'obtenir un chiffrage juste.",
      },
      {
        type: "p",
        text: "Un devis basé uniquement sur le nombre de pièces est rarement précis. Une erreur de 10 m³ peut entraîner un supplément non négligeable le jour J, voire le refus du déménageur de tout charger.",
      },
      { type: "h2", text: "Les trois formules classiques" },
      {
        type: "ul",
        items: [
          "Formule économique : vous emballez tout, le déménageur charge et transporte. Coût le plus bas mais beaucoup de préparation.",
          "Formule standard : le déménageur emballe la vaisselle et les objets fragiles, vous gérez le reste. Le bon compromis.",
          "Formule clé en main : le déménageur emballe, démonte, transporte, remonte et range. Coût 30 à 50 % plus élevé qu'en standard.",
        ],
      },
      { type: "h2", text: "Fourchettes de prix 2026" },
      {
        type: "p",
        text: "Pour un déménagement à moins de 50 km, comptez 500-1 000 € pour un studio, 1 000-1 800 € pour un T3 et 2 200-4 500 € pour une maison. À longue distance, la facture grimpe vite : un déménagement Paris-Marseille pour un T3 oscille entre 2 500 et 4 500 € en standard, davantage en clé en main.",
      },
      { type: "h2", text: "Les options qui font gonfler la facture" },
      {
        type: "ul",
        items: [
          "Monte-meuble : 200 à 500 € par accès, indispensable au-delà du 4e étage sans ascenseur",
          "Stationnement réservé : 30 à 80 € par camion, souvent à demander en mairie",
          "Garde-meubles : 50 à 150 € par mois selon le volume",
          "Démontage / remontage cuisine équipée : 200 à 600 €",
          "Emballage cartons et fournitures : 100 à 400 €",
          "Manutention objets lourds (piano, coffre-fort) : 150 à 500 €",
        ],
      },
      {
        type: "amazon",
        titre: "Le matériel pour préparer son déménagement sereinement",
        produits: [
          { nom: "Pack 30 cartons de déménagement", description: "Cartons double cannelure renforcés", recherche: "cartons demenagement double cannelure" },
          { nom: "Scotch d'emballage renforcé", description: "Indispensable pour fermer les cartons", recherche: "scotch emballage renforce demenagement" },
          { nom: "Rouleau papier bulle 100 m", description: "Pour protéger vaisselle et objets fragiles", recherche: "papier bulle rouleau 100 metres" },
          { nom: "Sangles à cliquet de manutention", description: "Pour sécuriser meubles et électroménager dans le camion", recherche: "sangles cliquet demenagement" },
          { nom: "Diable pliable 150 kg", description: "Pour déplacer charges lourdes sans se blesser", recherche: "diable pliable 150 kg" },
          { nom: "Housses de protection matelas", description: "Préserve les matelas de la poussière et des taches", recherche: "housse protection matelas demenagement" },
          { nom: "Marqueurs permanents lot de 10", description: "Pour étiqueter les cartons par pièce", recherche: "marqueurs permanents lot 10" },
          { nom: "Couvertures de déménagement", description: "Protègent meubles et angles pendant le transport", recherche: "couverture demenagement protection" },
        ],
      },
      { type: "h2", text: "Assurance et garantie" },
      {
        type: "p",
        text: "Tout déménageur professionnel a une responsabilité limitée par mètre cube transporté. Pour des biens de valeur, une déclaration de valeur en supplément (1 à 3 % de la valeur déclarée) permet une indemnisation réelle en cas de casse. Le devis doit mentionner clairement le plafond d'indemnisation.",
      },
      { type: "h2", text: "Comparer trois devis minimum" },
      {
        type: "p",
        text: "Demander au moins trois devis sur la même base : même volume, même formule, mêmes options. Lire en détail les exclusions et les conditions de modification ou d'annulation. Une entreprise qui refuse la visite technique ou qui annonce un prix sans devis écrit est à écarter.",
      },
      {
        type: "cta",
        text: "Trouver un déménageur près de chez vous",
        href: "/demenageur",
      },
      { type: "h2", text: "Crédit d'impôt et aides employeur" },
      {
        type: "p",
        text: "Un déménagement professionnel ouvre parfois droit à une prime mobilité de l'employeur. La fonction publique verse une indemnité forfaitaire selon le nombre d'enfants et la distance. Action Logement propose le Mobili-Pass jusqu'à 3 500 € pour une mutation. Penser à vérifier l'éligibilité avant de signer.",
      },
      { type: "h2", text: "À retenir" },
      {
        type: "p",
        text: "Un devis fiable repose sur un volume mesuré sur place, une formule clairement définie et des options chiffrées une par une. Trois devis comparables, une attestation d'assurance et une lecture attentive des exclusions suffisent à éviter la majorité des mauvaises surprises le jour J.",
      },
    ],
  },
  {
    slug: "fuite-eau-que-faire-urgence",
    title: "Fuite d'eau : que faire en urgence avant l'arrivée du plombier",
    description:
      "Fuite d'eau à la maison : les bons réflexes pour limiter les dégâts, couper l'eau, protéger l'installation électrique et préparer l'intervention du plombier.",
    metier: "plombier",
    date: "2026-05-19",
    readTime: 8,
    intro:
      "Une fuite d'eau qui démarre la nuit ou un dimanche peut transformer un simple incident en sinistre à plusieurs milliers d'euros. Quelques gestes immédiats permettent de limiter les dégâts en attendant l'arrivée du plombier, et facilitent la prise en charge par l'assurance.",
    sections: [
      { type: "h2", text: "Étape 1 : couper l'arrivée d'eau" },
      {
        type: "p",
        text: "Le premier réflexe consiste à fermer la vanne d'arrêt général, souvent située sous l'évier, dans un placard, près du compteur ou dans la cave selon la configuration. En appartement, elle est généralement dans les WC ou dans un coffret du palier. Si la vanne est dure, ne pas forcer brutalement, mais utiliser une clé à molette pour ne pas l'endommager.",
      },
      {
        type: "p",
        text: "Si la fuite est localisée sur un seul appareil (machine à laver, lave-vaisselle, robinet), il suffit de fermer la vanne quart de tour qui se trouve à proximité immédiate. Cela permet de garder l'eau dans le reste du logement.",
      },
      { type: "h2", text: "Étape 2 : couper l'électricité si l'eau s'approche" },
      {
        type: "p",
        text: "Si l'eau ruisselle vers une prise, un radiateur électrique ou le tableau, couper immédiatement le disjoncteur général. Une électrocution par contact eau-électricité est l'une des premières causes d'accident domestique grave en cas de dégât des eaux.",
      },
      { type: "h2", text: "Étape 3 : limiter la propagation" },
      {
        type: "ul",
        items: [
          "Placer des serpillières, draps épais ou bâche autour de la fuite",
          "Déplacer immédiatement les meubles en bois et les tapis",
          "Vider les placards bas dont le fond peut être abîmé",
          "Surélever les multiprises et appareils électriques au sol",
          "Aérer pour éviter les moisissures rapides",
        ],
      },
      { type: "h2", text: "Étape 4 : prévenir le voisinage si nécessaire" },
      {
        type: "p",
        text: "En appartement, prévenir le voisin du dessous dès qu'on soupçonne une fuite : c'est souvent lui qui voit la trace au plafond avant qu'on ne s'en rende compte chez soi. Pour un syndicat de copropriété, contacter le syndic ou le gardien permet d'identifier les colonnes communes et de couper l'eau de l'immeuble si besoin.",
      },
      { type: "h2", text: "Étape 5 : documenter pour l'assurance" },
      {
        type: "p",
        text: "Prendre des photos avant tout nettoyage, garder les emballages des appareils détériorés, noter l'heure de l'incident. Le constat amiable dégâts des eaux doit être rempli dans les cinq jours et envoyé à l'assurance habitation. Sans ces preuves, l'indemnisation est souvent revue à la baisse.",
      },
      {
        type: "amazon",
        titre: "Le kit de première urgence à garder à la maison",
        produits: [
          { nom: "Ruban auto-fusion étanchéité", description: "Stoppe une fuite temporairement sur tuyau cuivre ou PVC", recherche: "ruban auto fusion etancheite plomberie" },
          { nom: "Mastic plombier multi-usages", description: "Colmate provisoirement raccords et petites fissures", recherche: "mastic plombier multi usage" },
          { nom: "Coupe-tube cuivre", description: "Outil indispensable pour préparer une réparation propre", recherche: "coupe tube cuivre plomberie" },
          { nom: "Assortiment de joints plomberie", description: "Joints fibre et caoutchouc pour tous types de raccords", recherche: "assortiment joints plomberie" },
          { nom: "Seau pliable 15 litres", description: "Récupère l'eau sans encombrer le placard", recherche: "seau pliable 15 litres" },
          { nom: "Serviettes microfibre ultra absorbantes", description: "Absorbent vite une flaque sans démaillage", recherche: "serviettes microfibre ultra absorbantes" },
          { nom: "Aspirateur eau et poussière", description: "Évacue rapidement l'eau résiduelle après la fuite", recherche: "aspirateur eau poussiere" },
        ],
      },
      { type: "h2", text: "Quand appeler un plombier d'urgence" },
      {
        type: "p",
        text: "Une fuite qui ne s'arrête pas après la coupure d'eau, une canalisation visiblement éclatée ou une fuite sur un raccord gaz : autant de situations qui nécessitent une intervention immédiate. Pour une fuite mineure déjà contenue, un rendez-vous classique le lendemain évite la majoration nuit-week-end de 50 à 100 %.",
      },
      {
        type: "cta",
        text: "Trouver un plombier près de chez vous",
        href: "/plombier",
      },
      { type: "h2", text: "Préparer l'intervention du plombier" },
      {
        type: "p",
        text: "Lister à l'avance les symptômes (origine, débit, depuis quand), faciliter l'accès à la zone, libérer un parking pour le véhicule. Avoir une lampe torche, un seau et un chiffon prêts évite de perdre de précieuses minutes à l'arrivée du professionnel.",
      },
      { type: "h2", text: "À retenir" },
      {
        type: "p",
        text: "Couper l'eau, couper l'électricité si nécessaire, contenir l'écoulement, prévenir les voisins, photographier les dégâts : ces cinq réflexes en moins de cinq minutes peuvent diviser par dix le coût final d'une fuite. Ils permettent aussi au plombier d'intervenir dans de meilleures conditions et d'établir un diagnostic plus rapide.",
      },
    ],
  },
  {
    slug: "panne-electrique-totale-que-faire",
    title: "Panne électrique totale : que faire avant d'appeler l'électricien",
    description:
      "Panne électrique totale à la maison : les vérifications à faire avant d'appeler l'électricien et de payer une intervention d'urgence.",
    metier: "electricien",
    date: "2026-05-19",
    readTime: 7,
    intro:
      "Plus aucune lumière, le frigo qui se tait, le compteur qui clignote : une panne électrique totale est toujours impressionnante. Avant d'appeler un électricien en urgence et de payer 200 € de déplacement, quelques vérifications simples permettent souvent de rétablir le courant en quelques minutes.",
    sections: [
      { type: "h2", text: "Étape 1 : vérifier si les voisins sont coupés" },
      {
        type: "p",
        text: "La première question : la coupure touche-t-elle aussi les voisins ? Si oui, le problème vient du réseau public Enedis. Aucun électricien privé ne peut intervenir. Composer le 09 72 67 50 suivi du numéro du département pour signaler la panne et obtenir une estimation de rétablissement.",
      },
      { type: "h2", text: "Étape 2 : contrôler le disjoncteur général" },
      {
        type: "p",
        text: "Si la coupure est limitée au logement, vérifier le disjoncteur général (souvent situé près du compteur, dans une boîte rouge ou grise). S'il est en position basse, c'est qu'il a sauté. Le réarmer une première fois. S'il retombe immédiatement, c'est qu'un appareil ou une installation est défectueux.",
      },
      { type: "h2", text: "Étape 3 : tester les différentiels" },
      {
        type: "p",
        text: "Dans le tableau électrique, repérer les interrupteurs différentiels (généralement marqués 30 mA). Si l'un d'eux est en position basse, c'est qu'il a détecté une fuite de courant. Le remonter en position haute. S'il replonge, baisser tous les disjoncteurs en dessous, remonter le différentiel, puis remonter les disjoncteurs un par un. Celui qui fait sauter le différentiel identifie le circuit fautif.",
      },
      { type: "h2", text: "Étape 4 : débrancher les appareils suspects" },
      {
        type: "p",
        text: "Une fois le circuit identifié, débrancher tous les appareils branchés sur les prises de cette zone. Si le courant revient, brancher les appareils un par un jusqu'à trouver celui qui cause la coupure. Souvent : un chauffe-eau vieillissant, un sèche-linge, une multiprise surchargée ou un fer à repasser oublié sous tension.",
      },
      { type: "h2", text: "Cas particulier : le compteur Linky" },
      {
        type: "p",
        text: "Si le Linky affiche 'PUISSANCE DÉPASSÉE', c'est que la puissance souscrite est insuffisante par rapport à la consommation simultanée. Débrancher quelques appareils, attendre 30 secondes, puis appuyer sur la touche '+' du compteur pour relancer. Si cela se reproduit souvent, envisager une augmentation de puissance auprès du fournisseur.",
      },
      { type: "h2", text: "Quand appeler l'électricien d'urgence" },
      {
        type: "ul",
        items: [
          "Le disjoncteur général ne se réarme pas, même après vérifications",
          "Odeur de brûlé, fumée, échauffement anormal d'une prise",
          "Crépitements ou étincelles dans le tableau",
          "Coupure persistante un soir d'hiver avec personnes vulnérables au domicile",
          "Panne suite à une infiltration d'eau (couper d'abord disjoncteur ET arrivée d'eau)",
        ],
      },
      { type: "h2", text: "Sécurité avant tout" },
      {
        type: "p",
        text: "En cas d'odeur de brûlé ou de fumée, couper immédiatement le disjoncteur général et appeler les pompiers au 18 avant tout. Ne pas ouvrir le tableau, ne pas toucher au compteur avec les mains mouillées, ne pas tenter de réparer soi-même un câble dénudé.",
      },
      {
        type: "amazon",
        titre: "Le kit de premier secours électrique à avoir chez soi",
        produits: [
          { nom: "Testeur de courant sans contact", description: "Détecte la tension d'une simple pression, sans contact direct", recherche: "testeur courant sans contact" },
          { nom: "Lampe torche LED rechargeable", description: "Autonomie longue durée pour intervenir dans le noir", recherche: "lampe torche led rechargeable puissante" },
          { nom: "Kit de fusibles assortis", description: "Pour remplacer un fusible grillé sans courir au magasin", recherche: "kit fusibles assortis maison" },
          { nom: "Batterie de secours USB 20000 mAh", description: "Garde téléphone et lampes chargés en cas de panne longue", recherche: "batterie secours usb 20000 mah" },
          { nom: "Multimètre numérique", description: "Permet de vérifier soi-même les bases avant l'électricien", recherche: "multimetre numerique electricien" },
          { nom: "Détecteur de fumée et monoxyde", description: "Alerte sonore en cas d'échauffement ou de combustion", recherche: "detecteur fumee monoxyde carbone" },
          { nom: "Lampe frontale LED", description: "Mains libres pour manipuler le tableau électrique", recherche: "lampe frontale led rechargeable" },
        ],
      },
      {
        type: "cta",
        text: "Trouver un électricien près de chez vous",
        href: "/electricien",
      },
      { type: "h2", text: "Préparer l'intervention" },
      {
        type: "p",
        text: "Si l'appel à un électricien est inévitable, noter quel disjoncteur saute, depuis quand, et les appareils récemment ajoutés. Avoir une lampe torche prête, libérer l'accès au tableau, et préparer une facture EDF récente avec le numéro PDL (point de livraison). Cela accélère le diagnostic et limite le temps facturé.",
      },
      { type: "h2", text: "À retenir" },
      {
        type: "p",
        text: "Une panne totale vient à 80 % d'un disjoncteur sauté ou d'un appareil défectueux. Les cinq minutes de vérifications avant d'appeler peuvent économiser 150 € de déplacement et la majoration nuit. Quand l'odeur de brûlé ou la fumée s'en mêlent, l'urgence prime : coupure générale immédiate et appel aux secours.",
      },
    ],
  },
  {
    slug: "prix-chauffagiste-entretien-chaudiere-2026",
    title: "Prix entretien chaudière 2026 : obligation, contrat, tarifs",
    description:
      "Tarifs 2026 de l'entretien chaudière : obligation légale, contrat annuel, ramonage, coûts moyens et conseils pour choisir un chauffagiste fiable.",
    metier: "chauffagiste",
    date: "2026-05-20",
    readTime: 8,
    intro:
      "L'entretien annuel d'une chaudière n'est pas un confort, c'est une obligation légale depuis 2009. Au-delà du respect de la loi, c'est aussi une garantie de sécurité, de performance et un argument décisif face à l'assurance en cas de sinistre.",
    sections: [
      { type: "h2", text: "Ce que dit la loi" },
      {
        type: "p",
        text: "L'entretien annuel est obligatoire pour toute chaudière à gaz, fioul, bois ou multi-énergie de 4 à 400 kW. Cette obligation pèse sur l'occupant du logement (locataire ou propriétaire occupant), sauf clause contraire du bail. Le défaut d'entretien peut entraîner un refus d'indemnisation en cas d'intoxication au monoxyde de carbone ou d'incendie.",
      },
      { type: "h2", text: "Prix d'un entretien ponctuel" },
      {
        type: "p",
        text: "Un entretien chaudière standard, sans contrat, coûte entre 90 et 180 € TTC en 2026 selon le type d'équipement. Pour une chaudière gaz à condensation, comptez 110-160 €. Pour une chaudière fioul, plutôt 150-220 €. Une pompe à chaleur air-eau s'entretient pour 150-280 € selon les modèles.",
      },
      { type: "h2", text: "Contrat d'entretien annuel" },
      {
        type: "p",
        text: "Le contrat annuel reste la solution la plus utilisée. Il inclut la visite annuelle, le déplacement pour pannes et, selon les formules, le remplacement de certaines pièces d'usure. Les tarifs varient entre 130 et 290 € par an pour une chaudière gaz, et entre 180 et 350 € pour une chaudière fioul.",
      },
      {
        type: "ul",
        items: [
          "Formule basique : visite annuelle + déplacement pour pannes (130-180 €)",
          "Formule intermédiaire : visite + pannes + petites pièces (180-240 €)",
          "Formule confort : visite + pannes + main-d'œuvre + pièces (240-350 €)",
          "Formule sérénité : tout compris, pompes et corps de chauffe (300-450 €)",
        ],
      },
      { type: "h2", text: "Ce que comprend la visite annuelle" },
      {
        type: "p",
        text: "Une visite d'entretien sérieuse dure 45 minutes à 1 heure. Le chauffagiste contrôle l'étanchéité gaz, nettoie le brûleur et le corps de chauffe, vérifie la pression et la qualité de la combustion, contrôle les sécurités, mesure le taux de CO et l'efficacité énergétique, puis remet une attestation d'entretien obligatoire à conserver.",
      },
      { type: "h2", text: "À quel moment faire l'entretien" },
      {
        type: "p",
        text: "L'idéal est d'organiser la visite entre mai et septembre, hors période de chauffe. Les chauffagistes sont moins sollicités, les délais plus courts et certains pratiquent des tarifs préférentiels en saison creuse. Programmer l'entretien à la même date chaque année simplifie le suivi.",
      },
      {
        type: "amazon",
        titre: "Les équipements pour mieux contrôler son chauffage",
        produits: [
          { nom: "Thermostat connecté programmable", description: "Réduit la facture en pilotant la chaudière depuis le téléphone", recherche: "thermostat connecte programmable chaudiere" },
          { nom: "Détecteur de monoxyde de carbone", description: "Indispensable pour toute chaudière à combustion", recherche: "detecteur monoxyde carbone certifie" },
          { nom: "Nettoyant chaudière concentré", description: "Élimine les boues et dépôts du circuit chauffage", recherche: "nettoyant chaudiere concentre circuit" },
          { nom: "Antigel chauffage central", description: "Protège le circuit en cas de coupure prolongée l'hiver", recherche: "antigel chauffage central" },
          { nom: "Manomètre pression chaudière", description: "Vérifier soi-même la pression entre deux visites annuelles", recherche: "manometre pression chaudiere" },
          { nom: "Inhibiteur de corrosion chauffage", description: "Prolonge la durée de vie du circuit et du corps de chauffe", recherche: "inhibiteur corrosion chauffage central" },
          { nom: "Radiateur d'appoint soufflant céramique", description: "Solution dépannage le temps de l'intervention", recherche: "radiateur appoint soufflant ceramique" },
        ],
      },
      { type: "h2", text: "Choisir un chauffagiste fiable" },
      {
        type: "ul",
        items: [
          "Vérifier la certification RGE Qualibat ou Qualipac (indispensable pour les aides)",
          "Demander l'attestation d'assurance professionnelle",
          "Lire les avis sur Google et Pages Jaunes (lire les négatifs)",
          "Privilégier un artisan local avec atelier identifiable",
          "Refuser un démarchage non sollicité, courant pour la chaudière",
        ],
      },
      { type: "h2", text: "Aides pour le remplacement" },
      {
        type: "p",
        text: "Si l'entretien révèle qu'un remplacement est inévitable, MaPrimeRénov' couvre une partie du coût d'une chaudière à très haute performance ou d'une pompe à chaleur. Le forfait varie de 1 200 à 5 000 € selon les revenus du foyer, cumulable avec les CEE et l'éco-prêt à taux zéro.",
      },
      {
        type: "cta",
        text: "Trouver un chauffagiste près de chez vous",
        href: "/chauffagiste",
      },
      { type: "h2", text: "Le piège du contrat reconduit tacitement" },
      {
        type: "p",
        text: "Beaucoup de contrats d'entretien sont reconduits tacitement chaque année avec hausse automatique. La loi Chatel impose au prestataire de prévenir l'abonné au plus tôt 3 mois et au plus tard 1 mois avant l'échéance. Sans ce courrier, la résiliation reste possible à tout moment. Vérifier chaque année si le tarif reste compétitif.",
      },
      { type: "h2", text: "À retenir" },
      {
        type: "p",
        text: "L'entretien annuel coûte 90-180 € en intervention ponctuelle et 130-290 € en contrat. Garder l'attestation au moins 2 ans, vérifier la certification RGE et privilégier la saison creuse pour optimiser les tarifs. Un entretien régulier prolonge la durée de vie de la chaudière de cinq à dix ans et fait baisser la consommation de 8 à 12 %.",
      },
    ],
  },
  {
    slug: "ramonage-obligatoire-tarifs-2026",
    title: "Ramonage obligatoire 2026 : fréquence, tarifs, certificat",
    description:
      "Ramonage obligatoire 2026 : fréquence selon la commune, tarifs cheminée et poêle, certificat à conserver et risques d'assurance.",
    metier: "ramoneur",
    date: "2026-05-20",
    readTime: 7,
    intro:
      "Le ramonage reste l'une des obligations les plus mal connues en France. Pourtant, un défaut de ramonage peut entraîner un refus d'indemnisation de l'assurance en cas de feu de cheminée et une amende communale. Voici l'essentiel à connaître pour la saison 2026.",
    sections: [
      { type: "h2", text: "Le cadre réglementaire 2026" },
      {
        type: "p",
        text: "Depuis le décret du 22 octobre 2023, le ramonage est encadré par un arrêté préfectoral dans chaque département, qui définit la fréquence et le type de combustibles concernés. La règle générale impose un ramonage annuel pour les conduits utilisés à un combustible liquide ou solide, et deux ramonages par an pour le bois (un avant et un pendant la saison de chauffe).",
      },
      { type: "h2", text: "Tarifs moyens en 2026" },
      {
        type: "ul",
        items: [
          "Ramonage d'une cheminée à foyer ouvert : 50 à 90 €",
          "Ramonage d'un insert ou poêle à bûches : 70 à 110 €",
          "Ramonage d'un poêle à granulés : 90 à 140 €",
          "Débistrage en cas de bistre épais : 150 à 350 € en supplément",
          "Diagnostic conduit (caméra) : 80 à 180 €",
        ],
      },
      {
        type: "p",
        text: "Les tarifs varient selon la région et l'accessibilité du conduit. Les zones rurales pratiquent souvent des prix 15 à 25 % inférieurs à ceux des grandes métropoles. Une intervention en dehors des heures ouvrées peut être majorée.",
      },
      { type: "h2", text: "Le certificat de ramonage" },
      {
        type: "p",
        text: "À la fin de l'intervention, le ramoneur doit remettre un certificat mentionnant son identité, son numéro de SIRET, la date, le conduit ramoné et l'état général. Conserver ce document au minimum deux ans : c'est ce qui sera demandé par l'assurance en cas de sinistre. Un ramonage effectué soi-même n'a aucune valeur juridique.",
      },
      { type: "h2", text: "Conséquences d'un défaut de ramonage" },
      {
        type: "p",
        text: "En cas de feu de cheminée, l'assureur peut refuser ou minorer l'indemnisation si le certificat est absent ou trop ancien. Une amende de 3e classe (jusqu'à 450 €) peut aussi être prononcée par la mairie. Sur le plan sanitaire, un conduit encrassé augmente fortement le risque d'intoxication au monoxyde de carbone.",
      },
      { type: "h2", text: "Quand programmer le ramonage" },
      {
        type: "p",
        text: "L'idéal est de programmer un premier ramonage en septembre, avant l'allumage. Pour les utilisateurs intensifs, un second en janvier ou février permet d'évacuer le bistre accumulé. Les ramoneurs sont vite débordés entre septembre et novembre : réserver dès août limite les délais.",
      },
      {
        type: "amazon",
        titre: "Entretenir poêle et cheminée entre deux passages du ramoneur",
        produits: [
          { nom: "Kit ramonage hérisson nylon", description: "Pour les nettoyages d'appoint entre deux interventions", recherche: "kit ramonage herisson nylon" },
          { nom: "Bûche ramoneuse", description: "Aide à décoller le bistre du conduit", recherche: "buche ramoneuse cheminee" },
          { nom: "Aspirateur cendres avec filtre HEPA", description: "Aspire en sécurité les cendres encore tièdes", recherche: "aspirateur cendres hepa" },
          { nom: "Gants protection chaleur cheminée", description: "Manipuler bûches et accessoires sans risque", recherche: "gants protection chaleur cheminee" },
          { nom: "Bâche de protection sol", description: "Préserve le parquet pendant l'entretien", recherche: "bache protection sol chantier" },
          { nom: "Détecteur de monoxyde de carbone", description: "Indispensable pour tout foyer à combustion", recherche: "detecteur monoxyde carbone certifie" },
          { nom: "Nettoyant vitre insert efficace", description: "Pour retrouver une vitre transparente sans rayer", recherche: "nettoyant vitre insert cheminee" },
        ],
      },
      { type: "h2", text: "Cas du locataire" },
      {
        type: "p",
        text: "Le ramonage est à la charge du locataire qui utilise le conduit, sauf clause spécifique du bail. Pour les chauffages collectifs, c'est la copropriété qui prend en charge le ramonage des conduits communs. Vérifier le règlement de copropriété en cas de doute.",
      },
      {
        type: "cta",
        text: "Trouver un ramoneur certifié près de chez vous",
        href: "/ramoneur",
      },
      { type: "h2", text: "Choisir un ramoneur sérieux" },
      {
        type: "p",
        text: "Le métier de ramoneur n'est pas réglementé en France, mais la qualification Qualibat 6111 garantit une formation reconnue. Vérifier la mention de l'assurance professionnelle, refuser le démarchage à domicile, et privilégier un artisan local recommandé. Méfiance face aux camions blancs sans nom proposant un ramonage 'au pied levé' pour 35 €.",
      },
      { type: "h2", text: "À retenir" },
      {
        type: "p",
        text: "En 2026, comptez 50-140 € pour un ramonage selon l'équipement, à programmer une à deux fois par an. Conserver le certificat au moins deux ans et vérifier l'arrêté préfectoral local. Un ramonage régulier protège du feu, du monoxyde de carbone et garantit la prise en charge par l'assurance en cas de sinistre.",
      },
    ],
  },
  {
    slug: "prix-vitrier-remplacement-vitre-2026",
    title: "Prix vitrier 2026 : remplacement vitre, double vitrage, urgence",
    description:
      "Tarifs d'un vitrier en 2026 : remplacement vitre simple, double vitrage, intervention d'urgence après bris. Tout pour comparer un devis.",
    metier: "vitrier",
    date: "2026-05-21",
    readTime: 8,
    intro:
      "Une vitre cassée se remplace rarement au prix annoncé sur Internet, car beaucoup de paramètres entrent en jeu : type de verre, dimensions, accessibilité, urgence. Voici les tarifs moyens 2026 et les bons réflexes pour ne pas payer le double du prix.",
    sections: [
      { type: "h2", text: "Prix d'un remplacement de vitre simple" },
      {
        type: "p",
        text: "Une vitre simple coûte entre 100 et 250 € posée en 2026 selon les dimensions, le format (standard ou sur-mesure) et l'accessibilité de la pose. Pour une vitre de plus de 1,5 m², les prix grimpent vite : la fabrication doit souvent être sur-mesure et la manutention nécessite deux personnes.",
      },
      { type: "h2", text: "Double vitrage" },
      {
        type: "p",
        text: "Le remplacement d'un double vitrage standard coûte entre 180 et 450 € posé, selon le type de verre (clair, à isolation renforcée, anti-effraction). Pour un double vitrage feuilleté de sécurité, comptez 350 à 700 €. Le triple vitrage, encore peu courant, atteint 500 à 900 € posé.",
      },
      {
        type: "ul",
        items: [
          "Double vitrage clair 4-16-4 : 180 à 320 €/m² posé",
          "Double vitrage à isolation renforcée 4-16-4 ITR : 220 à 380 €/m² posé",
          "Double vitrage feuilleté retardateur d'effraction : 350 à 600 €/m² posé",
          "Triple vitrage : 500 à 900 €/m² posé",
          "Verre dépoli ou décoratif : majoration de 20 à 40 %",
        ],
      },
      { type: "h2", text: "Intervention d'urgence après effraction" },
      {
        type: "p",
        text: "Après un cambriolage ou un bris accidentel le soir, un vitrier d'urgence intervient pour sécuriser l'ouverture avec un panneau de bois ou un film plastique épais : compter 150 à 350 € pour cette mise en sécurité temporaire. Le remplacement définitif est facturé à part, généralement 48 à 72 heures plus tard, le temps de fabriquer la vitre sur-mesure.",
      },
      { type: "h2", text: "Pose de miroirs et parois de douche" },
      {
        type: "ul",
        items: [
          "Pose d'un miroir mural sur-mesure : 90 à 250 €",
          "Pose d'une paroi de douche fixe : 250 à 550 €",
          "Pose d'une paroi de douche pivotante : 400 à 900 €",
          "Verrière intérieure type atelier (par mètre linéaire) : 350 à 700 €",
        ],
      },
      {
        type: "amazon",
        titre: "Sécuriser une vitre cassée et améliorer son vitrage",
        produits: [
          { nom: "Film survitrage isolant transparent", description: "Améliore l'isolation thermique sans changer la vitre", recherche: "film survitrage isolant transparent" },
          { nom: "Mastic vitrier tube", description: "Pour remplacer un joint d'étanchéité usé", recherche: "mastic vitrier tube" },
          { nom: "Ventouse double pour vitre", description: "Manipuler un vitrage sans risquer de le faire glisser", recherche: "ventouse double vitre" },
          { nom: "Gants anti-coupure haute protection", description: "Indispensables pour manipuler des éclats de verre", recherche: "gants anti coupure niveau 5" },
          { nom: "Film de protection sécurité fenêtre", description: "Retient les éclats en cas de bris", recherche: "film securite fenetre anti effraction" },
          { nom: "Adhésif large transparent étanche", description: "Solution de secours sur une vitre fissurée", recherche: "adhesif large transparent etanche" },
          { nom: "Bâche plastique épaisse", description: "Obturer une ouverture en attendant l'intervention", recherche: "bache plastique epaisse renforcee" },
        ],
      },
      { type: "h2", text: "Ce qui fait varier le prix" },
      {
        type: "p",
        text: "Trois facteurs principaux : les dimensions et l'épaisseur du verre, l'étage et l'accessibilité (un étage élevé sans ascenseur peut nécessiter un monte-charge à 200-400 €), et l'urgence. Une intervention de week-end ou de nuit est majorée de 50 à 100 %. Le déplacement seul, hors travaux, est compris entre 50 et 120 €.",
      },
      { type: "h2", text: "Assurance habitation et prise en charge" },
      {
        type: "p",
        text: "La garantie bris de glace de l'assurance habitation couvre la plupart des vitres fixes du logement, parfois aussi les plaques vitrocéramiques et les parois de douche. Déclarer le sinistre dans les 5 jours (2 jours en cas de cambriolage avec dépôt de plainte). Garder la facture et, si possible, un échantillon du verre cassé.",
      },
      {
        type: "cta",
        text: "Trouver un vitrier près de chez vous",
        href: "/vitrier",
      },
      { type: "h2", text: "Conseils pour choisir un bon vitrier" },
      {
        type: "p",
        text: "Demander toujours un devis écrit avant intervention, même en urgence. Vérifier l'existence d'une adresse physique et le numéro SIRET. Comparer deux à trois devis pour un remplacement non urgent. En urgence, accepter la mise en sécurité d'abord et faire chiffrer le remplacement définitif à froid, avec plusieurs entreprises.",
      },
      { type: "h2", text: "À retenir" },
      {
        type: "p",
        text: "Un remplacement standard coûte 100-450 € selon le vitrage, et 150-350 € de plus pour la mise en sécurité d'urgence. L'assurance bris de glace couvre la majorité des cas. Privilégier deux devis à froid plutôt qu'un seul à chaud reste la meilleure protection contre les tarifs gonflés.",
      },
    ],
  },
  {
    slug: "tarifs-plaquiste-pose-placo-2026",
    title: "Tarifs plaquiste 2026 : pose placo, cloison, faux plafond",
    description:
      "Tarifs plaquiste 2026 : pose de placo au m², cloison, faux plafond, doublage isolant. Comparer les devis et choisir le bon artisan.",
    metier: "plaquiste",
    date: "2026-05-21",
    readTime: 8,
    intro:
      "La pose de placo est l'un des postes les plus courants en rénovation, mais les écarts de prix entre artisans dépassent souvent 40 %. Comprendre ce qui se cache derrière chaque devis évite de mauvaises surprises au moment de la pose et de la finition.",
    sections: [
      { type: "h2", text: "Tarif horaire d'un plaquiste" },
      {
        type: "p",
        text: "Un plaquiste qualifié facture entre 40 et 60 € HT de l'heure en 2026. Mais comme pour la plupart des artisans du second œuvre, les chantiers sont rarement facturés à l'heure. Le devis est calculé au mètre carré, ce qui permet une comparaison plus juste entre entreprises.",
      },
      { type: "h2", text: "Prix de la pose de placo au mètre carré" },
      {
        type: "ul",
        items: [
          "Cloison placo simple sur ossature métallique : 35 à 60 €/m² posé",
          "Cloison placo avec isolation laine de verre 45 mm : 45 à 75 €/m² posé",
          "Doublage isolant collé sur mur existant : 40 à 70 €/m² posé",
          "Faux plafond placo simple : 40 à 70 €/m² posé",
          "Faux plafond suspendu avec isolation : 55 à 90 €/m² posé",
          "Habillage d'escalier ou coffrage : 60 à 120 €/m linéaire",
        ],
      },
      { type: "h2", text: "Ce qui fait varier le prix" },
      {
        type: "p",
        text: "Le type de plaque (standard, hydrofuge pour pièces humides, phonique, ignifugée), l'épaisseur, la complexité du chantier (hauteur sous plafond, formes courbes, multiples retours d'angle), l'isolant choisi et la finition des joints sont les principaux facteurs d'écart. Une plaque BA13 standard coûte 6 €/m², une BA15 phonique grimpe à 14 €/m².",
      },
      { type: "h2", text: "Pose d'une cloison séparative" },
      {
        type: "p",
        text: "Une cloison séparative entre deux pièces coûte en moyenne entre 55 et 90 € du mètre carré posé, isolation incluse. Pour une cloison phonique entre deux chambres ou un studio, prévoir une cloison 98 mm avec double parement et laine de verre haute densité : 75 à 110 €/m². L'isolement phonique est nettement supérieur.",
      },
      { type: "h2", text: "Faux plafond et isolation" },
      {
        type: "p",
        text: "Un faux plafond simple coûte 40-70 € du mètre carré. Pour combler une grande hauteur sous plafond et améliorer l'isolation, un faux plafond suspendu avec laine de verre 100 mm grimpe à 70-110 €/m². L'intégration de spots LED encastrés ajoute 25-50 € par spot, pose et raccordement compris.",
      },
      { type: "h2", text: "Préparer le chantier" },
      {
        type: "p",
        text: "Avant la pose, vidanger la pièce, protéger les sols avec un film polyane, sécuriser les passages électriques. Le plaquiste pose les rails, monte les ossatures, fixe les plaques, puis réalise les joints en trois passes. Compter 3 à 7 jours de séchage avant l'intervention du peintre.",
      },
      {
        type: "amazon",
        titre: "Les fournitures utiles pour préparer ou finir un chantier placo",
        produits: [
          { nom: "Enduit de rebouchage prêt à l'emploi", description: "Pour les retouches et fissures après la pose", recherche: "enduit rebouchage pret emploi" },
          { nom: "Scie cloche multi-matériaux", description: "Percer proprement passages spots et prises", recherche: "scie cloche multi materiaux" },
          { nom: "Lève-plaque placo manuel", description: "Pose en solo sans se casser le dos", recherche: "leve plaque placo manuel" },
          { nom: "Vis placo phosphatées TPF", description: "Indispensables pour fixer le placo sur l'ossature", recherche: "vis placo phosphate tpf" },
          { nom: "Bande à joint papier 75 m", description: "Renforce les joints entre plaques", recherche: "bande joint papier placo" },
          { nom: "Couteau à enduire inox lot", description: "Trois largeurs pour finitions Q2 et Q3", recherche: "couteau enduire inox lot" },
          { nom: "Cale-vis profondeur pour visseuse", description: "Évite d'enfoncer trop la vis dans le placo", recherche: "cale vis placo visseuse" },
          { nom: "Film polyane protection sol", description: "Protège le sol pendant le chantier", recherche: "film polyane protection sol" },
        ],
      },
      { type: "h2", text: "La question de la finition" },
      {
        type: "p",
        text: "Trois niveaux de finition existent : Q2 (standard, joints invisibles à l'œil), Q3 (préparation peinture mate), Q4 (préparation peinture brillante ou lumière rasante). Plus le niveau est élevé, plus le prix monte : passer de Q2 à Q4 ajoute environ 8 à 15 €/m². Pour une chambre, le Q2 suffit ; pour un salon avec grandes baies, le Q3 est préférable.",
      },
      {
        type: "cta",
        text: "Trouver un plaquiste près de chez vous",
        href: "/plaquiste",
      },
      { type: "h2", text: "Comparer trois devis détaillés" },
      {
        type: "p",
        text: "Pour comparer correctement, exiger sur chaque devis : surface précise en m², type et épaisseur de plaque, type d'isolant et épaisseur, niveau de finition des joints, nombre de jours de chantier estimés et TVA appliquée. Un devis qui ne mentionne pas ces points est trop flou pour servir de base de comparaison.",
      },
      { type: "h2", text: "À retenir" },
      {
        type: "p",
        text: "Comptez 35-90 € du mètre carré posé pour du placo selon le type d'ouvrage et la finition. Trois devis détaillés, une vérification de la TVA applicable (10 % en rénovation, 20 % en neuf) et la mention des plaques et isolants utilisés sont indispensables pour comparer correctement et éviter les écarts injustifiés.",
      },
    ],
  },
  {
    slug: "kinesiologie-prix-deroulement-seance",
    title: "Kinésiologie : prix, déroulement d'une séance et indications",
    description:
      "Tout savoir sur la kinésiologie en 2026 : prix moyens, déroulement d'une séance, indications principales et différence avec la kinésithérapie.",
    metier: "kinesiologue",
    date: "2026-05-22",
    readTime: 7,
    intro:
      "La kinésiologie suscite curiosité et questions. À mi-chemin entre relaxation, gestion du stress et accompagnement émotionnel, cette pratique repose sur le test musculaire. Voici ce qu'il faut savoir avant de prendre rendez-vous.",
    sections: [
      { type: "h2", text: "Qu'est-ce que la kinésiologie" },
      {
        type: "p",
        text: "La kinésiologie est une méthode d'accompagnement développée dans les années 1960 aux États-Unis par le Dr George Goodheart. Elle repose sur le test musculaire de précision, qui consiste à observer la réponse d'un muscle (souvent le bras tendu) à différents stimuli pour identifier des déséquilibres émotionnels, énergétiques ou physiques.",
      },
      {
        type: "p",
        text: "La kinésiologie n'est pas une pratique médicale. Elle ne pose pas de diagnostic et ne remplace en aucun cas un traitement prescrit par un médecin. Elle se positionne comme un accompagnement complémentaire au bien-être global.",
      },
      { type: "h2", text: "Prix d'une séance de kinésiologie" },
      {
        type: "p",
        text: "Une séance individuelle coûte entre 60 et 100 € en 2026, et dure de 1 h à 1 h 30. Les tarifs sont plus élevés à Paris et dans les grandes métropoles, et plus bas en province (50-70 €). Une première séance, souvent plus longue, peut être facturée légèrement plus cher.",
      },
      { type: "h2", text: "Déroulement d'une séance" },
      {
        type: "p",
        text: "La séance débute par un échange verbal pour identifier la demande : stress, blocage émotionnel, manque de confiance, difficulté à prendre une décision. Le kinésiologue procède ensuite au test musculaire, le client allongé ou assis. À partir des informations recueillies, le praticien propose des corrections par stimulations, points d'acupression ou exercices de respiration.",
      },
      { type: "h2", text: "Indications principales" },
      {
        type: "ul",
        items: [
          "Gestion du stress et de l'anxiété",
          "Blocages émotionnels récurrents",
          "Manque de confiance en soi",
          "Difficultés d'apprentissage chez l'enfant",
          "Préparation à un examen ou un événement important",
          "Accompagnement d'un changement de vie (deuil, séparation, reconversion)",
        ],
      },
      { type: "h2", text: "Différence avec la kinésithérapie" },
      {
        type: "p",
        text: "La kinésithérapie est une profession médicale réglementée, exercée par des kinésithérapeutes diplômés d'État. Elle agit sur le corps par la rééducation, le massage et les mobilisations. La kinésiologie, elle, n'est pas un titre protégé en France : n'importe qui peut s'autoproclamer kinésiologue. La rigueur de la formation suivie par le praticien fait toute la différence.",
      },
      { type: "h2", text: "Combien de séances prévoir" },
      {
        type: "p",
        text: "Pour une problématique ponctuelle, 1 à 3 séances peuvent suffire. Pour un accompagnement plus profond (blocage récurrent, suivi sur plusieurs mois), prévoir 5 à 10 séances espacées de 2 à 4 semaines. Un bon kinésiologue ne pousse jamais à multiplier les séances sans nécessité réelle.",
      },
      {
        type: "amazon",
        titre: "Prolonger les bienfaits entre deux séances",
        produits: [
          { nom: "Livre introduction à la kinésiologie", description: "Comprendre les bases de la méthode et du test musculaire", recherche: "livre kinesiologie debutant" },
          { nom: "Huiles essentielles relaxation bio", description: "Coffret pour accompagner la détente quotidienne", recherche: "coffret huiles essentielles relaxation bio" },
          { nom: "Tapis automassage acupression", description: "Stimule les zones de tension et favorise la détente", recherche: "tapis acupression automassage" },
          { nom: "Journal des émotions à remplir", description: "Suivre ses ressentis entre les séances", recherche: "journal des emotions a remplir" },
          { nom: "Roll-on huiles essentielles stress", description: "Application express en cas de pic de stress", recherche: "roll on huile essentielle stress" },
          { nom: "Cartes de fleurs de Bach", description: "Soutien émotionnel doux et complémentaire", recherche: "cartes fleurs de bach" },
          { nom: "Application méditation guidée", description: "Carte cadeau pour la pratique quotidienne", recherche: "carte cadeau meditation pleine conscience" },
        ],
      },
      { type: "h2", text: "Remboursement et mutuelle" },
      {
        type: "p",
        text: "La kinésiologie n'est pas remboursée par la Sécurité sociale. Certaines mutuelles incluent un forfait médecines douces qui prend en charge 25 à 60 € par séance, dans la limite de 2 à 6 séances par an. Demander une facture systématique avec mention du SIRET du praticien.",
      },
      {
        type: "cta",
        text: "Trouver un kinésiologue près de chez vous",
        href: "/kinesiologue",
      },
      { type: "h2", text: "Comment choisir un bon kinésiologue" },
      {
        type: "p",
        text: "Privilégier un praticien formé dans une école reconnue par la Fédération Française de Kinésiologie Spécialisée (FFKS) ou le Syndicat National des Kinésiologues (SNK). Vérifier le SIRET, lire les avis Google, demander la formation initiale du praticien. Un kinésiologue sérieux oriente vers un médecin en cas de symptôme physique qui mérite un avis médical.",
      },
      { type: "h2", text: "À retenir" },
      {
        type: "p",
        text: "Une séance coûte 60-100 €, dure environ 1 h, et s'adresse en priorité à la gestion du stress et aux blocages émotionnels. La kinésiologie n'est pas une médecine et ne remplace jamais un avis médical. Une formation sérieuse du praticien et la transparence sur le nombre de séances proposées sont les meilleurs gages de qualité.",
      },
    ],
  },
  {
    slug: "acupuncture-tarifs-deroulement-seance",
    title: "Acupuncture : tarifs, déroulement et remboursement en 2026",
    description:
      "Acupuncture en 2026 : tarifs d'une séance, déroulement, indications et remboursement par la Sécurité sociale ou la mutuelle.",
    metier: "acupuncteur",
    date: "2026-05-22",
    readTime: 8,
    intro:
      "Médecine traditionnelle chinoise vieille de plusieurs millénaires, l'acupuncture s'est largement implantée en France. Pour qui consulte pour la première fois, le déroulement, les tarifs et la prise en charge restent souvent flous. Voici l'essentiel.",
    sections: [
      { type: "h2", text: "Le principe de l'acupuncture" },
      {
        type: "p",
        text: "L'acupuncture stimule des points précis du corps à l'aide de fines aiguilles, dans le but de rétablir la circulation énergétique selon les méridiens de la médecine chinoise. La pratique est reconnue par l'Organisation Mondiale de la Santé pour de nombreuses indications, en particulier la douleur chronique, le stress et certains troubles fonctionnels.",
      },
      { type: "h2", text: "Tarifs d'une séance" },
      {
        type: "p",
        text: "Une séance d'acupuncture coûte entre 50 et 90 € en 2026, et dure généralement 45 minutes à 1 heure. La première séance, plus longue (1 h à 1 h 30), est souvent facturée 70-110 € pour intégrer un bilan énergétique complet. Les tarifs varient selon la région : à Paris, prévoir 70-100 €, en province plutôt 50-75 €.",
      },
      { type: "h2", text: "Acupuncteur médecin ou acupuncteur traditionnel" },
      {
        type: "p",
        text: "Deux profils coexistent en France. Le médecin acupuncteur, titulaire d'un diplôme universitaire d'acupuncture, peut exercer dans le cadre conventionné. L'acupuncteur traditionnel chinois, formé en école privée, n'a pas le titre de médecin et n'est pas conventionné. Le second peut être tout aussi compétent, mais sans possibilité de remboursement Sécurité sociale.",
      },
      { type: "h2", text: "Déroulement d'une séance type" },
      {
        type: "p",
        text: "La séance commence par un entretien sur les motifs de consultation, les antécédents, le sommeil, la digestion et le mode de vie. Le praticien observe la langue et prend les pouls chinois. Il pose ensuite entre 6 et 20 aiguilles fines à différents endroits du corps, laissées en place 20 à 30 minutes. La plupart des patients ressentent une légère piqûre sans douleur réelle, puis une détente profonde.",
      },
      { type: "h2", text: "Indications principales" },
      {
        type: "ul",
        items: [
          "Douleurs chroniques : lombalgies, cervicalgies, migraines",
          "Stress, anxiété, troubles du sommeil",
          "Allergies saisonnières et rhinite",
          "Troubles digestifs fonctionnels",
          "Troubles du cycle menstruel",
          "Accompagnement à la fertilité et au sevrage tabagique",
        ],
      },
      { type: "h2", text: "Remboursement par la Sécurité sociale" },
      {
        type: "p",
        text: "Quand l'acupuncture est pratiquée par un médecin conventionné secteur 1, la consultation est remboursée à hauteur de 25 € par la Sécurité sociale. Le médecin peut pratiquer un dépassement d'honoraires en secteur 2. Pour un acupuncteur non médecin, aucun remboursement Sécu n'est possible.",
      },
      { type: "h2", text: "Remboursement par la mutuelle" },
      {
        type: "p",
        text: "De nombreuses mutuelles intègrent un forfait médecines douces qui rembourse 30 à 60 € par séance, dans la limite de 3 à 8 séances par an. Vérifier les conditions exactes auprès de son contrat, en particulier si la mutuelle accepte les praticiens non médecins.",
      },
      {
        type: "amazon",
        titre: "Continuer le travail énergétique à la maison",
        produits: [
          { nom: "Tapis acupression et coussin", description: "Type Spoonk ou Shakti, stimule les points en autonomie", recherche: "tapis acupression shakti spoonk" },
          { nom: "Livre médecine traditionnelle chinoise", description: "Comprendre méridiens et énergétique", recherche: "livre medecine traditionnelle chinoise" },
          { nom: "Set de ventouses massage", description: "Pour des automassages doux entre deux séances", recherche: "ventouses massage silicone" },
          { nom: "Moxas de qualité", description: "Réchauffe les points sans piqûre, technique chinoise traditionnelle", recherche: "moxas medecine chinoise" },
          { nom: "Tisane bio relaxation et sommeil", description: "Soutient les effets de la séance d'acupuncture", recherche: "tisane bio relaxation sommeil" },
          { nom: "Bouillotte sèche graines lin", description: "Apaise les zones tendues entre deux soins", recherche: "bouillotte seche graines lin" },
          { nom: "Diffuseur huiles essentielles", description: "Crée une ambiance propice à la détente", recherche: "diffuseur huiles essentielles ultrasonique" },
        ],
      },
      {
        type: "cta",
        text: "Trouver un acupuncteur près de chez vous",
        href: "/acupuncteur",
      },
      { type: "h2", text: "Précautions et contre-indications" },
      {
        type: "p",
        text: "L'acupuncture est globalement sans risque, mais certaines précautions s'imposent : prévenir le praticien en cas de grossesse (certains points sont à éviter), de pacemaker (l'électroacupuncture est alors déconseillée) ou de trouble de la coagulation. Toutes les aiguilles utilisées doivent être stériles et à usage unique.",
      },
      { type: "h2", text: "Combien de séances prévoir" },
      {
        type: "p",
        text: "Pour une douleur aiguë, 3 à 5 séances rapprochées suffisent souvent. Pour une douleur chronique, 8 à 12 séances espacées de 1 à 3 semaines forment un cycle complet. Une cure d'entretien tous les 3 à 6 mois est parfois recommandée.",
      },
      { type: "h2", text: "À retenir" },
      {
        type: "p",
        text: "Une séance coûte 50-90 €, dure 45 minutes à 1 h, et est remboursée par la Sécu uniquement quand le praticien est médecin conventionné. La mutuelle peut compléter via un forfait médecines douces. Trois à dix séances suffisent souvent pour observer un résultat sur une douleur ou un trouble chronique.",
      },
    ],
  },
  {
    slug: "reflexologie-plantaire-bienfaits-tarifs",
    title: "Réflexologie plantaire : bienfaits, tarifs et contre-indications",
    description:
      "Réflexologie plantaire en 2026 : bienfaits réels, tarifs d'une séance, déroulement, contre-indications et conseils pour choisir un bon praticien.",
    metier: "reflexologue",
    date: "2026-05-22",
    readTime: 7,
    intro:
      "La réflexologie plantaire séduit par sa douceur et son approche globale du bien-être. Cette technique millénaire consiste à stimuler des zones précises du pied pour agir sur l'ensemble du corps. Voici ce qu'il faut savoir avant une première séance.",
    sections: [
      { type: "h2", text: "Le principe de la réflexologie" },
      {
        type: "p",
        text: "La réflexologie repose sur l'idée que chaque zone du pied (ou de la main, du visage, des oreilles selon les écoles) correspond à un organe ou une fonction du corps. En stimulant ces zones par des pressions précises, le praticien favoriserait l'autorégulation de l'organisme et la circulation énergétique.",
      },
      {
        type: "p",
        text: "La réflexologie n'est ni un massage relaxant classique ni une médecine. Elle se positionne comme une technique de bien-être complémentaire, sans remplacer le suivi médical.",
      },
      { type: "h2", text: "Tarif d'une séance" },
      {
        type: "p",
        text: "Une séance de réflexologie plantaire coûte entre 45 et 80 € en 2026 et dure entre 45 minutes et 1 heure. La première séance, plus longue, peut être facturée 60-90 €. À Paris, les tarifs montent à 70-100 €. À domicile, prévoir un supplément de 10 à 25 €.",
      },
      { type: "h2", text: "Déroulement d'une séance type" },
      {
        type: "p",
        text: "La séance commence par un échange sur les motifs de consultation, les douleurs, le stress, le sommeil. Le patient s'installe confortablement sur une table ou un fauteuil, pieds nus. Le réflexologue applique d'abord des manœuvres d'échauffement, puis stimule les zones réflexes par pressions des pouces et des doigts. La séance se termine par un temps de détente et un échange sur les sensations ressenties.",
      },
      { type: "h2", text: "Bienfaits couramment observés" },
      {
        type: "ul",
        items: [
          "Réduction du stress et de l'anxiété",
          "Amélioration du sommeil",
          "Soulagement des tensions musculaires",
          "Stimulation de la circulation sanguine et lymphatique",
          "Soulagement de la constipation et des troubles digestifs légers",
          "Accompagnement de la ménopause et des règles douloureuses",
        ],
      },
      { type: "h2", text: "Contre-indications" },
      {
        type: "p",
        text: "Quelques situations imposent la prudence : phlébite ou thrombose récente, plaie ouverte ou infection au pied, grossesse au premier trimestre, fracture récente du pied. Une consultation médicale préalable est recommandée en cas de pathologie chronique grave, de cancer en cours de traitement ou de problèmes cardiaques sévères.",
      },
      { type: "h2", text: "Combien de séances prévoir" },
      {
        type: "p",
        text: "Pour un objectif de relaxation et d'entretien, une séance par mois suffit. Pour traiter un trouble particulier (insomnie chronique, stress important, troubles digestifs), prévoir 4 à 6 séances rapprochées, à raison d'une séance par semaine. Un bon réflexologue ne propose jamais un nombre démesuré de séances.",
      },
      { type: "h2", text: "Remboursement" },
      {
        type: "p",
        text: "La réflexologie n'est pas remboursée par la Sécurité sociale. De nombreuses mutuelles l'incluent toutefois dans leur forfait médecines douces : 25 à 50 € remboursés par séance, dans la limite de 2 à 6 séances par an. Vérifier la liste des praticiens reconnus par la mutuelle.",
      },
      {
        type: "amazon",
        titre: "Prolonger les bienfaits de la réflexologie à la maison",
        produits: [
          { nom: "Tapis de réflexologie plantaire", description: "Stimule les zones réflexes par simple marche pieds nus", recherche: "tapis reflexologie plantaire" },
          { nom: "Livre carte des zones plantaires", description: "Guide visuel pour identifier les points et leurs effets", recherche: "livre reflexologie plantaire carte zones" },
          { nom: "Rouleau de massage des pieds en bois", description: "Auto-massage rapide pour soulager la voûte plantaire", recherche: "rouleau massage pieds bois" },
          { nom: "Bain de pieds chauffant à bulles", description: "Détente et préparation idéale avant une séance", recherche: "bain de pieds chauffant a bulles" },
          { nom: "Crème pieds réparatrice intense", description: "Préserve la peau pour faciliter les pressions", recherche: "creme pieds reparatrice intense" },
          { nom: "Balle de massage pieds à picots", description: "Stimule les zones réflexes en quelques minutes par jour", recherche: "balle massage pieds picots" },
          { nom: "Coffret huiles essentielles bien-être", description: "Compléments aromatiques pour automassage", recherche: "coffret huiles essentielles bien etre" },
        ],
      },
      {
        type: "cta",
        text: "Trouver un réflexologue près de chez vous",
        href: "/reflexologue",
      },
      { type: "h2", text: "Choisir un bon réflexologue" },
      {
        type: "p",
        text: "Le titre de réflexologue n'est pas protégé en France. Privilégier un praticien certifié par la Fédération Française des Réflexologues (FFR) ou ayant suivi une formation reconnue. Vérifier le SIRET, lire les avis, et privilégier le bouche-à-oreille local. La transparence sur le nombre de séances proposées et la facture systématique sont des signes de sérieux.",
      },
      { type: "h2", text: "À retenir" },
      {
        type: "p",
        text: "Une séance coûte 45-80 € et dure environ 1 h. Trois à six séances suffisent souvent pour un objectif précis. Sans titre protégé, la réflexologie demande de bien choisir son praticien : formation reconnue, transparence sur les tarifs, échange clair sur les attentes. La technique reste un complément du bien-être, jamais un substitut au suivi médical.",
      },
    ],
  },
  {
    slug: "choisir-coach-sportif-domicile-criteres",
    title: "Choisir un coach sportif à domicile : 6 critères et bonnes questions",
    description:
      "Bien choisir son coach sportif à domicile en 2026 : diplôme, spécialités, tarifs, déclaration CESU et les bonnes questions à poser avant de signer.",
    metier: "coach-sportif",
    date: "2026-05-23",
    readTime: 8,
    intro:
      "Le coaching sportif à domicile séduit de plus en plus de Français qui cherchent à reprendre le sport sans s'imposer la salle. Encore faut-il choisir un professionnel compétent, déclaré et adapté à ses objectifs. Voici les six critères qui font vraiment la différence.",
    sections: [
      { type: "h2", text: "1. Vérifier le diplôme obligatoire" },
      {
        type: "p",
        text: "En France, l'encadrement sportif rémunéré est encadré par la loi. Le coach doit être titulaire d'un diplôme reconnu : BPJEPS, DEJEPS, DESJEPS, BEES ou licence STAPS. Exercer sans diplôme est sanctionné par une amende pouvant atteindre 15 000 €. Demander à voir la carte professionnelle, valable 5 ans, délivrée par la DDCS ou la DRAJES.",
      },
      { type: "h2", text: "2. Identifier sa spécialité" },
      {
        type: "p",
        text: "Tous les coachs n'ont pas le même profil. Certains sont spécialisés en perte de poids, d'autres en remise en forme post-grossesse, en préparation physique pour le trail, en musculation, en cross-training ou en accompagnement seniors. Choisir un coach dont la spécialité correspond à son objectif évite les programmes inadaptés.",
      },
      { type: "h2", text: "3. Demander la déclaration en service à la personne" },
      {
        type: "p",
        text: "Pour bénéficier du crédit d'impôt de 50 % sur les séances, le coach doit être déclaré en service à la personne, soit via le CESU (chèque emploi service universel), soit par une entreprise agréée services à la personne. Sans cette déclaration, aucun crédit d'impôt possible, et le coach travaille au noir : à éviter absolument.",
      },
      { type: "h2", text: "4. Comparer les tarifs et les forfaits" },
      {
        type: "ul",
        items: [
          "Séance à l'unité à domicile : 50 à 90 € en 2026",
          "Pack 10 séances : 450 à 750 € (économie de 10 à 15 %)",
          "Pack 20 séances : 800 à 1 400 €",
          "Coaching duo (en couple ou avec un ami) : 60 à 110 € la séance",
          "Frais de déplacement : inclus ou facturés 10-25 € selon la zone",
        ],
      },
      {
        type: "p",
        text: "Avec le crédit d'impôt 50 %, une séance à 70 € revient effectivement à 35 €. Cela rend le coaching à domicile compétitif par rapport à un abonnement salle complété par un coach.",
      },
      { type: "h2", text: "5. Tester le feeling lors d'une première séance" },
      {
        type: "p",
        text: "La relation avec son coach est essentielle pour tenir dans la durée. Beaucoup de coachs proposent une séance d'essai gratuite ou à tarif réduit. Profiter de ce moment pour évaluer le sens de l'écoute, la pédagogie, la capacité à motiver sans culpabiliser et la capacité à adapter les exercices au profil et au matériel disponible.",
      },
      {
        type: "amazon",
        titre: "Le matériel utile pour s'entraîner à la maison avec son coach",
        produits: [
          { nom: "Tapis fitness antidérapant épais", description: "Confort indispensable pour gainage et étirements", recherche: "tapis fitness antiderapant epais" },
          { nom: "Kit bandes élastiques résistance", description: "Renforcement musculaire complet sans charges lourdes", recherche: "kit bandes elastiques resistance fitness" },
          { nom: "Haltères ajustables", description: "Évolutifs selon le niveau, gain de place", recherche: "halteres ajustables fitness" },
          { nom: "Kit TRX suspension training", description: "Entraînement complet à fixer à une porte", recherche: "kit trx suspension training" },
          { nom: "Montre cardio avec capteur", description: "Suivi de fréquence et calories pendant la séance", recherche: "montre cardio capteur fitness" },
          { nom: "Bouteille shaker isotherme", description: "Hydratation et préparation des boissons d'effort", recherche: "shaker isotherme sport" },
          { nom: "Corde à sauter à roulements", description: "Cardio express idéal pour échauffement", recherche: "corde sauter roulements fitness" },
          { nom: "Kettlebell 8 kg", description: "Polyvalent pour exercices fonctionnels", recherche: "kettlebell 8 kg fonte" },
        ],
      },
      { type: "h2", text: "6. Vérifier l'assurance responsabilité civile" },
      {
        type: "p",
        text: "Un coach professionnel doit disposer d'une assurance responsabilité civile professionnelle pour couvrir tout accident pendant la séance. Demander une copie de l'attestation. C'est aussi l'occasion de vérifier la qualification de premier secours (PSC1 minimum), gage supplémentaire de sérieux.",
      },
      { type: "h2", text: "Les bonnes questions à poser avant de signer" },
      {
        type: "ul",
        items: [
          "Quel est votre diplôme et votre numéro de carte professionnelle ?",
          "Êtes-vous déclaré en service à la personne pour le crédit d'impôt ?",
          "Quelle est votre spécialité principale et votre expérience ?",
          "Comment gérez-vous mes objectifs si je manque de motivation ?",
          "Que se passe-t-il en cas d'annulation ou de séance manquée ?",
          "Avez-vous une assurance responsabilité civile professionnelle ?",
        ],
      },
      {
        type: "cta",
        text: "Trouver un coach sportif près de chez vous",
        href: "/coach-sportif",
      },
      { type: "h2", text: "À retenir" },
      {
        type: "p",
        text: "Un bon coach sportif à domicile est diplômé, déclaré en service à la personne, spécialisé dans votre objectif, transparent sur ses tarifs et capable d'instaurer un rapport de confiance. Le crédit d'impôt 50 % rend la prestation accessible. Une séance d'essai et six questions claires suffisent à faire le tri parmi les profils disponibles dans votre ville.",
      },
    ],
  },
  {
    slug: "prof-particulier-cout-credit-impot-cesu",
    title: "Prof particulier : coût réel après crédit d'impôt et CESU",
    description:
      "Prof particulier en 2026 : coût horaire réel après crédit d'impôt, fonctionnement CESU, organismes agréés et conseils pour optimiser le budget.",
    metier: "professeur-particulier",
    date: "2026-05-23",
    readTime: 8,
    intro:
      "Faire venir un prof particulier à domicile peut sembler cher au premier abord, mais le crédit d'impôt 50 % change radicalement la donne. Encore faut-il choisir le bon mode de paiement et bien comprendre les conditions pour ne pas payer plein tarif inutilement.",
    sections: [
      { type: "h2", text: "Tarif horaire moyen d'un cours particulier" },
      {
        type: "p",
        text: "En 2026, un cours particulier coûte en moyenne 25 à 50 € de l'heure en France, selon la matière et le niveau. Les profs spécialisés (prépa, terminale scientifique, anglais des affaires) facturent souvent 40 à 70 €. Les écarts régionaux sont importants : Paris 35-70 €, province 20-40 €.",
      },
      { type: "h2", text: "Le crédit d'impôt 50 % à connaître" },
      {
        type: "p",
        text: "Tout cours particulier à domicile (ou à distance depuis le domicile du client) ouvre droit à un crédit d'impôt de 50 % des sommes versées, dans la limite de 12 000 € de dépenses annuelles par foyer fiscal. Une heure à 40 € revient donc effectivement à 20 € après crédit d'impôt. Le plafond peut grimper à 15 000 € la première année et 20 000 € pour les personnes invalides.",
      },
      { type: "h2", text: "Trois modes de paiement possibles" },
      {
        type: "ul",
        items: [
          "Embauche directe via CESU déclaratif : le particulier devient employeur, l'Urssaf calcule les cotisations",
          "Service mandataire : l'organisme aide à recruter, mais le particulier reste employeur",
          "Service prestataire : l'organisme est employeur, le client paie une facture",
        ],
      },
      { type: "h2", text: "Le CESU déclaratif en pratique" },
      {
        type: "p",
        text: "Le mode CESU est le plus utilisé pour un prof particulier individuel. S'inscrire sur cesu.urssaf.fr, déclarer chaque mois les heures effectuées, payer le prof directement (chèque, virement ou CESU préfinancé). L'Urssaf calcule les cotisations et envoie l'attestation fiscale en début d'année. Le crédit d'impôt s'applique automatiquement à la déclaration de revenus.",
      },
      { type: "h2", text: "Passer par un organisme agréé" },
      {
        type: "p",
        text: "Les organismes comme Acadomia, Complétude, Anacours ou Superprof gèrent l'aspect administratif. Le client paie une facture qui inclut le salaire du prof, les charges et la marge de l'organisme. Plus simple mais 25 à 50 % plus cher que le CESU direct. Le crédit d'impôt s'applique de la même manière.",
      },
      { type: "h2", text: "Avance immédiate du crédit d'impôt" },
      {
        type: "p",
        text: "Depuis 2023, l'avance immédiate permet de bénéficier du crédit d'impôt en temps réel, sans attendre la déclaration de revenus. Au lieu de payer 40 € puis d'être remboursé un an plus tard, on ne paie immédiatement que 20 €. Le service est disponible sur cesu.urssaf.fr et chez la plupart des organismes prestataires.",
      },
      {
        type: "amazon",
        titre: "Le matériel scolaire qui complète les cours particuliers",
        produits: [
          { nom: "Annales bac Nathan édition récente", description: "Sujets corrigés pour s'entraîner entre deux cours", recherche: "annales bac nathan corriges" },
          { nom: "Manuel scolaire programme officiel", description: "Support officiel utilisé en classe", recherche: "manuel scolaire programme officiel" },
          { nom: "Cahier d'exercices Bled", description: "Référence en grammaire et orthographe", recherche: "cahier exercices bled" },
          { nom: "Lampe de bureau LED articulée", description: "Éclairage confortable pour les longues révisions", recherche: "lampe bureau led articulee" },
          { nom: "Agenda scolaire annuel", description: "Organiser cours, devoirs et révisions", recherche: "agenda scolaire annuel" },
          { nom: "Cahier petits carreaux 96 pages", description: "Pour prendre des notes pendant les cours", recherche: "cahier petits carreaux 96 pages lot" },
          { nom: "Casque audio avec micro étudiant", description: "Cours visio sans gêner l'entourage", recherche: "casque audio micro etudiant" },
          { nom: "Tableau blanc effaçable A2", description: "Idéal pour réviser méthodes et formules", recherche: "tableau blanc effacable a2" },
        ],
      },
      { type: "h2", text: "Choisir le bon profil" },
      {
        type: "ul",
        items: [
          "Étudiant en licence : 15-25 €/h, idéal pour collège et début lycée",
          "Étudiant en master : 25-40 €/h, bon pour lycée et début supérieur",
          "Professeur certifié ou agrégé : 35-60 €/h, indispensable pour prépa et concours",
          "Prof spécialisé en pédagogie adaptée (dys, TDAH) : 40-70 €/h",
        ],
      },
      { type: "h2", text: "Évaluer la qualité d'un prof particulier" },
      {
        type: "p",
        text: "Demander deux ou trois séances d'essai avant de s'engager. Un bon prof prépare ses séances, donne un objectif clair, fait un point régulier avec l'élève et le parent. Méfiance face aux profs qui multiplient les heures sans progression observable au bout d'un mois ou deux.",
      },
      {
        type: "cta",
        text: "Trouver un professeur particulier près de chez vous",
        href: "/professeur-particulier",
      },
      { type: "h2", text: "À retenir" },
      {
        type: "p",
        text: "Un cours particulier coûte 25-50 €/h en moyenne, soit 12-25 € après crédit d'impôt 50 %. Le CESU direct reste le mode le plus économique. L'avance immédiate du crédit d'impôt évite de faire l'avance de trésorerie. Demander deux séances d'essai et exiger un suivi pédagogique structuré pour s'assurer du retour sur investissement.",
      },
    ],
  },
  {
    slug: "jardinier-paysagiste-tarif-entretien-annuel",
    title: "Jardinier paysagiste : tarif d'un contrat d'entretien annuel",
    description:
      "Contrat d'entretien jardin en 2026 : tarifs annuels, prestations incluses, crédit d'impôt 50 % et conseils pour bien comparer les devis.",
    metier: "jardinier-paysagiste",
    date: "2026-05-23",
    readTime: 8,
    intro:
      "Confier l'entretien de son jardin à un professionnel libère un temps précieux, surtout au printemps et à l'automne. Le contrat annuel reste la formule la plus économique, à condition de bien définir les prestations incluses et de vérifier l'éligibilité au crédit d'impôt.",
    sections: [
      { type: "h2", text: "Pourquoi un contrat annuel plutôt que des passages ponctuels" },
      {
        type: "p",
        text: "Un contrat annuel garantit la régularité de l'entretien, un tarif négocié à la baisse de 15 à 25 % et un passage prioritaire en haute saison. C'est aussi un gage de qualité : le jardinier connaît votre jardin, son sol, ses végétaux, et peut adapter ses interventions. Un passage ponctuel coûte souvent plus cher au final.",
      },
      { type: "h2", text: "Tarifs moyens d'un contrat annuel en 2026" },
      {
        type: "ul",
        items: [
          "Petit jardin de ville (100-200 m²) : 600 à 1 400 €/an",
          "Jardin moyen (300-600 m²) : 1 400 à 2 800 €/an",
          "Grand jardin (700-1 500 m²) : 2 800 à 5 500 €/an",
          "Propriété avec parc (plus de 1 500 m²) : à partir de 5 500 €/an",
        ],
      },
      {
        type: "p",
        text: "Ces tarifs correspondent à un entretien complet : tonte, taille, désherbage, ramassage des feuilles, entretien des massifs. Les prestations ponctuelles comme un élagage important ou l'évacuation de gros volumes de déchets sont généralement facturées en supplément.",
      },
      { type: "h2", text: "Ce qu'inclut un contrat type" },
      {
        type: "ul",
        items: [
          "Tonte régulière (10 à 25 passages par an selon la pluviométrie)",
          "Taille des haies (1 à 3 passages par an)",
          "Désherbage manuel ou thermique des allées et massifs",
          "Ramassage et évacuation des feuilles d'automne",
          "Entretien des massifs : binage, fertilisation, paillage",
          "Petits travaux saisonniers : renouvellement des annuelles, scarification",
        ],
      },
      { type: "h2", text: "Crédit d'impôt 50 % à connaître" },
      {
        type: "p",
        text: "Les travaux d'entretien courant du jardin à domicile (tonte, taille, désherbage, ramassage des feuilles) ouvrent droit au crédit d'impôt de 50 % services à la personne, dans la limite de 5 000 € de dépenses annuelles. Un contrat de 2 000 €/an revient donc à 1 000 € net après crédit d'impôt. Le jardinier doit être déclaré en service à la personne pour que le crédit s'applique.",
      },
      {
        type: "amazon",
        titre: "Le matériel pour entretenir le jardin entre deux passages",
        produits: [
          { nom: "Taille-haie thermique 60 cm", description: "Puissance suffisante pour les haies denses", recherche: "taille haie thermique 60 cm" },
          { nom: "Sécateur professionnel à crémaillère", description: "Coupe nette qui préserve les végétaux", recherche: "secateur professionnel cremaillere" },
          { nom: "Tondeuse électrique mulching", description: "Idéale pour les petits et moyens jardins", recherche: "tondeuse electrique mulching" },
          { nom: "Broyeur de végétaux silencieux", description: "Recycle les déchets verts en paillage", recherche: "broyeur vegetaux silencieux" },
          { nom: "Gants de jardin anti-épines", description: "Protection longue pour rosiers et haies", recherche: "gants jardin anti epines" },
          { nom: "Scarificateur électrique 1500 W", description: "Aère la pelouse au printemps et à l'automne", recherche: "scarificateur electrique 1500 watts" },
          { nom: "Sac à déchets verts résistant", description: "Facilite l'évacuation après la coupe", recherche: "sac dechets verts resistant" },
          { nom: "Désherbeur thermique", description: "Solution écologique sans produit chimique", recherche: "desherbeur thermique gaz" },
        ],
      },
      { type: "h2", text: "Ce qui n'est pas couvert par le crédit d'impôt" },
      {
        type: "p",
        text: "L'élagage important, l'abattage d'arbres, la création d'un massif, la pose d'une terrasse, l'installation d'un système d'arrosage automatique sont considérés comme des travaux paysagers et non comme de l'entretien. Ces prestations ne donnent pas droit au crédit d'impôt. Bien séparer ces postes sur le devis.",
      },
      { type: "h2", text: "Mensualisation et étalement des paiements" },
      {
        type: "p",
        text: "La plupart des entreprises proposent une mensualisation : 12 prélèvements identiques au lieu d'un règlement par passage. Cela lisse la trésorerie sur l'année, en sachant que les passages sont plus nombreux au printemps et à l'automne. L'avance immédiate du crédit d'impôt permet en plus de ne payer que la moitié du montant chaque mois.",
      },
      { type: "h2", text: "Comparer trois devis annuels" },
      {
        type: "p",
        text: "Demander trois devis détaillant : nombre de passages annuels, prestations précises incluses, évacuation des déchets verts, fréquence de la taille des haies, gestion du désherbage. Un devis qui annonce seulement 'entretien jardin' sans détail ne permet aucune comparaison sérieuse.",
      },
      {
        type: "cta",
        text: "Trouver un jardinier paysagiste près de chez vous",
        href: "/jardinier-paysagiste",
      },
      { type: "h2", text: "Vérifications avant signature" },
      {
        type: "p",
        text: "Demander l'attestation d'assurance responsabilité civile professionnelle, l'agrément services à la personne, le numéro SIRET et les références de clients dans le quartier. Les avis Google et le bouche-à-oreille local restent les meilleurs indicateurs.",
      },
      { type: "h2", text: "À retenir" },
      {
        type: "p",
        text: "Un contrat annuel coûte 600 à 5 500 €/an selon la surface, soit moitié moins après crédit d'impôt 50 %. Bien séparer entretien (éligible) et travaux paysagers (non éligibles) sur le devis. La mensualisation et l'avance immédiate rendent l'entretien accessible à la plupart des budgets.",
      },
    ],
  },
  {
    slug: "tatouage-prix-comment-choisir-tatoueur",
    title: "Tatouage : prix moyen et comment choisir un tatoueur sérieux",
    description:
      "Prix d'un tatouage en 2026 : tarifs selon la taille, fourchettes par style et critères pour choisir un tatoueur sérieux et hygiénique.",
    metier: "tatoueur",
    date: "2026-05-23",
    readTime: 8,
    intro:
      "Un tatouage est une décision durable, et le choix du tatoueur compte autant que le motif lui-même. Entre les tarifs très variables, les styles spécialisés et les questions d'hygiène, voici tout ce qu'il faut savoir pour faire le bon choix en 2026.",
    sections: [
      { type: "h2", text: "Prix moyen selon la taille" },
      {
        type: "ul",
        items: [
          "Petit tatouage (moins de 5 cm) : 70 à 180 €, souvent au tarif minimum boutique",
          "Tatouage moyen (5 à 15 cm) : 200 à 600 €",
          "Grand tatouage (avant-bras, mollet, cuisse) : 500 à 1 500 €",
          "Manchette complète (bras entier) : 1 800 à 5 000 €+ en plusieurs séances",
          "Dos complet : 3 000 à 10 000 €+ étalés sur plusieurs mois",
        ],
      },
      { type: "h2", text: "Tarif horaire des tatoueurs" },
      {
        type: "p",
        text: "Les tatoueurs facturent au forfait pour les petites pièces et à l'heure pour les grands projets. Le tarif horaire moyen est de 80 à 200 €/h en 2026. Les artistes reconnus avec une longue liste d'attente facturent 250-400 €/h. Le minimum boutique (souvent 60-100 €) couvre les frais d'installation, même pour un tout petit tatouage.",
      },
      { type: "h2", text: "Différences de prix selon le style" },
      {
        type: "p",
        text: "Certains styles sont plus longs à réaliser et donc plus chers. Le réalisme noir et gris ou couleur, le néo-traditionnel détaillé et le japonais demandent beaucoup de temps. Le fine line, le minimaliste et le lettrage sont les plus rapides. Le style demandé influence aussi le choix du tatoueur, chacun ayant ses spécialités.",
      },
      { type: "h2", text: "Vérifier l'hygiène du studio" },
      {
        type: "ul",
        items: [
          "Studio déclaré en ARS (Agence Régionale de Santé), affiche obligatoire à l'entrée",
          "Aiguilles à usage unique sorties de leur blister devant vous",
          "Tatoueur formé à l'hygiène (formation obligatoire de 21 heures)",
          "Surfaces nettoyées et désinfectées entre chaque client",
          "Encres CE conformes à la réglementation 2022 (REACH)",
          "Gants neufs, film plastique sur la machine, capsules d'encre individuelles",
        ],
      },
      { type: "h2", text: "Évaluer le portfolio" },
      {
        type: "p",
        text: "Avant de réserver, étudier le portfolio Instagram du tatoueur sur plusieurs mois. Regarder en particulier la régularité du trait, la propreté des lignes, la précision des ombrages. Un tatoueur sérieux montre aussi ses tatouages cicatrisés, pas seulement les photos fraîches sorties de séance.",
      },
      { type: "h2", text: "Le rendez-vous de consultation" },
      {
        type: "p",
        text: "La plupart des tatoueurs proposent un rendez-vous de consultation gratuit ou facturé 30-50 € (déduits du tatouage). C'est l'occasion de discuter du projet, de voir le devis, d'évaluer le feeling. Un acompte de 20-30 % est généralement demandé pour bloquer la date. Ne jamais accepter un tatoueur qui presse à la décision le jour même.",
      },
      { type: "h2", text: "Soins post-tatouage" },
      {
        type: "p",
        text: "Le tatoueur remet une fiche de soins claire : garder le film 2-4 heures, laver à l'eau tiède avec savon neutre, appliquer une crème cicatrisante 2 fois par jour pendant 15 jours, éviter soleil, piscine et bains pendant 1 mois. Une mauvaise cicatrisation peut ruiner un travail soigné : suivre les consignes à la lettre.",
      },
      {
        type: "amazon",
        titre: "Le kit de soins indispensables après un tatouage",
        produits: [
          { nom: "Crème cicatrisante Bepanthen tatouage", description: "Référence pour la cicatrisation des premiers jours", recherche: "creme bepanthen tatouage" },
          { nom: "Crème Easytattoo pommade", description: "Soin spécifique post-tatouage longue tenue", recherche: "creme easytattoo pommade" },
          { nom: "Film de protection tatouage Dermalize", description: "Film respirant qui accélère la cicatrisation", recherche: "film protection tatouage dermalize" },
          { nom: "Savon doux pH neutre sans parfum", description: "Indispensable pour nettoyer sans agresser", recherche: "savon doux ph neutre sans parfum" },
          { nom: "Écran solaire SPF 50 visage et corps", description: "Protection essentielle pour conserver les couleurs", recherche: "creme solaire spf 50 tatouage" },
          { nom: "Crème hydratante tatouage longue durée", description: "Pour préserver l'éclat après cicatrisation", recherche: "creme hydratante tatouage longue duree" },
          { nom: "Tubes de gaze stérile et compresses", description: "Premiers soins propres dès la sortie du studio", recherche: "compresses steriles tatouage" },
        ],
      },
      {
        type: "cta",
        text: "Trouver un tatoueur près de chez vous",
        href: "/tatoueur",
      },
      { type: "h2", text: "Les signaux qui doivent alerter" },
      {
        type: "p",
        text: "Pas d'affichage ARS visible, aiguilles déjà sorties à l'arrivée, prix anormalement bas (un tatouage à 30 € est presque toujours suspect), refus de donner un devis écrit, pression pour augmenter la taille du motif, encres aux étiquettes douteuses : autant de raisons de partir sans regret.",
      },
      { type: "h2", text: "À retenir" },
      {
        type: "p",
        text: "Le prix d'un tatouage varie de 70 € à plusieurs milliers d'euros selon la taille et le style. L'hygiène, la déclaration ARS et un portfolio cohérent passent avant le tarif. Un rendez-vous de consultation, un acompte modéré et le respect des soins post-tatouage garantissent un résultat propre et durable.",
      },
    ],
  },
  {
    slug: "estheticienne-prix-soins-visage-2026",
    title: "Esthéticienne : prix des soins visage et corps en 2026",
    description:
      "Prix des soins esthéticienne en 2026 : visage, corps, épilation, manucure. Comparatif institut, à domicile, forfaits et crédit d'impôt.",
    metier: "estheticienne",
    date: "2026-05-23",
    readTime: 8,
    intro:
      "Soin du visage, épilation, modelage corps : les prestations en institut esthétique couvrent un large spectre, avec des tarifs qui varient fortement selon la ville, le standing et la formule choisie. Voici les fourchettes 2026 et les astuces pour optimiser son budget beauté.",
    sections: [
      { type: "h2", text: "Soins du visage : les fourchettes 2026" },
      {
        type: "ul",
        items: [
          "Soin du visage essentiel (45 min) : 45 à 75 €",
          "Soin du visage approfondi (1 h) : 70 à 120 €",
          "Soin anti-âge avec massage : 90 à 160 €",
          "Soin haut de gamme (oxygène, LED, radiofréquence) : 110 à 220 €",
          "Soin spécifique acné ou rosacée : 70 à 130 €",
          "Forfait 5 soins anti-âge : 350 à 700 € (économie de 15-20 %)",
        ],
      },
      { type: "h2", text: "Soins du corps" },
      {
        type: "p",
        text: "Un modelage relaxant d'1 heure coûte 65 à 110 €. Un gommage corps complet 50 à 90 €. Un soin amincissant avec palper-rouler manuel ou mécanique varie de 70 à 130 € la séance. Pour une cure minceur, prévoir 8 à 12 séances, souvent en forfait à 600-1 200 €.",
      },
      { type: "h2", text: "Épilation classique à la cire" },
      {
        type: "ul",
        items: [
          "Sourcils : 12 à 25 €",
          "Lèvre supérieure : 8 à 18 €",
          "Maillot classique : 15 à 25 €",
          "Maillot intégral : 30 à 55 €",
          "Demi-jambes : 18 à 30 €",
          "Jambes complètes : 28 à 45 €",
          "Aisselles : 12 à 22 €",
        ],
      },
      { type: "h2", text: "Épilation lumière pulsée et laser" },
      {
        type: "p",
        text: "La lumière pulsée à l'institut coûte 60-130 € par zone et par séance (compter 6 à 10 séances). Le laser épilatoire, pratiqué par un dermatologue, est plus efficace mais plus cher : 100-250 € par zone, 4 à 8 séances. Sur l'année, l'épilation définitive d'un maillot intégral revient à 600-1 500 € selon la technique.",
      },
      { type: "h2", text: "Manucure et beauté des mains" },
      {
        type: "p",
        text: "Une manucure classique avec vernis traditionnel coûte 25-40 €. Avec vernis semi-permanent, comptez 35-55 €. La beauté des pieds (pédicure esthétique, hors podologue médical) varie de 40 à 70 €. Pour les forfaits mains + pieds, prévoir 55-95 € selon la formule.",
      },
      {
        type: "amazon",
        titre: "Le rituel beauté à reproduire entre deux rendez-vous",
        produits: [
          { nom: "Nettoyant visage doux Cerave", description: "Référence des dermatologues pour tous types de peau", recherche: "nettoyant visage cerave" },
          { nom: "Sérum acide hyaluronique pur", description: "Hydratation intense et effet repulpant", recherche: "serum acide hyaluronique pur" },
          { nom: "Masque tissu hydratant lot", description: "Boost d'hydratation entre deux soins en institut", recherche: "masque tissu hydratant lot" },
          { nom: "Rouleau de jade massage visage", description: "Décongestionne et active la microcirculation", recherche: "rouleau jade massage visage" },
          { nom: "Crème hydratante visage Avène", description: "Apaise les peaux sensibles", recherche: "creme hydratante visage avene" },
          { nom: "Brosse nettoyante visage électrique", description: "Nettoyage en profondeur sans agresser", recherche: "brosse nettoyante visage electrique" },
          { nom: "Sérum vitamine C anti-taches", description: "Éclat du teint et action anti-âge", recherche: "serum vitamine c anti taches" },
          { nom: "Gommage doux visage hebdomadaire", description: "Affine le grain de peau entre deux soins", recherche: "gommage visage doux hebdomadaire" },
        ],
      },
      { type: "h2", text: "Esthéticienne à domicile" },
      {
        type: "p",
        text: "Une esthéticienne à domicile facture 10 à 25 € de plus qu'en institut pour le déplacement. L'avantage : confort, flexibilité d'horaires et possibilité de bénéficier du crédit d'impôt 50 % si la praticienne est déclarée en service à la personne via le CESU. Une séance à 100 € revient ainsi à 50 € net.",
      },
      { type: "h2", text: "Crédit d'impôt et CESU" },
      {
        type: "p",
        text: "Seuls les soins esthétiques réalisés à domicile par une esthéticienne déclarée en service à la personne ouvrent droit au crédit d'impôt de 50 % (plafond global 12 000 €/an). Les soins en institut ne sont pas éligibles. Demander la facture mentionnant le numéro d'agrément SAP pour bénéficier de l'avantage fiscal.",
      },
      {
        type: "cta",
        text: "Trouver une esthéticienne près de chez vous",
        href: "/estheticienne",
      },
      { type: "h2", text: "Bien choisir son institut" },
      {
        type: "p",
        text: "Vérifier le diplôme : CAP esthétique cosmétique parfumerie minimum, BP ou Bac Pro pour les prestations techniques. Lire les avis Google sur la durée, demander une consultation diagnostic avant un soin du visage (souvent gratuite), et privilégier les instituts qui détaillent leurs marques de cosmétiques. La transparence sur les produits utilisés est un bon signe.",
      },
      { type: "h2", text: "À retenir" },
      {
        type: "p",
        text: "Comptez 45-220 € pour un soin du visage, 65-130 € pour un modelage, 30-55 € pour un maillot intégral. À domicile, le crédit d'impôt 50 % réduit la facture de moitié. Les forfaits multi-séances offrent souvent 15-20 % d'économie. Diplôme, transparence sur les produits et avis sur la durée sont les trois meilleurs indicateurs de qualité.",
      },
    ],
  },
  {
    slug: "prothesiste-ongulaire-tarifs-techniques-2026",
    title: "Prothésiste ongulaire : tarifs gel, semi-permanent, capsules",
    description:
      "Tarifs 2026 prothésiste ongulaire : gel, vernis semi-permanent, capsules, nail art. Comparatif salon vs à domicile et conseils pour choisir.",
    metier: "prothesiste-ongulaire",
    date: "2026-05-23",
    readTime: 7,
    intro:
      "La pose d'ongles est devenue une routine beauté pour de nombreuses Françaises, avec une gamme de techniques et de tarifs très large. Comprendre les différences entre gel, semi-permanent et capsules permet de choisir la solution la plus adaptée à son budget et à son rythme de vie.",
    sections: [
      { type: "h2", text: "Vernis semi-permanent : le plus accessible" },
      {
        type: "p",
        text: "Le vernis semi-permanent coûte 25 à 45 € en 2026. Plus durable qu'un vernis classique, il tient 2 à 3 semaines sans s'écailler. La pose dure 45 minutes à 1 heure, sans rallongement de l'ongle. Idéal pour celles qui aiment la couleur sans modifier la longueur naturelle de l'ongle.",
      },
      { type: "h2", text: "Pose gel : la solution durable" },
      {
        type: "p",
        text: "La pose gel coûte entre 40 et 70 € selon la longueur souhaitée et le nail art éventuel. Le gel se pose en plusieurs couches catalysées sous lampe UV ou LED, ce qui le rend très résistant. La tenue est de 3 à 4 semaines avant remplissage. C'est la solution la plus populaire pour des ongles solides et brillants.",
      },
      { type: "h2", text: "Pose capsules ou chablon" },
      {
        type: "p",
        text: "Quand l'ongle naturel est trop court ou abîmé, la pose se fait sur capsules (faux ongles collés) ou sur chablon (forme jetable). Comptez 50-80 € pour une pose complète avec rallongement. C'est plus long (1 h 30 à 2 h) et plus coûteux qu'une simple pose gel, mais permet d'obtenir la longueur et la forme souhaitées.",
      },
      { type: "h2", text: "Remplissage : le geste d'entretien" },
      {
        type: "p",
        text: "Toutes les 3 à 4 semaines, la repousse de l'ongle naturel impose un remplissage. Le tarif est de 25 à 45 € selon la technique. Le remplissage évite la dépose totale, préserve l'ongle et permet de garder une apparence impeccable. Au-delà de 5-6 semaines sans remplissage, la dépose et la repose totale deviennent nécessaires.",
      },
      { type: "h2", text: "Nail art et décorations" },
      {
        type: "ul",
        items: [
          "French manucure classique : +8 à +15 €",
          "French color ou baby boomer : +12 à +20 €",
          "Décor simple (paillettes, dégradés) sur 2 ongles : +10 à +20 €",
          "Nail art complet sur 10 ongles : +25 à +60 €",
          "Strass, sculpture 3D, charms : +5 à +15 € par ongle",
        ],
      },
      {
        type: "amazon",
        titre: "Le kit ongles pour entretenir et prolonger la pose",
        produits: [
          { nom: "Kit retrait gel et semi-permanent", description: "Tout pour déposer en douceur sans abîmer l'ongle", recherche: "kit retrait gel semi permanent" },
          { nom: "Huile cuticules nourrissante", description: "Indispensable pour entretenir le contour des ongles", recherche: "huile cuticules nourrissante" },
          { nom: "Lime à ongles professionnelle 100/180", description: "Grain double pour limer et préparer", recherche: "lime ongles professionnelle 100 180" },
          { nom: "Base coat fortifiante ongles fragiles", description: "Renforce l'ongle naturel entre deux poses", recherche: "base coat fortifiante ongles" },
          { nom: "Lampe UV LED 48 W professionnelle", description: "Pour finitions et retouches à la maison", recherche: "lampe uv led 48w manucure" },
          { nom: "Repousse-cuticules métal et bâtonnets buis", description: "Kit complet pour soigner les cuticules", recherche: "repousse cuticules metal bois" },
          { nom: "Top coat brillant longue durée", description: "Prolonge la tenue et la brillance entre rendez-vous", recherche: "top coat brillant longue duree" },
          { nom: "Crème mains réparatrice intensive", description: "Protège les mains agressées par les produits", recherche: "creme mains reparatrice intensive" },
        ],
      },
      { type: "h2", text: "Pose à domicile" },
      {
        type: "p",
        text: "Une prothésiste à domicile facture 10 à 20 € de plus qu'en salon pour le déplacement. L'avantage : confort, gain de temps, possibilité de bénéficier du crédit d'impôt 50 % si la praticienne est déclarée en service à la personne. Bien vérifier les conditions d'hygiène et le matériel utilisé.",
      },
      { type: "h2", text: "Risques et précautions" },
      {
        type: "p",
        text: "Une pose mal réalisée peut abîmer durablement l'ongle naturel : amincissement, déshydratation, mycoses. Privilégier une prothésiste formée et exigeante sur l'hygiène : ponçage à grain doux, désinfection des outils, lampe UV de qualité. Une pause de 2 à 4 semaines tous les 6 à 12 mois permet à l'ongle de se régénérer.",
      },
      { type: "h2", text: "Choisir sa prothésiste ongulaire" },
      {
        type: "ul",
        items: [
          "Consulter le portfolio Instagram sur plusieurs mois",
          "Vérifier l'hygiène du salon ou du matériel à domicile",
          "Privilégier une prothésiste formée par une école reconnue (Peggy Sage, OPI Academy, etc.)",
          "Lire les avis Google sur la tenue dans le temps, pas seulement le rendu immédiat",
          "Demander la marque des produits utilisés (gels CE conformes)",
        ],
      },
      {
        type: "cta",
        text: "Trouver une prothésiste ongulaire près de chez vous",
        href: "/prothesiste-ongulaire",
      },
      { type: "h2", text: "À retenir" },
      {
        type: "p",
        text: "Comptez 25-45 € pour un semi-permanent, 40-70 € pour une pose gel, 50-80 € pour une pose capsules. Un remplissage toutes les 3-4 semaines à 25-45 € prolonge la tenue. À domicile, le crédit d'impôt 50 % allège la facture. Hygiène et formation de la prothésiste sont les deux critères qui font vraiment la différence sur la durée.",
      },
    ],
  },
  {
    slug: "maquilleuse-mariage-tarifs-prestations",
    title: "Maquilleuse mariage : tarifs, essai et prestations en 2026",
    description:
      "Maquilleuse mariage en 2026 : tarifs mariée, témoins, essai, formules avec coiffure. Comment choisir et organiser son maquillage du jour J.",
    metier: "maquilleuse",
    date: "2026-05-23",
    readTime: 8,
    intro:
      "Le maquillage du jour J est l'un des postes que les futurs mariés sous-estiment souvent dans leur budget. Entre l'essai, la prestation du matin, les éventuelles retouches et les témoins, la facture peut vite grimper. Voici les tarifs 2026 et les critères pour choisir la bonne professionnelle.",
    sections: [
      { type: "h2", text: "Tarifs d'un maquillage de mariée" },
      {
        type: "ul",
        items: [
          "Maquillage mariée seul (essai inclus) : 130 à 280 €",
          "Maquillage mariée + 1 essai préalable séparé : 170 à 350 €",
          "Maquillage mariée + témoin : 220 à 450 €",
          "Maquillage mariée + 3 témoins/mère : 380 à 700 €",
          "Forfait journée complète avec retouches : 450 à 900 €",
          "Coiffure + maquillage en formule duo : 350 à 750 €",
        ],
      },
      { type: "h2", text: "Pourquoi l'essai est indispensable" },
      {
        type: "p",
        text: "L'essai maquillage permet de tester le rendu en photo, d'ajuster les couleurs à la robe et au teint, et de valider la tenue de longue durée. Il dure généralement 1 h 30 à 2 h. À organiser idéalement 1 à 2 mois avant le mariage, en même temps que l'essai coiffure pour valider l'harmonie globale. Sans essai, le risque de mauvaise surprise le jour J est réel.",
      },
      { type: "h2", text: "Le jour J : déroulement classique" },
      {
        type: "p",
        text: "La maquilleuse arrive 2 à 3 heures avant le départ pour la cérémonie. Elle commence par la mariée (45 minutes à 1 h 15), puis enchaîne avec les témoins ou la mère (30 à 45 minutes chacune). Un kit de retouches est généralement remis à la mariée pour la journée : rouge à lèvres, poudre, mouchoirs absorbants.",
      },
      { type: "h2", text: "Frais de déplacement et conditions" },
      {
        type: "p",
        text: "La plupart des maquilleuses facturent un déplacement à partir de 25-50 € selon la distance. Au-delà de 50 km, prévoir 0,50 à 1 €/km supplémentaire. Pour un mariage en région isolée ou un horaire matinal très tôt, une nuit d'hôtel à la charge des mariés peut être demandée. Vérifier ces conditions avant signature du devis.",
      },
      { type: "h2", text: "Techniques et longue tenue" },
      {
        type: "p",
        text: "Une maquilleuse mariage professionnelle utilise des techniques spécifiques pour assurer une tenue de 10 à 16 heures : primer adapté au type de peau, fixateur en spray, fonds de teint résistants à l'eau et waterproof pour le mascara et l'eye-liner. Les techniques airbrush et HD sont plus chères mais offrent une tenue supérieure et un rendu impeccable en photo.",
      },
      {
        type: "amazon",
        titre: "Les indispensables pour préparer son maquillage de mariage",
        produits: [
          { nom: "Palette maquillage mariée nude tons doux", description: "Tons neutres parfaits pour un make-up intemporel", recherche: "palette maquillage nude mariage" },
          { nom: "Fond de teint longue tenue 24h", description: "Type Estée Lauder Double Wear, référence des mariées", recherche: "fond de teint longue tenue 24h" },
          { nom: "Faux cils mariage naturels lot", description: "Effet regard intense sans excès", recherche: "faux cils naturels lot mariage" },
          { nom: "Primer base de teint floutant", description: "Affine le grain de peau avant l'application", recherche: "primer base teint floutant" },
          { nom: "Brume fixatrice maquillage longue tenue", description: "Fixe le maquillage pour toute la journée", recherche: "brume fixatrice maquillage urban decay" },
          { nom: "Miroir lumineux LED Hollywood", description: "Indispensable pour les retouches précises", recherche: "miroir lumineux led hollywood" },
          { nom: "Kit pinceaux maquillage professionnel", description: "Set complet pour application studio à la maison", recherche: "kit pinceaux maquillage professionnel" },
          { nom: "Rouge à lèvres longue tenue mat", description: "Pour les retouches au cours de la journée", recherche: "rouge a levres longue tenue mat" },
        ],
      },
      { type: "h2", text: "Maquillage minéral, vegan, hypoallergénique" },
      {
        type: "p",
        text: "De plus en plus de maquilleuses proposent des produits clean, vegan ou certifiés bio. Indispensable pour les peaux réactives, allergiques ou pour celles qui souhaitent une démarche éthique. Le surcoût est généralement faible (10-20 % maximum). Préciser ses attentes dès la prise de contact.",
      },
      { type: "h2", text: "Critères pour bien choisir" },
      {
        type: "ul",
        items: [
          "Portfolio Instagram avec des mariées variées (carnations, âges, styles)",
          "Avis Google et témoignages sur la durée",
          "Diplôme CAP esthétique ou formation reconnue en maquillage artistique",
          "Réactivité et écoute pendant l'échange initial",
          "Disponibilité confirmée par écrit pour la date du mariage",
          "Devis détaillé avec essai, déplacement et nombre de personnes",
        ],
      },
      {
        type: "cta",
        text: "Trouver une maquilleuse mariage près de chez vous",
        href: "/maquilleuse",
      },
      { type: "h2", text: "Réserver tôt et signer un contrat" },
      {
        type: "p",
        text: "Les bonnes maquilleuses sont réservées 6 à 12 mois à l'avance pour les mariages d'été. Un acompte de 20 à 30 % est généralement demandé pour bloquer la date. Le contrat doit mentionner la date, le lieu, l'horaire d'arrivée, le nombre de personnes maquillées et les conditions d'annulation.",
      },
      { type: "h2", text: "À retenir" },
      {
        type: "p",
        text: "Comptez 130-280 € pour un maquillage mariée seul, 220-700 € avec les témoins, jusqu'à 900 € pour une formule journée avec retouches. L'essai est indispensable, à programmer 1-2 mois avant. Réserver 6-12 mois à l'avance pour les mariages d'été, vérifier les frais de déplacement et signer un contrat clair restent les trois meilleurs réflexes pour un jour J sans surprise.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getLatestArticles(count: number): Article[] {
  return [...articles]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, count);
}

export function getRelatedArticles(currentSlug: string, count: number): Article[] {
  const current = getArticleBySlug(currentSlug);
  if (!current) return [];
  return articles
    .filter((a) => a.slug !== currentSlug)
    .sort((a, b) => {
      const aScore = a.metier === current.metier ? 1 : 0;
      const bScore = b.metier === current.metier ? 1 : 0;
      return bScore - aScore;
    })
    .slice(0, count);
}
