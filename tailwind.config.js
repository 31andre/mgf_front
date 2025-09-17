/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ff',
          100: '#fdeeff',
          200: '#fcdeff',
          300: '#f9c5ff',
          400: '#f59cff',
          500: '#ed6fff',
          600: '#d946ef',
          700: '#bd38d3',
          800: '#9b2eb0',
          900: '#7e2a8d',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fed766',
          300: '#fdba2c',
          400: '#f59e0b',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        }
      },
      fontFamily: {
        'heading': ['Georgia', 'serif'],
        'body': ['Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}