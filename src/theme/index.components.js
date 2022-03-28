const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        Main: {
            minHeight: '100vh',

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

            backgroundColor: theme('colors.primary.soft'),
        },
    })
})
