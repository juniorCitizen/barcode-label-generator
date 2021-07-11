// https://tailwindcss.com/docs/configuration
const defaultTheme = require('tailwindcss/defaultTheme') // eslint-disable-line

module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
