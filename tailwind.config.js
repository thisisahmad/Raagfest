/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#01fa86',
        'brand-blue': '#0523fd',
        'brand-black': '#0a0a0a',
        'brand-dark': '#111111',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      animation: {
        'pulse-fast': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #0523fd, 0 0 10px #0523fd' },
          '100%': { boxShadow: '0 0 20px #01fa86, 0 0 30px #01fa86' },
        }
      }
    },
  },
  plugins: [],
}
