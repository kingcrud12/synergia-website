import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section, { TitreSection } from "@/components/Section";
import Bouton from "@/components/Bouton";
import { Courriel, Lieu, Telephone } from "@/components/Icones";
import { marque, programmes } from "@/lib/contenu";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacter Synergia International : déposer un projet, proposer un partenariat ou s'inscrire à un forum.",
};

const bureaux = [
  { ville: "Paris", pays: "France", detail: "Siège — 12 avenue des Nations" },
  { ville: "Abidjan", pays: "Côte d'Ivoire", detail: "Bureau régional Afrique de l'Ouest" },
  { ville: "Casablanca", pays: "Maroc", detail: "Bureau régional Maghreb" },
];

const champ =
  "w-full border border-noir/15 bg-blanc px-5 py-3.5 text-[0.9rem] text-noir transition-colors placeholder:text-anthracite/35 focus:border-or focus:outline-none";
const etiquette =
  "block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-anthracite/70";

export default function Contact() {
  return (
    <>
      <Hero
        surtitre="Contact"
        titre="Parlons de votre projet"
        chapo="Déposer un dossier, proposer un partenariat, s'inscrire à une rencontre : une première réponse vous est adressée sous quinze jours."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.25fr_1fr]">
          {/* Formulaire */}
          <div>
            <TitreSection surtitre="Écrivez-nous" titre="Formulaire de contact" />
            <form className="mt-10 grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="nom" className={etiquette}>
                  Nom et prénom *
                </label>
                <input id="nom" name="nom" required className={`${champ} mt-2.5`} />
              </div>
              <div>
                <label htmlFor="organisation" className={etiquette}>
                  Organisation
                </label>
                <input
                  id="organisation"
                  name="organisation"
                  className={`${champ} mt-2.5`}
                />
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
                <label htmlFor="sujet" className={etiquette}>
                  Votre demande *
                </label>
                <select
                  id="sujet"
                  name="sujet"
                  required
                  defaultValue=""
                  className={`${champ} mt-2.5`}
                >
                  <option value="" disabled>
                    Sélectionnez un sujet
                  </option>
                  {programmes.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.titre}
                    </option>
                  ))}
                  <option value="forum">Inscription à un forum / meeting</option>
                  <option value="partenariat">Proposition de partenariat</option>
                  <option value="presse">Demande presse</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={etiquette}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className={`${champ} mt-2.5 resize-y`}
                />
              </div>
              <div className="flex items-start gap-3 sm:col-span-2">
                <input
                  id="consentement"
                  name="consentement"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 shrink-0 accent-[#d9a21b]"
                />
                <label
                  htmlFor="consentement"
                  className="text-[0.8rem] leading-[1.6] text-anthracite/70"
                >
                  J'accepte que les informations transmises soient utilisées pour
                  traiter ma demande. *
                </label>
              </div>
              <div className="sm:col-span-2">
                <Bouton type="submit" taille="lg">
                  Envoyer le message
                </Bouton>
                <p className="mt-4 text-[0.75rem] text-anthracite/50">
                  * Champs obligatoires
                </p>
              </div>
            </form>
          </div>

          {/* Coordonnées */}
          <aside className="space-y-10">
            <div className="degrade-nuit p-9 text-blanc">
              <h2 className="titre text-[1.8rem]">Coordonnées</h2>
              <ul className="mt-7 space-y-5 text-[0.88rem] text-blanc/70">
                <li className="flex gap-4">
                  <Lieu className="mt-0.5 h-4.5 w-4.5 shrink-0 text-or" />
                  <span>{marque.adresse}</span>
                </li>
                <li className="flex gap-4">
                  <Courriel className="mt-0.5 h-4.5 w-4.5 shrink-0 text-or" />
                  <a href={`mailto:${marque.courriel}`} className="hover:text-or">
                    {marque.courriel}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Telephone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-or" />
                  <a
                    href={`tel:${marque.telephone.replace(/\s/g, "")}`}
                    className="hover:text-or"
                  >
                    {marque.telephone}
                  </a>
                </li>
              </ul>
              <p className="mt-8 border-t border-blanc/15 pt-6 text-[0.8rem] leading-[1.7] text-blanc/50">
                Accueil du lundi au vendredi, de 9h à 18h (heure de Paris).
              </p>
            </div>

            <div>
              <h2 className="surtitre">Nos bureaux</h2>
              <ul className="mt-6 divide-y divide-noir/10 border-y border-noir/10">
                {bureaux.map((b) => (
                  <li key={b.ville} className="py-5">
                    <p className="titre text-[1.35rem] text-noir">
                      {b.ville}
                      <span className="text-or"> · </span>
                      <span className="text-[0.95rem] text-anthracite/60">
                        {b.pays}
                      </span>
                    </p>
                    <p className="mt-1 text-[0.82rem] text-anthracite/65">
                      {b.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
