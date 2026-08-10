# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

## Architecture Overview

This is a React-based web application showcasing SDG departmental roadmaps for three European universities. The app uses Vite as the build tool and follows a standard React Router setup.

### Core Structure

- **Router Setup**: App.jsx contains the main routing logic with 4 routes:
  - `/` - Article page (main introduction)
  - `/spain` - Spain/Girona university roadmap
  - `/croatia` - Croatia/Rijeka university roadmap  
  - `/lithuania` - Lithuania/Kaunas university roadmap

- **Layout Components**:
  - `Navigation.jsx` - Sticky header with responsive mobile menu
  - `Footer.jsx` - Site footer with licensing information
  - All pages share the same layout structure with Navigation and Footer

### Key Features

- **Interactive Map**: `MapChart.jsx` renders a European map using react-simple-maps
  - Loads geography data from `/public/features.json`
  - Highlights three countries (Spain, Croatia, Lithuania) with click navigation
  - Uses @vx/pattern for visual styling
  - Map pins show university locations (Girona, Rijeka, Kaunas)

- **University Pages**: Each country page (`Spain.jsx`, `Croatia.jsx`, `Lithuania.jsx`) follows the same pattern:
  - Uses `DepartmentLayout.jsx` wrapper component
  - Contains `DepartmentIntroduction.jsx`, `RoadmapOverview.jsx`, `MeasuresSection.jsx`, `TeamSection.jsx`
  - Links to downloadable PDF roadmaps in `/public/pdfs/`

### Styling & UI

- **CSS Framework**: Tailwind CSS with DaisyUI components
- **Icons**: Lucide React and Heroicons
- **Typography**: Tailwind Typography plugin for prose content
- **Color Scheme**: Primarily sky/blue palette with yellow accents
- **Responsive**: Mobile-first design with responsive navigation

### Data Structure

- Team member data and content are embedded directly in components
- PDF files stored in `/public/pdfs/` with multilingual versions
- Photo galleries in `/public/photos/` organized by country
- Profile images in `/public/people/`

### Development Notes

- Uses ES modules (`"type": "module"` in package.json)
- Vite handles static asset serving from `/public/`
- No backend API - all content is static
- Deployed to GitHub Pages automatically by the GitHub Actions workflow (`.github/workflows/deploy.yml`) on every push to `master`