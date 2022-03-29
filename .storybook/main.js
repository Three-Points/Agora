const { resolve } = require('path')

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'storybook-builder-vite',
    },
    async viteFinal(config) {
        config.resolve.alias = {
            '@': resolve(__dirname, '../src'),
            '@assets': resolve(__dirname, '../src/assets'),
            '@baseComponents': resolve(__dirname, '../src/components/base'),
            '@containerComponents': resolve(
                __dirname,
                '../src/components/container'
            ),
            '@layouts': resolve(__dirname, '../src/layouts'),
            '@pages': resolve(__dirname, '../src/pages'),
            '@utils': resolve(__dirname, '../src/utils'),
        }
        return config
    },
}
