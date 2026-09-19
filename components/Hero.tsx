import type { ReactNode } from "react";
import { Conteneur } from "./Section";

/** Bandeau de page intérieure : fond nuit, surtitre doré, titre Cormorant. */
export default function Hero({
  surtitre,
  titre,
  chapo,
  enfants,
}: {
  surtitre: string;
  titre: ReactNode;
  chapo?: string;
  enfants?: ReactNode;
}) {
  return (
    <section className="degrade-nuit relative overflow-hidden">
      <div className="trame-reseau absolute inset-0 opacity-40" aria-hidden="true" />
      <Conteneur className="relative py-24 lg:py-32">
        <div className="max-w-3xl anim-monte">
          <p className="surtitre">{surtitre}</p>
          <h1 className="titre mt-6 text-[2.6rem] text-blanc sm:text-[3.4rem] lg:text-[4rem]">
            {titre}
          </h1>
          {chapo && (
            <p className="mt-7 max-w-2xl text-[1.02rem] leading-[1.8] text-blanc/70">
              {chapo}
            </p>
          )}
          {enfants && <div className="mt-10">{enfants}</div>}
        </div>
      </Conteneur>
    </section>
  );
}
