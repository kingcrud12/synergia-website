import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section, { Conteneur, TitreSection } from "@/components/Section";
import Visuel from "@/components/Visuel";
import Bouton from "@/components/Bouton";
import { icones } from "@/components/CartePilier";
import { Fleche } from "@/components/Icones";
import { programmes, programmesConclusion } from "@/lib/contenu";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Culture, Heritage, Talents, Connect et International Forum : les cinq axes d'action de Synergia International.",
};

export default function Programmes() {
  return (
    <>
      <Hero
        surtitre="Nos programmes"
        titre={
          <>
            Cinq axes
            <br />
            <span className="italic text-or">complémentaires</span>
          </>
        }
        chapo="Les programmes de Synergia International donnent vie à notre mission à travers cinq axes complémentaires."
      />

      {/* Sommaire ancré */}
      <div className="border-b border-noir/10 bg-gris">
        <Conteneur>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 py-5">
            {programmes.map((p) => (
              <li key={p.slug}>
                <a
                  href={`#${p.slug}`}
                  className="text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-anthracite/70 transition-colors hover:text-or-sombre"
                >
                  {p.titre}
                </a>
              </li>
            ))}
          </ul>
        </Conteneur>
      </div>

      {programmes.map((p, index) => {
        const Icone = icones[p.icone];
        const inverse = index % 2 === 1;
        return (
          <Section key={p.slug} id={p.slug} fond={inverse ? "gris" : "blanc"}>
            <div
              className={`grid items-center gap-14 lg:grid-cols-2 ${
                inverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <Icone className="h-10 w-10 text-or-sombre" />
                <TitreSection
                  surtitre={`Axe ${String(index + 1).padStart(2, "0")}`}
                  titre={p.titre}
                />
                <p className="titre mt-4 text-[1.5rem] italic text-or-sombre">
                  {p.accroche}
                </p>
                <p className="mt-6 text-[0.95rem] leading-[1.8] text-anthracite/75">
                  {p.texte}
                </p>
              </div>
              <Visuel
                src={p.photo}
                alt={p.photoAlt}
                ambiance={p.ambiance}
                legende={p.titre}
                className="aspect-[4/3] w-full"
              />
            </div>
          </Section>
        );
      })}

      <Section fond="noir">
        <div className="mx-auto max-w-2xl text-center">
          <p className="titre text-[1.9rem] leading-snug text-blanc lg:text-[2.3rem]">
            {programmesConclusion}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Bouton href="/calendrier" taille="lg">
              Calendrier des événements
              <Fleche className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Bouton>
            <Bouton href="/adherer" variante="secondaire" taille="lg">
              Adhérer à l&apos;association
            </Bouton>
          </div>
        </div>
      </Section>
    </>
  );
}
