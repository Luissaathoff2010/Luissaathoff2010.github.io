# Tally-Formulare einrichten

Beide Formulare werden auf der Seite erst nach einem Klick geladen („Formular laden“).
Vorher werden keine Daten an Tally übertragen.

Einbettungs-Link in Tally: Formular → **Share** → **Embed** → Link kopieren
(Form `https://tally.so/embed/<ID>?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`).

## 1. „Betrieb eintragen“ → ersetzt `[TALLY-LINK-BETRIEB]` in `betrieb-eintragen.html`

Felder:

- Kategorie (Auswahl, Pflicht): Unterkünfte · Restaurants und Cafés · Bars · Geschäfte und Mode · Freizeit und Aktivitäten · Fahrradverleih und Service
- Name des Betriebs (Pflicht)
- Adresse: Straße, PLZ, Ort (Pflicht)
- Kurzbeschreibung (Pflicht, max. ca. 300 Zeichen)
- Öffnungszeiten Sommer, Öffnungszeiten Winter
- Preisniveau (Auswahl): € · €€ · €€€
- Telefon
- Webseite (URL)
- Instagram (URL)
- Buchungs- oder Reservierungslink (URL)
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
