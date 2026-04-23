export type Section =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "cta"; text: string; href: string };

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
