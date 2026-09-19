import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section, { Conteneur, TitreSection } from "@/components/Section";
import Visuel from "@/components/Visuel";
import Bouton from "@/components/Bouton";
import { icones } from "@/components/CartePilier";
import { Fleche } from "@/components/Icones";
import { programmes } from "@/lib/contenu";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Talents, Connect, Culture, Heritage : les quatre programmes d'action de Synergia International.",
};

export default function Programmes() {
  return (
    <>
      <Hero
        surtitre="Nos programmes"
        titre={
          <>
            Quatre leviers,
            <br />
            <span className="italic text-or">une même exigence</span>
          </>
        }
        chapo="Chaque programme répond à un moment précis de la vie d'un projet : faire émerger les talents, nouer les alliances, produire réellement, puis mesurer ce qui a changé."
      />

      {/* Sommaire ancré */}
      <div className="border-b border-noir/10 bg-gris">
        <Conteneur>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 py-5">
            {programmes.map((p) => (
              <li key={p.slug}>
                <a
                  href={`#${p.slug}`}
                  className="text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-anthracite/70 transition-colors hover:text-or"
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
                <Icone className="h-10 w-10 text-or" />
                <TitreSection
                  surtitre={`Programme ${String(index + 1).padStart(2, "0")}`}
                  titre={p.titre}
                />
                <p className="titre mt-4 text-[1.5rem] italic text-or">
                  {p.accroche}
                </p>
                <p className="mt-6 text-[0.95rem] leading-[1.8] text-anthracite/75">
                  {p.texte}
                </p>
                <ul className="mt-8 space-y-3 border-l-2 border-or/40 pl-6">
                  {p.points.map((point) => (
                    <li
                      key={point}
                      className="text-[0.88rem] leading-[1.7] text-anthracite/80"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <Bouton
                  href="/contact"
                  variante={inverse ? "sombre" : "principal"}
                  className="mt-9"
                >
                  Candidater / en savoir plus
                  <Fleche className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Bouton>
              </div>
              <Visuel
                src={p.photo ?? undefined}
                alt={p.photoAlt || undefined}
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
          <TitreSection
            surtitre="Vous portez un projet ?"
            titre="Présentez-nous votre dossier"
            chapo="Nos équipes examinent chaque semaine les projets qui leur sont soumis. Une première réponse vous est adressée sous quinze jours."
            invert
            centre
          />
          <Bouton href="/contact" taille="lg" className="mt-10">
            Déposer un projet
          </Bouton>
        </div>
      </Section>
    </>
  );
}
