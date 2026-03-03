import { useState, useEffect } from 'react';

/**
 * Soft brand-colored glow that follows the cursor on desktop.
 * Hidden on touch devices for better UX.
 */
export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMove);
    document.documentElement.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="cursor-glow pointer-events-none fixed z-[9999] rounded-full mix-blend-screen"
      aria-hidden
      style={{
        left: pos.x,
        top: pos.y,
        transform: 'translate(-50%, -50%)',
        width: 'min(80vmin, 420px)',
        height: 'min(80vmin, 420px)',
      }}
    />
  );
}
