import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section, { TitreSection } from "@/components/Section";
import Bouton from "@/components/Bouton";
import Visuel from "@/components/Visuel";
import { Courriel, Telephone } from "@/components/Icones";
import { marque } from "@/lib/contenu";

export const metadata: Metadata = {
  title: "Faire un don",
  description:
    "Soutenir Synergia International : chaque don contribue à la production des spectacles et à l'accompagnement des artistes émergents.",
};

const usages = [
  {
    titre: "La production des spectacles",
    texte:
      "Location des salles, technique, scénographie : donner aux artistes les moyens de la scène.",
  },
  {
    titre: "L'accompagnement des talents",
    texte:
      "Repérer, accompagner et exposer les artistes émergents des trois continents.",
  },
  {
    titre: "La transmission des patrimoines",
    texte:
      "Documenter et faire vivre les répertoires traditionnels auprès de nouveaux publics.",
  },
];

export default function FaireUnDon() {
  return (
    <>
      <Hero
        surtitre="Nous soutenir"
        titre={
          <>
            Faire
            <br />
            <span className="italic text-or">un don</span>
          </>
        }
        chapo="Votre soutien finance directement la saison culturelle : les scènes, les artistes et les rencontres qui font vivre le réseau."
      />

      <Section>
        <TitreSection
          surtitre="À quoi sert votre don"
          titre="Trois usages concrets"
          centre
        />
        <div className="mt-14 grid gap-px bg-noir/10 md:grid-cols-3">
          {usages.map((u) => (
            <div key={u.titre} className="bg-blanc p-9">
              <h3 className="titre text-[1.6rem] text-noir">{u.titre}</h3>
              <p className="mt-3 text-[0.88rem] leading-[1.75] text-anthracite/75">
                {u.texte}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section fond="gris">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Visuel
            src="/programmes/culture.jpg"
            alt="Festival « Cap sur l'Afrique » : concert en plein air et public nombreux"
            className="aspect-[4/3] w-full"
          />
          <div>
            <TitreSection
              surtitre="Comment donner"
              titre="Nous contacter pour un don"
              chapo="Le dispositif de don en ligne est en cours de mise en place. En attendant, nos équipes vous accompagnent directement pour tout don ponctuel ou régulier, ainsi que pour le mécénat d'entreprise."
            />
            <ul className="mt-8 space-y-4 text-[0.9rem] text-anthracite/80">
              <li className="flex gap-3">
                <Courriel className="mt-0.5 h-4 w-4 shrink-0 text-or-sombre" />
                <a href={`mailto:${marque.courriel}`} className="hover:text-or-sombre">
                  {marque.courriel}
                </a>
              </li>
              <li className="flex gap-3">
                <Telephone className="mt-0.5 h-4 w-4 shrink-0 text-or-sombre" />
                <a
                  href={`tel:${marque.telephone.replace(/\s/g, "")}`}
                  className="hover:text-or-sombre"
                >
                  {marque.telephone}
                </a>
              </li>
            </ul>
            <div className="mt-9 flex flex-wrap gap-4">
              <Bouton href="/contact" taille="lg">
                Nous contacter
              </Bouton>
              <Bouton href="/adherer" variante="sombre" taille="lg">
                Adhérer plutôt
              </Bouton>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
