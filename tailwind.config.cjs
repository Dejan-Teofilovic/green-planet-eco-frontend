/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(106,190,82,1)',
        secondary: '#6abe52',
        info: '',
        warning: '',
        error: ''
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
});
