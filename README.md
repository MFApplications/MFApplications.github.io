# MFApps landing

Astro-based landing page cataloging the open-source projects maintained under
the MFApps GitHub organizations (Scrap-MF, ExtractorsMF, AlejandraDB-MF,
MFApplications).

## Development

```sh
npm install
npm run dev
```

Open http://localhost:4321

## Build

```sh
npm run build
npm run preview
```

## Deploy

Pushes to `main` trigger the GitHub Pages workflow in `.github/workflows/deploy.yml`.
For a project page, the workflow sets `BASE_PATH` to `/<repo-name>` automatically.