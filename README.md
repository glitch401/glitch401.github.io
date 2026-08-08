<h1 align="center">
  glitch401.github.io
</h1>
<p align="center">
  Personal website of <a href="https://glitch401.github.io" target="_blank">Indranil Biswas</a>, built with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> and hosted on <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>.
</p>

## 🙏 Credit

The design of this site is by [Brittany Chiang](https://brittanychiang.com) — this repo started as a fork of her [v4 portfolio](https://github.com/bchiang7/v4), used with attribution per her fork guidelines. All content (bio, experience, projects) is my own.

## 🛠 Development

```sh
nvm install    # uses .nvmrc (Node 14)
yarn install
yarn develop   # dev server at localhost:8000
```

> **Note:** the `build`/`develop` scripts include `--openssl-legacy-provider`, which only
> exists on Node >= 17. On Node 14/16, run `npx gatsby develop` / `npx gatsby build`
> directly instead — the flag isn't needed there.

## 🚀 Deployment

GitHub Pages serves this site from the **`master`** branch; the source lives on **`main`**.

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes the output to `master` automatically. No manual build
step needed — just merge/push to `main`.

## 🎨 Color Reference

| Color          | Hex       |
| -------------- | --------- |
| Navy           | `#0a192f` |
| Light Navy     | `#112240` |
| Lightest Navy  | `#233554` |
| Slate          | `#8892b0` |
| Light Slate    | `#a8b2d1` |
| Lightest Slate | `#ccd6f6` |
| White          | `#e6f1ff` |
| Green          | `#64ffda` |
