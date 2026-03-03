import { NoteIcon } from './MusicNotes';
import { publicUrl } from '../utils/assets';

const TICKETWALA_URL = 'https://ticketwala.pk/event/raag-fest-5289';
const BOOKME_URL = 'https://bookme.pk/events/raag-fest-the-og-chapter';

export default function Tickets() {
  return (
    <section id="tickets" className="relative py-14 md:py-20 overflow-hidden reveal-in" data-scroll-reveal>
      <div className="container mx-auto px-4 relative z-10">
        <p className="section-label text-center mb-4 reveal-in reveal-in-delay-1">Get in</p>
        <div className="flex items-center justify-center gap-3 mb-6 reveal-in reveal-in-delay-2">
          <NoteIcon className="w-6 h-6 text-brand-orange/50 shrink-0" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl text-center text-white uppercase tracking-wider">
            Get Your Tickets
          </h2>
        </div>
        <p className="text-white/50 text-center max-w-xl mx-auto mb-14 tracking-wide reveal-in reveal-in-delay-3">
          Raag Fest – The OG Chapter · 4th &amp; 5th April · Defence Raya, Lahore
        </p>

        <div className="max-w-2xl mx-auto reveal-in reveal-in-delay-4">
          <div className="relative rounded-2xl overflow-hidden glass-premium p-6 sm:p-8 md:p-10 text-center card-lift">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/50 via-brand-purple/50 to-transparent" />

            <p className="text-white/70 mb-3 text-sm sm:text-base tracking-wide">
              Grab your tickets now from
            </p>
            <p className="text-white/40 text-xs sm:text-sm mb-8 tracking-wider">
              Standard from Rs 2,800 · VIP &amp; Backstage passes available
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
              <a
                href={TICKETWALA_URL}
                target="_blank"
                rel="noreferrer"
                className="group block w-full sm:w-auto rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 bg-white/[0.04] hover:bg-white/[0.08] shadow-lg hover:shadow-xl hover:scale-[1.04] active:scale-[0.97] transition-all duration-300"
              >
                <img
                  src={publicUrl('logos/tw.jpg')}
                  alt="Buy on Ticketwala"
                  className="h-20 sm:h-28 w-auto mx-auto object-contain px-8 py-4"
                />
              </a>

              <a
                href={BOOKME_URL}
                target="_blank"
                rel="noreferrer"
                className="group block w-full sm:w-auto rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 bg-white/[0.04] hover:bg-white/[0.08] shadow-lg hover:shadow-xl hover:scale-[1.04] active:scale-[0.97] transition-all duration-300"
              >
                <img
                  src={publicUrl('logos/bookme.jpg')}
                  alt="Buy on Bookme"
                  className="h-20 sm:h-28 w-auto mx-auto object-contain px-8 py-4"
                />
              </a>
            </div>

            <p className="text-white/30 text-[11px] mt-6 tracking-wider">
              Both platforms · Same event · Choose your preferred
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
