import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const OmniaforeLogo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const iconSizeClass = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-11 h-11' : 'w-9 h-9 sm:w-10 sm:h-10';
  const textSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl sm:text-2xl';
  const subtextSize = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-[11px]' : 'text-[10px]';

  return (
    <Link 
      to="/" 
      className={`group flex items-center gap-2.5 sm:gap-3 select-none transition-all duration-300 ${className}`}
      aria-label="OMNIAFORE Home"
    >
      {/* High-tech Glowing Emblem from attached logo */}
      <div className="relative flex items-center justify-center shrink-0">
        <div className={`relative ${iconSizeClass} flex items-center justify-center`}>
          <img
            src="/logo-transparent.png"
            alt="OMNIAFORE Symbol"
            className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(56,189,248,0.6)] group-hover:drop-shadow-[0_0_16px_rgba(168,85,247,0.8)] group-hover:scale-105 transition-all duration-300"
            onError={(e) => {
              // Fallback to logo.png or logo.jpg
              const target = e.currentTarget;
              if (target.src.includes('logo-transparent.png')) {
                target.src = '/logo.png';
              }
            }}
          />
        </div>

        {/* Ambient glow behind emblem */}
        <div className="absolute inset-0 bg-accent-cyan/20 rounded-full blur-md -z-10 group-hover:bg-accent-purple/35 transition-colors duration-300" />
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-display font-extrabold tracking-wider text-primary group-hover:text-white transition-colors duration-200 ${textSize}`}>
            OMNIA<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan">FORE</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
        </div>
        <span className={`font-mono text-primary-muted tracking-[0.22em] uppercase font-medium ${subtextSize}`}>
          Digital Experience Lab
        </span>
      </div>
    </Link>
  );
};
