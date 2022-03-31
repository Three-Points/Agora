import Card from '@containerComponents/Card/index'

const listview = `grid gap-6 grid-cols-1
                    sm:grid-cols-2 xl:grid-cols-3`

const posts = [
    {
        image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        autor: 'Paeolo Hiram',
        publishAt: 'Mar 21 (3 minutes ago)',
        description:
            "Some quick example to build on the card title and make up the bulk the card's content.",
        comments: 15,
        likes: 4300,
    },
    {
        image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        autor: 'Paeolo Hiram',
        publishAt: 'Mar 21 (3 minutes ago)',
        description:
            "Some quick example to build on the card title and make up the bulk the card's content.",
        comments: 15,
        likes: 4300,
    },
    {
        image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        autor: 'Paeolo Hiram',
        publishAt: 'Mar 21 (3 minutes ago)',
        description:
            "Some quick example to build on the card title and make up the bulk the card's content.",
        comments: 15,
        likes: 4300,
    },
    {
        image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        autor: 'Paeolo Hiram',
        publishAt: 'Mar 21 (3 minutes ago)',
        description:
            "Some quick example to build on the card title and make up the bulk the card's content.",
        comments: 15,
        likes: 4300,
    },
    {
        image: '',
        autor: 'Paeolo Hiram',
        publishAt: 'Mar 21 (3 minutes ago)',
        description:
            "Some quick example to build on the card title and make up the bulk the card's content.",
        comments: 15,
        likes: 4300,
    },
]

export default () => {
    return (
        <div className={listview}>
            {posts.map((post, index) => (
                <Card key={index} {...post} />
            ))}
        </div>
    )
}
