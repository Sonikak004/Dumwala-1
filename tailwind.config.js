/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#DC2626', // Brand Red
                secondary: '#FF8700', // Bright Orange
                dark: '#121212', // Rich black
                'dark-card': '#1E1E1E',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Lato"', 'sans-serif'],
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                popIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                steam: {
                    '0%': { opacity: '0', transform: 'translateY(0) scale(1)' },
                    '50%': { opacity: '0.4', transform: 'translateY(-20px) scale(1.2)' },
                    '100%': { opacity: '0', transform: 'translateY(-40px) scale(1.5)' },
                }
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'fade-in': 'fadeIn 1s ease-out forwards',
                'pop-in': 'popIn 1s ease-out forwards',
                'steam': 'steam 4s infinite ease-out',
                'slow-pan': 'scaleIn 20s alternate infinite linear', // Re-using scaleIn for slow pan if needed, or define specific slowPan
            },
        },
    },
    plugins: [],
}
