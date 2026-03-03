const contacts = [
  { name: 'Mehak', phone: '03044440494' },
  { name: 'Fatima', phone: '03028491400' },
  { name: 'Maarij', phone: '+923074828900' },
  { name: 'Adil', phone: '+923084263957' },
];

function PhoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function formatDisplay(phone) {
  if (phone.startsWith('+92')) return `+92 ${phone.slice(3, 6)} ${phone.slice(6)}`;
  return `${phone.slice(0, 4)} ${phone.slice(4, 7)} ${phone.slice(7)}`;
}

export default function Stalls() {
  return (
    <section id="stalls" className="relative py-14 md:py-20 overflow-hidden reveal-in" data-scroll-reveal>
      <div className="container mx-auto px-4 relative z-10">
        <p className="section-label text-center mb-4 reveal-in reveal-in-delay-1">At the fest</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-center text-white uppercase tracking-wider mb-4 sm:mb-6 reveal-in reveal-in-delay-2">
          Pop-up Market
        </h2>
        <p className="text-white/50 text-center max-w-xl mx-auto mb-8 sm:mb-12 tracking-wide text-sm sm:text-base reveal-in reveal-in-delay-3">
          Pop-up Market by Social Bazaar — food, merch, and more at the fest.
        </p>

        <div className="max-w-2xl mx-auto glass-premium rounded-2xl p-6 sm:p-8 md:p-10 text-center card-lift reveal-in reveal-in-delay-4">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" />
          <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase tracking-wider mb-2">
            Book Your Stall
          </h3>
          <p className="text-white/50 text-sm mb-6 sm:mb-8 tracking-wide">
            Want to set up shop at Raag Fest? Contact us to reserve your spot.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {contacts.map((c) => (
              <a
                key={c.phone}
                href={`tel:${c.phone}`}
                className="group flex items-center gap-3 sm:gap-4 px-5 py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-brand-purple/40 hover:bg-white/[0.07] transition-all duration-300"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-purple/20 text-brand-purple-light group-hover:bg-brand-purple/30 transition-colors duration-300 shrink-0">
                  <PhoneIcon className="w-4 h-4" />
                </span>
                <div className="text-left min-w-0">
                  <p className="text-white font-medium text-sm truncate">{c.name}</p>
                  <p className="text-white/50 text-xs sm:text-sm tracking-wider font-mono">{formatDisplay(c.phone)}</p>
                </div>
                <svg className="w-4 h-4 text-white/20 group-hover:text-brand-purple-light ml-auto shrink-0 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
