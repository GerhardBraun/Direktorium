/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rubric: '#DC2626', // rot
        rubric: '#b6a03a', // gold
        // Neue Farbdefinitionen für Buttons
        hell: {
          DEFAULT: '#ffffff',  // weiß im light-mode
          dark: '#e5e7eb'      // grau im dark-mode (text-gray-200)
        },
        dunkel: '#111827',// text-gray-900
        grau: '#9ca3af',// text-gray-400
        liturgical: {
          green: {
            DEFAULT: 'rgba(21, 128, 61, 0.5)', // bg-green-700/50
            hover: 'rgba(22, 163, 74, 0.5)'    // bg-green-600/50
          },
          white: {
            DEFAULT: 'rgba(229, 231, 235, 0.9)',    // bg-gray-200
            hover: 'rgba(243, 244, 246, 1)'  // bg-gray-100
          },
          violett: {
            DEFAULT: 'rgba(88, 28, 135, 0.5)',  // bg-purple-900/50
            hover: 'rgba(107, 33, 168, 0.6)'    // bg-purple-800/60
          },
          gold: {
            DEFAULT: 'rgba(254, 249, 195, 0.8)', // bg-yellow-100/80
            hover: 'rgba(254, 252, 232, 1)'      // bg-yellow-50
          },
          red: {
            DEFAULT: 'rgba(185, 28, 28, 0.8)',   // bg-red-700/80
            hover: 'rgba(220, 38, 38, 0.8)'      // bg-red-600/80
          },
          blue: {
            DEFAULT: 'rgba(96, 165, 250, 0.7)',  // bg-blue-400/70
            hover: 'rgba(147, 197, 253, 0.7)'    // bg-blue-300/70
          },
          brown: {
            DEFAULT: 'rgba(150, 75, 0, 0.7)',    // bg-[#964b00]/70
            hover: 'rgba(150, 75, 0, 0.8)'       // bg-[#964b00]/80
          },
          personal: {
            DEFAULT: 'rgba(230, 175, 96, 0.7)',  // bg-[#f0d060]/70
            hover: 'rgba(230, 175, 96, 0.8)'     // bg-[#f0d060]/80
          }
        }
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
        '.long-rubric': {
          '@apply text-verse text-rubric': {}
        },
        '.text-fussnote': {
          fontSize: '0.9em',
          '@apply text-gray-400': {}
        },
        'sup': {
          fontSize: '0.7em',
          lineHeight: '0',
          verticalAlign: '-0.15em',
          '@apply text-gray-400': {}
        },
        'menu': {
          '@apply text-gray-700 dark:text-gray-300': {}
        },
        // Neue Button-Komponenten
        '.btn-default': {
          '@apply bg-gray-200 dark:bg-gray-700 text-dunkel dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600': {}
        },
        '.btn-green': {
          '@apply bg-liturgical-green text-hell hover:bg-liturgical-green-hover': {}
        },
        '.btn-violett': {
          '@apply bg-liturgical-violett text-hell hover:bg-liturgical-violett-hover': {}
        },
        '.btn-gold': {
          '@apply bg-liturgical-gold text-dunkel hover:bg-liturgical-gold-hover': {}
        },
        '.btn-white': {
          '@apply bg-liturgical-white text-dunkel hover:bg-liturgical-white-hover': {}
        },
        '.btn-red': {
          '@apply bg-liturgical-red text-hell hover:bg-liturgical-red-hover': {}
        },
        '.btn-blue': {
          '@apply bg-liturgical-blue text-dunkel dark:text-hell hover:bg-liturgical-blue-hover': {}
        },
        '.btn-brown': {
          '@apply bg-liturgical-brown text-hell hover:bg-liturgical-brown-hover': {}
        },
        '.btn-pers': {
          '@apply bg-liturgical-personal text-hell hover:bg-liturgical-personal-hover': {}
        }
      })
    }
  ]
};