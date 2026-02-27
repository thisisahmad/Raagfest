/** Premium music note icons - decorative SVG */
function NoteIcon({ className = 'w-4 h-4', style = {} }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden style={style}>
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
    </svg>
  );
}

function NoteDoubleIcon({ className = 'w-4 h-4', style = {} }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden style={style}>
      <path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z" />
    </svg>
  );
}

export default function MusicNotes({ count = 5, className = '' }) {
  const icons = [
    { Icon: NoteIcon, delay: 0, size: 'w-3 h-3', x: '10%', y: '20%' },
    { Icon: NoteDoubleIcon, delay: 0.5, size: 'w-4 h-4', x: '85%', y: '15%' },
    { Icon: NoteIcon, delay: 1, size: 'w-2.5 h-2.5', x: '15%', y: '70%' },
    { Icon: NoteDoubleIcon, delay: 1.5, size: 'w-3 h-3', x: '80%', y: '75%' },
    { Icon: NoteIcon, delay: 2, size: 'w-2 h-2', x: '50%', y: '10%' },
  ].slice(0, count);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden>
      {icons.map(({ Icon, delay, size, x, y }, i) => (
        <span
          key={i}
          className={`absolute text-white/[0.06] ${size} animate-float`}
          style={{
            left: x,
            top: y,
            animationDelay: `${delay}s`,
          }}
        >
          <Icon className="w-full h-full" />
        </span>
      ))}
    </div>
  );
}

export { NoteIcon, NoteDoubleIcon };
