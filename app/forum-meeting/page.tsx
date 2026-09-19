import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section, { TitreSection } from "@/components/Section";
import Visuel from "@/components/Visuel";
import Bouton from "@/components/Bouton";
import { Evenement, Lieu } from "@/components/Icones";
import { evenements } from "@/lib/contenu";

export const metadata: Metadata = {
  title: "Forum / Meeting",
  description:
    "Forums internationaux, meetings de promotion et rencontres sectorielles organisés par Synergia International.",
};

const deroule = [
  { heure: "09h00", intitule: "Accueil et séance d'ouverture" },
  { heure: "10h30", intitule: "Tables rondes sectorielles" },
  { heure: "12h30", intitule: "Déjeuner de réseau" },
  { heure: "14h00", intitule: "Rendez-vous d'affaires qualifiés" },
  { heure: "16h30", intitule: "Restitution et engagements" },
];

export default function ForumMeeting() {
  return (
    <>
      <Hero
        surtitre="Forum / Meeting"
        titre={
          <>
            Les rendez-vous
            <br />
            <span className="italic text-or">du réseau</span>
          </>
        }
        chapo="Nos événements sont des espaces de travail : on y prépare des décisions, on y signe des accords, on y rend compte des engagements précédents."
      />

      {/* Édition à la une */}
      <Section fond="gris">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Visuel
            ambiance="evenement"
            legende="Événements & production"
            className="aspect-[4/3] w-full"
            priorite
          />
          <div>
            <p className="surtitre">Prochaine édition</p>
            <h2 className="titre mt-5 text-[2.3rem] text-noir lg:text-[2.9rem]">
              Forum Synergia
              <br />
              Afrique / Europe 2026
            </h2>
            <p className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.85rem] text-anthracite/75">
              <span className="inline-flex items-center gap-2">
                <Evenement className="h-4 w-4 text-or" />
                14 &amp; 15 octobre 2026
              </span>
              <span className="inline-flex items-center gap-2">
                <Lieu className="h-4 w-4 text-or" />
                Paris, France
              </span>
            </p>
            <p className="mt-6 text-[0.95rem] leading-[1.8] text-anthracite/75">
              Deux journées réunissant décideurs publics, investisseurs et
              porteurs de projets autour des filières stratégiques. Chaque
              participant repart avec un calendrier de rendez-vous qualifiés.
            </p>
            <Bouton href="/contact" taille="lg" className="mt-9">
              S'inscrire au forum
            </Bouton>
          </div>
        </div>
      </Section>

      {/* Agenda */}
      <Section>
        <TitreSection surtitre="Agenda" titre="Les prochaines rencontres" />
        <ul className="mt-12 divide-y divide-noir/10 border-y border-noir/10">
          {evenements.map((e) => (
            <li
              key={e.titre}
              className="grid gap-5 py-9 md:grid-cols-[180px_1fr_auto] md:items-start md:gap-10"
            >
              <div>
                <p className="titre text-[1.35rem] text-or">{e.date}</p>
                <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-anthracite/55">
                  {e.format}
                </p>
              </div>
              <div>
                <h3 className="titre text-[1.6rem] text-noir">{e.titre}</h3>
                <p className="mt-2 inline-flex items-center gap-2 text-[0.82rem] text-anthracite/65">
                  <Lieu className="h-3.5 w-3.5 text-or" />
                  {e.lieu}
                </p>
                <p className="mt-3 max-w-2xl text-[0.9rem] leading-[1.75] text-anthracite/75">
                  {e.texte}
                </p>
              </div>
              <span className="self-center whitespace-nowrap border border-or/40 px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-or">
                {e.statut}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Déroulé type */}
      <Section fond="noir">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <TitreSection
            surtitre="Déroulé type"
            titre="Une journée de forum"
            chapo="Le format est stable d'une édition à l'autre : des séquences courtes, beaucoup de rendez-vous bilatéraux, et une restitution qui engage."
            invert
          />
          <ol className="divide-y divide-blanc/10 border-y border-blanc/10">
            {deroule.map((d) => (
              <li key={d.heure} className="flex items-baseline gap-8 py-5">
                <span className="titre w-20 shrink-0 text-[1.3rem] text-or">
                  {d.heure}
                </span>
                <span className="text-[0.95rem] text-blanc/75">{d.intitule}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    </>
  );
}
