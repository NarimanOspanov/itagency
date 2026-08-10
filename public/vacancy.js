/* Vacancy detail page — fetches /api/positions/:id and renders it. */
(function () {
  'use strict';

  var I = window.VacI18n;
  var current = null;

  var $state = document.getElementById('vacState');
  var $notFound = document.getElementById('vacNotFound');
  var $detail = document.getElementById('vacDetail');

  function esc(v) {
    return String(v == null ? '' : v)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function idFromPath() {
    var parts = location.pathname.split('/').filter(Boolean); // ['vacancies', '<id>']
    var raw = parts.length ? parts[parts.length - 1] : '';
    try { return decodeURIComponent(raw); } catch (e) { return raw; }
  }

  function brand() {
    return I.lang() === 'en' ? 'TalentHub' : 'ТалентХаб';
  }

  function metaRow(icon, label, valueHtml) {
    return '<div><span class="material-icons">' + icon + '</span>' +
      '<span>' + esc(label) + ': <b>' + valueHtml + '</b></span></div>';
  }

  function applyStrip(p) {
    return '' +
      '<div class="apply-strip">' +
        '<div class="apply-strip-text">' +
          '<h3>' + esc(I.t('apply.title')) + '</h3>' +
          '<p>' + esc(I.t('apply.subtitle')) + '</p>' +
        '</div>' +
        '<a class="btn-primary" href="' + esc(p.applyLink) + '" target="_blank" rel="noopener noreferrer">' +
          '<span class="material-icons" style="font-size:20px">send</span>' +
          '<span>' + esc(I.t('apply.button')) + '</span>' +
        '</a>' +
      '</div>';
  }

  /* Render everything from data. Called on load and on every language change. */
  function paint() {
    var p = current;
    if (!p) return;

    document.title = I.pick(p.title) + ' — ' + brand();

    // Title + description
    document.getElementById('dTitle').textContent = I.pick(p.title);
    document.getElementById('dDesc').textContent = I.pick(p.description);

    // Company + optional website
    var companyHtml = '<span class="material-icons" style="font-size:20px;color:var(--primary)">business</span>' + esc(p.companyName);
    if (p.companyWebsite) {
      companyHtml += ' · <a href="' + esc(p.companyWebsite) + '" target="_blank" rel="noopener noreferrer">' +
        esc(I.t('company.site')) + '</a>';
    }
    document.getElementById('dCompany').innerHTML = companyHtml;

    // Skills chips
    var skills = I.pickArr(p.skills);
    var $skillsWrap = document.getElementById('dSkillsWrap');
    if (skills.length) {
      document.getElementById('dSkills').innerHTML = skills.map(function (s) {
        return '<span class="chip">' + esc(s) + '</span>';
      }).join('');
      $skillsWrap.hidden = false;
    } else {
      $skillsWrap.hidden = true;
    }

    // Meta (posted date)
    var meta = [];
    var posted = I.formatDate(p.dateCreated);
    if (posted) meta.push(metaRow('event', I.t('meta.posted'), esc(posted)));
    var $meta = document.getElementById('dMeta');
    $meta.innerHTML = meta.join('');
    $meta.style.display = meta.length ? '' : 'none';

    // Sidebar apply button
    document.getElementById('dApplyBtn').setAttribute('href', p.applyLink);

    // External apply (optional)
    var $extWrap = document.getElementById('dExternalWrap');
    if (p.externalApplyUrl) {
      var $ext = document.getElementById('dExternalBtn');
      $ext.setAttribute('href', p.externalApplyUrl);
      $ext.textContent = I.t('apply.external');
      $extWrap.hidden = false;
    } else {
      $extWrap.hidden = true;
    }

    // Bottom apply strip
    document.getElementById('dApplyBottom').innerHTML = applyStrip(p);
  }

  function render(p) {
    current = p;
    paint();
    $state.hidden = true;
    $notFound.hidden = true;
    $detail.hidden = false;
  }

  function showNotFound() {
    $state.hidden = true;
    $detail.hidden = true;
    $notFound.hidden = false;
  }

  function load() {
    var id = idFromPath();
    if (!id || id === 'vacancies') { showNotFound(); return; }
    fetch('/api/positions/' + encodeURIComponent(id), { headers: { Accept: 'application/json' } })
      .then(function (r) {
        if (r.status === 404) return null;
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (data) {
        if (!data || !data.id) { showNotFound(); return; }
        render(data);
      })
      .catch(function (err) {
        console.error('Failed to load vacancy:', err);
        showNotFound();
      });
  }

  I.onChange(function () { if (current) paint(); });

  load();
})();
