/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nunito" : ['Nunito Sans', 'serif']
      },
      backgroundImage: {
        "myGradient" : 'linear-gradient(135deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s linear 1'
      },
      keyframes:{
        fadeIn:{
          '0%': { opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': {opacity: '1'}
        }
      },
      colors: {
        'ratata': 'rgb(34,193,195)',
      }
    },
  },
  plugins: [],
}

