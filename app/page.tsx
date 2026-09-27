import Link from "next/link";
import Image from "next/image";
import Bouton from "@/components/Bouton";
import CartePilier from "@/components/CartePilier";
import Section, { Conteneur, TitreSection } from "@/components/Section";
import Visuel from "@/components/Visuel";
import { Fleche, Lieu } from "@/components/Icones";
import {
  accueil,
  actualites,
  association,
  chiffres,
  marque,
  programmes,
  programmesConclusion,
  saison,
  spectacles,
} from "@/lib/contenu";

export default function Accueil() {
  return (
    <>
      {/* ---- Hero — textes du document « Textes page accueil et boutons » ----
           L'image est dense sur toute sa surface : voile sombre, texte blanc,
           accent doré, conformément au traitement de la charte §9. */}
      <section className="relative isolate overflow-hidden bg-noir">
        <Image
          src="/hero-forum.jpg"
          alt="Forum international Synergia : un public nombreux face à la scène et à une carte du monde"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(13,15,19,0.88)_0%,rgba(13,15,19,0.82)_48%,rgba(13,15,19,0.74)_100%)] lg:hidden"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-[linear-gradient(95deg,rgba(13,15,19,0.82)_0%,rgba(13,15,19,0.80)_34%,rgba(13,15,19,0.74)_52%,rgba(13,15,19,0.48)_68%,rgba(13,15,19,0.20)_86%,rgba(13,15,19,0.08)_100%)] lg:block"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,rgba(13,15,19,0.58),transparent)]"
        />

        <Conteneur className="relative py-24 lg:py-32">
          <div className="anim-monte max-w-[680px]">
            <p className="surtitre">{marque.nature}</p>
            <h1 className="titre mt-6 text-[2.7rem] leading-[1.06] text-blanc sm:text-[3.5rem] lg:text-[4.1rem]">
              {accueil.titre}
            </h1>
            <p className="titre mt-4 text-[1.5rem] italic text-or lg:text-[1.8rem]">
              {accueil.soustitre}
            </p>
            <p className="mt-8 max-w-xl text-[1.02rem] leading-[1.8] text-blanc/85">
              {accueil.chapo}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Bouton href="/qui-sommes-nous" taille="lg">
                Découvrir l&apos;association
                <Fleche className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Bouton>
              <Bouton href="/programmes" variante="secondaire" taille="lg">
                Explorer nos programmes
              </Bouton>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-blanc/20 pt-7">
              <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
                {["France", "Afrique", "Europe"].map((lieu, i) => (
                  <li key={lieu} className="flex items-center gap-4">
                    {i > 0 && <span className="h-1 w-1 rotate-45 bg-or" />}
                    <span className="titre text-[1.5rem] text-blanc">{lieu}</span>
                  </li>
                ))}
              </ul>
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-or">
                {marque.signature}
              </span>
            </div>
          </div>
        </Conteneur>
      </section>

      {/* ---- Repères de la saison ---------------------------------------- */}
      <div className="border-b border-noir/8 bg-gris">
        <Conteneur>
          <dl className="grid grid-cols-2 divide-noir/8 sm:divide-x lg:grid-cols-4">
            {chiffres.map((c) => (
              <div key={c.libelle} className="px-2 py-10 text-center">
                <dt className="sr-only">{c.libelle}</dt>
                <dd>
                  <span className="titre block text-[2.4rem] text-or lg:text-[2.8rem]">
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

      {/* ---- Présentation de l'association -------------------------------- */}
      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Visuel
            src="/programmes/connect.jpg"
            alt="Table ronde de travail réunissant des partenaires internationaux"
            className="aspect-[4/3] w-full"
          />
          <div>
            <TitreSection
              surtitre="L'association"
              titre={
                <>
                  Des espaces où les cultures
                  <br />
                  <span className="italic text-or">dialoguent</span>
                </>
              }
              chapo={accueil.presentation}
            />
            {association.paragraphes.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mt-5 text-[0.95rem] leading-[1.8] text-anthracite/75"
              >
                {p}
              </p>
            ))}
            <Bouton href="/qui-sommes-nous" variante="sombre" className="mt-9">
              Découvrir l&apos;association
              <Fleche className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Bouton>
          </div>
        </div>
      </Section>

      {/* ---- Les cinq axes ------------------------------------------------- */}
      <Section fond="gris">
        <TitreSection
          surtitre="Nos programmes"
          titre="Cinq axes complémentaires"
          chapo={programmesConclusion}
          centre
        />
        <div className="mt-14 grid gap-px bg-noir/10 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((p) => (
            <Link key={p.slug} href={`/programmes#${p.slug}`} className="group">
              <CartePilier
                icone={p.icone}
                titre={p.titre}
                texte={p.accroche}
              />
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Bouton href="/programmes" variante="sombre">
            Explorer nos programmes
            <Fleche className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Bouton>
        </div>
      </Section>

      {/* ---- Saison culturelle --------------------------------------------- */}
      <Section fond="noir">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <TitreSection
            surtitre={saison.intitule}
            titre={
              <>
                Neuf grands rendez-vous
                <br />
                <span className="italic text-or">à Paris</span>
              </>
            }
            invert
          />
          <Bouton href="/calendrier" variante="secondaire">
            Calendrier des événements
          </Bouton>
        </div>
        <ul className="mt-14 divide-y divide-blanc/12 border-y border-blanc/12">
          {spectacles.slice(0, 4).map((s) => (
            <li key={s.titre} className="flex flex-wrap items-start gap-6 py-7">
              <div className="w-24 shrink-0">
                <span className="titre block text-[1.4rem] leading-none text-or">
                  {s.jour} {s.mois}
                </span>
                <span className="mt-1 block text-[0.7rem] font-semibold tracking-[0.14em] text-blanc/50">
                  {s.annee}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="titre text-[1.45rem] text-blanc">{s.titre}</h3>
                <p className="mt-1.5 inline-flex items-center gap-2 text-[0.82rem] text-blanc/60">
                  <Lieu className="h-3.5 w-3.5 shrink-0 text-or" />
                  {s.lieu}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[0.8rem] text-blanc/45">{saison.reserve}</p>
      </Section>

      {/* ---- Soutenir ------------------------------------------------------- */}
      <Section>
        <TitreSection
          surtitre="Nous soutenir"
          titre="Rejoindre le réseau"
          chapo="L'association vit de l'engagement de ses membres et de ses soutiens. Deux façons simples de faire partie de l'aventure."
          centre
        />
        <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
          <div className="flex flex-col border border-noir/10 p-9">
            <h3 className="titre text-[1.8rem] text-noir">Adhérer</h3>
            <p className="mt-3 flex-1 text-[0.9rem] leading-[1.75] text-anthracite/75">
              Rejoignez l&apos;association, participez à la vie du réseau et
              accédez en avant-première à la programmation.
            </p>
            <Bouton href="/adherer" className="mt-7 self-start">
              Devenir adhérent
            </Bouton>
          </div>
          <div className="flex flex-col border border-noir/10 p-9">
            <h3 className="titre text-[1.8rem] text-noir">Faire un don</h3>
            <p className="mt-3 flex-1 text-[0.9rem] leading-[1.75] text-anthracite/75">
              Chaque don contribue directement à la production des spectacles
              et à l&apos;accompagnement des artistes émergents.
            </p>
            <Bouton href="/faire-un-don" variante="sombre" className="mt-7 self-start">
              Faire un don
            </Bouton>
          </div>
        </div>
      </Section>

      {/* ---- Actualités ------------------------------------------------------ */}
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
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-or-sombre">
                  {a.categorie} — {a.dateLisible}
                </p>
                <h3 className="titre mt-4 text-[1.45rem] text-noir transition-colors group-hover:text-or-sombre">
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
    </>
  );
}
