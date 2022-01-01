const colors = require('tailwindcss/colors')
module.exports = {
    // purge: {
    //   enabled: true,
    //   content:['./*.html']
    // },
    purge: ['./*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            container: {
                center: true,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}