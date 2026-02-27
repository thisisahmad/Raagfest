export default function SoundBars({ className = '', count = 10 }) {
  return (
    <div className={`flex items-end justify-center gap-1 h-8 ${className}`} aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="sound-bar h-full min-h-[6px] origin-bottom" />
      ))}
    </div>
  );
}
