/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: 'hsl(223, 87%, 63%)',
        paleBlue: 'hsl(223, 100%, 88%)',
        lightRed: 'hsl(354, 100%, 66%)',
        gray: 'hsl(0, 0%, 59%)',
        veryDarkBlue: 'hsl(209, 33%, 12%)',
      },
    },
  },
  plugins: [],
}
