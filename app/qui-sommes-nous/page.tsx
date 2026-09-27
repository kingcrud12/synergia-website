import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section, { TitreSection } from "@/components/Section";
import Visuel from "@/components/Visuel";
import Bouton from "@/components/Bouton";
import CartePilier from "@/components/CartePilier";
import { Fleche } from "@/components/Icones";
import { association, chiffres, marque, programmes, valeurs } from "@/lib/contenu";

export const metadata: Metadata = {
  title: "Qui sommes-nous",
  description:
    "Synergia International, association dédiée aux échanges culturels entre la France, l'Afrique et l'Europe.",
};

export default function QuiSommesNous() {
  return (
    <>
      <Hero
        surtitre="Découvrir l'association"
        titre={
          <>
            Créer le lien,
            <br />
            <span className="italic text-or">unir les talents</span>
          </>
        }
        chapo={association.paragraphes[0]}
      />

      <Section>
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <TitreSection
              surtitre="Notre ambition"
              titre="Faire de chaque rencontre une découverte"
              chapo={association.paragraphes[1]}
            />
            <p className="titre mt-8 text-[1.6rem] italic leading-snug text-or-sombre lg:text-[1.9rem]">
              {association.conclusion}
            </p>
            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-noir/10 pt-10">
              {chiffres.map((c) => (
                <div key={c.libelle}>
                  <dt className="sr-only">{c.libelle}</dt>
                  <dd>
                    <span className="titre block text-[2.2rem] text-or-sombre">
                      {c.valeur}
                    </span>
                    <span className="mt-1 block text-[0.72rem] font-medium uppercase tracking-[0.16em] text-anthracite/65">
                      {c.libelle}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <Visuel
            src="/programmes/heritage.jpg"
            alt="Rassemblement intergénérationnel et multiculturel sur une place publique"
            className="aspect-[4/5] w-full"
          />
        </div>
      </Section>

      <Section fond="noir">
        <TitreSection surtitre="Nos valeurs" titre="Ce qui nous engage" invert />
        <div className="mt-14 grid gap-px bg-blanc/10 sm:grid-cols-2">
          {valeurs.map((v) => (
            <div key={v.titre} className="p-9">
              <h3 className="titre text-[1.6rem] text-blanc">{v.titre}</h3>
              <p className="mt-3 text-[0.88rem] leading-[1.8] text-blanc/65">
                {v.texte}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section fond="gris">
        <TitreSection
          surtitre="Nos programmes"
          titre="Cinq axes complémentaires"
          centre
        />
        <div className="mt-14 grid gap-px bg-noir/10 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((p) => (
            <CartePilier
              key={p.slug}
              icone={p.icone}
              titre={p.titre}
              texte={p.accroche}
            />
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Bouton href="/programmes" taille="lg">
            Explorer nos programmes
            <Fleche className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Bouton>
          <Bouton href="/adherer" variante="sombre" taille="lg">
            Adhérer
          </Bouton>
        </div>
        <p className="mt-12 text-center text-[0.8rem] uppercase tracking-[0.2em] text-anthracite/50">
          {marque.nature} — {marque.territoires}
        </p>
      </Section>
    </>
  );
}
