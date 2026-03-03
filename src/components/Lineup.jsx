import { publicUrl } from '../utils/assets';
import { NoteIcon } from './MusicNotes';

const day1 = [
  { name: 'Faris Shafi', image: 'artists/faris-shafi.jpg' },
  { name: 'Havi (Abdur Rahman Sajid)', image: 'artists/havi.jpg' },
  { name: 'Mooroo (Taimoor Salahudin)', image: 'artists/mooroo.jpg' },
  { name: 'Nehaal Naseem', image: 'artists/nehaal.jpg' },
  { name: 'Ahsan Asif Mughal', image: 'artists/ahsan-asif.jpg' },
];

const day2 = [
  { name: 'Young Stunners (YS)', image: 'artists/ys.jpg' },
  { name: 'Farhan Saeed', image: 'artists/farhan-saeed.jpg' },
  { name: 'Murtaza Qizilbash', image: 'artists/murtaza.jpg' },
  { name: 'Zoha Waseem', image: 'artists/zoha-waseem.jpg' },
  { name: 'Sheheryar Rehan', image: 'artists/shehreyar.jpg' },
];

function ArtistCard({ name, image }) {
  return (
    <div className="group artist-card card-lift rounded-2xl overflow-hidden">
      <div className="relative aspect-[3/4] bg-brand-dark overflow-hidden">
        <img
          src={publicUrl(image)}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/400x533/12100e/ffffff?text=${encodeURIComponent(name.split(' ')[0])}`;
          }}
        />
        {/* Gradient overlay - concert poster style */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        {/* Stage light on hover */}
        <div className="stage-light-overlay absolute inset-0" />
        {/* Live badge */}
        <span className="absolute top-4 right-4 px-2.5 py-1 rounded-md text-[10px] font-display font-bold uppercase tracking-wider bg-gradient-to-r from-brand-orange to-brand-purple text-white border border-white/20 shadow-lg">
          Live
        </span>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-display font-bold text-xl md:text-2xl text-white uppercase tracking-wider drop-shadow-lg">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
}

function DaySection({ date, day, artists, accent = 'orange' }) {
  const borderClass = accent === 'orange' ? 'border-brand-orange/50' : 'border-brand-purple/50';
  const textClass = accent === 'orange' ? 'text-brand-orange' : 'text-brand-purple-light';
  return (
    <div className="mb-14 sm:mb-20 md:mb-28">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-10">
        <span className={`px-5 py-2.5 rounded-full bg-black/60 border ${borderClass} ${textClass} font-display font-bold uppercase text-sm tracking-[0.25em]`}>
          {date}
        </span>
        <span className="text-white/50 font-display text-lg tracking-[0.2em]">{day}</span>
        <div className="flex-1 h-px max-w-[140px] bg-gradient-to-r from-brand-orange/60 to-transparent" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5 md:gap-8">
        {artists.map((artist) => (
          <ArtistCard key={artist.name} name={artist.name} image={artist.image} />
        ))}
      </div>
    </div>
  );
}

export default function Lineup() {
  return (
    <section id="lineup" className="relative py-14 md:py-20 overflow-hidden reveal-in" data-scroll-reveal>
      <div className="container mx-auto px-4 relative z-10">
        <p className="section-label text-center mb-4 reveal-in reveal-in-delay-1">Live performances</p>
        <div className="flex items-center justify-center gap-4 mb-4 reveal-in reveal-in-delay-2">
          <NoteIcon className="w-6 h-6 text-brand-orange/60" />
          <h2 className="font-festival font-normal text-4xl sm:text-5xl md:text-7xl text-center text-white uppercase tracking-wider">
            Lineup
          </h2>
          <NoteIcon className="w-6 h-6 text-brand-purple-light/60" />
        </div>
        <div className="w-32 h-0.5 mx-auto mb-8 rounded-full bg-gradient-to-r from-transparent via-brand-purple/70 to-transparent reveal-in reveal-in-delay-3" />
        <p className="text-white/50 text-center max-w-2xl mx-auto mb-12 sm:mb-20 tracking-wide text-base sm:text-lg reveal-in reveal-in-delay-3">
          Two nights of premium performances. Catch your favorites on stage.
        </p>
        <div className="reveal-in reveal-in-delay-4">
          <DaySection date="4th April" day="Friday" artists={day1} accent="orange" />
        </div>
        <div className="reveal-in reveal-in-delay-5">
          <DaySection date="5th April" day="Sunday" artists={day2} accent="purple" />
        </div>
      </div>
    </section>
  );
}
