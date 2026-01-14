import { motion } from 'framer-motion';
import { Handshake, Star, TrendingUp } from 'lucide-react';

const Sponsors = () => {
    return (
        <section id="sponsors" className="py-24 bg-brand-black relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-brand-pink text-sm font-bold uppercase tracking-widest mb-2 block">Partnership Opportunities</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase">Become a <span className="text-brand-yellow">Sponsor</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Card 1 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-yellow/30 transition-all group"
                    >
                        <div className="w-14 h-14 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-yellow group-hover:text-black transition-colors text-brand-yellow">
                            <Star size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Brand Visibility</h3>
                        <p className="text-gray-400">Get your logo in front of 20,000+ attendees. Dominant presence on all marketing materials and stage screens.</p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-pink/30 transition-all group"
                    >
                        <div className="w-14 h-14 bg-brand-pink/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-pink group-hover:text-white transition-colors text-brand-pink">
                            <Handshake size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Networking</h3>
                        <p className="text-gray-400">Exclusive access to the VIP lounge. Connect with other industry leaders, artists, and influencers.</p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-yellow/30 transition-all group"
                    >
                        <div className="w-14 h-14 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-yellow group-hover:text-black transition-colors text-brand-yellow">
                            <TrendingUp size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Engagement</h3>
                        <p className="text-gray-400">Interactive activations on-ground. Engage directly with your target audience through custom stalls.</p>
                    </motion.div>
                </div>

                <div className="bg-gradient-to-r from-brand-pink/20 to-brand-yellow/20 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                    <h3 className="text-3xl font-bold text-white mb-6 relative z-10">Ready to Partner With Us?</h3>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-8 relative z-10">Download our sponsorship deck to view packages and pricing.</p>
                    <button className="px-8 py-3 border border-white text-white font-bold uppercase rounded-lg hover:bg-white hover:text-black transition-colors relative z-10">
                        Download Deck
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
