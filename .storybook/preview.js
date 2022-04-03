import '@/main.css'
import server from '@server/server'

server({ environment: process.env.NODE_ENV })

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
