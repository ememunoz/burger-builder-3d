/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'burger-pattern': "url('./assets/img/tile.webp')",
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'hsl(0 0% 92%)',
      black: 'hsl(0 0% 20%)',
      cream: 'hsl(45 100% 89%)',
      mint: 'hsl(167 51% 54%)',
      mintHover: 'hsl(167 51%, 46%)',
      mintActive: 'hsl(167 51% 38%)',
      mintDark: 'hsl(210 10% 15%)',
      yellow: 'hsl(42 100% 62%)',
      yellowHover: 'hsl(42 100% 54%)',
      yellowActive: 'hsl(42 100% 46%)',
    },
    fontFamily: {
      display: ['"Titan One"', 'Arial', 'Helvetica', 'sans-serif'],
      body: ['"Roboto Condensed"', 'Arial', 'Helvetica', 'sans-serif'],
    },
  },
  plugins: [],
}
