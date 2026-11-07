<<<<<<< HEAD
# OMNIAFORE — Premium Digital Agency Portfolio

> **"We Turn Ideas Into Digital Experiences."**

A frontend digital agency portfolio built for **OMNIAFORE**. Designed with an avant-garde aesthetic combining **Catppuccin Frappé** foundation tones, **Dracula Dark** contrast, and subtle **Cyberpunk neon accents** (purple, pink, cyan, and electric blue).

---

## 🎨 Visual Identity & Color System

- **Primary Background:** `#1e1e2e` (Deep slate foundation)
- **Secondary Background:** `#232136` (Rich surface contrast)
- **Surface / Card Background:** `#303446` & `#292c3c`
- **Primary Text:** `#c6d0f5`
- **Muted Text:** `#a5adce`
- **Purple Accent:** `#bd93f9`
- **Pink Accent:** `#ff79c6`
- **Cyan Accent:** `#8be9fd`
- **Blue Accent:** `#8caaee`
- **Status Green:** `#50fa7b`

---

## 🚀 Key Features

1. **Sticky Glassmorphism Navbar:**
   - Typographic animated OMNIAFORE logo and crest.
   - Smooth scrolling between `#hero`, `#about`, `#services`, and `#contact`.
   - Dedicated route transition to `/projects`.
   - Active section tracking with glowing pill indicator and mobile responsive drawer menu.

2. **Cinematic Hero:**
   - "OMNIAFORE — We Turn Ideas Into Digital Experiences."
   - Real-time agency availability indicator (`ACCEPTING NEW CLIENT ENGAGEMENTS // Q4 2026`).
   - Ambient floating neon orbs, fine cyber grid patterns, and technical metadata telemetry.
   - Primary and secondary CTAs with micro-interactions.

3. **Cinematic Video Presentation (`/videos/intro.mp4`):**
   - "Creativity Meets Technology."
   - 16:9 responsive cinematic frame with glowing border and rounded corners.
   - HTML5 video player with custom play/pause toggle, mute/unmute, progress bar, fullscreen, and video overlay badges.
   - Graceful fallback container if video is loading or buffering.
   - Ready for instant showreel replacement: simply drop your video file into `public/videos/intro.mp4`.

4. **Five Specialized Service Disciplines:**
   - `01 — Website Development` (Personal, portfolio, corporate, wedding, and e-commerce websites; maintenance & support).
   - `02 — Video Editing & Animation` (Reels, TikToks, Shorts, commercials, motion graphics, and animated invitations).
   - `03 — Graphic Design & Image Editing` (Posters, banners, promotional creatives, invitations, and photo editing).
   - `04 — Custom Software & Digital Platforms` (E-learning portals, e-commerce platforms, dashboards, and custom web apps).
   - `05 — AI & Business Automation` (n8n/Make workflows, WhatsApp AI assistants, custom AI integrations, and AI Voice Agents).
   - Each card features numbered labels, Lucide icons, glassmorphism, hover lift, controlled neon glow, and expandable specifications.

5. **Why OMNIAFORE (Four Core Pillars):**
   - **Quality:** Carefully crafted digital experiences with attention to detail.
   - **Affordable:** Cost-effective solutions without compromising quality.
   - **Efficient:** Streamlined workflows and timely project execution.
   - **Professional:** Reliable communication, creative thinking, and professional delivery.

6. **Projects Gallery (`/projects`):**
   - Standalone gallery with interactive category filters: `All`, `Websites`, `Software`, `Graphics`, `Video`, `Automation`.
   - Real-time search query filtering by title, tech stack, or description.
   - High-tech generative SVG preview visuals for each project.
   - Interactive Case Study modal providing detailed architectural overviews, deliverables, and one-click inquiry routing.
   - Clearly labeled with `[CONCEPT PROTOTYPE]`, `[INTERNAL BLUEPRINT]`, `[DESIGN EXPLORATION]`, and `[AUTONOMOUS SUITE]` badges.

7. **Contact & Lead Intake Terminal:**
   - Direct Email: `omniafore@gmail.com` with one-click `mailto:` generator and clipboard copy with toast feedback.
   - LinkedIn profile link with clearly labeled placeholder URL.
   - Interactive project intake form with pre-formatted client email composition and instant confirmation state.

8. **Microinteractions & Polish:**
   - Framer Motion scroll-triggered staggered reveals and smooth transitions.
   - Non-intrusive neon cursor follower with spring physics (auto-disabled on touch devices or when `prefers-reduced-motion` is active).
   - Monospace section headers: `// 01 ARCHITECTURE`, `// 02 CORE CAPABILITIES`, `// 03 THE OMNIAFORE DIFFERENCE`, `// 04 DIRECT TRANSMISSION`.

---

## 📁 Project Architecture

```
portfolio/
├── public/
│   ├── favicon.svg              # Geometric glowing cyber logo
│   └── videos/
│       └── intro.mp4            # Local agency showreel video
├── src/
│   ├── components/
│   │   ├── CustomCursor.tsx     # Easing neon cursor follower
│   │   ├── Footer.tsx           # Global footer with telemetry & links
│   │   ├── Hero.tsx             # Striking hero with cyber grid & status badge
│   │   ├── Navbar.tsx           # Sticky responsive glass navbar with active pills
│   │   ├── OmniaforeLogo.tsx    # Typographic brand mark and glowing hex emblem
│   │   ├── ProjectModal.tsx     # Case-study inspection drawer
│   │   ├── ProjectVisual.tsx    # Cyberpunk generative preview graphics
│   │   ├── ServicesSection.tsx  # 5 premium expandable service cards
│   │   ├── VideoSection.tsx     # 16:9 HTML5 cinematic player & fallback
│   │   └── WhyChooseUs.tsx      # 4 core value pillars
│   ├── data/
│   │   ├── features.ts          # Why OMNIAFORE pillars
│   │   ├── projects.ts          # Archive projects across all 5 disciplines
│   │   └── services.ts          # 5 service card details & tech tags
│   ├── pages/
│   │   ├── HomePage.tsx         # Unified homepage experience
│   │   └── ProjectsPage.tsx     # Dedicated projects showcase
│   ├── types/
│   │   └── index.ts             # TypeScript definitions
│   ├── App.tsx                  # Routing & layout orchestration
│   ├── index.css                # Tailwind directives & cyber aesthetics
│   └── main.tsx                 # React DOM root
├── index.html                   # HTML entry point with Space Grotesk & Syne fonts
├── package.json                 # Dependencies & scripts
├── tailwind.config.js           # Catppuccin & Dracula theme tokens
└── vite.config.ts               # Vite configuration
```

---

## 🛠️ Development & Build

### Install Dependencies
```bash
npm install
```

### Run Local Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` to preview in real-time.

### Build for Production
```bash
npm run build
```
Creates an optimized production bundle in `/dist`.

### Preview Production Build
```bash
npm run preview
```

---

## 🎬 How to Replace the Introduction Video
To update the video shown in the **"Creativity Meets Technology"** section:
1. Export your 16:9 video as an MP4 (e.g. 1080p or 720p).
2. Save it to `public/videos/intro.mp4`.
3. The video player will immediately load and display your new showreel with all controls and glowing borders intact.

---

## 📄 License
© 2026 OMNIAFORE. All Rights Reserved.
=======
# Omniafore_Portfolio
>>>>>>> 374e46fb1d2c3f96810ac1d4113d33dcb0a16b13
