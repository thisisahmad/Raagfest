/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#57318C',
        'brand-purple-light': '#7B4BB5',
        'brand-purple-dark': '#3d2263',
        'brand-orange': '#FF6D44',
        'brand-orange-soft': '#FF8A6B',
        'brand-accent': '#4E4C7F',
        'brand-black': '#030305',
        'brand-dark': '#080612',
      },
      boxShadow: {
        'premium': '0 0 48px rgba(87, 49, 140, 0.08), 0 0 96px rgba(255, 109, 68, 0.04)',
        'premium-lg': '0 0 56px rgba(87, 49, 140, 0.12), 0 0 100px rgba(255, 109, 68, 0.06)',
        'card-glow': '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
        festival: ['Bebas Neue', 'Oswald', 'sans-serif'],
      },
      animation: {
        'pulse-fast': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'spotlight': 'spotlight 4s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(255, 109, 68, 0.5), 0 0 30px rgba(87, 49, 140, 0.4)' },
          '100%': { boxShadow: '0 0 25px rgba(255, 109, 68, 0.7), 0 0 50px rgba(87, 49, 140, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'spotlight': {
          '0%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
          '100%': { opacity: '0.3' },
        },
      },
      backgroundSize: {
        'gradient-move': '200% 200%',
      },
    },
  },
  plugins: [],
}
