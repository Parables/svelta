const spacing = require('./src/tailwindcss/spacing')

module.exports = {
  purge: [],
  theme: {
    extend: {
      inset:theme => ({
        ...theme('spacing'),
          }),
        ...spacing,
        fontFamily: {
          'mons': 'Montserrat,Helvetica,Arial,sans-serif'
        },
        colors:{
          primary:'#7367F0', 
          success:'#28C76F',
          danger: '#EA5455',
          warning:'#FF9F43',
          cadetblue: '#C2C6DC',
          haiti:'#10163A',
          comet: '#252C49',
          cararra: '#DDE8FD'
        },
        transitionProperty: {
        width: 'width',
        display: 'display'
        }
    },
  },
  variants: {},
  plugins: [],
}
