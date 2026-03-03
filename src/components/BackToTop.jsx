import { useState, useEffect } from 'react';

const SHOW_AFTER = 400;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="back-to-top fixed z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-orange to-brand-purple text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-[0_0_30px_rgba(239,110,58,0.4)] focus:outline-none focus:ring-2 focus:ring-brand-orange/50 touch-manipulation"
    >
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}
