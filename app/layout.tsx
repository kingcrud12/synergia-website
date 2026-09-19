import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { marque } from "@/lib/contenu";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://synergia-international.org"),
  title: {
    default: `${marque.nom} — ${marque.signature}`,
    template: `%s | ${marque.nom}`,
  },
  description:
    "Un réseau international au service du développement, des échanges et de la production. Afrique, Europe, France : ensemble pour demain.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: marque.nom,
    title: `${marque.nom} — ${marque.signature}`,
    description:
      "Un réseau international au service du développement, des échanges et de la production.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>
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
