/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
    colors: {
      'body': '#030816',
      'selected-text': '#533483',
      'theme': '#E94560',
      'nav': '#868686',
      'secondary': '#868686',
      'badge': '#3F3F51',
      'input-border': '#061130',
      'input': '#061130'
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'roboto-mono': ['"Roboto Mono"', 'monospace']
    }
  },
  plugins: [],
}
