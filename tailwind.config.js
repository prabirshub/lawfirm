/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      primary: ['var(--font-playfair)'],
      body: ['var(--font-opensans)'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#292A4A',
          darker: '#242546',
          hover: '#383956',
        },

        accent: {
          DEFAULT: '#CF9455',
          hover: '#BB864E',
        },

        gray: '#766F66',
        white: '#ffffff',
      },
      spacing: {
        54: '54px',
        800: '800px',
      },
      content: {
        quote: 'url("../public/assets/img/quoteMark.png")',
      },
    },
  },
  plugins: [],
}
