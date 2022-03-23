import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
    plugins: [react()],
    base: '/Agora/',
    resolve: {
        alias: {
            '@': resolve(__dirname, '/src'),
            '@assets': resolve(__dirname, '/src/assets'),
            '@baseComponents': resolve(__dirname, '/src/components/base'),
            '@containerComponents': resolve(
                __dirname,
                '/src/components/container'
            ),
            '@layout': resolve(__dirname, '/src/layout'),
            '@router': resolve(__dirname, '/src/router'),
            '@views': resolve(__dirname, '/src/views'),
        },
    },
})
