/**
 * Contenu éditorial du site. Centralisé ici pour que la mise à jour des textes
 * n'implique aucune modification des composants.
 */

export const marque = {
  nom: "Synergia International",
  slogan: "Développement · Échange · Production",
  signature: "Un réseau, des opportunités, des impacts concrets",
  courriel: "contact@synergia-international.org",
  telephone: "+33 1 84 80 00 00",
  adresse: "12 avenue des Nations — 75016 Paris, France",
};

export const navigation = [
  { libelle: "Accueil", href: "/" },
  { libelle: "Qui sommes-nous", href: "/qui-sommes-nous" },
  { libelle: "Programmes", href: "/programmes" },
  { libelle: "Forum / Meeting", href: "/forum-meeting" },
  { libelle: "Actualités", href: "/actualites" },
  { libelle: "Partenaires", href: "/partenaires" },
  { libelle: "Contact", href: "/contact" },
];

export const piliers = [
  {
    cle: "developpement",
    titre: "Développement",
    texte:
      "Structurer des projets à fort impact économique et social, de l'étude d'opportunité au déploiement sur le terrain.",
  },
  {
    cle: "echange",
    titre: "Échange",
    texte:
      "Faire circuler les compétences, les savoir-faire et les capitaux entre l'Afrique, l'Europe et la France.",
  },
  {
    cle: "production",
    titre: "Production",
    texte:
      "Transformer les intentions en réalisations : filières, infrastructures, contenus et événements.",
  },
  {
    cle: "international",
    titre: "International",
    texte:
      "Un réseau de partenaires institutionnels et privés présents sur trois continents.",
  },
] as const;

export const chiffres = [
  { valeur: "18", libelle: "pays couverts" },
  { valeur: "240+", libelle: "porteurs de projets accompagnés" },
  { valeur: "35", libelle: "partenaires institutionnels" },
  { valeur: "12", libelle: "années d'action" },
];

export const programmes = [
  {
    slug: "talents",
    icone: "talents",
    titre: "Synergia Talents",
    accroche: "Révéler et accompagner la nouvelle génération de bâtisseurs.",
    texte:
      "Détection, formation et mentorat de jeunes dirigeants et entrepreneurs. Un parcours de dix mois mêlant sessions collectives, immersion terrain et accompagnement individuel par des praticiens du développement.",
    points: [
      "Sélection annuelle sur dossier et entretien",
      "Mentorat par des dirigeants confirmés",
      "Accès au réseau international Synergia",
    ],
    ambiance: "echange" as const,
    photo: "/programmes/talents.jpg",
    photoAlt:
      "Trois collaborateurs de Synergia International au travail, sous la devise « Talent sans frontières »",
  },
  {
    slug: "connect",
    icone: "partenariats",
    titre: "Synergia Connect",
    accroche: "Construire des alliances durables entre acteurs publics et privés.",
    texte:
      "Mise en relation qualifiée, structuration juridique et financière, suivi de l'exécution. Nous intervenons là où les intentions communes doivent devenir des engagements opérationnels.",
    points: [
      "Cartographie des acteurs et des besoins",
      "Structuration des accords et gouvernance",
      "Suivi d'exécution et reporting d'impact",
    ],
    ambiance: "business" as const,
    photo: "/programmes/connect.jpg",
    photoAlt:
      "Table ronde de travail réunissant des partenaires internationaux dans les bureaux de Synergia",
  },
  {
    slug: "culture",
    icone: "evenement",
    titre: "Synergia Culture",
    accroche: "Donner corps aux projets, des filières aux infrastructures.",
    texte:
      "Accompagnement opérationnel des maîtres d'ouvrage : montage des filières, recherche de financements, coordination des expertises techniques et pilotage des chantiers.",
    points: [
      "Montage de filières agricoles et industrielles",
      "Ingénierie de financement",
      "Pilotage et coordination d'exécution",
    ],
    ambiance: "evenement" as const,
    photo: "/programmes/culture.jpg",
    photoAlt:
      "Festival « Cap sur l'Afrique » à Paris : concert en plein air et pavillons thématiques",
  },
  {
    slug: "heritage",
    icone: "impact",
    titre: "Synergia Heritage",
    accroche: "Mesurer, prouver et amplifier les effets réels.",
    texte:
      "Un dispositif d'évaluation indépendant, adossé à des indicateurs partagés avec les bailleurs et les territoires, pour documenter ce qui fonctionne et corriger ce qui ne fonctionne pas.",
    points: [
      "Référentiel d'indicateurs partagé",
      "Évaluation à mi-parcours et finale",
      "Publication annuelle des résultats",
    ],
    ambiance: "monde" as const,
    photo: "/programmes/heritage.jpg",
    photoAlt:
      "Rassemblement intergénérationnel et multiculturel sur une place publique, autour d'un intervenant",
  },
];

export const evenements = [
  {
    titre: "Forum Synergia — Afrique / Europe",
    date: "14 & 15 octobre 2026",
    lieu: "Paris, France",
    format: "Forum international",
    texte:
      "Deux journées de rencontres entre décideurs publics, investisseurs et porteurs de projets autour des filières stratégiques.",
    statut: "Inscriptions ouvertes",
  },
  {
    titre: "Meeting Talents — Promotion 2027",
    date: "28 novembre 2026",
    lieu: "Abidjan, Côte d'Ivoire",
    format: "Meeting",
    texte:
      "Présentation de la promotion, ateliers de mentorat et rencontres avec les partenaires du programme.",
    statut: "Sur invitation",
  },
  {
    titre: "Rencontres Production & Filières",
    date: "5 mars 2027",
    lieu: "Casablanca, Maroc",
    format: "Rencontres professionnelles",
    texte:
      "Une journée de travail sectorielle consacrée à l'industrialisation des filières agroalimentaires.",
    statut: "Programme à venir",
  },
];

export const actualites = [
  {
    slug: "forum-2026",
    titre: "Le Forum Synergia 2026 ouvre ses inscriptions",
    date: "2026-09-02",
    dateLisible: "2 septembre 2026",
    categorie: "Événement",
    resume:
      "La sixième édition du Forum réunira à Paris plus de six cents décideurs autour des filières stratégiques Afrique-Europe.",
    ambiance: "evenement" as const,
  },
  {
    slug: "promotion-talents",
    titre: "Synergia Talents : la promotion 2026 dévoilée",
    date: "2026-07-18",
    dateLisible: "18 juillet 2026",
    categorie: "Programmes",
    resume:
      "Quarante-deux lauréats issus de onze pays rejoignent le parcours d'accompagnement pour les dix prochains mois.",
    ambiance: "echange" as const,
  },
  {
    slug: "rapport-impact",
    titre: "Rapport d'impact : les résultats de l'année",
    date: "2026-05-24",
    dateLisible: "24 mai 2026",
    categorie: "Impact",
    resume:
      "Publication du bilan annuel, indicateurs détaillés par programme et enseignements pour le cycle suivant.",
    ambiance: "monde" as const,
  },
  {
    slug: "accord-cadre",
    titre: "Signature d'un accord-cadre sur les filières agricoles",
    date: "2026-04-09",
    dateLisible: "9 avril 2026",
    categorie: "Partenariats",
    resume:
      "Un partenariat triennal engage Synergia et trois opérateurs régionaux sur la structuration de filières locales.",
    ambiance: "business" as const,
  },
];

export const categoriesPartenaires = [
  {
    titre: "Institutions publiques",
    texte: "Ministères, agences de développement et collectivités territoriales.",
    membres: ["Agence de développement", "Ministère du Commerce", "Région partenaire", "Chambre consulaire"],
  },
  {
    titre: "Entreprises & investisseurs",
    texte: "Groupes industriels, fonds d'investissement et opérateurs privés.",
    membres: ["Groupe industriel", "Fonds d'impact", "Opérateur logistique", "Banque partenaire"],
  },
  {
    titre: "Société civile & académique",
    texte: "Universités, fondations et organisations de terrain.",
    membres: ["Université partenaire", "Fondation", "ONG de terrain", "Institut de recherche"],
  },
];

export const valeurs = [
  {
    titre: "Exigence",
    texte:
      "Chaque engagement pris est documenté, suivi et évalué. Nous préférons un projet abouti à dix annonces.",
  },
  {
    titre: "Réciprocité",
    texte:
      "Les échanges que nous organisons profitent à toutes les parties. Le transfert de compétences va dans les deux sens.",
  },
  {
    titre: "Ancrage",
    texte:
      "Nos équipes travaillent depuis les territoires concernés, avec les acteurs qui y opèrent au quotidien.",
  },
  {
    titre: "Transparence",
    texte:
      "Nos résultats, y compris les objectifs non atteints, sont publiés chaque année.",
  },
];
