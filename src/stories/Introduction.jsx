import Logo from '@assets/logo.svg'

export default () => (
    <div className="mb-6 flex flex-col items-center">
        <img src={Logo} alt="Logo" width="80" height="80" />
        <h1 className="my-3 text-3xl font-regular text-primary-bold">Agora</h1>
        <p className=" text-xl text-primary text-center">A little blog post</p>
    </div>
)
