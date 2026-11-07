import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { OmniaforeLogo } from './OmniaforeLogo';

interface NavItem {
  name: string;
  href: string;
  isSection: boolean;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#hero', isSection: true },
  { name: 'About Us', href: '#about', isSection: true },
  { name: 'Services', href: '#services', isSection: true },
  { name: 'Why Us', href: '#why-us', isSection: true },
  { name: 'Projects', href: '/projects', isSection: false },
  { name: 'Contact', href: '#contact', isSection: true },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll listener for sticky solid background & active section detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (location.pathname === '/') {
        const sections = ['contact', 'why-us', 'services', 'about', 'hero'];
        const scrollPosition = window.scrollY + 200;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el && el.offsetTop <= scrollPosition) {
            if (sectionId === 'hero') setActiveSection('Home');
            else if (sectionId === 'about') setActiveSection('About Us');
            else if (sectionId === 'services') setActiveSection('Services');
            else if (sectionId === 'why-us') setActiveSection('Why Us');
            else if (sectionId === 'contact') setActiveSection('Contact');
            break;
          }
        }
      } else if (location.pathname === '/projects') {
        setActiveSection('Projects');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle navigation click
  const handleNavClick = (item: NavItem) => {
    setMobileMenuOpen(false);

    if (!item.isSection) {
      navigate(item.href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection(item.name);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/' + item.href);
      setTimeout(() => {
        const targetId = item.href.replace('#', '');
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const targetId = item.href.replace('#', '');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveSection(item.name);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 shadow-2xl backdrop-blur-xl bg-[#13141f]/90 border-b border-[#303446]'
            : 'bg-transparent py-4 sm:py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Wordmark with uploaded emblem */}
          <OmniaforeLogo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#232136]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-surface-border">
            {navItems.map((item) => {
              const isActive = activeSection === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`relative px-3.5 py-1.5 text-xs xl:text-sm font-medium transition-colors duration-200 rounded-full flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-primary-muted hover:text-primary hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.name === 'Projects' && (
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-accent-purple/20 text-accent-purple border border-accent-purple/30">
                      NEW
                    </span>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-cyan/20 border border-accent-purple/40 rounded-full shadow-[0_0_15px_rgba(189,147,249,0.3)] -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick({ name: 'Contact', href: '#contact', isSection: true })}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold tracking-wide uppercase transition-all duration-300 bg-surface-card hover:bg-surface-cardHover text-primary border border-surface-border hover:border-accent-purple hover:shadow-neon-purple group cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5 text-accent-cyan group-hover:rotate-12 transition-transform" />
              <span>Let's Build</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent-purple group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-surface/80 border border-surface-border text-primary hover:text-white hover:border-accent-purple/50 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#080812]/98 backdrop-blur-2xl border-b border-surface-border shadow-2xl lg:hidden px-5 py-5 max-h-[calc(100vh-60px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              <div className="font-mono text-[10px] text-accent-cyan tracking-widest uppercase mb-1">
                // NAVIGATION PROTOCOL
              </div>
              {navItems.map((item) => {
                const isActive = activeSection === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-left text-sm sm:text-base font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-accent-purple/20 to-accent-cyan/10 text-white border border-accent-purple/30'
                        : 'text-primary-muted hover:text-primary hover:bg-surface/50'
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="font-mono text-xs text-accent-cyan">
                      {item.name === 'Projects' ? 'ARCHIVE ↗' : '→'}
                    </span>
                  </button>
                );
              })}

              <div className="pt-4 mt-2 border-t border-surface-border/50">
                <button
                  onClick={() => handleNavClick({ name: 'Contact', href: '#contact', isSection: true })}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-[#1e1e2e] bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan shadow-neon-purple cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
