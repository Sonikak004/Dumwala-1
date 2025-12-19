import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { menuData } from '../data/menu';

const categoryLabels = {
    fish: 'Fish Biryani',
    boneless: 'Boneless Chicken',
    chicken65: 'Chicken 65 Special',
    paneer: 'Paneer Specials'
};

const MenuPage = () => {
    const [activeCategory, setActiveCategory] = useState('fish');
    const navigate = useNavigate();

    return (
        <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen">
            <SEO
                title="Menu – Chicken, Mutton & Veg Dum Biryani"
                description="Explore Dumwala’s dum biryani menu featuring chicken, mutton, and veg biryani prepared using traditional dum cooking."
                canonical="/menu"
            />
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Our <span className="text-primary">Menu</span></h1>
                <p className="text-gray-400 max-w-2xl mx-auto">Explore our authentic culinary offerings. Crafted with passion, served with pride.</p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {Object.keys(menuData).map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-3 rounded-sm uppercase tracking-widest text-sm font-bold transition-all border border-white/10 ${activeCategory === cat ? 'bg-primary text-white border-primary' : 'bg-dark-card text-gray-400 hover:bg-white/5 hover:text-white'}`}
                    >
                        {categoryLabels[cat] || cat}
                    </button>
                ))}
            </div>

            {/* Menu List */}
            <div
                key={activeCategory}
                className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up"
            >
                {menuData[activeCategory].map((item) => (
                    <div
                        key={item.id}
                        onClick={() => navigate('/order')}
                        className="group bg-dark-card rounded-lg overflow-hidden border border-white/5 hover:border-primary/50 transition-all cursor-pointer shadow-lg hover:shadow-primary/10 flex flex-col h-full"
                    >
                        <div className="h-48 overflow-hidden relative">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-lg font-serif font-bold text-white leading-tight group-hover:text-primary transition-colors pr-2">{item.name}</h3>
                                <span className="text-primary font-bold">₹{item.price}</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                                {item.description}
                            </p>
                            <span className="text-xs font-bold uppercase tracking-widest text-secondary group-hover:underline mt-auto">Click to Order</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-20 pt-12 border-t border-white/5">
                <button
                    onClick={() => navigate('/order')}
                    className="bg-primary text-white hover:bg-orange-700 px-10 py-4 rounded-sm font-bold uppercase tracking-widest transition-colors shadow-lg shadow-primary/20"
                >
                    Order Online Now
                </button>
            </div>
        </div>
    );
};

export default MenuPage;
