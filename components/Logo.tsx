import Image from "next/image";

/**
 * Logo SYNERGIA INTERNATIONAL — charte §1 et §2.
 *
 * Trois déclinaisons prévues par la charte :
 *   - "complete"     : logo + slogan   (accueil, en-tête, documents officiels)
 *   - "sans-slogan"  : logo seul       (usage secondaire)
 *   - "sigle"        : symbole seul    (favicon, réseaux, icônes)
 *
 * Chaque déclinaison existe en deux encrages : l'original pour les fonds
 * clairs, et une version éclaircie (`invert`) pour les fonds sombres, où
 * l'encre anthracite du mot-symbole deviendrait illisible. L'or est conservé
 * à l'identique dans les deux cas.
 *
 * Les PNG détourés sont générés depuis `syn_logo.jpg` (voir README).
 */

type Variante = "complete" | "sans-slogan" | "sigle";

const DECLINAISONS: Record<
  Variante,
  { fichier: string; largeur: number; hauteur: number }
> = {
  complete: { fichier: "synergia-complet", largeur: 1253, hauteur: 868 },
  "sans-slogan": { fichier: "synergia-sans-slogan", largeur: 1253, hauteur: 788 },
  sigle: { fichier: "synergia-sigle", largeur: 581, hauteur: 531 },
};

export default function Logo({
  variante = "complete",
  invert = false,
  className = "h-16 w-auto",
  alt = "Synergia International — Développement, Échange, Production",
  priority = false,
}: {
  variante?: Variante;
  invert?: boolean;
  className?: string;
  /** Chaîne vide si un libellé accessible est déjà porté par le lien parent. */
  alt?: string;
  priority?: boolean;
}) {
  const { fichier, largeur, hauteur } = DECLINAISONS[variante];

  return (
    <Image
      src={`/logo/${fichier}${invert ? "-blanc" : ""}.png`}
      alt={alt}
      width={largeur}
      height={hauteur}
      priority={priority}
      className={className}
    />
  );
}
