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
    extend: {
      colors: {
        primary: {
          light: "#ffffff",
          body: "#e8eaeb",
        },
        accent: {
          cyan: "#5dfeff",
          yellow: "#edff9f",
          green: "#96eb5e",
        },
        card: {
          title: "#f5f5f5",
        },
        blog: {
          heading: "#77d3ec",
        },
        dark: "#262626",
        "shadow-dark": "#1a1a1a",
      },
      boxShadow: {
        dark: "2px 2px 8px #1a1a1a",
        "cyan-glow": "0 0 8px rgba(95, 222, 255, 0.75)",
        "purple-glow": "1px 1px 10px #e4bef5",
        "skill-glow": "1px 1px 8px #ddbff1",
      },
      textShadow: {
        DEFAULT: "2px 2px 8px #1a1a1a",
        skill: "1px 1px 8px #ddbff1",
      },
      backgroundImage: {
        "gradient-skill": "linear-gradient(to right, #62ffea, #53dd58)",
        "gradient-avatar": "linear-gradient(135deg, #ebf9ab, #51c9ff, #e4bef5)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        "fade-out": {
          "0%": { opacity: "100%" },
          "100%": { opacity: "0%" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.25s ease-in-out",
        "fade-out": "fade-out 0.25s ease-in-out",
      },
    },
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
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("tailwindcss-animate"),
  ],
};
