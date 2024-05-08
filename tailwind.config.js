/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#151C25',
        'secondary': '#55E5A4'
      },
      textColor: {
        'primary': '#151C25',
        'secondary': '#55E5A4'
      },
      borderColor: {
        'secondary': '#55E5A4'
      }
    },
  },
  plugins: [],
}