"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Bouton from "./Bouton";
import { Conteneur } from "./Section";
import { Fermer, Menu, Recherche } from "./Icones";
import { navigation } from "@/lib/contenu";

/** En-tête — charte §9 : logo à gauche, menu, recherche, bouton « Nous contacter ». */
export default function Header() {
  const chemin = usePathname();
  const [ouvert, setOuvert] = useState(false);
  const [defile, setDefile] = useState(false);

  useEffect(() => {
    const surDefilement = () => setDefile(window.scrollY > 12);
    surDefilement();
    window.addEventListener("scroll", surDefilement, { passive: true });
    return () => window.removeEventListener("scroll", surDefilement);
  }, []);

  // Le menu mobile se referme à chaque changement de page.
  useEffect(() => setOuvert(false), [chemin]);

  const actif = (href: string) =>
    href === "/" ? chemin === "/" : chemin.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 bg-blanc/95 backdrop-blur transition-shadow duration-300 ${
        defile ? "shadow-[0_1px_0_rgba(23,25,29,0.1),0_8px_24px_-18px_rgba(23,25,29,0.5)]" : ""
      }`}
    >
      <Conteneur className="flex h-[104px] items-center justify-between gap-5">
        <Link href="/" aria-label="Synergia International — accueil">
          {/* alt vide : le libellé accessible est porté par le lien */}
          <Logo variante="complete" alt="" priority className="h-[74px] w-auto" />
        </Link>

        <nav aria-label="Navigation principale" className="hidden xl:block">
          <ul className="flex items-center gap-5 2xl:gap-7">
            {navigation.map((lien) => (
              <li key={lien.href}>
                <Link
                  href={lien.href}
                  aria-current={actif(lien.href) ? "page" : undefined}
                  className={`relative whitespace-nowrap py-2 text-[0.8rem] font-medium tracking-[0.02em] transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-or after:transition-all after:duration-300 ${
                    actif(lien.href)
                      ? "text-noir after:w-full"
                      : "text-anthracite/80 after:w-0 hover:text-noir hover:after:w-full"
                  }`}
                >
                  {lien.libelle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Rechercher"
            className="hidden text-anthracite transition-colors hover:text-or lg:block"
          >
            <Recherche className="h-[1.15rem] w-[1.15rem]" />
          </button>
          <Bouton href="/contact" className="hidden sm:inline-flex">
            Nous contacter
          </Bouton>
          <button
            type="button"
            onClick={() => setOuvert((o) => !o)}
            aria-expanded={ouvert}
            aria-controls="menu-mobile"
            aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
            className="text-noir xl:hidden"
          >
            {ouvert ? <Fermer /> : <Menu />}
          </button>
        </div>
      </Conteneur>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        hidden={!ouvert}
        className="border-t border-noir/10 bg-blanc xl:hidden"
      >
        <Conteneur className="py-4">
          <ul className="flex flex-col">
            {navigation.map((lien) => (
              <li key={lien.href} className="border-b border-noir/5 last:border-0">
                <Link
                  href={lien.href}
                  aria-current={actif(lien.href) ? "page" : undefined}
                  className={`block py-3.5 text-[0.9rem] font-medium ${
                    actif(lien.href) ? "text-or" : "text-anthracite"
                  }`}
                >
                  {lien.libelle}
                </Link>
              </li>
            ))}
          </ul>
          <Bouton href="/contact" className="mt-5 w-full sm:hidden">
            Nous contacter
          </Bouton>
        </Conteneur>
      </div>
    </header>
  );
}
