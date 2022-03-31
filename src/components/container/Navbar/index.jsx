import Agora from '@assets/icons/agora.svg'
import User from '@assets/icons/user.svg'

const navbar = `flex justify-between items-end`
const navbar_login = `cursor-pointer`

export default () => {
    const handleLogin = () => {
        console.log('Login')
    }
    return (
        <header className={navbar}>
            <img src={Agora} alt="Agora" />
            <img
                className={navbar_login}
                src={User}
                alt="User"
                onClick={handleLogin}
            />
        </header>
    )
}
