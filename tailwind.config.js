module.exports = {
    content: ["./**/*.html"],
    theme: {
        extend: {
            screens: {
              "3xl": "1660px"
            },
            fontFamily: {
                sans: ['RF Dewi', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif']
            },
            spacing: {
                0.2: "0.5px",
                0.05: "1px",
                12.5: "50px",
                15: "15px",
                17: "68px",
                22: "88px",
                30: "30px",
                70: "70px",
                100: "100px",
            },
            rotate: {
                150: '150deg',
            },
            blur: {
                100: '100px',
                200: '200px',
            },
            maxWidth: {
                '8xl': "1620px"
            },
            colors: {
                "gray-450": "rgba(26, 26, 26, .8)",

                "neutral-850": "#292725",

                "violet-400": "#8C6BD6",
                "violet-500": "#9172D6",
                "violet-50": "rgba(145, 114, 214, .3)",

                "white-50": "rgba(255, 255, 255, .5)"
            },
            letterSpacing: {
                wide: "0.02em"
            },
            lineHeight: {
                7.5: "29px",
                30: "30px"
            },
            fontSize: {
                xxs: "10px",
                "22": "22px",
                "26": "26px",
                "54": "54px",
            },
            boxShadow: {
                'md': "0px 20px 80px rgba(140, 107, 214, 0.3)"
            },
            opacity: {
                2: "0.02"
            },
            keyframes: {
                drop: {
                    '0%': {transform: 'translateY(-30px) translateX(-50%)', opacity: 0},
                    '50%': {transform: 'translateY(-15px) translateX(-50%)', opacity: .85},
                    '100%': {transform: 'translateY(0) translateX(-50%)', opacity: .05},
                }
            },
            animation: {
                "drop-1": 'drop .9s linear infinite',
                "drop-2": 'drop .9s linear infinite .3s',
                "drop-3": 'drop .9s linear infinite .6s',
            }
        },
    },
    plugins: [],
}
