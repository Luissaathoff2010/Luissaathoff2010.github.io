/* ==========================================================================
   Norderney Guide — Einträge von Betrieben
   Daten: daten/betriebe.json (Anleitung: docs/eintraege.md)
   Bezeichnungen und Button-Texte: js/betriebe-felder.js (erzeugt von tools/betriebe.py)

   - Die Karten auf den Übersichtsseiten schreibt tools/betriebe.py fest ins HTML.
   - Dieses Skript baut nur die Detailseite eintrag.html?id=... auf und stellt
     NG_BETRIEBE_LADEN für die Karte (js/karte.js) bereit.
   Button-Logik (gleich wie in tools/betriebe.py): Buchungslink → Webseite →
   Instagram → Anrufen → Route anzeigen. Der Button-Text hängt an der Kategorie.
   ========================================================================== */
(function () {
  var F = window.NG_FELDER || { kategorien: {}, felder: {}, kategorieFelder: {}, hinweis: {} };
  var KATEGORIEN = F.kategorien;
  window.NG_KATEGORIEN = KATEGORIEN;

  var ICON_INFO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/></svg>';

  // Alles, was aus der JSON-Datei kommt, wird maskiert.
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  // Nur echte Web-Adressen als Link zulassen
  function url(u) {
    u = String(u || '').trim();
    return /^https?:\/\//i.test(u) ? u : '';
  }
  function telLink(t) {
    var z = String(t || '').replace(/[^\d+]/g, '');
    if (!z) return '';
    if (z.indexOf('00') === 0) z = '+' + z.slice(2);
    else if (z.charAt(0) === '0') z = '+49' + z.slice(1);
    return 'tel:' + z;
  }
  function datum(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
    return m ? m[3] + '.' + m[2] + '.' + m[1] : esc(iso);
  }
  function adresse(e) {
    var a = e.adresse || {};
    return [a.strasse, [a.plz, a.ort].filter(Boolean).join(' ')].filter(Boolean).join(', ');
  }
  function routeLink(e) {
    var a = e.adresse || {};
    return a.strasse ? 'https://www.openstreetmap.org/search?query=' + encodeURIComponent(adresse(e)) : '';
  }
  function fotos(e) {
    var f = (e.fotos || []).filter(function (b) { return b && b.src; }).slice(0, 6);
    return f.length ? f : [{ src: 'assets/images/platzhalter-quer.svg', alt: '' }];
  }
  function knopfDaten(e) {
    var k = KATEGORIEN[e.kategorie] || {};
    if (url(e.buchungslink)) return [k.knopf, url(e.buchungslink), true];
    if (url(e.webseite)) return [k.knopf, url(e.webseite), true];
    if (url(e.instagram)) return ['Zu Instagram', url(e.instagram), true];
    if (telLink(e.telefon)) return ['Anrufen', telLink(e.telefon), false];
    if (routeLink(e)) return ['Route anzeigen', routeLink(e), true];
    return null;
  }
  function knopf(e) {
    var d = knopfDaten(e);
    if (!d) return '';
    return '<a href="' + esc(d[1]) + '"' + (d[2] ? ' target="_blank" rel="noopener"' : '') + ' class="btn btn-primary">' + esc(d[0]) + '</a>';
  }
  function hinweise(e) {
    var id = encodeURIComponent(e.id);
    var text = (F.hinweis[e.quelle] || F.hinweis.betrieb || '').replace('{id}', id);
    return '<p class="eintrag-hinweis">Zuletzt aktualisiert: ' + datum(e.zuletzt_aktualisiert) +
      ' · ' + text + ' · <a href="/kontakt?eintrag=' + id + '#frag-luis">Fehler melden</a></p>';
  }
  function tipp(e) {
    if (!e.luis_tipp) return '';
    return '<div class="luis-tipp"><span class="luis-tipp-badge">Luis’ Tipp</span><p>' + esc(e.luis_tipp) + '</p></div>';
  }
  function tags(e) {
    var k = KATEGORIEN[e.kategorie] || {};
    return '<div class="card-tags-row">' +
      (e.beispiel ? '<span class="card-tag card-tag--beispiel">Beispiel</span>' : '') +
      '<span class="card-tag">' + esc(e.untertitel || k.label || '') + '</span>' +
      (e.preisniveau ? '<span class="price-badge">' + esc(e.preisniveau) + '</span>' : '') +
      '</div>';
  }
  // Werte eines Filterfelds lesbar machen, z. B. ["fisch","cafe"] → "Fisch, Café & Kuchen"
  function lesbar(feld, wert) {
    var namen = (F.felder || {})[feld] || {};
    var liste = Array.isArray(wert) ? wert : (wert ? [wert] : []);
    return liste.map(function (w) { return namen[w] || w; }).join(', ');
  }

  function laden() {
    return fetch('daten/betriebe.json', { cache: 'no-cache' })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (d) { return (d.eintraege || []).filter(function (e) { return e && e.id && KATEGORIEN[e.kategorie]; }); });
  }
  window.NG_BETRIEBE_LADEN = laden;

  // ---------- Detailseite ----------
  var ziel = document.getElementById('eintrag-inhalt');
  if (!ziel) return;
  var id = new URLSearchParams(window.location.search).get('id');

  function nichtGefunden() {
    ziel.innerHTML = '<section class="page-hero page-hero--compact"><div class="container">' +
      '<p class="breadcrumb"><a href="/">Start</a> / Nicht gefunden</p>' +
      '<h1>Diesen Eintrag gibt es nicht</h1>' +
      '<p class="lede">Vielleicht wurde er umbenannt oder entfernt.</p>' +
      '<a href="/" class="btn btn-primary" style="margin-top:16px">Zur Startseite</a></div></section>';
  }

  laden().then(function (alle) {
    var e = alle.filter(function (x) { return x.id === id; })[0];
    if (!e) return nichtGefunden();
    var k = KATEGORIEN[e.kategorie];
    var bilder = fotos(e);
    var oz = e.oeffnungszeiten || {};
    var felder = F.kategorieFelder[e.kategorie] || [];

    var zeilen = [];
    if (adresse(e)) zeilen.push(['Adresse', esc(adresse(e)) + (e.kurzinfo ? '<br><span class="kv-zusatz">' + esc(e.kurzinfo) + '</span>' : '')]);
    else if (e.kurzinfo) zeilen.push(['Lage', esc(e.kurzinfo)]);
    if (felder.indexOf('art') !== -1 && e.art) zeilen.push(['Art', esc(lesbar('art', e.art))]);
    if (felder.indexOf('lage') !== -1 && e.lage) zeilen.push(['Lage', esc(lesbar('lage', e.lage))]);
    if (felder.indexOf('kueche') !== -1 && e.kueche && e.kueche.length) zeilen.push(['Küche', esc(lesbar('kueche', e.kueche))]);
    if (felder.indexOf('reservierung_empfohlen') !== -1) zeilen.push(['Reservierung', e.reservierung_empfohlen ? 'empfohlen' : 'nicht nötig']);
    if (felder.indexOf('sortiment') !== -1 && e.sortiment && e.sortiment.length) zeilen.push(['Sortiment', esc(lesbar('sortiment', e.sortiment))]);
    if (felder.indexOf('thema') !== -1 && e.thema && e.thema.length) zeilen.push(['Thema', esc(lesbar('thema', e.thema))]);
    if (oz.allgemein) zeilen.push(['Öffnungszeiten', esc(oz.allgemein)]);
    if (oz.sommer) zeilen.push(['Öffnungszeiten Sommer', esc(oz.sommer)]);
    if (oz.winter) zeilen.push(['Öffnungszeiten Winter', esc(oz.winter)]);
    if (e.preisniveau) zeilen.push(['Preisniveau', esc(e.preisniveau)]);
    if (e.telefon) zeilen.push(['Telefon', '<a href="' + esc(telLink(e.telefon)) + '">' + esc(e.telefon) + '</a>']);
    if (url(e.webseite)) zeilen.push(['Webseite', '<a href="' + esc(url(e.webseite)) + '" target="_blank" rel="noopener">' + esc(url(e.webseite).replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '').split('/')[0]) + '</a>']);
    if (url(e.instagram)) zeilen.push(['Instagram', '<a href="' + esc(url(e.instagram)) + '" target="_blank" rel="noopener">Profil ansehen</a>']);
    var eckdaten = zeilen.map(function (z) { return '<div class="kv-row"><dt>' + z[0] + '</dt><dd>' + z[1] + '</dd></div>'; }).join('');

    var vorschau = bilder.length > 1 ? bilder.map(function (b, i) {
      return '<button class="galerie-vorschau' + (i === 0 ? ' is-active' : '') + '" type="button" data-index="' + i + '" aria-label="Bild ' + (i + 1) + ' von ' + bilder.length + ' anzeigen"><img src="' + esc(b.src) + '" alt="" loading="lazy"></button>';
    }).join('') : '';
    var pfeile = bilder.length > 1 ?
      '<button class="galerie-pfeil galerie-pfeil--zurueck" type="button" aria-label="Vorheriges Bild"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button>' +
      '<button class="galerie-pfeil galerie-pfeil--vor" type="button" aria-label="Nächstes Bild"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button>' : '';

    var langtext = e.beschreibung && e.beschreibung !== e.kurzbeschreibung ? '<p>' + esc(e.beschreibung) + '</p>' : '';

    ziel.innerHTML =
      '<section class="page-hero page-hero--compact"><div class="container">' +
        '<p class="breadcrumb"><a href="/">Start</a> / <a href="' + k.seite + '">' + esc(k.label) + '</a> / ' + esc(e.name) + '</p>' +
        tags(e) +
        '<h1 style="margin-top:10px">' + esc(e.name) + '</h1>' +
        '<p class="lede">' + esc(e.kurzbeschreibung) + '</p>' +
      '</div></section>' +
      '<section class="section" style="padding-top:28px"><div class="container anbieter-layout">' +
        '<div class="anbieter-galerie"><div class="galerie"><div class="galerie-haupt">' +
          '<img id="galerie-gross" src="' + esc(bilder[0].src) + '" alt="' + esc(bilder[0].alt || e.name) + '">' +
          (bilder.length > 1 ? '<span class="galerie-zaehler"><span id="galerie-nr">1</span> / ' + bilder.length + '</span>' : '') + pfeile +
        '</div>' + (vorschau ? '<div class="galerie-leiste">' + vorschau + '</div>' : '') + '</div></div>' +
        '<div class="anbieter-text">' + langtext + tipp(e) +
          '<div class="eintrag-karte" data-eintrag-karte></div>' +
        '</div>' +
        '<aside class="anbieter-info">' +
          '<div class="info-block" style="padding:24px"><h3 style="font-size:1.05rem">Auf einen Blick</h3>' +
            '<div class="kv-list">' + eckdaten + '</div>' +
            '<div style="display:flex;flex-direction:column;gap:10px;margin-top:18px">' + knopf(e) + '</div>' +
          '</div>' +
          '<div class="notice">' + ICON_INFO + hinweise(e) + '</div>' +
        '</aside>' +
      '</div></section>' +
      '<section class="section--tight" style="padding-bottom:56px"><div class="container">' +
        '<a href="' + k.seite + '" class="btn btn-outline">Zurück zu ' + esc(k.label) + '</a>' +
      '</div></section>';

    document.title = e.name + ' auf Norderney — Norderney Guide';
    var beschr = document.querySelector('meta[name="description"]');
    if (beschr) beschr.setAttribute('content', String(e.kurzbeschreibung || '').slice(0, 155));
    var kanon = document.querySelector('link[rel="canonical"]');
    if (kanon) kanon.setAttribute('href', kanon.getAttribute('href').replace(/\/eintrag.*$/, '/eintrag?id=' + encodeURIComponent(e.id)));
    if (e.beispiel) {
      var robots = document.createElement('meta');
      robots.name = 'robots';
      robots.content = 'noindex';
      document.head.appendChild(robots);
    }

    // Strukturierte Daten nur für echte Einträge, nicht für Beispiele
    if (!e.beispiel) {
      var ld = { '@context': 'https://schema.org', '@type': k.schema, name: e.name, description: e.kurzbeschreibung };
      var a = e.adresse || {};
      if (a.strasse) ld.address = { '@type': 'PostalAddress', streetAddress: a.strasse, postalCode: a.plz, addressLocality: a.ort, addressCountry: 'DE' };
      if (e.telefon) ld.telephone = e.telefon;
      if (url(e.webseite)) ld.url = url(e.webseite);
      if (e.preisniveau) ld.priceRange = e.preisniveau;
      if (e.koordinaten && e.koordinaten.length === 2) ld.geo = { '@type': 'GeoCoordinates', latitude: e.koordinaten[0], longitude: e.koordinaten[1] };
      var s = document.createElement('script');
      s.type = 'application/ld+json';
      s.textContent = JSON.stringify(ld);
      document.head.appendChild(s);
    }

    document.dispatchEvent(new CustomEvent('ng:eintrag', { detail: e }));

    if (bilder.length < 2) return;
    var gross = document.getElementById('galerie-gross');
    var nummer = document.getElementById('galerie-nr');
    var knoepfe = ziel.querySelectorAll('.galerie-vorschau');
    var aktuell = 0;
    function zeige(i) {
      aktuell = (i + bilder.length) % bilder.length;
      gross.src = bilder[aktuell].src;
      gross.alt = bilder[aktuell].alt || e.name;
      nummer.textContent = aktuell + 1;
      knoepfe.forEach(function (b, n) { b.classList.toggle('is-active', n === aktuell); });
    }
    knoepfe.forEach(function (b) { b.addEventListener('click', function () { zeige(+b.getAttribute('data-index')); }); });
    ziel.querySelector('.galerie-pfeil--zurueck').addEventListener('click', function () { zeige(aktuell - 1); });
    ziel.querySelector('.galerie-pfeil--vor').addEventListener('click', function () { zeige(aktuell + 1); });
  }).catch(nichtGefunden);
})();
