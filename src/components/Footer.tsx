import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Linkedin, ArrowUp, Terminal, Shield, Sparkles } from 'lucide-react';
import { OmniaforeLogo } from './OmniaforeLogo';

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (targetId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/#' + targetId);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#080812]/95 border-t border-surface-border text-primary pt-16 pb-12 overflow-hidden z-20">
      {/* Subtle top glow line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-glow-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <OmniaforeLogo size="lg" />
            <p className="font-display font-medium text-base text-primary leading-snug">
              "We Turn Ideas Into Digital Experiences."
            </p>
            <p className="text-xs text-primary-muted max-w-sm leading-relaxed">
              A premium independent digital agency combining creative design, software engineering, 
              fast sprint delivery, and autonomous AI automation.
            </p>
            
            <div className="pt-2 flex items-center gap-3">
              <a
                href="mailto:omniafore@gmail.com"
                aria-label="Email OMNIAFORE (omniafore@gmail.com)"
                className="w-10 h-10 rounded-xl bg-surface/80 border border-surface-border flex items-center justify-center text-primary-muted hover:text-accent-cyan hover:border-accent-cyan/50 hover:shadow-neon-cyan transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/aryanrai135/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aryan Rai on LinkedIn"
                className="w-10 h-10 rounded-xl bg-surface/80 border border-surface-border flex items-center justify-center text-primary-muted hover:text-accent-blue hover:border-accent-blue/50 hover:shadow-[0_0_15px_rgba(140,170,238,0.4)] transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Col */}
          <div>
            <h4 className="font-mono text-xs text-accent-cyan uppercase tracking-wider mb-4 font-semibold">
              // NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs text-primary-muted font-medium">
              <li>
                <button
                  onClick={() => handleNav('hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('why-us')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Why Us
                </button>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Projects</span>
                  <span className="font-mono text-[9px] px-1 py-0.2 rounded bg-accent-purple/20 text-accent-purple">
                    GALLERY
                  </span>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services Col */}
          <div>
            <h4 className="font-mono text-xs text-accent-purple uppercase tracking-wider mb-4 font-semibold">
              // DISCIPLINES
            </h4>
            <ul className="space-y-2.5 text-xs text-primary-muted font-mono">
              <li>01 Website Development</li>
              <li>02 Video & Motion Design</li>
              <li>03 Graphic & Brand Collateral</li>
              <li>04 Custom Software & SaaS</li>
              <li>05 AI & Business Automation</li>
            </ul>
          </div>

          {/* Operational Status / Specs Col */}
          <div>
            <h4 className="font-mono text-xs text-accent-pink uppercase tracking-wider mb-4 font-semibold">
              // TELEMETRY
            </h4>
            <div className="space-y-3 font-mono text-[11px] text-primary-muted">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                <span className="text-white">STATUS: OPERATIONAL</span>
              </div>
              <div>LOCATION: GLOBAL REMOTE</div>
              <div className="text-accent-cyan">SSL: 256-BIT ENCRYPTED</div>
              <div className="text-accent-green font-semibold">DELIVERY: FAST SPRINTS</div>
              <div className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-surface-border text-xs text-primary hover:text-white hover:border-accent-purple transition-all cursor-pointer"
                >
                  <ArrowUp className="w-3.5 h-3.5 text-accent-purple" />
                  <span>Back to Top</span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};
