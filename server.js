const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');

const app = express();

// Azure App Service sets PORT environment variable
const PORT = process.env.PORT || 3000;

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
