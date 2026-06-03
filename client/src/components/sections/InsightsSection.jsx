import React from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';

const posts = [
  {
    tag: 'AI Engineering',
    title: 'How We Used OpenAI CLIP to Build a 94%-Accurate Lost Item Matcher',
    excerpt: "Semantic similarity isn't just for text. Here's how multimodal embeddings changed the game for our lost & found platform — and how you can apply the same pattern.",
    readTime: '8 min read',
    date: 'Jan 2025',
    emoji: '🧠',
    featured: true,
  },
  {
    tag: 'SaaS Development',
    title: 'Why WhatsApp Is the Best Distribution Channel for African SaaS',
    excerpt: 'Email open rates hover around 20%. WhatsApp messages get 98%. When we built AquaBill, the distribution channel wasn\'t an afterthought — it was the product.',
    readTime: '6 min read',
    date: 'Feb 2025',
    emoji: '💬',
  },
  {
    tag: 'Web Performance',
    title: 'SSR vs CSR vs ISR: Choosing the Right Rendering Strategy in 2025',
    excerpt: 'The rendering strategy you pick affects SEO, performance, and infrastructure cost. Our decision framework for Next.js SSR, ISR, and React CSR.',
    readTime: '10 min read',
    date: 'Mar 2025',
    emoji: '⚡',
  },
  {
    tag: 'Automation',
    title: 'From Spreadsheets to Pipelines: Automating a Growing Startup\'s Ops Stack',
    excerpt: 'Manual reporting and daily Slack updates killed 15 hours a week at one of our clients. Here\'s the automation stack we built to get that time back.',
    readTime: '7 min read',
    date: 'Apr 2025',
    emoji: '🔁',
  },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="relative py-32" style={{ background: '#111111' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16 reveal">
          <div>
            <span className="section-label mb-5 block">Insights</span>
            <h2 className="font-display font-bold text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              Thinking out loud
            </h2>
          </div>
          <p className="font-body text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.38)' }}>
            Real-world lessons from building AI products, shipping SaaS, and engineering at scale.
          </p>
        </div>

        <div className="rule-dark border-t mb-12" />

        {/* Featured post */}
        <div className="reveal mb-6">
          <FeaturedPost post={posts[0]} />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-4 reveal-stagger">
          {posts.slice(1).map((p) => (
            <SmallPost key={p.title} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedPost({ post }) {
  return (
    <article className="group flex flex-col lg:flex-row gap-0 cursor-pointer rounded-sm overflow-hidden transition-all duration-200 hover:brightness-110"
      style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}>
      {/* Left accent */}
      <div className="lg:w-2 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.08)' }} />
      <div className="p-8 lg:p-10 flex flex-col lg:flex-row gap-8 flex-1">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xl">{post.emoji}</span>
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>{post.tag}</span>
            <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>Featured</span>
          </div>
          <h3 className="font-display font-bold text-white mb-4 group-hover:text-white transition-colors"
            style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', letterSpacing: '-0.01em' }}>
            {post.title}
          </h3>
          <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {post.excerpt}
          </p>
        </div>
        <div className="flex lg:flex-col justify-between lg:justify-end items-center lg:items-end gap-4 lg:w-36 flex-shrink-0">
          <div className="flex items-center gap-3 font-mono text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            <Clock size={11} />
            <span>{post.readTime}</span>
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1 font-display font-semibold text-sm group-hover:gap-2 transition-all"
            style={{ color: 'rgba(255,255,255,0.7)' }}>
            Read <ArrowUpRight size={14} />
          </div>
        </div>
      </div>
    </article>
  );
}

function SmallPost({ post }) {
  return (
    <article className="group cursor-pointer p-6 rounded-sm transition-all duration-200 hover:brightness-110"
      style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)' }}>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">{post.emoji}</span>
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.25)' }}>{post.tag}</span>
      </div>
      <h3 className="font-display font-semibold text-white text-sm leading-snug mb-3 group-hover:text-white"
        style={{ letterSpacing: '-0.01em' }}>
        {post.title}
      </h3>
      <p className="font-body text-xs leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
          <Clock size={10} /> {post.readTime}
        </div>
        <div className="flex items-center gap-1 text-xs font-display font-medium group-hover:gap-1.5 transition-all"
          style={{ color: 'rgba(255,255,255,0.5)' }}>
          Read <ArrowUpRight size={12} />
        </div>
      </div>
    </article>
  );
}
