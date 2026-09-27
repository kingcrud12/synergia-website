import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section, { TitreSection } from "@/components/Section";
import Visuel from "@/components/Visuel";
import Bouton from "@/components/Bouton";
import { Partenariats } from "@/components/Icones";
import { categoriesPartenaires } from "@/lib/contenu";

export const metadata: Metadata = {
  title: "Partenaires",
  description:
    "Institutions culturelles, salles, mécènes et partenaires médias : le réseau de Synergia International.",
};

const engagements = [
  {
    titre: "Ce que nous apportons",
    liste: [
      "Un accès à un réseau artistique sur trois continents",
      "Une connaissance fine des scènes et des publics",
      "Un accompagnement de la conception à la scène",
      "Une visibilité sur l'ensemble de la saison",
    ],
  },
  {
    titre: "Ce que nous attendons",
    liste: [
      "Un engagement inscrit dans la durée",
      "Des moyens réels, humains, techniques ou financiers",
      "La transparence sur les engagements pris",
      "Le respect des artistes et des publics",
    ],
  },
];

export default function Partenaires() {
  return (
    <>
      <Hero
        surtitre="Partenaires"
        titre={
          <>
            Des alliances
            <br />
            <span className="italic text-or">qui tiennent</span>
          </>
        }
        chapo="Notre réseau réunit les institutions culturelles, les salles, les mécènes et les partenaires médias qui accompagnent la saison culturelle de l'association."
      />

      <Section>
        <TitreSection
          surtitre="Notre écosystème"
          titre="Trois familles d'acteurs"
          chapo="Chaque rendez-vous mobilise ces trois familles. C'est leur articulation qui permet à un spectacle d'exister."
          centre
        />
        <div className="mt-14 grid gap-px bg-noir/10 lg:grid-cols-3">
          {categoriesPartenaires.map((c) => (
            <div key={c.titre} className="bg-blanc p-9">
              <Partenariats className="h-9 w-9 text-or" />
              <h3 className="titre mt-6 text-[1.6rem] text-noir">{c.titre}</h3>
              <p className="mt-3 text-[0.88rem] leading-[1.75] text-anthracite/70">
                {c.texte}
              </p>
              <ul className="mt-7 grid gap-px border-t border-noir/10 bg-noir/10">
                {c.membres.map((m) => (
                  <li
                    key={m}
                    className="bg-blanc px-4 py-3.5 text-center text-[0.78rem] font-medium uppercase tracking-[0.1em] text-anthracite/70"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-[0.78rem] text-anthracite/50">
          Liste en cours de constitution. Les logotypes ne seront affichés qu'avec l'accord écrit de chaque partenaire.
        </p>
      </Section>

      <Section fond="gris">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <TitreSection
              surtitre="Devenir partenaire"
              titre="Un cadre clair, dans les deux sens"
            />
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              {engagements.map((e) => (
                <div key={e.titre}>
                  <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-or">
                    {e.titre}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {e.liste.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-[0.87rem] leading-[1.65] text-anthracite/80"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rotate-45 bg-or" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Bouton href="/contact" taille="lg" className="mt-10">
              Proposer un partenariat
            </Bouton>
          </div>
          <Visuel
            ambiance="business"
            legende="Business & partenariats"
            className="aspect-[4/5] w-full"
          />
        </div>
      </Section>
    </>
  );
}
