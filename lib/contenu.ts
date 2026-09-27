/**
 * Contenu éditorial du site.
 *
 * Sources faisant foi (fournies par le client) :
 *   - SYNERGIA_Textes_page_accueil_et_boutons.pdf  → accueil, boutons, 5 programmes
 *   - Calendrier_previsionnel_activite_2026_2027_SYNERGIA.pdf → saison, coordonnées
 *
 * Les textes repris de ces documents le sont mot pour mot.
 */

export const marque = {
  nom: "Synergia International",
  nature: "Association culturelle internationale",
  slogan: "Créer le lien, unir les talents",
  signature: "La force d'un réseau intercontinental",
  territoires: "France • Afrique • Europe",
  courriel: "info@synergia-international.com",
  telephone: "06 18 83 62 81",
  adresse: "12 rue de l'Ingénieur Robert Keller — 75015 Paris, France",
  site: "www.synergia-international.com",
  /** Domaine canonique. Le www doit rediriger vers cette forme (voir README). */
  url: "https://synergia-international.com",
};

export const navigation = [
  { libelle: "Accueil", href: "/" },
  { libelle: "Qui sommes-nous", href: "/qui-sommes-nous" },
  { libelle: "Programmes", href: "/programmes" },
  { libelle: "Calendrier", href: "/calendrier" },
  { libelle: "Actualités", href: "/actualites" },
  { libelle: "Partenaires", href: "/partenaires" },
  { libelle: "Contact", href: "/contact" },
];

/** Accueil — textes repris du document « Textes page accueil et boutons ». */
export const accueil = {
  titre: "Créer le lien, unir les talents",
  soustitre: "La force d'un réseau intercontinental.",
  chapo:
    "Un réseau international au service du développement, des échanges et de la production artistique et culturelle.",
  presentation:
    "Entre la France, l'Afrique et l'Europe, Synergia International crée des espaces de rencontre où les cultures dialoguent et les talents se révèlent. Spectacles, festivals et grands rendez-vous donnent vie à des expériences qui rassemblent les publics et ouvrent la voie à de nouvelles collaborations.",
};

/** Bouton « Découvrir l'association » — contenu du même document. */
export const association = {
  paragraphes: [
    "Synergia International est une association dédiée aux échanges culturels entre la France, l'Afrique et l'Europe. Elle conçoit des événements qui rapprochent les publics, valorisent les patrimoines et donnent aux talents de nouveaux espaces d'expression.",
    "Notre ambition est de faire de chaque rencontre une occasion de découvrir l'autre, de partager des idées et de construire des collaborations durables.",
  ],
  conclusion:
    "Créer le lien, unir les talents : la force d'un réseau intercontinental.",
};

/** Repères chiffrés, tous tirés du calendrier prévisionnel. */
export const chiffres = [
  { valeur: "9", libelle: "spectacles vivants à Paris" },
  { valeur: "5", libelle: "axes de programmation" },
  { valeur: "3", libelle: "continents reliés" },
  { valeur: "2026-2027", libelle: "saison culturelle" },
];

/**
 * Les cinq axes de programmation.
 * `accroche` : formulation de la page d'accueil du document textes.
 * `texte`    : formulation du cadre général du calendrier prévisionnel.
 */
export const programmes = [
  {
    slug: "culture",
    icone: "evenement",
    titre: "Synergia Culture",
    accroche: "Spectacles et événements artistiques qui rassemblent les publics.",
    texte:
      "Concerts, humour, arts vivants et grands rendez-vous populaires. Chaque soirée réunit des artistes de France, d'Afrique et des diasporas autour d'un public large, dans des lieux emblématiques de la scène parisienne.",
    photo: "/programmes/culture.jpg",
    photoAlt:
      "Festival « Cap sur l'Afrique » à Paris : concert en plein air et pavillons thématiques",
    ambiance: "evenement" as const,
  },
  {
    slug: "heritage",
    icone: "impact",
    titre: "Synergia Heritage",
    accroche: "Découverte et valorisation des patrimoines culturels.",
    texte:
      "Patrimoines, traditions, transmission et dialogue entre les générations. Musiques traditionnelles, contes et danses patrimoniales trouvent ici la scène et le public qu'ils méritent.",
    photo: "/programmes/heritage.jpg",
    photoAlt:
      "Rassemblement intergénérationnel et multiculturel sur une place publique, autour d'un intervenant",
    ambiance: "monde" as const,
  },
  {
    slug: "talents",
    icone: "talents",
    titre: "Synergia Talents",
    accroche: "Visibilité et rencontres pour les artistes et les créateurs.",
    texte:
      "Découverte, accompagnement et valorisation des artistes émergents. Nous leur ouvrons des scènes, des réseaux et des rencontres professionnelles qui comptent pour la suite de leur parcours.",
    photo: "/programmes/talents.jpg",
    photoAlt:
      "Trois collaborateurs de Synergia International au travail, sous la devise « Talent sans frontières »",
    ambiance: "echange" as const,
  },
  {
    slug: "connect",
    icone: "partenariats",
    titre: "Synergia Connect",
    accroche: "Échanges et collaborations entre acteurs de différents horizons.",
    texte:
      "Rencontres et passerelles durables entre la France, l'Afrique et l'Europe. Artistes, institutions, lieux et partenaires se rencontrent ici pour bâtir des projets communs.",
    photo: "/programmes/connect.jpg",
    photoAlt:
      "Table ronde de travail réunissant des partenaires internationaux dans les bureaux de Synergia",
    ambiance: "business" as const,
  },
  {
    slug: "forum",
    icone: "international",
    titre: "Synergia International Forum",
    accroche: "Rencontres autour de la culture et des coopérations internationales.",
    texte:
      "Un temps d'échange entre décideurs culturels, institutions et opérateurs des trois continents, consacré aux coopérations à venir et aux conditions concrètes de leur réussite.",
    photo: "/programmes/forum.jpg",
    photoAlt:
      "Rencontre internationale autour d'une table ronde, Paris en arrière-plan",
    ambiance: "business" as const,
  },
];

export const programmesConclusion =
  "Ensemble, ces programmes créent des passerelles entre les cultures, les idées et les personnes.";

/** Saison culturelle 2026-2027 — 9 spectacles, repris du calendrier prévisionnel. */
export const saison = {
  intitule: "Saison culturelle 2026 — 2027",
  chapo:
    "De décembre 2026 à décembre 2027, Synergia International propose neuf grands rendez-vous à Paris. Cette programmation pluridisciplinaire crée des espaces de rencontre entre les artistes, les institutions, les partenaires et les publics de France, d'Afrique et d'Europe.",
  reserve:
    "Document prévisionnel : les dates, lieux et jauges restent soumis aux disponibilités, contrats de location et autorisations administratives nécessaires.",
};

export const spectacles = [
  {
    jour: "12",
    mois: "déc.",
    annee: "2026",
    date: "2026-12-12",
    titre: "Synergia — La Grande Nuit des Cultures",
    lieu: "Cabaret Sauvage — Paris 19e",
    texte: "Soirée inaugurale : musique live, danse, mode et humour.",
    jauge: "800 personnes",
  },
  {
    jour: "30",
    mois: "janv.",
    annee: "2027",
    date: "2027-01-30",
    titre: "Rires sans frontières",
    lieu: "Casino de Paris — Paris 9e",
    texte:
      "Grand plateau d'humoristes de France, d'Afrique et des diasporas.",
    jauge: "1 300 à 2 000 personnes",
  },
  {
    jour: "13",
    mois: "mars",
    annee: "2027",
    date: "2027-03-13",
    titre: "Héritages d'Afrique",
    lieu: "Théâtre Claude Lévi-Strauss — Musée du quai Branly, Paris 7e",
    texte:
      "Musiques traditionnelles, contes, percussions et danses patrimoniales.",
    jauge: "environ 480 places",
  },
  {
    jour: "24",
    mois: "avril",
    annee: "2027",
    date: "2027-04-24",
    titre: "Talents en scène",
    lieu: "La Cigale — Paris 18e",
    texte:
      "Concert-découverte : jeunes artistes, musiciens, danseurs et humoristes.",
    jauge: "jusqu'à 1 472 personnes",
  },
  {
    jour: "15",
    mois: "mai",
    annee: "2027",
    date: "2027-05-15",
    titre: "Théâtre des deux rives",
    lieu: "Théâtre de la Porte Saint-Martin — Paris 10e",
    texte:
      "Création contemporaine sur les liens culturels entre la France et l'Afrique.",
    jauge: "1 050 places",
  },
  {
    jour: "29",
    mois: "mai",
    annee: "2027",
    date: "2027-05-29",
    titre: "Voix d'elles — Femmes en lumière",
    lieu: "L'Olympia — Paris 9e",
    texte: "Concert live réunissant chanteuses, musiciennes et danseuses.",
    jauge: "environ 2 000 personnes",
  },
  {
    jour: "",
    mois: "juin",
    annee: "2027",
    date: "2027-06-01",
    titre: "Petit Pays & Les Sans Visas — Le Turbo d'Afrique",
    lieu: "Zénith Paris-La Villette — Paris 19e",
    texte: "Concert exceptionnel célébrant plus de 40 années de carrière.",
    jauge: "6 800 places",
  },
  {
    jour: "9-11",
    mois: "juil.",
    annee: "2027",
    date: "2027-07-09",
    titre: "Paris Terre de Cultures",
    lieu: "Pelouse de Reuilly — Bois de Vincennes, Paris 12e",
    texte:
      "Festival : concerts, danse, mode, arts, cinéma, patrimoine et gastronomie.",
    jauge: "plusieurs milliers de visiteurs",
  },
  {
    jour: "11",
    mois: "déc.",
    annee: "2027",
    date: "2027-12-11",
    titre: "Le Gala Paris Élégance — Acte I",
    lieu: "Salle Wagram — Paris 17e",
    texte: "Dîner-spectacle, musique live, défilé de mode et bal.",
    jauge: "300 à 1 000 personnes",
  },
];

export const valeurs = [
  {
    titre: "Le dialogue",
    texte:
      "Faire de chaque rencontre une occasion de découvrir l'autre et de partager des idées.",
  },
  {
    titre: "La transmission",
    texte:
      "Valoriser les patrimoines et faire dialoguer les générations autour de ce qui se transmet.",
  },
  {
    titre: "L'émergence",
    texte:
      "Donner aux talents de nouveaux espaces d'expression et une visibilité réelle.",
  },
  {
    titre: "La durée",
    texte:
      "Construire des collaborations qui se poursuivent au-delà d'un événement.",
  },
];

/**
 * ATTENTION — aucun partenaire n'est nommé ici volontairement.
 * Les salles citées dans le calendrier prévisionnel (Olympia, quai Branly,
 * La Cigale…) sont des lieux pressentis, « soumis aux disponibilités, contrats
 * de location et autorisations administratives ». Les afficher comme
 * partenaires serait une affirmation fausse. À remplacer par la liste réelle,
 * une fois les accords signés et l'autorisation d'usage des logos obtenue.
 */
export const categoriesPartenaires = [
  {
    titre: "Institutions culturelles",
    texte:
      "Musées, théâtres et institutions qui accueillent et coproduisent nos rendez-vous.",
    membres: [
      "À compléter",
      "À compléter",
      "À compléter",
      "À compléter",
    ],
  },
  {
    titre: "Salles et lieux",
    texte:
      "Les scènes parisiennes qui accueillent la saison culturelle 2026-2027.",
    membres: ["À compléter", "À compléter", "À compléter", "À compléter"],
  },
  {
    titre: "Mécènes et soutiens",
    texte:
      "Entreprises, fondations et collectivités qui rendent la programmation possible.",
    membres: [
      "À compléter",
      "À compléter",
      "À compléter",
      "À compléter",
    ],
  },
];

export const actualites = [
  {
    slug: "saison-2026-2027",
    titre: "La saison culturelle 2026-2027 est dévoilée",
    date: "2026-09-15",
    dateLisible: "15 septembre 2026",
    categorie: "Saison",
    resume:
      "Neuf grands rendez-vous à Paris, de décembre 2026 à décembre 2027, entre concerts, humour, patrimoine et festival.",
    ambiance: "evenement" as const,
  },
  {
    slug: "grande-nuit-des-cultures",
    titre: "La Grande Nuit des Cultures ouvrira la saison",
    date: "2026-09-02",
    dateLisible: "2 septembre 2026",
    categorie: "Synergia Culture",
    resume:
      "Le 12 décembre 2026 au Cabaret Sauvage : musique live, danse, mode et humour pour la soirée inaugurale.",
    ambiance: "echange" as const,
  },
  {
    slug: "cinq-axes",
    titre: "Cinq axes pour porter la mission de l'association",
    date: "2026-07-18",
    dateLisible: "18 juillet 2026",
    categorie: "Programmes",
    resume:
      "Culture, Heritage, Talents, Connect et International Forum : les programmes qui structurent l'action de Synergia.",
    ambiance: "monde" as const,
  },
];
