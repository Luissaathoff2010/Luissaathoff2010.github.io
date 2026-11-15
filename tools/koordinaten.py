#!/usr/bin/env python3
"""Fehlende Koordinaten für Einträge in daten/betriebe.json ergänzen.

Fragt für jeden Eintrag ohne "koordinaten" (und nicht als Beispiel markiert) die
Adresse bei OpenStreetMap Nominatim ab und trägt [Breitengrad, Längengrad] ein.
Nur auf deinem eigenen Rechner ausführen (1 Anfrage pro Sekunde):

    python3 tools/koordinaten.py

Danach Marker auf der Karte prüfen; bei Bedarf Koordinaten von Hand korrigieren.
"""
import json
import pathlib
import time
import urllib.parse
import urllib.request

DATEI = pathlib.Path(__file__).resolve().parent.parent / "daten" / "betriebe.json"


def suche(adresse):
    url = "https://nominatim.openstreetmap.org/search?" + urllib.parse.urlencode(
        {"q": adresse, "format": "json", "limit": 1, "countrycodes": "de"})
    req = urllib.request.Request(url, headers={"User-Agent": "norderney-guide-koordinaten/1.0"})
    with urllib.request.urlopen(req, timeout=20) as r:
        treffer = json.load(r)
    return [round(float(treffer[0]["lat"]), 6), round(float(treffer[0]["lon"]), 6)] if treffer else None


def main():
    daten = json.loads(DATEI.read_text(encoding="utf-8"))
    geaendert = 0
    for e in daten.get("eintraege", []):
        if e.get("beispiel") or (e.get("koordinaten") and len(e["koordinaten"]) == 2):
            continue
        a = e.get("adresse") or {}
        adresse = ", ".join(x for x in [a.get("strasse"), f'{a.get("plz", "")} {a.get("ort", "")}'.strip()] if x)
        if not adresse:
            continue
        k = suche(adresse)
        print(f'{e["name"]}: {adresse} -> {k or "nicht gefunden"}')
        if k:
            e["koordinaten"] = k
            geaendert += 1
        time.sleep(1.1)
    if geaendert:
        DATEI.write_text(json.dumps(daten, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"{geaendert} Eintrag/Einträge ergänzt.")


if __name__ == "__main__":
    main()
