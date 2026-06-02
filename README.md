# Melbourne 9-Day Itinerary

This repository contains a full React project for the Melbourne itinerary page.

## Project structure

- `index.html` — application entry HTML with Google fonts.
- `package.json` — project metadata and scripts.
- `vite.config.js` — Vite config for React.
- `src/main.jsx` — React app bootstrap.
- `src/App.jsx` — main app component.
- `src/MelbourneItinerary.jsx` — itinerary page component converted from HTML.
- `.gitignore` — ignores `node_modules`, build output, and OS files.

## Install

From the project root:

```bash
npm install
```

## Run

To start the dev server:

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Notes

- The itinerary component includes inline styling in a `<style>` block.
- `useEffect` initializes scroll-triggered fade animations and active section highlighting.
- External links use `rel="noreferrer noopener"` for improved security.

This project is built with Vite and React. If you want, I can also add TypeScript support or split the itinerary into smaller components.
