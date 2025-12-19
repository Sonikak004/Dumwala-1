import React from 'react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { ChefHat, Flame, Utensils, Award } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-20 min-h-screen bg-dark">
            <SEO
                title="About Dumwala - The Soul of Authentic Dum Biryani"
                description="Discover the royal heritage of Dumwala. We preserve the ancient art of Dum Pukht cooking to serve the most authentic Hyderabadi Biryani."
                canonical="/about"
            />

            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=2535&auto=format&fit=crop"
                    alt="Spices and cooking preparations"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 text-center px-4">
                    <Reveal>
                        <h3 className="text-secondary text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-4">Our Philosophy</h3>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
                            The Soul of <span className="text-primary italic">Dum.</span>
                        </h1>
                        <p className="text-gray-200 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                            Preserving the royal tradition of slow cooking, one handi at a time.
                        </p>
                    </Reveal>
                </div>
            </div>

            {/* Brand Story */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <Reveal>
                        <h2 className="text-4xl font-serif font-bold text-white mb-8">
                            Inspired by the <br /><span className="text-secondary">Royal Kitchens</span>
                        </h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                <span className="text-primary font-bold text-xl block mb-2">Dumwala</span> is not just a brand; it is a tribute to the culinary masterpiece that is Hyderabadi Dum Biryani.
                            </p>
                            <p>
                                Legend has it that the Nizams of Hyderabad were connoisseurs of art and food. Their kitchens were laboratories of flavor, where the technique of <strong>'Dum Pukht'</strong> (slow cooking in sealed vessels) was perfected.
                            </p>
                            <p>
                                We started Dumwala with a singular obsession: to recreate that exact same magic. No shortcuts, no compromises. Just pure, unadulterated taste that transports you to the royal era.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={200}>
                        <div className="relative rounded-lg overflow-hidden border border-white/5 shadow-2xl">
                            <div className="absolute inset-0 border-4 border-secondary/20 m-4 z-10 pointer-events-none"></div>
                            <img
                                src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2574&auto=format&fit=crop"
                                alt="Authentic Dum Biryani pot"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* The Dum Philosophy Grid */}
            <section className="py-24 bg-dark-card border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">The <span className="text-primary">Dumwala</span> Standard</h2>
                        <p className="text-gray-400">What makes our biryani truly special.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <Reveal delay={0} className="text-center p-8 border border-white/5 hover:border-primary/30 rounded-lg transition-colors group">
                            <div className="w-20 h-20 mx-auto bg-black rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <Flame size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Dum Pukht Technique</h3>
                            <p className="text-gray-400 leading-relaxed">
                                We cook our biryani in sealed heavy-bottomed handis over a slow flame, allowing the meat to cook in its own juices and absorb the aroma of spices.
                            </p>
                        </Reveal>

                        <Reveal delay={200} className="text-center p-8 border border-white/5 hover:border-primary/30 rounded-lg transition-colors group">
                            <div className="w-20 h-20 mx-auto bg-black rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <Award size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Premium Ingredients</h3>
                            <p className="text-gray-400 leading-relaxed">
                                From the finest long-grain Basmati rice to pure saffron and hand-ground spices, we source only the best ingredients for our kitchen.
                            </p>
                        </Reveal>

                        <Reveal delay={400} className="text-center p-8 border border-white/5 hover:border-primary/30 rounded-lg transition-colors group">
                            <div className="w-20 h-20 mx-auto bg-black rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <ChefHat size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Master Chefs</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Our chefs are masters of their craft, with decades of experience in Mughlai and Hyderabadi cuisine, ensuring consistency in every grain.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center">
                <Reveal>
                    <h2 className="text-4xl font-serif font-bold text-white mb-8">Ready to taste the royalty?</h2>
                    <a href="/order" className="inline-block bg-primary hover:bg-orange-700 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest transition-colors shadow-lg hover:shadow-primary/30">
                        Order Now
                    </a>
                </Reveal>
            </section>

        </div>
    );
};

export default About;
