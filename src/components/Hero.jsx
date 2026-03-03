import { useState, useEffect } from 'react';
import SoundBars from './SoundBars';
import MusicNotes from './MusicNotes';
import LightBeams from './LightBeams';
import MagneticButton from './MagneticButton';

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
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setTimeout(() => setRevealed(true), 80));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden pt-20 sm:pt-24 md:pt-28">
      <LightBeams />
      <Particles />
      <MusicNotes count={5} className="z-0" />

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

      <div className={`container mx-auto px-4 relative z-10 text-center md:pl-[8%] md:pr-4 md:text-left ${revealed ? 'revealed' : ''}`}>
        <div className="max-w-4xl md:max-w-none">
          {/* Dates badge - asymmetric on desktop */}
          <div className="hero-reveal hero-reveal-delay-1 inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-white/25 bg-black/50 backdrop-blur-md mb-8 sm:mb-12 shadow-xl md:ml-0">
            <span className="text-brand-orange font-display font-bold text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.35em]">APR 4 & 5</span>
            <span className="text-white/50 text-sm">·</span>
            <span className="text-white/90 text-xs uppercase tracking-[0.2em]">2 Nights</span>
          </div>

          <p className="hero-reveal hero-reveal-delay-2 section-label mb-5 text-sm tracking-[0.45em] md:text-left">
            Raag Fest x OG Fest
          </p>

          <h1 className="hero-reveal hero-reveal-delay-3 hero-headline text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight mb-3 sm:mb-4 drop-shadow-2xl" style={{ textShadow: '0 0 80px rgba(91,59,157,0.45), 0 0 120px rgba(239,110,58,0.3)' }}>
            Raag Fest
          </h1>
          <p className="hero-reveal hero-reveal-delay-4 hero-subtitle text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/95 mb-3 sm:mb-4 tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em]">
            The OG Chapter
          </p>
          <p className="hero-reveal hero-reveal-delay-5 text-white/50 text-xs sm:text-sm md:text-base mt-4 sm:mt-6 max-w-md md:max-w-lg tracking-wide md:mr-auto md:ml-0 px-1 sm:px-0">
            Execution by 3DM · Pop-up Market by Social Bazaar
          </p>

          <div className="hero-reveal hero-reveal-delay-6 flex justify-center md:justify-start mt-12 opacity-90">
            <SoundBars count={14} className="h-12" />
          </div>

          <div className="hero-reveal hero-reveal-delay-7 mt-14 sm:mt-20 mb-20 sm:mb-24 md:mb-32 flex flex-col sm:flex-row flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-5">
            <MagneticButton
              href="#tickets"
              className="btn-ticket-glow w-full sm:w-auto min-h-[48px] flex items-center justify-center px-8 sm:px-12 py-3.5 sm:py-4 rounded-full font-display font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-sm bg-gradient-to-r from-brand-orange to-brand-purple text-white border border-white/20 hover:border-brand-orange/60"
            >
              Get Tickets
            </MagneticButton>
            <MagneticButton
              href="#lineup"
              className="w-full sm:w-auto min-h-[48px] flex items-center justify-center px-8 sm:px-12 py-3.5 sm:py-4 rounded-full font-display font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-sm bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300"
            >
              See Lineup
            </MagneticButton>
            {/* Scroll indicator – inline with buttons, desktop only */}
            <div className="scroll-indicator hidden md:flex flex-col items-center gap-2 ml-2">
              <div className="scroll-mouse w-7 h-11 rounded-full border-2 border-white/40 flex justify-center pt-2.5 shadow-[0_0_20px_rgba(239,110,58,0.15)]">
                <div className="scroll-dot w-1.5 h-2 rounded-full bg-gradient-to-b from-brand-orange to-brand-purple" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-medium">Scroll</span>
            </div>
          </div>
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
              background: 'linear-gradient(to top, rgba(91, 59, 157, 0.6), rgba(239, 110, 58, 0.5))',
            }}
          />
        ))}
      </div>
    </section>
  );
}
