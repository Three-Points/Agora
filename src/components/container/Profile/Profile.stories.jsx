import Profile from '.'

export default {
    title: 'Components/Containers/Profile',
    component: Profile,
    args: {
        avatar: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        username: 'paeolohiram',
        description:
            "Some quick example to build on the card title and make up the bulk the card's content.",
    },
    argTypes: {
        avatar: {
            name: 'Avatar',
            description: 'Profile avatar',
            control: {
                type: 'text',
            },
        },
        username: {
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
    },
}

export const Default = (args) => <Profile {...args} />
