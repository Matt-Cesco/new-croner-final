/** @type {import('tailwindcss').Config} */

const baseWidth = 1490;
const rootFontSize = 16;

const generateFontSize = () => {
    const fontSize = {};
    for (let i = 1; i <= 600; i++) {
        const maxRem = (i / 16).toFixed(2); // Max value in rem (i pixels / 16px per rem)
        const minRem = ((i * 0.8) / 16).toFixed(2); // Min value is 20% less than the max
        const middleVw = ((i / baseWidth) * 100).toFixed(8); // Calculate middle value in vw
        fontSize[i.toString()] = `clamp(${minRem}rem, ${middleVw}vw, ${maxRem}rem)`;
    }

    // Extended font size classes (e.g., text-10-50)
    for (let max = 1; max <= 600; max++) {
        for (let min = 1; min < max; min++) {
            const maxRem = (max / rootFontSize).toFixed(2);
            const minRem = (min / rootFontSize).toFixed(2);
            const middleVw = ((max / baseWidth) * 100).toFixed(8);
            fontSize[`${min}-${max}`] = `clamp(${minRem}rem, ${middleVw}vw, ${maxRem}rem)`;
        }
    }
    return fontSize;
};

const generateSpacing = () => {
    const spacing = {};

    // Standard spacing classes (e.g., px-50)
    for (let i = 1; i <= 600; i++) {
        const maxRem = (i / rootFontSize).toFixed(2); // Max value in rem (i pixels / 16px per rem)
        const minRem = ((i * 0.8) / rootFontSize).toFixed(2); // Min value is 20% less than the max
        const vwValue = ((i / baseWidth) * 100).toFixed(8); // Calculate middle value in vw
        spacing[i.toString()] = `clamp(${minRem}rem, ${vwValue}vw, ${maxRem}rem)`;
    }

    // Extended spacing classes (e.g., px-10-50)
    for (let max = 1; max <= 600; max++) {
        for (let min = 1; min < max; min++) {
            const maxRem = (max / rootFontSize).toFixed(2);
            const minRem = (min / rootFontSize).toFixed(2);
            const middleVw = ((max / baseWidth) * 100).toFixed(8);
            spacing[`${min}-${max}`] = `clamp(${minRem}rem, ${middleVw}vw, ${maxRem}rem)`;
        }
    }

    return spacing;
};

const generateLineHeight = () => {
    const lineHeight = {};

    // Standard line height classes (e.g., leading-50)
    for (let i = 1; i <= 600; i++) {
        const maxRem = (i / rootFontSize).toFixed(2); // Max value in rem (i pixels / 16px per rem)
        const minRem = ((i * 0.8) / rootFontSize).toFixed(2); // Min value is 20% less than the max
        const middleVw = ((i / baseWidth) * 100).toFixed(8); // Calculate middle value in vw
        lineHeight[i.toString()] = `clamp(${minRem}rem, ${middleVw}vw, ${maxRem}rem)`;
    }

    // Extended line height classes (e.g., leading-10-50)
    for (let max = 1; max <= 600; max++) {
        for (let min = 1; min < max; min++) {
            const maxRem = (max / rootFontSize).toFixed(2);
            const minRem = (min / rootFontSize).toFixed(2);
            const middleVw = ((max / baseWidth) * 100).toFixed(8);
            lineHeight[`${min}-${max}`] = `clamp(${minRem}rem, ${middleVw}vw, ${maxRem}rem)`;
        }
    }

    return lineHeight;
};

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {

        fontFamily: {
            body: ["Montserrat", "sans-serif"],
        },
        extend: {
            fontSize: generateFontSize(),
            spacing: generateSpacing(),
            lineHeight: generateLineHeight(),
        },
    },
    plugins: [],
};
