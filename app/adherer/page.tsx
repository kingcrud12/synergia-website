import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section, { TitreSection } from "@/components/Section";
import Bouton from "@/components/Bouton";
import { Courriel, Lieu, Telephone } from "@/components/Icones";
import { marque } from "@/lib/contenu";

export const metadata: Metadata = {
  title: "Adhérer",
  description:
    "Rejoindre Synergia International : participer à la vie du réseau et soutenir la création artistique entre la France, l'Afrique et l'Europe.",
};

const avantages = [
  "La programmation de la saison en avant-première",
  "Des invitations aux temps forts et aux rencontres du réseau",
  "La participation à l'assemblée générale de l'association",
  "L'accès au réseau intercontinental Synergia",
];

const champ =
  "w-full border border-noir/15 bg-blanc px-5 py-3.5 text-[0.9rem] text-noir transition-colors placeholder:text-anthracite/35 focus:border-or-sombre focus:outline-none";
const etiquette =
  "block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-anthracite/70";

export default function Adherer() {
  return (
    <>
      <Hero
        surtitre="Nous rejoindre"
        titre={
          <>
            Adhérer à
            <br />
            <span className="italic text-or">l&apos;association</span>
          </>
        }
        chapo="Adhérer, c'est faire partie d'un réseau qui relie la France, l'Afrique et l'Europe autour de la création artistique et du dialogue des cultures."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <TitreSection
              surtitre="Pourquoi adhérer"
              titre="Ce que l'adhésion vous apporte"
            />
            <ul className="mt-9 space-y-4 border-l-2 border-or-sombre/40 pl-6">
              {avantages.map((a) => (
                <li
                  key={a}
                  className="text-[0.92rem] leading-[1.7] text-anthracite/80"
                >
                  {a}
                </li>
              ))}
            </ul>

            <div className="mt-12 border border-noir/10 bg-gris p-7">
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-or-sombre">
                Montant de l&apos;adhésion
              </h3>
              <p className="mt-4 text-[0.9rem] leading-[1.75] text-anthracite/75">
                Les montants et catégories d&apos;adhésion (individuelle,
                bienfaiteur, structure) sont communiqués sur demande. Adressez
                votre demande à l&apos;association, une réponse vous sera
                apportée sous quinze jours.
              </p>
              <ul className="mt-6 space-y-3 text-[0.85rem] text-anthracite/80">
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
                <li className="flex gap-3">
                  <Lieu className="mt-0.5 h-4 w-4 shrink-0 text-or-sombre" />
                  <span>{marque.adresse}</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <TitreSection
              surtitre="Demande d'adhésion"
              titre="Formulaire"
            />
            <form className="mt-9 grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="nom" className={etiquette}>
                  Nom et prénom *
                </label>
                <input id="nom" name="nom" required className={`${champ} mt-2.5`} />
              </div>
              <div>
                <label htmlFor="structure" className={etiquette}>
                  Structure (facultatif)
                </label>
                <input id="structure" name="structure" className={`${champ} mt-2.5`} />
              </div>
              <div>
                <label htmlFor="courriel" className={etiquette}>
                  Adresse électronique *
                </label>
                <input
                  id="courriel"
                  name="courriel"
                  type="email"
                  required
                  className={`${champ} mt-2.5`}
                />
              </div>
              <div>
                <label htmlFor="telephone" className={etiquette}>
                  Téléphone
                </label>
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  className={`${champ} mt-2.5`}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="type" className={etiquette}>
                  Type d&apos;adhésion *
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  defaultValue=""
                  className={`${champ} mt-2.5`}
                >
                  <option value="" disabled>
                    Sélectionnez une catégorie
                  </option>
                  <option value="individuelle">Adhésion individuelle</option>
                  <option value="bienfaiteur">Membre bienfaiteur</option>
                  <option value="structure">Structure ou association</option>
                  <option value="entreprise">Entreprise</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={etiquette}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`${champ} mt-2.5 resize-y`}
                />
              </div>
              <div className="flex items-start gap-3 sm:col-span-2">
                <input
                  id="consentement"
                  name="consentement"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 shrink-0 accent-[#b8850f]"
                />
                <label
                  htmlFor="consentement"
                  className="text-[0.8rem] leading-[1.6] text-anthracite/70"
                >
                  J&apos;accepte que les informations transmises soient
                  utilisées pour traiter ma demande d&apos;adhésion. *
                </label>
              </div>
              <div className="sm:col-span-2">
                <Bouton type="submit" taille="lg">
                  Envoyer ma demande
                </Bouton>
                <p className="mt-4 text-[0.75rem] text-anthracite/50">
                  * Champs obligatoires
                </p>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
