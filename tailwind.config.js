/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
            'headerMobile': 'url(assets/images/mobile/image-header.jpg)',
            'headerDesktop': 'url(assets/images/desktop/image-header.jpg)',
        },
        colors: {
            'softRed': 'hsl(7, 99%, 70%)',
            'yellow': 'hsl(51, 100%, 49%)',
            'darkCyan': 'hsl(167, 40%, 24%)',
            'darkBlue': 'hsl(198, 62%, 26%)',
            'darkModerateCyan': 'hsl(168, 34%, 41%)',
                       
            'darkerBlue': 'hsl(212, 27%, 19%)',
            'darkerGrayBlue': 'hsl(213, 9%, 39%)',
            'darkGrayBlue': 'hsl(232, 10%, 55%)',
            'grayBlue': 'hsl(210, 4%, 67%)',
        },
        fontFamily: {
            'barlow': 'Barlow, sans-serif',
            'fraunces' : 'Fraunces, serif',
        },
      },
    },
    plugins: [],
  }
