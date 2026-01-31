# Claude Context for Codezuno Website

## Project Overview

Codezuno is a software development company website built with Next.js 14 (App Router). The site is multilingual (EN, PL, ES), uses a luxury tech color palette (navy + dusty rose), and is deployed on Google Cloud Run. The primary goal is lead generation through a contact form that sends messages via WhatsApp.

The site includes sections: Hero, Services, AI Services, Tech Stack, Process, Portfolio, Testimonials, Pricing (standard + AI), FAQ, and Contact. All text is translated via next-intl. SEO is handled with dynamic sitemap, robots.txt, and JSON-LD structured data.

## Tech Stack

- **Framework**: Next.js 14.2 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom color palette
- **Animations**: Framer Motion
- **i18n**: next-intl (locales: en, pl, es)
- **Icons**: Lucide React + inline SVGs for tech logos
- **Fonts**: Inter (body), JetBrains Mono (code)
- **Deployment**: Google Cloud Run (europe-west1)
- **Build**: Docker (local build preferred) or Cloud Build with Kaniko

## Folder Structure

```
src/
├── app/
│   └── [locale]/           # Dynamic locale routing
│       ├── page.tsx        # Main landing page
│       ├── layout.tsx      # Root layout with fonts, metadata
│       ├── pricing/        # Pricing page
│       ├── privacy/        # Legal pages
│       ├── terms/
│       └── cookies/
├── components/             # React components (one per section)
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── AIServices.tsx
│   ├── TechStack.tsx       # Has inline SVG icons
│   ├── Process.tsx
│   ├── Contact.tsx         # WhatsApp integration
│   └── ...
├── i18n/
│   └── request.ts          # next-intl config
messages/                   # Translation files
├── en.json
├── pl.json
└── es.json
public/
├── icons/                  # SVG icons including logo
├── manifest.json           # PWA manifest
├── robots.txt
└── sitemap.xml            # Generated dynamically
```

## Architecture Notes

- **Routing**: All pages under `[locale]` segment. Middleware handles locale detection and redirects.
- **Translations**: Use `useTranslations("section")` hook. Access nested keys with dot notation: `t("key.nested")`. For arrays use `t.raw("key") as string[]`.
- **Standalone output**: Next.js builds to standalone mode for Docker deployment.
- **No external image CDN**: Tech logos are inline SVGs to avoid mobile latency issues.

## Color Palette (Tailwind)

```
primary (navy/graphite):
  600: #486581, 700: #334e68, 800: #243b53, 900: #1a2f44, 950: #102a43

accent (dusty rose):
  500: #d4627a, 600: #c77c8e, 700: #b8687a
```

**IMPORTANT**: No violet/purple colors. Client explicitly rejected them ("toilet freshener label"). Use primary/accent only.

## Coding Conventions

- Components are `"use client"` with Framer Motion animations
- Section IDs for anchor navigation: `id="services"`, `id="contact"`, etc.
- Tailwind classes: `section-padding`, `container-custom`, `card`, `btn-primary`, `gradient-text`
- Icon colors: Use `text-primary-700` for checkmarks (not green)
- Service/process icons: Use `from-primary-X to-primary-Y` or `from-accent-X to-accent-Y` gradients

## Build / Run / Test

```bash
# Development (default port 3000)
npm run dev

# Development on port 3001 (if 3000 is busy)
npm run dev -- -p 3001

# Build
npm run build

# Production locally
npm start

# Production on specific port
PORT=3001 npm start

# Deploy via Cloud Build (builds remotely)
gcloud builds submit --config cloudbuild.yaml --region=europe-west1

# Deploy via local Docker build (faster iteration)
docker build --platform linux/amd64 -t europe-west1-docker.pkg.dev/codezuno-web/cloud-run-source-deploy/codezuno-web:latest .
docker push europe-west1-docker.pkg.dev/codezuno-web/cloud-run-source-deploy/codezuno-web:latest
gcloud run deploy codezuno-web --image europe-west1-docker.pkg.dev/codezuno-web/cloud-run-source-deploy/codezuno-web:latest --region europe-west1 --platform managed --allow-unauthenticated

# Check build output sizes
du -sh .next/static/chunks/*.js | sort -rh | head -10
```

**Note**: Local Docker build requires `--platform linux/amd64` on Apple Silicon Macs.

## User Preferences

1. **Implement without asking** - User prefers autonomous execution over confirmation dialogs
2. **Deploy after changes** - Always build, commit, push, and deploy after making changes
3. **Polish language** - User communicates in Polish, but code/commits should be in English
4. **Concise commits** - Short commit messages describing what changed
5. **No emojis** in code or commits unless explicitly requested

## Known Pitfalls & Constraints

1. **GCloud auth expires** - If deploy fails with auth error, run `gcloud auth login`
2. **Translation arrays** - Must use `t.raw()` and cast to `string[]` for array values
3. **External images slow mobile** - Avoid CDN images; use inline SVGs or local files
4. **Framer Motion is heavy** - ~100KB gzipped; acceptable but avoid adding more animation libs
5. **WhatsApp number** - Hardcoded as `48509818007` in Contact.tsx
6. **Domain** - Production domain is codezuno.com, Cloud Run URL is for testing
7. **IAM warning on deploy** - Can be ignored; public access already configured
8. **next-intl webpack warning** - Benign warning about dynamic imports, can be ignored

## Recent Changes (Context)

- Removed all violet/purple colors from AI sections
- Changed green checkmarks to graphite (primary-700)
- Added inline SVG tech logos (React, Next.js, Vue, TypeScript, etc.)
- Changed font from Geist to Inter for professional look
- Updated hero headline structure for Polish sales messaging
- Logo uses navy gradient (#1a2f44 to #334e68)
- Changed testimonial names to international (Emma Nielsen, Marcus Chen, Sofia Rodriguez, etc.)
- TechStack layout changed to 4x4 grid
