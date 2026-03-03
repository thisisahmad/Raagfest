import { useState, useEffect } from 'react';

/**
 * Thin gradient bar at the top that fills as you scroll – like the festival "building" as you go.
 */
export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setWidth(height > 0 ? (winScroll / height) * 100 : 0);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="scroll-progress fixed top-0 left-0 right-0 z-[100] h-0.5 origin-left"
      role="presentation"
      aria-hidden
      style={{ transform: `scaleX(${width / 100})` }}
    />
  );
}
