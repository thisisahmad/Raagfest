export default function Contact() {
  return (
    <section id="contact" className="relative py-14 md:py-20 overflow-hidden reveal-in" data-scroll-reveal>
      <div className="container mx-auto px-4 relative z-10">
        <p className="section-label text-center mb-4 reveal-in reveal-in-delay-1">Connect</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-center text-white uppercase tracking-wider mb-4 sm:mb-6 reveal-in reveal-in-delay-2">
          Get in touch
        </h2>
        <p className="text-white/50 text-center max-w-xl mx-auto mb-12 tracking-wide reveal-in reveal-in-delay-3">
          For partnerships, press, or general inquiries.
        </p>
        <div className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center reveal-in reveal-in-delay-4">
          <a
            href="https://www.instagram.com/raagfest.pk"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center min-h-[48px] gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl glass-premium border border-white/10 hover:border-brand-orange/40 active:bg-white/5 text-white transition-all duration-300 card-lift touch-manipulation"
          >
            Instagram
          </a>
          <a
            href="mailto:hello@raagfest.pk"
            className="flex items-center justify-center min-h-[48px] gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl glass-premium border border-white/10 hover:border-brand-orange/40 active:bg-white/5 text-white transition-all duration-300 card-lift touch-manipulation"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
