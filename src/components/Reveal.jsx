import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, className = "", delay = 0, threshold = 0.1 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    const style = {
        animationDelay: `${delay}ms`,
        opacity: 0, // Start hidden to prevent flash
    };

    return (
        <div
            ref={ref}
            className={`${className} ${isVisible ? 'animate-fade-in-up opacity-100' : ''}`}
            style={isVisible ? { animationDelay: `${delay}ms` } : style}
        >
            {children}
        </div>
    );
};

export default Reveal;
