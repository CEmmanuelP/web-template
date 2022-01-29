module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                rotation: {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
                sky: {
                    "0%": { backgroundColor: "#b08fcc" },
                    "25%": { backgroundColor: "#b1e1e2" },
                    "75%": { backgroundColor: "#fcd2e2" },
                    "100%": { backgroundColor: "#b08fcc" },
                },
                sun: {
                    "0%": { opacity: "0", transform: "rotate(-90deg)" },
                    "25%": { opacity: "1", transform: "rotate(-30deg)" },
                    "50%": { opacity: "1", transform: "rotate(30deg)" },
                    "75%": { opacity: "0", transform: "rotate(90deg)" },
                    "100%": { opacity: "0", transform: "rotate(-90deg)" },
                },
                day: {
                    "0%": { opacity: "0" },
                    "25%": { opacity: "1" },
                    "50%": { opacity: "1" },
                    "75%": { opacity: "0" },
                    "100%": { opacity: "0" },
                },
                flow: {
                    "0%": { left: "0", opacity: "0" },
                    "25%": { opacity: "1" },
                    "50%": { opacity: "1" },
                    "75%": { opacity: "0" },
                    "100%": { left: "90%", opacity: "0" },
                },
            },
            fontFamily: {
                sans: [
                    "SpoqaHanSansNeo-Regular",
                    "Helvetica",
                    "Arial",
                    "san-serif",
                ],
                Fira: ["Fira Sans", "san-serif"],
                Orbitron: ["Orbitron", "san-serif"],
            },
        },
    },
    plugins: [],
};
