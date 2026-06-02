import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin } from 'lucide-react';
import axios from 'axios';

const services = [
  'Web & App Development',
  'AI Engineering',
  'Workflow Automation',
  'SEO & SSR Optimization',
  'Full-Stack Project',
  'Other',
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@jacestackai.com', href: 'mailto:hello@jacestackai.com' },
  { icon: Phone, label: 'WhatsApp', value: '+254 700 000 000', href: 'https://wa.me/254700000000' },
  { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya', href: null },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', service: '', budget: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      await axios.post('/api/contact', form);
      setStatus('success');
      setForm({ name: '', email: '', service: '', budget: '', message: '' });
    } catch (err) {
      setStatus('error');
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[120px] opacity-8"
        style={{ background: 'radial-gradient(ellipse, rgba(0,245,255,0.08), transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="section-label mb-4 block">Contact</span>
          <h2 className="font-display font-bold text-mist-100 mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Ready to build{' '}
            <span className="gradient-text">something great?</span>
          </h2>
          <p className="font-body text-mist-400 max-w-xl mx-auto leading-relaxed text-lg">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 reveal">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col justify-between gap-10">
            <div>
              <h3 className="font-display font-bold text-mist-100 text-xl mb-6">Let's talk</h3>
              <p className="font-body text-mist-400 leading-relaxed text-sm mb-8">
                Whether you're starting from scratch, scaling up, or looking to inject AI into your
                existing product — we'd love to hear about it. No sales pitch, just a real conversation.
              </p>

              <div className="flex flex-col gap-5">
                {contactInfo.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(0,245,255,0.08)', border: '1px solid rgba(0,245,255,0.15)' }}>
                        <Icon size={16} style={{ color: '#00f5ff' }} />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-mist-400">{c.label}</div>
                        {c.href ? (
                          <a href={c.href} className="font-body text-mist-200 text-sm hover-underline">{c.value}</a>
                        ) : (
                          <span className="font-body text-mist-200 text-sm">{c.value}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick response badge */}
            <div className="card-glass rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-green-400">Typically responds in &lt; 24hrs</span>
              </div>
              <p className="font-body text-mist-400 text-xs leading-relaxed">
                We review all project enquiries personally. No automated bots, no outsourcing — just real humans
                who care about your project.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="card-glass rounded-2xl p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <CheckCircle size={52} className="mb-6" style={{ color: '#34d399' }} />
                <h3 className="font-display font-bold text-2xl text-mist-100 mb-3">Message sent!</h3>
                <p className="font-body text-mist-400 leading-relaxed">
                  We've received your enquiry and will be in touch within 24 hours. Looking forward to
                  building something great together.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-ghost mt-8"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-glass rounded-2xl p-8 flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-mono text-xs text-mist-400 tracking-wider mb-2 block uppercase">
                      Your Name *
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Wanjiku"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-mist-400 tracking-wider mb-2 block uppercase">
                      Email Address *
                    </label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-mono text-xs text-mist-400 tracking-wider mb-2 block uppercase">
                      Service Needed
                    </label>
                    <select
                      className="form-input"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s} style={{ background: '#0a0a12' }}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-mono text-xs text-mist-400 tracking-wider mb-2 block uppercase">
                      Budget Range
                    </label>
                    <select
                      className="form-input"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Select budget</option>
                      {['< $1,000', '$1,000 – $5,000', '$5,000 – $15,000', '$15,000+', 'Let\'s discuss'].map((b) => (
                        <option key={b} value={b} style={{ background: '#0a0a12' }}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-mist-400 tracking-wider mb-2 block uppercase">
                    Tell us about your project *
                  </label>
                  <textarea
                    className="form-input resize-none"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your project, goals, and any specific challenges you're facing..."
                    required
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm font-body">
                    <AlertCircle size={16} />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary justify-center text-base mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-ink-950/30 border-t-ink-950 rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={17} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
