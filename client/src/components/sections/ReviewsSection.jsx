import React, { useRef, useEffect } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Amara Osei',
    role: 'Founder, RetailTech GH',
    avatar: 'AO',
    rating: 5,
    text: "JaceStack completely transformed how we think about our inventory management. They didn't just build what we asked — they challenged our assumptions and delivered something far better. The AI integration alone saved us 20+ hours a week.",
  },
  {
    name: 'Wanjiku Kamau',
    role: 'Property Manager, Nairobi',
    avatar: 'WK',
    rating: 5,
    text: "AquaBill has been a genuine lifesaver. I used to spend my entire Saturday doing water bills — now it's automatic and goes straight to tenants on WhatsApp. My tenants actually pay on time now. Absolutely brilliant work.",
  },
  {
    name: 'David Mwangi',
    role: 'CTO, Savanna Logistics',
    avatar: 'DM',
    rating: 5,
    text: "What sets JaceStack apart is that they think like engineers and product people at the same time. The codebase was clean, documented, and built to scale. Six months later we're at 3× the users and haven't touched the core architecture.",
  },
  {
    name: 'Fatima Diallo',
    role: 'CEO, EdTech Dakar',
    avatar: 'FD',
    rating: 5,
    text: "Communication was impeccable from day one. Weekly demos, honest updates when things got complex, and a final product that launched on time. I've worked with agencies across three countries — JaceStack is a different calibre entirely.",
  },
  {
    name: 'Kofi Asante',
    role: 'Head of Operations, InsureTech KE',
    avatar: 'KA',
    rating: 5,
    text: "Our automation project was complex — multiple APIs, real-time syncing, tight deadline. They mapped the entire system in the first week and executed without a hitch. The ROI was visible within the first month of going live.",
  },
  {
    name: 'Nadia Abdirahman',
    role: 'Product Lead, FinPay Africa',
    avatar: 'NA',
    rating: 5,
    text: "The SEO work alone was worth every shilling. We went from page 5 to page 1 for our core keywords in under three months. Technical implementation was spotless and they explained everything clearly throughout.",
  },
];

const allReviews = [...reviews, ...reviews];

export default function ReviewsSection() {
  const trackRef = useRef(null);
  const paused = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    let rafId;

    const animate = () => {
      if (!paused.current) {
        pos -= 0.5;
        if (Math.abs(pos) >= track.scrollWidth / 2) pos = 0;
        track.style.transform = `translateX(${pos}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    const pause = () => { paused.current = true; };
    const resume = () => { paused.current = false; };
    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', resume);
    track.addEventListener('touchstart', pause, { passive: true });
    track.addEventListener('touchend', resume, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      track.removeEventListener('mouseenter', pause);
      track.removeEventListener('mouseleave', resume);
    };
  }, []);

  return (
    <section id="reviews" className="relative py-32 overflow-hidden" style={{ background: '#080808' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.04)' }} />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 reveal">
        <span className="section-label mb-5 block">Client Love</span>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
          <h2 className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.02em' }}>
            Don't take our word for it
          </h2>
          {/* Star summary */}
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} fill="rgba(255,255,255,0.7)" stroke="none" />
              ))}
            </div>
            <span className="font-display font-semibold text-white text-sm">5.0</span>
            <span className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>· All clients</span>
          </div>
        </div>
      </div>

      {/* Scrolling track */}
      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #080808, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #080808, transparent)' }} />

        <div ref={trackRef} className="flex gap-4 py-3" style={{ width: 'max-content' }}>
          {allReviews.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }) {
  const { name, role, avatar, rating, text } = review;
  return (
    <div className="w-[330px] flex-shrink-0 flex flex-col gap-5 p-6 rounded-sm transition-all duration-200 hover:brightness-125"
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="flex gap-0.5">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={11} fill="rgba(255,255,255,0.5)" stroke="none" />
        ))}
      </div>
      <p className="font-body text-sm leading-relaxed flex-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
        "{text}"
      </p>
      <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center text-xs font-display font-bold"
          style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)' }}>
          {avatar}
        </div>
        <div>
          <div className="font-display font-semibold text-white text-xs">{name}</div>
          <div className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{role}</div>
        </div>
      </div>
    </div>
  );
}
