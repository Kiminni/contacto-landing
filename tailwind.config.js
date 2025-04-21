/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue1': '#2EA7E0',
        'brand-peach': '#F5DFDB',
        'brand-green': '#BAEF62',
        'orange-color': '#EA5514',
        'brand-blue2': '#5B9DFF',
      },
    },
  },
  plugins: [],
}
