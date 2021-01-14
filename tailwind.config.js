const original = require("tailwindcss/defaultConfig");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Dancing Script"', ...original.theme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
