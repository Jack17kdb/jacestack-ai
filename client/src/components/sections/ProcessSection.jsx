import React, { useState } from 'react';
import { MessageCircle, Search, Figma, Code2, TestTube, Rocket, RefreshCw } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Discovery & Scoping',
    description:
      'We begin with deep-dive sessions to understand your goals, constraints, and success metrics. We map user journeys, define deliverables, and establish a realistic project roadmap.',
    deliverables: ['Requirements Doc', 'User Stories', 'Project Roadmap', 'Tech Stack Decision'],
    duration: '1–2 weeks',
    accent: '#00f5ff',
  },
  {
    number: '02',
    icon: Figma,
    title: 'Design & Prototyping',
    description:
      'Wireframes to high-fidelity prototypes. We design systems, not just screens — ensuring consistency, accessibility, and a user experience that converts.',
    deliverables: ['Wireframes', 'UI System', 'Interactive Prototype', 'Design Handoff'],
    duration: '1–3 weeks',
    accent: '#a78bfa',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Agile Development',
    description:
      'Two-week sprints with daily standups and transparent progress tracking. You have full visibility into every build cycle and can give feedback continuously.',
    deliverables: ['Sprint Demos', 'Code Reviews', 'Progress Reports', 'Staging Access'],
    duration: '4–12 weeks',
    accent: '#34d399',
  },
  {
    number: '04',
    icon: TestTube,
    title: 'QA & Testing',
    description:
      'Manual and automated testing across devices, browsers, and edge cases. Performance profiling, security audits, and accessibility checks before any deployment.',
    deliverables: ['Test Reports', 'Bug Fixes', 'Performance Audit', 'Security Review'],
    duration: '1–2 weeks',
    accent: '#f59e0b',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Launch & Deploy',
    description:
      'Zero-downtime deployments with CI/CD pipelines. We handle hosting, DNS, SSL, and monitoring setup — so your launch is smooth, not stressful.',
    deliverables: ['Live Deployment', 'CI/CD Pipeline', 'Monitoring Setup', 'Docs & Handoff'],
    duration: '1 week',
    accent: '#ff6b35',
  },
  {
    number: '06',
    icon: RefreshCw,
    title: 'Iterate & Scale',
    description:
      'Post-launch, we analyze real user behaviour, iterate on features, and help you scale. We become a long-term engineering partner, not just a vendor.',
    deliverables: ['Analytics Review', 'Feature Iterations', 'Scaling Plan', 'Ongoing Support'],
    duration: 'Ongoing',
    accent: '#ec4899',
  },
];

export default function ProcessSection() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section id="process" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,245,255,0.03) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="section-label mb-4 block">Our Process</span>
          <h2 className="font-display font-bold text-mist-100 mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            From idea to{' '}
            <span className="gradient-text">live product</span>
          </h2>
          <p className="font-body text-mist-400 max-w-xl mx-auto leading-relaxed text-lg">
            A battle-tested SDLC methodology refined across dozens of projects — transparent, agile, and
            always aligned with your goals.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 reveal">
          {/* Step selector */}
          <div className="lg:w-64 flex lg:flex-col flex-row flex-wrap gap-2">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.number}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-200 ${
                    active === i ? 'text-mist-100' : 'text-mist-400 hover:text-mist-200'
                  }`}
                  style={
                    active === i
                      ? { background: `${s.accent}12`, border: `1px solid ${s.accent}30` }
                      : { background: 'transparent', border: '1px solid transparent' }
                  }
                >
                  <span
                    className="font-mono text-xs font-medium flex-shrink-0 w-7 text-center"
                    style={{ color: active === i ? s.accent : undefined }}
                  >
                    {s.number}
                  </span>
                  <span className="font-display text-sm font-medium">{s.title}</span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="flex-1 card-glass rounded-2xl p-10" key={active}
            style={{ borderColor: `${step.accent}20` }}>
            <div className="flex items-start gap-6 mb-8">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${step.accent}15`, border: `1px solid ${step.accent}30` }}>
                <step.icon size={24} style={{ color: step.accent }} />
              </div>
              <div>
                <div className="font-mono text-sm mb-1" style={{ color: step.accent }}>
                  Phase {step.number} · {step.duration}
                </div>
                <h3 className="font-display font-bold text-2xl text-mist-100">{step.title}</h3>
              </div>
            </div>

            <p className="font-body text-mist-400 leading-relaxed text-base mb-10">
              {step.description}
            </p>

            <div>
              <p className="font-mono text-xs text-mist-400 tracking-widest mb-4 uppercase">
                Deliverables
              </p>
              <div className="grid grid-cols-2 gap-3">
                {step.deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-2.5 text-sm font-body text-mist-300">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: step.accent }} />
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-8">
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-300"
              style={{
                width: active === i ? '24px' : '6px',
                height: '6px',
                borderRadius: '3px',
                background: active === i ? s.accent : 'rgba(255,255,255,0.15)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
