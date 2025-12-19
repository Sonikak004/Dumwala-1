import React from 'react';
import { Flame, Star, UtensilsCrossed } from 'lucide-react';
import Reveal from './Reveal';

const Features = () => {
    const features = [
        {
            icon: <Flame size={40} />,
            title: "Traditional Dum",
            desc: "Cooked slowly in sealed handis to trap natural aromas."
        },
        {
            icon: <Star size={40} />,
            title: "Premium Ingredients",
            desc: "Long-grain Basmati and authentic whole spices."
        },
        {
            icon: <UtensilsCrossed size={40} />,
            title: "Served Fresh",
            desc: "Made fresh for every order, served with love."
        }
    ];

    return (
        <section className="py-20 bg-dark-card text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-serif font-bold text-white mb-12">Why <span className="text-secondary">Dumwala?</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map((f, i) => (
                        <Reveal
                            key={i}
                            delay={i * 200}
                            className="flex flex-col items-center p-6 border border-white/5 rounded-sm hover:border-secondary/20 transition-colors group cursor-default"
                        >
                            <div className="text-primary mb-6 p-4 bg-white/5 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-500">{f.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-3 font-serif">{f.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{f.desc}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
