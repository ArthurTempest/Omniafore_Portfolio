import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Concept to Production',
      desc: 'We transform abstract ideas and ambitious design briefs into scalable, battle-tested production platforms using modern component architecture and rigorous prototyping.',
      accent: 'border-accent-cyan/30 text-accent-cyan',
      tag: 'ARCHITECTURE'
    },
    {
      num: '02',
      title: 'High-Tech Aesthetic Discipline',
      desc: 'Controlled neon palettes, dark foundation tones, and kinetic micro-animations that command authority without clutter, elevating your brand into an unforgettable digital flagship.',
      accent: 'border-accent-purple/30 text-accent-purple',
      tag: 'DESIGN LANGUAGE'
    },
    {
      num: '03',
      title: 'Autonomous & Scalable Systems',
      desc: 'Beyond standard web design: we architect automated n8n workflows, AI voice dispatchers, and custom SaaS platforms built to scale your business operations 24/7.',
      accent: 'border-accent-pink/30 text-accent-pink',
      tag: 'INTELLIGENCE'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-background-secondary/40 border-b border-surface-border/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-purple/10 border border-accent-purple/20 text-accent-purple font-mono text-xs tracking-wider uppercase mb-3"
          >
            <span>// 01 ARCHITECTURE & AGENCY VISION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight mb-4"
          >
            Creativity Meets Technology.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary-muted text-base sm:text-lg leading-relaxed"
          >
            At OMNIAFORE, we engineer digital artifacts that capture attention and drive measurable business impact. 
            From responsive, high-converting interfaces to autonomous intelligent backends, we bridge the gap between creative visual 
            storytelling and high-performance software engineering.
          </motion.p>
        </div>

        {/* 3 Strategic Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glow-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-accent-cyan/50 hover:shadow-neon-cyan transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#1e1e2e] text-accent-cyan border border-surface-border font-semibold">
                    // {pillar.tag}
                  </span>
                  <span className="font-mono text-2xl font-bold text-primary-dim group-hover:text-white transition-colors">
                    {pillar.num}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-accent-cyan transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-primary-muted leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-border/40 flex items-center justify-between text-xs font-mono text-primary-dim group-hover:text-primary transition-colors">
                <span>OPERATIONAL SPECIFICATION</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
