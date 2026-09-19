import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/** Boutons — charte §6 : principal (or), secondaire (contour or), sombre, clair. */
type Variante = "principal" | "secondaire" | "sombre" | "clair";
type Taille = "md" | "lg";

const variantes: Record<Variante, string> = {
  principal:
    "bg-or text-noir hover:bg-or-sombre hover:text-blanc shadow-[0_1px_0_rgba(23,25,29,0.08)]",
  secondaire:
    "border border-or text-or hover:bg-or hover:text-noir",
  sombre: "bg-noir text-blanc hover:bg-anthracite",
  clair: "bg-gris text-noir hover:bg-[#e8e8e4]",
};

const tailles: Record<Taille, string> = {
  md: "px-6 py-3 text-[0.78rem]",
  lg: "px-8 py-4 text-[0.82rem]",
};

const socle =
  "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-sm font-semibold uppercase tracking-[0.13em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-or";

export default function Bouton({
  href,
  variante = "principal",
  taille = "md",
  className = "",
  children,
  ...props
}: {
  href?: string;
  variante?: Variante;
  taille?: Taille;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"button">, "children">) {
  const classes = `${socle} ${variantes[variante]} ${tailles[taille]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
