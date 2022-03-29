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
            '& div': {
                display: 'grid',
                rowGap: `${theme('spacing.6')}`,
                gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
            },
        },
        [`@media (min-width: ${theme('screens.md')})`]: {
            '.main': {
                '& div': {
                    rowGap: `${theme('spacing.9')}`,
                    columnGap: `${theme('spacing.6')}`,
                    gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
                },
            },
        },
        [`@media (min-width: ${theme('screens.lg')})`]: {
            '.main': {
                padding: `${theme('spacing.6')} ${theme('spacing.40')}`,
                '& div': {
                    rowGap: `${theme('spacing.9')}`,
                    columnGap: `${theme('spacing.6')}`,
                    gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
                },
            },
        },
    })
})
