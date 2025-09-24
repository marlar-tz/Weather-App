/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'neutral': {
          '900': 'hsl(243, 96%, 9%)',
          '800': 'hsl(243, 27%, 20%)',
        },
      },
    },
  },
  plugins: [],
}

