export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
      },
    ],
  },
};
