import SectionDivider from './SectionDivider';
import { NoteIcon } from './MusicNotes';

export default function Tickets() {
  return (
    <section id="tickets" className="relative py-24 md:py-32 overflow-hidden reveal-in" data-scroll-reveal>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" />
      <div className="absolute inset-0 section-glow pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <p className="section-label text-center mb-4 reveal-in reveal-in-delay-1">Get in</p>
        <div className="flex items-center justify-center gap-3 mb-6 reveal-in reveal-in-delay-2">
          <NoteIcon className="w-6 h-6 text-brand-orange/50 shrink-0" />
          <h2 className="font-display font-bold text-4xl md:text-6xl text-center text-white uppercase tracking-wider">
            Get Your Tickets
          </h2>
        </div>
        <p className="text-white/50 text-center max-w-xl mx-auto mb-14 tracking-wide reveal-in reveal-in-delay-3">
          Raag Fest – The OG Chapter · 4th & 5th April
        </p>
        <div className="max-w-lg mx-auto reveal-in reveal-in-delay-4">
          <div className="relative rounded-2xl overflow-hidden glass-premium p-8 md:p-10 text-center card-lift">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/50 via-brand-purple/50 to-transparent" />
            <p className="text-white/80 mb-6">
              Tickets and venue details will be available soon. Follow us for the drop.
            </p>
            <a
              href="https://www.instagram.com/raagfest.pk"
              target="_blank"
              rel="noreferrer"
              className="btn-ticket-glow inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-display font-semibold uppercase tracking-wider bg-gradient-to-r from-brand-orange to-brand-purple text-white border border-white/20"
            >
              Follow for updates
            </a>
          </div>
        </div>
        <SectionDivider />
      </div>
    </section>
  );
}
