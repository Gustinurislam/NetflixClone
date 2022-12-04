/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'mm': '375px',
        'ml': '425px'
      }
    },
  },
  plugins: [],
};
