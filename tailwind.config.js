/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        screens: {
            sm: '575px',
            md: '768px',
            lg: '1024px',
            xl: '1200px',
            xxl: '1440px'
        },
        fontFamily: {
            'serif': ['Libre Baskerville', 'Courier New'],
            'sans': ['Poppins', 'Arial']
        },
        colors: {
            white: '#fff',
            purple: '#2F1B41',
            pink: {
                300: '#e7d5da',
                700: '#9B314D',
                900: '#9F1E49'
            },
            yellow: '#FECD51',
            cyan: {
                800: '#30475E'
            },
            gray: {
                100: '#F2F2F2',
                200: '#d4d4d8',
                300: '#9ca3af',
                400: '#a1a1aa',
                500: '#71717a',
                600: '#52525b',
                700: '#3f3f46',
                800: '#27272a',
                900: '#18181b'
            },
            black: '#000'
        },
        fontSize: {
            0: '0px',
            4: '4px',
            6: '6px',
            8: '8px',
            10: '10px',
            13: '13px',
            15: '15px',
            18: '18px',
            22: '22px',
            26: '26px',
            31: '31px',
            38: '38px',
            45: '45px',
            55: '55px',
            66: '66px',
            79: '79px',
            95: '95px',
            114: '114px',
            136: '136px',
            164: '164px'
        },
        lineHeight: {
            title: '1.2',
            paragraph: '1.61'
        },
        spacing: {
            0: '0px',
            2: '2px',
            4: '4px',
            6: '6px',
            8: '8px',
            10: '10px',
            13: '13px',
            15: '15px',
            18: '18px',
            22: '22px',
            26: '26px',
            31: '31px',
            38: '38px',
            45: '45px',
            55: '55px',
            66: '66px',
            79: '79px',
            95: '95px',
            114: '114px',
            136: '136px',
            164: '164px',
            185: '185px',
            '4/3': '45%',
            '-4/3': '-45%',
        },
        extend: {}
    },
    plugins: []
}
