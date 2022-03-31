import Comment from '@assets/icons/comment.svg'
import ButtonLike from '@baseComponents/Button/ButtonLike'
import Loader from '@baseComponents/Loader/index'

const card = `w-full pb-6
            grid gap-y-6 grid-rows-[370px_1fr]
            bg-white rounded shadow`
const card_image = `w-full h-full
                    object-cover rounded-t-lg`
const card_content = `px-6
                    grid gap-y-6`
const card_content_description = `text-primary-bold font-normal text-lg`
const card_header = `flex flex-col`
const card_header_autor = `text-primary-bold font-normal text-lg`
const card_header_date = `text-primary font-light text-base`
const card_footer = `flex items-center`
const card_footer_comments = `mx-3 grow text-primary`

export default ({
    image,
    autor,
    publishAt,
    description,
    comments = 0,
    likes = 0,
}) => (
    <div className={card}>
        {!image ? (
            <Loader />
        ) : (
            <img className={card_image} src={image} alt="Image Card" />
        )}
        <div className={card_content}>
            <div className={card_header}>
                <span className={card_header_autor}>{autor}</span>
                <span className={card_header_date}>{publishAt}</span>
            </div>
            <span className={card_content_description}>{description}</span>
            <div className={card_footer}>
                <img src={Comment} alt="Comment icon" />
                <span className={card_footer_comments}>
                    Comments ({comments})
                </span>
                <ButtonLike likesCount={likes} />
            </div>
        </div>
    </div>
)
