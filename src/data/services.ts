import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-dev',
    number: '01',
    title: 'Website Development',
    shortDesc: 'Crafting responsive, blazing-fast, and visually distinct web destinations tailored to conversion and digital presence.',
    details: [
      'Personal, portfolio, and high-impact digital resumes',
      'Corporate & enterprise agency web platforms',
      'Educational institutions & academic portals',
      'Digital wedding invitations & curated event sites',
      'Full-stack e-commerce storefronts & checkouts',
      'Complete web redesigns, performance tuning & 24/7 technical maintenance'
    ],
    techTags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Responsive Design', 'SEO Optimization'],
    iconName: 'Globe',
    accentColor: 'cyan'
  },
  {
    id: 'video-editing',
    number: '02',
    title: 'Video Editing & Animation',
    shortDesc: 'Transforming raw footage into high-retention cinematic narratives, kinetic typography, and motion graphic assets.',
    details: [
      'Viral-engineered Instagram Reels, TikToks & YouTube Shorts',
      'Commercial promo advertisements & brand story reels',
      'Advanced 2D/3D motion graphics & title sequences',
      'Animated wedding, gala & summit invitation films',
      'Sound design, color grading & VFX compositing'
    ],
    techTags: ['Motion Graphics', 'Cinematic Grading', 'Short-Form Reels', 'Kinetic Typography', 'Promos'],
    iconName: 'Film',
    accentColor: 'pink'
  },
  {
    id: 'graphic-design',
    number: '03',
    title: 'Graphic Design & Image Editing',
    shortDesc: 'Sculpting unforgettable visual assets, bold editorial posters, promotional creatives, and social brand kits.',
    details: [
      'Cinematic posters, billboards & marketing banners',
      'Interactive & animated promotional creatives',
      'Custom digital wedding & private event invitations',
      'High-end photo manipulation, retouching & asset grading',
      'Cohesive social media identity systems & brand decks'
    ],
    techTags: ['Visual Identity', 'Poster Design', 'Photo Retouching', 'Social Creatives', 'Typography'],
    iconName: 'Palette',
    accentColor: 'purple'
  },
  {
    id: 'custom-software',
    number: '04',
    title: 'Custom Software & Platforms',
    shortDesc: 'Engineering robust, scalable web applications, management portals, and data-driven client systems.',
    details: [
      'Next-generation e-learning & courseware platforms',
      'Multi-vendor e-commerce engines & inventory suites',
      'Executive analytics dashboards & operational control panels',
      'Bespoke web applications & API architecture',
      'Student portals, automated testing & assessment systems'
    ],
    techTags: ['Web Applications', 'SaaS Architecture', 'Dashboards', 'API Integrations', 'Databases'],
    iconName: 'Cpu',
    accentColor: 'blue'
  },
  {
    id: 'ai-automation',
    number: '05',
    title: 'AI & Business Automation',
    shortDesc: 'Integrating autonomous intelligence, conversational assistants, and automated pipelines to supercharge business velocity.',
    details: [
      'n8n & Make complex multi-system workflow automation',
      'Intelligent WhatsApp AI business assistants & lead capture bots',
      'Custom LLM integrations, embeddings & agentic knowledge bases',
      'Autonomous AI-powered business workflows & CRM sync',
      'AI Voice Agents for automated calling, client support & calendar booking'
    ],
    techTags: ['n8n / Make', 'WhatsApp AI', 'Voice Agents', 'Autonomous Workflows', 'Custom LLMs'],
    iconName: 'Bot',
    accentColor: 'purple'
  },
  {
    id: 'full-suite',
    number: '06',
    title: 'Full Digital Suite & Consulting',
    shortDesc: 'End-to-end dedicated engineering, rapid technical prototyping, and comprehensive brand transformation delivered through agile sprints.',
    details: [
      'Dedicated senior full-stack development & architecture team',
      'Rapid MVP prototyping & expedited product launches',
      'Cross-discipline creative & technical execution',
      'Continuous feature delivery, code review & performance audits',
      'Priority direct communication & fast turnaround SLA'
    ],
    techTags: ['Fast Sprints', 'Full Architecture', 'Dedicated SLA', 'Code Audit', '24/7 Support'],
    iconName: 'Sparkles',
    accentColor: 'cyan'
  }
];
