import Loader from '@baseComponents/Loader/index'
import Card from '@containerComponents/Card/index'

const listview = `grid gap-6 grid-cols-1
                    sm:grid-cols-2 xl:grid-cols-3`

const no_content = `fixed inset-0 z-10
                flex flex-col justify-center items-center`
const no_content_container = `flex flex-col`
const no_content_text = `text-primary-bold font-normal text-2xl`

const notContent = (
    <div className={no_content}>
        <div className={no_content_container}>
            <span className={no_content_text}>No posts found</span>
        </div>
    </div>
)

export default ({ posts, loading }) => {
    const renderPosts = () => {
        if (loading) return <Loader />
        if (!posts.length) return notContent
        return posts.map((post, index) => {
            return <Card key={index} {...post} />
        })
    }

    return <div className={listview}>{renderPosts()}</div>
}
