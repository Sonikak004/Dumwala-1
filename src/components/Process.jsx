import React from 'react';

const Process = () => {
    const steps = [
        { num: '01', title: 'Marination', desc: 'Meat marinated for 12 hours in secret spices.' },
        { num: '02', title: 'Layering', desc: 'Layered with saffron-infused aged basmati rice.' },
        { num: '03', title: 'Dum Cooking', desc: 'Slow-cooked on low flame in sealed pots.' },
    ];

    return (
        <section className="py-24 bg-dark relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h3 className="text-secondary text-sm font-bold uppercase tracking-widest mb-3">The Art</h3>
                    <h2 className="text-4xl font-serif font-bold text-white">How We Make It</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop only) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-white/10 -z-10"></div>

                    {steps.map((step, i) => (
                        <div key={i} className="text-center relative">
                            <div className="w-24 h-24 mx-auto bg-dark border-2 border-secondary rounded-full flex items-center justify-center text-3xl font-serif font-bold text-white mb-6 z-10 relative">
                                {step.num}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-gray-400 text-sm max-w-[200px] mx-auto">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
