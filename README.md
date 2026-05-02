# TalentHub — Recruiting Agency Landing Page

Node.js / Express app ready for **Azure App Service**.

## Project Structure

```
talenthub/
├── server.js          # Express server (entry point)
├── package.json
├── web.config         # Azure IIS → iisnode routing
├── .env.example       # Environment variable template
├── .gitignore
└── public/
    └── index.html     # Landing page (Russian, Material Design)
```

## Local Development

```bash
npm install
cp .env.example .env
npm run dev            # uses nodemon for hot reload
# open http://localhost:3000
```

## Deploy to Azure App Service

### Option A — Azure CLI (recommended)

```bash
# 1. Login
az login

# 2. Create resource group (skip if exists)
az group create --name talenthub-rg --location eastus

# 3. Create App Service Plan (Free tier)
az appservice plan create \
  --name talenthub-plan \
  --resource-group talenthub-rg \
  --sku F1 \
  --is-linux

# 4. Create the Web App (Node 20)
az webapp create \
  --resource-group talenthub-rg \
  --plan talenthub-plan \
  --name talenthub-app \
  --runtime "NODE:20-lts"

# 5. Set startup command
az webapp config set \
  --resource-group talenthub-rg \
  --name talenthub-app \
  --startup-file "node server.js"

# 6. Deploy via zip
zip -r deploy.zip . --exclude=node_modules/\* --exclude=.git/\*

az webapp deployment source config-zip \
  --resource-group talenthub-rg \
  --name talenthub-app \
  --src deploy.zip
```

### Option B — GitHub Actions CI/CD

1. Push this repo to GitHub  
2. In Azure Portal → your App Service → **Deployment Center**  
3. Choose **GitHub** → select repo/branch → Save  
4. Azure auto-generates `.github/workflows/azure.yml`

### Option C — VS Code

Install the **Azure App Service** extension, right-click the project folder → **Deploy to Web App**.

---

## Environment Variables on Azure

In **Azure Portal → App Service → Configuration → Application Settings**, add:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `WEBSITE_NODE_DEFAULT_VERSION` | `~20` |

---

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Landing page |
| POST | `/api/contact` | Contact form submission |
| GET | `/health` | Health check (Azure probe) |

---

## Notes

- `web.config` handles IIS → iisnode routing on Windows App Service plans.  
  For **Linux** plans it is not needed — Azure reads the startup command directly.
- Static assets in `/public` are served with 1-day cache headers.
- Helmet adds security headers; CSP is configured to allow Google Fonts & Material Icons.
