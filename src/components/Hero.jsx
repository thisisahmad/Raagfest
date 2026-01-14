import { motion } from 'framer-motion';
import logoImg from '../assets/logo.jpg';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black">
            {/* Dynamic Background */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute top-0 -left-1/4 w-[50vw] h-[50vw] bg-brand-blue/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-fast" />
                <div className="absolute bottom-0 -right-1/4 w-[50vw] h-[50vw] bg-brand-green/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-fast" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="order-2 md:order-1 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-sm font-semibold tracking-widest uppercase backdrop-blur-md">
                            Pakistan's Biggest Music Festival
                        </span>
                        <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight mb-6">
                            EXPERIENCE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue bg-300% animate-gradient">
                                THE VIBE
                            </span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
                            Join us for an unforgettable night of rhythm, beats, and soul. Featuring the biggest names in the industry.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-brand-green text-black font-bold uppercase rounded-lg shadow-[0_0_20px_rgba(1,250,134,0.3)] hover:shadow-[0_0_30px_rgba(1,250,134,0.5)] transition-all"
                            >
                                Get Tickets
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase rounded-lg hover:bg-white/5 transition-all"
                            >
                                View Lineup
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Visual Content */}
                <div className="order-1 md:order-2 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "customWeird" }}
                        className="relative"
                    >
                        {/* Glowing ring behind logo */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-green blur-[60px] opacity-60 rounded-full animate-pulse-slow my-auto" />

                        <img
                            src={logoImg}
                            alt="Raag Fest Official Logo"
                            className="relative w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border border-white/10 shadow-2xl z-10"
                        />

                        {/* Decorative Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 w-20 h-20 bg-brand-blue rounded-full blur-xl opacity-50"
                        />
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-green rounded-full blur-xl opacity-40"
                        />
                    </motion.div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <span className="text-xs uppercase tracking-widest mb-2 block text-center">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-brand-green to-transparent mx-auto" />
            </motion.div>
        </section>
    );
};

export default Hero;
