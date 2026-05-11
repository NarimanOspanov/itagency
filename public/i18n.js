(function () {
  'use strict';

  var STORAGE_KEY = 'talenthub_lang';

  var M = {
    ru: {
      'meta.title': 'Талент Хаб — Кадровое Агентство',
      'brand.logo': 'RemoteTalentHub',
      'nav.services': 'Услуги',
      'nav.process': 'Как работаем',
      'nav.about': 'О нас',
      'nav.contact': 'Связаться',
      'hero.label': 'Лидирующее кадровое агентство',
      'hero.title': 'Находим <em>лучших</em> специалистов для вашего бизнеса',
      'hero.lead':
        'Комплексный подбор персонала, карьерный консалтинг и аутсорсинг HR-функций. Работаем с компаниями любого масштаба.',
      'hero.btn1': 'Связаться с нами',
      'hero.btn2': 'Разместить заявку',
      'hero.card.now': 'Актуально сейчас',
      'hero.card.hot': 'Горящие вакансии',
      'hero.stat.vac': 'вакансий',
      'hero.stat.closed': 'закрытых',
      'hero.stat.days': 'дней в среднем',
      'hero.job1.meta': 'Алматы · Удалённо',
      'hero.job1.sal': 'до 650 000 ₸',
      'hero.job2.title': 'Финансовый директор',
      'hero.job2.meta': 'Астана · Удалённо',
      'hero.job2.sal': 'до 900 000 ₸',
      'hero.job3.meta': 'Алматы · Удалённо',
      'hero.job3.sal': 'до 550 000 ₸',
      'stat.years': 'года на рынке рекрутинга',
      'stat.placements': 'успешных трудоустройств',
      'stat.partners': 'компаний-партнёров',
      'stat.probation': 'кандидатов после испытательного срока',
      'svc.label': 'Что мы делаем',
      'svc.title': 'Полный спектр HR-услуг',
      'svc.sub':
        'От поиска редких специалистов до полного аутсорсинга HR-отдела — мы закрываем все задачи в сфере управления персоналом.',
      'svc.1t': 'Прямой поиск',
      'svc.1d':
        'Целевой поиск и привлечение топ-менеджеров и редких специалистов через закрытую базу и прямые контакты. Гарантия замены кандидата.',
      'svc.2t': 'Массовый подбор',
      'svc.2d':
        'Быстрое закрытие большого объёма однотипных позиций: операторы, продавцы, склад, производство. Чёткие дедлайны и KPI.',
      'svc.3t': 'HR-аутсорсинг',
      'svc.3d':
        'Полное или частичное ведение HR-функций: кадровое делопроизводство, подбор, адаптация, оценка и развитие персонала.',
      'svc.4t': 'Карьерный консалтинг',
      'svc.4d':
        'Помогаем кандидатам найти работу мечты: аудит резюме, подготовка к интервью, карьерное планирование и нетворкинг.',
      'svc.5t': 'Оценка персонала',
      'svc.5d':
        'Ассессмент-центры, тестирование профессиональных компетенций, 360-градусная обратная связь и рекомендации по развитию.',
      'svc.6t': 'Международный рекрутинг',
      'svc.6d': 'Поиск специалистов за рубежом, помощь с релокацией, оформлением визы и адаптацией в новой стране.',
      'proc.label': 'Как мы работаем',
      'proc.title': 'Прозрачный процесс на каждом этапе',
      'proc.sub':
        'Строгий, но гибкий алгоритм — именно поэтому 94% закрытых вакансий не возвращаются к нам повторно.',
      'proc.s1t': 'Брифинг',
      'proc.s1d':
        'Выясняем требования, корпоративную культуру, условия и ожидания от кандидата. Согласовываем профиль должности.',
      'proc.s2t': 'Поиск',
      'proc.s2d':
        'Активный поиск по базе, hh.ru, LinkedIn и прямые контакты. Первичный скрининг резюме и мотивации.',
      'proc.s3t': 'Оценка',
      'proc.s3d':
        'Глубинные интервью, проверка рекомендаций и при необходимости — профессиональное тестирование кандидатов.',
      'proc.s4t': 'Трудоустройство',
      'proc.s4d':
        'Представляем шортлист, сопровождаем переговоры, оффер и выход сотрудника. Поддержка в период испытательного срока.',
      'vac.label': 'Открытые позиции',
      'vac.title': 'Актуальные вакансии',
      'vac.sub': 'Более 1 200 позиций по всему Казахстану и СНГ. Найдите работу своей мечты прямо сейчас.',
      'vac.badge.remote': 'Удалённо',
      'vac.badge.full': 'Полная',
      'vac.badge.hybrid': 'Гибрид',
      'vac.badge.part': 'Частичная',
      'vac.cta': 'Все вакансии →',
      'vac.t2': 'Операционный директор',
      'vac.t4': 'Главный бухгалтер',
      'vac.t6': 'Менеджер по продажам B2B',
      'vac.tag.oil': 'Нефтегаз',
      'vac.tag.bank': 'Банки',
      'tst.label': 'Отзывы',
      'tst.title': 'Нам доверяют лидеры рынка',
      'tst.sub': 'Более 340 компаний выбрали ТалентХаб для решения HR-задач любой сложности.',
      'tst.q1':
        'Закрыли 12 позиций разработчиков за 5 недель. Ни один другой подрядчик не справлялся с такими темпами. Качество кандидатов — выше наших ожиданий.',
      'tst.n1': 'Асель Сейткали',
      'tst.q2':
        'Передали им весь HR-аутсорсинг 9 месяцев назад. Теперь у нас порядок в кадрах, текучка снизилась на 30%, а я занимаюсь стратегией, а не бумагами.',
      'tst.n2': 'Нурлан Мусаев',
      'tst.r2': 'Генеральный директор, LogisticsPro',
      'tst.q3':
        'Нашли нам финансового директора через хедхантинг за 3 недели. Человек до сих пор работает у нас — уже 2 года. Рекомендую без оговорок.',
      'tst.n3': 'Дарья Ахметова',
      'tst.r3': 'Председатель совета директоров, AlphaGroup',
      'ct.title': 'Готовы найти лучших для вашей команды?',
      'ct.lead':
        'Оставьте заявку — наш консультант свяжется с вами в течение одного рабочего дня и предложит оптимальное решение.',
      'ct.phone': 'Телефон',
      'ct.email': 'Электронная почта',
      'ct.office': 'Офис',
      'ct.hours': 'Режим работы',
      'ct.addr': 'Алматы, ул. Абая, 150, БЦ «Алатау», 8 этаж',
      'ct.time': 'Пн–Пт: 09:00–18:00',
      'form.title': 'Оставить заявку',
      'form.name': 'Имя',
      'form.company': 'Компания',
      'form.phone': 'Телефон',
      'form.email': 'Email',
      'form.type': 'Тип запроса',
      'form.comment': 'Комментарий',
      'form.submit': 'Отправить заявку',
      'form.ph.name': 'Ваше имя',
      'form.ph.company': 'Название компании',
      'form.ph.phone': '+7 (___) ___-__-__',
      'form.ph.email': 'email@company.kz',
      'form.ph.comment': 'Опишите вашу задачу или вопрос...',
      'form.opt1': 'Подбор специалиста',
      'form.opt2': 'Массовый рекрутинг',
      'form.opt3': 'HR-аутсорсинг',
      'form.opt4': 'Карьерный консалтинг',
      'form.opt5': 'Оценка персонала',
      'form.sending': 'Отправка...',
      'form.err.generic': 'Ошибка. Попробуйте ещё раз.',
      'form.err.net': 'Ошибка соединения. Попробуйте позже.',
      'ft.tagline':
        'Профессиональное кадровое агентство. Работаем с 2022 года. Казахстан, СНГ и международный рекрутинг.',
      'ft.svc': 'Услуги',
      'ft.ct': 'Контакты',
      'ft.f1': 'Прямой поиск',
      'ft.f2': 'Массовый подбор',
      'ft.f3': 'HR-аутсорсинг',
      'ft.f4': 'Оценка персонала',
      'ft.f5': 'Карьерный консалтинг',
      'ft.city1': 'Алматы',
      'ft.city2': 'Астана',
      'ft.copy': '© 2026 ТалентХаб. Все права защищены.',
      'ft.iin': 'ИИН 920213350026',
      'lang.ru': 'RU',
      'lang.en': 'EN',
      'lang.label': 'Язык',
    },
    en: {
      'meta.title': 'Talent Hub — Recruitment Agency',
      'brand.logo': 'RemoteTalentHub',
      'nav.services': 'Services',
      'nav.process': 'How we work',
      'nav.about': 'About',
      'nav.contact': 'Contact us',
      'hero.label': 'Leading recruitment agency',
      'hero.title': 'We find the best remote talent for your business',
      'hero.lead':
        'End-to-end hiring, career consulting, and HR outsourcing. We work with companies of any size.',
      'hero.btn1': 'Contact us',
      'hero.btn2': 'Submit a request',
      'hero.card.now': 'Trending now',
      'hero.card.hot': 'Hot vacancies',
      'hero.stat.vac': 'vacancies',
      'hero.stat.closed': 'filled',
      'hero.stat.days': 'days on average',
      'hero.job1.meta': 'Almaty · Remote',
      'hero.job1.sal': 'up to 650,000 ₸',
      'hero.job2.title': 'Chief Financial Officer',
      'hero.job2.meta': 'Astana · Remote',
      'hero.job2.sal': 'up to 900,000 ₸',
      'hero.job3.meta': 'Almaty · Remote',
      'hero.job3.sal': 'up to 550,000 ₸',
      'stat.years': 'years in recruitment',
      'stat.placements': 'successful placements',
      'stat.partners': 'partner companies',
      'stat.probation': 'candidates past probation',
      'svc.label': 'What we do',
      'svc.title': 'Full-spectrum HR services',
      'svc.sub':
        'From hard-to-fill roles to full HR department outsourcing — we cover the entire talent management cycle.',
      'svc.1t': 'Executive search',
      'svc.1d':
        'Targeted search for executives and niche experts via our network and direct outreach. Replacement guarantee.',
      'svc.2t': 'High-volume hiring',
      'svc.2d':
        'Fast hiring at scale: operators, retail, warehouse, production. Clear deadlines and KPIs.',
      'svc.3t': 'HR outsourcing',
      'svc.3d':
        'Full or partial HR operations: records, recruitment, onboarding, assessment, and people development.',
      'svc.4t': 'Career consulting',
      'svc.4d':
        'We help candidates land the right role: CV review, interview prep, career planning, and networking.',
      'svc.5t': 'Talent assessment',
      'svc.5d':
        'Assessment centres, competency testing, 360 feedback, and actionable development plans.',
      'svc.6t': 'International recruitment',
      'svc.6d': 'Cross-border hiring, relocation, visas, and onboarding support in a new country.',
      'proc.label': 'How we work',
      'proc.title': 'A clear process at every step',
      'proc.sub':
        'A rigorous yet flexible workflow — that is why 94% of filled roles do not reopen with us.',
      'proc.s1t': 'Briefing',
      'proc.s1d':
        'We clarify requirements, culture, conditions, and the ideal candidate profile for the role.',
      'proc.s2t': 'Sourcing',
      'proc.s2d':
        'Active sourcing via our database, job boards, LinkedIn, and direct approaches. Initial CV and motivation screening.',
      'proc.s3t': 'Assessment',
      'proc.s3d':
        'In-depth interviews, reference checks, and professional testing when required.',
      'proc.s4t': 'Placement',
      'proc.s4d':
        'We present the shortlist, support negotiations, offer, and start date. Assistance through probation.',
      'vac.label': 'Open positions',
      'vac.title': 'Current vacancies',
      'vac.sub': 'Over 1,200 roles across Kazakhstan and the CIS. Find your next job today.',
      'vac.badge.remote': 'Remote',
      'vac.badge.full': 'Full-time',
      'vac.badge.hybrid': 'Hybrid',
      'vac.badge.part': 'Part-time',
      'vac.cta': 'All vacancies →',
      'vac.t2': 'Chief Operating Officer',
      'vac.t4': 'Chief Accountant',
      'vac.t6': 'B2B Sales Manager',
      'vac.tag.oil': 'Oil & gas',
      'vac.tag.bank': 'Banking',
      'tst.label': 'Testimonials',
      'tst.title': 'Trusted by market leaders',
      'tst.sub': 'Over 340 companies chose Talent Hub for HR challenges of any complexity.',
      'tst.q1':
        'They filled 12 engineering roles in 5 weeks. No other vendor matched that pace. Candidate quality exceeded our expectations.',
      'tst.n1': 'Asel Seitkali',
      'tst.q2':
        'We outsourced all HR nine months ago. People processes are in order, turnover dropped ~30%, and I focus on strategy.',
      'tst.n2': 'Nurlan Musayev',
      'tst.r2': 'CEO, LogisticsPro',
      'tst.q3':
        'They found our CFO via executive search in three weeks. Still with us two years later. Strongly recommend.',
      'tst.n3': 'Darya Akhmetova',
      'tst.r3': 'Chair of the board, AlphaGroup',
      'ct.title': 'Ready to hire the best for your team?',
      'ct.lead':
        'Leave a request — our consultant will reach out within one business day with the best approach.',
      'ct.phone': 'Phone',
      'ct.email': 'Email',
      'ct.office': 'Office',
      'ct.hours': 'Business hours',
      'ct.addr': 'Almaty, Abay Ave. 150, Alatau BC, 8th floor',
      'ct.time': 'Mon–Fri: 09:00–18:00',
      'form.title': 'Request a callback',
      'form.name': 'Name',
      'form.company': 'Company',
      'form.phone': 'Phone',
      'form.email': 'Email',
      'form.type': 'Request type',
      'form.comment': 'Comment',
      'form.submit': 'Send request',
      'form.ph.name': 'Your name',
      'form.ph.company': 'Company name',
      'form.ph.phone': '+7 (___) ___-__-__',
      'form.ph.email': 'email@company.com',
      'form.ph.comment': 'Describe your task or question...',
      'form.opt1': 'Single hire',
      'form.opt2': 'Volume recruitment',
      'form.opt3': 'HR outsourcing',
      'form.opt4': 'Career consulting',
      'form.opt5': 'Talent assessment',
      'form.sending': 'Sending...',
      'form.err.generic': 'Something went wrong. Please try again.',
      'form.err.net': 'Connection error. Please try later.',
      'ft.tagline':
        'Professional recruitment agency. Operating since 2022. Kazakhstan, CIS, and international hiring.',
      'ft.svc': 'Services',
      'ft.ct': 'Contacts',
      'ft.f1': 'Executive search',
      'ft.f2': 'Volume hiring',
      'ft.f3': 'HR outsourcing',
      'ft.f4': 'Talent assessment',
      'ft.f5': 'Career consulting',
      'ft.city1': 'Almaty',
      'ft.city2': 'Astana',
      'ft.copy': '© 2026 Talent Hub. All rights reserved.',
      'ft.iin': 'IIN 920213350026',
      'lang.ru': 'RU',
      'lang.en': 'EN',
      'lang.label': 'Language',
    },
  };

  function getLang() {
    try {
      var s = localStorage.getItem(STORAGE_KEY);
      if (s === 'en' || s === 'ru') return s;
    } catch (e) {}
    if (typeof navigator !== 'undefined' && navigator.language && navigator.language.toLowerCase().indexOf('en') === 0) {
      return 'en';
    }
    return 'ru';
  }

  function setLang(lang) {
    if (lang !== 'en' && lang !== 'ru') lang = 'ru';
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    return lang;
  }

  function t(lang, key) {
    var table = M[lang] || M.ru;
    return table[key] != null ? table[key] : (M.ru[key] != null ? M.ru[key] : key);
  }

  function applyI18n(lang) {
    lang = setLang(lang);
    document.documentElement.lang = lang === 'en' ? 'en' : 'ru';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!key) return;
      if (el.getAttribute('data-i18n-html') === 'true') {
        el.innerHTML = t(lang, key);
      } else {
        el.textContent = t(lang, key);
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (key) el.setAttribute('placeholder', t(lang, key));
    });

    var opts = document.querySelectorAll('#contactRequestType option');
    for (var i = 0; i < opts.length; i++) {
      opts[i].textContent = t(lang, 'form.opt' + (i + 1));
    }

    var mt = document.querySelector('title');
    if (mt) mt.textContent = t(lang, 'meta.title');

    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      var l = btn.getAttribute('data-set-lang');
      btn.setAttribute('aria-pressed', l === lang ? 'true' : 'false');
    });

    window.__siteLang = lang;
    window.dispatchEvent(new CustomEvent('siteLangChange', { detail: { lang: lang } }));
  }

  function bindLangSwitch() {
    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var l = btn.getAttribute('data-set-lang');
        applyI18n(l);
      });
    });
  }

  function bindContactForm() {
    var form = document.querySelector('.contact-form');
    var submitBtn = document.getElementById('submitBtn');
    if (!form || !submitBtn) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
    });

    submitBtn.addEventListener('click', async function () {
      var lang = window.__siteLang || 'ru';
      var btn = submitBtn;
      var msg = document.getElementById('form-msg');
      var inputs = form.querySelectorAll('input, select, textarea');
      var data = {};
      var fields = ['name', 'company', 'phone', 'email', 'type', 'message'];
      inputs.forEach(function (el, i) {
        data[fields[i]] = el.value;
      });
      btn.disabled = true;
      btn.textContent = t(lang, 'form.sending');
      try {
        var res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        var json = await res.json();
        msg.style.display = 'block';
        if (json.success) {
          msg.style.background = '#E8F5E9';
          msg.style.color = '#2E7D32';
          msg.textContent = json.message;
          inputs.forEach(function (el) {
            el.value = '';
          });
        } else {
          msg.style.background = '#FFEBEE';
          msg.style.color = '#C62828';
          msg.textContent = json.error || t(lang, 'form.err.generic');
        }
      } catch (e) {
        msg.style.display = 'block';
        msg.style.background = '#FFEBEE';
        msg.style.color = '#C62828';
        msg.textContent = t(lang, 'form.err.net');
      }
      btn.disabled = false;
      btn.textContent = t(lang, 'form.submit');
    });

    window.addEventListener('siteLangChange', function () {
      submitBtn.textContent = t(window.__siteLang || 'ru', 'form.submit');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    bindLangSwitch();
    applyI18n(getLang());
    bindContactForm();
  });
})();
