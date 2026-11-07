import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Award, 
  Rocket, 
  CheckCircle, 
  ChevronLeft, 
  ChevronRight, 
  LayoutGrid, 
  SlidersHorizontal,
  Flame,
  Check
} from 'lucide-react';
import { featuresData } from '../data/features';

export const WhyChooseUs: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');
  const [itemsPerView, setItemsPerView] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive itemsPerView
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, featuresData.length - itemsPerView);

  // Auto-advance slider every 4.5s unless paused
  useEffect(() => {
    if (viewMode !== 'slider' || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(interval);
  }, [maxIndex, isPaused, viewMode]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-accent-cyan" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-accent-purple" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-accent-pink" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-accent-green" />;
      case 'Award':
        return <Award className="w-6 h-6 text-accent-blue" />;
      default:
        return <CheckCircle className="w-6 h-6 text-accent-cyan" />;
    }
  };

  const getAccentBorder = (accent: string) => {
    switch (accent) {
      case 'cyan':
        return 'group-hover:border-accent-cyan/60 group-hover:shadow-[0_0_25px_-5px_rgba(139,233,253,0.3)]';
      case 'purple':
        return 'group-hover:border-accent-purple/60 group-hover:shadow-[0_0_25px_-5px_rgba(189,147,249,0.3)]';
      case 'pink':
        return 'group-hover:border-accent-pink/60 group-hover:shadow-[0_0_25px_-5px_rgba(255,121,198,0.3)]';
      case 'green':
        return 'group-hover:border-accent-green/60 group-hover:shadow-[0_0_25px_-5px_rgba(80,250,123,0.3)]';
      case 'blue':
      default:
        return 'group-hover:border-accent-blue/60 group-hover:shadow-[0_0_25px_-5px_rgba(140,170,238,0.3)]';
    }
  };

  return (
    <section id="why-us" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-background-secondary/40 border-y border-surface-border/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-pink/10 border border-accent-pink/20 text-accent-pink font-mono text-xs tracking-wider uppercase mb-3">
              <span>// 03 THE OMNIAFORE ADVANTAGE</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Why Choose OMNIAFORE?
            </h2>
            <p className="text-primary-muted text-base sm:text-lg mt-3 max-w-2xl">
              Engineered on velocity, technical discipline, and transparent collaboration. Here is how we redefine digital product delivery.
            </p>
          </div>

          {/* Slider / Grid Mode Switcher & Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            {/* View Mode Toggle */}
            <div className="flex items-center p-1 rounded-xl bg-surface/60 border border-surface-border">
              <button
                onClick={() => setViewMode('slider')}
                className={`p-2 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
                  viewMode === 'slider' 
                    ? 'bg-gradient-to-r from-accent-purple/30 to-accent-cyan/30 text-white border border-accent-purple/40 shadow-sm' 
                    : 'text-primary-dim hover:text-white'
                }`}
                title="Slider view"
                aria-label="Slider view"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="hidden sm:inline">Slider</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-gradient-to-r from-accent-purple/30 to-accent-cyan/30 text-white border border-accent-purple/40 shadow-sm' 
                    : 'text-primary-dim hover:text-white'
                }`}
                title="Grid view"
                aria-label="Grid view"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden sm:inline">All</span>
              </button>
            </div>

            {/* Slider Next/Prev Arrows (shown in slider mode) */}
            {viewMode === 'slider' && (
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-xl bg-surface/80 border border-surface-border flex items-center justify-center text-primary hover:text-white hover:border-accent-purple hover:shadow-neon-purple transition-all duration-200 cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-xl bg-surface/80 border border-surface-border flex items-center justify-center text-primary hover:text-white hover:border-accent-cyan hover:shadow-neon-cyan transition-all duration-200 cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Content Area */}
        {viewMode === 'slider' ? (
          /* Interactive Carousel / Slider */
          <div 
            ref={containerRef}
            className="relative overflow-hidden py-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <motion.div 
              className="flex transition-transform duration-500 ease-out"
              animate={{ 
                x: `-${currentIndex * (100 / itemsPerView)}%` 
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            >
              {featuresData.map((feature, index) => (
                <div
                  key={feature.id}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`glow-card rounded-2xl p-5 sm:p-7 h-full flex flex-col justify-between group transition-all duration-300 ${getAccentBorder(
                      feature.accentColor
                    )}`}
                  >
                    <div>
                      {/* Metric / Category Chip */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-3 rounded-xl bg-surface/80 border border-surface-border group-hover:scale-110 group-hover:border-accent-cyan/40 transition-all duration-300">
                          {getIcon(feature.iconName)}
                        </div>
                        <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-[#1e1e2e] text-accent-cyan border border-surface-border font-semibold">
                          {feature.metric}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-2xl text-white mb-1 group-hover:text-accent-purple transition-colors">
                        {feature.title}
                      </h3>

                      {/* Subtagline */}
                      <span className="font-mono text-xs text-accent-pink block mb-3 font-medium">
                        {feature.tagline}
                      </span>

                      {/* Description */}
                      <p className="text-primary-muted text-sm leading-relaxed mb-4">
                        {feature.description}
                      </p>
                    </div>

                    {/* Bottom Subtle Indicator */}
                    <div className="pt-4 border-t border-surface-border/40 flex items-center justify-between text-xs font-mono text-primary-dim group-hover:text-primary transition-colors">
                      <span>PILLAR // 0{index + 1}</span>
                      <span className="flex items-center gap-1 text-[11px] text-accent-green">
                        <Check className="w-3 h-3" />
                        <span>VERIFIED</span>
                      </span>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* Pagination Indicators / Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx 
                      ? 'w-8 bg-gradient-to-r from-accent-purple to-accent-cyan shadow-neon-purple' 
                      : 'w-2 bg-surface hover:bg-surface-border'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Grid View Mode */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
            {featuresData.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`glow-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 ${getAccentBorder(
                  feature.accentColor
                )}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-surface/80 border border-surface-border group-hover:scale-110 group-hover:border-accent-cyan/40 transition-all duration-300">
                      {getIcon(feature.iconName)}
                    </div>
                    <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-[#1e1e2e] text-accent-cyan border border-surface-border font-semibold">
                      {feature.metric}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-white mb-1 group-hover:text-accent-purple transition-colors">
                    {feature.title}
                  </h3>

                  <span className="font-mono text-xs text-accent-pink block mb-3 font-medium">
                    {feature.tagline}
                  </span>

                  <p className="text-primary-muted text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-border/40 flex items-center justify-between text-xs font-mono text-primary-dim group-hover:text-primary transition-colors">
                  <span>PILLAR // 0{index + 1}</span>
                  <span className="flex items-center gap-1 text-[11px] text-accent-green">
                    <Check className="w-3 h-3" />
                    <span>VERIFIED</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Technical Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-surface-card via-surface to-surface-card border border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-accent-green animate-ping shrink-0" />
            <div>
              <h4 className="font-display font-semibold text-sm text-white">Full Sprint Guarantee & Direct SLA</h4>
              <p className="text-xs text-primary-muted">
                Every project comes with milestone tracking, fast delivery guarantees, dedicated Slack/Email access, and post-launch monitoring.
              </p>
            </div>
          </div>
          <div className="font-mono text-xs text-accent-cyan shrink-0">
            FAST DELIVERY // ZERO OVERHEAD // 100% IP OWNERSHIP
          </div>
        </motion.div>

      </div>
    </section>
  );
};
