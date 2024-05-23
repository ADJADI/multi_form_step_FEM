/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Marine: "hsl(213, 96%, 18%)",
        Purplish: "hsl(243, 100%, 62%)",
        Pastel: "hsl(228, 100%, 84%)",
        Light: "hsl(206, 94%, 87%)",
        Strawberry: "hsl(354, 84%, 57%)",
        Cool: "hsl(231, 11%, 63%)",
        LightGray: "hsl(229, 24%, 87%)",
        Magnolia: "hsl(217, 100%, 97%)",
        Alabaster: "hsl(231, 100%, 99%)",
      },
      fontFamily: {
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
      backgroundImage: {
        "sidebar-m": `url("./src/assets/images/bg-sidebar-mobile.svg")`,
        "sidebar-d": `url("./src/assets/images/bg-sidebar-desktop.svg")`,
      },
    },
  },
  plugins: [],
};
