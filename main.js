// Norderney Guide — Interaktions-Logik (Mobile-Nav, Akkordeon, aktive Navigation)

document.addEventListener('DOMContentLoaded', function () {
  // Mobile-Navigation
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  var headerGroup = document.querySelector('.site-header-group');

  // Position des mobilen Menüs an die tatsächliche Höhe von Notruf-Leiste + Header koppeln
  // (statt eines festen Pixelwerts), damit es bei jeder Bildschirmbreite exakt anschließt.
  function updateHeaderOffset() {
    if (headerGroup) {
      document.documentElement.style.setProperty('--header-bottom', headerGroup.getBoundingClientRect().bottom + 'px');
    }
  }
  updateHeaderOffset();
  window.addEventListener('resize', updateHeaderOffset);

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      updateHeaderOffset();
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Nav-Gruppen (Dropdown-/Mega-Menü: z.B. "Essen & Einkaufen", "Insel erleben")
  document.querySelectorAll('.nav-group').forEach(function (group) {
    var trigger = group.querySelector('.nav-group-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = group.classList.contains('is-open');
      document.querySelectorAll('.nav-group.is-open').forEach(function (openGroup) {
        if (openGroup !== group) {
          openGroup.classList.remove('is-open');
          openGroup.querySelector('.nav-group-trigger').setAttribute('aria-expanded', 'false');
        }
      });
      group.classList.toggle('is-open', !isOpen);
      trigger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });
  });

  document.addEventListener('click', function () {
    document.querySelectorAll('.nav-group.is-open').forEach(function (openGroup) {
      openGroup.classList.remove('is-open');
      openGroup.querySelector('.nav-group-trigger').setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-group.is-open').forEach(function (openGroup) {
        openGroup.classList.remove('is-open');
        openGroup.querySelector('.nav-group-trigger').setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Aktiven Nav-Link markieren (inkl. Links innerhalb von Dropdown-Gruppen)
  var currentPage = (window.location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-list a, .nav-dropdown-list a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('is-active');
      var parentGroup = link.closest('.nav-group');
      if (parentGroup) {
        parentGroup.querySelector('.nav-group-trigger').classList.add('is-active');
      }
    }
  });

  // Akkordeon (Schlechtwetter-Tipps, FAQ)
  document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
    var item = trigger.closest('.accordion-item');
    var panel = item.querySelector('.accordion-panel');

    trigger.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');

      // Andere Panels im selben Akkordeon schließen
      var group = item.closest('.accordion');
      if (group) {
        group.querySelectorAll('.accordion-item.is-open').forEach(function (openItem) {
          if (openItem !== item) {
            openItem.classList.remove('is-open');
            openItem.querySelector('.accordion-panel').style.maxHeight = null;
          }
        });
      }

      if (isOpen) {
        item.classList.remove('is-open');
        panel.style.maxHeight = null;
      } else {
        item.classList.add('is-open');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  // Kategorie-Filter (Unterkünfte, Essen & Trinken, Geschäfte, Aktivitäten …)
  // Mehrere unabhängige Filter-Gruppen pro Seite (z.B. Art + Lage + Preisniveau) sind
  // kombinierbar: eine Karte bleibt nur sichtbar, wenn sie ALLE aktiven Filter erfüllt.
  // Jede Gruppe filtert per data-filter-attr auf das gleichnamige data-*-Attribut der
  // Karte (Standard: "category" → data-category), falls kein data-filter-attr gesetzt ist.
  var groupsBySelector = {};
  document.querySelectorAll('[data-filter-group]').forEach(function (group) {
    var selector = group.getAttribute('data-filter-group');
    var attr = group.getAttribute('data-filter-attr') || 'category';
    (groupsBySelector[selector] = groupsBySelector[selector] || []).push({ el: group, attr: attr });
  });

  Object.keys(groupsBySelector).forEach(function (selector) {
    var cards = document.querySelectorAll(selector);
    var groups = groupsBySelector[selector];

    function applyFilters() {
      var activeFilters = groups.map(function (g) {
        var activeBtn = g.el.querySelector('[data-filter].is-active') || g.el.querySelector('[data-filter="alle"]');
        return { attr: g.attr, val: activeBtn ? activeBtn.getAttribute('data-filter') : 'alle' };
      });

      cards.forEach(function (card) {
        var visible = activeFilters.every(function (f) {
          if (f.val === 'alle') return true;
          var raw = card.getAttribute('data-' + f.attr) || '';
          return raw.split(' ').indexOf(f.val) !== -1;
        });
        card.style.display = visible ? '' : 'none';
      });
    }

    groups.forEach(function (g) {
      g.el.querySelectorAll('[data-filter]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          g.el.querySelectorAll('[data-filter]').forEach(function (b) { b.classList.remove('is-active'); });
          btn.classList.add('is-active');
          applyFilters();
        });
      });
    });

    applyFilters();
  });

  // Jahr im Footer
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
