/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      PoppinsLight: ["PoppinsLight", "sans-serif"],
      JustMandrone: ["JustMandrone", "sans-serif"],
      PoppinsRegular: ["PoppinsRegular", "sans-serif"]
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    extend: {
      colors: {
        border_grey: "#dbdcdc",
        border_grey_lighter: "#dfe3e6",
        text_orange: "#f3781d",
        text_grey: "#4b4646",
        text_grey_darker: "#6f777a",
        background_green: "#048a81",
        background_green_light: "#DBE8E9",
        background_cards: "#fbfbfb",
        white: "#ffffff"
      },
      boxShadow: {
        card_shadow: "0px 1px 3px 1px #00000026",
        hover_card_shadow: "0px 1px 2px 0px #0000004d",
        button_shadow: "0px 5px 5px 0px #00000040 inset",
        checbox_shadow: "0px 4px 14px 0px #0000001a;"
      },
      backdropBlur: {
        custom: "8.9px"
      }
    }
  },
  plugins: []
};
