const plugin = require('tailwindcss/plugin')
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')
const { default: toColorValue } = require('tailwindcss/lib/util/toColorValue')

module.exports = plugin(({ matchUtilities, addDefaults, theme }) => {
  addDefaults('glow', {
    '--tw-glow-color': '#0000',
    '--tw-glow-blur': '0px',
    '--tw-glow-opacity': '1',
    '--tw-glow-shadow': 'drop-shadow(0 0 var(--tw-glow-blur) var(--tw-glow-color))',
  })

  // Match utilities for blur sizes
  matchUtilities({
    glow: value => {
      return {
        '@defaults glow': {},
        '--tw-glow-blur': value,
        'filter': 'var(--tw-glow-shadow)',
      }
    },
  }, { values: theme('glow'), type: 'length' }) // Use 'length' for valid blur sizes

  // Match utilities for glow colors
  matchUtilities({
    glow: value => {
      return {
        '--tw-glow-color': toColorValue(value),
        '--tw-glow-shadow': 'drop-shadow(0 0 var(--tw-glow-blur) var(--tw-glow-color))',
      }
    },
  }, { values: flattenColorPalette(theme('glowColor')), type: 'color' }) // Use 'color' for valid colors
}, {
  theme: {
    glow: {
      sm: '2px',
      DEFAULT: '4px',
      md: '6px',
      lg: '10px',
      xl: '15px',
      '2xl': '25px',
      '3xl': '35px',
      '4xl': '45px',
      '5xl': '50px',
    },
    glowColor: ({ theme }) => theme('colors'),
  },
})
