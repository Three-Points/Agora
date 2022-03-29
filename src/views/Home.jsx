import logo from '@assets/logo.svg'

// import { useState } from 'react'

export default () => {
    // const [count, setCount] = useState(0)

    return (
        <div className="splash items-center">
            <img src={logo} className="h-[40vmin]" alt="logo" />
            <h1 className="text-3xl text-primary-bold font-bold">Agora</h1>
        </div>
    )
}
