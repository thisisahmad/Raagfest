import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Lineup from './components/Lineup';
import Tickets from './components/Tickets';
import Stalls from './components/Stalls';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import SocialFeed from './components/SocialFeed';

function App() {
  return (
    <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-green selection:text-black">
      <Navbar />
      <Hero />
      <Lineup />
      <Tickets />
      <Stalls />
      <Sponsors />
      <SocialFeed />
      <Contact />

      <footer className="py-12 bg-black border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-display font-bold tracking-tighter text-white">
              RAAG<span className="text-brand-pink">FEST</span>
            </div>
            <p className="text-gray-500 text-sm mt-1">© 2026 Raag Fest. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/raagfest.pk" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-brand-yellow transition-colors">Instagram</a>
            <a href="#" className="text-gray-500 hover:text-brand-yellow transition-colors">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-brand-yellow transition-colors">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
