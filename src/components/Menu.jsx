import { ShoppingBag, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { Link } from 'react-router-dom';
import { menuData } from '../data/menu';

// Feature first item from 3 categories
const featuredProducts = [
    menuData.fish[2], // Fish Hyd
    menuData.boneless[1], // Boneless Hyd
    menuData.chicken65[0] // Chicken 65 Hyd
];

const Menu = ({ title = "Our Signature Menu" }) => {
    return (
        <section id="menu" className="py-24 bg-dark relative">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h3 className="text-secondary text-sm font-bold uppercase tracking-widest mb-3">Culinary Masterpieces</h3>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                        {title.split(' ').map((word, i) => i === title.split(' ').length - 1 ? <span key={i} className="text-primary">{word}</span> : word + ' ')}
                    </h2>
                    <div className="w-24 h-1 bg-secondary mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredProducts.map((item, index) => (
                        <Reveal
                            key={item.id}
                            delay={index * 200}
                            className="group bg-dark-card rounded-lg overflow-hidden border border-white/5 hover:border-secondary/30 transition-all duration-300 shadow-xl"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-secondary text-xs font-bold px-3 py-1 rounded-full border border-secondary/20 uppercase tracking-wider">
                                    Bestseller
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                                    <Link
                                        to="/order"
                                        className="bg-white text-dark font-bold px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-secondary hover:text-white"
                                    >
                                        <ShoppingBag size={18} /> Order Now
                                    </Link>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-serif font-bold text-white leading-tight group-hover:text-primary transition-colors">{item.name}</h3>
                                    <span className="text-xl font-bold text-secondary">₹{item.price}</span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 border-b border-white/10 pb-6">
                                    {item.description}
                                </p>
                                <div className="flex justify-between items-center text-xs text-gray-500 uppercase tracking-wider">
                                    <span>Serve 1-2</span>
                                    <span>45 mins prep</span>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link to="/menu" className="inline-block border border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 rounded-sm uppercase tracking-widest font-semibold transition-colors">
                        View Full Menu
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Menu;
