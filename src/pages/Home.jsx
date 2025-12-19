import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Features from '../components/Features';
import Process from '../components/Process';
import Trust from '../components/Trust';
import { Link } from 'react-router-dom';

const Home = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "Dumwala",
        "image": "https://dumwala.com/logo.png",
        "@id": "https://dumwala.com",
        "url": "https://dumwala.com",
        "telephone": "+917996284868",
        "menu": "https://dumwala.com/menu",
        "servesCuisine": "Indian",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Pappya Reddy Layout, BTM Layout",
            "addressLocality": "Bangalore",
            "addressRegion": "KA",
            "postalCode": "560068",
            "addressCountry": "IN"
        },
        "sameAs": [
            "https://www.instagram.com/dumwala",
            "https://zomato.onelink.me/xqzv/8uk1pqcm",
            "https://www.swiggy.com/city/bangalore/dumwala-pappya-reddy-layout-btm-rest443363"
        ]
    };

    return (
        <>
            <SEO
                title="Authentic Dum Biryani | Order Online & Franchise Opportunities"
                description="Experience authentic slow-cooked dum biryani by Dumwala. Order online via Swiggy & Zomato or explore franchise opportunities."
                canonical="/"
                schema={schema}
            />
            <Hero />

            <Menu title="Signature Biryanis" />

            {/* Third Party Partners */}
            <section className="py-12 bg-dark-card border-y border-white/5">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-secondary uppercase tracking-widest text-xs font-bold mb-6">Order via Partners</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a
                            href="https://zomato.onelink.me/xqzv/8uk1pqcm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-600/10 border border-red-600/30 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
                        >
                            Order on Zomato
                        </a>
                        <a
                            href="https://www.swiggy.com/city/bangalore/dumwala-pappya-reddy-layout-btm-rest443363"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-orange-500/10 border border-orange-500/30 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
                        >
                            Order on Swiggy
                        </a>
                    </div>
                </div>
            </section>

            <Features />

            <Process />

            <Trust />

            {/* Order Online CTA Section */}
            <section className="py-20 bg-primary/10 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Hungry? Royalty awaits.</h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Order now and experience the authentic taste of Dumwala biryani delivered to your doorstep in 60 minutes.
                    </p>
                    <Link to="/order" className="inline-block bg-primary hover:bg-orange-700 text-white px-8 py-4 rounded-sm font-semibold uppercase tracking-widest shadow-lg shadow-orange-900/30 transition-all">
                        Order Online
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
