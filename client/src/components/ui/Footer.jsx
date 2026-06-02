import React from 'react';
import { Twitter, Linkedin, Github, ArrowUpRight, Mail } from 'lucide-react';

const footerLinks = {
  Services: [
    'Web & App Development',
    'AI Engineering',
    'Workflow Automations',
    'SEO Optimization',
    'SSR & Performance',
  ],
  Company: ['About Us', 'Our Process', 'Case Studies', 'Insights', 'Contact'],
};

const socials = [
  { icon: Twitter, href: 'https://twitter.com/jacestackai', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/jacestackai', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/jacestackai', label: 'GitHub' },
  { icon: Mail, href: 'mailto:hello@jacestackai.com', label: 'Email' },
];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-8 border-t border-white/5">
      <div className="absolute inset-0 dot-grid opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #00f5ff, #0099cc)' }}>
                <span className="font-display font-bold text-ink-950 text-sm">J</span>
              </div>
              <span className="font-display font-semibold text-mist-100 text-lg">
                JaceStack<span className="text-electric">AI</span>
              </span>
            </div>
            <p className="font-body text-mist-400 text-sm leading-relaxed mb-6">
              Building the digital future with precision engineering and intelligent systems.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center card-glass transition-all duration-200 hover:border-electric/30 text-mist-400 hover:text-electric"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display font-semibold text-mist-200 text-sm mb-5">{heading}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="font-body text-mist-400 text-sm hover-underline hover:text-mist-200 transition-colors duration-200"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA card */}
          <div className="card-glass rounded-xl p-6">
            <h4 className="font-display font-semibold text-mist-100 text-sm mb-3">
              Ready to start?
            </h4>
            <p className="font-body text-mist-400 text-xs leading-relaxed mb-5">
              Tell us about your project and let's build something extraordinary.
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
              className="inline-flex items-center gap-2 text-electric font-display font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              Get in touch <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-mist-400 text-xs">
            © {new Date().getFullYear()} JaceStack AI. All rights reserved.
          </p>
          <p className="font-body text-mist-400 text-xs">
            Built with{' '}
            <span className="text-electric">♥</span>
            {' '}in Nairobi, Kenya
          </p>
          <div className="flex gap-5 text-xs font-body text-mist-400">
            <a href="#" className="hover:text-mist-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-mist-200 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
