import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center mb-6">
                    <img src="/logo.png" alt="Dumwala Logo" className="h-12 w-auto" />
                </div>
                <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm leading-relaxed">
                    Experience the taste of royalty with Dumwala. We serve the <strong>best authentic dum biryani</strong>, slow-cooked in the traditional Hyderabadi style. Our commitment to quality ingredients and patience in cooking brings you the true aroma of India.
                </p>

                <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm uppercase tracking-widest font-semibold text-gray-400">
                    <a href="/" className="hover:text-white transition-colors">Home</a>
                    <a href="/menu" className="hover:text-white transition-colors">Menu</a>
                    <a href="/order" className="hover:text-white transition-colors">Order</a>
                    <a href="/franchise" className="hover:text-white transition-colors">Franchise</a>
                    <a href="/contact" className="hover:text-white transition-colors">Contact</a>
                </div>

                <div className="flex justify-center space-x-6 mb-8">
                    <a href="#" className="hover:text-primary transition-colors"><Instagram /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Facebook /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Twitter /></a>
                </div>

                <div className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Dumwala. All rights reserved.
                    <p className="mt-2 text-xs text-gray-600 italic">Images are for visual representation only. Actual product may vary.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
