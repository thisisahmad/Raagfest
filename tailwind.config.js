/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#fe0579',
        'brand-yellow': '#fadc02',
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
          '0%': { boxShadow: '0 0 5px #fe0579, 0 0 10px #fe0579' },
          '100%': { boxShadow: '0 0 20px #fadc02, 0 0 30px #fadc02' },
        }
      }
    },
  },
  plugins: [],
}
