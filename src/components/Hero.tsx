import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Terminal, ChevronRight, Zap } from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
  onGetInTouch: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onGetInTouch }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden w-full"
    >
      {/* Strictly contained ambient glow orbs — lightweight without expensive animation overhead */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 flex items-center justify-center">
        <div
          className="absolute -top-12 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(123,47,255,0.35) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.3) 0%, transparent 70%)' }}
        />
      </div>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto w-full text-center relative z-10 flex flex-col items-center min-w-0">

        {/* Glowing Brand Mark Emblem */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-4 flex items-center justify-center"
        >
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
            <div className="absolute inset-0 bg-accent-cyan/20 rounded-full blur-xl animate-pulse" />
            <img
              src="/logo-transparent.png"
              alt="OMNIAFORE Emblem"
              className="w-full h-full object-contain filter drop-shadow-[0_0_14px_rgba(0,245,255,0.65)] drop-shadow-[0_0_26px_rgba(123,47,255,0.45)]"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src.includes('logo-transparent.png')) {
                  target.src = '/logo.png';
                }
              }}
            />
          </div>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card/85 border border-surface-border backdrop-blur-md mb-6 group hover:border-accent-purple/50 transition-colors max-w-full"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
          </span>
          <span className="font-mono text-[9px] sm:text-xs tracking-wider text-primary-muted whitespace-nowrap">
            ACCEPTING NEW CLIENTS // 2026
          </span>
          <span className="font-mono text-[8px] sm:text-[10px] text-accent-cyan px-1.5 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/30 whitespace-nowrap shrink-0">
            FAST SPRINT
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 w-full flex flex-col items-center"
        >
          <span className="font-mono text-[10px] sm:text-xs md:text-sm tracking-[0.16em] sm:tracking-[0.28em] text-accent-cyan uppercase font-semibold block mb-2 px-2 leading-tight">
            // DIGITAL ARCHITECTURE & CREATIVE ENGINEERING
          </span>

          {/* OMNIAFORE Brand Title - Ample padding and leading so glyphs and gradients never clip */}
          <h1 className="font-display font-extrabold leading-[1.15] tracking-tight text-white whitespace-nowrap max-w-full select-none py-2 px-4 text-[clamp(2rem,8.2vw,6.8rem)]">
            <span>OMNIA</span>
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #7b2fff 0%, #ff00aa 50%, #00f5ff 100%)' }}
            >
              FORE
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans font-semibold text-lg sm:text-2xl md:text-3xl lg:text-4xl text-primary max-w-3xl leading-snug mb-4 px-2"
        >
          We Turn Ideas Into{' '}
          <span
            className="underline decoration-accent-purple/60 decoration-wavy decoration-2 text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(135deg, #7b2fff, #00f5ff)' }}
          >
            Digital Experiences
          </span>.
        </motion.p>

        {/* Body Description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-base lg:text-lg text-primary-muted max-w-2xl mx-auto leading-relaxed mb-8 px-2"
        >
          OMNIAFORE is a multidisciplinary digital agency bridging high-end web development,
          custom software, cinematic motion design, and autonomous AI automation. We build resilient,
          immaculate digital solutions designed to outperform.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto px-2"
        >
          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-xl text-sm font-semibold text-[#080812] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer hover:scale-[1.02] shadow-[0_0_25px_rgba(123,47,255,0.4)]"
            style={{ background: 'linear-gradient(135deg, #7b2fff, #ff00aa, #00f5ff)' }}
          >
            <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform shrink-0" />
            <span>Explore Our Services</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
          </button>

          <button
            onClick={onGetInTouch}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-xl text-sm font-medium text-primary bg-[#13141f] hover:bg-[#1e1f30] border border-surface-border hover:border-accent-purple/60 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer hover:scale-[1.02]"
          >
            <Terminal className="w-4 h-4 text-accent-cyan group-hover:text-accent-pink transition-colors shrink-0" />
            <span>Get In Touch</span>
          </button>
        </motion.div>

        {/* Telemetry / Meta Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-surface-border/40 w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-left"
        >
          {[
            { label: '// DOMAIN', color: 'text-accent-purple', val: 'Full-Stack Digital', border: 'hover:border-accent-purple/40' },
            { label: '// ARCHITECTURE', color: 'text-accent-cyan', val: 'Modern Web & Cloud', border: 'hover:border-accent-cyan/40' },
            { label: '// AUTOMATION', color: 'text-accent-pink', val: 'n8n, Voice & AI', border: 'hover:border-accent-pink/40' },
            { label: '// TURNAROUND', color: 'text-accent-green', val: 'Fast Sprint Delivery', border: 'hover:border-accent-green/40', icon: true },
          ].map((m) => (
            <div key={m.label} className={`bg-surface/25 p-2.5 sm:p-3 rounded-xl border border-surface-border/40 backdrop-blur-sm transition-colors min-w-0 ${m.border}`}>
              <span className={`font-mono text-[9px] sm:text-[10px] block uppercase font-semibold mb-1 truncate ${m.color}`}>
                {m.label}
              </span>
              <span className="font-medium text-xs sm:text-sm text-white flex items-center gap-1.5 break-words leading-tight">
                {m.icon && <Zap className="w-3 h-3 text-accent-green shrink-0" />}
                <span className="truncate">{m.val}</span>
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-8 cursor-pointer text-primary-muted hover:text-accent-cyan transition-colors"
          onClick={onExploreServices}
          aria-label="Scroll to services"
        >
          <ArrowDown className="w-5 h-5 mx-auto opacity-60" />
        </motion.div>
      </div>
    </section>
  );
};
