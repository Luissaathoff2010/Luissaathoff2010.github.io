# Tally-Formulare einrichten

Beide Formulare werden auf der Seite erst nach einem Klick geladen („Formular laden“).
Vorher werden keine Daten an Tally übertragen.

Einbettungs-Link in Tally: Formular → **Share** → **Embed** → Link kopieren
(Form `https://tally.so/embed/<ID>?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`).

## 1. „Betrieb eintragen“ → ersetzt `[TALLY-LINK-BETRIEB]` in `betrieb-eintragen.html`

Felder (die Namen in Klammern sind die Felder in `daten/betriebe.json`):

- Verstecktes Feld („Hidden field“) mit dem Namen `eintrag`. Kommt jemand über
  „Übernimm deinen Eintrag“, steht hier automatisch die ID des bestehenden Eintrags.
- Kategorie (Auswahl, Pflicht) (`kategorie`): Unterkünfte · Restaurants und Cafés · Bars · Geschäfte und Mode · Freizeit und Aktivitäten · Fahrradverleih und Service
- Name des Betriebs (Pflicht) (`name`)
- Adresse: Straße, PLZ, Ort (Pflicht) (`adresse`)
- Kurzbeschreibung (Pflicht, max. ca. 300 Zeichen) (`kurzbeschreibung`)
- Längere Beschreibung (optional) (`beschreibung`)
- Öffnungszeiten: ganzjährig gleich ODER Sommer und Winter getrennt (`oeffnungszeiten`)
- Preisniveau (Auswahl): € · €€ · €€€ · passt nicht (`preisniveau`)
- Telefon (`telefon`)
- Webseite (URL) (`webseite`)
- Instagram (URL) (`instagram`)
- Buchungs- oder Reservierungslink (URL) (`buchungslink`)
- Hinweis im Formular unter den Links: „Hast du keine eigene Webseite? Kein Problem: Dann zeigen wir
  je nach Angabe einen Button zu Instagram, zum Anrufen oder zur Route.“

Zusätzliche Fragen je Kategorie (in Tally mit „Conditional logic“ nur bei der passenden Kategorie zeigen):

- **Unterkünfte**
  - Art (Auswahl, Pflicht) (`art`): Hotel · Ferienwohnung · Pension · Vermittlung
  - Lage (Auswahl) (`lage`): Weststrand · Oststrand · Nordstrand · Inselmitte & Stadt · keine feste Lage
- **Restaurants und Cafés, Bars**
  - Art der Küche (Mehrfachauswahl) (`kueche`): Fisch · Deutsch & regional · Italienisch · Mediterran ·
    Asiatisch · Vegetarisch & vegan · Café & Kuchen · Eis · Imbiss
  - Reservierung empfohlen? (Ja/Nein) (`reservierung_empfohlen`)
- **Geschäfte und Mode**
  - Sortiment (Mehrfachauswahl) (`sortiment`): Supermarkt · Bäckerei · Lebensmittel & Feinkost · Café ·
    Mode & Schuhe · Souvenirs & Geschenke · Schmuck · Apotheke · Drogerie & Kosmetik · Bücher · Blumen ·
    Fahrrad · Bank · Post · Dienstleistung
- **Freizeit und Aktivitäten**
  - Thema (Mehrfachauswahl) (`thema`): Aktiv & Sport · Familie · Kultur · Natur

Beim Übertragen in `daten/betriebe.json` die Auswahl in die Kurzwerte aus `docs/eintraege.md`
umsetzen (z. B. „Inselmitte & Stadt“ → `stadt`) und `"quelle": "betrieb"` setzen.

Außerdem für alle Kategorien:

- Fotos: Feld „File upload“, mehrere Dateien erlauben, **max. 6**, nur Bilder
  (kostenloser Tarif: max. 10 MB pro Datei)
- Kontakt für Rückfragen: Name und E-Mail (Pflicht)
- Pflicht-Haken („Checkbox“, jeweils *Required*):
  - (a) „Ich habe die Rechte an den Bildern und darf sie veröffentlichen.“
  - (b) „Ich habe die [Datenschutzerklärung](https://[DOMAIN]/datenschutz) gelesen.“
  - (c) „Ich akzeptiere die [Nutzungsbedingungen](https://[DOMAIN]/nutzungsbedingungen).“
- Text auf der Abschlussseite: „Danke! Wir prüfen deinen Eintrag, bevor er online geht.“

## 2. „Frag Luis“ → ersetzt `[TALLY-LINK-KONTAKT]` in `kontakt.html`

- Name (optional), E-Mail (Pflicht), Nachricht (Pflicht)
- Verstecktes Feld („Hidden field“) mit dem Namen `eintrag`.
  Über „Fehler melden“ wird die ID des Eintrags automatisch mitgeschickt.
- Pflicht-Haken: „Ich habe die Datenschutzerklärung gelesen.“ (verlinkt)

## Datenschutz

In Tally unter Settings die Datenverarbeitung prüfen und den Auftragsverarbeitungsvertrag (DPA)
abschließen. Tally gehört in die Datenschutzerklärung (Formulare, Datei-Uploads).
