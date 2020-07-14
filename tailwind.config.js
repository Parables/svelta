const spacing = require('./src/tailwindcss/spacing')

module.exports = {
  purge: [],
  theme: {
    extend: {
      inset: theme => ({
        ...theme('spacing'),
      }),
      ...spacing,
      fontFamily: {
        'mons': 'Montserrat,Helvetica,Arial,sans-serif'
      }, boxShadow: {
        haiti: '0px -10px 50px 5px #10163A',
        primary: '0px 0px 5px 2px #7367F0',
        blurright: '',
        blurleft: '0 35px 60px -15px rgba(0, 0, 0, .3)',
      },
      colors: {
        primary: '#7367F0',
        success: '#28C76F',
        danger: '#EA5455',
        warning: '#FF9F43',
        cadetblue: '#C2C6DC',
        haiti: '#10163A',
        comet: '#262C49',
        cometdeep: '#222744',
        cararra: '#DDE8FD'
      },
      maxHeight: theme => ({
        ...theme('spacing'),
      }),
      transitionProperty: {
        width: 'width',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
