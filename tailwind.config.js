/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans' : 'Space Grotesk',
      },
      colors:{
        'primary-white' : 'hsl(0, 0%, 100%)',
        'light-grayish-violet' : 'hsl(270, 3%, 87%)',
        'dark-grayish-violet' : 'hsl(279, 6%, 55%)',
        'very-dark-violet' : 'hsl(278, 68%, 11%)'
      },
      fontSize: {
        'fa-3xl' : '60px'
      }
    },
  },
  plugins: [],
}
