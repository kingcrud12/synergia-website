import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section, { TitreSection } from "@/components/Section";
import Visuel from "@/components/Visuel";
import Bouton from "@/components/Bouton";
import CartePilier from "@/components/CartePilier";
import { chiffres, piliers, valeurs } from "@/lib/contenu";

export const metadata: Metadata = {
  title: "Qui sommes-nous",
  description:
    "Synergia International : un réseau institutionnel qui relie l'Afrique, l'Europe et la France autour du développement, de l'échange et de la production.",
};

const etapes = [
  {
    numero: "01",
    titre: "Comprendre le terrain",
    texte:
      "Diagnostic partagé avec les acteurs locaux : besoins réels, contraintes, ressources disponibles et jeux d'acteurs.",
  },
  {
    numero: "02",
    titre: "Rassembler les bons acteurs",
    texte:
      "Identification et mise en relation des institutions, opérateurs et financeurs dont l'engagement est nécessaire.",
  },
  {
    numero: "03",
    titre: "Structurer l'engagement",
    texte:
      "Cadre juridique, gouvernance, calendrier et indicateurs : ce qui est promis devient contractuel et mesurable.",
  },
  {
    numero: "04",
    titre: "Rester jusqu'à la livraison",
    texte:
      "Pilotage d'exécution, évaluation à mi-parcours et publication des résultats, y compris lorsqu'ils déçoivent.",
  },
];

export default function QuiSommesNous() {
  return (
    <>
      <Hero
        surtitre="Qui sommes-nous"
        titre={
          <>
            Un réseau au service
            <br />
            <span className="italic text-or">des impacts concrets</span>
          </>
        }
        chapo="Synergia International est une organisation de mise en relation et d'accompagnement de projets entre l'Afrique, l'Europe et la France. Nous intervenons là où les intentions communes doivent devenir des engagements opérationnels."
      />

      <Section>
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <TitreSection
              surtitre="Notre mission"
              titre="Relier ce qui produit de la valeur"
              chapo="Trop de projets s'arrêtent entre l'intention et l'exécution, faute d'un tiers capable de tenir la durée. C'est précisément la place que nous occupons."
            />
            <p className="mt-6 text-[0.95rem] leading-[1.8] text-anthracite/75">
              Nous ne sommes ni un bailleur ni un cabinet de conseil. Nous
              sommes un opérateur de réseau : nous rassemblons les compétences,
              les capitaux et les autorisations nécessaires, puis nous
              accompagnons le projet jusqu'à sa livraison effective.
            </p>
            <p className="mt-4 text-[0.95rem] leading-[1.8] text-anthracite/75">
              Nos équipes sont installées dans les territoires où les projets se
              déroulent. Cette présence continue est la condition de notre
              utilité.
            </p>
          </div>
          <Visuel
            ambiance="business"
            legende="Business & partenariats"
            className="aspect-[4/5] w-full"
          />
        </div>
      </Section>

      <Section fond="gris">
        <TitreSection
          surtitre="Notre méthode"
          titre="Quatre temps, sans raccourci"
          centre
        />
        <ol className="mt-14 grid gap-px bg-noir/10 sm:grid-cols-2 lg:grid-cols-4">
          {etapes.map((e) => (
            <li key={e.numero} className="bg-gris p-8">
              <span className="titre block text-[2.6rem] leading-none text-or/35">
                {e.numero}
              </span>
              <h3 className="titre mt-5 text-[1.45rem] text-noir">{e.titre}</h3>
              <p className="mt-3 text-[0.86rem] leading-[1.75] text-anthracite/70">
                {e.texte}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section fond="noir">
        <TitreSection surtitre="Nos valeurs" titre="Ce qui nous engage" invert />
        <div className="mt-14 grid gap-px bg-blanc/10 sm:grid-cols-2">
          {valeurs.map((v) => (
            <div key={v.titre} className="bg-transparent p-9">
              <h3 className="titre text-[1.6rem] text-blanc">{v.titre}</h3>
              <p className="mt-3 text-[0.88rem] leading-[1.8] text-blanc/60">
                {v.texte}
              </p>
            </div>
          ))}
        </div>
        <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-blanc/10 pt-12 lg:grid-cols-4">
          {chiffres.map((c) => (
            <div key={c.libelle}>
              <dt className="sr-only">{c.libelle}</dt>
              <dd>
                <span className="titre block text-[2.8rem] text-or">
                  {c.valeur}
                </span>
                <span className="mt-1 block text-[0.72rem] font-medium uppercase tracking-[0.16em] text-blanc/55">
                  {c.libelle}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <TitreSection
          surtitre="Nos domaines"
          titre="Développement · Échange · Production"
          centre
        />
        <div className="mt-14 grid gap-px bg-noir/10 sm:grid-cols-2 lg:grid-cols-4">
          {piliers.map((p) => (
            <CartePilier key={p.cle} icone={p.cle} titre={p.titre} texte={p.texte} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Bouton href="/contact" taille="lg">
            Échanger avec nos équipes
          </Bouton>
        </div>
      </Section>
    </>
  );
}
