import Listview from '.'
import { getPosts } from '@services/post.service'

export default {
    title: 'Components/Containers/Listview',
    component: Listview,
}

export const Default = (_, { loaded: { posts } }) => <Listview posts={posts} />
Default.loaders = [
    async () => ({
        posts: await getPosts(),
    }),
]
