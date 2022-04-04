const profile = `fixed inset-0 z-[-10]
                flex place-content-center
                font-normal text-lg text-center`
const profile_wrapper = `w-[348px]
                        flex flex-col justify-center items-center`
const profile_avatar = `w-32 h-32 object-fit rounded-full`
const profile_username = `my-6 text-primary-bold`
const profile_description = `text-primary`

export default ({ avatar, username, description }) => {
    return (
        <div className={profile}>
            <div className={profile_wrapper}>
                <img className={profile_avatar} src={avatar} alt="Image Card" />
                <span className={profile_username}>@{username}</span>
                <span className={profile_description}>{description}</span>
            </div>
        </div>
    )
}
