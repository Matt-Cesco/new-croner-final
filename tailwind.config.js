/** @type {import('tailwindcss').Config} */

const baseWidth = 1490;

const generateFontSize = () => {
    const fontSize = {};
    for (let i = 1; i <= 600; i++) {
        const maxRem = (i * 0.1).toFixed(2); // Max value in rem
        const minRem = (i * 0.08).toFixed(2); // Min value is 20% less than the max
        const middleVw = ((i * 100) / baseWidth).toFixed(8); // Calculate middle value in vw
        fontSize[i.toString()] = `clamp(${minRem}rem, ${middleVw}vw, ${maxRem}rem)`;
    }
    return fontSize;
};

const generateSpacing = () => {
    const spacing = {};
    for (let i = 1; i <= 600; i++) {
        const max = (i * 0.1).toFixed(2); // Max value in rem
        const min = (i * 0.05).toFixed(2); // Min value in rem, which is half of the max
        const calcValue = (i * 100) / baseWidth;
        spacing[i.toString()] = `clamp(${min}rem, ${calcValue}vw, ${max}rem)`;
    }
    return spacing;
};

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        spacing: generateSpacing(),

        fontFamily: {
            body: ["Montserrat", "sans-serif"],
        },
        extend: {
            fontSize: generateFontSize(),
        },
    },
    plugins: [],
};
