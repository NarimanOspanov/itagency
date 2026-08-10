/* Page-specific i18n for the vacancy pages.
   Reuses the same language state as /i18n.js (window.__siteLang + 'talenthub_lang'). */
(function () {
  'use strict';

  var L = {
    ru: {
      'nav.vacancies': 'Вакансии',
      'head.eyebrow': 'Актуальные позиции',
      'head.title': 'Открытые <em>вакансии</em>',
      'head.subtitle': 'Выберите позицию и откликнитесь в один клик — заявка отправляется прямо в наш Telegram-бот.',
      'search.placeholder': 'Поиск по названию, компании, навыку…',
      'state.loading': 'Загружаем вакансии…',
      'state.loading.one': 'Загружаем вакансию…',
      'state.empty': 'По вашему запросу ничего не найдено.',
      'state.error': 'Не удалось загрузить вакансии. Попробуйте позже.',
      'card.more': 'Подробнее',
      'meta.location': 'Локация',
      'meta.employment': 'Занятость',
      'meta.salary': 'Зарплата',
      'meta.posted': 'Опубликовано',
      'detail.back': 'Все вакансии',
      'detail.notfound': 'Вакансия не найдена или уже закрыта.',
      'detail.skills': 'Ключевые навыки',
      'detail.about': 'Описание вакансии',
      'company.site': 'Сайт компании',
      'apply.title': 'Откликнуться',
      'apply.subtitle': 'Отклик отправляется в Telegram-бот. Ответим в течение рабочего дня.',
      'apply.button': 'Откликнуться в Telegram',
      'apply.external': 'Откликнуться на сайте компании',
      'apply.note': 'Нажимая «Откликнуться», вы перейдёте в Telegram.',
      'count.suffix': ['вакансия', 'вакансии', 'вакансий'],
      'count.prefix': 'Найдено'
    },
    en: {
      'nav.vacancies': 'Vacancies',
      'head.eyebrow': 'Open positions',
      'head.title': 'Open <em>vacancies</em>',
      'head.subtitle': 'Pick a position and apply in one click — your application goes straight to our Telegram bot.',
      'search.placeholder': 'Search by title, company, skill…',
      'state.loading': 'Loading vacancies…',
      'state.loading.one': 'Loading vacancy…',
      'state.empty': 'Nothing matches your search.',
      'state.error': 'Could not load vacancies. Please try again later.',
      'card.more': 'Details',
      'meta.location': 'Location',
      'meta.employment': 'Employment',
      'meta.salary': 'Salary',
      'meta.posted': 'Posted',
      'detail.back': 'All vacancies',
      'detail.notfound': 'This vacancy was not found or has been closed.',
      'detail.skills': 'Key skills',
      'detail.about': 'Job description',
      'company.site': 'Company website',
      'apply.title': 'Apply',
      'apply.subtitle': 'Your application is sent to the Telegram bot. We reply within one business day.',
      'apply.button': 'Apply on Telegram',
      'apply.external': 'Apply on company website',
      'apply.note': 'Clicking “Apply” opens Telegram.',
      'count.suffix': ['vacancy', 'vacancies', 'vacancies'],
      'count.prefix': 'Found'
    }
  };

  function lang() {
    var l = window.__siteLang;
    if (l === 'en' || l === 'ru') return l;
    try {
      var s = localStorage.getItem('talenthub_lang');
      if (s === 'en' || s === 'ru') return s;
    } catch (e) {}
    return 'ru';
  }

  function t(key) {
    var table = L[lang()] || L.ru;
    if (table[key] != null) return table[key];
    return L.ru[key] != null ? L.ru[key] : key;
  }

  /** Localised "Found N vacancies" (with RU pluralisation). */
  function countLabel(n) {
    var suffix = t('count.suffix');
    var word;
    if (lang() === 'ru') {
      var mod100 = n % 100;
      var mod10 = n % 10;
      if (mod100 >= 11 && mod100 <= 14) word = suffix[2];
      else if (mod10 === 1) word = suffix[0];
      else if (mod10 >= 2 && mod10 <= 4) word = suffix[1];
      else word = suffix[2];
    } else {
      word = n === 1 ? suffix[0] : suffix[1];
    }
    return t('count.prefix') + ' ' + n + ' ' + word;
  }

  function formatDate(iso) {
    if (!iso) return '';
    try {
      var d = new Date(iso);
      if (isNaN(d.getTime())) return '';
      return d.toLocaleDateString(lang() === 'en' ? 'en-GB' : 'ru-RU', {
        day: 'numeric', month: 'long', year: 'numeric'
      });
    } catch (e) { return ''; }
  }

  function apply(root) {
    root = root || document;
    root.querySelectorAll('[data-t]').forEach(function (el) {
      var k = el.getAttribute('data-t');
      if (el.getAttribute('data-t-html') === 'true') el.innerHTML = t(k);
      else el.textContent = t(k);
    });
    root.querySelectorAll('[data-t-ph]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-t-ph')));
    });
  }

  var subs = [];
  window.VacI18n = {
    t: t,
    lang: lang,
    apply: apply,
    countLabel: countLabel,
    formatDate: formatDate,
    onChange: function (fn) { if (typeof fn === 'function') subs.push(fn); }
  };

  function rerender() {
    apply(document);
    subs.forEach(function (fn) { try { fn(lang()); } catch (e) {} });
  }

  window.addEventListener('siteLangChange', rerender);
  document.addEventListener('DOMContentLoaded', function () { apply(document); });
})();
