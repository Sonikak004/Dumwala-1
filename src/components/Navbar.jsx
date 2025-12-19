import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    // Navigation Links
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Menu', href: '/menu' },
        { name: 'About', href: '/about' },
        { name: 'Franchise', href: '/franchise' },
        { name: 'Order', href: '/order' },
        { name: 'Contact Us', href: '/contact' },
    ];

    // CSS Logic
    const isHome = location.pathname === '/';
    const isTransparent = isHome && !isScrolled && !isOpen;

    // Base classes
    const navClasses = `fixed w-full z-50 transition-all duration-300 ${isTransparent
        ? 'bg-transparent py-6'
        : 'bg-dark/95 backdrop-blur-md py-4 shadow-xl border-b border-white/5'
        }`;

    // Force solid background when open - BUT ensure transparent header inside
    // Actually for new design, we want the mobile menu to cover everything, so navbar bg doesn't matter as much 
    // BUT to avoid jump, we keep py-4.
    const finalNavClasses = isOpen ? 'fixed w-full z-50 bg-transparent py-4 transition-all duration-300' : navClasses;

    return (
        <nav className={finalNavClasses}>
            <div className={`container mx-auto px-4 md:px-8 flex justify-between items-center z-50 relative transition-colors duration-300 ${isOpen ? 'bg-transparent' : ''}`}>
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src="/logo.png" alt="Dumwala Logo" className="h-12 md:h-14 w-auto" />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={`relative text-sm font-bold uppercase tracking-widest transition-all hover:text-primary ${location.pathname === link.href ? 'text-secondary' : 'text-gray-200'}`}
                        >
                            {link.name}
                            {location.pathname === link.href && (
                                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-secondary"></span>
                            )}
                        </Link>
                    ))}
                    <Link to="/order" className="bg-primary hover:bg-orange-700 text-white px-6 py-2 rounded-sm font-bold transition-colors uppercase text-sm tracking-wider shadow-lg shadow-primary/20 hover:shadow-primary/40">
                        Order Now
                    </Link>
                </div>

                {/* Mobile Toggle Button */}
                <button
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-sm transition-colors relative z-50"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu - Single Block Animation */}
            {/* Using fixed inset-0 to cover ENTIRE screen including navbar area if needed, but z-40 usually sits behind z-50 navbar.
                However, user wants "Menu text appears before background" fixed. This implies single container.
                If z-40 is behind z-50 navbar, the top of the menu is hidden?
                The user wants a "Single container" slide in.
                I will make the menu z-40 and full screen. The navbar container is z-50 so logo/button stay on top.
                The bg-dark is on this z-40 container.
            */}
            <div
                className={`md:hidden fixed inset-0 bg-dark w-full h-screen z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                style={{ top: 0, left: 0 }}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-2xl font-serif font-bold ${location.pathname === link.href ? 'text-primary' : 'text-white hover:text-secondary'} transition-colors`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/order"
                        onClick={() => setIsOpen(false)}
                        className="bg-primary hover:bg-orange-700 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest shadow-lg text-lg mt-4"
                    >
                        Order Now
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
