import React from 'react';
import { Zap, Heart, Globe, Shield } from 'lucide-react';

const values = [
  {
    icon: Zap,
    title: 'Speed Without Compromise',
    description: 'We move fast, but never at the expense of quality. Every line of code is reviewed, every pixel is intentional.',
    accent: '#00f5ff',
  },
  {
    icon: Heart,
    title: 'Product Empathy',
    description: 'We think like founders, not contractors. Your product\'s success is our success — we\'re invested.',
    accent: '#ff6b35',
  },
  {
    icon: Globe,
    title: 'Built for Scale',
    description: 'From day one, we architect systems to grow. No rewrites at 10× users — we plan for them.',
    accent: '#a78bfa',
  },
  {
    icon: Shield,
    title: 'Transparent Partnership',
    description: 'No black boxes. You get full access, clear communication, and honest timelines — always.',
    accent: '#34d399',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full opacity-10 blur-[80px]"
        style={{ background: 'radial-gradient(circle, #ff6b35, transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Story */}
          <div className="reveal">
            <span className="section-label mb-6 block">About Us</span>
            <h2 className="font-display font-bold text-mist-100 mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              We're a team of{' '}
              <span className="gradient-text">obsessive builders</span>
            </h2>
            <div className="flex flex-col gap-5 font-body text-mist-400 leading-relaxed">
              <p>
                JaceStack AI was born out of a simple frustration — too many digital agencies promised transformation
                and delivered templates. We set out to build something different: a team that actually
                <span className="text-mist-200"> understands AI, engineers with precision, and ships products worth using.</span>
              </p>
              <p>
                Based in Nairobi, thinking globally. We've shipped MERN-powered platforms, AI matching engines, SaaS
                products, and automation pipelines for clients across East Africa and beyond. Every project sharpens
                our craft.
              </p>
              <p>
                We believe the best software feels inevitable — like it couldn't have been built any other way.
                That's the standard we hold ourselves to.
              </p>
            </div>

            {/* Tech stack strip */}
            <div className="mt-10 pt-8 border-t border-white/5">
              <p className="font-mono text-xs text-mist-400 tracking-widest mb-4 uppercase">Core Stack</p>
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'MongoDB', 'Express', 'OpenAI', 'Three.js', 'GSAP', 'Docker', 'AWS'].map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-mono text-mist-300 card-glass">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 reveal-stagger">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title}
                  className="card-glass rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${v.accent}15`, border: `1px solid ${v.accent}25` }}>
                    <Icon size={18} style={{ color: v.accent }} />
                  </div>
                  <h4 className="font-display font-semibold text-mist-100 text-base mb-2">{v.title}</h4>
                  <p className="font-body text-mist-400 text-sm leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
