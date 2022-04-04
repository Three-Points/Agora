import { useState } from 'react'

import Logo from '@assets/logo.svg'

import { authentication } from '@services/author.service'

const form = `
            w-full h-screen
            md:w-[750px] md:h-[624px] md:p-[186px]
            flex flex-col justify-center`
const form_title = `mb-9
                    flex flex-col items-center
                    text-2xl text-center text-primary-bold`
const field = `flex flex-col`
const field_label = `text-primary flex flex-col`
const field_input = `p-2 mt-1.5
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
    const [login, setLogin] = useState({
        username: '',
        password: '',
    })
    const [isError, setIsError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (login.username && login.password) {
            const response = await authentication(login)
            if (response?.errors) {
                setIsError(true)
            } else {
                debugger
                setIsError(false)
                localStorage.setItem('token', response?.token)
                window.location.href = '/'
            }
        }
    }
    return (
        <div className={form}>
            <div className={form_title}>
                <img src={Logo} alt="Logo" width="75" />
                <span>Welcome to Agora</span>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={field}>
                    <label className={field_label}>
                        Username
                        <input
                            type="text"
                            name="username"
                            className={field_input}
                            minLength={3}
                            maxLength={50}
                            required
                            value={login.username}
                            onChange={(e) =>
                                setLogin({ ...login, username: e.target.value })
                            }
                        />
                    </label>
                </div>
                <div className={field}>
                    <label className={field_label}>
                        Password
                        <input
                            type="password"
                            name="password"
                            className={field_input}
                            minLength={6}
                            maxLength={50}
                            required
                            value={login.password}
                            onChange={(e) =>
                                setLogin({ ...login, password: e.target.value })
                            }
                        />
                    </label>
                </div>
                <button
                    type="submit"
                    className={form_button}
                    onClick={handleSubmit}
                >
                    Login
                </button>
            </form>
            {isError && (
                <div className={message_error}>
                    <span>
                        Username or password is incorrect. Please try again.
                    </span>
                </div>
            )}
        </div>
    )
}
