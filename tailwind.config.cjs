/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    "animation-duration": {
      1: "1",
    },
    "animation-delay": {
      1: "1",
    },
    extend: {},
    fontFamily: { oxygen: ['"Oxygen Mono"', "monospace"] },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          animDuration: (value) => ({
            "animation-duration": `${value}ms !important`,
          }),
        },
        { values: theme("animation-duration") }
      );
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          animDelay: (value) => ({
            "animation-delay": `${value}ms !important`,
          }),
        },
        { values: theme("animation-delay") }
      );
    }),
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("tailwindcss-animate"),
  ],
};
