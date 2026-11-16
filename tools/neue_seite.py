#!/usr/bin/env python3
"""Neue Unterseite im Stil des Norderney Guide anlegen.

Aufruf:  python3 tools/neue_seite.py dateiname "Seitentitel" "Kurzbeschreibung für Google"
Beispiel: python3 tools/neue_seite.py kinder "Mit Kindern auf Norderney" "Tipps für Familien ..."

Legt dateiname.html mit Kopfbereich (SEO, JSON-LD), Header, Footer und einem
leeren Inhaltsbereich an. Danach den Inhalt zwischen <main> und </main> füllen
und einmal  python3 tools/layout.py  ausführen.
"""
import html
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent

HEAD = """<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} — Norderney Guide</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="https://[DOMAIN]/{slug}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Norderney Guide">
<meta property="og:locale" content="de_DE">
<meta property="og:title" content="{title} — Norderney Guide">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="https://[DOMAIN]/{slug}">
<meta property="og:image" content="https://[DOMAIN]/assets/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title} — Norderney Guide">
<meta name="twitter:description" content="{desc}">
<meta name="twitter:image" content="https://[DOMAIN]/assets/og-image.png">
<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Norderney Guide",
  "url": "https://[DOMAIN]/",
  "description": "{desc}",
  "inLanguage": "de-DE",
  "publisher": {{
    "@type": "Person",
    "name": "Luis Saathoff"
  }}
}}
</script>
<!-- @head -->
<!-- /@head -->
<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22><rect width=%2224%22 height=%2224%22 rx=%226%22 fill=%22%230F2A43%22/><path d=%22M4 15c2 1.4 3.5 1.4 5.5 0s3.5-1.4 5.5 0 3.5 1.4 5.5 0%22 stroke=%22%23F5EFE2%22 stroke-width=%221.6%22 fill=%22none%22 stroke-linecap=%22round%22/></svg>">
<link rel="stylesheet" href="css/style.css?v=24">
</head>
<body>

<a href="#main" class="visually-hidden">Zum Inhalt springen</a>

<!-- @header -->
<!-- /@header -->

<main id="main">

  <section class="page-hero page-hero--compact">
    <div class="container">
      <p class="breadcrumb"><a href="/">Start</a> / {title}</p>
      <h1>{title}</h1>
      <p class="lede">{desc}</p>
    </div>
  </section>

  <section class="section" style="padding-top:36px">
    <div class="container" style="max-width:760px">
      <!-- INHALT -->
    </div>
  </section>

  <!-- @unterstuetzen -->
  <!-- /@unterstuetzen -->
</main>

<!-- @footer -->
<!-- /@footer -->

<script src="js/main.js?v=24"></script>
</body>
</html>
"""


def make(slug, title, desc, overwrite=False):
    target = ROOT / f"{slug}.html"
    if target.exists() and not overwrite:
        sys.exit(f"{target.name} existiert schon – nichts geändert.")
    target.write_text(HEAD.format(slug=slug, title=html.escape(title), desc=html.escape(desc)), encoding="utf-8")
    return target


if __name__ == "__main__":
    if len(sys.argv) != 4:
        sys.exit(__doc__)
    print("angelegt:", make(*sys.argv[1:]).name)
