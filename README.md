# Online Courses Catalog

A responsive course catalog web application built with React, TypeScript, Vite, and Tailwind CSS. Features search functionality and category filtering.

## 🚀 Live Demo

[View Live Demo](https://course-catalog.vercel.app) *(Update after deployment)*

## 📋 Features

- **Pixel-perfect design** matching the Figma reference
- **Fluid responsive layout** from 1920px to 320px using `clamp()` and viewport units
- **Live search** - Filter courses by title in real-time
- **Category filtering** - Filter by Marketing, Management, HR & Recruiting, Design, Development
- **Load more** functionality for pagination
- **BEM methodology** for CSS class naming
- **Accessible** - ARIA labels and semantic HTML

## 🛠️ Tech Stack

- **Runtime/Package Manager:** [Bun](https://bun.sh/)
- **UI Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)

## 📁 Project Structure

```
src/
├── components/
│   ├── Card/           # Course card component
│   ├── CardGrid/       # Grid layout for cards
│   ├── CategoryTabs/   # Category filter tabs
│   ├── CourseCatalog/  # Main page component
│   ├── Header/         # Page header with title
│   ├── LoadMore/       # Load more button
│   └── SearchInput/    # Search input field
├── data/
│   └── courses.ts      # Course data and category colors
├── types/
│   └── index.ts        # TypeScript type definitions
├── App.tsx
├── main.tsx
└── index.css           # Global styles and design tokens
```

## 🎨 Design Tokens

Colors, typography, and spacing are extracted from the Figma design and configured in `src/index.css`:

- **Primary:** #FF3F3A
- **Category colors:** Success (Marketing), Info (Management), Warning (HR), Design, Development
- **Font:** Lato (400, 700, 900)
- **Responsive sizing:** Uses `clamp()` for fluid scaling

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine

### Installation

```bash
# Clone the repository
git clone https://github.com/neolite/course-catalog.git
cd course-catalog

# Install dependencies
bun install

# Start development server
bun run dev
```

### Build for Production

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

## 📱 Responsive Design

The layout uses fluid responsive design without hard breakpoints:

- **Desktop (1920px):** 3-column grid with full decorative elements
- **Tablet (~1200px):** 2-column grid
- **Mobile (~768px):** Single column, simplified header

All sizing uses `clamp()` functions for smooth scaling between viewport sizes.

## 🔧 Potential Improvements

- [ ] Add unit tests with Vitest
- [ ] Add E2E tests with Playwright
- [ ] Implement course detail pages
- [ ] Add favorites/bookmarking functionality
- [ ] Add sorting options (by price, name, etc.)
- [ ] Implement actual backend API integration
- [ ] Add loading states and skeleton screens
- [ ] Add dark mode support

## 📄 License

MIT
