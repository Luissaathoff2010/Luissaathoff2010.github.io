#!/usr/bin/env python3
"""Alle offenen Platzhalter in eckigen Klammern auflisten -> docs/PLATZHALTER.md

Aufruf:  python3 tools/platzhalter.py
"""
import pathlib, re, collections

ROOT = pathlib.Path(__file__).resolve().parent.parent
MUSTER = re.compile(r"\[([A-ZÄÖÜ][A-ZÄÖÜ0-9 \-]*[A-ZÄÖÜ0-9])(?::[^\]]*|, [A-ZÄÖÜ]+)?\]")
DATEIEN = sorted([*ROOT.glob("*.html"), *ROOT.glob("partials/*.html"), *ROOT.glob("js/*.js"),
                  ROOT / "assets/data.js", ROOT / "daten/betriebe.json", ROOT / "sitemap.xml",
                  ROOT / "robots.txt", ROOT / "docs/tally-formulare.md"])
PARTIAL_SEITEN = "(steht über partials/ in jeder Seite – nur in partials/ ändern, dann tools/layout.py)"


def main():
    funde = collections.OrderedDict()
    partial_inhalt = "".join(p.read_text(encoding="utf-8") for p in ROOT.glob("partials/*.html"))
    for f in DATEIEN:
        if not f.exists():
            continue
        for nr, zeile in enumerate(f.read_text(encoding="utf-8").splitlines(), 1):
            for m in MUSTER.finditer(zeile):
                name = m.group(1)
                rel = f.relative_to(ROOT).as_posix()
                funde.setdefault(name, []).append((rel, nr, m.group(0), zeile.strip()))
    out = ["# Offene Platzhalter\n", "Erzeugt mit `python3 tools/platzhalter.py`. Nach dem Ersetzen erneut ausführen.\n",
           "Platzhalter aus `partials/` (Footer, Head) stehen in jeder Seite. Dort nur die Datei in `partials/` ändern und `python3 tools/layout.py` ausführen.\n"]
    for name, stellen in funde.items():
        # Seiten-Kopien von Partial-Inhalten ausblenden
        eigene = [s for s in stellen if s[0].startswith("partials/") or not s[0].endswith(".html") or s[3] not in partial_inhalt]
        seiten_kopien = len(stellen) - len(eigene)
        out.append(f"\n## [{name}] – {len(stellen)}×\n")
        if seiten_kopien:
            out.append(f"\n_{seiten_kopien} weitere Stellen in den Seiten {PARTIAL_SEITEN}_\n")
        out.append("\n| Datei | Zeile | Text |\n|---|---|---|\n")
        for rel, nr, txt, _ in eigene:
            out.append(f"| `{rel}` | {nr} | {txt.replace('|', '/')} |\n")
    (ROOT / "docs/PLATZHALTER.md").write_text("".join(out), encoding="utf-8")
    for name, stellen in funde.items():
        print(f"[{name}]: {len(stellen)}")


if __name__ == "__main__":
    main()
