/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  important: true,
  mode: 'jit',
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',       
        one: '#87120f',
        two: '#760e0b',
        three: '#640908',
        four: '#530504',
        five: '#410000',
      },
      fontFamily: {
        afacad: "Afacad Flux, sans serif",
        cinzel: "Cinzel, serif",
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.5, 1.6, 0.4, 0.7)',
      },
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.flex-box': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        '.flex-box-col': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        },
        '.sections': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100vh',
          position: 'relative'
        },
        '.scroll': {
          height: '64px',
          backgroundColor: '#790203',
        },
        '.scrollbar': {
          '&::-webkit-scrollbar': {
            width: '5px',
            height: '100%',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#fff',
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
        },
        '.scrollbar-body': {
          '&::-webkit-scrollbar': {
            width: '10px',
            height: '100%',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#EAB308',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#000',
          },
        },
      });
    }),
  ],
}