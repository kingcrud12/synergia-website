/**
 * Visuel — emplacement photographique (charte §8 : business & partenariats,
 * échange & collaboration, événements & production, dimension internationale).
 *
 * Tant que la banque d'images définitive n'est pas fournie, le composant rend
 * un aplat dégradé conforme à la charte. Dès que les photos sont disponibles,
 * passer `src` : le composant bascule automatiquement sur <Image />.
 */
import Image from "next/image";

type Ambiance = "business" | "echange" | "evenement" | "monde";

const ambiances: Record<Ambiance, string> = {
  business:
    "bg-[linear-gradient(155deg,#1b1f27_0%,#2f333b_48%,#8c7433_100%)]",
  echange:
    "bg-[linear-gradient(150deg,#303238_0%,#55575e_45%,#d9a21b_140%)]",
  evenement:
    "bg-[linear-gradient(165deg,#0f1114_0%,#2a2d34_55%,#b8850f_115%)]",
  monde:
    "bg-[linear-gradient(140deg,#11131a_0%,#17191d_45%,#9a7318_120%)]",
};

export default function Visuel({
  ambiance = "business",
  legende,
  src,
  alt,
  className = "",
  priorite = false,
}: {
  ambiance?: Ambiance;
  legende?: string;
  src?: string;
  alt?: string;
  className?: string;
  priorite?: boolean;
}) {
  return (
    <figure className={`relative overflow-hidden bg-noir ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt ?? legende ?? ""}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority={priorite}
        />
      ) : (
        <div className={`absolute inset-0 ${ambiances[ambiance]}`} aria-hidden="true">
          <div className="trame-reseau absolute inset-0 opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_70%_20%,rgba(217,162,27,0.22),transparent_65%)]" />
        </div>
      )}

      {legende && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-noir/85 to-transparent px-6 pb-5 pt-14">
          <span className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-blanc/85">
            {legende}
          </span>
        </figcaption>
      )}
    </figure>
  );
}
