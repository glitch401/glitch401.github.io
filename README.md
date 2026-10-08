# glitch401.github.io

Personal site of [Indranil Biswas](https://glitch401.github.io): writing, prototypes, about. Built with [Astro](https://astro.build), search by [Pagefind](https://pagefind.app), hosted on GitHub Pages.

## Develop

```sh
nvm use        # Node 22
npm install
npm run dev    # http://localhost:4321 (search only works after a build)
npm run build  # builds dist/ and the search index
npm run preview
```

## Add content

- Post: `src/content/writing/<slug>.md` with `title`, `summary`, `date`, `tags`.
- Prototype: `src/content/projects/<slug>.md` (`featured: true` shows it on the home page).
- Job: `src/content/jobs/<slug>.md`.
- Site name, nav, newsletter form action and Google Analytics id live in `src/config.ts`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `dist/` to the `master` branch that GitHub Pages serves. Work on other branches does not deploy.
