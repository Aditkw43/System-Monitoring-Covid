/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue, js}"
  ],
  theme: {
    extend: {
      colors: {
        indigo: '#28406F',
        sapphire: '#1B6475',
        originBlue: '#0370EF'
      }
    },
    backgroundImage: {
      docktorIllustration: "url('/src/assets/images/docktor-illustration.png')"
    }
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}