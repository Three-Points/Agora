import Navbar from '@containerComponents/Navbar'
import Search from '@baseComponents/Search'
import ListView from '@containerComponents/Listview'
import { useEffect, useState } from 'react'
import { getPosts } from '@services/post.service'

export default () => {
    const [posts, setPosts] = useState([])
    const [searching, setSearching] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(async () => {
        if (!posts.length && !searching) {
            setPosts(await getPosts())
        }
        setLoading(false)
    }, [posts])

    const searchPosts = async ({ target }) => {
        setLoading(true)
        setSearching(true)
        const { value: title } = target
        title ? setPosts(await getPosts(title)) : setPosts(await getPosts())
    }

    return (
        <>
            <Navbar />
            <Search handleSearch={searchPosts} />
            <ListView posts={posts} loading={loading} />
        </>
    )
}
