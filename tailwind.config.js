/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      }
    },
   
  },
  plugins: [],
}

//para ponerlos despues xd
// colors:{
//   'bg-color': '#f9f9fb',
//   'txt-color':'#090b11',
//   'prim-color': '#5066b4',
//   'sec-color': '#9facdb',
//   'dest-color': '#7286cf',
// }