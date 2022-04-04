import ErrorController from '@controllers/Error.controller'

/**
 * @function
 * @description Find an author by post.
 * @return Author */
export const getAuthor = async ({ authorID }) => {
    try {
        return await fetch(`/api/author/${authorID}`)
            .then((res) => res.json())
            .then(({ author }) => author)
    } catch (error) {
        throw new ErrorController('CLIENT', error.message)
    }
}
/**
 * @function
 * @description Get current user.
 * @return Author */
export const getProfile = async () => {
    try {
        return await fetch('/api/author/5')
            .then((res) => res.json())
            .then(({ author }) => author)
    } catch (error) {
        throw new ErrorController('CLIENT', error.message)
    }
}
