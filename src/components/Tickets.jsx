import { motion } from 'framer-motion';

const Tickets = () => {
    const tickets = [
        { type: "General Admission", price: "₨ 3,000", benefits: ["Access to Main Arena", "Food Court Access", "Standard Entry"], color: "border-white" },
        { type: "VIP Pass", price: "₨ 8,000", benefits: ["Front Stage Access", "VIP Lounge", "Fast Track Entry", "Premium Refreshments"], color: "border-brand-blue" },
        { type: "Backstage", price: "₨ 20,000", benefits: ["All VIP Perks", "Meet & Greet", "Backstage Tour", "Signed Merchandise"], color: "border-brand-green" },
    ];

    return (
        <section className="py-20 bg-brand-dark relative">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-16 uppercase">Get <span className="text-brand-blue">Tickets</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tickets.map((ticket, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className={`bg-brand-black/50 backdrop-blur-lg border-2 ${ticket.color} p-8 rounded-2xl flex flex-col items-center text-center relative overflow-hidden`}
                        >
                            <div className={`absolute top-0 w-full h-1 bg-${ticket.color.replace('border-', '')} shadow-[0_0_20px_ currentColor]`} />

                            <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest">{ticket.type}</h3>
                            <div className="text-4xl font-bold mb-8 text-white">{ticket.price}</div>

                            <ul className="mb-8 space-y-4 text-gray-400">
                                {ticket.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center justify-center gap-2">
                                        <span className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-brand-green' : 'bg-gray-500'}`} /> {benefit}
                                    </li>
                                ))}
                            </ul>

                            <button className="mt-auto w-full py-4 bg-white text-black font-bold uppercase hover:bg-brand-green hover:text-black transition-all duration-300">
                                Purchase
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tickets;
