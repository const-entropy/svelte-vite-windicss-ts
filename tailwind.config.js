const typography = require("windicss/plugin/typography");

module.exports = {
  darkMode: false, // or 'media' or 'class'
  plugins: [typography],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
    }
  },
};
