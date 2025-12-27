import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                archivo: "var(--font-archivo)",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    md: "2rem",
                    lg: "4rem",
                },
            },
            screens: {
                sm:"375px",
                md:"768px",
                lg:"1200px",
            },
            colors: {
                "red-orange-500": "#FF4C29",
                
            },
        },
    },
    plugins: [],
};
export default config;
