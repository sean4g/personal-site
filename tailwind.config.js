/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  theme: {

    extend: {
      fontFamily: {
        Lora: ['Lora', 'serif'],
      },
      colors: {
        'slate': '#C6DAE7',
        'dark': '#76b6c4',
        'dark-blue': '#165C7D',
      }
    },
  },
  plugins: [],
}

