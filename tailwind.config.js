/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        page: '#ECE6E8',
        card: '#ffffff',
        border: '#e4e4e4',
        muted: '#8f8f8f',
        'nav-btn': '#000000',
      },
      fontFamily: {
        sans: ['Figtree', 'sans-serif'],
        display: ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
}
