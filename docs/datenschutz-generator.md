# Checkliste für den Datenschutz-Generator

Für datenschutz-generator.de (Dr. Schwenke), eRecht24 oder einen ähnlichen Generator.
Stand: geprüft am 16.11.2026 anhand des Codes der Seite. Wenn neue Dienste dazukommen
(z. B. ein Video, ein Newsletter), diese Liste und die Datenschutzerklärung anpassen.

Das Ergebnis des Generators kommt in `datenschutz.html` an die Stelle `[DATENSCHUTZTEXT]`.
Keine eigenen Rechtstexte schreiben – bei Unsicherheit Generator-Hilfe oder Anwalt fragen.

## 1. Verantwortlicher

- [ ] Name/Firma: **Saathoff Unternehmungen** [RECHTSFORM]
- [ ] Vertreten durch: **Luis Saathoff und Eva Saathoff**
- [ ] Anschrift: **Richthofenstraße 1c, 26548 Norderney**
- [ ] E-Mail: **[E-MAIL]**
- [ ] Telefon: im Generator leer lassen, falls keins angegeben werden soll
- [ ] Datenschutzbeauftragter: in der Regel **nicht** erforderlich (kleiner Betrieb) – im Generator „nicht benannt“ wählen

## 2. Art der Website

- [ ] Informationsangebot / Website ohne Onlineshop
- [ ] **Kein** Kundenkonto, **kein** Login, **kein** Shop, **keine** eigene Buchung oder Zahlung auf der Seite
- [ ] Zielgruppe: Gäste und Interessierte; Betriebe können über ein Formular Einträge einreichen

## 3. Hosting

- [ ] **GitHub Pages** – Anbieter: GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA
      (Tochter der Microsoft Corporation)
- [ ] **Server-Logfiles**: GitHub speichert beim Aufruf technische Daten (u. a. IP-Adresse, Datum/Uhrzeit,
      aufgerufene Seite, Browser). Im Generator „Server-Logfiles beim Hoster“ anhaken.
- [ ] **Übermittlung in die USA**: anhaken (Drittlandübermittlung). GitHub ist unter dem
      EU-US Data Privacy Framework zertifiziert – im Generator die entsprechende Option wählen,
      falls angeboten.
- [ ] **SSL/TLS-Verschlüsselung**: ja (HTTPS über GitHub Pages)
- [ ] Wofür: Bereitstellung der Website

## 4. Webanalyse / Reichweitenmessung

- [ ] **Umami** (Umami Cloud, cloud.umami.is) – Software Inc., USA [prüfen: Anbieter und Serverstandort im Umami-Konto]
- [ ] **Cookiefrei**: Umami setzt keine Cookies und speichert keine IP-Adressen dauerhaft
      → im Generator „Reichweitenmessung ohne Cookies“ wählen (falls vorhanden)
- [ ] Wofür: anonyme Besucherzahlen, z. B. welche Seiten oft aufgerufen werden
- [ ] Rechtsgrundlage laut Generator: in der Regel berechtigtes Interesse
- [ ] Wird geladen auf: allen Seiten (`partials/head.html`), nur auf der eigenen Domain (`data-domains`)

## 5. Formulare und Datei-Upload

- [ ] **Tally** (Tally BV, Belgien, Daten in der EU) – zwei Formulare:
  - „Betrieb eintragen“ (`/betrieb-eintragen`): Angaben zum Betrieb, Kontakt (Name, E-Mail),
    **Datei-Upload von bis zu 6 Fotos**
  - „Frag Luis“ (`/kontakt`): Name (optional), E-Mail, Nachricht; über „Fehler melden“ wird
    zusätzlich die Kennung des betroffenen Eintrags übertragen
- [ ] **Laden erst nach Klick**: Das Formular wird erst nach Klick auf „Formular laden“ von Tally
      geladen. Vorher werden keine Daten an Tally übertragen.
- [ ] Im Generator: „Kontaktformular“ und „Formulardienst eines Drittanbieters (Tally)“ anhaken,
      „Datei-Upload“ erwähnen
- [ ] Auftragsverarbeitungsvertrag (DPA) mit Tally abschließen (in den Tally-Einstellungen)
- [ ] Wofür: Einträge von Betrieben entgegennehmen, Fragen und Fehlermeldungen beantworten

## 6. Kontakt per E-Mail

- [ ] Kontaktaufnahme per E-Mail an **[E-MAIL]** (als Text auf Impressum und Kontaktseite)
- [ ] Im Generator: „Kontaktaufnahme per E-Mail“ anhaken
- [ ] E-Mail-Anbieter angeben: [E-MAIL-ANBIETER] (z. B. der Anbieter des Postfachs)

## 7. Karte

- [ ] **OpenStreetMap** – Kartenkacheln von der OpenStreetMap Foundation (St John’s Innovation Centre,
      Cowley Road, Cambridge, CB4 0WS, Großbritannien)
- [ ] Die Kartensoftware (Leaflet) liegt **lokal** auf dem eigenen Server
- [ ] **Laden erst nach Klick** auf „Karte laden“ – erst dann werden Kartenkacheln von
      tile.openstreetmap.org abgerufen (dabei wird die IP-Adresse übertragen)
- [ ] Großbritannien: Drittland mit Angemessenheitsbeschluss der EU – im Generator angeben, falls gefragt
- [ ] Wo: `/karte` sowie auf den Seiten Unterkünfte, Essen & Trinken, Geschäfte, Aktivitäten,
      Fahrrad & Mobilität und auf jeder Eintragsseite
- [ ] Wofür: Lage der Betriebe anzeigen
- [ ] Zusätzlich: Der Button „Route anzeigen“ ist ein **normaler Link** zu openstreetmap.org
      (Daten fließen erst beim Klick, wie bei jedem externen Link)

## 8. Schriften

- [ ] **Lokal eingebunden** (Inter, aus `assets/fonts/`) – **kein** Google Fonts, keine Verbindung zu Google
- [ ] Im Generator: „Google Fonts“ **nicht** anhaken; bei manchen Generatoren gibt es
      „Schriftarten lokal gehostet“ – dann das wählen oder weglassen

## 9. PayPal (Unterstützen-Button)

- [ ] **Nur als Link** auf paypal.me ([PAYPAL-ME-LINK]) – im Header, im Unterstützen-Block und im Footer
- [ ] Es wird **kein** PayPal-Skript und kein PayPal-Button-Code eingebunden
- [ ] Daten werden erst übertragen, wenn jemand auf den Link klickt: Dann öffnet sich die Seite von
      PayPal (Europe) S.à r.l. et Cie, S.C.A., Luxemburg, und es gelten deren Datenschutzbestimmungen
- [ ] Im Generator: je nach Angebot „PayPal“ als **Zahlungsdienst/Spendenlink** anhaken oder als
      „Verlinkung auf externe Seite“ behandeln

## 10. Weitere externe Links (nur Links, nichts wird geladen)

- [ ] Webseiten der Betriebe, Instagram- und Facebook-Profile von Betrieben, offizielle Stellen
      (Staatsbad, Reederei Frisia, Stadt Norderney)
- [ ] **Keine** eingebetteten Social-Media-Inhalte, **keine** Like-Buttons, **kein** Pixel
- [ ] Telefonnummern als `tel:`-Links (öffnen nur die Telefon-App)

## 11. Cookies und Speicher im Browser

- [ ] Die Seite setzt **keine Cookies** und nutzt keinen Speicher im Browser (geprüft im Code)
- [ ] Deshalb **kein Cookie-Banner** nötig
- [ ] Hinweis: Tally und OpenStreetMap können nach dem Klick eigene technisch nötige Daten verarbeiten –
      im Generator bei den jeweiligen Diensten mit abgedeckt

## 12. Was NICHT verwendet wird (im Generator nicht anhaken)

- [ ] Google Analytics, Google Tag Manager
- [ ] Google Fonts
- [ ] Google Maps
- [ ] YouTube oder andere eingebettete Videos
- [ ] Facebook-Pixel, Facebook-Plugins, Instagram-Einbettungen
- [ ] Newsletter
- [ ] Cookies für Werbung oder Marketing, Werbenetzwerke
- [ ] Kommentarfunktion, Benutzerkonten, Login
- [ ] Onlineshop, eigene Buchung oder Zahlungsabwicklung

## 13. Rechte der Betroffenen und Sonstiges

- [ ] Standardabschnitte des Generators übernehmen (Auskunft, Löschung, Widerspruch,
      Beschwerderecht bei der Aufsichtsbehörde – in Niedersachsen: Die Landesbeauftragte für den
      Datenschutz Niedersachsen)
- [ ] Datum der Datenschutzerklärung setzen

## Danach

1. Text aus dem Generator in `datenschutz.html` statt `[DATENSCHUTZTEXT]` einfügen.
2. Prüfen, ob die Dienste aus dieser Liste alle vorkommen (Tally, OpenStreetMap, Umami, GitHub).
3. In Tally den Link zur Datenschutzerklärung im Pflicht-Haken eintragen (siehe `docs/tally-formulare.md`).
