# Einträge von Betrieben pflegen

Alle Einträge stehen in `daten/betriebe.json` in der Liste `eintraege`.
Sie erscheinen automatisch auf der passenden Kategorieseite (Bereich „Neu im Guide“),
auf der Karte und unter `/eintrag?id=<id>`.

## Neuen Eintrag anlegen

1. Fotos nach `assets/images/betriebe/<id>/` legen (z. B. `1.jpg` … `6.jpg`, Breite ca. 1600 px).
2. In `daten/betriebe.json` den Block `_vorlage` kopieren und unten in `eintraege` einfügen.
   Zwischen zwei Einträgen steht ein Komma, nach dem letzten keins.
3. Felder ausfüllen, `beispiel` auf `false` lassen.
4. Prüfen, ob die Datei gültig ist, z. B. mit `python3 -m json.tool daten/betriebe.json`.
5. Die drei Beispiel-Einträge (`"beispiel": true`) löschen, sobald echte Einträge da sind.

## Felder

| Feld | Bedeutung |
|---|---|
| `id` | Eindeutiger Kurzname, nur Kleinbuchstaben, Zahlen und Bindestriche. Steht in der Adresse. |
| `name` | Name des Betriebs |
| `kategorie` | Eine von: `unterkuenfte`, `restaurants-cafes`, `bars`, `geschaefte-mode`, `freizeit-aktivitaeten`, `fahrradverleih-service` |
| `adresse` | `strasse`, `plz`, `ort` |
| `koordinaten` | `[Breitengrad, Längengrad]` für die Karte. Leer lassen (`[]`) und `python3 tools/koordinaten.py` ausführen, dann wird sie aus der Adresse ermittelt. Ohne Koordinaten kein Marker. |
| `kurzbeschreibung` | 1–2 Sätze |
| `oeffnungszeiten` | `sommer` und `winter` als Text |
| `preisniveau` | `€`, `€€` oder `€€€` |
| `telefon`, `webseite`, `instagram` | Links immer mit `https://` |
| `buchungslink` | Buchungs- oder Reservierungsseite des Betriebs |
| `fotos` | Bis zu 6 Bilder mit `src` (Pfad) und `alt` (kurze Beschreibung) |
| `luis_tipp` | Kurzer persönlicher Satz. Leer lassen = kein Abzeichen. |
| `beispiel` | `true` nur für Beispiel-Einträge |
| `zuletzt_aktualisiert` | Datum im Format `JJJJ-MM-TT` |

## Button-Text

Der Text ist fest an die Kategorie gebunden (in `js/betriebe.js`):

| Kategorie | Button | verlinkt auf |
|---|---|---|
| Unterkünfte | Jetzt buchen | Buchungslink, sonst Webseite |
| Restaurants und Cafés | Tisch reservieren | Buchungslink, sonst Webseite |
| Bars | Zur Webseite | Webseite |
| Geschäfte und Mode | Zum Shop | Webseite |
| Freizeit und Aktivitäten | Jetzt buchen | Buchungslink, sonst Webseite |
| Fahrradverleih und Service | Zur Webseite | Webseite |

Ohne Link wird kein Button angezeigt.

## Lokal ansehen

Die Einträge werden per `fetch` geladen, deshalb nicht per Doppelklick öffnen, sondern im Projektordner:

```
python3 -m http.server 8000
```

und `http://localhost:8000/essen-trinken.html` öffnen. (Adressen ohne `.html` funktionieren erst auf GitHub Pages.)

## Abzeichen „Luis’ Tipp“ auf festen Karten

Für Einträge aus `betriebe.json` reicht das Feld `luis_tipp`. Auf den bestehenden Karten
(z. B. in `essen-trinken.html`) diesen Block direkt unter `<p class="desc">…</p>` einfügen:

```html
<div class="luis-tipp"><span class="luis-tipp-badge">Luis’ Tipp</span><p>Dein Satz hier.</p></div>
```
