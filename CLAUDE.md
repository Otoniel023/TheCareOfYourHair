# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React application built with TypeScript, Vite, and Tailwind CSS v4. The project is configured for modern React development with fast refresh and strict type checking.

## Development Commands

```bash
# Start development server with HMR (Hot Module Replacement)
npm run dev

# Type-check and build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint on all files
npm run lint
```

## Technology Stack

- **Build Tool**: Vite with @vitejs/plugin-react-swc (uses SWC for fast refresh)
- **Framework**: React 19.2.0 with TypeScript
- **Styling**: Tailwind CSS v4.1.17 (using @tailwindcss/vite plugin)
- **Linting**: ESLint with TypeScript support

## Project Structure

```
careyourhair/
├── src/
│   ├── assets/         # Static assets (images, icons)
│   ├── App.tsx         # Main application component
│   ├── App.css         # App-specific styles
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles and Tailwind imports
├── public/             # Public static files
└── index.html          # HTML entry point
```

## TypeScript Configuration

- **Strict mode enabled**: All strict TypeScript checks are active
- **Target**: ES2022
- **Module resolution**: bundler mode (Vite-optimized)
- **Unused variables/parameters**: Not allowed
- **JSX**: react-jsx (automatic runtime)

## ESLint Configuration

The project uses a flat config (eslint.config.js) with:
- Recommended JavaScript rules (@eslint/js)
- TypeScript ESLint recommended rules
- React Hooks rules (eslint-plugin-react-hooks)
- React Refresh rules for Vite (eslint-plugin-react-refresh)
- Browser globals configured

## Important Notes

- **React Compiler**: Not compatible with SWC plugin currently
- **Tailwind CSS v4**: Uses the new Vite plugin architecture, not PostCSS
- **No test setup**: Testing framework not yet configured
- **Module type**: ESM only (type: "module" in package.json)

Desing Rules: 

Colores de Marca: #D4B063 #1A1A1A #FFFFFF
Fuente: Playfair Display 
Animaciones: react-magic-motions
desing: Beauty / Minimal Luxury
Extras: La marca es natural puedes jugar un poco con eso. color verde #3E5A35
Siempre: Asegura responsive desing 

Usar Tailwind CSS para estilizar la página.

Target: Estoy planificando un proyecto para un sitio web dedicado a un producto muy especial. Es un gotero para el pelo. El público van a ser mujeres que necesiten o estén buscando la mejora del pelo. Entonces, esta aplicación piensa ser hecha en React, utilizando Table, React con TileScreen, y Primer Motion para las animaciones. Será una landing page.