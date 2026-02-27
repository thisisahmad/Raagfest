export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden reveal-in" data-scroll-reveal>
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 pointer-events-none" />
      <div className="absolute inset-0 section-glow pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <p className="section-label text-center mb-4 reveal-in reveal-in-delay-1">Connect</p>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-center text-white uppercase tracking-wider mb-6 reveal-in reveal-in-delay-2">
          Get in touch
        </h2>
        <p className="text-white/50 text-center max-w-xl mx-auto mb-12 tracking-wide reveal-in reveal-in-delay-3">
          For partnerships, press, or general inquiries.
        </p>
        <div className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4 justify-center reveal-in reveal-in-delay-4">
          <a
            href="https://www.instagram.com/raagfest.pk"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-premium border border-white/10 hover:border-brand-orange/40 text-white transition-all duration-300 card-lift"
          >
            Instagram
          </a>
          <a
            href="mailto:hello@raagfest.pk"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-premium border border-white/10 hover:border-brand-orange/40 text-white transition-all duration-300 card-lift"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
