import Image from "next/image";
import Link from "next/link";
import Bouton from "@/components/Bouton";
import CartePilier from "@/components/CartePilier";
import Section, { Conteneur, TitreSection } from "@/components/Section";
import Visuel from "@/components/Visuel";
import { Fleche, Lieu } from "@/components/Icones";
import {
  actualites,
  categoriesPartenaires,
  chiffres,
  evenements,
  piliers,
  programmes,
} from "@/lib/contenu";

export default function Accueil() {
  return (
    <>
      {/* ---- Hero — photographie « événements & production » (charte §8) -----
           L'image est dense sur toute sa surface : aucune zone ne peut porter
           du texte foncé. On revient donc au traitement de la maquette §9 —
           voile sombre, texte blanc, accent doré. */}
      <section className="relative isolate overflow-hidden bg-noir">
        <Image
          src="/hero-forum.jpg"
          alt="Forum international Synergia : un public nombreux face à la scène et à une carte du monde"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Voile : vertical sur mobile, latéral dès le grand écran */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(13,15,19,0.88)_0%,rgba(13,15,19,0.82)_48%,rgba(13,15,19,0.74)_100%)] lg:hidden"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-[linear-gradient(95deg,rgba(13,15,19,0.82)_0%,rgba(13,15,19,0.80)_34%,rgba(13,15,19,0.74)_52%,rgba(13,15,19,0.48)_68%,rgba(13,15,19,0.20)_86%,rgba(13,15,19,0.08)_100%)] lg:block"
        />
        {/* Assise sombre en pied de section, pour la transition vers le bandeau clair */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,rgba(13,15,19,0.58),transparent)]"
        />

        <Conteneur className="relative py-24 lg:py-32">
          <div className="anim-monte max-w-[660px]">
            <h1 className="titre text-[2.7rem] leading-[1.06] text-blanc sm:text-[3.6rem] lg:text-[4.2rem]">
              Des talents
              <br />
              Des échanges
              <br />
              <span className="text-or">Des opportunités</span>
              <br />
              Pour un impact durable
            </h1>
            <p className="mt-8 max-w-xl text-[1.02rem] leading-[1.8] text-blanc/80">
              Un réseau international au service du développement, des échanges
              et de la production.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Bouton href="/programmes" taille="lg">
                Découvrir nos programmes
                <Fleche className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Bouton>
              <Bouton href="/qui-sommes-nous" variante="secondaire" taille="lg">
                Qui sommes-nous
              </Bouton>
            </div>

            {/* Bloc « Afrique / Europe / France » de la charte, ramené à gauche :
                la droite de la photographie est trop chargée pour l'accueillir. */}
            <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-blanc/20 pt-7">
              <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
                {["Afrique", "Europe", "France"].map((lieu, i) => (
                  <li key={lieu} className="flex items-center gap-4">
                    {i > 0 && <span className="h-1 w-1 rotate-45 bg-or" />}
                    <span className="titre text-[1.5rem] text-blanc">{lieu}</span>
                  </li>
                ))}
              </ul>
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-or">
                Ensemble pour demain
              </span>
            </div>
          </div>
        </Conteneur>
      </section>

      {/* ---- Chiffres clés ---------------------------------------------- */}
      <div className="border-b border-noir/8 bg-gris">
        <Conteneur>
          <dl className="grid grid-cols-2 divide-noir/8 sm:divide-x lg:grid-cols-4">
            {chiffres.map((c) => (
              <div key={c.libelle} className="px-2 py-10 text-center">
                <dt className="sr-only">{c.libelle}</dt>
                <dd>
                  <span className="titre block text-[2.6rem] text-or lg:text-[3rem]">
                    {c.valeur}
                  </span>
                  <span className="mt-1 block text-[0.72rem] font-medium uppercase tracking-[0.16em] text-anthracite/70">
                    {c.libelle}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Conteneur>
      </div>

      {/* ---- Les quatre piliers — iconographie §7 ----------------------- */}
      <Section>
        <TitreSection
          surtitre="Notre raison d'être"
          titre={
            <>
              Développement, échange, production :{" "}
              <span className="italic text-or">une même chaîne</span>
            </>
          }
          chapo="Synergia International relie les acteurs qui font avancer les projets — institutions, entreprises, porteurs de projets et territoires — pour transformer des intentions partagées en réalisations mesurables."
        />
        <div className="mt-14 grid gap-px bg-noir/10 sm:grid-cols-2 lg:grid-cols-4">
          {piliers.map((p) => (
            <CartePilier
              key={p.cle}
              icone={p.cle}
              titre={p.titre}
              texte={p.texte}
            />
          ))}
        </div>
      </Section>

      {/* ---- Présentation ----------------------------------------------- */}
      <Section fond="gris">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Visuel
            ambiance="echange"
            legende="Échange & collaboration"
            className="aspect-[4/3] w-full"
          />
          <div>
            <TitreSection
              surtitre="Qui sommes-nous"
              titre={
                <>
                  Un réseau,
                  <br />
                  des impacts concrets
                </>
              }
              chapo="Depuis douze ans, nous construisons des ponts entre l'Afrique, l'Europe et la France. Notre méthode tient en trois temps : comprendre le terrain, rassembler les bons acteurs, puis rester jusqu'à la livraison."
            />
            <p className="mt-6 text-[0.95rem] leading-[1.8] text-anthracite/75">
              Nos équipes interviennent depuis les territoires concernés, aux
              côtés des institutions publiques comme des opérateurs privés. Ce
              que nous engageons est documenté, suivi et évalué.
            </p>
            <Bouton href="/qui-sommes-nous" variante="sombre" className="mt-9">
              Notre démarche
              <Fleche className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Bouton>
          </div>
        </div>
      </Section>

      {/* ---- Programmes -------------------------------------------------- */}
      <Section fond="noir">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <TitreSection
            surtitre="Nos programmes"
            titre="Quatre leviers d'action"
            invert
          />
          <Bouton href="/programmes" variante="secondaire">
            Tous les programmes
          </Bouton>
        </div>
        <div className="mt-14 grid gap-px bg-blanc/10 sm:grid-cols-2">
          {programmes.map((p) => (
            <Link
              key={p.slug}
              href={`/programmes#${p.slug}`}
              className="group bg-noir p-9 transition-colors duration-300 hover:bg-anthracite/60 lg:p-11"
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-or">
                {p.titre}
              </p>
              <h3 className="titre mt-4 text-[1.7rem] text-blanc lg:text-[2rem]">
                {p.accroche}
              </h3>
              <span className="mt-7 inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-blanc/55 transition-colors group-hover:text-or">
                En savoir plus
                <Fleche className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ---- Forum / Meeting --------------------------------------------- */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <TitreSection
              surtitre="Forum / Meeting"
              titre={
                <>
                  Les rendez-vous
                  <br />
                  <span className="italic text-or">du réseau</span>
                </>
              }
              chapo="Forums internationaux, meetings de promotion et rencontres sectorielles : nos événements sont des espaces de travail, pas des vitrines."
            />
            <Bouton href="/forum-meeting" className="mt-9">
              Voir l'agenda
            </Bouton>
          </div>
          <ul className="divide-y divide-noir/10 border-y border-noir/10">
            {evenements.map((e) => (
              <li key={e.titre} className="group flex flex-wrap items-start gap-6 py-7">
                <div className="w-28 shrink-0">
                  <span className="block text-[0.7rem] font-semibold uppercase leading-[1.5] tracking-[0.14em] text-or">
                    {e.format}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="titre text-[1.4rem] text-noir">{e.titre}</h3>
                  <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.8rem] text-anthracite/65">
                    <span>{e.date}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Lieu className="h-3.5 w-3.5 text-or" />
                      {e.lieu}
                    </span>
                  </p>
                </div>
                <span className="shrink-0 border border-or/40 px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-or">
                  {e.statut}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ---- Actualités --------------------------------------------------- */}
      <Section fond="gris">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <TitreSection surtitre="Actualités" titre="Ce qui se passe" />
          <Bouton href="/actualites" variante="clair">
            Toutes les actualités
          </Bouton>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {actualites.slice(0, 3).map((a) => (
            <Link
              key={a.slug}
              href={`/actualites#${a.slug}`}
              className="group flex flex-col bg-blanc transition-shadow duration-300 hover:shadow-[0_24px_50px_-30px_rgba(23,25,29,0.55)]"
            >
              <Visuel ambiance={a.ambiance} className="aspect-[16/10] w-full" />
              <div className="flex flex-1 flex-col p-7">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-or">
                  {a.categorie} — {a.dateLisible}
                </p>
                <h3 className="titre mt-4 text-[1.45rem] text-noir transition-colors group-hover:text-or">
                  {a.titre}
                </h3>
                <p className="mt-3 flex-1 text-[0.86rem] leading-[1.75] text-anthracite/70">
                  {a.resume}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ---- Partenaires -------------------------------------------------- */}
      <Section>
        <TitreSection
          surtitre="Partenaires"
          titre="Ils avancent avec nous"
          chapo="Institutions publiques, entreprises, investisseurs, universités et organisations de terrain : notre réseau réunit ceux qui engagent des moyens réels."
          centre
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {categoriesPartenaires.map((c) => (
            <div key={c.titre} className="border border-noir/10 p-8">
              <h3 className="titre text-[1.5rem] text-noir">{c.titre}</h3>
              <p className="mt-3 text-[0.86rem] leading-[1.75] text-anthracite/70">
                {c.texte}
              </p>
              <ul className="mt-6 space-y-2.5">
                {c.membres.map((m) => (
                  <li
                    key={m}
                    className="flex items-center gap-3 text-[0.82rem] text-anthracite/80"
                  >
                    <span className="h-1 w-1 shrink-0 rotate-45 bg-or" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Bouton href="/partenaires" variante="secondaire">
            Devenir partenaire
          </Bouton>
        </div>
      </Section>
    </>
  );
}
