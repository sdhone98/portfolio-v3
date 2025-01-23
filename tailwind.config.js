// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        "dm-thin": ["DMThin", "sans-serif"],
        "dm-light": ["DMLight", "sans-serif"],
        "dm": ["DM", "sans-serif"],
        "dm-bold": ["DMBold", "sans-serif"],
        "dm-semi-bold": ["DMSemiBold", "sans-serif"],
        "dm-extra-bold": ["DMExtraBold", "sans-serif"],
        "dm-black": ["DMBlack", "sans-serif"]
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

