const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities, e, theme, variants }) {
  const modifiers = theme("zIndexMap");

  const zIndexMap = modifiers.map((modifier, index) => ({
    [`.${e(`z-map-${modifier}`)}`]: {
      "z-index": index + 1,
    },
  }));

  addUtilities(zIndexMap, variants("zIndexMap"));
});
