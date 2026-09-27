import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section, { TitreSection } from "@/components/Section";
import Bouton from "@/components/Bouton";
import { Lieu } from "@/components/Icones";
import { saison, spectacles } from "@/lib/contenu";

export const metadata: Metadata = {
  title: "Calendrier des événements",
  description:
    "Saison culturelle 2026-2027 : neuf spectacles vivants à Paris, de décembre 2026 à décembre 2027.",
};

export default function Calendrier() {
  return (
    <>
      <Hero
        surtitre={saison.intitule}
        titre={
          <>
            Neuf grands rendez-vous
            <br />
            <span className="italic text-or">à Paris</span>
          </>
        }
        chapo={saison.chapo}
      />

      <Section>
        <TitreSection
          surtitre="Programmation"
          titre="Calendrier des événements"
        />
        <ol className="mt-12 divide-y divide-noir/10 border-y border-noir/10">
          {spectacles.map((s) => (
            <li
              key={s.titre}
              className="grid gap-5 py-9 md:grid-cols-[150px_1fr_auto] md:items-start md:gap-10"
            >
              <div className="shrink-0">
                <span className="titre block text-[1.9rem] leading-none text-or-sombre">
                  {s.jour} {s.mois}
                </span>
                <span className="mt-1.5 block text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-anthracite/55">
                  {s.annee}
                </span>
              </div>
              <div>
                <h3 className="titre text-[1.6rem] text-noir">{s.titre}</h3>
                <p className="mt-2 inline-flex items-start gap-2 text-[0.85rem] text-anthracite/70">
                  <Lieu className="mt-0.5 h-3.5 w-3.5 shrink-0 text-or-sombre" />
                  {s.lieu}
                </p>
                <p className="mt-3 max-w-2xl text-[0.9rem] leading-[1.75] text-anthracite/75">
                  {s.texte}
                </p>
              </div>
              <span className="self-center whitespace-nowrap border border-or-sombre/40 px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-or-sombre">
                Jauge : {s.jauge}
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl text-[0.82rem] leading-[1.7] text-anthracite/55">
          {saison.reserve}
        </p>
      </Section>

      <Section fond="noir">
        <div className="mx-auto max-w-2xl text-center">
          <TitreSection
            surtitre="Ne rien manquer"
            titre="Suivre la saison"
            chapo="Adhérez à l'association pour accéder à la programmation en avant-première, ou soutenez directement la production des spectacles."
            invert
            centre
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Bouton href="/adherer" taille="lg">
              Adhérer
            </Bouton>
            <Bouton href="/faire-un-don" variante="secondaire" taille="lg">
              Faire un don
            </Bouton>
          </div>
        </div>
      </Section>
    </>
  );
}
