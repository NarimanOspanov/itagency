/* Vacancies list page — fetches /api/positions and renders cards. */
(function () {
  'use strict';

  var I = window.VacI18n;
  var all = [];
  var loaded = false;

  var $state = document.getElementById('vacState');
  var $grid = document.getElementById('vacGrid');
  var $empty = document.getElementById('vacEmpty');
  var $count = document.getElementById('vacCount');
  var $search = document.getElementById('vacSearch');

  function esc(v) {
    return String(v == null ? '' : v)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function initials(name) {
    var parts = String(name || '').trim().split(/\s+/).filter(Boolean);
    var caps = String(name || '').replace(/[^A-ZА-ЯЁ]/g, '');
    if (caps.length >= 2) return caps.slice(0, 2);
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return String(name || '?').slice(0, 2).toUpperCase();
  }

  function excerpt(text) {
    var s = String(text || '').replace(/\s+/g, ' ').trim();
    return s.length > 165 ? s.slice(0, 165).replace(/\s+\S*$/, '') + '…' : s;
  }

  function cardHtml(p) {
    var chips = I.pickArr(p.skills).slice(0, 4).map(function (s) {
      return '<span class="chip">' + esc(s) + '</span>';
    }).join('');

    return '' +
      '<a class="vac-card" href="/vacancies/' + encodeURIComponent(p.id) + '">' +
        '<div class="vac-card-top">' +
          '<div class="vac-logo">' + esc(initials(p.companyName)) + '</div>' +
          '<div>' +
            '<h3>' + esc(I.pick(p.title)) + '</h3>' +
            '<div class="vac-company">' + esc(p.companyName) + '</div>' +
          '</div>' +
        '</div>' +
        (chips ? '<div class="chips">' + chips + '</div>' : '') +
        '<div class="vac-excerpt">' + esc(excerpt(I.pick(p.description))) + '</div>' +
        '<div class="vac-card-foot">' +
          '<span class="vac-more">' + esc(I.t('card.more')) + ' →</span>' +
          '<span class="vac-date">' + esc(I.formatDate(p.dateCreated)) + '</span>' +
        '</div>' +
      '</a>';
  }

  function filtered() {
    var q = ($search.value || '').trim().toLowerCase();
    if (!q) return all;
    return all.filter(function (p) {
      var hay = [I.pick(p.title), p.companyName, I.pickArr(p.skills).join(' ')].join(' ').toLowerCase();
      return hay.indexOf(q) !== -1;
    });
  }

  function render() {
    var list = filtered();
    $count.textContent = I.countLabel(list.length);

    if (!list.length) {
      $grid.hidden = true;
      $empty.hidden = false;
      return;
    }
    $empty.hidden = true;
    $grid.hidden = false;
    $grid.innerHTML = list.map(cardHtml).join('');
  }

  function showError() {
    $state.innerHTML = '<span class="material-icons">error_outline</span><p>' + esc(I.t('state.error')) + '</p>';
    $state.hidden = false;
  }

  function load() {
    fetch('/api/positions', { headers: { Accept: 'application/json' } })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function (data) {
        all = Array.isArray(data) ? data : [];
        loaded = true;
        $state.hidden = true;
        render();
      })
      .catch(function (err) {
        console.error('Failed to load positions:', err);
        showError();
      });
  }

  $search.addEventListener('input', render);
  I.onChange(function () { if (loaded) render(); });

  load();
})();
