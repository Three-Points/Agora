import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
    plugins: [react()],
    base: '/Agora',
    optimizeDeps: {
        include: ['jest-mock'],
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, '/src'),
            '@assets': resolve(__dirname, '/src/assets'),
            '@baseComponents': resolve(__dirname, '/src/components/base'),
            '@containerComponents': resolve(
                __dirname,
                '/src/components/container'
            ),
            '@controllers': resolve(__dirname, '/src/controllers'),
            '@layouts': resolve(__dirname, '/src/layouts'),
            '@services': resolve(__dirname, '/src/services'),
            '@server': resolve(__dirname, '/src/server'),
            '@pages': resolve(__dirname, '/src/pages'),
            '@views': resolve(__dirname, '/src/views'),
        },
    },
})
