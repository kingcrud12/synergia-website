import type { ReactNode } from "react";

/** Conteneur de page : gouttière constante et largeur maîtrisée. */
export function Conteneur({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1240px] px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

/** En-tête de section : surtitre doré + titre Cormorant + chapô. */
export function TitreSection({
  surtitre,
  titre,
  chapo,
  invert = false,
  centre = false,
}: {
  surtitre: string;
  titre: ReactNode;
  chapo?: string;
  invert?: boolean;
  centre?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${centre ? "mx-auto text-center" : ""}`}>
      <p className={`surtitre ${centre ? "justify-center" : ""}`}>{surtitre}</p>
      <h2
        className={`titre mt-5 text-[2.1rem] sm:text-[2.7rem] lg:text-[3.1rem] ${
          invert ? "text-blanc" : "text-noir"
        }`}
      >
        {titre}
      </h2>
      {chapo && (
        <p
          className={`mt-5 text-[0.98rem] leading-[1.75] ${
            invert ? "text-blanc/70" : "text-anthracite/75"
          }`}
        >
          {chapo}
        </p>
      )}
    </div>
  );
}

export default function Section({
  id,
  fond = "blanc",
  className = "",
  children,
}: {
  id?: string;
  fond?: "blanc" | "gris" | "noir";
  className?: string;
  children: ReactNode;
}) {
  const fonds = {
    blanc: "bg-blanc",
    gris: "bg-gris",
    noir: "degrade-nuit text-blanc",
  };
  return (
    <section id={id} className={`py-section ${fonds[fond]} ${className}`}>
      <Conteneur>{children}</Conteneur>
    </section>
  );
}
