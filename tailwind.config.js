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
    },
  },
  plugins: [],
}

