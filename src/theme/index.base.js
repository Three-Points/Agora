const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase, theme }) {
    addBase({
        body: {
            margin: '0',
            fontFamily: theme('fontFamily.ubuntu'),
        },
        '.main': {
            width: '100%',
            minHeight: '100vh',
            padding: `${theme('spacing.6')}`,
            display: 'grid',
            alignContent: 'start',
            rowGap: `${theme('spacing.6')}`,
            gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        },
    })
})
