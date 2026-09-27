import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { accueil, marque } from "@/lib/contenu";
import "./globals.css";

// Typographies web — charte §5
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

/**
 * Référencement — ce qui produit le résultat affiché par les moteurs :
 *   - `title`       : le lien bleu cliquable ;
 *   - `description` : le texte sous le lien ;
 *   - le JSON-LD plus bas : les informations de la fiche « organisation ».
 * Le fichier `public/robots.txt` n'intervient pas là-dessus : il n'autorise
 * ou n'interdit que l'exploration.
 */
export const metadata: Metadata = {
  metadataBase: new URL(marque.url),
  alternates: { canonical: "/" },
  title: {
    default: `${marque.nature} | ${marque.nom}`,
    template: `%s | ${marque.nom}`,
  },
  description: `${marque.slogan}, ${marque.signature.charAt(0).toLowerCase()}${marque.signature.slice(1)}. ${accueil.chapo}`,
  keywords: [
    "association culturelle internationale",
    "Synergia International",
    "échanges culturels France Afrique Europe",
    "spectacles vivants Paris",
    "production artistique et culturelle",
  ],
  authors: [{ name: marque.nom }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: marque.url,
    siteName: marque.nom,
    title: `${marque.nature} | ${marque.nom}`,
    description: `${marque.slogan}, ${marque.signature.charAt(0).toLowerCase()}${marque.signature.slice(1)}. ${accueil.chapo}`,
    images: [{ url: "/logo/synergia-complet.png", width: 1253, height: 868, alt: marque.nom }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${marque.nature} | ${marque.nom}`,
    description: `${marque.slogan}, ${marque.signature.charAt(0).toLowerCase()}${marque.signature.slice(1)}.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

/** Données structurées : aident Google à construire la fiche de l'association. */
const donneesStructurees = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: marque.nom,
  alternateName: marque.nature,
  slogan: `${marque.slogan} — ${marque.signature}`,
  description: accueil.chapo,
  url: marque.url,
  logo: `${marque.url}/logo/synergia-complet.png`,
  email: marque.courriel,
  telephone: marque.telephone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 rue de l'Ingénieur Robert Keller",
    postalCode: "75015",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  areaServed: ["France", "Afrique", "Europe"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(donneesStructurees) }}
        />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-noir focus:px-5 focus:py-3 focus:text-sm focus:text-blanc"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
