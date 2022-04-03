import React from 'react'
import ReactDOM from 'react-dom'

import '@/main.css'
import server from '@server/server'
import App from '@layouts/default.jsx'

server({ environment: process.env.NODE_ENV })

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
