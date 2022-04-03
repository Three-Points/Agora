import Logo from '@assets/logo.svg'
import ClipLoader from 'react-spinners/ClipLoader'

const loader = `fixed inset-0 z-10
                flex flex-col justify-center items-center`
const loader_container = `mb-3 flex flex-col`
const loader_text = `text-primary-bold font-normal text-2xl`

export default () => (
    <div className={loader}>
        <div className={loader_container}>
            <img src={Logo} alt="logo" />
            <span className={loader_text}>Loading</span>
        </div>
        <ClipLoader color="#657172" loading="true" size={35} />
    </div>
)
