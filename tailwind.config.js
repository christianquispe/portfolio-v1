const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,ts,tsx,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: colors.sky,
        primary: {
          100: "#048C34",
        },
        secondary: {
          100: "#404040",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
