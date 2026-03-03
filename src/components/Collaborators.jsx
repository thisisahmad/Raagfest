import LogoImg from './LogoImg';

const collaborators = [
  { name: 'Raag Fest', logo: 'logos/raag.png' },
  { name: 'OG Fest', logo: 'logos/og.png' },
  { name: 'Execution by 3DM', logo: 'logos/3dm.png' },
  { name: 'Pop-up Market by Social Bazaar', logo: 'logos/social.png' },
];

export default function Collaborators() {
  return (
    <section id="collaborators" className="relative py-14 md:py-20 overflow-hidden reveal-in" data-scroll-reveal>
      <div className="container mx-auto px-4 relative z-10">
        <p className="section-label text-center mb-4 reveal-in reveal-in-delay-1">Partners</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-center text-white uppercase tracking-wider mb-4 sm:mb-6 reveal-in reveal-in-delay-2">
          In collaboration with
        </h2>
        <p className="text-white/50 text-center max-w-xl mx-auto mb-16 tracking-wide reveal-in reveal-in-delay-3">
          Raag Fest – The OG Chapter is brought to you with our partners.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-12 items-center justify-items-center max-w-5xl mx-auto">
          {collaborators.map(({ name, logo }, i) => (
            <div
              key={name}
              className="collab-card float-slow flex flex-col items-center gap-3 sm:gap-5 p-5 sm:p-6 md:p-8 rounded-2xl premium-border w-full max-w-[220px] reveal-in"
              style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
            >
              <div className="h-16 sm:h-20 md:h-28 w-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <LogoImg
                  src={logo}
                  alt={name}
                  className="max-h-full max-w-full w-auto object-contain"
                />
              </div>
              <span className="text-white/80 text-sm font-medium text-center leading-tight">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
