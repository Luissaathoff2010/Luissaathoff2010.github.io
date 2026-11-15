/* ==========================================================================
   Norderney Guide — Karte (OpenStreetMap über Leaflet, lokal eingebunden)

   <div class="karte" data-karte="alle">               alle Einträge
   <div class="karte" data-karte="bars,restaurants-cafes">  nur diese Kategorien
   <div class="karte" data-karte-eintrag>             (Detailseite, ein Eintrag)

   Die Karte lädt erst nach Klick auf „Karte laden“. Erst dann werden
   Kartenkacheln von openstreetmap.org abgerufen. Marker kommen aus
   daten/betriebe.json (Feld "koordinaten").
   ========================================================================== */
(function () {
  var MITTE = [53.7072, 7.1600];   // Norderney
  var leafletGeladen = null;

  function ladeLeaflet() {
    if (window.L) return Promise.resolve();
    if (leafletGeladen) return leafletGeladen;
    leafletGeladen = new Promise(function (ok, fehler) {
      var css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = 'assets/vendor/leaflet/leaflet.css';
      document.head.appendChild(css);
      var js = document.createElement('script');
      js.src = 'assets/vendor/leaflet/leaflet.js';
      js.onload = ok;
      js.onerror = fehler;
      document.head.appendChild(js);
    });
    return leafletGeladen;
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function platzhalter(box) {
    box.innerHTML =
      '<div class="karte-start">' +
        '<p>Die Karte kommt von OpenStreetMap. Erst wenn du klickst, wird sie geladen und deine IP-Adresse geht an die OpenStreetMap Foundation. Mehr dazu in der <a href="/datenschutz">Datenschutzerklärung</a>.</p>' +
        '<button type="button" class="btn btn-primary btn-sm">Karte laden</button>' +
      '</div>';
    box.querySelector('button').addEventListener('click', function () { starte(box); });
  }

  function starte(box) {
    var laden = typeof window.NG_BETRIEBE_LADEN === 'function'
      ? window.NG_BETRIEBE_LADEN()
      : fetch('daten/betriebe.json').then(function (r) { return r.json(); }).then(function (d) { return d.eintraege || []; });

    Promise.all([ladeLeaflet(), laden]).then(function (res) {
      var eintraege = res[1].filter(function (e) { return e.koordinaten && e.koordinaten.length === 2; });
      var filter = box.getAttribute('data-karte');
      var nurId = box.getAttribute('data-karte-id');
      if (nurId) eintraege = eintraege.filter(function (e) { return e.id === nurId; });
      else if (filter && filter !== 'alle') {
        var kats = filter.split(',');
        eintraege = eintraege.filter(function (e) { return kats.indexOf(e.kategorie) !== -1; });
      }

      box.innerHTML = '';
      box.classList.add('is-geladen');
      var karte = L.map(box, { scrollWheelZoom: false }).setView(MITTE, 13);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>-Mitwirkende'
      }).addTo(karte);

      var kategorien = window.NG_KATEGORIEN || {};
      var marker = eintraege.map(function (e) {
        var k = kategorien[e.kategorie] || {};
        return L.marker(e.koordinaten).addTo(karte).bindPopup(
          '<strong>' + esc(e.name) + '</strong><br>' +
          (k.label ? esc(k.label) + '<br>' : '') +
          (nurId ? '' : '<a href="/eintrag?id=' + encodeURIComponent(e.id) + '">Zum Eintrag</a>')
        );
      });
      if (marker.length === 1) karte.setView(eintraege[0].koordinaten, 16);
      else if (marker.length > 1) karte.fitBounds(L.featureGroup(marker).getBounds().pad(0.2));
    }).catch(function () {
      box.innerHTML = '<div class="karte-start"><p>Die Karte konnte nicht geladen werden.</p></div>';
    });
  }

  function init(root) {
    (root || document).querySelectorAll('.karte:not([data-karte-init])').forEach(function (box) {
      box.setAttribute('data-karte-init', '');
      platzhalter(box);
    });
  }

  // Detailseite: Karte erst anlegen, wenn der Eintrag Koordinaten hat
  document.addEventListener('ng:eintrag', function (ev) {
    var e = ev.detail;
    var ziel = document.querySelector('[data-eintrag-karte]');
    if (!ziel || !e.koordinaten || e.koordinaten.length !== 2) return;
    ziel.innerHTML = '<h2 style="font-size:1.3rem;margin-top:28px">Lage</h2><div class="karte" data-karte-id="' + esc(e.id) + '"></div>';
    init(ziel);
  });

  init();
})();
