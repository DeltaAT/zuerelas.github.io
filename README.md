# Homepage Website

Personal portfolio of **Elias Pöschl (Delta)** — built with React and Vite.

The site is a single-page app with hash-based navigation between a home, about,
and projects view, plus an imprint and privacy policy page.

## Tech stack

- [React 18](https://react.dev/)
- [Vite 7](https://vite.dev/) with the SWC React plugin
- [lucide-react](https://lucide.dev/) icons
- Plain CSS (glassmorphism design system in `src/styles/App.css`)

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server with HMR
npm run build    # production build into dist/
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Project structure

```
.
├── public/              # static assets served as-is (favicons, manifest, .htaccess)
├── src/
│   ├── assets/          # images imported by components (logo)
│   ├── components/      # one React component per section
│   │   ├── Navigation.jsx
│   │   ├── HomeSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── Footer.jsx
│   │   ├── ImprintSection.jsx
│   │   └── PrivacyPolicySection.jsx
│   ├── dev/             # React Buddy (JetBrains) IDE helper files
│   ├── styles/          # global stylesheets
│   │   ├── App.css      # design system + all component styles
│   │   └── index.css
│   ├── App.jsx          # composition root + hash routing
│   └── main.jsx         # React entry point
├── index.html
└── vite.config.js
```

## License

See [LICENSE](LICENSE).
