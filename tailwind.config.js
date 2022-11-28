/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
      },
      backgroundImage:{
        'hero-pattern':"url('https://w.ladicdn.com/s700x1050/5bf3dc7edc60303c34e4991f/apple-ld-01-20220711085631.png')"
      }
    },
    fontFamily:{
      abc:["IBM Plex Sans","sans-serif"],
      roboto:["Roboto"]
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

