/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eefbf3',
          100: '#d6f5e2',
          200: '#b0eac9',
          300: '#7dd8ad',
          400: '#41bc87',
          500: '#27a06d',
          600: '#1b8257', // Main brand color
          700: '#186847',
          800: '#17523a',
          900: '#164432',
          950: '#072518',
        },
        secondary: {
          50: '#fef2f3',
          100: '#fde6e7',
          200: '#fbd0d5',
          300: '#f7aab2',
          400: '#f27a8a',
          500: '#e94c64', // Bangladesh flag red
          600: '#d42a4e',
          700: '#b81c44',
          800: '#991b3f',
          900: '#831b3c',
          950: '#480a1d',
        },
        accent: {
          50: '#eefaf5',
          100: '#d6f2e9',
          200: '#b0e4d2',
          300: '#7dceb5',
          400: '#4fb194',
          500: '#2f917d',
          600: '#1e7767',
          700: '#195e54',
          800: '#174c45',
          900: '#143f3a',
          950: '#0a2825',
        },
      },
      fontFamily: {
        sans: ['Hind Siliguri', 'sans-serif'],
        display: ['Noto Sans Bengali', 'sans-serif'],
      },
    },
  },
  plugins: [],
};