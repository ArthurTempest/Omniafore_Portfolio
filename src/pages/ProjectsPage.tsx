import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Filter, 
  Search, 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  ArrowLeft,
  Terminal,
  ChevronRight
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCategory, ProjectItem } from '../types';
import { ProjectVisual } from '../components/ProjectVisual';
import { ProjectModal } from '../components/ProjectModal';

const categories: ProjectCategory[] = ['All', 'Websites', 'Software'];

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const navigate = useNavigate();

  // Filtered projects list based on Category and Search Query
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Handle case study inquiry
  const handleInquireFromModal = (category: string) => {
    let serviceMapping = 'Website Development';
    if (category === 'Video') serviceMapping = 'Video Editing & Animation';
    else if (category === 'Graphics') serviceMapping = 'Graphic Design & Image Editing';
    else if (category === 'Software') serviceMapping = 'Custom Software & Digital Platforms';
    else if (category === 'Automation') serviceMapping = 'AI & Business Automation';

    navigate('/#contact');
    setTimeout(() => {
      const contactEl = document.getElementById('contact');
      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen relative"
    >
      {/* Background Cyber Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-purple/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Top Breadcrumb & Return CTA */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-xs font-mono text-primary-muted hover:text-white transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Return to Homepage</span>
        </button>

        <div className="font-mono text-xs text-accent-cyan flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          <span>PROJECT ARCHIVE // LIVE REPOSITORY</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-purple/10 border border-accent-purple/20 text-accent-purple font-mono text-xs tracking-wider uppercase mb-3">
          <span>// 04 DIGITAL PORTFOLIO & WEB PROJECTS</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight mb-4">
          Curated Web Development Work.
        </h1>
        <p className="text-primary-muted text-base sm:text-lg leading-relaxed">
          Explore our portfolio of responsive web applications, modern business landing pages, e-commerce storefronts, 
          and agile software tools. Engineered for fast load times, clean code architecture, and high conversion.
        </p>
      </div>

      {/* Controls Bar: Category Filters & Search */}
      <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-surface-border pb-6">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? projectsData.length 
              : projectsData.filter(p => p.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-accent-purple to-accent-cyan text-[#1e1e2e] font-semibold shadow-neon-purple'
                    : 'bg-surface/80 text-primary-muted hover:text-white hover:bg-surface-cardHover border border-surface-border'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded ${isActive ? 'bg-black/20 text-black font-bold' : 'bg-[#1e1e2e] text-primary-dim'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-primary-dim absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search stack, title, scope..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#232136] border border-surface-border text-xs text-primary focus:outline-none focus:border-accent-purple transition-all placeholder:text-primary-dim"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-mono text-primary-dim hover:text-white"
            >
              CLEAR
            </button>
          )}
        </div>

      </div>

      {/* Projects Gallery Grid */}
      {filteredProjects.length > 0 ? (
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="glow-card rounded-2xl p-5 flex flex-col justify-between group cursor-pointer hover:border-accent-purple/50 transition-all duration-300"
              >
                <div>
                  {/* Thumbnail Preview Visual */}
                  <div className="mb-4 overflow-hidden rounded-xl group-hover:scale-[1.02] transition-transform duration-300">
                    <ProjectVisual project={project} />
                  </div>

                  {/* Category & Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-accent-cyan tracking-wider uppercase">
                      {project.category}
                    </span>
                    <span className="font-mono text-[10px] text-accent-pink px-2 py-0.5 rounded bg-[#1e1e2e] border border-surface-border">
                      {project.badge}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-accent-purple transition-colors">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-primary-muted text-xs leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Card Footer: Tech tags & View Trigger */}
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
                    <span>Inspect Specification</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        /* Empty State */
        <div className="py-20 text-center flex flex-col items-center">
          <Terminal className="w-12 h-12 text-primary-dim mb-4" />
          <h3 className="font-display font-semibold text-lg text-white mb-2">No matching archive items found</h3>
          <p className="text-primary-muted text-xs max-w-sm mb-6">
            Try adjusting your search criteria or resetting category filters to display all agency concept items.
          </p>
          <button
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-lg bg-surface text-xs font-mono text-white border border-surface-border hover:border-accent-purple transition-all"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Bottom Custom Project Callout */}
      <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#232136] via-surface to-[#232136] border border-surface-border text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-mono text-xs text-accent-pink block mb-1 uppercase tracking-wider">
            // BESPOKE SPECIFICATIONS
          </span>
          <h3 className="font-display font-bold text-2xl text-white mb-2">
            Have a unique requirement beyond these concepts?
          </h3>
          <p className="text-primary-muted text-xs sm:text-sm max-w-xl">
            Our engineering team designs custom tailored architectures for startups, established enterprises, and creative founders.
          </p>
        </div>

        <button
          onClick={() => {
            navigate('/#contact');
            setTimeout(() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="shrink-0 px-6 py-3.5 rounded-xl text-xs font-mono font-semibold tracking-wider uppercase text-[#1e1e2e] bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan hover:shadow-neon-purple transition-all duration-300 flex items-center gap-2 cursor-pointer"
        >
          <span>Initiate Project Brief</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Project Case Study Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={handleInquireFromModal}
      />

    </motion.main>
  );
};
