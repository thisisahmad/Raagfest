import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Lineup from './components/Lineup';
import Tickets from './components/Tickets';
import Stalls from './components/Stalls';
import Collaborators from './components/Collaborators';
import SocialFeed from './components/SocialFeed';
import Contact from './components/Contact';
import GrainOverlay from './components/GrainOverlay';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import IntroOverlay from './components/IntroOverlay';
import BackToTop from './components/BackToTop';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen text-white font-sans selection:bg-brand-orange/30 selection:text-white relative">
      <IntroOverlay />
      <CursorGlow />
      <ScrollProgress />
      <GrainOverlay />
      {/* Liquid gradient background */}
      <div className="liquid-bg">
        <div className="liquid-blob liquid-blob-1" />
        <div className="liquid-blob liquid-blob-2" />
        <div className="liquid-blob liquid-blob-3" />
        <div className="liquid-blob liquid-blob-4" />
        <div className="liquid-blob liquid-blob-5" />
        <div className="liquid-blob liquid-blob-6" />
      </div>
      <Navbar />
      <Hero />
      <Experience />
      <Lineup />
      <Tickets />
      <Stalls />
      <Collaborators />
      <SocialFeed />
      <Contact />

      <BackToTop />

      <footer className="py-10 sm:py-12 relative z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 relative">
          <div className="text-center md:text-left">
            <div className="text-lg sm:text-xl font-display font-bold tracking-tighter text-white/95">
              RAAG <span className="text-brand-orange/90">FEST</span>
              <span className="text-white/50 font-normal text-sm sm:text-base ml-1">· The OG Chapter</span>
            </div>
            <p className="text-white/35 text-xs sm:text-sm mt-1">© 2026 Raag Fest. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="https://www.instagram.com/raagfest.pk" target="_blank" rel="noreferrer" className="min-h-[44px] flex items-center py-2 text-white/40 hover:text-brand-orange/90 active:text-brand-orange/80 transition-colors text-sm touch-manipulation">Instagram</a>
            <a href="#" className="min-h-[44px] flex items-center py-2 text-white/40 hover:text-brand-orange/90 active:text-brand-orange/80 transition-colors text-sm touch-manipulation">Twitter</a>
            <a href="#" className="min-h-[44px] flex items-center py-2 text-white/40 hover:text-brand-purple-light/80 active:text-brand-purple-light/70 transition-colors text-sm touch-manipulation">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
