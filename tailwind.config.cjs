/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 32
    },
    colors: {
      black: '#000',
      white: '#fff',
      'chestnut-600': '#B7524E',
      'cyan-700': '#5098C9',
      'cyan-600': '#69AEDE',
      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-400': '#7C7C8A',
      'gray-200': '#E1E1E6',
      'gray-100': '#C4C4CC'
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    }
  },
  plugins: []
};
