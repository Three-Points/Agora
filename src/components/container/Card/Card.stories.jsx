import Card from '.'

export default {
    title: 'Components/Containers/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    args: {
        image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        title: 'Nordic Mountains',
        author: { username: 'paeolohiram' },
        description:
            "Some quick example to build on the card title and make up the bulk the card's content.",
        comments: 15,
        likes: 4300,
    },
    argTypes: {
        image: {
            name: 'Image',
            description: 'The image of the post',
            control: {
                type: 'text',
            },
        },
        title: {
            name: 'Title of publish post',
            description: 'A simple title of the post',
            control: {
                type: 'text',
            },
        },
        autor: {
            name: 'Author',
            description: 'Author of the post',
            control: {
                type: 'text',
            },
        },
        description: {
            name: 'Description',
            description: 'Description of the post',
            control: {
                type: 'text',
            },
        },
        comments: {
            name: 'Counter of comments',
            description:
                'Comments counter button, more than 1000 should be displayed as "1K"',
            control: {
                type: 'number',
            },
            table: {
                defaultValue: {
                    summary: 0,
                },
            },
        },
        likes: {
            name: 'Counter of likes',
            description:
                'Likes counter button, more than 1000 should be displayed as "1K"',
            control: {
                type: 'number',
            },
            table: {
                defaultValue: {
                    summary: 0,
                },
            },
        },
    },
}

export const Default = (args) => (
    <div className="w-[348px]">
        <Card {...args} />
    </div>
)
