/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  important: true,
  mode: 'jit',
  content: ["./**/*.html", "./src/**/*.{html,js}"],
  darkMode: "class",
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
        '.products': {
          width: '500px',
          height: '300px',
          backgroundColor: '#fff',
          position: 'relative',
          cursor: 'pointer',
        },
        '.cards-menu': {
          width: '250px',
          height: '325px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          flexDirection: 'column',
          background: '#EAB308',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: '.5s',
          borderRadius: '10px',
          boxShadow: '2px 3px 5px #292524',
          padding: '20px',
          gap: '20px'
          
        },
        '.cards-menu:hover .menu-img': {
          scale: '1.10',
          height: '55%',
          filter: 'brightness(100%)'
        },
        '.cards-menu:hover': {
          scale: '1.10',
        },
        '.menu-img': {
          width: '80%',
          height: '50%',
          objectFit: 'cover',
          transition: '.5s',
          borderRadius: '10px',
          filter: 'brightness(40%)',
          boxShadow: '2px 3px 5px #292524',
        },
        '.card-title': {
          fontSize: '2.5rem',
          fontWeight: '400',
          color: '#000'
        },
        '.hide': {
          display: 'none'
        },
        '.scrollbar': {
          '&::-webkit-scrollbar': {
            width: '5px',
            height: '100%',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#EAB308',
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
        '.scrollbar-slide': {
          '&::-webkit-scrollbar': {
            height: '5px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#EAB308',
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
        },
      });
    }),
  ],
}