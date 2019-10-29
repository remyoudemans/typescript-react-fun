import styled from 'react-emotion'

interface TextProps {
	italic?: boolean
	tiny?: boolean
    cursor?: string
}

export const Text = styled("p")(({ italic, tiny, cursor }: TextProps) => ({
  fontStyle: italic ? "italic" : undefined,
    fontSize: tiny ? 9 : 12,
    cursor: cursor || 'default'
}));
