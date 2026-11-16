# Norderney Guide

Statische Website (HTML/CSS/JS), gehostet über GitHub Pages.

## Ordner

| Ordner/Datei | Inhalt |
|---|---|
| `*.html` | Seiten (Adressen ohne `.html`, z. B. `/essen-trinken`) |
| `css/style.css` | Design (Sand/Navy/Teal, Inter) |
| `js/main.js` | Menü, Filter, Akkordeon, Formulare/Karte erst nach Klick |
| `daten/betriebe.json` | Alle Betriebe (Unterkünfte, Gastronomie, Geschäfte, Aktivitäten, Fahrrad), siehe `docs/eintraege.md` |
| `js/betriebe.js`, `js/betriebe-felder.js` | Detailseite `/eintrag?id=…` (`betriebe-felder.js` wird erzeugt) |
| `js/karte.js`, `assets/vendor/leaflet/` | Karte mit OpenStreetMap (Leaflet lokal) |
| `anbieter.html` | Nur noch Weiterleitung alter Links `/anbieter?id=…` auf `/eintrag?id=…` |
| `assets/fonts/` | Schriften, lokal eingebunden |
| `partials/` | Kopf, Header und Footer – gelten für alle Seiten |
| `docs/` | Anleitungen, Platzhalter-Liste, Textänderungen |

## Werkzeuge (Python 3, im Projektordner ausführen)

```
python3 tools/layout.py          # Header/Footer/Head aus partials/ in alle Seiten übernehmen
python3 tools/betriebe.py        # Betriebe aus daten/betriebe.json in die Übersichtsseiten schreiben
python3 tools/neue_seite.py name "Titel" "Beschreibung"   # neue Unterseite anlegen
python3 tools/links_pruefen.py   # interne Links prüfen
python3 tools/koordinaten.py     # fehlende Koordinaten für Einträge ermitteln
python3 tools/platzhalter.py     # Liste offener Platzhalter erzeugen (docs/PLATZHALTER.md)
```

Lokal ansehen: `python3 -m http.server 8000`, dann `http://localhost:8000/index.html`.

## Was regelmäßig zu pflegen ist

- **Diese Woche auf Norderney:** in `index.html`, Block „DIESE WOCHE – HIER BEARBEITEN“
- **Einträge von Betrieben:** `daten/betriebe.json`
- **Footer/Menü:** in `partials/`, danach `python3 tools/layout.py`
