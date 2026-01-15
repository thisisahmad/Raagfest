import { motion } from 'framer-motion';

// Import images
import hasanImg from '../assets/artists/hasan_final.png';
import haviImg from '../assets/artists/havi_final.png';
import nehaalImg from '../assets/artists/nehaal_final.png';
import farisImg from '../assets/artists/faris_final.png';
import afusicImg from '../assets/artists/afusic_real.png';
import mustafaImg from '../assets/artists/mustafa_real.png';

const artists = [
    { name: "Hasan Raheem", img: hasanImg, role: "Headliner" },
    { name: "Faris Shafi", img: farisImg, role: "Rap Icon" },
    { name: "Havi", img: haviImg, role: "Soul" },
    { name: "Mustafa Zahid", img: mustafaImg, role: "Rock" },
    { name: "Nehaal Naseem", img: nehaalImg, role: "Vocalist" },
    { name: "Afusic", img: afusicImg, role: "EDM" },
];

const Lineup = () => {
    return (
        <section className="py-20 bg-brand-black relative">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-5xl md:text-7xl font-bold mb-16 text-center text-white"
                >
                    THE <span className="text-brand-yellow">LINEUP</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {artists.map((artist, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-xl h-96 cursor-pointer border border-white/10 hover:border-brand-pink transition-colors"
                        >
                            <img
                                src={artist.img}
                                alt={artist.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-3xl font-bold text-white group-hover:text-brand-yellow transition-colors text-shadow">
                                    {artist.name}
                                </h3>
                                <p className="text-brand-pink uppercase tracking-wider text-sm mt-1 font-bold">
                                    {artist.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Lineup;
