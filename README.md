# SDGi Roadmaps Project

A React-based web application showcasing departmental roadmaps for implementing Sustainable Development Goals (SDGs) across three European universities.

## Features

- Interactive European map visualization
- Detailed departmental roadmaps for:
  - University of Rijeka (Croatia)
  - Kaunas University of Technology (Lithuania)
  - Universitat de Girona (Spain)
- Team member profiles
- Downloadable PDF roadmaps
- Responsive design with Tailwind CSS 4

## Tech Stack

- React 18
- Vite
- Tailwind CSS 4 (with the Typography plugin)
- React Simple Maps
- React Router

## Development

Requires Node.js 20 or newer (`.nvmrc` pins 22; run `nvm use`).

1. Install dependencies (`--legacy-peer-deps` is needed because `@vx/pattern` declares an old React peer dependency):
   ```bash
   npm install --legacy-peer-deps
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```
