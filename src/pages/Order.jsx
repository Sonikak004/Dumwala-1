import React, { useState } from 'react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { ExternalLink, Bike, Minus, Plus, MessageCircle } from 'lucide-react';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { menuData } from '../data/menu';

const categoryLabels = {
    fish: 'Fish Biryani',
    boneless: 'Boneless Chicken',
    chicken65: 'Chicken 65 Special',
    paneer: 'Paneer Specials'
};

const OrderPage = () => {
    // Collect all items to initial quantities state
    const allItems = Object.values(menuData).flat();
    const [quantities, setQuantities] = useState(
        allItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
    );
    const [location, setLocation] = useState('');

    const handleQtyChange = (id, delta) => {
        setQuantities(prev => ({
            ...prev,
            [id]: Math.max(1, (prev[id] || 1) + delta)
        }));
    };

    return (
        <div className="pt-20 min-h-screen bg-dark">
            <SEO
                title="Order Dumwala Online - WhatsApp Ordering"
                description="Order authentic Hyderabadi Dum Biryani online via WhatsApp. Quick & Easy."
                canonical="/order"
            />

            <div className="container mx-auto px-4 py-20">
                <Reveal>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Order <span className="text-primary">Dumwala Online</span>
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                            Select your favorites and order directly on WhatsApp for instant confirmation.
                        </p>
                    </div>
                </Reveal>

                {/* Delivery Location Input */}
                <div className="max-w-xl mx-auto mb-16">
                    <label className="block text-secondary text-sm font-bold uppercase tracking-widest mb-3">Delivery Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Whitefield, Bangalore"
                        className="w-full bg-dark-card border border-white/20 rounded-sm px-6 py-4 text-white focus:border-primary focus:outline-none transition-colors text-lg"
                    />
                </div>

                {/* Menu Sections */}
                {Object.keys(menuData).map((category, catIndex) => (
                    <div key={category} className="mb-20">
                        <Reveal>
                            <h3 className="text-2xl font-serif font-bold text-white mb-8 border-l-4 border-primary pl-4">
                                {categoryLabels[category]}
                            </h3>
                        </Reveal>
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {menuData[category].map((item, index) => (
                                <Reveal key={item.id} delay={index * 50} className="bg-dark-card rounded-lg overflow-hidden border border-white/5 hover:border-primary/30 transition-all shadow-xl flex flex-col group">
                                    <div className="h-48 overflow-hidden relative">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute top-2 right-2 bg-black/80 px-2 py-1 rounded text-xs font-bold text-white shadow">₹{item.price}</div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-lg font-serif font-bold text-white mb-2 leading-tight">{item.name}</h3>
                                        <p className="text-gray-400 text-sm mb-6 flex-1">{item.description}</p>

                                        <div className="mt-auto space-y-4">
                                            <div className="flex items-center justify-between bg-black/30 rounded-sm p-2">
                                                <button
                                                    onClick={() => handleQtyChange(item.id, -1)}
                                                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-sm transition-colors"
                                                >
                                                    <Minus size={16} />
                                                </button>
                                                <span className="text-white font-bold">{quantities[item.id]}</span>
                                                <button
                                                    onClick={() => handleQtyChange(item.id, 1)}
                                                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-sm transition-colors"
                                                >
                                                    <Plus size={16} />
                                                </button>
                                            </div>

                                            <a
                                                href={generateWhatsAppLink(item.name, quantities[item.id], location)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full bg-primary hover:bg-orange-700 text-white py-3 rounded-sm font-bold uppercase tracking-widest text-sm transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/20"
                                            >
                                                Order on WhatsApp <MessageCircle size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Third Party Partners */}
                <div className="border-t border-white/5 pt-16">
                    <h3 className="text-center text-white text-xl font-bold mb-8">Or Order via Our Partners</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a
                            href="https://zomato.onelink.me/xqzv/8uk1pqcm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-600/10 border border-red-600/30 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
                        >
                            Zomato <ExternalLink size={16} />
                        </a>
                        <a
                            href="https://www.swiggy.com/city/bangalore/dumwala-pappya-reddy-layout-btm-rest443363"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-orange-500/10 border border-orange-500/30 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
                        >
                            Swiggy <ExternalLink size={16} />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OrderPage;
