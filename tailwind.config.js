/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    colors: {
      gold: '#ca8a04',
      kingblue: {
        500: '#5570f7',
        600: '#6a33ea'
      },
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

