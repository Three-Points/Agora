import { Link } from 'react-router-dom'

import Agora from '@assets/icons/agora.svg'
import User from '@assets/icons/user.svg'

const navbar = `flex justify-between items-end`
const navbar_login = `cursor-pointer`

export default () => (
    <header className={navbar}>
        <Link to="/">
            <img src={Agora} alt="Agora" />
        </Link>
        <Link to="/profile">
            <img className={navbar_login} src={User} alt="User" />
        </Link>
    </header>
)
