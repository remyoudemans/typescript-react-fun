import * as React from 'react'
import { Text } from '../../components/text';


interface ChapterContentProps {
    text: string
    // index: number
}

export const ChapterContent: React.SFC<ChapterContentProps> = ({
    text,
    // index
}) => {
    return (
        <Text italic>
            {text}
        </Text>
    )
}