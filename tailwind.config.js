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
            red: {
                dark: '#B2303E',
                DEFAULT: '#F86A61',
                light: '#FED3C0',
            },
            blue: '#396EB0',
            white: '#FFFFFF',
            shadow: '#3b425240',
        },
        extend: {
            boxShadow: {
                DEFAULT: '0px 4px 4px #403B4252',
            },
        },
    },
    plugins: [
        require('./src/theme/index.base'),
        require('./src/theme/index.components'),
    ],
}
