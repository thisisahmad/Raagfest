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
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen text-white font-sans selection:bg-brand-orange/30 selection:text-white relative">
      <GrainOverlay />
      {/* Liquid gradient background - dark purple & orange (reference-style) */}
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

      <footer className="py-12 bg-black/60 backdrop-blur-md relative z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/40 via-brand-orange/30 to-transparent" />
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center relative">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-display font-bold tracking-tighter text-white/95">
              RAAG <span className="text-brand-orange/90">FEST</span>
              <span className="text-white/50 font-normal text-base ml-1">· The OG Chapter</span>
            </div>
            <p className="text-white/35 text-sm mt-1">© 2026 Raag Fest. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/raagfest.pk" target="_blank" rel="noreferrer" className="text-white/40 hover:text-brand-orange/90 transition-colors text-sm">Instagram</a>
            <a href="#" className="text-white/40 hover:text-brand-orange/90 transition-colors text-sm">Twitter</a>
            <a href="#" className="text-white/40 hover:text-brand-purple-light/80 transition-colors text-sm">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
