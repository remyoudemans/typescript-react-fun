import * as React from 'react'
import { ChapterContent } from './chapter-content'
import { ChapterInput } from './chapter-input'

interface ChapterProps {
    chapterIndex: number
    title: string
    chapterText: string
    unsubmittedChapterText: string
    onChapterTextChange: (value: string, index: number) => void
    onChapterTextSubmit: (index: number) => void
}

export const Chapter: React.SFC<ChapterProps> = ({
    chapterIndex,
    title,
    chapterText,
    unsubmittedChapterText,
    onChapterTextChange,
    onChapterTextSubmit
}) => (
    <>
        <h3>Chapter {chapterIndex + 1}: {title}</h3>
        {chapterText
            ? <ChapterContent
                text={chapterText}
              />
            : <ChapterInput
                index={chapterIndex}
                text={unsubmittedChapterText}
                onTextChange={onChapterTextChange}
                onTextSubmit={onChapterTextSubmit}
              />
        }
    </>
)