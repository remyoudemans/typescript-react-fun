import styled from 'react-emotion'

interface TextProps {
    italic?: boolean
}

export const Text = styled('p')({
    fontSize: 12,
    },
    ({ italic }: TextProps) => ({
        fontStyle: italic ? 'italic' : undefined

    })
)