import { useState } from 'react'
import Logo from '@assets/logo.svg'

const form = `
            w-full h-screen
            md:w-[750px] md:h-[624px] md:p-[186px]
            flex flex-col justify-center`
const form_title = `mb-9
                    flex flex-col items-center
                    text-2xl text-center text-primary-bold`
const field = `flex flex-col`
const field_label = `text-primary mb-1.5`
const field_input = `p-2
                    rounded-lg border-2 border-primary
                    outline-none
                    text-primary`
const form_button = `w-full p-3 mt-9
                grid grid-flow-col place-items-center gap-x-1
                text-white
                bg-blue rounded-md`
const message_error = `p-2 mt-9
                    rounded-lg border-2 border-red-dark
                    text-red-dark
                    bg-red-light`

export default () => {
    const [isError, setIsError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit')
    }
    return (
        <div className={form}>
            <div className={form_title}>
                <img src={Logo} alt="Logo" width="75" />
                <span>Welcome to Agora</span>
            </div>
            <form>
                <div className={field}>
                    <label htmlFor="name" className={field_label}>
                        Email
                    </label>
                    <input
                        type="email"
                        name="name"
                        className={field_input}
                        minLength={3}
                        maxLength={50}
                        required
                    />
                </div>
                <div className={field}>
                    <label htmlFor="name" className={field_label}>
                        password
                    </label>
                    <input
                        type="password"
                        name="name"
                        className={field_input}
                        minLength={6}
                        maxLength={50}
                    />
                </div>
                <button type="submit" className={form_button}>
                    Login
                </button>
            </form>
            <div
                className={`${message_error} ${isError ? 'visible' : 'hidden'}`}
            >
                Invalid email or password
            </div>
        </div>
    )
}
