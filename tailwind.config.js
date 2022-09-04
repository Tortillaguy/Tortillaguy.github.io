/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')
const colors = require('tailwindcss/colors')

module.exports = withMT({
    content: [
        './src/pages/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                black: colors.black,
                bone: '#EAE0CC',
                silver: '#898E95',
                purpleCore: '#9F45ED',
                blueCore: '#3B8EA5',
            },
        },
    },
    plugins: [],
})
