import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin } from 'lucide-react';
import axios from 'axios';

const services = [
  'Web & App Development', 'AI Engineering', 'Workflow Automation',
  'SEO & SSR Optimization', 'Full-Stack Project', 'Other',
];

const contactInfo = [
  { icon: Mail,   label: 'Email',    value: 'hello@jacestackai.com',  href: 'mailto:hello@jacestackai.com' },
  { icon: Phone,  label: 'WhatsApp', value: '+254 700 000 000',        href: 'https://wa.me/254700000000' },
  { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya',          href: null },
];

export default function ContactSection() {
  const [form, setForm]     = useState({ name: '', email: '', service: '', budget: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError]   = useState('');

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
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

  /* ── CONTACT IS THE FINAL INVERSION — ivory / light background ── */
  return (
    <section id="contact" className="relative py-32" style={{ background: '#f8f6f2' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(0,0,0,0.08)' }} />
      <div className="absolute inset-0 dot-grid-light opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 reveal">
          <span className="font-mono text-xs tracking-[0.3em] uppercase mb-5 block" style={{ color: 'rgba(0,0,0,0.35)' }}>
            Contact
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-display font-bold"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', letterSpacing: '-0.02em', color: '#080808', maxWidth: '480px' }}>
              Ready to build something great?
            </h2>
            <p className="font-body text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(0,0,0,0.45)' }}>
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>

        <div className="border-t mb-12" style={{ borderColor: 'rgba(0,0,0,0.08)' }} />

        <div className="grid lg:grid-cols-5 gap-12 reveal">
          {/* Info column */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <div>
              <p className="font-body text-sm leading-relaxed mb-8" style={{ color: 'rgba(0,0,0,0.5)' }}>
                Whether you're starting from scratch, scaling up, or injecting AI into an existing product —
                we'd love to hear about it. No sales pitch, just a real conversation.
              </p>
              <div className="flex flex-col gap-5">
                {contactInfo.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.label} className="flex items-center gap-4">
                      <div className="w-9 h-9 flex items-center justify-center"
                        style={{ background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.1)' }}>
                        <Icon size={15} style={{ color: 'rgba(0,0,0,0.5)' }} />
                      </div>
                      <div>
                        <div className="font-mono text-xs tracking-wider uppercase mb-0.5" style={{ color: 'rgba(0,0,0,0.35)' }}>{c.label}</div>
                        {c.href ? (
                          <a href={c.href} className="font-body text-sm hover-line" style={{ color: '#080808' }}>{c.value}</a>
                        ) : (
                          <span className="font-body text-sm" style={{ color: '#080808' }}>{c.value}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Response badge */}
            <div className="p-5 rounded-sm" style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.08)' }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#080808', opacity: 0.6 }} />
                <span className="font-mono text-xs" style={{ color: 'rgba(0,0,0,0.5)' }}>Responds within 24 hrs</span>
              </div>
              <p className="font-body text-xs leading-relaxed" style={{ color: 'rgba(0,0,0,0.4)' }}>
                Every enquiry is reviewed personally. No bots, no outsourcing — just people who care about your project.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-20 px-10 rounded-sm min-h-[400px]"
                style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.08)' }}>
                <CheckCircle size={44} className="mb-6" style={{ color: '#080808', opacity: 0.7 }} />
                <h3 className="font-display font-bold text-2xl mb-3" style={{ color: '#080808', letterSpacing: '-0.01em' }}>
                  Message sent.
                </h3>
                <p className="font-body text-sm leading-relaxed mb-8" style={{ color: 'rgba(0,0,0,0.5)', maxWidth: '320px' }}>
                  We've received your enquiry and will be in touch within 24 hours. Looking forward to building together.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-ghost-dark">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-5 p-8 rounded-sm"
                style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.08)' }}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs tracking-wider uppercase mb-2 block" style={{ color: 'rgba(0,0,0,0.4)' }}>
                      Name *
                    </label>
                    <input className="form-input-light" type="text" name="name" value={form.name}
                      onChange={onChange} placeholder="Jane Wanjiku" required />
                  </div>
                  <div>
                    <label className="font-mono text-xs tracking-wider uppercase mb-2 block" style={{ color: 'rgba(0,0,0,0.4)' }}>
                      Email *
                    </label>
                    <input className="form-input-light" type="email" name="email" value={form.email}
                      onChange={onChange} placeholder="jane@company.com" required />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs tracking-wider uppercase mb-2 block" style={{ color: 'rgba(0,0,0,0.4)' }}>
                      Service
                    </label>
                    <select className="form-input-light" name="service" value={form.service} onChange={onChange}>
                      <option value="" disabled>Select a service</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="font-mono text-xs tracking-wider uppercase mb-2 block" style={{ color: 'rgba(0,0,0,0.4)' }}>
                      Budget
                    </label>
                    <select className="form-input-light" name="budget" value={form.budget} onChange={onChange}>
                      <option value="" disabled>Select range</option>
                      {['< $1,000', '$1,000 – $5,000', '$5,000 – $15,000', '$15,000+', "Let's discuss"].map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs tracking-wider uppercase mb-2 block" style={{ color: 'rgba(0,0,0,0.4)' }}>
                    Message *
                  </label>
                  <textarea className="form-input-light resize-none" name="message" value={form.message}
                    onChange={onChange} rows={5} required
                    placeholder="Describe your project, goals, and any specific challenges you're facing..." />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-sm font-body" style={{ color: '#880000' }}>
                    <AlertCircle size={15} /> {error}
                  </div>
                )}

                <button type="submit" disabled={status === 'loading'}
                  className="btn-amber justify-center mt-1 disabled:opacity-50 disabled:cursor-not-allowed">
                  {status === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>Send Message <Send size={15} /></>
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
