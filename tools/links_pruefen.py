#!/usr/bin/env python3
"""Interne Links aller Seiten prüfen:  python3 tools/links_pruefen.py

Prüft href/src in allen *.html, ob Zielseite, Datei und Sprungmarke (#id) existieren.
Platzhalter in eckigen Klammern, externe Links, mailto: und tel: werden übersprungen.
"""
import html.parser, pathlib, re, sys, json
from urllib.parse import urlsplit, parse_qs, unquote

ROOT = pathlib.Path(__file__).resolve().parent.parent

class P(html.parser.HTMLParser):
    def __init__(s): super().__init__(); s.links=[]; s.ids=set()
    def handle_starttag(s, tag, attrs):
        a=dict(attrs)
        if 'id' in a: s.ids.add(a['id'])
        for k in ('href','src'):
            if a.get(k): s.links.append((tag,a[k],s.getpos()[0]))
        if a.get('srcset'):
            for part in a['srcset'].split(','): s.links.append((tag,part.strip().split(' ')[0],s.getpos()[0]))

def main():
    seiten={}
    for f in ROOT.glob('*.html'):
        p=P(); p.feed(f.read_text(encoding='utf-8')); seiten[f.name]=p
    betriebe_ids={e['id'] for e in json.loads((ROOT/'daten/betriebe.json').read_text(encoding='utf-8'))['eintraege']}
    fehler=0
    for name,p in sorted(seiten.items()):
        for tag,link,zeile in p.links:
            if '[' in link or re.match(r'^(https?:|mailto:|tel:|data:|javascript:)',link): continue
            u=urlsplit(link); pfad=unquote(u.path)
            if pfad=='' : ziel=name
            elif pfad=='/': ziel='index.html'
            else:
                pfad=pfad.lstrip('/')
                if (ROOT/pfad).is_file(): ziel=pfad
                elif (ROOT/(pfad+'.html')).is_file(): ziel=pfad+'.html'
                else:
                    print(f'{name}:{zeile}: Ziel fehlt: {link}'); fehler+=1; continue
            q=parse_qs(u.query)
            if pfad and ziel=='anbieter.html':
                print(f'{name}:{zeile}: alte Adresse /anbieter, bitte /eintrag?id=... verwenden: {link}'); fehler+=1
            if pfad and ziel=='eintrag.html' and q.get('id',[''])[0] not in betriebe_ids:
                print(f'{name}:{zeile}: unbekannte Eintrags-ID: {link}'); fehler+=1
            if u.fragment and ziel in seiten and u.fragment not in seiten[ziel].ids:
                print(f'{name}:{zeile}: Sprungmarke fehlt: {link}'); fehler+=1
    print(f'{fehler} Fehler in {len(seiten)} Seiten.')
    return 1 if fehler else 0

if __name__=='__main__': sys.exit(main())
