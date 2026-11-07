import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Film, 
  Palette, 
  Cpu, 
  Bot, 
  ArrowUpRight, 
  ChevronDown, 
  Check, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  LayoutGrid
} from 'lucide-react';
import { servicesData } from '../data/services';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, servicesData.length - itemsPerView);

  // Auto-play slider
  useEffect(() => {
    if (viewMode !== 'slider' || isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex, isPaused, viewMode]);

  const nextSlide = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  const toggleExpand = (id: string) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-accent-cyan" />;
      case 'Film':
        return <Film className="w-6 h-6 text-accent-pink" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-accent-purple" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-accent-blue" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-accent-green" />;
      default:
        return <Sparkles className="w-6 h-6 text-accent-cyan" />;
    }
  };

  const getAccentBorderClass = (color: string) => {
    switch (color) {
      case 'cyan':
        return 'group-hover:border-accent-cyan/60 group-hover:shadow-[0_0_25px_-5px_rgba(139,233,253,0.3)]';
      case 'pink':
        return 'group-hover:border-accent-pink/60 group-hover:shadow-[0_0_25px_-5px_rgba(255,121,198,0.3)]';
      case 'blue':
        return 'group-hover:border-accent-blue/60 group-hover:shadow-[0_0_25px_-5px_rgba(140,170,238,0.3)]';
      default:
        return 'group-hover:border-accent-purple/60 group-hover:shadow-[0_0_25px_-5px_rgba(189,147,249,0.3)]';
    }
  };

  const renderCard = (service: ServiceItem) => {
    const isExpanded = expandedCardId === service.id;

    return (
      <div
        key={service.id}
        className={`glow-card rounded-2xl p-5 sm:p-7 flex flex-col justify-between h-full group transition-all duration-300 ${getAccentBorderClass(
          service.accentColor
        )}`}
      >
        <div className="flex flex-col flex-grow">
          {/* Top Bar: Number & Icon */}
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-2xl sm:text-3xl font-bold text-primary-dim group-hover:text-white transition-colors duration-200">
              {service.number}
            </span>
            <div className="p-3 rounded-xl bg-surface/80 border border-surface-border group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              {getIcon(service.iconName)}
            </div>
          </div>

          {/* Service Title - fixed-height zone */}
          <div className="min-h-[3.5rem] flex items-start mb-2">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-accent-cyan transition-colors leading-tight">
              {service.title}
            </h3>
          </div>

          {/* Short Description */}
          <div className="min-h-[5rem] mb-4">
            <p className="text-primary-muted text-sm leading-relaxed line-clamp-4">
              {service.shortDesc}
            </p>
          </div>

          {/* Tech Tags preview */}
          <div className="flex flex-wrap items-start gap-1.5 mb-4 min-h-[2rem]">
            {service.techTags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1e1e2e] text-primary-muted border border-surface-border/80 shrink-0"
              >
                {tag}
              </span>
            ))}
            {service.techTags.length > 3 && (
              <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-surface text-accent-purple shrink-0">
                +{service.techTags.length - 3} more
              </span>
            )}
          </div>

          {/* Expandable Details Container */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden pt-3 border-t border-surface-border/60 mb-4"
              >
                <div className="font-mono text-[11px] text-accent-purple mb-2 tracking-wider uppercase font-semibold">
                  // DELIVERABLES & SCOPE
                </div>
                <ul className="space-y-2 mb-4">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-primary">
                      <Check className="w-3.5 h-3.5 text-accent-green mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="font-mono text-[11px] text-accent-cyan mb-2 tracking-wider uppercase font-semibold">
                  // STACK HIGHLIGHTS
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {service.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-card text-accent-cyan border border-accent-cyan/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Card Actions Footer - Anchored to bottom */}
        <div className="pt-4 border-t border-surface-border/40 mt-auto flex items-center justify-between">
          <button
            onClick={() => toggleExpand(service.id)}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary-muted hover:text-white transition-colors cursor-pointer"
          >
            <span>{isExpanded ? 'Hide Specs' : 'Expand Specs'}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-300 ${
                isExpanded ? 'rotate-180 text-accent-pink' : ''
              }`}
            />
          </button>

          <button
            onClick={() => {
              if (onSelectService) {
                onSelectService(service.title);
              } else {
                const contactEl = document.getElementById('contact');
                if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent-cyan hover:text-accent-pink transition-colors group/btn cursor-pointer"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 cyber-grid-dense">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-surface-border/60 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan font-mono text-xs tracking-wider uppercase mb-3">
              <span>// 02 CORE CAPABILITIES</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              What We Bring to Life.
            </h2>
            <p className="text-primary-muted text-sm sm:text-base max-w-md mt-2">
              Six specialized disciplines unified by technical precision, modern aesthetics, and seamless execution.
            </p>
          </div>

          {/* Controls: Mode Switch & Prev/Next */}
          <div className="flex items-center gap-3 shrink-0">
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

            {viewMode === 'slider' && (
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-xl bg-surface/80 border border-surface-border flex items-center justify-center text-primary hover:text-white hover:border-accent-purple hover:shadow-neon-purple transition-all duration-200 cursor-pointer"
                  aria-label="Previous service"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-xl bg-surface/80 border border-surface-border flex items-center justify-center text-primary hover:text-white hover:border-accent-cyan hover:shadow-neon-cyan transition-all duration-200 cursor-pointer"
                  aria-label="Next service"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Content Area */}
        {viewMode === 'slider' ? (
          <div
            className="relative overflow-hidden py-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <motion.div
              className="flex items-stretch"
              animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}>
              {servicesData.map((service) => (
                <div
                  key={service.id}
                  className="shrink-0 px-3 flex"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="flex flex-col w-full">
                    {renderCard(service)}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Pagination Dots */}
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
                  aria-label={`Go to service slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4 items-stretch">
            {servicesData.map((service) => (
              <div key={service.id} className="h-full flex flex-col">
                {renderCard(service)}
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
