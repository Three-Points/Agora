import { belongsTo, createServer, hasMany, Model, Serializer } from 'miragejs'

import authors from './mocks/author.mock'
import posts from './mocks/post.mock'

export default function ({ environment }) {
    console.log('miragejs server')
    return createServer({
        environment,
        models: {
            author: Model.extend({
                post: hasMany(),
            }),
            post: Model.extend({
                author: belongsTo(),
            }),
        },
        serializers: {
            post: Serializer.extend({
                include: ['author'],
                embed: true,
            }),
        },

        seeds(server) {
            posts.forEach((post, index) => {
                server.create('post', {
                    ...post,
                    author: server.create('author', authors[index]),
                })
            })
            server.create('author', authors[4])
        },

        routes() {
            /**
             * @name Get Author by Post
             * @description Find an author by post. */
            this.get('/api/author/:id', ({ authors }, { params }) => {
                const { id: authorID } = params
                return authors.find(authorID)
            })
            /**
             * @name Get All Post
             * @description Find an author by post. */
            this.get('/api/posts', ({ posts }, { queryParams }) => {
                const { title } = queryParams
                return !title
                    ? posts.all()
                    : posts.where((post) => post.title.includes(title))
            })
            /**
             * @name Get Author by Post
             * @description Find an author by post. */
            this.patch(
                '/api/post/:id',
                ({ db, posts }, { params, requestBody }) => {
                    const { id: postID } = params
                    const post = db.posts.find(postID)
                    const payload = JSON.parse(requestBody).post
                    return payload.like && post.likes >= 0
                        ? posts.find(postID).update({ likes: ++post.likes })
                        : posts.find(postID).update({ likes: --post.likes })
                }
            )
        },
    })
}
