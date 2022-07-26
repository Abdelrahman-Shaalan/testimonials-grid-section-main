module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
      }
    },
    colors: {
      moderateViolet: 'hsl(263, 55%, 52%)',
      veryDarkGrayishBlue: 'hsl(217, 19%, 35%)',
      veryDarkBlackishBlue: 'hsl(219, 29%, 14%)',
      lightGray: 'hsl(0, 0%, 81%)',
      lightGrayishBlue: 'hsl(210, 46%, 95%)',
      white: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      'barlowSemiCondensed': ['Barlow Semi Condensed', 'sans-serif'],
    }
  },
  plugins: [],
}
