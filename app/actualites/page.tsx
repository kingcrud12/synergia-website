import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section, { TitreSection } from "@/components/Section";
import Visuel from "@/components/Visuel";
import Bouton from "@/components/Bouton";
import { Fleche } from "@/components/Icones";
import { actualites } from "@/lib/contenu";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Les actualités de Synergia International : événements, programmes, partenariats et résultats d'impact.",
};

export default function Actualites() {
  const [une, ...suivantes] = actualites;

  return (
    <>
      <Hero
        surtitre="Actualités"
        titre="Ce qui se passe dans le réseau"
        chapo="Décisions, publications, signatures et rendez-vous : le fil de nos travaux, mis à jour au rythme des projets."
      />

      {/* À la une */}
      <Section fond="gris">
        <article id={une.slug} className="grid items-center gap-12 lg:grid-cols-2">
          <Visuel
            ambiance={une.ambiance}
            legende={une.categorie}
            className="aspect-[16/10] w-full"
            priorite
          />
          <div>
            <p className="surtitre">À la une</p>
            <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-anthracite/55">
              <time dateTime={une.date}>{une.dateLisible}</time> — {une.categorie}
            </p>
            <h2 className="titre mt-3 text-[2.2rem] text-noir lg:text-[2.7rem]">
              {une.titre}
            </h2>
            <p className="mt-5 text-[0.98rem] leading-[1.8] text-anthracite/75">
              {une.resume}
            </p>
            <Bouton href="/contact" variante="sombre" className="mt-8">
              Lire la suite
              <Fleche className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Bouton>
          </div>
        </article>
      </Section>

      {/* Fil complet */}
      <Section>
        <TitreSection surtitre="Toutes les publications" titre="Le fil d'actualité" />
        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {suivantes.map((a) => (
            <article
              key={a.slug}
              id={a.slug}
              className="group flex flex-col border border-noir/10 transition-colors duration-300 hover:border-or"
            >
              <Visuel ambiance={a.ambiance} className="aspect-[16/10] w-full" />
              <div className="flex flex-1 flex-col p-7">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-or">
                  {a.categorie}
                </p>
                <h3 className="titre mt-3 text-[1.5rem] text-noir">{a.titre}</h3>
                <time
                  dateTime={a.date}
                  className="mt-2 text-[0.75rem] text-anthracite/55"
                >
                  {a.dateLisible}
                </time>
                <p className="mt-4 flex-1 text-[0.87rem] leading-[1.75] text-anthracite/70">
                  {a.resume}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-anthracite/60 transition-colors group-hover:text-or">
                  Lire l'article
                  <Fleche className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Inscription à la lettre */}
      <Section fond="noir">
        <div className="mx-auto max-w-2xl text-center">
          <TitreSection
            surtitre="Lettre d'information"
            titre="Recevoir nos publications"
            chapo="Un envoi mensuel : agenda des rencontres, avancement des programmes et résultats publiés."
            invert
            centre
          />
          <form className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row">
            <label htmlFor="lettre-courriel" className="sr-only">
              Adresse électronique
            </label>
            <input
              id="lettre-courriel"
              type="email"
              required
              placeholder="votre@adresse.fr"
              className="flex-1 border border-blanc/20 bg-blanc/5 px-5 py-3.5 text-[0.9rem] text-blanc placeholder:text-blanc/35 focus:border-or focus:outline-none"
            />
            <Bouton type="submit">S'inscrire</Bouton>
          </form>
        </div>
      </Section>
    </>
  );
}
