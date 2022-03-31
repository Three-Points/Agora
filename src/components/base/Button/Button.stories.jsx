import ButtonLike from './ButtonLike'

export default {
    title: 'Components/Base/Button/ButtonLike',
    component: ButtonLike,
    args: {
        likesCount: 4300,
    },
    argTypes: {
        likesCount: {
            name: 'likesCount',
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

export const Default = (args) => <ButtonLike {...args} />
