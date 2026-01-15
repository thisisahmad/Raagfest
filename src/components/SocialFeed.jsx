import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

// Using artist images as placeholders for social posts
import img1 from '../assets/artists/hasan_final.png';
import img2 from '../assets/artists/faris_final.png';
import img3 from '../assets/artists/havi_new.jpg';
import img4 from '../assets/artists/mustafa_real.png';
import img5 from '../assets/artists/nehaal_final.png';

const socialPosts = [
    { id: 1, img: img1, link: "https://www.instagram.com/raagfest.pk" },
    { id: 2, img: img2, link: "https://www.instagram.com/raagfest.pk" },
    { id: 3, img: img3, link: "https://www.instagram.com/raagfest.pk" },
    { id: 4, img: img4, link: "https://www.instagram.com/raagfest.pk" },
    { id: 5, img: img5, link: "https://www.instagram.com/raagfest.pk" },
];

const SocialFeed = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const itemsPerPage = 3;
    const maxIndex = Math.max(0, socialPosts.length - itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    // Mobile check (simplified for responsive columns)
    // We'll use CSS grid/flex for responsiveness, but for the carousel logic 
    // we might want a simpler one-by-one on mobile.
    // For now, let's keep it simple: visual carousel using transform.

    return (
        <section className="py-20 bg-brand-black relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-2">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-yellow">
                                #RaagFest26
                            </span>
                        </h2>
                        <p className="text-gray-400">Follow the vibe on Instagram</p>
                    </div>

                    <a
                        href="https://www.instagram.com/raagfest.pk"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden md:flex items-center gap-2 text-brand-yellow hover:text-white transition-colors uppercase font-bold tracking-widest text-sm"
                    >
                        <Instagram size={20} />
                        @raagfest.pk
                    </a>
                </div>

                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full border border-brand-yellow/30 bg-black/50 backdrop-blur-md flex items-center justify-center text-brand-yellow transition-all hover:bg-brand-yellow hover:text-black hover:scale-110 ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={currentIndex === maxIndex}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full border border-brand-yellow/30 bg-black/50 backdrop-blur-md flex items-center justify-center text-brand-yellow transition-all hover:bg-brand-yellow hover:text-black hover:scale-110 ${currentIndex === maxIndex ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Carousel Viewport */}
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-6"
                            animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }} // Rough logic, simpler to do distinct movements
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {/* We need better math for percent based movement or fixed widths. 
                                Let's use a standard grid and animate the container x/transform 
                                based on item width + gap. 
                                A safer bet without detailed math is usually a library, 
                                but we can do a simple translate.
                            */}
                        </motion.div>

                        {/* Re-doing the layout for smoother custom carousel logic without installing swiper */}
                        <div className="flex gap-6 overflow-x-auto md:overflow-hidden pb-8 md:pb-0 scrollbar-hide snap-x snap-mandatory">
                            {socialPosts.map((post, index) => (
                                <motion.a
                                    href={post.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={post.id}
                                    className="min-w-[85vw] md:min-w-[350px] aspect-square relative group overflow-hidden rounded-2xl border border-white/10 snap-center flex-shrink-0"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <img src={post.img} alt="Social Post" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Instagram className="text-brand-yellow w-12 h-12" />
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialFeed;
