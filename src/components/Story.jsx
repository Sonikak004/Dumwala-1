import React from 'react';
import Reveal from './Reveal';

const Story = () => {
    return (
        <section id="story" className="relative bg-dark py-24 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">

                {/* Image Side */}
                <div className="w-full md:w-1/2">
                    <Reveal>
                        <div className="relative">
                            <div className="absolute inset-0 border-2 border-secondary translate-x-4 translate-y-4 z-0 hidden md:block"></div>
                            <img
                                src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2574&auto=format&fit=crop"
                                alt="Chef preparing authentic slow cooked Hyderabadi Dum Biryani in a traditional handi"
                                className="relative z-10 w-full rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </Reveal>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <Reveal delay={200}>
                        <h3 className="text-secondary text-sm font-bold uppercase tracking-widest mb-3">Our Heritage</h3>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">The Legacy of <br /><span className="text-primary italic">Dum</span> Cooking</h2>
                        <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                            At Dumwala, we believe that great things take time. Our biryani is not just food; it is a ritual.
                        </p>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Inspired by the royal kitchens of the Nizams, we cook our biryani on a slow flame in sealed pots (Handis), allowing the ingredients to mature in their own juices. The aroma of saffron, paste of nuts, and whole spices infused in every grain of long-grain basmati rice creates a symphony of flavors that is truly authentic.
                        </p>

                        <button className="text-white border-b border-primary hover:text-primary transition-colors pb-1 uppercase text-sm tracking-widest font-semibold cursor-pointer">
                            Read Our Full Story
                        </button>
                    </Reveal>
                </div>

            </div>
        </section>
    );
};

export default Story;
