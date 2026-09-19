/**
 * Iconographie — charte §7 (Développement, Échange, Production, International,
 * Événement, Talents, Partenariats, Impact) et §6 (icônes de navigation).
 * Trait fin, style linéaire, hérite de la couleur courante.
 */

type Props = { className?: string };

const base = (className?: string) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: className ?? "h-6 w-6",
  "aria-hidden": true,
});

export const Developpement = ({ className }: Props) => (
  <svg {...base(className)}>
    <path d="M4 20V13m5 7V9m5 11V5m5 15V10" />
    <path d="M3 20h18" />
  </svg>
);

export const Echange = ({ className }: Props) => (
  <svg {...base(className)}>
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.3" />
    <path d="M3.5 19a5.5 5.5 0 0 1 11 0M15.5 19a4.4 4.4 0 0 1 5.5-4.1" />
  </svg>
);

export const Production = ({ className }: Props) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6" />
  </svg>
);

export const International = ({ className }: Props) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
  </svg>
);

export const Evenement = ({ className }: Props) => (
  <svg {...base(className)}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
    <path d="M3.5 9.8h17M8 3v4M16 3v4" />
  </svg>
);

export const Talents = ({ className }: Props) => (
  <svg {...base(className)}>
    <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8L12 3.5Z" />
  </svg>
);

export const Partenariats = ({ className }: Props) => (
  <svg {...base(className)}>
    <path d="m11 17-2.3-2.3M3 11.5 7.5 7l3 2.4 3-2.4L21 12.5" />
    <path d="m13 8 5 5-2 2-2.3-2.3M8 20l-3-3M16.5 17 19 14.5" />
  </svg>
);

export const Impact = ({ className }: Props) => (
  <svg {...base(className)}>
    <path d="M11 21c-4-1.5-6-5-5.5-9.5C9 12 11 10 11.5 3c4 2.5 6.5 6 6.5 10a7 7 0 0 1-7 8Z" />
    <path d="M11.5 21c0-4 .8-7 2.5-10" />
  </svg>
);

export const Recherche = ({ className }: Props) => (
  <svg {...base(className)}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-4.4-4.4" />
  </svg>
);

export const Fleche = ({ className }: Props) => (
  <svg {...base(className)}>
    <path d="M4 12h15m-5.5-5.5L19.5 12l-6 5.5" />
  </svg>
);

export const Menu = ({ className }: Props) => (
  <svg {...base(className)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Fermer = ({ className }: Props) => (
  <svg {...base(className)}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const Lieu = ({ className }: Props) => (
  <svg {...base(className)}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const Courriel = ({ className }: Props) => (
  <svg {...base(className)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.8 6.5 8.2 6 8.2-6" />
  </svg>
);

export const Telephone = ({ className }: Props) => (
  <svg {...base(className)}>
    <path d="M6.5 3.5h3l1.5 4-2 1.4a12 12 0 0 0 6.1 6.1l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
  </svg>
);
