#!/usr/bin/env python3
"""Norderney Guide – gemeinsame Bausteine in alle Seiten übernehmen.

Footer (und weitere Bausteine) stehen nur EINMAL in partials/<name>.html.
In jeder Seite markieren Kommentare die Stelle:

    <!-- @footer -->  ...  <!-- /@footer -->

Aufruf im Projektordner:   python3 tools/layout.py

Das Skript ersetzt in allen *.html-Dateien im Hauptordner den Bereich
zwischen den Markierungen durch den Inhalt der passenden Partial-Datei.
"""
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
PARTIALS = ROOT / "partials"


def main():
    partials = {p.stem: p.read_text(encoding="utf-8").strip("\n") for p in PARTIALS.glob("*.html")}
    changed = 0
    for page in sorted(ROOT.glob("*.html")):
        text = page.read_text(encoding="utf-8")
        new = text
        for name, body in partials.items():
            pattern = re.compile(r"<!-- @%s -->.*?<!-- /@%s -->" % (name, name), re.S)
            block = "<!-- @%s -->\n%s<!-- /@%s -->" % (name, body + "\n" if body else "", name)
            new = pattern.sub(lambda m: block, new)
        if new != text:
            page.write_text(new, encoding="utf-8")
            changed += 1
            print("aktualisiert:", page.name)
    print(f"{changed} Seite(n) geändert.")


if __name__ == "__main__":
    sys.exit(main())
