# Vision People Downloads

En simpel download-side til Vision People filer, hostet på Vercel.

## Filer

- `vpc_support_da.exe` - VPC Support program
- `supportskabelon.oft` - Mail template

## Setup

1. Install dependencies:
```bash
npm install
```

2. Kør lokalt:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deployment

Dette projekt er konfigureret til at køre på Vercel. Filerne er placeret i `public/downloads/` mappen.

### Download URLs

Efter deployment kan du bruge disse links på din Webflow hjemmeside:

- **VPC Support (EXE)**: `https://your-vercel-domain.vercel.app/api/downloads/vpc_support_da.exe`
- **Mail Template (OFT)**: `https://your-vercel-domain.vercel.app/api/downloads/supportskabelon.oft`

### Webflow Integration

Tilføj disse links som "Custom Link" i Webflow:
1. Gå til din Webflow side
2. Vælg det element du vil tilføje linket til
3. I link indstillingerne, vælg "Custom Link"
4. Indsæt en af URL'erne ovenfor

## Struktur

- `app/page.tsx` - Hovedside med download knapper
- `app/api/downloads/` - API routes til fil downloads
- `public/downloads/` - De faktiske filer der skal downloades