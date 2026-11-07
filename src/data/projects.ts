import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-dev-studio',
    title: 'DevStudio — Agency & Creator Portfolio',
    category: 'Websites',
    badge: 'LIVE WEB PROJECT',
    tagline: 'Modern responsive agency & personal brand portfolio with dark mode and smooth animations',
    description: 'A clean, high-performance portfolio website built for digital creatives and software engineers. Features responsive typography, interactive case study cards, and direct contact intake.',
    detailedOverview: 'Built to demonstrate practical, real-world portfolio web development. Features mobile-first responsive layouts, optimized asset delivery, smooth page transitions, and zero layout shift.',
    features: [
      'Mobile-first responsive layout tested across all screen sizes',
      'Fluid dark/light mode theming with CSS custom properties',
      'Interactive project showcase with modal preview cards',
      'Fast client-side routing and instant page loading'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    accentColor: 'cyan',
    deliverables: ['Responsive Web Platform', 'Component Library', 'Contact Integration'],
    visualType: 'grid-dashboard'
  },
  {
    id: 'proj-cafe-landing',
    title: 'Brew & Crust — Artisan Café & Online Ordering',
    category: 'Websites',
    badge: 'COMMERCIAL WEBSITE',
    tagline: 'Interactive digital café menu, table reservation booking, and Google Maps integration',
    description: 'A vibrant, mouth-watering landing page for a specialty coffee shop and bakery. Features dynamic menu categorization, table reservation forms, and direct WhatsApp order dispatch.',
    detailedOverview: 'Designed for hospitality and local retail businesses. Prioritizes quick mobile loading on 4G networks, legible menu navigation, one-tap calling, and instant location directions.',
    features: [
      'Faceted digital menu with dietary tags (Vegan, Gluten-Free)',
      'Table reservation form with client-side date/time validation',
      'Direct WhatsApp inquiry and order link generator',
      'Embedded Google Maps location and operating hours widget'
    ],
    technologies: ['HTML5 / CSS3', 'JavaScript', 'Tailwind CSS', 'Responsive UI'],
    accentColor: 'pink',
    deliverables: ['Custom Landing Page', 'Interactive Menu UX', 'Booking Form Engine'],
    visualType: 'grid-dashboard'
  },
  {
    id: 'proj-apparel-store',
    title: 'UrbanStyle — Modern E-Commerce Storefront',
    category: 'Websites',
    badge: 'E-COMMERCE',
    tagline: 'Clean apparel shop with product filtering, slide-over cart drawer, and responsive checkout UX',
    description: 'A minimalist digital storefront designed for fashion and apparel brands. Includes real-time category filtering, responsive product galleries, size selector, and persistent shopping cart.',
    detailedOverview: 'A focused, high-converting e-commerce web application. Built with clean component hierarchy, fast search indexing, client-side cart storage, and frictionless mobile checkout flow.',
    features: [
      'Interactive size, color swatch, and quantity selector',
      'Slide-over slideout cart drawer with instant subtotal calculation',
      'Faceted price and category product filters with zero page reloads',
      'Clean multi-step checkout form layout with input validation'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'State Management'],
    accentColor: 'purple',
    deliverables: ['E-Commerce Storefront', 'Slide-over Cart Drawer', 'Product Gallery'],
    visualType: 'grid-dashboard'
  },
  {
    id: 'proj-kanban-app',
    title: 'TaskPulse — Agile Sprint & Kanban Board',
    category: 'Software',
    badge: 'WEB APPLICATION',
    tagline: 'Lightweight web app for tracking sprint tasks, priorities, and daily workflows',
    description: 'An interactive single-page productivity tool. Allows teams and solo developers to create task cards, drag-and-drop between columns, filter by priority, and persist data locally.',
    detailedOverview: 'Engineered to demonstrate practical front-end software craftsmanship. Features keyboard shortcuts, responsive multi-column boards, tag management, and local storage data persistence.',
    features: [
      'Interactive column organization (To Do, In Progress, Review, Completed)',
      'Task priority tagging (Urgent, Medium, Low) with custom colors',
      'Persistent browser storage so data remains saved across sessions',
      'Instant search and tag filtering across all active tasks'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'LocalStorage API'],
    accentColor: 'cyan',
    deliverables: ['Single-Page Web App', 'Interactive Task Board', 'Local Storage Layer'],
    visualType: 'grid-dashboard'
  },
  {
    id: 'proj-service-quotes',
    title: 'AeroFix — Service Booking & Instant Quote Engine',
    category: 'Websites',
    badge: 'LOCAL BUSINESS',
    tagline: 'High-conversion service business website with dynamic price estimation and lead capture',
    description: 'A conversion-focused landing page for a residential and commercial maintenance contractor. Includes an interactive price estimator calculator, verified customer reviews, and immediate lead intake.',
    detailedOverview: 'Developed to showcase lead-generation web design for service contractors and agencies. Delivers high TrustPilot credibility signals, clear service tiers, and immediate phone/email intake.',
    features: [
      'Dynamic multi-step price estimation calculator',
      'Verified customer review slider and before/after gallery',
      'Click-to-call sticky header and emergency booking form',
      'Fast 99+ Google Lighthouse performance score'
    ],
    technologies: ['Next.js / React', 'Tailwind CSS', 'Form Validation', 'SEO Optimized'],
    accentColor: 'blue',
    deliverables: ['Lead Generation Site', 'Price Calculator Tool', 'SEO & Performance Setup'],
    visualType: 'grid-dashboard'
  }
];
