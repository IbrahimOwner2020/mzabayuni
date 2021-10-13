module.exports = {
  purge: ["./src/components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        primary: "#F3F3F3",
        orange: "#eea433",
        red: "#f04336",
        lightBlue: "#80d8da",
        brown: "#9C6644",
      }),
      colors: {
        primary: "#9C6644",
        primary40: "rgba(156, 102, 68, 0.4)",
        white60: "rgba(255, 255, 255, 0.6)",
      },
      width: {
        recipes: "300px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};