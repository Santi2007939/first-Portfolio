/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f5f3e6',
        secondary: '#1d1b0c',
        pbutton: '#a9afbc ',
        sbutton: '#ebecef',
        accent: '#9ba2b0 '
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      screens: {
        xs: '682px',
        xss: '450px',
        xns: '414px',
        xsm: '540px',
        xsss: '370px',
        nn: '900px',
        big: '1267px',
        dw: '320px'
      }
    },
  },
  plugins: [],
}

