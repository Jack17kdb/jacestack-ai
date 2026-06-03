import React, { useState } from 'react';
import { ArrowUpRight, Search, MessageSquare, Bell, Database, Cpu, Smartphone, Droplets, Calculator, Send } from 'lucide-react';

const projects = [
  {
    id: 'lostandfound',
    tag: 'AI Matching Platform',
    title: 'Lost & Found Management System',
    headline: 'What if every lost item had a brain?',
    problem: 'Universities and transit hubs process hundreds of lost & found items weekly, with near-zero successful reunions. Staff spent hours manually comparing descriptions — a hopeless needle-in-a-haystack effort.',
    solution: 'A MERN platform powered by OpenAI CLIP to semantically match lost items with found items using image and text embeddings. When a match exceeds the confidence threshold, both parties are auto-notified. An integrated chat lets them coordinate the return in real time.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'OpenAI CLIP', 'Socket.io', 'PWA', 'JWT Auth'],
    features: [
      { icon: Cpu,          label: 'AI Image + Text Matching',    desc: 'CLIP embeddings to match semantically similar items across descriptions and photos' },
      { icon: Bell,         label: 'Instant Smart Notifications', desc: 'Automated alerts the moment a match is detected above confidence threshold' },
      { icon: MessageSquare,label: 'Secure In-App Chat',          desc: 'Real-time messaging for lost & found parties to coordinate item return' },
      { icon: Database,     label: 'Centralized Registry',        desc: 'Unified item database with search, filter, and claim tracking' },
    ],
    metrics: [{ val: '94%', label: 'Match Accuracy' }, { val: '5×', label: 'Faster Reunions' }, { val: '0', label: 'Manual Matches' }],
  },
  {
    id: 'aquabill',
    tag: 'SaaS · WhatsApp Automation',
    title: 'AquaBill',
    headline: 'Water billing that runs itself.',
    problem: 'Property caretakers in East Africa manage dozens of tenants, manually reading meters, calculating bills in notebooks, and chasing payments on foot — a process ripe for errors, disputes, and wasted hours.',
    solution: 'AquaBill is a SaaS web app and PWA that digitalises the entire water billing workflow. Caretakers input meter readings and the system auto-calculates individual bills. Distribution and reminders go directly via WhatsApp — the app tenants already use.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'WhatsApp API', 'PWA', 'Tailwind', 'Chart.js'],
    features: [
      { icon: Calculator, label: 'Auto Bill Calculation',  desc: 'Input readings once — bills, totals, and per-unit costs calculated instantly' },
      { icon: Send,       label: 'WhatsApp Distribution',  desc: 'Bills sent directly to tenants via WhatsApp, guaranteed to be read' },
      { icon: Smartphone, label: 'PWA — Works Offline',    desc: 'Full progressive web app for caretakers on the go, even with poor connectivity' },
      { icon: Droplets,   label: 'Usage Analytics',        desc: 'Track consumption trends, spot anomalies, generate monthly reports' },
    ],
    metrics: [{ val: '10×', label: 'Billing Speed' }, { val: '100%', label: 'WhatsApp Delivery' }, { val: '0', label: 'Manual Disputes' }],
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-32" style={{ background: '#1c1c1c' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 reveal">
          <span className="section-label mb-5 block">Case Studies</span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-display font-bold text-white"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', letterSpacing: '-0.02em', maxWidth: '480px' }}>
              Real problems. Real solutions.
            </h2>
            <p className="font-body text-sm leading-relaxed max-w-xs"
              style={{ color: 'rgba(255,255,255,0.4)' }}>
              Every project starts with a problem worth solving.
            </p>
          </div>
        </div>

        <div className="rule-dark border-t mb-16" />

        <div className="flex flex-col gap-20">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} flip={i % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, flip }) {
  const [tab, setTab] = useState('problem');
  const { tag, title, headline, problem, solution, stack, features, metrics } = project;

  return (
    <div className="reveal">
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: 'rgba(255,255,255,0.3)' }}>{tag}</span>
          <h3 className="font-display font-bold text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.02em' }}>
            {title}
          </h3>
        </div>
        <p className="font-display italic text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>{headline}</p>
      </div>

      {/* Main card */}
      <div className={`flex flex-col ${flip ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-0 rounded-sm overflow-hidden`}
        style={{ border: '1px solid rgba(255,255,255,0.07)' }}>

        {/* Left: narrative */}
        <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between"
          style={{ background: 'rgba(255,255,255,0.02)' }}>
          {/* Tabs */}
          <div>
            <div className="flex gap-0 mb-6 self-start w-fit"
              style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
              {['problem', 'solution'].map((t) => (
                <button key={t} onClick={() => setTab(t)}
                  className="px-5 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-200"
                  style={{
                    background: tab === t ? 'rgba(255,255,255,0.1)' : 'transparent',
                    color: tab === t ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.35)',
                    borderRight: t === 'problem' ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  }}>
                  {t}
                </button>
              ))}
            </div>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', minHeight: '100px' }}>
              {tab === 'problem' ? problem : solution}
            </p>
          </div>

          {/* Metrics */}
          <div className="flex gap-8 mt-10 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="font-display font-bold text-white" style={{ fontSize: '1.6rem', letterSpacing: '-0.02em' }}>{m.val}</div>
                <div className="font-mono text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: features + stack */}
        <div className="lg:w-96 flex-shrink-0 p-8 lg:p-10 flex flex-col gap-8"
          style={{ background: 'rgba(0,0,0,0.2)', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.25)' }}>Key Features</p>
            <div className="flex flex-col gap-5">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="flex gap-3">
                    <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center mt-0.5"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <Icon size={13} style={{ color: 'rgba(255,255,255,0.55)' }} />
                    </div>
                    <div>
                      <div className="font-display text-xs font-semibold text-white mb-0.5">{f.label}</div>
                      <div className="font-body text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)' }}>{f.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.25)' }}>Tech Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {stack.map((t) => (
                <span key={t} className="px-2.5 py-1 font-mono text-xs"
                  style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
