/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rubric: '#b6a03a',
      },
      fontSize: {
        'verse': '0.9em',
        'kleiner': '0.94em',
      },
      letterSpacing: {
        'gesperrt': '0.2em',
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.format-verse': {
          '@apply text-verse': {}
        },
        '.format-kleiner': {
          '@apply text-kleiner': {}
        },
        '.format-hochfest': {
          '@apply font-bold uppercase': {}
        },
        '.format-fest': {
          '@apply font-bold': {},
          'font-variant': 'small-caps'
        },
        '.format-gesperrt': {
          '@apply tracking-gesperrt': {}
        },
        '.prayer-heading': {
          '@apply font-bold text-rubric': {},
          'margin-top': '1em'  // relative Einheit beibehalten
        },
        'sup': {
          fontSize: '0.7em',
          lineHeight: '0',
          verticalAlign: '-0.15em',
          '@apply text-gray-400': {}
        }
      })
    }
  ]
};