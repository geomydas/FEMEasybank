import fluid, { extract } from "fluid-tailwind";
module.exports = {
  content: { files: ["./src/**/*.{html,js}"], extract },
  theme: {
    screens: {
      // "desktop-sm": { raw: "screen and (max-width: 40rem)" },
      sm: "40rem",
      "desktop-sm": { raw: "screen and (max-width: 40rem)" },
      md: "48rem",
      "desktop-md": { raw: "screen and (max-width: 48rem)" },
      lg: "64rem",
      "desktop-lg": { raw: "screen and (max-width: 64rem)" },
      xl: "80rem",
      "desktop-xl": { raw: "screen and (max-width: 80rem)" },
      "2xl": "96rem",
      "desktop-2xl": { raw: "screen and (max-width: 96rem)" },
    },
    extend: {
      colors: {
        blue: "hsl(233, 26%, 24%)",
        green: "hsl(136, 65%, 51%)",
        cyan: "hsl(192, 70%, 51%)",
        gray: "hsl(233, 8%, 62%)",
        lightGray: "hsl(220, 16%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        publicSans: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [fluid({ checkSC144: false })],
};
