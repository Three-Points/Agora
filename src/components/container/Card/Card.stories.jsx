import Card from '.'

export default {
    title: 'Components/Containers/Card',
    component: Card,
    args: {
        image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        autor: 'Paeolo Hiram',
        publishAt: 'Mar 21 (3 minutes ago)',
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
        autor: {
            name: 'Autor',
            description: 'Autor of the post',
            control: {
                type: 'text',
            },
        },
        publishAt: {
            name: 'Date of publish post',
            description: 'Date in timestamp',
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

export const Default = (args) => <Card {...args} />
