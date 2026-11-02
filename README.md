# Kobbs Global Services Website

Corporate website for Kobbs Global Services Nigeria Limited, built with React, Vite, Tailwind CSS, and GSAP.

## Overview

This project is a modern corporate marketing site for an industrial logistics and haulage company operating in Nigeria, with emphasis on:

- haulage and transportation
- heavy lift and craneage
- rig move operations
- equipment leasing
- safety and operational reliability

The site includes a multi-page marketing experience, route-based navigation, animated sections, and a quote/contact flow.

## Tech stack

- React 19
- Vite 8
- React Router
- GSAP + ScrollTrigger
- Tailwind CSS v4
- React Icons
- pnpm

## Project structure

```text
src/
  App.jsx
  main.jsx
  index.css
  assets/
  components/
    Navbar.jsx
    HeroSection.jsx
    ServicesSection.jsx
    ProjectsSection.jsx
    ContactSection.jsx
    Footer.jsx
    PageIntro.jsx
  pages/
    AboutPage.jsx
    ServicesPage.jsx
    ProjectsPage.jsx
    SafetyPage.jsx
    ContactPage.jsx
    NotFoundPage.jsx
  hooks/
    useScrollReveal.js
public/
```

## Local development

Install dependencies:

```bash
pnpm install
```

Start the app:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Preview production build locally:

```bash
pnpm preview
```

## Notes

- Navigation uses React Router for client-side transitions.
- GSAP is used for subtle motion and scroll reveal effects.
- The design is intended to feel premium, industrial, and corporate rather than startup-style.
- Some business content may require confirmation before publication, especially operational details, client references, and safety claims.

## Important implementation note

The current project is a custom front-end website, not a starter template. It should be treated as a live marketing site requiring content verification and final QA before launch.

## Recommended next steps

1. Confirm company profile details and operational claims.
2. Finalise contact form backend or third-party form service.
3. Review SEO metadata for each route.
4. Validate responsiveness across mobile/tablet/desktop widths.
5. Test the live site for broken links, form flow, and animation clean-up.

## License

This project is for internal business use and website development work related to Kobbs Global Services Nigeria Limited.
