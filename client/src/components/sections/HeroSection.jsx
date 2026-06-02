import React, { useEffect, useRef } from 'react';
import { ArrowRight, Zap, Star } from 'lucide-react';
import HeroCanvas from '../three/HeroCanvas';

const badges = ['Web & App Development', 'AI Engineering', 'Workflow Automations', 'SEO & SSR'];

export default function HeroSection() {
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const badgesRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const els = [headingRef, subRef, badgesRef, ctaRef, statsRef];
    els.forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.opacity = '0';
        ref.current.style.transform = 'translateY(30px)';
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
            ref.current.style.opacity = '1';
            ref.current.style.transform = 'translateY(0)';
          }
        }, 200 + i * 150);
      }
    });
  }, []);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* Three.js bg */}
      <HeroCanvas />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1]"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 20% 50%, rgba(0,245,255,0.07) 0%, transparent 65%), radial-gradient(ellipse 50% 50% at 80% 60%, rgba(255,107,53,0.06) 0%, transparent 60%)',
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-48 z-[1]"
        style={{ background: 'linear-gradient(to top, #040408, transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div ref={badgesRef} className="flex flex-wrap gap-2 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono"
              style={{ borderColor: 'rgba(0,245,255,0.25)', background: 'rgba(0,245,255,0.07)', color: '#00f5ff' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
              Available for Projects
            </div>
          </div>

          {/* Heading */}
          <h1 ref={headingRef} className="font-display font-bold leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(2.6rem, 7vw, 5.5rem)' }}>
            <span className="text-mist-100 block">Build Smarter.</span>
            <span className="gradient-text block">Scale Faster.</span>
            <span className="text-mist-100 block">Powered by</span>
            <span className="block relative">
              <span style={{ color: '#ff6b35' }}>AI.</span>
            </span>
          </h1>

          {/* Subheading */}
          <p ref={subRef} className="font-body text-mist-400 leading-relaxed mb-10 max-w-xl"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
            JaceStack AI is a full-stack digital agency that fuses cutting-edge AI engineering with
            precision web development — transforming your boldest ideas into products that actually ship.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap gap-4 mb-14">
            <button
              onClick={() => handleScroll('#contact')}
              className="btn-primary text-base"
            >
              Start a Project <ArrowRight size={18} />
            </button>
            <button
              onClick={() => handleScroll('#portfolio')}
              className="btn-ghost text-base"
            >
              See Our Work
            </button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="flex flex-wrap gap-10">
            {[
              { num: '15+', label: 'Projects Delivered' },
              { num: '100%', label: 'Client Satisfaction' },
              { num: '3×', label: 'Avg. Faster Delivery' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display font-bold text-3xl text-mist-100">{s.num}</div>
                <div className="font-body text-mist-400 text-sm mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Service pills */}
        <div className="absolute bottom-10 right-6 hidden lg:flex flex-col gap-2 items-end">
          {badges.map((b, i) => (
            <div
              key={b}
              className="px-4 py-2 rounded-full text-xs font-mono card-glass"
              style={{
                color: '#8896c8',
                animationDelay: `${i * 0.5}s`,
                transform: `translateX(${i % 2 === 0 ? '0' : '12px'})`,
              }}
            >
              {b}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs text-mist-400 tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-electric to-transparent" />
      </div>
    </section>
  );
}
