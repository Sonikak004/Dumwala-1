import React from 'react';
import { Star } from 'lucide-react';

const Trust = () => {
    return (
        <section className="py-20 bg-zinc-900 border-t border-white/5">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center gap-1 mb-6 text-secondary">
                    {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">"Best Biryani in Town"</h2>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                    Trusted by over 10,000+ happy customers across Bangalore. Rated 4.8/5 on major delivery platforms.
                </p>

                <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Mock Logos - Replace with actual icons if needed */}
                    <span className="text-xl font-bold text-white">Zomato</span>
                    <span className="text-xl font-bold text-white">Swiggy</span>
                    <span className="text-xl font-bold text-white">Google Reviews</span>
                </div>
            </div>
        </section>
    );
};

export default Trust;
