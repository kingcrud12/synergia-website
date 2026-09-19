# Synergia International — site web

Site institutionnel en **Next.js 15** (App Router, TypeScript, Tailwind CSS v4),
construit d'après `charte_graphique.jpg`.

## Démarrer

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de production
```

> Ne pas lancer `next dev` juste après un `next build` sans supprimer `.next`
> au préalable : les deux manifestes se mélangent et Next renvoie une erreur
> `ENOENT … pages/_document.js`.

## Correspondance avec la charte

| Charte | Implémentation |
|---|---|
| §1–2 Logo et déclinaisons | `components/Logo.tsx` + PNG détourés dans `public/logo/` — variantes `complete`, `sans-slogan`, `sigle`, chacune en encrage clair et foncé |
| §4 Palette | `app/globals.css`, bloc `@theme` : `or`, `noir`, `anthracite`, `gris`, `blanc` |
| §5 Typographies | Cormorant Garamond (titres, classe `.titre`) + Montserrat (textes), chargées via `next/font` |
| §6 Boutons | `components/Bouton.tsx` — `principal`, `secondaire`, `sombre`, `clair` |
| §7 Iconographie | `components/Icones.tsx` — les 8 icônes de la charte + icônes UI |
| §8 Style photographique | `components/Visuel.tsx` — 4 ambiances |
| §9 Page d'accueil | `app/page.tsx` — reprend la maquette (hero, bloc Afrique/Europe/France, CTA) |
| §9 Fond du hero | photographie `public/hero-forum.jpg` + voile sombre dégradé, dans `app/page.tsx` |
| §10 Ambiance | Bandeau doré « Des projets, des partenariats, un avenir partagé » en pied de page |

Les couleurs sont des tokens Tailwind : `bg-or`, `text-noir`, `border-anthracite`…

## Pages

`/` · `/qui-sommes-nous` · `/programmes` · `/forum-meeting` · `/actualites`
· `/partenaires` · `/contact` (+ page 404). Les 8 routes sont prérendues en statique.

## Points à reprendre avant mise en ligne

1. **Contraste de l'or** — l'or principal `#D9A21B` sur fond clair plafonne à
   2,3:1, sous le seuil WCAG AA (4,5:1 pour le petit texte). Il est utilisé tel
   quel par la classe `.surtitre` sur tout le site, conformément à la charte.
   Sur le hero, les accents utilisent l'or sombre `#B8850F` (3,3:1), suffisant
   pour le grand titre mais pas pour le petit texte. Arbitrage de marque à
   trancher : conserver la charte à l'identique, ou assombrir l'or des petits
   libellés.
2. **Autres photographies** — `components/Visuel.tsx` rend des aplats dégradés
   conformes à la charte. Passer la prop `src` pour basculer automatiquement sur
   `next/image` : `<Visuel src="/photos/forum.jpg" alt="…" ambiance="evenement" />`
3. **Formulaires** — contact et lettre d'information sont des formulaires HTML
   sans back-end. Brancher une Server Action ou une API d'envoi.
4. **Contenu** — textes, chiffres, événements et actualités sont centralisés
   dans `lib/contenu.ts` et sont des exemples à remplacer par le contenu réel.
5. **Logo** — les PNG sont générés depuis `syn_logo.jpg`, un JPG aplati. Si le
   studio fournit un jour le SVG vectoriel d'origine, le substituer : il sera
   plus net sur les écrans à forte densité et plus léger.

## Hero de la page d'accueil

Le fond est la photographie `public/hero-forum.jpg` (source : `hero_2.jpg`) —
un forum en plein air, conforme au registre « événements & production » de la
charte §8.

L'image est dense sur toute sa surface (écart-type de luminance ≈ 76, aucune
zone calme) : aucune région ne peut porter du texte foncé. Le hero reprend donc
le traitement de la maquette §9 — **voile sombre, texte blanc, accent doré** :

- un dégradé latéral au-delà de `lg`, vertical sur mobile ;
- une assise sombre en pied de section, pour la transition vers le bandeau clair.

Les trois dégradés sont dans `app/page.tsx`.

**Avant de changer de photographie**, mesurer la luminance de la zone de texte :

```bash
python3 - <<'EOF'
from PIL import Image; import numpy as np
a = np.asarray(Image.open("public/hero-forum.jpg").convert("RGB")).astype(float)
lum = 0.299*a[...,0] + 0.587*a[...,1] + 0.114*a[...,2]
g = lum[:, :lum.shape[1]//2]
print(f"moitié gauche — moyenne {g.mean():.0f}, écart-type {g.std():.0f}")
EOF
```

Une moyenne basse et un faible écart-type autorisent le texte blanc sans voile
appuyé ; une moyenne haute impose l'inverse (encre foncée sur voile blanc) ;
un écart-type élevé, comme ici, impose un voile marqué quel que soit le sens.

## Logo

Les déclinaisons servies par `components/Logo.tsx` sont générées depuis
`syn_logo.jpg` (JPG sur fond blanc) par :

```bash
python3 scripts/generer-logos.py   # nécessite Pillow et NumPy
```

Le script détoure le fond, découpe les trois déclinaisons de la charte §2 en
repérant les bandes d'encre, et produit pour chacune une version « blanc »
destinée aux fonds sombres (pied de page) : seule l'encre anthracite y est
éclaircie, l'or reste identique. Il écrit aussi `app/icon.png`, le favicon,
depuis la déclinaison « sigle seul ».

Ne pas modifier `public/logo/*.png` à la main : ils sont regénérés par le script.

## Structure

```
app/          routes (App Router) + globals.css + icon.png (favicon)
scripts/      generer-logos.py
components/   Logo, Header, Footer, Bouton, Section, Hero, Visuel,
              Icones, CartePilier
lib/          contenu.ts — tout le contenu éditorial
```
