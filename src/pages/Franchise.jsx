import React, { useState } from 'react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import {
    Shield,
    ChefHat,
    TrendingUp,
    Clock,
    CheckCircle2,
    Store,
    UtensilsCrossed,
    ArrowRight
} from 'lucide-react';

const FranchisePage = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        city: '',
        type: 'Cloud Kitchen',
        investment: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const scrollToForm = () => {
        const formElement = document.getElementById('inquire');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct mailto link
        const subject = `Franchise Inquiry: ${formData.type} - ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0ACity: ${formData.city}%0D%0AFranchise Type: ${formData.type}%0D%0AInvestment Amount: ${formData.investment}%0D%0AMessage: ${formData.message}`;

        // Open email client
        window.location.href = `mailto:customercare@dumwala.com?subject=${subject}&body=${body}`;

        // Show success state and reset form
        setSubmitted(true);
        setFormData({
            name: '',
            phone: '',
            email: '',
            city: '',
            type: 'Cloud Kitchen',
            investment: '',
            message: ''
        });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="pt-20 min-h-screen bg-dark">
            <SEO
                title="Franchise Opportunity - Dumwala"
                description="Partner with Dumwala. empowering women entrepreneurs with our flexible Cloud Kitchen and Conversion franchise models."
                canonical="/franchise"
            />

            {/* Hero Section */}
            <div className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2670&auto=format&fit=crop"
                    alt="Kitchen Team"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="relative z-20 container mx-auto px-4">
                    <Reveal>
                        <h3 className="text-secondary text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-4">Partner With Us</h3>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                            Start Your Entrepreneurial <br />
                            Journey with <span className="text-primary">Dumwala</span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-8">
                            We are on a mission to empower women homemakers and aspiring entrepreneurs.
                            Turn your passion for food into a profitable business with our flexible franchise models.
                        </p>
                        <button onClick={scrollToForm} className="inline-flex items-center gap-2 bg-primary hover:bg-orange-700 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest transition-colors shadow-lg hover:shadow-primary/30">
                            Inquire Now <ArrowRight size={20} />
                        </button>
                    </Reveal>
                </div>
            </div>

            {/* Why Choose Dumwala */}
            <section className="py-24 bg-dark-card border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Why Choose <span className="text-primary">Dumwala?</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Join a brand that values quality, authenticity, and partner success above all else.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, title: "Reputable Brand", desc: "Recognized for authentic taste and premium quality." },
                            { icon: ChefHat, title: "Standardized Recipes", desc: "Foolproof SOPs ensuring consistent taste every time." },
                            { icon: TrendingUp, title: "Marketing Support", desc: "Digital promotion and branding assistance provided." },
                            { icon: Clock, title: "Quick ROI", desc: "Low investment models designed for faster break-even." }
                        ].map((item, index) => (
                            <Reveal key={index} delay={index * 100} className="bg-black/40 p-8 rounded-lg border border-white/5 hover:border-secondary/30 transition-all group">
                                <item.icon className="text-secondary mb-6 group-hover:scale-110 transition-transform" size={40} />
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Franchise Models */}
            <section className="py-24 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Our Franchise <span className="text-secondary">Models</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Cloud Kitchen */}
                    <Reveal className="bg-dark-card border border-white/10 rounded-lg overflow-hidden group hover:border-primary/50 transition-colors">
                        <div className="h-48 bg-gray-800 relative overflow-hidden">
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <UtensilsCrossed size={64} className="text-white/20 group-hover:text-primary/50 transition-colors" />
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-serif font-bold text-white mb-4">Cloud Kitchen</h3>
                            <p className="text-gray-300 mb-6">Ideal for home chefs and low-investment setups. Focus purely on delivery without the overhead of a dining space.</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-gray-400 text-sm"><CheckCircle2 size={16} className="text-primary" /> Low Capital Expenditure</li>
                                <li className="flex items-center gap-3 text-gray-400 text-sm"><CheckCircle2 size={16} className="text-primary" /> High Operational Efficiency</li>
                                <li className="flex items-center gap-3 text-gray-400 text-sm"><CheckCircle2 size={16} className="text-primary" /> Tie-ups with Zomato/Swiggy</li>
                            </ul>
                            <button onClick={scrollToForm} className="w-full border border-white/20 text-white py-3 rounded-sm uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors font-bold">Learn More</button>
                        </div>
                    </Reveal>

                    {/* Conversion Model */}
                    <Reveal delay={200} className="bg-dark-card border border-white/10 rounded-lg overflow-hidden group hover:border-secondary/50 transition-colors">
                        <div className="h-48 bg-gray-800 relative overflow-hidden">
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <Store size={64} className="text-white/20 group-hover:text-secondary/50 transition-colors" />
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-serif font-bold text-white mb-4">Conversion Franchise</h3>
                            <p className="text-gray-300 mb-6">Transform your existing restaurant or cafe into a high-performing Dumwala outlet with our branding.</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-gray-400 text-sm"><CheckCircle2 size={16} className="text-secondary" /> Brand Revitalization</li>
                                <li className="flex items-center gap-3 text-gray-400 text-sm"><CheckCircle2 size={16} className="text-secondary" /> Utilizing Existing Assets</li>
                                <li className="flex items-center gap-3 text-gray-400 text-sm"><CheckCircle2 size={16} className="text-secondary" /> Operational Overhaul</li>
                            </ul>
                            <button onClick={scrollToForm} className="w-full border border-white/20 text-white py-3 rounded-sm uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors font-bold">Learn More</button>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Inquiry Form */}
            <section id="inquire" className="py-24 bg-primary/5 border-t border-white/5">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Reveal>
                        <div className="bg-dark-card p-8 md:p-12 rounded-lg border border-white/10 shadow-2xl">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-serif font-bold text-white mb-4">Partner Inquiry Form</h2>
                                <p className="text-gray-400">Fill out the details below and our team will get back to you within 24 hours.</p>
                            </div>

                            {submitted ? (
                                <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-lg text-center animate-fade-in">
                                    <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2">Thank you!</h3>
                                    <p className="text-gray-300">Your inquiry has been received. We will contact you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Phone Number *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                                                placeholder="+91..."
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Email *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">City *</label>
                                            <input
                                                type="text"
                                                name="city"
                                                required
                                                value={formData.city}
                                                onChange={handleChange}
                                                className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                                                placeholder="e.g. Mumbai"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Franchise Type</label>
                                            <select
                                                name="type"
                                                value={formData.type}
                                                onChange={handleChange}
                                                className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                                            >
                                                <option>Cloud Kitchen</option>
                                                <option>Conversion Franchise</option>
                                                <option>Dine-in Restaurant</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Investment Amount</label>
                                            <input
                                                type="text"
                                                name="investment"
                                                required
                                                value={formData.investment}
                                                onChange={handleChange}
                                                className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                                                placeholder="e.g. 15 Lakhs"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Message</label>
                                        <textarea
                                            rows="4"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                                            placeholder="Tell us about your background..."
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="w-full bg-primary hover:bg-orange-700 text-white font-bold py-4 rounded-sm uppercase tracking-widest transition-colors shadow-lg shadow-primary/20">
                                        Submit Inquiry
                                    </button>
                                </form>
                            )}
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default FranchisePage;
