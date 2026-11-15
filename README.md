# Norderney Guide

Statische Website (HTML/CSS/JS), gehostet über GitHub Pages.

## Ordner

| Ordner/Datei | Inhalt |
|---|---|
| `*.html` | Seiten (Adressen ohne `.html`, z. B. `/essen-trinken`) |
| `css/style.css` | Design (Sand/Navy/Teal, Fraunces + Work Sans) |
| `js/main.js` | Menü, Filter, Akkordeon, Formulare/Karte erst nach Klick |
| `js/betriebe.js`, `daten/betriebe.json` | Einträge von Betrieben, siehe `docs/eintraege.md` |
| `js/karte.js`, `assets/vendor/leaflet/` | Karte mit OpenStreetMap (Leaflet lokal) |
| `assets/data.js`, `js/anbieter.js` | bestehende Unterkunftsdaten und Detailseite `/anbieter?id=…` |
| `assets/fonts/` | Schriften, lokal eingebunden |
| `partials/` | Kopf, Header und Footer – gelten für alle Seiten |
| `docs/` | Anleitungen, Platzhalter-Liste, Textänderungen |

## Werkzeuge (Python 3, im Projektordner ausführen)

```
python3 tools/layout.py          # Header/Footer/Head aus partials/ in alle Seiten übernehmen
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
