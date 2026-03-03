import { useState, useEffect } from 'react';
import LogoImg from './LogoImg';

const VISITED_KEY = 'raagfest-visited';

/**
 * Short first-visit intro: logo + title with a quick animation, then fade to the site.
 * Only shows once per session (or once ever if we use sessionStorage).
 */
export default function IntroOverlay() {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem(VISITED_KEY);
    if (visited) {
      setVisible(false);
      return;
    }

    setVisible(true);

    const t = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    const t2 = setTimeout(() => {
      sessionStorage.setItem(VISITED_KEY, '1');
      setVisible(false);
    }, 2800);

    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`intro-overlay fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-brand-black transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden
    >
      <div className="intro-content flex flex-col items-center gap-6">
        <LogoImg
          src="logos/raag.png"
          alt=""
          className="intro-logo h-24 w-auto md:h-32 object-contain opacity-0"
        />
        <p className="hero-headline text-2xl md:text-4xl text-white tracking-tight opacity-0">
          Raag Fest
        </p>
        <p className="intro-subtitle font-medium text-white/60 text-sm tracking-widest uppercase opacity-0">
          The OG Chapter
        </p>
      </div>
    </div>
  );
}
