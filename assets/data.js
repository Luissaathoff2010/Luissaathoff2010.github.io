/* ==========================================================================
   Norderney Guide — Daten der Anbieter
   Wird aus unterkuenfte.html erzeugt, damit Übersicht und Detailseite
   denselben Stand zeigen. "bild" = Kartenansicht, "bilder" = Galerie.
   BILDHINWEIS: noch lokale Platzhalter (assets/images/platzhalter-*.svg). Zum Ersetzen die "src"
   gegen den Pfad zum echten Foto tauschen und den "alt"-Text anpassen.
   ========================================================================== */

const KATEGORIE_LABEL = {
  "hotel": "Hotel",
  "ferienwohnung": "Ferienwohnung",
  "pension": "Pension",
  "vermittlung": "Vermittlung"
};

const LAGE_LABEL = {
  "weststrand": "Weststrand",
  "oststrand": "Oststrand",
  "nordstrand": "Nordstrand",
  "stadt": "Inselmitte & Stadt"
};

const ANBIETER = [
  {
    "id": "strandhotel-georgshoehe",
    "name": "Strandhotel Georgshöhe",
    "kategorie": "hotel",
    "lage": "weststrand",
    "preisniveau": "€€€",
    "tag": "Hotel · Spa-Resort",
    "meta": "Kaiserstraße 24 · Weststrand · Wellness &amp; Fitness",
    "beschreibung": "Das Superior Spa- und Resorthotel liegt direkt an der Strandpromenade und gehört zu den größeren Wellnesshäusern der Insel. Ein großzügiger Spa- und Saunabereich sowie ein Fitnessstudio sorgen dafür, dass sich der Aufenthalt auch bei schlechtem Wetter lohnt. Die Zimmer sind überwiegend auf Erholung und längere Aufenthalte ausgelegt, viele mit Balkon oder Blick auf Strand und Dünen. Besonders geeignet ist das Haus für Paare und Wellness-Urlauber, die Wert auf Service und ein umfangreiches Freizeitangebot im Haus legen. Die Lage an der Promenade bedeutet kurze Wege zum Strand und in den Ortskern.",
    "website": "https://www.georgshoehe.de",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Strandhotel Georgshöhe direkt an der Strandpromenade Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Strandhotel Georgshöhe (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Strandhotel Georgshöhe (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Strandhotel Georgshöhe (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Strandhotel Georgshöhe auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "hotel-stranddistel",
    "name": "Hotel Stranddistel",
    "kategorie": "hotel",
    "lage": "weststrand",
    "preisniveau": "€€",
    "tag": "Hotel",
    "meta": "Damenpfad 17 · unterhalb der Weststrandpromenade · 19 Zimmer",
    "beschreibung": "Das familiär geführte Hotel liegt unterhalb der Weststrandpromenade und punktet vor allem mit der direkten Strandnähe. Mit 19 Zimmern ist es überschaubar und persönlich geführt, was viele Stammgäste schätzen. Von hier sind sowohl der Strand als auch der Ortskern in wenigen Minuten zu Fuß erreichbar. Das Haus eignet sich gut für Paare und Gäste, die unkomplizierten Komfort in bester Strandlage suchen, ohne die Größe eines Resorthotels.",
    "website": "https://inselhaeuser-norderney.de/hotel-stranddistel/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Hotel Stranddistel unterhalb der Weststrandpromenade Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Hotel Stranddistel (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Hotel Stranddistel (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Hotel Stranddistel (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Hotel Stranddistel auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "inselhotel-koenig",
    "name": "Inselhotel König",
    "kategorie": "hotel",
    "lage": "stadt",
    "preisniveau": "€€€",
    "tag": "Hotel · 4 Sterne",
    "meta": "Bülowallee 8 · Zentrum",
    "beschreibung": "Das 4-Sterne-Hotel liegt in einem historischen Gebäude mitten im Zentrum von Norderney. Zur Ausstattung gehören ein Wellness- und Saunabereich, das hauseigene Restaurant „Leib &amp; Seele\" sowie die Bülow-Bar für den Abend. Die zentrale Lage bringt kurze Wege zu Geschäften, Restaurants und dem Kurplatz mit sich. Das Haus verbindet historisches Ambiente mit modernem Komfort und eignet sich für Gäste, die gehobenen Standard und Innenstadtlage schätzen.",
    "website": "https://www.inselhotel-koenig.de",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Inselhotel König, historisches Gebäude von 1868 im Zentrum von Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Inselhotel König (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Inselhotel König (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Inselhotel König (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Inselhotel König auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "hotel-haus-waterkant",
    "name": "Hotel Haus Waterkant",
    "kategorie": "hotel",
    "lage": "weststrand",
    "preisniveau": "€€",
    "tag": "Hotel",
    "meta": "Seeblick · Familienbetrieb seit 1959",
    "beschreibung": "Das Traditionshotel wird bereits in dritter Generation familiär geführt und verfügt seit der Erweiterung um die Strandvilla Eils über 51 Doppel- und 21 Einzelzimmer. Viele Zimmer bieten Seeblick, was das Haus besonders bei Gästen beliebt macht, die morgens direkt aufs Wasser schauen möchten. Die gewachsene Struktur aus Stammhaus und Strandvilla sorgt für unterschiedliche Zimmerkategorien für verschiedene Ansprüche. Geeignet ist das Hotel für Gäste, die ein traditionsreiches, familiär geführtes Haus mit Meerblick suchen.",
    "website": "https://haus-waterkant.de",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Hotel Haus Waterkant mit Seeblick auf den Strand von Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Hotel Haus Waterkant (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Hotel Haus Waterkant (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Hotel Haus Waterkant (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Hotel Haus Waterkant auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "michels-inselhotel-vier-jahreszeiten",
    "name": "Michels Inselhotel Vier Jahreszeiten",
    "kategorie": "hotel",
    "lage": "stadt",
    "preisniveau": "€€€",
    "tag": "Hotel · 4 Sterne",
    "meta": "Herrenpfad 25 · Inselmitte",
    "beschreibung": "Das moderne 4-Sterne-Hotel liegt zentral im Ort am Herrenpfad und verfügt über 95 individuell eingerichtete Zimmer. Ein Wellnessbereich mit Innenpool, Sauna und Spa-Lounge sowie eine Dachterrasse mit Inselblick prägen das Haus. Das Hotel ist ausdrücklich hundefreundlich und hat einen eigenen Frühstücksbereich für Gäste mit Hund. Geeignet für Wellness- und Erholungsurlauber sowie Hundebesitzer, die eine zentrale Lage schätzen.",
    "website": "https://www.michelshotels.de/hotels/inselhotel-vier-jahreszeiten/hotel/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Michels Inselhotel Vier Jahreszeiten im Zentrum von Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Michels Inselhotel Vier Jahreszeiten (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Michels Inselhotel Vier Jahreszeiten (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Michels Inselhotel Vier Jahreszeiten (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Michels Inselhotel Vier Jahreszeiten auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "michels-strandhotel-germania",
    "name": "Michels Strandhotel Germania",
    "kategorie": "hotel",
    "lage": "stadt",
    "preisniveau": "€€€",
    "tag": "Hotel · 4 Sterne",
    "meta": "Ortszentrum · rund 100 m zum Strand",
    "beschreibung": "Das 4-Sterne-Hotel liegt im Ortszentrum, nur rund 100 Meter vom Nordseestrand entfernt. Bekannt ist es für die höchstgelegene Dachterrassen-Sauna der Insel mit Panoramablick sowie einen Spa-Bereich mit Innenpool, Dampfbad und finnischer Sauna. 86 Zimmer in verschiedenen Kategorien von Einzel- bis Suite sind mit Boxspringbetten ausgestattet. Passend für Gäste, die zentrale Lage mit kurzem Strandweg und Wellness verbinden möchten.",
    "website": "https://www.michelshotels.de/hotels/strandhotel-germania-norderney/hotel/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Michels Strandhotel Germania nahe dem Strand von Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Michels Strandhotel Germania (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Michels Strandhotel Germania (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Michels Strandhotel Germania (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Michels Strandhotel Germania auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "hotel-friese",
    "name": "Hotel Friese",
    "kategorie": "hotel",
    "lage": "stadt",
    "preisniveau": "€€",
    "tag": "Hotel",
    "meta": "Friedrichstraße 34 · Fußgängerzone",
    "beschreibung": "Das Traditionshotel liegt mitten in der Fußgängerzone. Die Zimmer sind mit Sat-TV, Safe und renovierten Bädern ausgestattet, ein Teil davon mit Balkon oder Terrasse; die Suiten bieten zusätzlich Minibar und Kaffeemaschine. Durch die zentrale Lage an der Friedrichstraße sind Geschäfte, Cafés und der Weg zum Strand kurz. Geeignet für Gäste, die klassischen Hotelkomfort in Laufnähe zu allem Wichtigen suchen.",
    "website": "https://www.hotel-friese.de",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Hotel Friese in der Fußgängerzone Friedrichstraße Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Hotel Friese (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Hotel Friese (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Hotel Friese (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Hotel Friese auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "pension-kama",
    "name": "Pension Kama",
    "kategorie": "pension",
    "lage": "stadt",
    "preisniveau": "€",
    "tag": "Pension",
    "meta": "Frühstückspension · zentral",
    "beschreibung": "Die familiär geführte Frühstückspension liegt zentral auf der Insel und punktet mit persönlicher Atmosphäre statt Hotel-Anonymität. Die überschaubare Zimmerzahl ermöglicht individuelle Betreuung der Gäste durch die Gastgeber. Das Frühstück ist im Preis inbegriffen und wird in familiärem Rahmen serviert. Geeignet ist die Pension für Gäste, die Wert auf persönlichen Kontakt und ein gutes Preis-Leistungs-Verhältnis legen, statt auf umfangreiche Hotel-Ausstattung.",
    "website": "",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstückspension Kama auf Norderney, gemütliches Gästezimmer (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Pension Kama (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Pension Kama (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Pension Kama (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Pension Kama auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "haus-elimar-weber",
    "name": "Haus Elimar Weber",
    "kategorie": "pension",
    "lage": "stadt",
    "preisniveau": "€",
    "tag": "Pension &amp; Gästehaus",
    "meta": "Adolfsreihe 1 · am Kurplatz, in der Fußgängerzone",
    "beschreibung": "Das Pensions- und Gästehaus liegt am Kurplatz, direkt gegenüber dem Conversations- und Badehaus und mitten in der Fußgängerzone. Die Gastgeber legen Wert auf persönliche Betreuung und einen familiären Umgang mit den Gästen. Wer kurze Wege zu Cafés, Geschäften und Veranstaltungen sucht, wohnt hier zentral. Umgekehrt sollte man wissen: In dieser Lage geht es tagsüber lebhaft zu.",
    "website": "https://www.haus-elimar-weber.de",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Pension Haus Elimar Weber an der Adolfsreihe auf Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Haus Elimar Weber (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Haus Elimar Weber (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Haus Elimar Weber (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Haus Elimar Weber auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "inselpension-henriette",
    "name": "Inselpension Henriette",
    "kategorie": "pension",
    "lage": "",
    "preisniveau": "€€",
    "tag": "Pension &amp; Café",
    "meta": "13 Zimmer · Frühstück inklusive",
    "beschreibung": "Die liebevoll geführte Pension mit angeschlossenem Café bietet 13 individuell gestaltete Zimmer und familiären Service. Das Frühstück ist inklusive und wird in gemütlicher Atmosphäre serviert. Persönliche Betreuung und eine ruhige, private Atmosphäre stehen im Vordergrund. Passend für Gäste, die eine ruhige, persönlich geführte Unterkunft abseits großer Hotelketten suchen.",
    "website": "https://henriette-norderney.de",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Inselpension Henriette mit angeschlossenem Café auf Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Inselpension Henriette (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Inselpension Henriette (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Inselpension Henriette (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Inselpension Henriette auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "seemoi",
    "name": "Seemoi",
    "kategorie": "pension",
    "lage": "",
    "preisniveau": "€€",
    "tag": "Pension · Bed &amp; Breakfast",
    "meta": "Familiengeführt in dritter Generation",
    "beschreibung": "Die familiär geführte Bed-&amp;-Breakfast-Pension liegt rund 100&nbsp;m von der Strandpromenade und 200&nbsp;m von der Fußgängerzone entfernt. Ein persönliches, liebevoll zubereitetes Frühstück und gepflegte Zimmer prägen das Haus. Geeignet für Gäste, die familiäre Gastfreundschaft und kurze Wege gleichermaßen schätzen.",
    "website": "https://www.seemoi.de",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Bed-and-Breakfast Pension Seemoi auf Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Seemoi (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Seemoi (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Seemoi (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Seemoi auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "pension-haus-weierts",
    "name": "Pension Haus Weierts",
    "kategorie": "pension",
    "lage": "stadt",
    "preisniveau": "€",
    "tag": "Pension",
    "meta": "Kreuzstr. 8 · 15 Zimmer · Strand: ca. 200 m",
    "beschreibung": "Familiär geführte Pension in zentraler, ruhiger Lage. Die Angaben zu Zimmerzahl und Ausstattung lassen sich derzeit nicht überprüfen, weil der Internetauftritt offline ist. Gut geeignet für preisbewusste Gäste, die dennoch zentral wohnen möchten.",
    "website": "",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Pension Haus Weierts an der Kreuzstraße Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Pension Haus Weierts (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Pension Haus Weierts (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Pension Haus Weierts (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Pension Haus Weierts auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "inselhaeuser-norderney",
    "name": "Inselhäuser Norderney",
    "kategorie": "ferienwohnung",
    "lage": "",
    "preisniveau": "€€",
    "tag": "Ferienwohnungen",
    "meta": "Familienbetrieb Deckena-Meyer",
    "beschreibung": "Der Familienbetrieb Deckena-Meyer vermietet großzügig geschnittene, gepflegte Ferienwohnungen mit großen Balkonen in ruhiger Umgebung. Zum Angebot der Familie gehört auch das eigene Hotel Stranddistel, wodurch langjährige Erfahrung in der Gästebetreuung auf der Insel vorhanden ist. Die Wohnungen eignen sich durch ihre Größe besonders für Familien und Gruppen, die Selbstversorgung und Privatsphäre schätzen. Die ruhige Lage der Objekte bietet Erholung abseits des touristischen Trubels.",
    "website": "https://inselhaeuser-norderney.de",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Ferienwohnung von Inselhäuser Norderney mit großem Balkon (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Inselhäuser Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Inselhäuser Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Inselhäuser Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Inselhäuser Norderney auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "insular",
    "name": "Insular",
    "kategorie": "vermittlung",
    "lage": "",
    "preisniveau": "",
    "tag": "Ferienhäuser &amp; Apartments",
    "meta": "Vermittlung · Preise variieren je Objekt",
    "beschreibung": "Insular vermittelt Ferienhäuser und Apartments unterschiedlichster Größen und Ausstattungsstufen über die ganze Insel verteilt. Das Angebot reicht von kompakten Apartments für Paare bis zu größeren Ferienhäusern für Familien oder Gruppen. Durch die Bandbreite der vermittelten Objekte lässt sich für sehr unterschiedliche Ansprüche und Budgets eine passende Unterkunft finden. Die Buchung und Preisauskunft erfolgt direkt über die Website des Vermittlers.",
    "website": "https://www.insular.de",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Modernes Ferienhaus von Insular auf Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Insular (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Insular (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Insular (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Insular auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "die-insellotsen",
    "name": "Die Insellotsen",
    "kategorie": "ferienwohnung",
    "lage": "",
    "preisniveau": "",
    "tag": "Ferienwohnungen",
    "meta": "Persönliche Schlüsselübergabe · Preise variieren",
    "beschreibung": "Die Insellotsen vermitteln Ferienwohnungen auf Norderney und legen besonderen Wert auf den persönlichen Empfang der Gäste. Bei der Schlüsselübergabe vor Ort gibt es zusätzlich eine kurze Insel-Einweisung, die besonders Erstbesuchern die Orientierung erleichtert. Dieser persönliche Service unterscheidet die Agentur von rein digitalen Buchungsplattformen. Geeignet für Gäste, die bei der Ferienwohnungs-Buchung nicht auf persönlichen Kontakt verzichten möchten.",
    "website": "https://www.dieinsellotsen.de",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Persönliche Schlüsselübergabe einer Ferienwohnung auf Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Die Insellotsen (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Die Insellotsen (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Die Insellotsen (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Die Insellotsen auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "onkes-fritsching-vermietung",
    "name": "Onkes-Fritsching Vermietung",
    "kategorie": "ferienwohnung",
    "lage": "",
    "preisniveau": "",
    "tag": "Ferienwohnungen · Große Auswahl",
    "meta": "Ferienwohnungen &amp; -häuser · Preise variieren",
    "beschreibung": "Onkes-Fritsching vermittelt Ferienunterkünfte auf der ganzen Insel. Das Angebot reicht von der kleinen Wohnung bis zum Ferienhaus für größere Gruppen. Durch die schiere Größe des Portfolios ist die Auswahl entsprechend breit gefächert. Geeignet für Gäste, die aus einem sehr breiten Angebot verschiedenster Objekttypen wählen möchten.",
    "website": "https://www.onkes-fritsching.de",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Ferienwohnungs-Vermittlung Onkes-Fritsching auf Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Onkes-Fritsching Vermietung (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Onkes-Fritsching Vermietung (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Onkes-Fritsching Vermietung (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Onkes-Fritsching Vermietung auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "vermietservice-passepartout",
    "name": "Vermietservice Passepartout",
    "kategorie": "ferienwohnung",
    "lage": "",
    "preisniveau": "",
    "tag": "Ferienwohnungen · Persönlich",
    "meta": "Zentrum · Preise variieren",
    "beschreibung": "Der Vermietservice betreut Ferienwohnungen im Zentrum von Norderney persönlich und unaufwändig. Als kleinerer, persönlicherer Anbieter unterscheidet er sich von den großen Vermietagenturen der Insel. Geeignet für Gäste, die zentral gelegene Ferienwohnungen mit persönlichem Ansprechpartner suchen, statt aus einem sehr großen Portfolio zu wählen.",
    "website": "https://www.passepartout-norderney.de",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Vermietservice Passepartout Norderney im Zentrum der Insel (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Vermietservice Passepartout (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Vermietservice Passepartout (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Vermietservice Passepartout (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Vermietservice Passepartout auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "norderney-vermietagentur",
    "name": "Norderney Vermietagentur",
    "kategorie": "vermittlung",
    "lage": "",
    "preisniveau": "",
    "tag": "Ferienwohnungen &amp; -häuser",
    "meta": "Vermittlung · Preise variieren",
    "beschreibung": "Die Norderney Vermietagentur vermittelt Ferienwohnungen und Ferienhäuser für Eigentümer und Gäste über die ganze Insel verteilt. Das Spektrum umfasst Objekte verschiedener Größen und Lagen. Sie ist eine Alternative zu den größeren, etablierten Agenturen der Insel für Gäste, die gezielt vergleichen möchten.",
    "website": "https://www.norderney-vermietagentur.de",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Norderney Vermietagentur, Vermittlung von Ferienhäusern auf der Insel (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Norderney Vermietagentur (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Norderney Vermietagentur (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Norderney Vermietagentur (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Norderney Vermietagentur auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "norderney-zimmerservice",
    "name": "Norderney Zimmerservice",
    "kategorie": "vermittlung",
    "lage": "",
    "preisniveau": "",
    "tag": "Vermittlung · Größte Agentur",
    "meta": "Rund 300 vermittelte Unterkünfte · Preise variieren",
    "beschreibung": "Der Norderney Zimmerservice vermittelt rund 300 Unterkünfte auf der Insel. Im Portfolio finden sich private Ferienwohnungen und Ferienhäuser aller Kategorien und Preisklassen. Durch die Größe des Angebots ist die Chance hoch, für nahezu jeden Anspruch und Zeitraum etwas Passendes zu finden. Die Vermittlung erfolgt direkt über die eigene Website mit Verfügbarkeitssuche.",
    "website": "https://www.norderney-zs.de",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beratungsgespräch beim Norderney Zimmerservice (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Norderney Zimmerservice (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Norderney Zimmerservice (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Norderney Zimmerservice (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Norderney Zimmerservice auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "unterkunftssuche-der-staatsbad-norderney-gmbh",
    "name": "Unterkunftssuche der Staatsbad Norderney GmbH",
    "kategorie": "vermittlung",
    "lage": "",
    "preisniveau": "",
    "tag": "Offizielle Suche",
    "meta": "Alle Kategorien · norderney.de",
    "beschreibung": "Die offizielle Buchungsplattform der Staatsbad Norderney GmbH durchsucht Hotels, Ferienwohnungen und Pensionen der ganzen Insel nach Zeitraum, Personenzahl und gewünschter Ausstattung. Da sie von der offiziellen Tourismus-Organisation betrieben wird, bildet sie einen besonders breiten Querschnitt des Inselangebots ab. Für Gäste, die sich noch nicht auf einen bestimmten Anbieter festgelegt haben, ist sie ein guter Startpunkt für die Unterkunftssuche. Buchung und Verfügbarkeit werden direkt auf norderney.de angezeigt.",
    "website": "https://www.norderney.de/urlaub-buchen",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Blick auf das Conversationshaus, Sitz der Staatsbad Norderney GmbH (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Unterkunftssuche der Staatsbad Norderney GmbH (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Unterkunftssuche der Staatsbad Norderney GmbH (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Unterkunftssuche der Staatsbad Norderney GmbH (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Unterkunftssuche der Staatsbad Norderney GmbH auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "seesteg-norderney",
    "name": "Seesteg Norderney",
    "kategorie": "hotel",
    "lage": "weststrand",
    "preisniveau": "€€€",
    "tag": "Hotel · Relais &amp; Châteaux",
    "meta": "Damenpfad 36A · direkt am Weststrand",
    "beschreibung": "Kleines Luxushotel direkt am Strand, untergebracht in einem ehemaligen Speichergebäude aus Backstein. Die Zimmer blicken über die Nordsee in Richtung Sonnenuntergang. Das Haus gehört der Vereinigung Relais &amp; Châteaux an. Das hauseigene Restaurant trägt seit Jahren einen MICHELIN-Stern, Küchenchef ist seit 2012 Markus Kebschull.",
    "website": "https://seesteg-norderney.de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Hotel Seesteg Norderney direkt am Weststrand (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Seesteg Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Seesteg Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Seesteg Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Seesteg Norderney auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "1884-norderney",
    "name": "1884 Norderney",
    "kategorie": "hotel",
    "lage": "weststrand",
    "preisniveau": "€€€",
    "tag": "Boutique-Hotel",
    "meta": "Am Weststrand 3–4 · Tel. 04932 5219900",
    "beschreibung": "Boutique-Hotel in einer 1884 erbauten und aufwendig sanierten Villa im Bäderstil, daher der Name. 20 individuell eingerichtete Zimmer und Suiten, viele mit Balkon und Blick auf die Nordsee. Zum Haus gehören ein Spa-Bereich und das Restaurant „Müllers\" von Nelson Müller. Seit Juni 2023 unter neuer Leitung.",
    "website": "https://1884-norderney.de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Boutique-Hotel 1884 Norderney in einer Villa im Bäderstil (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in 1884 Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in 1884 Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von 1884 Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von 1884 Norderney auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "villa-breeksee",
    "name": "Villa Breeksee",
    "kategorie": "hotel",
    "lage": "weststrand",
    "preisniveau": "€€",
    "tag": "Hotel",
    "meta": "Damenpfad 20 · 18 Zimmer · direkt an der Brandung",
    "beschreibung": "Hotel mit 18 Zimmern direkt in der Brandungszone des Weststrands, wenige Schritte bis zum Meer und kurze Wege in den Ortskern. Die Zimmer reichen von 11&nbsp;m² als Einzelzimmer zur Landseite bis 22&nbsp;m² als Doppelzimmer mit Meerblick. Frühstück ist für Hotelgäste inbegriffen, im Haus liegt das Restaurant „Gute Stube\". Vom Hafen sind es rund 2,4&nbsp;km.",
    "website": "https://www.villabreeksee.de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Hotel Villa Breeksee am Weststrand von Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Villa Breeksee (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Villa Breeksee (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Villa Breeksee (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Villa Breeksee auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "haus-am-meer",
    "name": "Haus am Meer",
    "kategorie": "hotel",
    "lage": "weststrand",
    "preisniveau": "€€€",
    "tag": "Hotel &amp; Ferienwohnungen",
    "meta": "Damenpfad 35 · Tel. 04932 8930",
    "beschreibung": "Kombination aus Hotelzimmern in mehreren Häusern und Ferienwohnungen, direkt am Weststrand gelegen. Zur Ausstattung gehören ein Schwimmbad mit Meerblick, ein Spa- und Saunabereich, eine Kaminbar sowie eine Seeterrasse. Hunde sind willkommen. Die Aufteilung auf mehrere Häuser erlaubt sehr unterschiedliche Zimmerkategorien.",
    "website": "https://haus-am-meer-norderney.de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Hotel Haus am Meer am Damenpfad auf Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Haus am Meer (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Haus am Meer (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Haus am Meer (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Haus am Meer auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "logierhaus-norderney",
    "name": "Logierhaus Norderney",
    "kategorie": "ferienwohnung",
    "lage": "stadt",
    "preisniveau": "€€",
    "tag": "Hotels &amp; Apartments",
    "meta": "Austernfischer: Friedrichstraße 11 · fünf Häuser",
    "beschreibung": "Betreiber von fünf Häusern auf der Insel: Austernfischer am Rand der Fußgängerzone mit rund 300&nbsp;m zum Sandstrand, am Denkmal mit acht Doppel- und zwei Familienzimmern, am Rathaus mit Zimmern und neuen Apartments, Rosa-Lena mit elf Apartments unter 250&nbsp;m zum Strand sowie Birkenhof mit Apartments in ruhiger Lage. Das Frühstücksbuffet wird zentral im Austernfischer serviert.",
    "website": "https://logierhaus-norderney.de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Logierhaus Austernfischer an der Friedrichstraße Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Logierhaus Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Logierhaus Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Logierhaus Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Logierhaus Norderney auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "gaestehaus-bakker",
    "name": "Gästehaus Bakker",
    "kategorie": "pension",
    "lage": "stadt",
    "preisniveau": "€",
    "tag": "Pension",
    "meta": "Heinrichstraße 11 · Tel. 04932 93900",
    "beschreibung": "Familiär geführte Frühstückspension mit Einzelzimmern und Doppelzimmern in drei Varianten. Die Buchung läuft über ein eigenes Online-System, Kartenzahlung ist möglich. Das Haus wird auf mehreren Bewertungsportalen durchweg gut bewertet. Passend für Gäste, die eine persönlich geführte Unterkunft zu moderatem Preis suchen.",
    "website": "https://norderney-pension.de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Gästehaus Bakker an der Heinrichstraße Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Gästehaus Bakker (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Gästehaus Bakker (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Gästehaus Bakker (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Gästehaus Bakker auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "michels-hotel-misan",
    "name": "Michels Hotel Misan",
    "kategorie": "hotel",
    "lage": "stadt",
    "preisniveau": "€€",
    "tag": "Hotel",
    "meta": "Norderney · Teil der Michels-Hotelgruppe",
    "beschreibung": "Eines von sechs Häusern der Michels-Gruppe auf Norderney. Details zu Zimmern, Ausstattung und Preisen stehen auf der Website der Hotelgruppe.",
    "website": "https://www.michelshotels.de/hotels/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Michels Hotel Misan auf Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Michels Hotel Misan (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Michels Hotel Misan (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Michels Hotel Misan (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Michels Hotel Misan auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "michels-thalasso-hotel-nordseehaus",
    "name": "Michels Thalasso Hotel Nordseehaus",
    "kategorie": "hotel",
    "lage": "stadt",
    "preisniveau": "€€€",
    "tag": "Hotel · Thalasso",
    "meta": "Norderney · Teil der Michels-Hotelgruppe",
    "beschreibung": "Thalasso-Hotel der Michels-Gruppe mit Ausrichtung auf Meerwasser-Anwendungen und Wellness. Details zu Anwendungen, Zimmern und Preisen stehen auf der Website der Hotelgruppe.",
    "website": "https://www.michelshotels.de/hotels/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Michels Thalasso Hotel Nordseehaus auf Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Michels Thalasso Hotel Nordseehaus (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Michels Thalasso Hotel Nordseehaus (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Michels Thalasso Hotel Nordseehaus (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Michels Thalasso Hotel Nordseehaus auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "michels-hotel-hanseatic",
    "name": "Michels Hotel Hanseatic",
    "kategorie": "hotel",
    "lage": "stadt",
    "preisniveau": "€€€",
    "tag": "Hotel",
    "meta": "Norderney · Teil der Michels-Hotelgruppe",
    "beschreibung": "Weiteres Haus der Michels-Gruppe auf der Insel. Details zu Zimmern, Ausstattung und Preisen stehen auf der Website der Hotelgruppe.",
    "website": "https://www.michelshotels.de/hotels/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Michels Hotel Hanseatic auf Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Michels Hotel Hanseatic (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Michels Hotel Hanseatic (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Michels Hotel Hanseatic (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Michels Hotel Hanseatic auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "michels-gaestehaus-meerzeit",
    "name": "Michels Gästehaus Meerzeit",
    "kategorie": "pension",
    "lage": "stadt",
    "preisniveau": "€€",
    "tag": "Gästehaus",
    "meta": "Norderney · Teil der Michels-Hotelgruppe",
    "beschreibung": "Gästehaus der Michels-Gruppe und damit die kompaktere Alternative zu den Hotels der Kette. Details zu Zimmern und Preisen stehen auf der Website der Hotelgruppe.",
    "website": "https://www.michelshotels.de/hotels/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Michels Gästehaus Meerzeit auf Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Michels Gästehaus Meerzeit (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Michels Gästehaus Meerzeit (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Michels Gästehaus Meerzeit (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Michels Gästehaus Meerzeit auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "strandloft-norderney",
    "name": "Strandloft Norderney",
    "kategorie": "ferienwohnung",
    "lage": "stadt",
    "preisniveau": "€€€",
    "tag": "Ferienwohnungen · vier Häuser",
    "meta": "Marienstraße 6, Herrenpfad 2, Marienstraße 3, Feldhausenstraße 6",
    "beschreibung": "Anbieter mit vier eigenen Häusern im Ortskern: 18 Ferienwohnungen in den Strandlofts EINS, ZWEI und DREI sowie 7 Studios im Strandloft VIER. Die Einheiten reichen vom Studio für zwei Personen bis zur Wohnung für acht. Strandloft ZWEI liegt in einem denkmalgeschützten Gebäude. Alle Häuser liegen zentral und nah am Weststrand.",
    "website": "https://www.strandloft-norderney.de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Ferienwohnung im Strandloft Norderney im Ortskern (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Strandloft Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Strandloft Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Strandloft Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Strandloft Norderney auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "vermietservice-trost",
    "name": "Vermietservice Trost",
    "kategorie": "vermittlung",
    "lage": "",
    "preisniveau": "",
    "tag": "Vermietagentur · rund 200 Objekte",
    "meta": "Bülowallee 2 · Tel. 04932 910870",
    "beschreibung": "Vermiet- und Hausmeisterservice, der sich selbst als Unternehmen in zweiter Generation auf Norderney beschreibt. Vermittelt nach eigenen Angaben rund 200 Ferienwohnungen und Ferienhäuser. Das Angebot reicht von einfachen bis zu gehobenen Wohnungen, auch für Reisende mit Hund.",
    "website": "https://www.norderney.reisen/de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Vermietservice Trost, Vermietagentur auf Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Vermietservice Trost (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Vermietservice Trost (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Vermietservice Trost (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Vermietservice Trost auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "norderneyer-wohnungs-service",
    "name": "Norderneyer Wohnungs Service",
    "kategorie": "vermittlung",
    "lage": "",
    "preisniveau": "",
    "tag": "Vermietagentur · über 80 Objekte",
    "meta": "Herrenpfad 16 · Tel. 04932 927656",
    "beschreibung": "Vermittlungsservice mit nach eigener Angabe mehr als 80 Objekten für eine bis sechs Personen. Die Wohnungen decken unterschiedliche Preisklassen ab und eignen sich für Paare ebenso wie für Familien und Gruppen.",
    "website": "https://www.ferienwohnung-norderney.de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Norderneyer Wohnungs Service, Vermittlung von Ferienwohnungen (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Norderneyer Wohnungs Service (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Norderneyer Wohnungs Service (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Norderneyer Wohnungs Service (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Norderneyer Wohnungs Service auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "urlaubskontor-norderney",
    "name": "Urlaubskontor Norderney",
    "kategorie": "vermittlung",
    "lage": "",
    "preisniveau": "",
    "tag": "Vermietagentur",
    "meta": "Im Gewerbegelände 9 · Tel. 04932 9108888",
    "beschreibung": "Vermietagentur, die nach eigenen Angaben moderne, gehobene Ferienwohnungen vermittelt und Eigentümern zusätzlich einen Verwaltungsservice anbietet. Die Gesamtzahl der Objekte nennt die Website nicht.",
    "website": "https://www.urlaubskontor-norderney.de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Urlaubskontor Norderney, Vermittlung von Ferienwohnungen (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Urlaubskontor Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Urlaubskontor Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Urlaubskontor Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Urlaubskontor Norderney auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "inselbuden-norderney",
    "name": "Inselbuden Norderney",
    "kategorie": "vermittlung",
    "lage": "stadt",
    "preisniveau": "€€",
    "tag": "Vermietagentur · 13 Ferienanlagen",
    "meta": "Bismarckstraße 5, am Denkmal · Tel. 04932 5219691",
    "beschreibung": "Vermietagentur mit Büro im Stadtzentrum am Denkmal. Auf der Website sind 13 benannte Ferienanlagen aufgeführt, darunter Bismarck 1884, Haus Munke und die König Apartments. Neben der Vermietung übernimmt der Betrieb für Eigentümer auch Betreuung und Vermarktung.",
    "website": "https://www.inselbuden-norderney.de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Inselbuden Norderney, Vermietagentur im Stadtzentrum (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Inselbuden Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Inselbuden Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Inselbuden Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Inselbuden Norderney auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "haus-an-den-duenen",
    "name": "Haus an den Dünen",
    "kategorie": "ferienwohnung",
    "lage": "stadt",
    "preisniveau": "€€",
    "tag": "Ferienwohnungen",
    "meta": "Emsstraße 14 · rund 200 m zum Strand · Tel. 04932 4678093",
    "beschreibung": "Ferienwohnungshaus direkt an der Dünenlandschaft, nach eigenen Angaben nur rund 200 Meter vom Strand entfernt. Die genaue Zahl der Wohnungen nennt die Website nicht.",
    "website": "https://www.haus-andenduenen.de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Ferienwohnungshaus an den Dünen in der Emsstraße Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Haus an den Dünen (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Haus an den Dünen (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Haus an den Dünen (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Haus an den Dünen auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "thalasso-appartements-badehaus",
    "name": "Thalasso Appartements im bade:haus",
    "kategorie": "ferienwohnung",
    "lage": "stadt",
    "preisniveau": "€€€",
    "tag": "Appartements · 11 Einheiten",
    "meta": "Am Kurplatz 2 · rund 200 m zum Weststrand",
    "beschreibung": "Elf individuell gestaltete Appartements für ein bis zwei Personen, direkt im bade:haus am Kurplatz. Der Weststrand liegt rund 200 Meter entfernt, das Thalasso-Angebot des Hauses ist unmittelbar erreichbar. Betrieben von der Staatsbad Norderney GmbH.",
    "website": "https://www.norderney.de/badehaus/appartements",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Thalasso Appartement im bade:haus am Kurplatz Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Thalasso Appartements im bade:haus (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Thalasso Appartements im bade:haus (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Thalasso Appartements im bade:haus (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Thalasso Appartements im bade:haus auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "inselloft-norderney",
    "name": "Inselloft Norderney",
    "kategorie": "hotel",
    "lage": "weststrand",
    "preisniveau": "€€€",
    "tag": "Designhotel",
    "meta": "Damenpfad 37–40 · Tel. 04932 893800",
    "beschreibung": "Designhotel hinter einer denkmalgeschützten Fassade mit den Zimmerkategorien Studio, Loft und Penthouse. Zum Haus gehören ein Spa mit Sauna, ein Fitnessraum mit Nordseeblick, eine hauseigene Bäckerei und das Restaurant Esszimmer mit offener Küche. Dazu kommen ein Wein-Deli und ein Design-Shop.",
    "website": "https://inselloft-norderney.de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Designhotel Inselloft hinter denkmalgeschützter Fassade am Damenpfad (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Inselloft Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Inselloft Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Inselloft Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Inselloft Norderney auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "new-wave-norderney",
    "name": "New Wave",
    "kategorie": "hotel",
    "lage": "stadt",
    "preisniveau": "€€€",
    "tag": "Boutiquehotel · Rooftop-Bar",
    "meta": "Luisenstraße 13–15",
    "beschreibung": "Boutiquehotel auf halbem Weg zwischen Strandpromenade und Innenstadt. Auf dem Dach liegt eine rund um die Uhr zugängliche Rooftop-Bar, im Haus das Restaurant Oktopussy. Gäste haben Zugang zum bade:haus mit Meerwasserbädern, Saunen und Dampfbädern. Dazu kommt der Secret Garden, dienstags bis sonntags von 13 bis 20 Uhr.",
    "website": "https://www.new-wave.de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Boutiquehotel New Wave mit Rooftop-Bar auf Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in New Wave (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in New Wave (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von New Wave (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von New Wave auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "hotel-jann-von-norderney",
    "name": "Hotel Jann von Norderney",
    "kategorie": "hotel",
    "lage": "stadt",
    "preisniveau": "€€€",
    "tag": "Hotel · barrierefrei",
    "meta": "Halemstr. 10–12 · rund 3 Gehminuten zum Strand",
    "beschreibung": "Als 4-Sterne-Haus ausgewiesen und konsequent auf Barrierefreiheit ausgerichtet: Es gibt barrierefreie Zimmer mit modernen Pflegebetten, mobile Pflegedienste lassen sich auf Anfrage organisieren. Das Hotel ist zertifizierter Partner von „Reisen für Alle\". Sandstrand und Stadtzentrum liegen jeweils rund drei Gehminuten entfernt. Frühstücksbuffet und Sauna gehören dazu.",
    "website": "https://www.jann-von-norderney.de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Barrierefreies Hotel Jann von Norderney an der Halemstraße (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Hotel Jann von Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Hotel Jann von Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Hotel Jann von Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Hotel Jann von Norderney auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "villa-ney",
    "name": "Villa NEY",
    "kategorie": "hotel",
    "lage": "stadt",
    "preisniveau": "€€",
    "tag": "Hotel garni · 17 Zimmer",
    "meta": "Gartenstraße 59 · am Kurtheater",
    "beschreibung": "Hotel garni mit 17 Zimmern im historischen Zentrum am Kurtheater. Zum Kurplatz sind es nach eigenen Angaben etwa drei Gehminuten, zum Nordseestrand rund fünf. Das Frühstück ist im Zimmerpreis enthalten, ein Teil der Zimmer hat einen Balkon. Die Rezeption ist täglich besetzt.",
    "website": "https://www.villa-ney.de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Boutique Hotel garni Villa NEY im historischen Zentrum von Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Villa NEY (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Villa NEY (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Villa NEY (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Villa NEY auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "hotel-aquamarin",
    "name": "Hotel Aquamarin",
    "kategorie": "hotel",
    "lage": "stadt",
    "preisniveau": "€€",
    "tag": "Boutiquehotel",
    "meta": "Friedrichstraße 5 · rund 100 m zum Strand · Tel. 04932 9285-0",
    "beschreibung": "Boutiquehotel unmittelbar an Fußgängerzone, Einkaufsstraßen und Restaurants, etwa hundert Meter vom Nordseestrand entfernt. Das Haus wurde umfangreich renoviert und orientiert sich gestalterisch an der Bäderarchitektur um 1900. Es verfügt über einen Wellnessbereich.",
    "website": "https://hotel-aquamarin-norderney.de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Hotel Aquamarin in der Friedrichstraße Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Hotel Aquamarin (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Hotel Aquamarin (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Hotel Aquamarin (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Hotel Aquamarin auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "hotel-paula",
    "name": "Hotel Paula",
    "kategorie": "hotel",
    "lage": "stadt",
    "preisniveau": "€€",
    "tag": "Hotel · 22 Zimmer",
    "meta": "Bismarckstraße 10 · am Denkmal · rund 3 Min. zum Strand",
    "beschreibung": "Hotel mit 17 Doppelzimmern und 5 Einzelzimmern in zentrumsnaher Lage am Denkmal. Zehn Zimmer bieten seitlichen Meerblick, mehrere haben einen Balkon. Morgens gibt es ein Frühstücksbuffet im hauseigenen Frühstücksraum.",
    "website": "https://www.paula-norderney.de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Hotel Paula an der Bismarckstraße nahe dem Denkmal Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Hotel Paula (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Hotel Paula (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Hotel Paula (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Hotel Paula auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "inselhotel-ihnken",
    "name": "Inselhotel Ihnken",
    "kategorie": "hotel",
    "lage": "weststrand",
    "preisniveau": "€€",
    "tag": "Hotel · zwei Häuser",
    "meta": "Damenpfad 14 · rund 150 m zum Weststrand",
    "beschreibung": "Hotel in ruhiger Lage am Damenpfad, rund 150 Meter vom Weststrand und ebenso weit vom Stadtzentrum entfernt. Der Betrieb führt zwei Häuser, Ihnken und Cornelius, mit gemeinsamer Rezeption im Haus Ihnken. Es gibt allergikerfreundliche Zimmer mit Synthetikbettwaren, das ganze Haus ist Nichtraucherbereich. Bei Direktbuchung ist das Frühstück inbegriffen.",
    "website": "https://www.hotel-ihnken.de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Inselhotel Ihnken in ruhiger Lage am Damenpfad Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Inselhotel Ihnken (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Inselhotel Ihnken (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Inselhotel Ihnken (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Inselhotel Ihnken auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "hotel-ennen",
    "name": "Hotel &amp; Restaurant Ennen",
    "kategorie": "hotel",
    "lage": "weststrand",
    "preisniveau": "€€",
    "tag": "Hotel · Spa · Restaurant",
    "meta": "Luisenstraße 16 · westlicher Inselteil",
    "beschreibung": "Familiengeführtes Hotel im westlichen Inselteil mit angeschlossenem Restaurant, in dem abends à la carte serviert wird. Zum Haus gehören ein Spa- und Wellnessbereich mit Außensauna sowie ein Ruhebereich. Morgens gibt es ein Frühstücksbuffet. In einem separaten Gebäude am Deich vermietet der Betrieb zusätzlich Ferienwohnungen.",
    "website": "https://hotel-ennen.de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Familiengeführtes Hotel Ennen mit Spa-Bereich auf Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Hotel &amp; Restaurant Ennen (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Hotel &amp; Restaurant Ennen (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Hotel &amp; Restaurant Ennen (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Hotel &amp; Restaurant Ennen auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "haus-waidmannsheil",
    "name": "Haus Waidmannsheil",
    "kategorie": "pension",
    "lage": "stadt",
    "preisniveau": "€",
    "tag": "Frühstückspension · 8 Zimmer",
    "meta": "Knyphausenstraße · Mindestaufenthalt 6 Nächte",
    "beschreibung": "In dritter Generation inhabergeführte Frühstückspension mit acht Zimmern, davon drei Einzel- und fünf Doppelzimmer. Die Zimmer haben helle Duschbäder, einzelne Doppelzimmer zusätzlich eine Kochnische. Das Frühstück wird auf Wunsch gegen Aufpreis in der Veranda serviert. Wichtig zu wissen: Hunde sind nicht erlaubt und der Mindestaufenthalt beträgt sechs Nächte.",
    "website": "https://haus-waidmannsheil-norderney.de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstückspension Haus Waidmannsheil auf Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Haus Waidmannsheil (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Haus Waidmannsheil (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Haus Waidmannsheil (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Haus Waidmannsheil auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "pension-haus-menno-janssen",
    "name": "Pension Haus Menno Janssen",
    "kategorie": "pension",
    "lage": "stadt",
    "preisniveau": "€",
    "tag": "Pension · 5 Zimmer",
    "meta": "Tollestraße 6 · ruhige Seitenstraße",
    "beschreibung": "Inhabergeführte Pension mit fünf renovierten Zimmern in einer ruhigen Seitenstraße zwischen Innenstadt und Weststrand. Alle Zimmer haben ein eigenes Duschbad, dazu gibt es eine Veranda mit Tee- und Kaffeeecke. Das Frühstück wird in einem 150 Meter entfernten Partnerhotel angeboten und kostet extra.",
    "website": "http://www.tolle-pension-norderney.de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Inhabergeführte Pension Haus Menno Janssen in der Tollestraße (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Pension Haus Menno Janssen (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Pension Haus Menno Janssen (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Pension Haus Menno Janssen (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Pension Haus Menno Janssen auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "sommerloft-norderney",
    "name": "Sommerloft",
    "kategorie": "ferienwohnung",
    "lage": "stadt",
    "preisniveau": "€€",
    "tag": "Ferienwohnungen &amp; -häuser",
    "meta": "Winterstraße 8, Karlstraße 3, Südhoffstraße 3",
    "beschreibung": "Sieben Ferienwohnungen und drei Ferienhäuser in einem sanierten historischen Bäderhaus und einem alten Stadthaus zwischen Fußgängerzone und Strand. Die Räume verbinden hohe Decken und alte Stilelemente mit moderner Ausstattung. WLAN und Kinderbetten gehören dazu, SUP-Boards lassen sich leihen.",
    "website": "https://www.sommerloft.de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Ferienwohnung Sommerloft in einem sanierten Bäderhaus auf Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Sommerloft (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Sommerloft (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Sommerloft (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Sommerloft auf Norderney (Platzhalterbild)"
      }
    ]
  },
  {
    "id": "norderney-pur",
    "name": "Norderney_pur",
    "kategorie": "ferienwohnung",
    "lage": "weststrand",
    "preisniveau": "€€",
    "tag": "Ferienwohnungen · Meerblick",
    "meta": "Kaiserstraße Ecke Bismarckstraße · an der Promenade",
    "beschreibung": "Vier Ferienwohnungen mit Meerblick, verteilt auf die Häuser Nordseeblick und Kaiserhof an der Strandpromenade. Alle Wohnungen sind nach Osten ausgerichtet und blicken frei auf die Nordsee. Die Lage liegt am längsten Strandabschnitt der Insel.",
    "website": "https://norderney-pur.de/",
    "bild": "assets/images/platzhalter-karte.svg",
    "bilder": [
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Ferienwohnung mit Meerblick an der Strandpromenade Norderney (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Beispielzimmer in Norderney_pur (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Badezimmer in Norderney_pur (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Frühstücksbereich von Norderney_pur (Platzhalterbild)"
      },
      {
        "src": "assets/images/platzhalter-quer.svg",
        "alt": "Umgebung und Lage von Norderney_pur auf Norderney (Platzhalterbild)"
      }
    ]
  }
];
