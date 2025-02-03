/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.format-verse': {
          fontSize: '0.9em',
        },
        '.format-kleiner': {
          fontSize: '0.94em',
        },
        '.format-hochfest': {
          fontWeight: 'bold',
          textTransform: 'uppercase',
        },
        '.format-fest': {
          fontWeight: 'bold',
          fontVariant: 'small-caps',
        },
        '.format-gesperrt': {
          letterSpacing: '0.2em',
        },
        '.prayer-heading': {
          fontWeight: 'bold',
          marginTop: '1em',
          color: '#b6a03a', // oder '@theme(colors.rubric)'
        },
      })
    }
  ],
};
