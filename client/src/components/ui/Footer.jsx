import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FiTwitter, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const footerLinks = {
  Services: ['Web & App Development', 'AI Engineering', 'Workflow Automations', 'SEO Optimization', 'SSR & Performance'],
  Company:  ['About Us', 'Our Process', 'Case Studies', 'Insights', 'Contact'],
};

const socials = [
  { Icon: FiTwitter,  href: 'https://twitter.com/jacestackai',          label: 'Twitter'  },
  { Icon: FiLinkedin, href: 'https://linkedin.com/company/jacestackai', label: 'LinkedIn' },
  { Icon: FiGithub,   href: 'https://github.com/jacestackai',           label: 'GitHub'   },
  { Icon: FiMail,     href: 'mailto:hello@jacestackai.com',             label: 'Email'    },
];

export default function Footer() {
  const go = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    /* Return to void — the page journey completes */
    <footer className="relative pt-20 pb-10" style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 bg-white flex items-center justify-center">
                <span className="font-display font-bold text-void text-xs">JS</span>
              </div>
              <span className="font-display font-semibold text-white text-base">
                JaceStack<span style={{ color: 'rgba(255,255,255,0.35)' }}> AI</span>
              </span>
            </div>
            <p className="font-body text-xs leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.3)', maxWidth: '200px' }}>
              Building the digital future with precision engineering and intelligent systems.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="w-8 h-8 flex items-center justify-center transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.4)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-mono text-xs tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover-line font-body text-xs transition-colors duration-150"
                      style={{ color: 'rgba(255,255,255,0.3)' }}
                      onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.3)'}
                    >{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <div className="p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <h4 className="font-display font-semibold text-white text-sm mb-2">Ready to start?</h4>
            <p className="font-body text-xs leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Let's build something extraordinary together.
            </p>
            <a href="#contact" onClick={(e) => { e.preventDefault(); go('#contact'); }}
              className="inline-flex items-center gap-1.5 text-xs font-display font-semibold transition-all duration-200"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.95)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
            >
              Get in touch <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            © {new Date().getFullYear()} JaceStack AI. All rights reserved.
          </p>
          <p className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Built with care in Nairobi, Kenya
          </p>
          <div className="flex gap-5 text-xs font-body">
            {['Privacy Policy', 'Terms'].map((l) => (
              <a key={l} href="#" style={{ color: 'rgba(255,255,255,0.2)' }}
                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.2)'}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
