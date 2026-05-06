# Showcase— Portfolio

Dit is mijn persoonlijke portfolio website waarin ik mijn werk, vaardigheden en projecten als front-end developer en webdesigner presenteer.

De website heeft een onepage design en is gebouwd met Next.js (App Router) en Tailwind CSS.

### Secties

Wat je op de website vindt

- Hero
- Over mij
- Projecten
- Even offline
- Contact

### Features

- Responsive design
- Custom UI-componenten
- Animaties met Framer Motion

Het doel van dit portfolio is om mezelf professioneel te presenteren als front-end developer en designer.

## Preview

<p>
  <img src="./public/preview/Preview-Hero.gif" width="280"/>
  <img src="./public/preview/Preview-EvenOffline.gif" width="280"/>
</p>

## Tech stack

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

## Installatie

### 1. Dependencies installeren

```bash
npm install
```

### 2. Development server starten

```bash
npm run dev
```

Ga naar:
[http://localhost:3000/](http://localhost:3000/)

## Kleuren

- ![](https://placehold.co/15x15/fffdf5/fffdf5.png) `#fffdf5`
- ![](https://placehold.co/15x15/4a6fd6/4a6fd6.png) `#4a6fd6`
- ![](https://placehold.co/15x15/2d4a8a/2d4a8a.png) `#2d4a8a`
- ![](https://placehold.co/15x15/7c8da6/7c8da6.png) `#7c8da6`

## Mappenstructuur

```
portfolio-ouassila/
├── app/                       # Next.js App Router — routes, layout, globale styles
│   ├── generative-ai/
│   │   └── page.tsx           # Route /generative-ai
│   ├── fonts.ts               # Fontconfiguratie
│   ├── globals.css            # Globale CSS / Tailwind
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Startpagina (/)
├── components/
│   ├── layout/                # Header, footer
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── sections/              # Secties van de onepage (Hero, projecten, …)
│   │   ├── Contact.tsx
│   │   ├── EvenOffline.tsx
│   │   ├── Hero.tsx
│   │   ├── OverMij.tsx
│   │   └── Projecten.tsx
│   └── ui/                    # Herbruikbare UI-componenten
│       ├── ActionButton.tsx
│       ├── CustomCursor.tsx
│       ├── Marquee.tsx
│       ├── MenuIcon.tsx
│       ├── OfflineItem.tsx
│       ├── ProjectCard.tsx
│       └── SectieTitel.tsx
├── public/                    # Statische assets (direct onder / beschikbaar)
│   ├── favicon.ico
│   ├── icons/                 # SVG-iconen
│   ├── images/                # Afbeeldingen (o.a. offline/, projecten/)
│   ├── preview/               # Preview-GIFs voor deze README
│   └── videos/
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── package.json
├── svg.d.ts                   # Type-declaraties voor SVG-imports
└── tsconfig.json
```

## Live link

🔗 [https://portfolio-ouassila.vercel.app](https://portfolio-ouassila.vercel.app)

Deze link brengt je naar de online versie van mijn portfolio.

## Nog te doen

- [ ] Animaties voor subtiele overgang van de pagina
- [ ] AI prompts in docs toevoegen

## Licentie

Dit project is alleen bedoeld als persoonlijk portfolio. Alle rechten voorbehouden.
