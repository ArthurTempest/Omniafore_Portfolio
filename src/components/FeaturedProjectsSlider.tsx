import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  Sparkles, 
  Layers,
  ExternalLink
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectItem } from '../types';
import { ProjectVisual } from './ProjectVisual';
import { ProjectModal } from './ProjectModal';

export const FeaturedProjectsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Take top 6 featured projects
  const featured = projectsData.slice(0, 6);

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

  const maxIndex = Math.max(0, featured.length - itemsPerView);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex, isPaused]);

  const next = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-b border-surface-border/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-purple/10 border border-accent-purple/20 text-accent-purple font-mono text-xs tracking-wider uppercase mb-3">
              <span>// FEATURED WEB PROJECTS</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Selected Web Development Work.
            </h2>
            <p className="text-primary-muted text-base sm:text-lg mt-3 max-w-2xl">
              From high-conversion business websites to responsive e-commerce storefronts and interactive web apps, explore our featured builds.
            </p>
          </div>

          {/* Controls & Full Archive Link */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold tracking-wide text-primary bg-surface/80 hover:bg-surface-cardHover border border-surface-border hover:border-accent-purple transition-all duration-200"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-4 h-4 text-accent-cyan" />
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl bg-surface/80 border border-surface-border flex items-center justify-center text-primary hover:text-white hover:border-accent-purple hover:shadow-neon-purple transition-all duration-200 cursor-pointer"
                aria-label="Previous work"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl bg-surface/80 border border-surface-border flex items-center justify-center text-primary hover:text-white hover:border-accent-cyan hover:shadow-neon-cyan transition-all duration-200 cursor-pointer"
                aria-label="Next work"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div
          className="relative overflow-hidden py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <motion.div
            className="flex transition-transform duration-500 ease-out"
            animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          >
            {featured.map((project, index) => (
              <div
                key={project.id}
                className="shrink-0 px-3"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div
                  onClick={() => setSelectedProject(project)}
                  className="glow-card rounded-2xl p-5 h-full flex flex-col justify-between group cursor-pointer hover:border-accent-purple/60 transition-all duration-300"
                >
                  <div>
                    {/* Visual Preview */}
                    <div className="mb-4 overflow-hidden rounded-xl group-hover:scale-[1.02] transition-transform duration-300">
                      <ProjectVisual project={project} />
                    </div>

                    {/* Metadata Header */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-accent-cyan tracking-wider uppercase font-semibold">
                        {project.category}
                      </span>
                      <span className="font-mono text-[10px] text-accent-pink px-2 py-0.5 rounded bg-[#1e1e2e] border border-surface-border">
                        {project.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-accent-purple transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-primary-muted text-xs leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="pt-3 border-t border-surface-border/50">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1e1e2e] text-primary-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono font-medium text-accent-cyan group-hover:text-accent-pink transition-colors">
                      <span>Inspect Project</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Dots Indicator */}
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
                aria-label={`Go to featured slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={() => {
          setSelectedProject(null);
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </section>
  );
};
