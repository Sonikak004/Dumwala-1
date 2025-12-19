import React from 'react';
import Reveal from './Reveal';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-dark">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 select-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-dark z-10"></div>
                {/* Main Hero Image - The "Dish" Pop-up Effect */}
                <div className="absolute inset-0 animate-pop-in [animation-duration:1.5s]">
                    <img
                        src="/images/chicken-bone-biryani.jpg"
                        alt="Premium Dum Biryani"
                        className="w-full h-full object-cover object-center scale-105 animate-slow-pan"
                    />
                </div>
            </div>

            {/* Steam/Aroma VFX Layer */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-white/10 blur-[80px] rounded-full animate-steam [animation-delay:0s]"></div>
                <div className="absolute bottom-10 left-1/2 w-40 h-40 bg-white/10 blur-[100px] rounded-full animate-steam [animation-delay:1.5s]"></div>
                <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-white/10 blur-[80px] rounded-full animate-steam [animation-delay:0.8s]"></div>
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 text-center">
                <div className="animate-fade-in-up [animation-delay:0.5s] opacity-0 fill-mode-forwards">
                    <h2 className="text-secondary uppercase tracking-[0.2em] mb-4 text-sm md:text-base font-semibold drop-shadow-md">
                        Authentic &bull; Aromatic &bull; Royal
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                        The Art of <span className="italic text-primary">Slow.</span><br />
                        The Taste of <span className="italic text-secondary">Royalty.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
                        Experience the legendary taste of Dum Biryani, slow-cooked to perfection with authentic spices and premium basmati rice.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <a
                            href="/order"
                            className="bg-primary hover:bg-orange-700 text-white px-8 py-4 rounded-sm font-semibold uppercase tracking-widest text-sm shadow-lg shadow-orange-900/30 transition-all border border-transparent hover:scale-105 hover:shadow-orange-900/50 inline-block"
                        >
                            Order Online
                        </a>
                        <a
                            href="/menu"
                            className="bg-transparent border border-white/30 text-white hover:text-secondary px-8 py-4 rounded-sm font-semibold uppercase tracking-widest text-sm transition-all backdrop-blur-sm hover:scale-105 hover:border-secondary hover:text-secondary hover:bg-black/20 inline-block"
                        >
                            View Menu
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 animate-bounce cursor-pointer hover:text-primary transition-colors"
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <ChevronDown size={32} />
            </div>
        </section>
    );
};

export default Hero;
