import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        sm: "600px",
        md: "728px",
        lg: "800px",
        xl: "800px",
        "2xl": "800px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "media",
};
export default config;
