const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase, theme }) {
    addBase({
        body: {
            margin: '0',
            fontFamily: theme('fontFamily.ubuntu'),
        },
    })
})
