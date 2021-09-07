module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      animation: {
        tilt: "tilt 10s infinite linear"
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)"
          },
          "25%": {
            transform: "rotate(1deg)"
          },
          "75%": {
            transform: "rotate(-1deg)"
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
