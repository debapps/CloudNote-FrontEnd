/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                russo: ["Russo One", "sans-serif"],
                righteous: ["Righteous", "cursive"],
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                "brand-color": "#FDE047",
                "facebook-color": "#3b5998",
                "insta-color": "#d6249f",
                "github-color": "#f4a261",
                "twitter-color": "#1da1f2",
            },
        },
    },
    plugins: [],
};
