// Norderney Guide — Detailseite eines Anbieters
// Liest die Adresse (z. B. /anbieter?id=hotel-friese), sucht den passenden Eintrag
// in assets/data.js und baut daraus Galerie und Detailangaben auf.

(function () {
  var ziel = document.getElementById('anbieter-inhalt');
  if (!ziel || typeof ANBIETER === 'undefined') return;

  var id = new URLSearchParams(window.location.search).get('id');
  var eintrag = ANBIETER.filter(function (a) { return a.id === id; })[0];

  // Kein oder unbekannter Eintrag: freundlicher Hinweis statt leerer Seite
  if (!eintrag) {
    ziel.innerHTML =
      '<section class="page-hero page-hero--compact"><div class="container">' +
      '<p class="breadcrumb"><a href="/">Start</a> / <a href="/unterkuenfte">Unterkünfte</a> / Nicht gefunden</p>' +
      '<h1>Diese Unterkunft kennen wir nicht</h1>' +
      '<p class="lede">Der Eintrag existiert nicht oder wurde umbenannt. In der Übersicht findest du alle Unterkünfte.</p>' +
      '</div></section>' +
      '<section class="section"><div class="container">' +
      '<a href="/unterkuenfte" class="btn btn-primary">Zurück zur Übersicht</a>' +
      '</div></section>';
    return;
  }

  function escape(s) {
    return String(s == null ? '' : s);
  }

  var kategorie = (typeof KATEGORIE_LABEL !== 'undefined' && KATEGORIE_LABEL[eintrag.kategorie]) || '';
  var lage = (typeof LAGE_LABEL !== 'undefined' && LAGE_LABEL[eintrag.lage]) || '';
  var bilder = eintrag.bilder && eintrag.bilder.length ? eintrag.bilder : [{ src: eintrag.bild, alt: eintrag.name }];

  // Vorschaubilder unter dem großen Bild
  var vorschau = bilder.map(function (b, i) {
    return '<button class="galerie-vorschau' + (i === 0 ? ' is-active' : '') + '" type="button"' +
           ' data-index="' + i + '" aria-label="Bild ' + (i + 1) + ' von ' + bilder.length + ' anzeigen">' +
           '<img src="' + escape(b.src) + '" alt="" loading="lazy" data-placeholder="true">' +
           '</button>';
  }).join('');

  // Eckdaten-Tabelle, nur gefüllte Felder
  var zeilen = [];
  if (kategorie) zeilen.push(['Art', kategorie]);
  if (lage) zeilen.push(['Lage', lage]);
  if (eintrag.preisniveau) zeilen.push(['Preisniveau', eintrag.preisniveau]);
  if (eintrag.meta) zeilen.push(['Adresse &amp; Details', eintrag.meta]);
  var eckdaten = zeilen.map(function (z) {
    return '<div class="kv-row"><dt>' + z[0] + '</dt><dd>' + z[1] + '</dd></div>';
  }).join('');

  var websiteKnopf = eintrag.website
    ? '<a href="' + escape(eintrag.website) + '" target="_blank" rel="noopener" class="btn btn-primary" style="justify-content:center">Zur offiziellen Website</a>'
    : '<span class="card-meta">Für diesen Anbieter ist uns keine offizielle Website bekannt.</span>';

  ziel.innerHTML =
    '<section class="page-hero page-hero--compact">' +
      '<div class="container">' +
        '<p class="breadcrumb"><a href="/">Start</a> / <a href="/unterkuenfte">Unterkünfte</a> / ' + escape(eintrag.name) + '</p>' +
        '<h1>' + escape(eintrag.name) + '</h1>' +
        (eintrag.tag ? '<p class="lede">' + escape(eintrag.tag) + (eintrag.preisniveau ? ' · ' + eintrag.preisniveau : '') + '</p>' : '') +
      '</div>' +
    '</section>' +

    '<section class="section" style="padding-top:28px">' +
      '<div class="container anbieter-layout">' +
        '<div class="anbieter-galerie">' +
          '<div class="galerie">' +
            '<div class="galerie-haupt">' +
              '<img id="galerie-gross" src="' + escape(bilder[0].src) + '" alt="' + escape(bilder[0].alt) + '" data-placeholder="true">' +
              '<span class="galerie-zaehler"><span id="galerie-nr">1</span> / ' + bilder.length + '</span>' +
              '<button class="galerie-pfeil galerie-pfeil--zurueck" type="button" aria-label="Vorheriges Bild">' +
                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>' +
              '</button>' +
              '<button class="galerie-pfeil galerie-pfeil--vor" type="button" aria-label="Nächstes Bild">' +
                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>' +
              '</button>' +
            '</div>' +
            '<div class="galerie-leiste">' + vorschau + '</div>' +
          '</div>' +
        '</div>' +

        '<div class="anbieter-text">' +
          '<div class="section-head" style="margin-bottom:14px">' +
            '<p class="eyebrow">Über die Unterkunft</p>' +
            '<h2>Was dich erwartet</h2>' +
          '</div>' +
          '<p>' + escape(eintrag.beschreibung) + '</p>' +
        '</div>' +

        '<aside class="anbieter-info">' +
          '<div class="info-block" style="padding:24px">' +
            '<h3 style="font-size:1.05rem">Auf einen Blick</h3>' +
            '<div class="kv-list">' + eckdaten + '</div>' +
            '<div style="display:flex;flex-direction:column;gap:10px;margin-top:18px">' + websiteKnopf + '</div>' +
          '</div>' +
          '<div class="notice">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/></svg>' +
            '<p>Norderney Guide nimmt keine Buchungen entgegen. Verfügbarkeit, Preise und Buchung findest du auf der offiziellen Seite des Anbieters.</p>' +
          '</div>' +
        '</aside>' +
      '</div>' +
    '</section>' +

    '<section class="section--tight" style="padding-bottom:56px">' +
      '<div class="container">' +
        '<a href="/unterkuenfte" class="btn btn-outline">Zurück zur Übersicht</a>' +
      '</div>' +
    '</section>';

  // Seitentitel und Beschreibung passend zum Eintrag setzen
  document.title = eintrag.name + ' auf Norderney | Norderney Guide';
  var beschr = document.querySelector('meta[name="description"]');
  if (beschr) beschr.setAttribute('content', eintrag.name + ' auf Norderney: ' + String(eintrag.beschreibung).slice(0, 120));

  // ---- Galerie-Steuerung ----
  var gross = document.getElementById('galerie-gross');
  var nummer = document.getElementById('galerie-nr');
  var knoepfe = ziel.querySelectorAll('.galerie-vorschau');
  var aktuell = 0;

  function zeige(i) {
    aktuell = (i + bilder.length) % bilder.length;
    gross.src = bilder[aktuell].src;
    gross.alt = bilder[aktuell].alt;
    nummer.textContent = aktuell + 1;
    knoepfe.forEach(function (k, n) { k.classList.toggle('is-active', n === aktuell); });
  }

  knoepfe.forEach(function (k) {
    k.addEventListener('click', function () { zeige(parseInt(k.getAttribute('data-index'), 10)); });
  });
  ziel.querySelector('.galerie-pfeil--zurueck').addEventListener('click', function () { zeige(aktuell - 1); });
  ziel.querySelector('.galerie-pfeil--vor').addEventListener('click', function () { zeige(aktuell + 1); });

  // Pfeiltasten steuern die Galerie ebenfalls
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') zeige(aktuell - 1);
    if (e.key === 'ArrowRight') zeige(aktuell + 1);
  });
})();
