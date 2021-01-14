const original = require("tailwindcss/defaultConfig");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Noto Sans JP"', ...original.theme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
