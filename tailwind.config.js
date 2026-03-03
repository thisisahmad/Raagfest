/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#5B3B9D',
        'brand-purple-light': '#7B5BB5',
        'brand-purple-dark': '#3d2870',
        'brand-muted': '#514285',
        'brand-orange': '#EF6E3A',
        'brand-orange-soft': '#F58A5C',
        'brand-black': '#0d0a18',
        'brand-dark': '#1a0f2e',
      },
      boxShadow: {
        'premium': '0 0 48px rgba(91, 59, 157, 0.1), 0 0 96px rgba(239, 110, 58, 0.05)',
        'premium-lg': '0 0 56px rgba(91, 59, 157, 0.15), 0 0 100px rgba(239, 110, 58, 0.08)',
        'card-glow': '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        festival: ['Syne', 'sans-serif'],
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
          '0%': { boxShadow: '0 0 15px rgba(239, 110, 58, 0.4), 0 0 30px rgba(91, 59, 157, 0.35)' },
          '100%': { boxShadow: '0 0 25px rgba(239, 110, 58, 0.55), 0 0 50px rgba(91, 59, 157, 0.45)' },
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
