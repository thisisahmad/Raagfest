export default function Stalls() {
  return (
    <section id="stalls" className="relative py-24 md:py-32 overflow-hidden reveal-in" data-scroll-reveal>
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 pointer-events-none" />
      <div className="absolute inset-0 section-glow pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <p className="section-label text-center mb-4 reveal-in reveal-in-delay-1">At the fest</p>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-center text-white uppercase tracking-wider mb-6 reveal-in reveal-in-delay-2">
          Pop-up Market
        </h2>
        <p className="text-white/50 text-center max-w-xl mx-auto mb-12 tracking-wide reveal-in reveal-in-delay-3">
          Pop-up Market by Social Bazaar — food, merch, and more at the fest.
        </p>
        <div className="max-w-2xl mx-auto glass-premium rounded-2xl p-8 md:p-10 text-center card-lift reveal-in reveal-in-delay-4">
          <p className="text-white/70">
            Details about stalls and vendors coming soon. Stay tuned.
          </p>
        </div>
      </div>
    </section>
  );
}
