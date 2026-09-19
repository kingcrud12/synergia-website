import type { ComponentType } from "react";
import {
  Developpement,
  Echange,
  Impact,
  International,
  Partenariats,
  Production,
  Talents,
  Evenement,
} from "./Icones";

/** Table des icônes de la charte §7, adressables par clé. */
export const icones: Record<string, ComponentType<{ className?: string }>> = {
  developpement: Developpement,
  echange: Echange,
  production: Production,
  international: International,
  evenement: Evenement,
  talents: Talents,
  partenariats: Partenariats,
  impact: Impact,
};

export default function CartePilier({
  icone,
  titre,
  texte,
  invert = false,
}: {
  icone: string;
  titre: string;
  texte: string;
  invert?: boolean;
}) {
  const Icone = icones[icone] ?? International;

  return (
    <article
      className={`group relative border p-8 transition-colors duration-300 ${
        invert
          ? "border-blanc/12 bg-blanc/[0.03] hover:border-or/50"
          : "border-noir/10 bg-blanc hover:border-or"
      }`}
    >
      <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-or transition-transform duration-400 group-hover:scale-x-100" />
      <Icone className="h-9 w-9 text-or" />
      <h3
        className={`titre mt-6 text-[1.5rem] ${invert ? "text-blanc" : "text-noir"}`}
      >
        {titre}
      </h3>
      <p
        className={`mt-3 text-[0.88rem] leading-[1.75] ${
          invert ? "text-blanc/60" : "text-anthracite/70"
        }`}
      >
        {texte}
      </p>
    </article>
  );
}
