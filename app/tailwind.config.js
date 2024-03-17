/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    fontFamily: {
        header: 'League Spartan, sans-serif',
        body: 'Cabin, sans-serif;'
    },
    colors: {
      // flowbite-svelte
      primary: {
        50: "#FFF5F2",
        100: "#FFF1EE",
        200: "#FFE4DE",
        300: "#FFD5CC",
        400: "#FFBCAD",
        500: "#FE795D",
        600: "#EF562F",
        700: "#EB4F27",
        800: "#CC4522",
        900: "#A5371B",
      },

      bad: "#eb4034",
      transparent: "transparent",
      background: "white",
      "background-second": "#EEEEEE",
      foreground: "#1b1b1b",
      "foreground-second": "#595959",
      shadow: "#1b1b1b86",
      "shadow-clear": "#1b1b1b00",
      accent: "rgb(12, 151, 178)",
      'accent-second': "#086d75",
      'accent-third': "#64bfd1"
    },
  },
  plugins: [require("flowbite/plugin")],
};
