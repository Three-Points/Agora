module.exports = {
    content: ['./src/**/*.{html,js,jsx,mdx}'],
    theme: {
        fontFamily: {
            ubuntu: ['Ubuntu', 'sans-serif'],
        },
        colors: {
            primary: {
                bold: '#657172',
                DEFAULT: '#9BAAAA',
                soft: '#F2F7F6',
            },
            red: '#F86A61',
            white: '#FFFFFF',
        },
    },
    plugins: [
        require('./src/theme/index.base'),
        require('./src/theme/index.components'),
    ],
}
