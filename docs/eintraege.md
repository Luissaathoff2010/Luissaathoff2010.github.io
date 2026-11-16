# Einträge von Betrieben pflegen

Alle Betriebe stehen an **einer** Stelle: `daten/betriebe.json`, Liste `eintraege`.
Daraus entstehen:

- die Karten samt Filtern auf den Übersichtsseiten (Unterkünfte, Essen & Trinken,
  Geschäfte, Aktivitäten, Fahrrad & Mobilität),
- die Detailseite `/eintrag?id=<id>`,
- die Marker auf den Karten (`/karte` und auf den Übersichtsseiten),
- die Einträge in `sitemap.xml`.

Alte Adressen `/anbieter?id=…` leiten automatisch auf `/eintrag?id=…` weiter.

## Nach jeder Änderung

```
python3 tools/betriebe.py
```

Das Skript prüft die Einträge, meldet Fehler (z. B. falsche Kategorie, unbekannter
Filterwert) und schreibt die Karten fest ins HTML der Übersichtsseiten. In den Seiten
steht der Bereich zwischen `<!-- @betriebe -->` und `<!-- /@betriebe -->` – dort nichts
von Hand ändern, es wird beim nächsten Lauf überschrieben.

## Neuen Eintrag anlegen

1. Fotos nach `assets/images/betriebe/<id>/` legen (z. B. `1.jpg` … `6.jpg`, Breite ca. 1600 px).
2. In `daten/betriebe.json` den Block `_vorlage` kopieren und in `eintraege` einfügen.
   Zwischen zwei Einträgen steht ein Komma, nach dem letzten keins.
3. Felder ausfüllen. Felder, die nicht zur Kategorie gehören, einfach löschen
   (z. B. `kueche` bei einer Unterkunft).
4. `python3 tools/betriebe.py` ausführen.
5. Für die Karte: `python3 tools/koordinaten.py` (ermittelt fehlende Koordinaten aus der Adresse),
   danach noch einmal `python3 tools/betriebe.py`.
6. Die Beispiel-Einträge (`"beispiel": true`) löschen, sobald es echte Einträge gibt.

## Gemeinsame Felder (alle Kategorien)

| Feld | Bedeutung |
|---|---|
| `id` | Eindeutiger Kurzname, nur Kleinbuchstaben, Zahlen und Bindestriche. Steht in der Adresse. Nicht mehr ändern, wenn der Eintrag online ist. |
| `name` | Name des Betriebs |
| `kategorie` | Eine von: `unterkuenfte`, `restaurants-cafes`, `bars`, `geschaefte-mode`, `freizeit-aktivitaeten`, `fahrradverleih-service` |
| `quelle` | `betrieb` = Angaben kommen vom Betrieb (Formular „Betrieb eintragen“). `redaktion` = von uns zusammengestellt. Steuert den Hinweis am Eintrag (siehe unten). |
| `untertitel` | Kurzes Etikett auf der Karte, z. B. „Hotel · Spa-Resort“. Leer = Name der Kategorie. |
| `adresse` | `strasse`, `plz`, `ort`. Die Straße wird auch für „Route anzeigen“ und die Karte genutzt. |
| `kurzinfo` | Kurze Zusatzangabe neben der Adresse, z. B. „im Hotel Friese“ oder „rund 200 m zum Strand“ |
| `koordinaten` | `[Breitengrad, Längengrad]` für die Karte. Leer lassen (`[]`) und `tools/koordinaten.py` ausführen. Ohne Koordinaten kein Marker. |
| `kurzbeschreibung` | Text auf der Karte und oben auf der Detailseite |
| `beschreibung` | Optional: längerer Text, nur auf der Detailseite |
| `oeffnungszeiten` | `allgemein` (ein Text für das ganze Jahr) oder `sommer` und `winter` |
| `preisniveau` | `€`, `€€` oder `€€€` (leer lassen, wenn unpassend, z. B. bei Apotheken) |
| `telefon` | z. B. `04932 12345` |
| `buchungslink` | Buchungs- oder Reservierungsseite des Betriebs (mit `https://`) |
| `webseite` | Eigene Webseite (mit `https://`) |
| `instagram` | Instagram-Profil (mit `https://`) |
| `fotos` | Bis zu 6 Bilder mit `src` (Pfad) und `alt` (kurze Beschreibung). Das erste Bild erscheint auf der Karte. |
| `luis_tipp` | Kurzer persönlicher Satz. Leer lassen = kein Abzeichen. |
| `beispiel` | `true` nur für Beispiel-Einträge |
| `zuletzt_aktualisiert` | Datum im Format `JJJJ-MM-TT` |
| `_notiz` | Optional, interne Notiz (z. B. „Webseite prüfen“). Wird nirgends angezeigt. |

## Zusätzliche Felder je Kategorie

Diese Felder sind die Filter auf den Übersichtsseiten. Nur die angegebenen Werte sind erlaubt
(Schreibweise genau so, mehrere Werte als Liste `["fisch", "mediterran"]`).

**Unterkünfte**

| Feld | Werte |
|---|---|
| `art` | `hotel` (Hotel), `ferienwohnung` (Ferienwohnung), `pension` (Pension), `vermittlung` (Vermittlung) |
| `lage` | `weststrand`, `oststrand`, `nordstrand`, `stadt` (Inselmitte & Stadt). Leer lassen, wenn es keine feste Lage gibt (z. B. Vermittlungen). |

**Restaurants und Cafés, Bars**

| Feld | Werte |
|---|---|
| `kueche` | Liste aus: `fisch`, `deutsch-regional`, `italienisch`, `mediterran`, `asiatisch`, `vegetarisch-vegan`, `cafe` (Café & Kuchen), `eis`, `imbiss` |
| `reservierung_empfohlen` | `true` (ja) oder `false` (nein) |

**Geschäfte und Mode**

| Feld | Werte |
|---|---|
| `sortiment` | Liste aus: `supermarkt`, `baeckerei`, `lebensmittel`, `cafe`, `mode`, `souvenirs`, `schmuck`, `apotheke`, `drogerie`, `buch`, `blumen`, `fahrrad`, `bank`, `post`, `dienstleistung` |

**Freizeit und Aktivitäten**

| Feld | Werte |
|---|---|
| `thema` | Liste aus: `aktiv` (Aktiv & Sport), `familie`, `kultur`, `natur` |

**Fahrradverleih und Service:** keine zusätzlichen Felder.

Neue Werte (z. B. eine weitere Küche) werden in `tools/betriebe.py` unter `FELDER` ergänzt.

## Hinweis am Eintrag

Jeder Eintrag zeigt „Zuletzt aktualisiert“, „Fehler melden“ und je nach `quelle`:

| `quelle` | Hinweis |
|---|---|
| `betrieb` | Angaben vom Betrieb, ohne Gewähr |
| `redaktion` | Von uns zusammengestellt, ohne Gewähr. Du bist der Betrieb? Übernimm deinen Eintrag. (Link auf `/betrieb-eintragen`) |

Übernimmt ein Betrieb seinen Eintrag, `quelle` auf `betrieb` setzen und das Datum aktualisieren.

## Button

Der Button nimmt automatisch das Erste, was vorhanden ist:

| Reihenfolge | vorhanden | Button-Text |
|---|---|---|
| 1 | `buchungslink` | je Kategorie (siehe unten) |
| 2 | `webseite` | je Kategorie (siehe unten) |
| 3 | `instagram` | Zu Instagram |
| 4 | `telefon` | Anrufen (öffnet die Telefon-App) |
| 5 | nur `adresse` | Route anzeigen (öffnet OpenStreetMap mit der Adresse) |

Ist gar nichts davon vorhanden, gibt es keinen Button (das Skript weist darauf hin).

| Kategorie | Button-Text |
|---|---|
| Unterkünfte | Jetzt buchen |
| Restaurants und Cafés | Tisch reservieren |
| Bars | Zur Webseite |
| Geschäfte und Mode | Zum Shop |
| Freizeit und Aktivitäten | Jetzt buchen |
| Fahrradverleih und Service | Zur Webseite |

Die Texte stehen in `tools/betriebe.py` (`KATEGORIEN`) und werden von dort auch für die
Detailseite übernommen (`js/betriebe-felder.js`, wird automatisch erzeugt).

## Lokal ansehen

Die Detailseite lädt die Daten per `fetch`, deshalb nicht per Doppelklick öffnen, sondern im Projektordner:

```
python3 -m http.server 8000
```

und `http://localhost:8000/essen-trinken.html` öffnen. (Adressen ohne `.html` funktionieren erst auf GitHub Pages.)

## Abzeichen „Luis’ Tipp“ auf anderen Karten

Für Betriebe reicht das Feld `luis_tipp`. Auf anderen festen Karten (z. B. Strände) diesen Block
direkt unter `<p class="desc">…</p>` einfügen:

```html
<div class="luis-tipp"><span class="luis-tipp-badge">Luis’ Tipp</span><p>Dein Satz hier.</p></div>
```
