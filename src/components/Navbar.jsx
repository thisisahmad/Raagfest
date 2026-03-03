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
    <nav className="nav-bar fixed top-0 left-0 right-0 z-50 nav-seamless">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20 overflow-visible">
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }} className="flex items-center flex-shrink-0 transition-opacity hover:opacity-90">
          <LogoImg src="logos/raag.png" alt="Raag Fest" className="nav-logo h-12 w-auto md:h-[4.5rem] object-contain object-center" />
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className="nav-link px-4 py-2.5 rounded-full text-white/85 hover:text-white font-medium text-[0.8125rem] tracking-widest uppercase transition-all duration-300"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-label="Open menu"
          className="md:hidden p-3 -m-1 rounded-full text-white/90 hover:text-white active:bg-white/10 transition-colors duration-200 touch-manipulation"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="nav-dropdown md:hidden">
          <ul className="flex flex-col gap-0.5 py-3 px-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button onClick={() => scrollTo(link.id)} className="nav-link-mobile w-full text-left min-h-[48px] py-3.5 px-4 rounded-xl text-white/85 hover:text-white active:bg-white/10 font-medium text-sm tracking-wider uppercase transition-colors duration-200 touch-manipulation">
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
