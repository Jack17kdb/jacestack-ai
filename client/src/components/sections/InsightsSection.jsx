import React from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';

const posts = [
  {
    tag: 'AI Engineering',
    title: 'How We Used OpenAI CLIP to Build a 94%-Accurate Lost Item Matcher',
    excerpt:
      'Semantic similarity isn\'t just for text anymore. Here\'s how multimodal embeddings changed the game for our lost & found platform — and how you can apply the same pattern.',
    readTime: '8 min read',
    date: 'Jan 2025',
    accent: '#00f5ff',
    emoji: '🧠',
  },
  {
    tag: 'SaaS Development',
    title: 'Why WhatsApp Is the Best Distribution Channel for African SaaS Products',
    excerpt:
      'Email open rates hover around 20%. WhatsApp messages get 98% open rates. When we built AquaBill, the distribution channel wasn\'t an afterthought — it was the product.',
    readTime: '6 min read',
    date: 'Feb 2025',
    accent: '#34d399',
    emoji: '💬',
  },
  {
    tag: 'Web Performance',
    title: 'SSR vs CSR vs ISR: Choosing the Right Rendering Strategy in 2025',
    excerpt:
      'The rendering strategy you pick affects SEO, performance, and infrastructure cost. Here\'s our decision framework for choosing between Next.js SSR, ISR, and React CSR.',
    readTime: '10 min read',
    date: 'Mar 2025',
    accent: '#f59e0b',
    emoji: '⚡',
  },
  {
    tag: 'Workflow Automation',
    title: 'From Spreadsheets to Pipelines: Automating the Ops Stack of a Growing Startup',
    excerpt:
      'Manual reporting, CSV exports, and daily Slack updates killed 15 hours a week at one of our clients. Here\'s the automation stack we built to get that time back.',
    readTime: '7 min read',
    date: 'Apr 2025',
    accent: '#a78bfa',
    emoji: '🔁',
  },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16 reveal">
          <div>
            <span className="section-label mb-4 block">Insights</span>
            <h2 className="font-display font-bold text-mist-100"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Thinking out loud{' '}
              <span className="gradient-text">on tech & craft</span>
            </h2>
          </div>
          <p className="font-body text-mist-400 max-w-sm leading-relaxed text-sm sm:text-right">
            Real-world lessons from building AI products, shipping SaaS, and engineering at scale.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 reveal-stagger">
          {posts.map((post, i) => (
            <article
              key={post.title}
              className={`card-glass rounded-2xl p-8 group cursor-pointer transition-all duration-300 hover:scale-[1.01] ${
                i === 0 ? 'md:col-span-2 md:grid md:grid-cols-2 md:gap-8' : ''
              }`}
            >
              <div className={i === 0 ? '' : ''}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{post.emoji}</span>
                  <span className="section-label text-xs" style={{ color: post.accent }}>
                    {post.tag}
                  </span>
                </div>
                <h3 className={`font-display font-semibold text-mist-100 mb-3 group-hover:text-white transition-colors ${
                  i === 0 ? 'text-2xl' : 'text-lg'
                }`}>
                  {post.title}
                </h3>
              </div>

              <div className={i === 0 ? 'flex flex-col justify-between' : ''}>
                <p className="font-body text-mist-400 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs font-mono text-mist-400">
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} /> {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-display font-medium group-hover:gap-2 transition-all duration-200"
                    style={{ color: post.accent }}>
                    Read <ArrowUpRight size={15} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
