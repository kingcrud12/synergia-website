import Link from "next/link";
import Logo from "./Logo";
import { Conteneur } from "./Section";
import { Courriel, Lieu, Telephone } from "./Icones";
import { marque, navigation, programmes } from "@/lib/contenu";

export default function Footer() {
  const annee = new Date().getFullYear();

  return (
    <footer className="bg-noir text-blanc">
      {/* Bandeau doré — charte §10 : « Des projets, des partenariats, un avenir partagé » */}
      <div className="bg-or">
        <Conteneur className="flex flex-col items-start gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <p className="titre text-[1.75rem] leading-tight text-noir sm:text-[2.1rem]">
            Des projets, des partenariats,
            <br />
            <span className="italic">un avenir partagé.</span>
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-noir px-7 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-noir transition-colors hover:bg-noir hover:text-or"
          >
            Construire avec nous
          </Link>
        </Conteneur>
      </div>

      <Conteneur className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo variante="complete" invert className="h-[104px] w-auto" />
          <p className="mt-6 max-w-xs text-[0.85rem] leading-[1.8] text-blanc/60">
            {marque.signature}. Un réseau international au service du
            développement, des échanges et de la production.
          </p>
        </div>

        <nav aria-label="Navigation de pied de page">
          <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-or">
            Navigation
          </h2>
          <ul className="mt-6 space-y-3">
            {navigation.map((lien) => (
              <li key={lien.href}>
                <Link
                  href={lien.href}
                  className="text-[0.85rem] text-blanc/65 transition-colors hover:text-or"
                >
                  {lien.libelle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-or">
            Programmes
          </h2>
          <ul className="mt-6 space-y-3">
            {programmes.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/programmes#${p.slug}`}
                  className="text-[0.85rem] text-blanc/65 transition-colors hover:text-or"
                >
                  {p.titre}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-or">
            Contact
          </h2>
          <ul className="mt-6 space-y-4 text-[0.85rem] text-blanc/65">
            <li className="flex gap-3">
              <Lieu className="mt-0.5 h-4 w-4 shrink-0 text-or" />
              <span>{marque.adresse}</span>
            </li>
            <li className="flex gap-3">
              <Courriel className="mt-0.5 h-4 w-4 shrink-0 text-or" />
              <a href={`mailto:${marque.courriel}`} className="hover:text-or">
                {marque.courriel}
              </a>
            </li>
            <li className="flex gap-3">
              <Telephone className="mt-0.5 h-4 w-4 shrink-0 text-or" />
              <a href={`tel:${marque.telephone.replace(/\s/g, "")}`} className="hover:text-or">
                {marque.telephone}
              </a>
            </li>
          </ul>
        </div>
      </Conteneur>

      <div className="border-t border-blanc/10">
        <Conteneur className="flex flex-col gap-3 py-6 text-[0.75rem] text-blanc/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {annee} {marque.nom} — Tous droits réservés
          </p>
          <p className="uppercase tracking-[0.18em]">{marque.slogan}</p>
        </Conteneur>
      </div>
    </footer>
  );
}
