
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/.ts",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nav-bg': "url('./src/assets/navBg.jpg')",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

