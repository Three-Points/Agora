import { useState } from 'react'
import Heart from '@assets/icons/heart.svg'
import { updatePost } from '@services/post.service'

const button = `w-[75px] p-3
                grid grid-flow-col place-items-center gap-x-1
                text-white
                bg-red rounded-md`

export default ({ postID, likesCount = 0 }) => {
    const [count, setCount] = useState(likesCount)
    const handleLikes = async () => {
        const post = await updatePost(postID)
        setCount(post?.likes)
    }

    return (
        <button className={button} onClick={handleLikes}>
            <img src={Heart} alt="heart" />
            <span>
                {count >= 1000 ? `${Math.round(count / 10) / 100}K` : count}
            </span>
        </button>
    )
}
