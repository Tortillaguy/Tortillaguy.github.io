/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: { oxygen: ['"Oxygen Mono"', "monospace"] },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("tailwindcss-animate"),
    require("tailwindcss-border-gradient-radius"),
  ],
};
