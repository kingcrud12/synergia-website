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
| §9 Page d'accueil | `app/page.tsx` — hero, bloc France/Afrique/Europe, deux boutons du document client |
| §9 Fond du hero | photographie `public/hero-forum.jpg` + voile sombre dégradé, dans `app/page.tsx` |
| §10 Ambiance | Bandeau doré « Des projets, des partenariats, un avenir partagé » en pied de page |

Les couleurs sont des tokens Tailwind : `bg-or`, `text-noir`, `border-anthracite`…

## Pages

`/` · `/qui-sommes-nous` · `/programmes` · `/calendrier` · `/adherer`
· `/faire-un-don` · `/actualites` · `/partenaires` · `/contact` (+ page 404).
Toutes les routes sont prérendues en statique.

« Adhérer » et « Faire un don » sont les deux appels à l'action de l'en-tête ;
la navigation principale garde sept entrées.

## Référencement

Ce qui produit le résultat affiché par les moteurs de recherche :

| Élément | Fichier | Rendu dans Google |
|---|---|---|
| `title` | `app/layout.tsx` | le lien bleu cliquable |
| `description` | `app/layout.tsx` | le texte sous le lien |
| JSON-LD `NGO` | `app/layout.tsx` | la fiche « organisation » |
| `sitemap.xml` | `app/sitemap.ts` | liste des pages à explorer |
| `robots.txt` | `public/robots.txt` | autorisation d'exploration **uniquement** |

`robots.txt` ne détermine **pas** le titre ni le descriptif : il n'autorise ou
n'interdit que l'exploration. Les lignes d'identité y figurent en commentaire,
sans effet sur les résultats.

Résultat visé sur `https://synergia-international.com` :

```
Association culturelle internationale | Synergia International
https://synergia-international.com
Créer le lien, unir les talents, la force d'un réseau intercontinental.
Un réseau international au service du développement, des échanges et de
la production artistique et culturelle.
```

Google reste libre de réécrire titre et descriptif s'il juge une autre
formulation plus pertinente pour la requête.

**Domaine canonique** : `https://synergia-international.com` (sans www). La
forme `www.` doit rediriger vers celle-ci, sinon les deux se concurrencent.
À configurer dans Vercel → Settings → Domains.

## Sources du contenu

Le contenu éditorial provient de deux documents fournis par le client, et il
est repris **mot pour mot** dans `lib/contenu.ts` :

- `SYNERGIA_Textes_page_accueil_et_boutons.pdf` — accroche d'accueil, libellés
  des deux boutons, texte « Découvrir l'association », les cinq axes de
  programmation ;
- `Calendrier_previsionnel_activite_2026_2027_SYNERGIA.pdf` — saison culturelle
  (9 spectacles), cadre général, coordonnées du siège.

Synergia International est une **association culturelle internationale**
(France • Afrique • Europe), et non un organisme de développement : tout texte
évoquant filières, bailleurs ou ingénierie de financement serait hors sujet.

## Points à reprendre avant mise en ligne

1. **Partenaires** — la page n'affiche aucun nom : les salles du calendrier
   (Olympia, quai Branly, La Cigale…) sont des lieux *pressentis*, « soumis aux
   disponibilités, contrats de location et autorisations administratives ». Les
   présenter comme partenaires serait faux. Remplacer par la liste réelle une
   fois les accords signés et l'usage des logos autorisé.
2. **Téléphones** — un seul numéro figure dans les documents (06 18 83 62 81).
   Le client en a annoncé trois (siège, deux personnes) : les deux autres
   manquent.
3. **Adhésion** — les montants et catégories ne sont pas communiqués. La page
   `/adherer` renvoie vers l'association pour les obtenir.
4. **Don en ligne** — aucun prestataire de paiement n'est branché. La page
   `/faire-un-don` oriente vers un contact direct.
5. **Actualités** — les trois brèves de `lib/contenu.ts` sont rédigées à partir
   du calendrier, mais ce ne sont pas de vrais communiqués. À remplacer.
6. **Formulaires** — contact, adhésion et lettre d'information sont des
   formulaires HTML sans back-end. Brancher une Server Action ou une API.
7. **Baseline du logo** — le logo porte « DÉVELOPPEMENT-ECHANGE-PRODUCTION »,
   tandis que le pied de page des documents récents indique « Conception -
   production - management ». Incohérence à trancher côté marque.
8. **Contraste de l'or** — l'or principal `#D9A21B` sur fond clair plafonne à
   2,3:1, sous le seuil WCAG AA. Sur fond clair, le site utilise l'or sombre
   `#B8850F` (3,3:1) ; la classe `.surtitre` utilise encore l'or principal,
   conformément à la charte. Arbitrage de marque à trancher.

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
