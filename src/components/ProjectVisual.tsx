import React from 'react';
import { ProjectItem } from '../types';

interface ProjectVisualProps {
  project: ProjectItem;
  className?: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ project, className = '' }) => {
  const { category, visualType, accentColor } = project;

  const getAccentHex = (color: string) => {
    switch (color) {
      case 'cyan': return '#8be9fd';
      case 'pink': return '#ff79c6';
      case 'blue': return '#8caaee';
      default: return '#bd93f9';
    }
  };

  const accentHex = getAccentHex(accentColor);

  return (
    <div className={`relative w-full aspect-[16/10] overflow-hidden bg-[#181825] rounded-xl flex items-center justify-center select-none ${className}`}>
      
      {/* Background Cyber Grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, ${accentHex} 1px, transparent 1px)`,
          backgroundSize: '16px 16px'
        }}
      />

      {/* Radial soft glow */}
      <div 
        className="absolute w-44 h-44 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ backgroundColor: accentHex }}
      />

      {/* Category / Visual Type specific graphics */}
      {visualType === 'grid-dashboard' && (
        <div className="w-5/6 h-4/5 rounded-lg border border-white/10 bg-[#232136]/90 p-3 shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent-pink/70" />
              <span className="w-2 h-2 rounded-full bg-accent-cyan/70" />
              <span className="w-2 h-2 rounded-full bg-accent-green/70" />
            </div>
            <span className="font-mono text-[9px] text-primary-muted">{project.badge}</span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-2">
            <div className="h-10 rounded bg-[#1e1e2e] border border-white/5 p-1.5">
              <div className="w-8 h-1 bg-white/20 rounded mb-1" />
              <div className="w-12 h-2 rounded" style={{ backgroundColor: accentHex }} />
            </div>
            <div className="h-10 rounded bg-[#1e1e2e] border border-white/5 p-1.5">
              <div className="w-8 h-1 bg-white/20 rounded mb-1" />
              <div className="w-10 h-2 bg-accent-green/60 rounded" />
            </div>
            <div className="h-10 rounded bg-[#1e1e2e] border border-white/5 p-1.5">
              <div className="w-8 h-1 bg-white/20 rounded mb-1" />
              <div className="w-14 h-2 bg-accent-purple/60 rounded" />
            </div>
          </div>

          {/* Mini chart wireframe */}
          <div className="h-12 w-full rounded bg-[#1e1e2e] border border-white/5 p-2 flex items-end gap-1.5 justify-between">
            <div className="w-3 bg-white/20 rounded-t h-[40%]" />
            <div className="w-3 bg-white/20 rounded-t h-[60%]" />
            <div className="w-3 rounded-t h-[85%]" style={{ backgroundColor: accentHex }} />
            <div className="w-3 bg-white/20 rounded-t h-[50%]" />
            <div className="w-3 bg-white/20 rounded-t h-[75%]" />
            <div className="w-3 bg-white/20 rounded-t h-[95%]" style={{ backgroundColor: '#ff79c6' }} />
          </div>
        </div>
      )}

      {visualType === 'motion-reel' && (
        <div className="relative w-5/6 h-4/5 rounded-lg border border-white/10 bg-[#232136]/90 p-4 flex flex-col justify-between items-center text-center">
          <div className="w-full flex justify-between items-center text-[9px] font-mono text-primary-muted">
            <span className="text-accent-pink">REC [●] 4K 60FPS</span>
            <span>CHRONO 00:14:22</span>
          </div>

          <div className="relative flex items-center justify-center my-auto">
            <div className="w-14 h-14 rounded-full border-2 border-accent-pink/40 flex items-center justify-center animate-pulse">
              <div className="w-10 h-10 rounded-full bg-accent-pink/20 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-white translate-x-0.5" />
              </div>
            </div>
          </div>

          {/* Audio Waveform Bars */}
          <div className="w-full flex items-center justify-center gap-1 h-6">
            {[40, 70, 30, 90, 60, 100, 45, 80, 50, 95, 30, 70, 85, 40].map((h, i) => (
              <div 
                key={i} 
                className="w-1 rounded-full bg-accent-purple/70"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      )}

      {visualType === 'creative-poster' && (
        <div className="relative w-4/6 h-[88%] rounded-lg border-2 border-accent-pink/40 bg-[#1e1e2e] p-3 flex flex-col justify-between shadow-2xl">
          <div className="flex justify-between items-start">
            <span className="font-mono text-[8px] tracking-widest text-accent-pink uppercase">// VISUAL SPEC</span>
            <span className="font-display font-extrabold text-xs text-white">2026</span>
          </div>

          <div className="my-auto text-left">
            <div className="font-display font-extrabold text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-accent-purple to-accent-cyan leading-none mb-1">
              KUROGANE
            </div>
            <div className="font-mono text-[9px] text-accent-cyan tracking-wider">
              黒鉄 // CYBER ARTISTRY
            </div>
          </div>

          <div className="border-t border-white/10 pt-1.5 flex justify-between items-center text-[8px] font-mono text-primary-muted">
            <span>OMNIAFORE LAB</span>
            <span className="text-accent-purple">EDITION 01</span>
          </div>
        </div>
      )}

      {visualType === 'workflow-nodes' && (
        <div className="w-5/6 h-4/5 rounded-lg border border-white/10 bg-[#232136]/90 p-3 flex items-center justify-between relative">
          {/* Node 1: Inbound Webhook */}
          <div className="w-16 h-12 rounded bg-[#1e1e2e] border border-accent-cyan/50 p-1 flex flex-col justify-center items-center text-center">
            <div className="w-2 h-2 rounded-full bg-accent-cyan mb-0.5 animate-ping" />
            <span className="font-mono text-[8px] text-white">WEBHOOK</span>
          </div>

          {/* Connection Line */}
          <div className="flex-1 h-[2px] bg-gradient-to-r from-accent-cyan to-accent-purple mx-1 relative">
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-cyan" />
          </div>

          {/* Node 2: AI Processor */}
          <div className="w-18 h-14 rounded bg-[#1e1e2e] border border-accent-purple/80 p-1 flex flex-col justify-center items-center text-center shadow-[0_0_15px_rgba(189,147,249,0.3)]">
            <span className="font-mono text-[8px] text-accent-pink">AI MODEL</span>
            <span className="font-mono text-[9px] text-white font-bold">SYNTHEX</span>
          </div>

          {/* Connection Line */}
          <div className="flex-1 h-[2px] bg-gradient-to-r from-accent-purple to-accent-green mx-1 relative">
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-green" />
          </div>

          {/* Node 3: CRM Dispatch */}
          <div className="w-16 h-12 rounded bg-[#1e1e2e] border border-accent-green/50 p-1 flex flex-col justify-center items-center text-center">
            <div className="w-2 h-2 rounded-full bg-accent-green mb-0.5" />
            <span className="font-mono text-[8px] text-white">DISPATCH</span>
          </div>
        </div>
      )}

      {/* Top Category Badge */}
      <div className="absolute top-2.5 left-2.5 z-10">
        <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider bg-[#1e1e2e]/90 backdrop-blur-md text-white border border-white/10">
          {category}
        </span>
      </div>

      {/* Top Concept/Blueprint Badge */}
      <div className="absolute top-2.5 right-2.5 z-10">
        <span 
          className="px-2 py-0.5 rounded text-[9px] font-mono tracking-wider font-semibold uppercase bg-black/60 backdrop-blur-md border border-white/10"
          style={{ color: accentHex }}
        >
          {project.badge}
        </span>
      </div>

    </div>
  );
};
