/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'header-bg': "url('/floral.jpg')",
      'clover-bg': "url('/clover.jpg')",
      'sky-bg': "url('/background.jpg')",
      'yellow-bg': "url('/pink.jpg')",
      },
    },
  },
  plugins: [],
};
