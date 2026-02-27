import SoundBars from './SoundBars';
import MusicNotes from './MusicNotes';
import LightBeams from './LightBeams';

/** Soft particles (CSS-only) for cinematic depth */
function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {Array.from({ length: 24 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/20 animate-float"
          style={{
            left: `${10 + (i * 4) % 80}%`,
            top: `${5 + (i * 7) % 90}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${5 + (i % 3)}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-28">
      {/* Layered background - let liquid show + soft vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 pointer-events-none" />
      <LightBeams />
      <Particles />
      <MusicNotes count={5} className="z-0" />

      {/* Animated soundwave behind title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-full max-w-2xl mx-auto px-4 flex justify-center gap-0.5 opacity-30" style={{ marginTop: '-4rem' }}>
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="w-1 rounded-full bg-gradient-to-t from-brand-purple/60 to-brand-orange/50 animate-pulse"
              style={{
                height: `${12 + Math.sin(i * 0.4) * 20 + (i % 4) * 8}px`,
                animationDelay: `${i * 0.03}s`,
                animationDuration: '1.5s',
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Dates badge */}
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/25 bg-black/50 backdrop-blur-md mb-12 shadow-xl">
          <span className="text-brand-orange font-display font-bold text-sm md:text-base tracking-[0.35em]">APR 4 & 5</span>
          <span className="text-white/50 text-sm">·</span>
          <span className="text-white/90 text-xs uppercase tracking-[0.2em]">2 Nights</span>
        </div>

        <p className="section-label mb-5 text-sm tracking-[0.45em]">
          Raag Fest x OG Fest
        </p>

        {/* Big bold typography - cinematic headline */}
        <h1 className="festival-headline text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight mb-4 drop-shadow-2xl" style={{ textShadow: '0 0 80px rgba(87,49,140,0.5), 0 0 120px rgba(255,109,68,0.3)' }}>
          Raag Fest
        </h1>
        <p className="font-display text-3xl sm:text-4xl md:text-5xl text-white/95 mb-4 tracking-[0.25em]">
          The OG Chapter
        </p>
        <p className="text-white/50 text-sm md:text-base mt-6 max-w-md mx-auto tracking-wide">
          Acquired by 3DM · Pop-up Market by Social Bazaar
        </p>

        {/* Equalizer-style motion under subtitle */}
        <div className="flex justify-center mt-12 opacity-90">
          <SoundBars count={14} className="h-12" />
        </div>

        {/* Premium CTAs with glow */}
        <div className="mt-20 flex flex-wrap justify-center gap-5">
          <a
            href="#tickets"
            className="btn-ticket-glow px-12 py-4 rounded-full font-display font-bold uppercase tracking-[0.25em] text-sm bg-gradient-to-r from-brand-orange to-brand-purple text-white border border-white/20 hover:border-brand-orange/60"
          >
            Get Tickets
          </a>
          <a
            href="#lineup"
            className="px-12 py-4 rounded-full font-display font-semibold uppercase tracking-[0.2em] text-sm bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300"
          >
            See Lineup
          </a>
        </div>
      </div>

      {/* Bottom soundwave strip */}
      <div className="absolute bottom-0 left-0 right-0 h-20 flex items-end justify-center gap-0.5 pb-4 opacity-40">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="w-1 rounded-full animate-pulse"
            style={{
              height: `${15 + (i % 6) * 12}%`,
              animationDelay: `${i * 0.04}s`,
              background: 'linear-gradient(to top, rgba(87, 49, 140, 0.6), rgba(255, 109, 68, 0.5))',
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-brand-orange" />
        </div>
      </div>
    </section>
  );
}
