import Bouton from "@/components/Bouton";
import { Conteneur } from "@/components/Section";

export default function Introuvable() {
  return (
    <section className="degrade-nuit">
      <Conteneur className="py-32 text-center lg:py-44">
        <p className="surtitre justify-center">Erreur 404</p>
        <h1 className="titre mt-6 text-[2.6rem] text-blanc lg:text-[3.6rem]">
          Cette page est introuvable
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-[0.98rem] leading-[1.8] text-blanc/65">
          Le lien que vous avez suivi ne correspond à aucune page du site.
        </p>
        <Bouton href="/" taille="lg" className="mt-10">
          Retour à l'accueil
        </Bouton>
      </Conteneur>
    </section>
  );
}
