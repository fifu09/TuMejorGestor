/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBrown: "#985B00",
        Black65: "rgb(0, 0, 0, 0.65)",
        White65: "rgb(255, 255, 255, 0.65)",
      },

      backgroundImage: {
        HomeImage: "url('./src/Static/FondoHome.jpg')",
        ServiceIva: "url('./src/Static/ServiceIva.jpg')",
      },
      animation: {
        UpDownLoop: "UpDownKeyframes 2s linear infinite",
      },
      keyframes: {
        UpDownKeyframes: {
          "0%, 100%": { transform: "translateY(10px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "&:hover > *");
    },
  ],
};
