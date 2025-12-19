import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainEntity": {
            "@type": "Organization",
            "name": "Dumwala",
            "telephone": "+91 79962 84868",
            "email": "customercare@dumwala.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pappya Reddy Layout, BTM Layout",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "postalCode": "560068",
                "addressCountry": "IN"
            }
        }
    };

    return (
        <div className="min-h-screen bg-dark text-white pt-24 pb-20">
            <SEO
                title="Contact Us - Dumwala"
                description="Get in touch with Dumwala for orders, queries, or franchise opportunities. Call, email, or visit us in Bangalore."
                canonical="https://dumwala.com/contact"
                schema={JSON.stringify(contactSchema)}
            />

            {/* Header */}
            <div className="container mx-auto px-4 mb-16 text-center">
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 animate-fade-in-up">
                    Contact <span className="text-primary">Us</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto rounded-full"></div>
                <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
                    Have a question or want to place a bulk order? We're here to help.
                </p>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Contact Information Card */}
                    <div className="bg-dark-card border border-white/5 p-8 md:p-12 rounded-sm relative overflow-hidden group hover:border-primary/30 transition-colors duration-500">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <h2 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
                            <span className="w-8 h-1 bg-secondary rounded-full"></span>
                            Get in Touch
                        </h2>

                        <div className="space-y-8">
                            {/* WhatsApp - Primary Action */}
                            <a
                                href="https://wa.me/917996284868?text=Hello%20Dumwala!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group/item"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-green-600/10 rounded-full text-green-500 group-hover/item:bg-green-600 group-hover/item:text-white transition-colors">
                                        <MessageCircle size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1 group-hover/item:text-green-500 transition-colors">WhatsApp Us</h3>
                                        <p className="text-gray-400 text-sm mb-2">Instant response for orders & queries</p>
                                        <span className="text-green-500 font-bold uppercase text-xs tracking-widest border-b border-green-500/30 pb-0.5">Start Chat</span>
                                    </div>
                                </div>
                            </a>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Call Us</h3>
                                    <p className="text-gray-400 text-sm">+91 79962 84868</p>
                                    <p className="text-gray-500 text-xs mt-1">Mon-Sun, 11:00 AM - 11:00 PM</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Email Us</h3>
                                    <p className="text-gray-400 text-sm">customercare@dumwala.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visit Us / Location Card */}
                    <div className="bg-dark-card border border-white/5 p-8 md:p-12 rounded-sm relative overflow-hidden group hover:border-secondary/30 transition-colors duration-500">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <h2 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
                            <span className="w-8 h-1 bg-primary rounded-full"></span>
                            Visit Us
                        </h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-full text-white">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Kitchen Location</h3>
                                    <address className="text-gray-400 text-sm not-italic leading-relaxed">
                                        Dumwala<br />
                                        Pappya Reddy Layout,<br />
                                        BTM Layout, Bangalore - 560068
                                    </address>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-full text-white">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Opening Hours</h3>
                                    <p className="text-gray-400 text-sm">Everyday</p>
                                    <p className="text-secondary font-bold">11:00 AM - 11:30 PM</p>
                                </div>
                            </div>

                            {/* Embed Map Placeholder or Styled Block */}
                            <div className="mt-8 h-48 w-full bg-white/5 rounded-sm overflow-hidden relative group/map">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <a
                                        href="https://maps.google.com/?q=Dumwala+BTM+Layout"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full backdrop-blur-md text-sm font-bold transition-all transform group-hover/map:scale-105 flex items-center gap-2"
                                    >
                                        <MapPin size={16} /> View on Google Maps
                                    </a>
                                </div>
                                {/* Simple dark pattern background for map placeholder */}
                                <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center mix-blend-overlay"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
