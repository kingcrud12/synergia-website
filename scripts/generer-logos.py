#!/usr/bin/env python3
"""
Génère les déclinaisons du logo (charte §2) depuis `syn_logo.jpg`.

Le fichier source est un JPG sur fond blanc. Ce script :
  1. le détoure (alpha calculé par distance au blanc, avec une rampe
     anti-crénelage sur les bords) ;
  2. découpe les trois déclinaisons en repérant automatiquement les bandes
     horizontales d'encre (sigle / SYNERGIA / INTERNATIONAL / slogan) ;
  3. produit pour chacune une version « blanc » destinée aux fonds sombres,
     où seule l'encre anthracite est éclaircie — l'or reste identique.

    python3 scripts/generer-logos.py
"""

from pathlib import Path

import numpy as np
from PIL import Image

RACINE = Path(__file__).resolve().parent.parent
SOURCE = RACINE / "syn_logo.jpg"
SORTIE = RACINE / "public" / "logo"

MARGE = 10          # marge transparente autour du recadrage
SEUIL_ENCRE = 40    # alpha minimal pour considérer un pixel comme encré


def detourer(rgb: np.ndarray) -> np.ndarray:
    """Alpha opaque sous 200, transparent au-dessus de 246, rampe entre les deux."""
    mini = rgb.min(axis=2)
    return np.clip((246 - mini) * (255.0 / 46.0), 0, 255).astype(np.uint8)


def bandes(alpha: np.ndarray) -> list[tuple[int, int]]:
    """Délimite les blocs horizontaux d'encre séparés par du vide."""
    lignes = (alpha > SEUIL_ENCRE).sum(axis=1) > 3
    trouvees, debut = [], None
    for y, plein in enumerate(lignes):
        if plein and debut is None:
            debut = y
        elif not plein and debut is not None:
            if y - debut > 8:
                trouvees.append((debut, y))
            debut = None
    if debut is not None:
        trouvees.append((debut, len(lignes)))
    return trouvees


def main() -> None:
    im = Image.open(SOURCE).convert("RGB")
    rgb = np.asarray(im).astype(np.int16)
    alpha = detourer(rgb)

    blocs = bandes(alpha)
    if len(blocs) != 4:
        raise SystemExit(
            f"4 bandes attendues (sigle, SYNERGIA, INTERNATIONAL, slogan), "
            f"{len(blocs)} trouvées : {blocs}"
        )
    sigle, _synergia, international, slogan = blocs
    decoupes = {
        "synergia-complet": (sigle[0], slogan[1]),
        "synergia-sans-slogan": (sigle[0], international[1]),
        "synergia-sigle": (sigle[0], sigle[1]),
    }

    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    luminance = 0.299 * r + 0.587 * g + 0.114 * b
    # L'or de la charte : dominante rouge marquée et suffisamment lumineux.
    est_or = (r > b + 35) & (r > 110)

    SORTIE.mkdir(parents=True, exist_ok=True)

    for inverse in (False, True):
        pixels = rgb.copy()
        if inverse:
            clair = np.clip(255 - 0.42 * luminance, 165, 255).astype(np.int16)
            for c in range(3):
                canal = pixels[..., c]
                canal[~est_or] = clair[~est_or]
        planche = Image.fromarray(
            np.dstack([pixels.astype(np.uint8), alpha]), "RGBA"
        )

        for nom, (y0, y1) in decoupes.items():
            img = planche.crop((0, y0, im.width, y1))
            colonnes = np.where((np.asarray(img)[..., 3] > SEUIL_ENCRE).any(axis=0))[0]
            img = img.crop((
                max(0, colonnes.min() - MARGE), 0,
                min(img.width, colonnes.max() + MARGE + 1), img.height,
            ))
            chemin = SORTIE / f"{nom}{'-blanc' if inverse else ''}.png"
            img.save(chemin, optimize=True)
            print(f"{chemin.relative_to(RACINE)}  {img.size}")

    # Favicon (charte §2 : « sigle seul »), centré sur un carré transparent.
    sigle_img = Image.open(SORTIE / "synergia-sigle.png")
    cote = max(sigle_img.size)
    carre = Image.new("RGBA", (cote, cote), (0, 0, 0, 0))
    carre.paste(
        sigle_img,
        ((cote - sigle_img.width) // 2, (cote - sigle_img.height) // 2),
        sigle_img,
    )
    carre.resize((512, 512), Image.LANCZOS).save(RACINE / "app" / "icon.png")
    print("app/icon.png  (512, 512)")


if __name__ == "__main__":
    main()
