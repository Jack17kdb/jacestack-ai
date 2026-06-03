export function initScrollReveal() {
  if (typeof window === 'undefined') return;

  const runGSAP = () => {
    const gsap = window.gsap;
    const ST = window.ScrollTrigger;
    if (!gsap || !ST) { useFallback(); return; }
    gsap.registerPlugin(ST);

    // Individual .reveal elements
    gsap.utils.toArray('.reveal').forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        }
      );
    });

    // Staggered children
    gsap.utils.toArray('.reveal-stagger').forEach((container) => {
      gsap.fromTo(Array.from(container.children),
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: container, start: 'top 86%', toggleActions: 'play none none none' },
        }
      );
    });
  };

  const useFallback = () => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal, .reveal-stagger > *').forEach((el) => io.observe(el));
  };

  if (window.gsap && window.ScrollTrigger) {
    runGSAP();
  } else {
    useFallback();
    const s1 = document.createElement('script');
    s1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
    s1.onload = () => {
      const s2 = document.createElement('script');
      s2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
      s2.onload = runGSAP;
      document.head.appendChild(s2);
    };
    document.head.appendChild(s1);
  }
}
