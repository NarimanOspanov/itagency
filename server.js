const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');
const fs = require('fs');

const app = express();

// Azure App Service sets PORT environment variable
const PORT = process.env.PORT || 3000;

// --- Vacancies (positions synced from the jobsearchbot) -----------------------
// The bot exposes positions via /apply_link as t.me deep links of the form
//   https://t.me/<bot>?start=apply_<positionId>_<publisherToken>
// The website is a fixed "publisher", so every apply link carries the same token.
const POSITIONS_FILE = path.join(__dirname, 'data', 'positions.json');
const BOT_USERNAME = String(process.env.BOT_USERNAME || 'apply_jobs_bot').replace(/^@/, '').trim();
const APPLY_PUBLISHER_TOKEN = String(process.env.BOT_APPLY_PUBLISHER_TOKEN || 'AAAAHAAAAAAYmwKG').trim();

function loadPositions() {
  try {
    const raw = fs.readFileSync(POSITIONS_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('Failed to load positions.json:', err.message);
    return [];
  }
}

function buildApplyLink(id) {
  const payload = APPLY_PUBLISHER_TOKEN ? `apply_${id}_${APPLY_PUBLISHER_TOKEN}` : `apply_${id}`;
  return `https://t.me/${BOT_USERNAME}?start=${payload}`;
}

// title/description/skills are bilingual ({ en, ru }); the client picks the language.
function toPublicPosition(p) {
  return {
    id: p.id,
    title: p.title,
    description: p.description,
    companyName: p.companyName || '',
    companyWebsite: p.companyWebsite || null,
    externalApplyUrl: p.externalApplyUrl || null,
    dateCreated: p.dateCreated || null,
    skills: p.skills || {},
    applyLink: buildApplyLink(p.id),
  };
}

// Security headers (relaxed CSP for Google Fonts + Material Icons)
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:"],
        scriptSrc: ["'self'"],
      },
    },
  })
);

// Gzip compression
app.use(compression());

// Parse JSON bodies (for future API routes)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from /public
app.use(
  express.static(path.join(__dirname, 'public'), {
    maxAge: '1d',
    etag: true,
  })
);

// API route: contact form submission
app.post('/api/contact', (req, res) => {
  const { name, company, phone, email, type, message } = req.body;

  // Basic validation
  if (!name || !email) {
    return res.status(400).json({ success: false, error: 'Имя и email обязательны.' });
  }

  // TODO: integrate with email service (SendGrid, etc.) or Azure Communication Services
  console.log('New contact form submission:', { name, company, phone, email, type, message });

  res.json({ success: true, message: 'Заявка принята. Мы свяжемся с вами в течение рабочего дня.' });
});

// API: list open vacancies (non-archived)
app.get('/api/positions', (req, res) => {
  const list = loadPositions()
    .filter((p) => p && p.id && !p.isArchived)
    .map(toPublicPosition);
  res.json(list);
});

// API: single vacancy by id
app.get('/api/positions/:id', (req, res) => {
  const id = String(req.params.id || '').toLowerCase();
  const found = loadPositions().find(
    (p) => p && p.id && !p.isArchived && String(p.id).toLowerCase() === id
  );
  if (!found) return res.status(404).json({ error: 'Вакансия не найдена' });
  res.json(toPublicPosition(found));
});

// Vacancies pages (explicit routes so they win over the SPA catch-all)
app.get('/vacancies', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'vacancies.html'));
});
app.get('/vacancies/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'vacancy.html'));
});

// Health check endpoint — Azure uses this for liveness probes
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Catch-all: serve index.html for any unmatched route (SPA-friendly)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`TalentHub server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
