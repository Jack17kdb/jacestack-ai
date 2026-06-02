import React, { useState } from 'react';
import { ArrowUpRight, Search, MessageSquare, Bell, Database, Cpu, Smartphone, Droplets, Calculator, Send } from 'lucide-react';

const projects = [
  {
    id: 'lostandfound',
    tag: 'AI Matching Platform',
    title: 'Lost & Found Management System',
    headline: 'What if every lost item had a brain?',
    problem:
      'Universities and transit hubs process hundreds of lost & found items weekly, with near-zero successful reunions. Staff spent hours manually comparing descriptions — a hopeless needle-in-a-haystack effort.',
    solution:
      'A MERN platform powered by OpenAI CLIP to semantically match lost items with found items using image and text embeddings. When a match exceeds the confidence threshold, both parties are auto-notified. An integrated chat system then lets them coordinate the return in real time.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'OpenAI CLIP', 'Socket.io', 'PWA', 'JWT Auth'],
    features: [
      { icon: Cpu, label: 'AI Image + Text Matching', desc: 'CLIP embeddings to match semantically similar items across descriptions and photos' },
      { icon: Bell, label: 'Instant Smart Notifications', desc: 'Automated alerts the moment a match is detected above confidence threshold' },
      { icon: MessageSquare, label: 'Secure In-App Chat', desc: 'Real-time messaging for lost & found parties to coordinate item return' },
      { icon: Database, label: 'Centralized Database', desc: 'Unified item registry with search, filter, and claim tracking' },
    ],
    accent: '#00f5ff',
    bg: 'from-cyan-950/40 to-ink-900/60',
    emoji: '🔍',
    metrics: [
      { val: '94%', label: 'Match Accuracy' },
      { val: '5×', label: 'Faster Reunions' },
      { val: '0', label: 'Manual Matches Needed' },
    ],
  },
  {
    id: 'aquabill',
    tag: 'SaaS · WhatsApp Automation',
    title: 'AquaBill',
    headline: 'Water billing that runs itself.',
    problem:
      'Property caretakers in East Africa manage dozens of tenants, manually reading meters, calculating bills in notebooks, and chasing payments on foot — a process ripe for errors, disputes, and wasted hours.',
    solution:
      'AquaBill is a SaaS web app and PWA that digitalises the entire water billing workflow. Caretakers input meter readings, and the system auto-calculates individual bills. Distribution and reminders are sent directly via WhatsApp — so tenants receive their bills on the app they already use.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'WhatsApp API', 'PWA', 'Tailwind', 'Chart.js'],
    features: [
      { icon: Calculator, label: 'Auto Bill Calculation', desc: 'Input readings once — bills, totals, and per-unit costs calculated instantly' },
      { icon: Send, label: 'WhatsApp Distribution', desc: 'Bills sent directly to tenants via WhatsApp, where they\'re guaranteed to be read' },
      { icon: Smartphone, label: 'PWA — Works Offline', desc: 'Full PWA for caretakers on the go, even with poor connectivity' },
      { icon: Droplets, label: 'Usage Analytics', desc: 'Track consumption trends, spot anomalies, and generate monthly reports' },
    ],
    accent: '#ff6b35',
    bg: 'from-orange-950/40 to-ink-900/60',
    emoji: '💧',
    metrics: [
      { val: '10×', label: 'Billing Speed' },
      { val: '100%', label: 'WhatsApp Delivery' },
      { val: '0', label: 'Manual Disputes' },
    ],
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="section-label mb-4 block">Case Studies</span>
          <h2 className="font-display font-bold text-mist-100 mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Real problems.{' '}
            <span className="gradient-text">Real solutions.</span>
          </h2>
          <p className="font-body text-mist-400 max-w-xl mx-auto leading-relaxed text-lg">
            Every project we take on has a problem worth solving. Here's how we solve them.
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-16">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} reverse={i % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, reverse }) {
  const [activeTab, setActiveTab] = useState('problem');
  const { tag, title, headline, problem, solution, stack, features, accent, bg, emoji, metrics } = project;

  return (
    <div className={`reveal rounded-3xl overflow-hidden border border-white/5 bg-gradient-to-br ${bg}`}>
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} min-h-[520px]`}>
        {/* Left: Info panel */}
        <div className="flex-1 p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{emoji}</span>
              <span className="section-label text-xs" style={{ color: accent }}>{tag}</span>
            </div>
            <h3 className="font-display font-bold text-mist-100 mb-3"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}>
              {title}
            </h3>
            <p className="font-display text-mist-400 text-lg italic mb-8">{headline}</p>

            {/* Tabs */}
            <div className="flex gap-1 mb-6 p-1 rounded-xl inline-flex"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              {['problem', 'solution'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-lg text-sm font-display font-medium capitalize transition-all duration-200 ${
                    activeTab === tab ? 'text-ink-950' : 'text-mist-400'
                  }`}
                  style={activeTab === tab ? { background: accent } : {}}
                >
                  {tab}
                </button>
              ))}
            </div>

            <p className="font-body text-mist-400 leading-relaxed text-sm">
              {activeTab === 'problem' ? problem : solution}
            </p>
          </div>

          {/* Metrics */}
          <div className="flex gap-8 mt-8 pt-8 border-t border-white/5">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="font-display font-bold text-2xl" style={{ color: accent }}>{m.val}</div>
                <div className="font-body text-mist-400 text-xs mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Tech & Features */}
        <div className="lg:w-[400px] p-10 border-t lg:border-t-0 lg:border-l border-white/5 flex flex-col gap-8">
          {/* Features */}
          <div>
            <p className="font-mono text-xs text-mist-400 tracking-widest mb-5 uppercase">Key Features</p>
            <div className="flex flex-col gap-4">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${accent}15`, border: `1px solid ${accent}25` }}>
                      <Icon size={14} style={{ color: accent }} />
                    </div>
                    <div>
                      <div className="font-display text-sm font-semibold text-mist-200">{f.label}</div>
                      <div className="font-body text-mist-400 text-xs mt-0.5 leading-relaxed">{f.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stack */}
          <div>
            <p className="font-mono text-xs text-mist-400 tracking-widest mb-4 uppercase">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {stack.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono"
                  style={{ background: `${accent}10`, color: accent, border: `1px solid ${accent}20` }}>
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
