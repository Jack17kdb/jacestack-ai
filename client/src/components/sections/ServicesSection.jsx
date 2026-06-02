import React from 'react';
import { Code2, Cpu, GitBranch, Search, Layers, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web & App Development',
    description:
      'Full-stack MERN applications built for performance, scalability, and a flawless user experience. From MVPs to enterprise-grade platforms — we ship products that last.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'PWA'],
    accent: '#00f5ff',
  },
  {
    icon: Cpu,
    title: 'AI Engineering',
    description:
      'Custom AI integrations, LLM pipelines, smart matching models, and intelligent automation — we make your product think, not just run.',
    tags: ['OpenAI', 'LangChain', 'Vector DBs', 'CLIP', 'Fine-tuning'],
    accent: '#ff6b35',
  },
  {
    icon: GitBranch,
    title: 'Workflow Automations',
    description:
      'Eliminate repetitive tasks with intelligent automation across your tools. From Zapier to custom n8n pipelines, WhatsApp bots to API integrations.',
    tags: ['n8n', 'WhatsApp API', 'Webhooks', 'Zapier', 'Custom APIs'],
    accent: '#a78bfa',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description:
      'Data-driven SEO strategies that drive organic growth. Technical audits, on-page optimization, structured data, and content strategies that convert.',
    tags: ['Technical SEO', 'Core Web Vitals', 'Schema', 'Analytics'],
    accent: '#34d399',
  },
  {
    icon: Layers,
    title: 'SSR & Performance',
    description:
      'Server-side rendering, edge caching, and performance optimization that deliver sub-second load times and perfect Lighthouse scores.',
    tags: ['Next.js', 'SSR', 'ISR', 'CDN', 'Lighthouse 100'],
    accent: '#f59e0b',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Dot grid bg */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,245,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="section-label mb-4 block">What We Do</span>
          <h2 className="font-display font-bold text-mist-100 mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Everything you need to{' '}
            <span className="gradient-text">dominate digitally</span>
          </h2>
          <p className="font-body text-mist-400 max-w-2xl mx-auto leading-relaxed text-lg">
            We're not a generalist agency. We are a focused team of builders who live at the
            intersection of great engineering and intelligent systems.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}

          {/* CTA card */}
          <div className="card-glass rounded-2xl p-8 flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}>
            <div>
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-display font-semibold text-xl text-mist-100 mb-3">
                Have a custom project in mind?
              </h3>
              <p className="font-body text-mist-400 text-sm leading-relaxed">
                We love complex challenges. Let's talk about what you're building.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-electric font-display font-semibold text-sm group-hover:gap-4 transition-all duration-300">
              Start a conversation <ArrowUpRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const { icon: Icon, title, description, tags, accent } = service;
  return (
    <div
      className="card-glass rounded-2xl p-8 flex flex-col justify-between group transition-all duration-300 hover:scale-[1.02]"
      style={{ '--card-accent': accent }}
    >
      <div>
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
          style={{ background: `${accent}15`, border: `1px solid ${accent}30` }}>
          <Icon size={22} style={{ color: accent }} />
        </div>

        <h3 className="font-display font-semibold text-xl text-mist-100 mb-3 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="font-body text-mist-400 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md text-xs font-mono"
            style={{ background: `${accent}10`, color: accent, border: `1px solid ${accent}20` }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
