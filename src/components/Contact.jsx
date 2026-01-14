import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-brand-dark relative border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 uppercase">Contact <span className="text-brand-blue">Us</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Have questions? Want to partner with us? Reach out directly.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-brand-green/50 transition-colors">
                            <Mail className="w-8 h-8 text-brand-green mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                            <p className="text-gray-400">info@raagfest.com</p>
                            <p className="text-gray-400">sponsors@raagfest.com</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-brand-green/50 transition-colors">
                            <Phone className="w-8 h-8 text-brand-blue mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                            <p className="text-gray-400">+92 300 1234567</p>
                            <p className="text-gray-400">+92 321 7654321</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-brand-green/50 transition-colors">
                            <MapPin className="w-8 h-8 text-brand-green mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                            <p className="text-gray-400">Lahore Expo Center, Johar Town</p>
                            <p className="text-gray-400">Lahore, Pakistan</p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-brand-black border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
                        {/* Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-[80px]" />

                        <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Send a Message</h3>

                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors" placeholder="Your Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors" placeholder="hello@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Subject</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors">
                                    <option>General Inquiry</option>
                                    <option>Sponsorship</option>
                                    <option>Ticketing</option>
                                    <option>Stalls</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Message</label>
                                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors" placeholder="Your message here..."></textarea>
                            </div>

                            <button className="w-full py-4 bg-gradient-to-r from-brand-blue to-brand-green text-black font-bold uppercase rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
