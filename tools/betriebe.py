#!/usr/bin/env python3
"""Norderney Guide – Übersichtsseiten der Betriebe aus daten/betriebe.json schreiben.

Alle Betriebe stehen nur EINMAL in daten/betriebe.json. Dieses Skript schreibt
daraus die Karten samt Filtern fest ins HTML der Übersichtsseiten (gut für
Google und für Besucher ohne JavaScript). In jeder Seite markieren Kommentare
die Stelle:

    <!-- @betriebe -->  ...  <!-- /@betriebe -->

Aufruf im Projektordner, nach jeder Änderung an daten/betriebe.json:

    python3 tools/betriebe.py

Das Skript
  - prüft die Einträge (Kategorie, Quelle, erlaubte Filterwerte) und meldet Fehler,
  - schreibt Filter und Karten in die Seiten aus SEITEN (unten),
  - schreibt js/betriebe-felder.js (Bezeichnungen für die Detailseite),
  - trägt alle echten Einträge (nicht die Beispiele) in sitemap.xml ein.
"""
import html
import json
import pathlib
import re
import sys
import urllib.parse

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATEN = ROOT / "daten" / "betriebe.json"

# ---------------------------------------------------------------------------
# Kategorien: Button-Text hängt fest an der Kategorie, der Betrieb wählt ihn nicht.
KATEGORIEN = {
    "unterkuenfte":           {"label": "Unterkunft",               "knopf": "Jetzt buchen",      "seite": "/unterkuenfte",         "schema": "LodgingBusiness"},
    "restaurants-cafes":      {"label": "Restaurant & Café",        "knopf": "Tisch reservieren", "seite": "/essen-trinken",        "schema": "Restaurant"},
    "bars":                   {"label": "Bar",                      "knopf": "Zur Webseite",      "seite": "/essen-trinken",        "schema": "BarOrPub"},
    "geschaefte-mode":        {"label": "Geschäft & Mode",          "knopf": "Zum Shop",          "seite": "/geschaefte-einkaufen", "schema": "Store"},
    "freizeit-aktivitaeten":  {"label": "Freizeit & Aktivität",     "knopf": "Jetzt buchen",      "seite": "/aktivitaeten",         "schema": "TouristAttraction"},
    "fahrradverleih-service": {"label": "Fahrradverleih & Service", "knopf": "Zur Webseite",      "seite": "/mobilitaet",           "schema": "LocalBusiness"},
}

# Erlaubte Werte der Filterfelder (Schlüssel → Anzeige). Reihenfolge = Reihenfolge der Filter-Knöpfe.
FELDER = {
    "art": {"hotel": "Hotel", "ferienwohnung": "Ferienwohnung", "pension": "Pension", "vermittlung": "Vermittlung"},
    "lage": {"weststrand": "Weststrand", "oststrand": "Oststrand", "nordstrand": "Nordstrand", "stadt": "Inselmitte & Stadt"},
    "kueche": {"fisch": "Fisch", "deutsch-regional": "Deutsch & regional", "italienisch": "Italienisch",
               "mediterran": "Mediterran", "asiatisch": "Asiatisch", "vegetarisch-vegan": "Vegetarisch & vegan",
               "cafe": "Café & Kuchen", "eis": "Eis", "imbiss": "Imbiss"},
    "sortiment": {"supermarkt": "Supermarkt", "baeckerei": "Bäckerei", "lebensmittel": "Lebensmittel & Feinkost",
                  "cafe": "Café", "mode": "Mode & Schuhe", "souvenirs": "Souvenirs & Geschenke", "schmuck": "Schmuck",
                  "apotheke": "Apotheke", "drogerie": "Drogerie & Kosmetik", "buch": "Bücher", "blumen": "Blumen",
                  "fahrrad": "Fahrrad", "bank": "Bank", "post": "Post", "dienstleistung": "Dienstleistung"},
    "thema": {"aktiv": "Aktiv & Sport", "familie": "Familie", "kultur": "Kultur", "natur": "Natur"},
    "preisniveau": {"€": "€ günstig", "€€": "€€ mittel", "€€€": "€€€ gehoben"},
}
# Welche Felder zu welcher Kategorie gehören (zusätzlich zu den gemeinsamen Feldern)
KATEGORIE_FELDER = {
    "unterkuenfte": ["art", "lage"],
    "restaurants-cafes": ["kueche", "reservierung_empfohlen"],
    "bars": ["kueche", "reservierung_empfohlen"],
    "geschaefte-mode": ["sortiment"],
    "freizeit-aktivitaeten": ["thema"],
    "fahrradverleih-service": [],
}
LISTENFELDER = {"kueche", "sortiment", "thema"}

HINWEIS = {
    "betrieb": "Angaben vom Betrieb, ohne Gewähr",
    "redaktion": "Von uns zusammengestellt, ohne Gewähr. Du bist der Betrieb? "
                 '<a href="/betrieb-eintragen?eintrag={id}">Übernimm deinen Eintrag.</a>',
}

# ---------------------------------------------------------------------------
# Seiten und ihre Filter. "fest": Knöpfe für alle erlaubten Werte zeigen,
# sonst nur für Werte, die in den Einträgen tatsächlich vorkommen.
SEITEN = {
    "unterkuenfte.html": {
        "kategorien": ["unterkuenfte"],
        "filter": [("art", "Alle Arten", False), ("lage", "Alle Lagen", True), ("preisniveau", "Alle Preise", False)],
    },
    "essen-trinken.html": {
        "kategorien": ["restaurants-cafes", "bars"],
        "filter": [("kategorie", "Alles", False), ("kueche", "Jede Küche", False), ("reservierung_empfohlen", "Egal", False)],
    },
    "geschaefte-einkaufen.html": {
        "kategorien": ["geschaefte-mode"],
        "filter": [("sortiment", "Alle", False)],
    },
    "aktivitaeten.html": {
        "kategorien": ["freizeit-aktivitaeten"],
        "filter": [("thema", "Alle", False)],
    },
    "mobilitaet.html": {
        "kategorien": ["fahrradverleih-service"],
        "filter": [],
    },
}

ICON_UHR = ('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" '
            'stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>')


def esc(s):
    return html.escape(str(s if s is not None else ""), quote=True)


def web(u):
    u = str(u or "").strip()
    return u if re.match(r"^https?://", u, re.I) else ""


def tel_link(t):
    ziffern = re.sub(r"[^\d+]", "", str(t or ""))
    if not ziffern:
        return ""
    if ziffern.startswith("00"):
        ziffern = "+" + ziffern[2:]
    elif ziffern.startswith("0"):
        ziffern = "+49" + ziffern[1:]
    return "tel:" + ziffern


def route_link(e):
    a = e.get("adresse") or {}
    if not a.get("strasse"):
        return ""
    q = ", ".join(x for x in [a.get("strasse"), " ".join(x for x in [a.get("plz"), a.get("ort")] if x)] if x)
    return "https://www.openstreetmap.org/search?query=" + urllib.parse.quote(q)


def knopf(e):
    """Der Button nimmt das Erste, was vorhanden ist. Gibt (Text, Link, extern) zurück."""
    k = KATEGORIEN[e["kategorie"]]
    if web(e.get("buchungslink")):
        return k["knopf"], web(e["buchungslink"]), True
    if web(e.get("webseite")):
        return k["knopf"], web(e["webseite"]), True
    if web(e.get("instagram")):
        return "Zu Instagram", web(e["instagram"]), True
    if tel_link(e.get("telefon")):
        return "Anrufen", tel_link(e["telefon"]), False
    if route_link(e):
        return "Route anzeigen", route_link(e), True
    return None


def datum(iso):
    m = re.match(r"^(\d{4})-(\d{2})-(\d{2})$", iso or "")
    return f"{m[3]}.{m[2]}.{m[1]}" if m else esc(iso)


def filterwerte(e, feld):
    if feld == "kategorie":
        return [e["kategorie"]]
    if feld == "reservierung_empfohlen":
        return ["ja" if e.get("reservierung_empfohlen") else "nein"]
    v = e.get(feld)
    if isinstance(v, list):
        return [x for x in v if x]
    return [v] if v else []


def attr_name(feld):
    return {"reservierung_empfohlen": "reservierung", "preisniveau": "preis"}.get(feld, feld)


# ---------------------------------------------------------------------------
warnungen = []


def pruefen(eintraege):
    fehler = []
    ids = set()
    for i, e in enumerate(eintraege):
        wer = e.get("id") or f"Eintrag Nr. {i + 1}"
        if not e.get("id") or not re.match(r"^[a-z0-9-]+$", e["id"]):
            fehler.append(f"{wer}: 'id' fehlt oder enthält andere Zeichen als a-z, 0-9 und -")
        if e.get("id") in ids:
            fehler.append(f"{wer}: 'id' kommt doppelt vor")
        ids.add(e.get("id"))
        if not e.get("name"):
            fehler.append(f"{wer}: 'name' fehlt")
        if e.get("kategorie") not in KATEGORIEN:
            fehler.append(f"{wer}: unbekannte Kategorie '{e.get('kategorie')}'")
            continue
        if e.get("quelle") not in HINWEIS:
            fehler.append(f"{wer}: 'quelle' muss 'betrieb' oder 'redaktion' sein")
        for feld in ("art", "lage", "kueche", "sortiment", "thema", "preisniveau"):
            for w in filterwerte(e, feld):
                if w not in FELDER[feld]:
                    fehler.append(f"{wer}: Wert '{w}' bei '{feld}' ist nicht erlaubt (erlaubt: {', '.join(FELDER[feld])})")
        if knopf(e) is None:
            warnungen.append(f"{wer}: weder Link noch Telefon noch Adresse – der Eintrag hat keinen Button")
    return fehler


# ---------------------------------------------------------------------------
def karte(e):
    k = KATEGORIEN[e["kategorie"]]
    detail = "/eintrag?id=" + urllib.parse.quote(e["id"])
    fotos = [f for f in (e.get("fotos") or []) if f and f.get("src")]
    bild = fotos[0] if fotos else {"src": "assets/images/platzhalter-karte.svg", "alt": ""}
    platzhalter = ' data-placeholder="true"' if "platzhalter" in bild["src"] else ""

    daten = [f'data-kategorie="{esc(e["kategorie"])}"']
    for feld in ("art", "lage", "preisniveau", "kueche", "reservierung_empfohlen", "sortiment", "thema"):
        if feld in KATEGORIE_FELDER[e["kategorie"]] or feld == "preisniveau":
            werte = filterwerte(e, feld)
            if werte:
                daten.append(f'data-{attr_name(feld)}="{esc(" ".join(werte))}"')

    tags = []
    if e.get("beispiel"):
        tags.append('<span class="card-tag card-tag--beispiel">Beispiel</span>')
    tags.append(f'<span class="card-tag">{esc(e.get("untertitel") or k["label"])}</span>')
    if e.get("preisniveau"):
        tags.append(f'<span class="price-badge">{esc(e["preisniveau"])}</span>')

    meta = " · ".join(x for x in [(e.get("adresse") or {}).get("strasse"), e.get("kurzinfo")] if x)
    oz = e.get("oeffnungszeiten") or {}
    zeiten = oz.get("allgemein") or " · ".join(x for x in [
        ("Sommer: " + oz["sommer"]) if oz.get("sommer") else "", ("Winter: " + oz["winter"]) if oz.get("winter") else ""] if x)
    merkmale = []
    if e.get("reservierung_empfohlen"):
        merkmale.append('<span class="merkmal">Reservierung empfohlen</span>')

    kn = knopf(e)
    knopf_html = ""
    if kn:
        text, link, extern = kn
        ziel = ' target="_blank" rel="noopener"' if extern else ""
        knopf_html = f'<a href="{esc(link)}"{ziel} class="btn btn-primary btn-sm">{esc(text)}</a>'

    teile = [
        f'        <div class="card card--eintrag{" is-beispiel" if e.get("beispiel") else ""}" id="{esc(e["id"])}" data-betrieb-karte {" ".join(daten)}>',
        f'          <a class="card-media" href="{detail}" aria-label="Details zu {esc(e["name"])}"><img src="{esc(bild["src"])}" alt="{esc(bild.get("alt") or e["name"])}" loading="lazy"{platzhalter}></a>',
        '          <div class="card-body">',
        f'            <div class="card-tags-row">{"".join(tags)}</div>',
        f'            <h3><a href="{detail}">{esc(e["name"])}</a></h3>',
    ]
    if meta:
        teile.append(f'            <p class="card-meta">{esc(meta)}</p>')
    if zeiten:
        teile.append(f'            <p class="card-hours">{ICON_UHR}{esc(zeiten)}</p>')
    if merkmale:
        teile.append(f'            <p class="merkmale">{"".join(merkmale)}</p>')
    teile.append(f'            <p class="desc">{esc(e.get("kurzbeschreibung"))}</p>')
    if e.get("luis_tipp"):
        teile.append(f'            <div class="luis-tipp"><span class="luis-tipp-badge">Luis’ Tipp</span><p>{esc(e["luis_tipp"])}</p></div>')
    teile += [
        f'            <div class="card-foot">{knopf_html}<a href="{detail}" class="btn btn-outline btn-sm">Details</a></div>',
        '            ' + hinweis(e),
        '          </div>',
        '        </div>',
    ]
    return "\n".join(teile)


def hinweis(e):
    return ('<p class="eintrag-hinweis">Zuletzt aktualisiert: ' + datum(e.get("zuletzt_aktualisiert")) + " · "
            + HINWEIS[e["quelle"]].format(id=urllib.parse.quote(e["id"])) + " · "
            + f'<a href="/kontakt?eintrag={urllib.parse.quote(e["id"])}#frag-luis">Fehler melden</a></p>')


def filterleiste(feld, alle_text, fest, eintraege):
    if feld == "kategorie":
        werte = {k: KATEGORIEN[k]["label"].replace("Restaurant & Café", "Restaurants & Cafés").replace("Bar", "Bars")
                 for k in dict.fromkeys(e["kategorie"] for e in eintraege)}
        titel = "Art"
    elif feld == "reservierung_empfohlen":
        werte = {"ja": "Reservierung empfohlen"}
        titel = "Reservierung"
    else:
        vorhanden = {w for e in eintraege for w in filterwerte(e, feld)}
        werte = {k: v for k, v in FELDER[feld].items() if fest or k in vorhanden}
        titel = {"art": "Art", "lage": "Lage", "preisniveau": "Preis", "kueche": "Küche",
                 "sortiment": "Sortiment", "thema": "Thema"}[feld]
    if len(werte) < 2 and feld != "reservierung_empfohlen":
        return ""
    knoepfe = [f'<button class="pill is-active" type="button" data-filter="alle">{esc(alle_text)}</button>']
    knoepfe += [f'<button class="pill" type="button" data-filter="{esc(k)}">{esc(v)}</button>' for k, v in werte.items()]
    return (f'      <div class="filter-bar pill-row" role="group" aria-label="Filter: {esc(titel)}" '
            f'data-filter-group="[data-betrieb-karte]" data-filter-attr="{attr_name(feld)}">\n'
            f'        <span class="filter-titel">{esc(titel)}</span>\n        '
            + "\n        ".join(knoepfe) + "\n      </div>")


def block(seite, alle):
    cfg = SEITEN[seite]
    eintraege = [e for e in alle if e["kategorie"] in cfg["kategorien"]]
    # Beispiele immer ans Ende
    eintraege = [e for e in eintraege if not e.get("beispiel")] + [e for e in eintraege if e.get("beispiel")]
    teile = ["<!-- @betriebe -->",
             "      <!-- Automatisch erzeugt aus daten/betriebe.json mit: python3 tools/betriebe.py – hier nichts von Hand ändern. -->"]
    leisten = [filterleiste(f, t, fest, eintraege) for f, t, fest in cfg["filter"]]
    teile += [x for x in leisten if x]
    teile.append('      <div class="card-grid">')
    teile += [karte(e) for e in eintraege]
    teile.append("      </div>")
    if any(leisten):
        teile.append('      <p class="filter-leer" data-filter-leer="[data-betrieb-karte]" hidden>Zu dieser Auswahl gibt es '
                     'noch keinen Eintrag. Probier einen anderen Filter.</p>')
    teile.append("      <!-- /@betriebe -->")
    return "\n".join(teile), len(eintraege)


def felder_js():
    daten = {"kategorien": KATEGORIEN, "felder": FELDER, "kategorieFelder": KATEGORIE_FELDER, "hinweis": HINWEIS}
    return ("/* Automatisch erzeugt von tools/betriebe.py – nicht von Hand ändern. */\n"
            "window.NG_FELDER = " + json.dumps(daten, ensure_ascii=False, indent=2) + ";\n")


def sitemap(eintraege):
    pfad = ROOT / "sitemap.xml"
    if not pfad.exists():
        return
    text = pfad.read_text(encoding="utf-8")
    m = re.search(r"<loc>(https?://[^/<]+)/", text)
    basis = m.group(1) if m else "https://[DOMAIN]"
    text = re.sub(r"[ \t]*<url><loc>[^<]*/(?:anbieter|eintrag)\?id=[^<]*</loc>.*?</url>\n", "", text)
    zeilen = "".join(
        f"  <url><loc>{basis}/eintrag?id={esc(e['id'])}</loc><lastmod>{esc(e.get('zuletzt_aktualisiert', ''))}</lastmod></url>\n"
        for e in eintraege if not e.get("beispiel"))
    text = text.replace("</urlset>", zeilen + "</urlset>")
    pfad.write_text(text, encoding="utf-8")


def main():
    daten = json.loads(DATEN.read_text(encoding="utf-8"))
    eintraege = daten.get("eintraege") or []
    fehler = pruefen(eintraege)
    if fehler:
        print("Bitte zuerst in daten/betriebe.json korrigieren:")
        for f in fehler:
            print("  -", f)
        return 1
    for seite in SEITEN:
        pfad = ROOT / seite
        text = pfad.read_text(encoding="utf-8")
        neu, anzahl = block(seite, eintraege)
        muster = re.compile(r"<!-- @betriebe -->.*?<!-- /@betriebe -->", re.S)
        if not muster.search(text):
            print(f"WARNUNG: {seite} hat keine Markierung <!-- @betriebe -->")
            continue
        text2 = muster.sub(lambda m: neu, text)
        if text2 != text:
            pfad.write_text(text2, encoding="utf-8")
        print(f"{seite}: {anzahl} Einträge")
    (ROOT / "js" / "betriebe-felder.js").write_text(felder_js(), encoding="utf-8")
    sitemap(eintraege)
    for w in warnungen:
        print("Hinweis:", w)
    print(f"Fertig. {len(eintraege)} Einträge geprüft, sitemap.xml und js/betriebe-felder.js aktualisiert.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
