import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ['class', '.dark'],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    extend: {
        colors: {
        sage: "#8A9A86",
        silver: "#D1D5DB",
        cream: "#FAFAF7",
        slate: "#1E293B",
        indigo: "#2B3A67",
        terracotta: "#C87967",
        },
    },
    },
    plugins: [],
    };
export default config;