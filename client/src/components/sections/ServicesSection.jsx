import React from 'react';
import { Code2, Cpu, GitBranch, Search, Layers, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web & App Development',
    description: 'Full-stack MERN applications built for performance and scalability. From MVPs to enterprise-grade platforms — we ship products that last.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'PWA'],
  },
  {
    icon: Cpu,
    title: 'AI Engineering',
    description: 'Custom AI integrations, LLM pipelines, smart matching models, and intelligent automation — we make your product think.',
    tags: ['OpenAI', 'LangChain', 'Vector DBs', 'CLIP', 'Fine-tuning'],
  },
  {
    icon: GitBranch,
    title: 'Workflow Automations',
    description: 'Eliminate repetitive tasks with intelligent automation. From n8n pipelines to WhatsApp bots and API integrations.',
    tags: ['n8n', 'WhatsApp API', 'Webhooks', 'Zapier', 'Custom APIs'],
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Data-driven SEO that drives organic growth. Technical audits, on-page optimization, structured data, and content strategies.',
    tags: ['Technical SEO', 'Core Web Vitals', 'Schema', 'Analytics'],
  },
  {
    icon: Layers,
    title: 'SSR & Performance',
    description: 'Server-side rendering, edge caching, and performance optimization that deliver sub-second loads and perfect Lighthouse scores.',
    tags: ['Next.js', 'SSR', 'ISR', 'CDN', 'Lighthouse 100'],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32" style={{ background: '#111111' }}>
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 reveal">
          <span className="section-label mb-5 block">What We Do</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display font-bold text-white"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', letterSpacing: '-0.02em', maxWidth: '520px' }}>
              Everything you need to dominate digitally
            </h2>
            <p className="font-body leading-relaxed max-w-sm"
              style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem' }}>
              A focused team of builders who live at the intersection of great engineering and intelligent systems.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="rule-dark border-t mb-12" />

        {/* Services list */}
        <div className="reveal-stagger">
          {services.map((s, i) => (
            <ServiceRow key={s.title} service={s} index={i} total={services.length} />
          ))}
        </div>

        {/* CTA row */}
        <div className="rule-dark border-t mt-0 pt-10 reveal">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <p className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Have a custom project in mind?
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-ghost inline-flex items-center gap-2"
            >
              Let's talk <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ service, index, total }) {
  const { icon: Icon, title, description, tags } = service;
  return (
    <div
      className="group flex flex-col md:flex-row md:items-center gap-6 py-8 cursor-default transition-all duration-200"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Number + icon */}
      <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
        <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="w-9 h-9 flex items-center justify-center rounded transition-all duration-200"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <Icon size={16} style={{ color: 'rgba(255,255,255,0.6)' }} />
        </div>
        <span className="font-display font-semibold text-sm text-white md:hidden">{title}</span>
      </div>

      {/* Title — desktop */}
      <div className="hidden md:block md:w-52 flex-shrink-0">
        <span className="font-display font-semibold text-white group-hover:text-white transition-colors"
          style={{ fontSize: '0.95rem' }}>
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="flex-1 font-body text-sm leading-relaxed"
        style={{ color: 'rgba(255,255,255,0.38)' }}>
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 md:w-64 flex-shrink-0 justify-start md:justify-end">
        {tags.map((t) => (
          <span key={t} className="px-2.5 py-1 rounded-sm font-mono text-xs"
            style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.06)' }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
