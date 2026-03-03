import SoundBars from './SoundBars';
import MusicNotes from './MusicNotes';

export default function Experience() {
  return (
    <section id="experience" className="relative py-14 md:py-20 overflow-hidden reveal-in" data-scroll-reveal>
      <MusicNotes count={3} className="opacity-60" />
      <div className="container mx-auto px-4 relative z-10">
        <p className="section-label text-center mb-4 reveal-in reveal-in-delay-1">The Experience</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl text-center text-white/95 uppercase tracking-wider mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight reveal-in reveal-in-delay-2">
          Two nights. One stage. Unforgettable.
        </h2>
        <p className="text-white/50 text-center max-w-2xl mx-auto mb-8 sm:mb-12 tracking-wide text-base sm:text-lg reveal-in reveal-in-delay-3">
          Live performances, premium production, and the best of Pakistani music. Raag Fest – The OG Chapter brings together headliners and rising stars for a festival experience you won’t forget.
        </p>
        <div className="flex justify-center mb-10 reveal-in reveal-in-delay-4">
          <SoundBars count={14} className="h-10 opacity-60" />
        </div>
      </div>
    </section>
  );
}
