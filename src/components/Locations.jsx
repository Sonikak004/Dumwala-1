import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const locations = [
    {
        area: 'Indiranagar',
        address: '12th Main, Halo Colony, Indiranagar, Bangalore',
        phone: '+91 98765 43210',
        timings: '11:00 AM - 11:00 PM'
    },
    {
        area: 'Koramangala',
        address: '5th Block, Near Empire Main Road, Bangalore',
        phone: '+91 98765 12345',
        timings: '11:00 AM - 01:00 AM'
    },
    {
        area: 'Whitefield',
        address: 'Phoenix Market City, Whitefield Main Road, Bangalore',
        phone: '+91 98765 67890',
        timings: '11:00 AM - 11:00 PM'
    }
];

const Locations = () => {
    return (
        <section id="locations" className="py-24 bg-dark-card border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h3 className="text-secondary text-sm font-bold uppercase tracking-widest mb-3">Visit Us</h3>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Our Royal <span className="text-primary">Kitchens</span></h2>
                    <div className="w-24 h-1 bg-secondary mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {locations.map((loc) => (
                        <div key={loc.area} className="bg-dark p-8 rounded-sm border border-white/5 hover:border-primary/50 transition-colors group">
                            <h3 className="text-2xl font-serif font-bold text-white mb-6 group-hover:text-primary transition-colors">{loc.area}</h3>

                            <div className="space-y-4 text-gray-400">
                                <div className="flex items-start gap-3">
                                    <MapPin className="text-secondary shrink-0 mt-1" size={18} />
                                    <p className="text-sm leading-relaxed">{loc.address}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="text-secondary shrink-0" size={18} />
                                    <p className="text-sm">{loc.phone}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="text-secondary shrink-0" size={18} />
                                    <p className="text-sm">{loc.timings}</p>
                                </div>
                            </div>

                            <button className="mt-8 w-full border border-white/20 text-white py-3 rounded-sm uppercase text-xs font-bold tracking-widest hover:bg-white hover:text-dark transition-all">
                                Get Directions
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Locations;
