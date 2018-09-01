import styled from 'react-emotion'

interface TextProps {
	italic?: boolean
	tiny?: boolean
}

export const Text = styled("p")(({ italic, tiny }: TextProps) => ({
  fontStyle: italic ? "italic" : undefined,
  fontSize: tiny ? 9 : 12
}));
