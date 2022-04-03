import Comment from '@assets/icons/comment.svg'
import ButtonLike from '@baseComponents/Button/ButtonLike'

const card = `w-full pb-6
            grid gap-y-6 grid-rows-[370px_1fr]
            bg-white rounded shadow`
const card_image = `w-full h-full
                    object-cover rounded-t-lg`
const card_content = `px-6
                    grid gap-y-6`
const card_header = `flex flex-col`
const card_title = `text-primary-bold font-normal text-lg`
const card_author = `text-primary font-light text-base cursor-pointer hover:underline`
const card_description = `text-primary-bold font-normal text-lg`
const card_footer = `flex items-center`
const card_comments = `mx-3 grow text-primary cursor-pointer hover:underline`

export default ({ id, image, title, author, description, comments, likes }) => {
    return (
        <div className={card}>
            <img className={card_image} src={image} alt="Image Card" />
            <div className={card_content}>
                <div className={card_header}>
                    <span className={card_title}>{title}</span>
                    <span className={card_author}>@{author?.username}</span>
                </div>
                <span className={card_description}>{description}</span>
                <div className={card_footer}>
                    <img src={Comment} alt="Comment icon" />
                    <span className={card_comments}>Comments ({comments})</span>
                    <ButtonLike postID={id} likesCount={likes} />
                </div>
            </div>
        </div>
    )
}
