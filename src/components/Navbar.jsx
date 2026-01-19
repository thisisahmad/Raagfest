import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Store, Handshake, X } from 'lucide-react';
import logoHeader from '../assets/logo_header_raas.png';

const Navbar = () => {
    const [isPartnerOpen, setIsPartnerOpen] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "Lineup", href: "#lineup" },
        { name: "Tickets", href: "#tickets" },
    ];

    const partnerLinks = [
        { name: "Apply for Stalls", icon: Store, href: "#stalls" },
        { name: "Become a Sponsor", icon: Handshake, href: "#sponsors" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
        >
            <div className="max-w-7xl mx-auto backdrop-blur-xl bg-black/60 border border-white/10 rounded-2xl px-6 py-2 flex items-center justify-between shadow-[0_4px_30px_rgba(0,0,0,0.5)]">

                {/* Logo */}
                <a href="#" className="block w-32 md:w-40">
                    <img src={logoHeader} alt="Raag Fest" className="w-full h-auto object-contain drop-shadow-[0_0_10px_rgba(254,5,121,0.5)]" />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-brand-yellow transition-all"
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Dropdown for Partners */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsPartnerOpen(true)}
                        onMouseLeave={() => setIsPartnerOpen(false)}
                    >
                        <button className="flex items-center gap-1 text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-brand-pink transition-all py-2">
                            Partners <ChevronDown size={14} className={`transition-transform duration-300 ${isPartnerOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {isPartnerOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full right-0 mt-2 w-56 bg-brand-dark/90 backdrop-blur-xl border border-brand-pink/30 rounded-xl overflow-hidden shadow-2xl"
                                >
                                    <div className="p-2 flex flex-col gap-1">
                                        {partnerLinks.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-200 hover:bg-white/5 hover:text-brand-yellow rounded-lg transition-colors group"
                                            >
                                                <item.icon size={16} className="text-gray-400 group-hover:text-brand-yellow" />
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <a href="#contact" className="text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-brand-yellow transition-all">
                        Contact
                    </a>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <button className="px-6 py-2 bg-gradient-to-r from-brand-pink to-brand-yellow text-black font-bold uppercase text-sm rounded-lg hover:shadow-[0_0_20px_rgba(250,220,2,0.4)] hover:scale-105 transition-all duration-300">
                        Buy Tickets
                    </button>
                </div>

                {/* Mobile Menu Button (Hamburger) */}
                <div className="md:hidden">
                    <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-white p-2">
                        {isMobileOpen ? <X /> : (
                            <div className="space-y-1.5 cursor-pointer">
                                <div className="w-6 h-0.5 bg-white"></div>
                                <div className="w-6 h-0.5 bg-white"></div>
                                <div className="w-6 h-0.5 bg-white"></div>
                            </div>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 mt-2 px-6 pb-6 md:hidden"
                    >
                        <div className="bg-brand-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-lg font-bold uppercase tracking-widest text-white hover:text-brand-yellow transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="h-[1px] bg-white/10 my-2" />
                            {partnerLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-base font-semibold uppercase tracking-widest text-gray-300 hover:text-brand-pink transition-colors flex items-center gap-2"
                                >
                                    <link.icon size={18} /> {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsMobileOpen(false)}
                                className="text-lg font-bold uppercase tracking-widest text-white hover:text-brand-yellow transition-colors mt-2"
                            >
                                Contact
                            </a>
                            <button className="w-full mt-4 py-3 bg-gradient-to-r from-brand-pink to-brand-yellow text-black font-bold uppercase rounded-lg">
                                Buy Tickets
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
