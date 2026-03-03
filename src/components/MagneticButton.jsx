import { useRef, useState, useEffect } from 'react';

/**
 * Wraps a button/link so it subtly moves toward the cursor on hover (desktop only).
 * Creates a "magnetic" feel for a unique experience.
 */
const STRENGTH = 0.14;
const MAX_MOVE = 10;

export default function MagneticButton({ children, className = '', as: Component = 'a', ...props }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !ref.current) return;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const el = ref.current;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      let dx = (e.clientX - centerX) * STRENGTH;
      let dy = (e.clientY - centerY) * STRENGTH;
      const len = Math.sqrt(dx * dx + dy * dy);
      if (len > MAX_MOVE) {
        dx = (dx / len) * MAX_MOVE;
        dy = (dy / len) * MAX_MOVE;
      }
      setTransform({ x: dx, y: dy });
    };

    const handleLeave = () => {
      setTransform({ x: 0, y: 0 });
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [mounted]);

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        transition: transform.x === 0 && transform.y === 0 ? 'transform 0.3s ease-out' : 'none',
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
