import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import HeroCanvas from '../three/HeroCanvas';

export default function HeroSection() {
  const els = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    els.forEach((r, i) => {
      if (!r.current) return;
      r.current.style.opacity = '0';
      r.current.style.transform = 'translateY(24px)';
      setTimeout(() => {
        if (!r.current) return;
        r.current.style.transition = 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)';
        r.current.style.opacity = '1';
        r.current.style.transform = 'translateY(0)';
      }, 180 + i * 130);
    });
  }, []);

  const go = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#080808' }}>
      <HeroCanvas />

      {/* Subtle vignette */}
      <div className="absolute inset-0 z-[1]" style={{
        background: 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 30%, rgba(8,8,8,0.6) 100%)'
      }} />
      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[1]"
        style={{ background: 'linear-gradient(to top, #080808, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="max-w-[680px]">

          {/* Availability pill */}
          <div ref={els[0]} className="inline-flex items-center gap-2.5 mb-10">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-white opacity-70 animate-pulse" />
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Available for Projects
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 ref={els[1]}
            className="font-display font-bold leading-[1.04] mb-7"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', letterSpacing: '-0.02em' }}>
            <span className="block text-white">Build Smarter.</span>
            <span className="block text-white">Scale Faster.</span>
            <span className="block" style={{ color: 'rgba(255,255,255,0.3)' }}>Powered by AI.</span>
          </h1>

          {/* Sub */}
          <p ref={els[2]}
            className="font-body leading-relaxed mb-10 max-w-lg"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: 'rgba(255,255,255,0.45)' }}>
            JaceStack AI is a full-stack digital agency that fuses AI engineering with precision
            web development — turning your boldest ideas into products that actually ship.
          </p>

          {/* CTAs */}
          <div ref={els[3]} className="flex flex-wrap gap-4 mb-20">
            <button onClick={() => go('#contact')} className="btn-primary">
              Start a Project <ArrowRight size={16} />
            </button>
            <button onClick={() => go('#portfolio')} className="btn-ghost">
              See Our Work
            </button>
          </div>

          {/* Stats */}
          <div ref={els[4]} className="flex flex-wrap gap-12">
            {[
              { num: '15+', label: 'Projects Delivered' },
              { num: '100%', label: 'Client Satisfaction' },
              { num: '3×',  label: 'Avg. Faster Delivery' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display font-bold text-white" style={{ fontSize: '2rem', letterSpacing: '-0.02em' }}>
                  {s.num}
                </div>
                <div className="font-body text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ opacity: 0.3 }}>
        <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.6)' }}>scroll</span>
        <ArrowDown size={14} style={{ color: 'rgba(255,255,255,0.6)' }} />
      </div>
    </section>
  );
}
