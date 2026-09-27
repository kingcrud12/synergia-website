import type { MetadataRoute } from "next";
import { marque, navigation } from "@/lib/contenu";

/** Plan du site, déduit de la navigation pour rester synchronisé. */
export default function sitemap(): MetadataRoute.Sitemap {
  const maj = new Date();
  const pages = [
    ...navigation.map((n) => n.href),
    "/adherer",
    "/faire-un-don",
  ];

  return pages.map((href) => ({
    url: `${marque.url}${href === "/" ? "" : href}`,
    lastModified: maj,
    changeFrequency: href === "/" ? "weekly" : "monthly",
    priority: href === "/" ? 1 : href === "/calendrier" ? 0.9 : 0.7,
  }));
}
