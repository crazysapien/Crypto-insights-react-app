const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        marquee: 'marquee 80s linear infinite',
        marquee2: 'marquee2 80s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },

    colors: {
      transparent: 'transparent',
      'blue': '#3498DB',
      'black': '#17202A',
      'gray': '#95A5A6',
      'white': '#FDFEFE'
    }
  },
  plugins: [],
}
