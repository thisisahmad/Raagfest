import { useState } from 'react';
import LogoImg from './LogoImg';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'lineup', label: 'Lineup' },
  { id: 'tickets', label: 'Tickets' },
  { id: 'collaborators', label: 'Collaborators' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10 shadow-card-glow">
      <div className="container mx-auto px-4 flex items-center justify-between h-14 md:h-20">
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }} className="flex items-center gap-2 flex-shrink-0">
          <LogoImg src="logos/raag.png" alt="Raag Fest" className="h-10 md:h-14 w-auto max-h-[3.5rem] md:max-h-[4rem] object-contain" />
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className="nav-link text-white/90 hover:text-brand-orange font-medium transition-colors uppercase tracking-wider text-sm"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-label="Menu"
          className="md:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden glass border-t border-white/5 py-4 px-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button onClick={() => scrollTo(link.id)} className="nav-link block w-full text-left py-2 text-white/90 hover:text-brand-orange uppercase tracking-wider">
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
