/** Concert-style light beams for hero background */
export default function LightBeams({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden>
      <div className="light-beam light-beam-1" style={{ top: '15%', left: '-10%' }} />
      <div className="light-beam light-beam-2" style={{ top: '45%', left: '-15%' }} />
      <div className="light-beam light-beam-3" style={{ top: '70%', left: '-5%' }} />
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-brand-purple/20 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-brand-orange/15 via-transparent to-transparent" />
    </div>
  );
}
