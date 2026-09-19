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
    "Institutions, entreprises, investisseurs et organisations de terrain : le réseau de partenaires de Synergia International.",
};

const engagements = [
  {
    titre: "Ce que nous apportons",
    liste: [
      "Un accès qualifié à un réseau de trois continents",
      "Une connaissance fine des contextes locaux",
      "Un accompagnement continu jusqu'à la livraison",
      "Un reporting d'impact partagé et publiable",
    ],
  },
  {
    titre: "Ce que nous attendons",
    liste: [
      "Un engagement inscrit dans la durée",
      "Des moyens réels, humains ou financiers",
      "La transparence sur les résultats obtenus",
      "Le respect des acteurs et des territoires",
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
        chapo="Notre réseau réunit des institutions publiques, des entreprises, des investisseurs et des organisations de terrain qui engagent des moyens réels sur des projets vérifiables."
      />

      <Section>
        <TitreSection
          surtitre="Notre écosystème"
          titre="Trois familles d'acteurs"
          chapo="Chaque projet mobilise ces trois familles. C'est leur articulation, et non leur simple juxtaposition, qui produit des résultats."
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
          Les logotypes de nos partenaires sont affichés avec leur accord.
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
