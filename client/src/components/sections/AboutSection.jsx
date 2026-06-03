import React from 'react';
import { Zap, Heart, Globe, Shield } from 'lucide-react';

const values = [
  { icon: Zap,    title: 'Speed Without Compromise',  description: 'We move fast, but never at the expense of quality. Every line of code is reviewed, every pixel is intentional.' },
  { icon: Heart,  title: 'Product Empathy',            description: "We think like founders, not contractors. Your product's success is our success — we're genuinely invested." },
  { icon: Globe,  title: 'Built for Scale',            description: 'From day one, we architect systems to grow. No rewrites at 10× users — we plan for them from the start.' },
  { icon: Shield, title: 'Transparent Partnership',    description: 'No black boxes. Full access, clear communication, and honest timelines — always.' },
];

export default function AboutSection() {
  return (
    /* Cooling back from amber — graphite zone */
    <section id="about" className="relative py-32" style={{ background: '#1c1c1c' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Story */}
          <div className="reveal">
            <span className="section-label mb-6 block">About Us</span>
            <h2 className="font-display font-bold text-white mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              A team of obsessive builders
            </h2>
            <div className="flex flex-col gap-5 font-body text-sm leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.45)' }}>
              <p>
                JaceStack AI was born out of a simple frustration — too many digital agencies promised transformation
                and delivered templates. We set out to build something different: a team that{' '}
                <span style={{ color: 'rgba(255,255,255,0.75)' }}>actually understands AI, engineers with precision, and ships products worth using.</span>
              </p>
              <p>
                Based in Nairobi, thinking globally. We've shipped MERN-powered platforms, AI matching engines,
                SaaS products, and automation pipelines for clients across East Africa and beyond.
              </p>
              <p>
                We believe the best software feels inevitable — like it couldn't have been built any other way.
                That's the standard we hold ourselves to.
              </p>
            </div>

            <div className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.25)' }}>
                Core Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'MongoDB', 'Express', 'OpenAI', 'Three.js', 'GSAP', 'Docker', 'AWS'].map((t) => (
                  <span key={t} className="px-3 py-1.5 font-mono text-xs"
                    style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.35)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal-stagger">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="card-dark rounded-sm p-6 transition-all duration-200">
                  <div className="w-9 h-9 flex items-center justify-center mb-4"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <Icon size={16} style={{ color: 'rgba(255,255,255,0.55)' }} />
                  </div>
                  <h4 className="font-display font-semibold text-white text-sm mb-2">{v.title}</h4>
                  <p className="font-body text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
