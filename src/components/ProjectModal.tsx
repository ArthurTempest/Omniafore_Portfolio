import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, ExternalLink, Sparkles, Layers, Terminal } from 'lucide-react';
import { ProjectItem } from '../types';
import { ProjectVisual } from './ProjectVisual';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (serviceName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md -z-10"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl rounded-2xl bg-[#232136] border border-surface-border shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto my-auto"
        >
          {/* Top Bar with Close */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-surface-border/60">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-accent-cyan tracking-wider uppercase">
                // ARCHIVE SPECIFICATION
              </span>
              <span className="text-primary-dim">•</span>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-surface text-accent-purple">
                {project.badge}
              </span>
            </div>
            
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-surface hover:bg-surface-cardHover text-primary hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Visual Preview */}
          <div className="mb-6">
            <ProjectVisual project={project} className="h-56 sm:h-72" />
          </div>

          {/* Title & Tagline */}
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
            {project.title}
          </h2>
          <p className="text-accent-pink font-mono text-xs sm:text-sm mb-4">
            {project.tagline}
          </p>

          {/* Detailed Overview */}
          <div className="mb-6">
            <h4 className="font-mono text-xs text-accent-cyan uppercase tracking-wider mb-2 font-semibold">
              // ARCHITECTURAL OVERVIEW
            </h4>
            <p className="text-sm text-primary-muted leading-relaxed">
              {project.detailedOverview}
            </p>
          </div>

          {/* Key Deliverables & Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 rounded-xl bg-surface/40 border border-surface-border/60">
              <h5 className="font-mono text-xs text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Core Capabilities</span>
              </h5>
              <ul className="space-y-2 text-xs text-primary-muted">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-accent-green shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-surface/40 border border-surface-border/60">
              <h5 className="font-mono text-xs text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-accent-purple" />
                <span>Scope Deliverables</span>
              </h5>
              <ul className="space-y-2 text-xs text-primary-muted">
                {project.deliverables.map((del, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-accent-purple shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="mb-8">
            <h5 className="font-mono text-xs text-primary-muted uppercase tracking-wider mb-2 font-semibold">
              // TECHNOLOGY STACK
            </h5>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-[#1e1e2e] border border-surface-border text-xs font-mono text-accent-cyan"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-surface-border/60 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="font-mono text-[11px] text-primary-dim text-center sm:text-left">
              * Note: Demonstrative concept specification for OMNIAFORE agency practice.
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-surface text-xs font-mono text-primary hover:text-white transition-colors cursor-pointer"
              >
                Close Spec
              </button>
              <button
                onClick={() => {
                  onClose();
                  onInquire(project.category);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-mono font-semibold text-[#1e1e2e] bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan hover:shadow-neon-purple transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Inquire About This Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
