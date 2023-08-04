/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'burger-pattern': "url('./assets/img/tile.webp')",
      },
      keyframes: {
        slideIn: {
          from: { transform: 'translateX(calc(100% + 16px))' },
          to: { transform: 'translateX(0)' },
        },
        swipeOut: {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: { transform: 'translateX(calc(100% + 16px))' },
        },
        hide: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      },
      animation: {
        toastOpen: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        toastClosed: 'hide 100ms ease-in',
        toastEnd: 'swipeOut 100ms ease-out',
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
      mintDark: {
        700: 'hsl(210 10% 20%)',
        600: 'hsl(210 15% 30%)',
        500: 'hsl(210 15% 40%)',
      },
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
