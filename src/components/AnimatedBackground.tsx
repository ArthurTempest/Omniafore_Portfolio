import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
}

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive particle count: ~55 on desktop, ~30 on mobile
    const particleCount = width < 768 ? 30 : Math.min(Math.floor((width * height) / 22000), 55);
    const particles: Particle[] = [];
    const colors = ['#00f5ff', '#bd93f9', '#ff00aa', '#50fa7b', '#38bdf8'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.9,
        vy: (Math.random() - 0.5) * 0.9,
        size: Math.random() * 1.8 + 1.8, // 1.8px - 3.6px clearly visible
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.4 + 0.5, // 0.5 - 0.9 opacity
      });
    }

    let mouseX = -9999;
    let mouseY = -9999;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    let resizeTimeout: number;
    const handleResize = () => {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        if (!canvas) return;
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = () => {
      if (!isVisible) return;

      // Soft trailing persistence effect for futuristic motion feel
      ctx.fillStyle = 'rgba(8, 8, 18, 0.28)';
      ctx.fillRect(0, 0, width, height);

      const len = particles.length;
      for (let i = 0; i < len; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around viewport edges
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        // Interactive mouse physics
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < 16900 && distSq > 0) { // 130px radius
          const dist = Math.sqrt(distSq);
          p.x -= (dx / dist) * 1.2;
          p.y -= (dy / dist) * 1.2;

          // Tracer line to cursor
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = p.color;
          ctx.globalAlpha = (1 - dist / 130) * 0.35;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        // Draw glowing particle (outer halo + bright core, 100% GPU accelerated without shadowBlur)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * 0.25;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Proximity constellation lines between nearby particles
        for (let j = i + 1; j < len; j++) {
          const p2 = particles[j];
          const distLineSq = (p.x - p2.x) * (p.x - p2.x) + (p.y - p2.y) * (p.y - p2.y);
          if (distLineSq < 18225) { // 135px threshold
            const dist = Math.sqrt(distLineSq);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / 135) * 0.28;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ background: '#080812' }}
    >
      {/* 01 Particle Constellation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* 02 Slowly Scrolling Cyberpunk Matrix Grid */}
      <div
        className="absolute inset-0 opacity-40 animate-grid-scroll pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,245,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(189,147,249,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* 03 Floating Ambient Neon Orbs */}
      <div
        className="absolute top-[-5%] left-[-5%] w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] rounded-full animate-float-orb-1 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(123,47,255,0.22) 0%, transparent 68%)',
        }}
      />
      <div
        className="absolute top-[20%] right-[-8%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full animate-float-orb-2 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,0,170,0.18) 0%, transparent 68%)',
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[25%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full animate-float-orb-1 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,245,255,0.16) 0%, transparent 68%)',
        }}
      />

      {/* 05 Subtle Vignette Edge Mask */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 55%, rgba(8,8,18,0.72) 100%)',
        }}
      />
    </div>
  );
};
