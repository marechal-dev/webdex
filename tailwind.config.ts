import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "valor-100": "#ff3939",
        "valor-200": "#ff3333",
        "valor-300": "#ff2d2d",
        "valor-400": "#ff2727",
        "valor-500": "#ff2222",
        "valor-600": "#ff1c1c",
        "valor-700": "#fc1616",
        "valor-800": "#f71111",
        "valor-900": "#f30b0b",
        "valor-950": "#ea0600",
        "mystic-100": "#9CBDFF",
        "mystic-200": "#91B0FF",
        "mystic-300": "#86A4FF",
        "mystic-400": "#7C97FF",
        "mystic-500": "#718BFF",
        "mystic-600": "#667EFA",
        "mystic-700": "#5B71ED",
        "mystic-800": "#5165E1",
        "mystic-900": "#4658D6",
        "mystic-950": "#3B4CCA",
        "instinct-50": "#ffde00",
        "instinct-100": "#ffda00",
        "instinct-200": "#ffd600",
        "instinct-300": "#ffd200",
        "instinct-400": "#ffce00",
        "instinct-500": "#ffc900",
        "instinct-600": "#ffc500",
        "instinct-700": "#ffc100",
        "instinct-800": "#ffbd00",
        "instinct-900": "#ffb900",
      },
    },
    backgroundImage: {
      "pokemon-valley-landscape": "url('/landscape.jpg')",
    },
  },
  plugins: [],
};
export default config;
