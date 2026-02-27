import LogoImg from './LogoImg';

const collaborators = [
  { name: 'Raag Fest', logo: 'logos/raag.png' },
  { name: 'OG Fest', logo: 'logos/og.png' },
  { name: 'Acquired by 3DM', logo: 'logos/3dm.png' },
  { name: 'Pop-up Market by Social Bazaar', logo: 'logos/social.png' },
];

export default function Collaborators() {
  return (
    <section id="collaborators" className="relative py-24 md:py-32 overflow-hidden reveal-in" data-scroll-reveal>
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 pointer-events-none" />
      <div className="absolute inset-0 section-glow pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <p className="section-label text-center mb-4 reveal-in reveal-in-delay-1">Partners</p>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-center text-white uppercase tracking-wider mb-6 reveal-in reveal-in-delay-2">
          In collaboration with
        </h2>
        <p className="text-white/50 text-center max-w-xl mx-auto mb-16 tracking-wide reveal-in reveal-in-delay-3">
          Raag Fest – The OG Chapter is brought to you with our partners.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center max-w-5xl mx-auto">
          {collaborators.map(({ name, logo }, i) => (
            <div
              key={name}
              className="collab-card float-slow flex flex-col items-center gap-5 p-8 rounded-2xl premium-border w-full max-w-[220px] reveal-in"
              style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
            >
              <div className="h-24 md:h-28 w-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
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
