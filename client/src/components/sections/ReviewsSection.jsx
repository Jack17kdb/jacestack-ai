import React, { useRef, useEffect } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Amara Osei',
    role: 'Founder, RetailTech GH',
    avatar: 'AO',
    rating: 5,
    text: "JaceStack completely transformed how we think about our inventory management system. They didn't just build what we asked for — they challenged our thinking and delivered something far better than we imagined. The AI integration alone saved us 20+ hours a week.",
    accent: '#00f5ff',
  },
  {
    name: 'Wanjiku Kamau',
    role: 'Property Manager, Nairobi',
    avatar: 'WK',
    rating: 5,
    text: "AquaBill has been a lifesaver. I used to spend my entire Saturday doing water bills — now the system does it automatically and sends them to tenants on WhatsApp. My tenants actually pay on time now because they get reminders! Absolutely brilliant work.",
    accent: '#34d399',
  },
  {
    name: 'David Mwangi',
    role: 'CTO, Savanna Logistics',
    avatar: 'DM',
    rating: 5,
    text: "What sets JaceStack apart is that they think like engineers AND like product people. The codebase they delivered was clean, documented, and ready to scale. Six months later, we're at 3× the users and haven't touched the core architecture.",
    accent: '#a78bfa',
  },
  {
    name: 'Fatima Diallo',
    role: 'CEO, EdTech Dakar',
    avatar: 'FD',
    rating: 5,
    text: "Communication was impeccable from day one. Weekly demos, honest updates when things got complex, and a final product that launched on time. I've worked with agencies across three countries — JaceStack is a different breed.",
    accent: '#f59e0b',
  },
  {
    name: 'Kofi Asante',
    role: 'Head of Operations, InsureTech KE',
    avatar: 'KA',
    rating: 5,
    text: "Our workflow automation project was complex — multiple APIs, real-time syncing, and a tight deadline. They mapped the entire system in the first week and executed flawlessly. The ROI was visible within the first month of going live.",
    accent: '#ff6b35',
  },
  {
    name: 'Nadia Abdirahman',
    role: 'Product Lead, FinPay Africa',
    avatar: 'NA',
    rating: 5,
    text: "The SEO work alone was worth every shilling. We went from page 5 to page 1 for our core keywords in under three months. They explained everything clearly and the technical implementation was spotless. Highly recommend for any serious product team.",
    accent: '#ec4899',
  },
];

// Duplicate for infinite scroll
const allReviews = [...reviews, ...reviews];

export default function ReviewsSection() {
  const trackRef = useRef(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let pos = 0;
    let rafId;
    const speed = 0.6;

    const animate = () => {
      if (!isHovered.current) {
        pos -= speed;
        const half = track.scrollWidth / 2;
        if (Math.abs(pos) >= half) pos = 0;
        track.style.transform = `translateX(${pos}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    const onEnter = () => { isHovered.current = true; };
    const onLeave = () => { isHovered.current = false; };
    track.addEventListener('mouseenter', onEnter);
    track.addEventListener('mouseleave', onLeave);
    track.addEventListener('touchstart', onEnter, { passive: true });
    track.addEventListener('touchend', onLeave, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      track.removeEventListener('mouseenter', onEnter);
      track.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section id="reviews" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,245,255,0.03) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 mb-16 reveal text-center">
        <span className="section-label mb-4 block">Client Love</span>
        <h2 className="font-display font-bold text-mist-100"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          Don't take our word for it
        </h2>
        <p className="font-body text-mist-400 mt-4 max-w-xl mx-auto">
          Real feedback from real clients who trusted us to build their vision.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #040408, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #040408, transparent)' }} />

        <div ref={trackRef} className="flex gap-5 py-4" style={{ width: 'max-content', willChange: 'transform' }}>
          {allReviews.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>

      {/* Star summary */}
      <div className="mt-12 text-center reveal">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full card-glass">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#f59e0b" stroke="none" />
            ))}
          </div>
          <span className="font-display font-semibold text-mist-100">5.0</span>
          <span className="text-mist-400 font-body text-sm">· Rated by all clients</span>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }) {
  const { name, role, avatar, rating, text, accent } = review;
  return (
    <div
      className="w-[340px] flex-shrink-0 card-glass rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 hover:scale-[1.02]"
      style={{ borderColor: `${accent}15` }}
    >
      <div className="flex gap-0.5 mb-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={13} fill="#f59e0b" stroke="none" />
        ))}
      </div>
      <p className="font-body text-mist-400 text-sm leading-relaxed flex-1">
        "{text}"
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-display font-bold text-ink-950 flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${accent}, ${accent}99)` }}
        >
          {avatar}
        </div>
        <div>
          <div className="font-display font-semibold text-mist-100 text-sm">{name}</div>
          <div className="font-body text-mist-400 text-xs">{role}</div>
        </div>
      </div>
    </div>
  );
}
