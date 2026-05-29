# Meraki Studio

Frontend website for **Meraki Studio** — Architecture, Interior Design & Landscape Architecture.

## Stack

- React 19 + Vite
- Tailwind CSS v4
- React Router

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Project structure

- `src/components/sections/` — Landing page sections
- `src/components/layout/` — Header, Footer, TopBar
- `src/data/site.js` — Company info, stats, nav
- `src/data/projects.js` — Portfolio items for projects grid
- `src/data/blog.js` — Blog posts

## Assets

- **Logo** → `src/assets/logo.png` (transparent PNG, used in header & footer)
- **Project photos** → `src/assets/project1/` … `project4/`
- Image mappings & copy → `src/data/projects.js`
4. **Stats** → Edit `site.stats` in `src/data/site.js`:

```js
stats: {
  experience: { value: "20", label: "Years of experience" },
  awards: { value: "35", label: "Awards gained" },
  team: { value: "42", label: "Team members" },
  projects: { value: "1200", label: "Projects completed" },
},
```

## Reference UI

Design reference screenshots are in `public/references/` (copied from design mockups).

## Routes

| Path | Page |
|------|------|
| `/` | Full landing page |
| `/about` | About (placeholder layout) |
| `/services` | Services (placeholder) |
| `/portfolio` | Portfolio (placeholder) |
| `/blog` | Blog (placeholder) |
| `/contact` | Contact (placeholder) |

Backend integration (Node.js) planned for a later phase.
