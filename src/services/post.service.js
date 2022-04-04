import ErrorController from '@controllers/Error.controller'

/**
 * @function
 * @description Return all posts in the database (max. 10 posts).
 * @param {string} [title] Post title (optional).
 * @return Author */
export const getPosts = async (title = '') => {
    try {
        return await fetch(`/api/posts?title=${title}`)
            .then((res) => res.json())
            .then((data) => data.posts)
    } catch (error) {
        throw new ErrorController('CLIENT', error.message)
    }
}
/**
 * @function
 * @description Like or dislike a post.
 * @return Author */
export const updatePost = async (id) => {
    try {
        return await fetch(`/api/post/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ post: { like: true } }),
        })
            .then((res) => res.json())
            .then((data) => data.post)
    } catch (error) {
        throw new ErrorController('CLIENT', error.message)
    }
}
