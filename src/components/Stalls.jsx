import { motion } from 'framer-motion';
import { Store, ArrowRight } from 'lucide-react';

const Stalls = () => {
    return (
        <section id="stalls" className="py-24 relative overflow-hidden bg-brand-black">
            {/* Decor */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-12">

                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 text-brand-yellow text-sm font-bold uppercase tracking-widest">
                            <Store size={18} />
                            <span>Vendors & Partners</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                            Apply for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-pink">Stalls</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Showcase your brand at Raag Fest 2026. Whether you're selling food, merchandise, or art, this is your chance to connect with thousands of music lovers. Limited spots available!
                        </p>

                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" /> High footfall area</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" /> Premium setup support</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" /> Brand visibility</li>
                        </ul>

                        <button className="group mt-4 inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-brand-yellow transition-all duration-300">
                            Apply Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="flex-1 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-pink to-brand-yellow blur-2xl opacity-20 transform rotate-6 rounded-2xl" />
                        <div className="relative bg-brand-dark border border-white/10 rounded-2xl p-6 rotate-3 hover:rotate-0 transition-all duration-500">
                            <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                                {/* Placeholder for Stall Image - Using a gradient for now as placeholder */}
                                <div className="w-full h-full bg-[linear-gradient(45deg,#111,#222)] flex items-center justify-center text-gray-500 font-display text-2xl">
                                    VENDOR ZONE
                                </div>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                                <div>
                                    <h4 className="text-white font-bold text-lg">Standard Stall</h4>
                                    <p className="text-gray-500 text-sm">10x10 Space</p>
                                </div>
                                <span className="text-brand-yellow font-bold text-xl">Limited</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stalls;
