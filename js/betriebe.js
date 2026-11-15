/* ==========================================================================
   Norderney Guide — Einträge von Betrieben
   Daten: daten/betriebe.json (Anleitung: docs/eintraege.md)

   - Auf Kategorieseiten: <section data-betriebe-bereich hidden> mit
     <div data-betriebe="kategorie1,kategorie2"> wird mit Karten gefüllt.
   - Auf eintrag.html?id=... wird die Detailseite aufgebaut.
   Der Button-Text hängt fest an der Kategorie, der Betrieb wählt ihn nicht.
   ========================================================================== */
(function () {
  var KATEGORIEN = {
    'unterkuenfte':           { label: 'Unterkunft',               knopf: 'Jetzt buchen',      buchung: true,  seite: '/unterkuenfte',         schema: 'LodgingBusiness' },
    'restaurants-cafes':      { label: 'Restaurant & Café',        knopf: 'Tisch reservieren', buchung: true,  seite: '/essen-trinken',        schema: 'Restaurant' },
    'bars':                   { label: 'Bar',                      knopf: 'Zur Webseite',      buchung: false, seite: '/essen-trinken',        schema: 'BarOrPub' },
    'geschaefte-mode':        { label: 'Geschäft & Mode',          knopf: 'Zum Shop',          buchung: false, seite: '/geschaefte-einkaufen', schema: 'Store' },
    'freizeit-aktivitaeten':  { label: 'Freizeit & Aktivität',     knopf: 'Jetzt buchen',      buchung: true,  seite: '/aktivitaeten',         schema: 'TouristAttraction' },
    'fahrradverleih-service': { label: 'Fahrradverleih & Service', knopf: 'Zur Webseite',      buchung: false, seite: '/mobilitaet',           schema: 'LocalBusiness' }
  };
  window.NG_KATEGORIEN = KATEGORIEN;

  var ICON_INFO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/></svg>';

  // Alles, was aus der JSON-Datei kommt, wird maskiert (Betriebe liefern die Texte).
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
  function datum(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
    return m ? m[3] + '.' + m[2] + '.' + m[1] : esc(iso);
  }
  function adresse(e) {
    var a = e.adresse || {};
    return [a.strasse, [a.plz, a.ort].filter(Boolean).join(' ')].filter(Boolean).join(', ');
  }
  function fotos(e) {
    var f = (e.fotos || []).filter(function (b) { return b && b.src; }).slice(0, 6);
    return f.length ? f : [{ src: 'assets/images/platzhalter-quer.svg', alt: '' }];
  }
  function ziellink(e) {
    var k = KATEGORIEN[e.kategorie] || {};
    return k.buchung ? (url(e.buchungslink) || url(e.webseite)) : (url(e.webseite) || url(e.buchungslink));
  }
  function knopf(e, extraKlasse) {
    var k = KATEGORIEN[e.kategorie];
    var ziel = ziellink(e);
    if (!k || !ziel) return '';
    return '<a href="' + esc(ziel) + '" target="_blank" rel="noopener" class="btn btn-primary ' + (extraKlasse || '') + '">' + k.knopf + '</a>';
  }
  function hinweise(e) {
    return '<p class="eintrag-hinweis">Zuletzt aktualisiert: ' + datum(e.zuletzt_aktualisiert) +
      ' · Angaben vom Betrieb, ohne Gewähr · <a href="/kontakt?eintrag=' + encodeURIComponent(e.id) + '#frag-luis">Fehler melden</a></p>';
  }
  function tipp(e) {
    if (!e.luis_tipp) return '';
    return '<div class="luis-tipp"><span class="luis-tipp-badge">Luis’ Tipp</span><p>' + esc(e.luis_tipp) + '</p></div>';
  }
  function tags(e) {
    var k = KATEGORIEN[e.kategorie] || {};
    return '<div class="card-tags-row">' +
      (e.beispiel ? '<span class="card-tag card-tag--beispiel">Beispiel</span>' : '') +
      '<span class="card-tag">' + esc(k.label || '') + '</span>' +
      (e.preisniveau ? '<span class="price-badge">' + esc(e.preisniveau) + '</span>' : '') +
      '</div>';
  }

  function karte(e) {
    var bild = fotos(e)[0];
    var detail = '/eintrag?id=' + encodeURIComponent(e.id);
    return '<div class="card card--eintrag' + (e.beispiel ? ' is-beispiel' : '') + '">' +
      '<a class="card-media" href="' + detail + '"><img src="' + esc(bild.src) + '" alt="' + esc(bild.alt || e.name) + '" loading="lazy"></a>' +
      '<div class="card-body">' +
        tags(e) +
        '<h3><a href="' + detail + '">' + esc(e.name) + '</a></h3>' +
        (adresse(e) ? '<p class="card-meta">' + esc(adresse(e)) + '</p>' : '') +
        '<p class="desc">' + esc(e.kurzbeschreibung) + '</p>' +
        tipp(e) +
        '<div class="card-foot">' + knopf(e, 'btn-sm') +
          '<a href="' + detail + '" class="btn btn-outline btn-sm">Details</a></div>' +
        hinweise(e) +
      '</div>' +
    '</div>';
  }

  function laden() {
    return fetch('daten/betriebe.json', { cache: 'no-cache' })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (d) { return (d.eintraege || []).filter(function (e) { return e && e.id && KATEGORIEN[e.kategorie]; }); });
  }
  window.NG_BETRIEBE_LADEN = laden;

  // ---------- Kategorieseiten ----------
  var listen = document.querySelectorAll('[data-betriebe]');
  if (listen.length) {
    laden().then(function (alle) {
      listen.forEach(function (liste) {
        var kats = liste.getAttribute('data-betriebe').split(',');
        var treffer = alle.filter(function (e) { return kats.indexOf(e.kategorie) !== -1; });
        if (!treffer.length) return;
        liste.innerHTML = treffer.map(karte).join('');
        var bereich = liste.closest('[data-betriebe-bereich]');
        if (bereich) bereich.hidden = false;
      });
    }).catch(function () { /* Ohne Daten bleibt der Bereich einfach ausgeblendet. */ });
  }

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

    var zeilen = [];
    if (adresse(e)) zeilen.push(['Adresse', esc(adresse(e))]);
    if (oz.sommer) zeilen.push(['Öffnungszeiten Sommer', esc(oz.sommer)]);
    if (oz.winter) zeilen.push(['Öffnungszeiten Winter', esc(oz.winter)]);
    if (e.preisniveau) zeilen.push(['Preisniveau', esc(e.preisniveau)]);
    if (e.telefon) zeilen.push(['Telefon', '<a href="tel:' + esc(String(e.telefon).replace(/[^\d+]/g, '')) + '">' + esc(e.telefon) + '</a>']);
    if (url(e.webseite)) zeilen.push(['Webseite', '<a href="' + esc(url(e.webseite)) + '" target="_blank" rel="noopener">' + esc(url(e.webseite).replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')) + '</a>']);
    if (url(e.instagram)) zeilen.push(['Instagram', '<a href="' + esc(url(e.instagram)) + '" target="_blank" rel="noopener">Profil ansehen</a>']);
    var eckdaten = zeilen.map(function (z) { return '<div class="kv-row"><dt>' + z[0] + '</dt><dd>' + z[1] + '</dd></div>'; }).join('');

    var vorschau = bilder.length > 1 ? bilder.map(function (b, i) {
      return '<button class="galerie-vorschau' + (i === 0 ? ' is-active' : '') + '" type="button" data-index="' + i + '" aria-label="Bild ' + (i + 1) + ' von ' + bilder.length + ' anzeigen"><img src="' + esc(b.src) + '" alt="" loading="lazy"></button>';
    }).join('') : '';
    var pfeile = bilder.length > 1 ?
      '<button class="galerie-pfeil galerie-pfeil--zurueck" type="button" aria-label="Vorheriges Bild"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button>' +
      '<button class="galerie-pfeil galerie-pfeil--vor" type="button" aria-label="Nächstes Bild"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button>' : '';

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
        '<div class="anbieter-text">' + tipp(e) +
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
