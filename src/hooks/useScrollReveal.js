import { useEffect } from 'react';

/**
 * Observes elements with data-scroll-reveal and adds .revealed when in view.
 * Use with .reveal-in class for fade-in-up animation.
 */
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-scroll-reveal]');
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
    );

    els.forEach((el) => observer.observe(el));
    return () => els.forEach((el) => observer.unobserve(el));
  }, []);
}
