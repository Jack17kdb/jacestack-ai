import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Insights', href: '#insights' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 backdrop-blur-xl border-b border-white/5'
          : 'py-6'
      }`}
      style={{
        background: scrolled ? 'rgba(4,4,8,0.85)' : 'transparent',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #00f5ff, #0099cc)' }}>
            <span className="font-display font-bold text-ink-950 text-sm">J</span>
          </div>
          <span className="font-display font-semibold text-mist-100 text-lg tracking-tight">
            JaceStack<span className="text-electric ml-0.5">AI</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className="hover-underline text-mist-400 hover:text-mist-100 transition-colors duration-200 text-sm font-body font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="btn-primary text-sm"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-mist-100 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(4,4,8,0.97)', backdropFilter: 'blur(20px)' }}
      >
        <ul className="px-6 py-6 flex flex-col gap-5 border-t border-white/5">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className="text-mist-200 text-base font-body font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={(e) => handleNav(e, '#contact')} className="btn-primary w-full justify-center mt-2">
              Start a Project
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
