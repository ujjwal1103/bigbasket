/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '0': '0ms',
        '3000': '0.3s',
      }

    },
  },
  variants:{
    extend:{
      display:['group-hover']

    }
  },
  plugins: [],
}
