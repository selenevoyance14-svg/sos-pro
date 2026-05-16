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
