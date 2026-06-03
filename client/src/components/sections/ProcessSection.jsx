import React, { useState } from 'react';
import { MessageCircle, Figma, Code2, TestTube, Rocket, RefreshCw } from 'lucide-react';

const steps = [
  {
    number: '01', icon: MessageCircle, title: 'Discovery & Scoping',
    description: 'Deep-dive sessions to understand your goals, constraints, and success metrics. We map user journeys, define deliverables, and establish a realistic roadmap.',
    deliverables: ['Requirements Doc', 'User Stories', 'Project Roadmap', 'Tech Stack Decision'],
    duration: '1–2 weeks',
  },
  {
    number: '02', icon: Figma, title: 'Design & Prototyping',
    description: 'Wireframes to high-fidelity prototypes. We design systems, not just screens — ensuring consistency, accessibility, and UX that converts.',
    deliverables: ['Wireframes', 'UI System', 'Interactive Prototype', 'Design Handoff'],
    duration: '1–3 weeks',
  },
  {
    number: '03', icon: Code2, title: 'Agile Development',
    description: 'Two-week sprints with transparent progress tracking. You have full visibility into every build cycle and can give feedback continuously.',
    deliverables: ['Sprint Demos', 'Code Reviews', 'Progress Reports', 'Staging Access'],
    duration: '4–12 weeks',
  },
  {
    number: '04', icon: TestTube, title: 'QA & Testing',
    description: 'Manual and automated testing across devices and edge cases. Performance profiling, security audits, and accessibility checks before any deployment.',
    deliverables: ['Test Reports', 'Bug Fixes', 'Performance Audit', 'Security Review'],
    duration: '1–2 weeks',
  },
  {
    number: '05', icon: Rocket, title: 'Launch & Deploy',
    description: 'Zero-downtime deployments with CI/CD pipelines. We handle hosting, DNS, SSL, and monitoring — your launch is smooth, not stressful.',
    deliverables: ['Live Deployment', 'CI/CD Pipeline', 'Monitoring Setup', 'Docs & Handoff'],
    duration: '1 week',
  },
  {
    number: '06', icon: RefreshCw, title: 'Iterate & Scale',
    description: 'Post-launch, we analyze real user behaviour, iterate on features, and help you scale. A long-term engineering partner, not just a vendor.',
    deliverables: ['Analytics Review', 'Feature Iterations', 'Scaling Plan', 'Ongoing Support'],
    duration: 'Ongoing',
  },
];

export default function ProcessSection() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    /* ── AMBER TRANSITION ZONE ──
       This section sits at the colour-journey peak.
       Background transitions: graphite → amber → graphite
       via CSS gradient on the section itself.
    */
    <section id="process" className="relative py-32 overflow-hidden">
      {/* The gradient journey: graphite in, amber peak, graphite out */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom, #1c1c1c 0%, #2a1f10 18%, #c8963e 42%, #c8963e 58%, #2a1f10 82%, #1c1c1c 100%)'
      }} />

      {/* Noise texture for depth */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`
      }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header — on amber bg, text is dark */}
        <div className="mb-16 reveal text-center">
          <span className="font-mono text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: 'rgba(0,0,0,0.45)' }}>
            Our Process
          </span>
          <h2 className="font-display font-bold mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', letterSpacing: '-0.02em', color: '#080808' }}>
            From idea to live product
          </h2>
          <p className="font-body max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(0,0,0,0.5)', fontSize: '0.95rem' }}>
            A battle-tested SDLC methodology refined across dozens of projects — transparent, agile, always aligned.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 reveal">
          {/* Step selector */}
          <div className="lg:w-56 flex lg:flex-col flex-row flex-wrap gap-1">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isActive = active === i;
              return (
                <button key={s.number} onClick={() => setActive(i)}
                  className="flex items-center gap-3 px-4 py-3 rounded-sm text-left transition-all duration-200"
                  style={{
                    background: isActive ? 'rgba(0,0,0,0.18)' : 'rgba(0,0,0,0.06)',
                    border: isActive ? '1px solid rgba(0,0,0,0.3)' : '1px solid transparent',
                  }}>
                  <span className="font-mono text-xs font-medium w-6 text-center"
                    style={{ color: isActive ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.35)' }}>
                    {s.number}
                  </span>
                  <span className="font-display text-xs font-semibold"
                    style={{ color: isActive ? '#080808' : 'rgba(0,0,0,0.45)' }}>
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="flex-1 rounded-sm p-8 lg:p-10"
            style={{ background: 'rgba(0,0,0,0.15)', border: '1px solid rgba(0,0,0,0.2)' }}
            key={active}>
            <div className="flex items-start gap-5 mb-7">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-sm"
                style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(0,0,0,0.25)' }}>
                <step.icon size={20} style={{ color: 'rgba(0,0,0,0.7)' }} />
              </div>
              <div>
                <div className="font-mono text-xs mb-1" style={{ color: 'rgba(0,0,0,0.45)' }}>
                  Phase {step.number} · {step.duration}
                </div>
                <h3 className="font-display font-bold text-xl" style={{ color: '#080808', letterSpacing: '-0.01em' }}>
                  {step.title}
                </h3>
              </div>
            </div>

            <p className="font-body text-sm leading-relaxed mb-8" style={{ color: 'rgba(0,0,0,0.55)' }}>
              {step.description}
            </p>

            <div style={{ borderTop: '1px solid rgba(0,0,0,0.15)', paddingTop: '24px' }}>
              <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(0,0,0,0.4)' }}>
                Deliverables
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {step.deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-2 text-xs font-body" style={{ color: 'rgba(0,0,0,0.65)' }}>
                    <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Step dots */}
        <div className="flex justify-center gap-2 mt-8">
          {steps.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: active === i ? '20px' : '5px',
                height: '5px',
                background: active === i ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.2)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
