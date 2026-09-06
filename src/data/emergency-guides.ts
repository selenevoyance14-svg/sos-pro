export type EmergencyGuide = {
  immediateActions: string[];
  callDetails: string[];
  priceChecks: string[];
  warning: string;
  officialLinks: { label: string; href: string }[];
};

export const emergencyGuides: Record<string, EmergencyGuide> = {
  "plombier-urgence": {
    immediateActions: [
      "Fermez le robinet d’arrêt de l’équipement concerné ou l’arrivée d’eau générale, sans forcer une vanne bloquée.",
      "Coupez l’électricité au disjoncteur général si l’eau menace une prise, un appareil ou le tableau électrique.",
      "Épongez ou recueillez l’eau, déplacez les objets fragiles et photographiez les dégâts pour l’assurance.",
      "Si la fuite vient d’un logement voisin ou d’une partie commune, prévenez immédiatement l’occupant ou le syndic.",
    ],
    callDetails: ["L’emplacement exact et l’importance de la fuite", "Les actions déjà effectuées", "Le type d’installation et son accessibilité", "Les photos disponibles et les contraintes d’accès"],
    priceChecks: ["Prix TTC du déplacement", "Tarif de main-d’œuvre et durée minimale facturée", "Majoration de nuit, dimanche ou jour férié", "Prix des pièces et coût total estimé avant réparation"],
    warning: "Une fuite importante impossible à contenir, de l’eau au contact de l’électricité ou un risque pour les occupants justifie d’appeler les secours.",
    officialLinks: [
      { label: "Dégât des eaux : démarches d’assurance", href: "https://www.service-public.fr/particuliers/vosdroits/F1352" },
      { label: "Dépannage à domicile : règles de protection", href: "https://www.economie.gouv.fr/dgccrf/Publications/Vie-pratique/Fiches-pratiques/depannage-a-domicile" },
    ],
  },
  "serrurier-urgence": {
    immediateActions: [
      "Vérifiez si une autre entrée est accessible sans risque et si un proche possède un double des clés.",
      "N’essayez pas de percer la serrure : une porte simplement claquée s’ouvre souvent sans destruction.",
      "En cas de clés volées, déposez plainte et prévenez l’assurance avant d’engager un remplacement coûteux.",
      "Après une effraction, ne touchez pas aux traces et appelez le 17 avant de faire sécuriser l’ouverture.",
    ],
    callDetails: ["Porte claquée ou verrouillée", "Clé perdue, cassée ou volée", "Type de serrure et nombre de points", "Présence éventuelle d’une assurance assistance"],
    priceChecks: ["Ouverture sans destruction proposée en premier", "Prix TTC déplacement compris", "Supplément horaire annoncé", "Référence et prix de toute serrure remplacée"],
    warning: "Si un enfant, une personne vulnérable, un animal ou un appareil dangereux est enfermé, appelez immédiatement les secours.",
    officialLinks: [
      { label: "Dépannage à domicile : vos droits", href: "https://www.economie.gouv.fr/dgccrf/Publications/Vie-pratique/Fiches-pratiques/depannage-a-domicile" },
      { label: "Que faire après un cambriolage ?", href: "https://www.service-public.fr/particuliers/vosdroits/F1523" },
    ],
  },
  "electricien-urgence": {
    immediateActions: [
      "Débranchez l’appareil suspect uniquement si la prise est sèche, intacte et accessible sans danger.",
      "Testez le disjoncteur une seule fois. S’il retombe immédiatement, laissez-le coupé.",
      "N’ouvrez jamais le tableau et ne touchez pas un câble dénudé, une prise chaude ou une zone humide électrisée.",
      "En cas d’odeur de brûlé, de fumée ou d’étincelles, évacuez et appelez le 18 ou le 112.",
    ],
    callDetails: ["Zone du logement concernée", "Moment et circonstances de la coupure", "Disjoncteur qui déclenche ou panne générale", "Odeur, bruit, chaleur ou trace visible"],
    priceChecks: ["Diagnostic et déplacement TTC", "Majoration hors horaires ouvrés", "Prix unitaire du matériel", "Devis avant remplacement du tableau ou d’un circuit"],
    warning: "Une électrisation, de la fumée, un départ de feu ou un conducteur tombé au sol relève des secours et du gestionnaire de réseau, pas d’une réparation personnelle.",
    officialLinks: [
      { label: "Numéros d’urgence en France", href: "https://www.service-public.fr/particuliers/actualites/A15841" },
      { label: "Coupure de courant : informations Enedis", href: "https://www.enedis.fr/panne-et-interruption" },
    ],
  },
  "chauffagiste-urgence": {
    immediateActions: [
      "En cas d’odeur de gaz, ouvrez les fenêtres, fermez l’arrivée de gaz si elle est accessible, sortez et ne créez aucune étincelle.",
      "Sans odeur de gaz, vérifiez seulement l’alimentation, le thermostat et le code affiché par la chaudière.",
      "Ne démontez pas l’appareil et ne relancez pas plusieurs fois une chaudière qui se met en sécurité.",
      "Protégez les personnes fragiles du froid et utilisez un chauffage d’appoint en respectant strictement sa notice.",
    ],
    callDetails: ["Marque, modèle et énergie de l’appareil", "Code erreur affiché", "Pression indiquée sans intervenir", "Entretien récent et symptômes observés"],
    priceChecks: ["Diagnostic et déplacement", "Majoration d’urgence", "Disponibilité et prix de la pièce", "Garantie sur la réparation"],
    warning: "Odeur de gaz : appelez GRDF Urgence Sécurité Gaz au 0 800 47 33 33 depuis l’extérieur. Maux de tête, nausées ou suspicion de monoxyde de carbone : évacuez et appelez le 112.",
    officialLinks: [
      { label: "Urgence Sécurité Gaz – GRDF", href: "https://www.grdf.fr/particuliers/urgences-et-depannage/urgence-securite-gaz" },
      { label: "Prévenir l’intoxication au monoxyde de carbone", href: "https://www.santepubliquefrance.fr/determinants-de-sante/exposition-a-des-substances-chimiques/monoxyde-de-carbone" },
    ],
  },
  "vitrier-urgence": {
    immediateActions: [
      "Éloignez les enfants et les animaux puis chaussez des chaussures fermées et des gants épais.",
      "Ne retirez pas un grand morceau encore retenu par le cadre : il peut tomber ou se briser brutalement.",
      "Ramassez les petits éclats avec une pelle et utilisez du ruban adhésif pour les fragments presque invisibles.",
      "Photographiez la vitre et protégez provisoirement l’ouverture sans travailler en hauteur ni vous pencher à l’extérieur.",
    ],
    callDetails: ["Dimensions approximatives", "Simple, double ou vitrage de sécurité", "Étage et accessibilité", "Effraction, accident ou intempérie"],
    priceChecks: ["Mise en sécurité provisoire", "Déplacement et majoration", "Type exact du vitrage proposé", "Délai et prix de la pose définitive"],
    warning: "Après une effraction, appelez d’abord la police et l’assurance. Une façade instable ou de grands morceaux menaçant de tomber nécessitent une mise en sécurité urgente.",
    officialLinks: [
      { label: "Cambriolage : démarches officielles", href: "https://www.service-public.fr/particuliers/vosdroits/F1523" },
      { label: "Dépannage à domicile : devis et facturation", href: "https://www.economie.gouv.fr/dgccrf/Publications/Vie-pratique/Fiches-pratiques/depannage-a-domicile" },
    ],
  },
  "depanneur-auto-urgence": {
    immediateActions: [
      "Allumez les feux de détresse, garez-vous le plus à droite possible et enfilez le gilet avant de sortir.",
      "Faites sortir les passagers côté opposé à la circulation et placez-les derrière la glissière de sécurité.",
      "Sur autoroute, rejoignez une borne d’appel ou utilisez l’application officielle SOS Autoroute lorsque le réseau est concerné.",
      "N’essayez pas de réparer sur la chaussée et ne restez jamais dans le véhicule immobilisé sur une voie circulée.",
    ],
    callDetails: ["Autoroute, route ou rue et sens de circulation", "Borne, point kilométrique ou géolocalisation", "Marque, modèle et immatriculation", "Nature de la panne et danger immédiat"],
    priceChecks: ["Prise en charge éventuelle par l’assistance", "Forfait applicable et distance de remorquage", "Destination du véhicule", "Frais de gardiennage éventuels"],
    warning: "Sur autoroute et voie express, seuls les dépanneurs agréés peuvent intervenir. Utilisez une borne d’urgence ou le canal officiel du gestionnaire.",
    officialLinks: [
      { label: "Panne sur autoroute : règles officielles", href: "https://www.service-public.fr/particuliers/vosdroits/F11056" },
      { label: "Tarifs réglementés du dépannage autoroutier", href: "https://www.economie.gouv.fr/particuliers/depannage-autoroute-prix-tarifs" },
    ],
  },
  "veterinaire-urgence": {
    immediateActions: [
      "Appelez une clinique avant de vous déplacer afin qu’elle évalue l’urgence et prépare l’accueil.",
      "Gardez l’animal au calme, limitez ses mouvements et transportez-le dans une caisse ou sur une couverture.",
      "N’administrez aucun médicament humain et ne faites pas vomir l’animal sans instruction vétérinaire.",
      "Conservez l’emballage d’un produit potentiellement ingéré et notez l’heure, la quantité et les symptômes.",
    ],
    callDetails: ["Espèce, race, âge et poids", "Symptômes et heure de début", "Produit ou objet potentiellement ingéré", "Traitements et antécédents connus"],
    priceChecks: ["Prix de la consultation de garde", "Examens envisagés et estimation", "Acompte ou modalités de paiement", "Prise en charge par l’assurance animale"],
    warning: "Difficulté respiratoire, convulsions, hémorragie, abdomen brutalement gonflé, perte de connaissance ou ingestion toxique imposent un appel vétérinaire immédiat.",
    officialLinks: [
      { label: "Centre antipoison animal et environnemental de l’Ouest", href: "https://www.centre-antipoison-animal.com/" },
      { label: "Ordre national des vétérinaires", href: "https://www.veterinaire.fr/" },
    ],
  },
};
