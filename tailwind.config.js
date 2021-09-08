const colors = require("tailwindcss/colors");

module.exports = {
    //mode: "jit",
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
                blob: "blob 7s infinite"
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)"
                    },
                    "33%": {
                        transform: "translate(30px, -50px) scale(1.1)"
                    },
                    "66%": {
                        transform: "translate(-20px, 20px) scale(0.9)"
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)"
                    }
                }
            }

            //For InstagramStories.js
            /*colors: {
                fuchsia: colors.fuchsia
            }*/

            //For GlowingBackgroundGradientEffects.js
            /*animation: {
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
            }*/
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
