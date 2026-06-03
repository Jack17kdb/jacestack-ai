import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Services',  href: '#services'  },
  { label: 'Work',      href: '#portfolio'  },
  { label: 'Process',   href: '#process'   },
  { label: 'About',     href: '#about'     },
  { label: 'Insights',  href: '#insights'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        padding: scrolled ? '12px 0' : '22px 0',
        background: scrolled ? 'rgba(8,8,8,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="w-7 h-7 bg-white flex items-center justify-center">
            <span className="font-display font-bold text-void text-xs tracking-tight">JS</span>
          </div>
          <span className="font-display font-semibold text-white text-base tracking-tight">
            JaceStack<span style={{ color: 'rgba(255,255,255,0.45)' }}> AI</span>
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={(e) => go(e, l.href)}
                className="hover-line font-body text-sm font-medium transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.5)' }}
                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.9)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex">
          <a href="#contact" onClick={(e) => go(e, '#contact')} className="btn-primary text-sm">
            Start a Project
          </a>
        </div>

        <button className="md:hidden p-2 text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ background: 'rgba(8,8,8,0.97)', borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <ul className="px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={(e) => go(e, l.href)}
                className="font-body text-sm font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={(e) => go(e, '#contact')} className="btn-primary w-full justify-center mt-1 text-sm">
              Start a Project
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
