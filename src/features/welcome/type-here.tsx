import React, { useState, useRef, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { changeItemAtIndex, funcIf } from '../../utils'
import { TextInput } from '../../components/text-input'
import { Chapter } from './chapter'
import { Button } from '../../components/button'
import { Welcome } from '../../store/modules'
import { ExampleStories } from './example-stories'

export const TypeHere: React.FunctionComponent = () => {
    const [inputValue, setInputValue] = useState('')
    const [titleCount, setTitleCount] = useState(0)
    const [titles, setTitles] = useState<string[]>([])
    const [chapterContents, setChapterContents] = useState<string[]>([])
    const [unsubmittedChapterContents, setUnsubmittedChapterContents] = useState<string[]>([])

    const dispatch = useDispatch()

    const requestExampleStories = useCallback(
        () => dispatch(Welcome.ActionCreators.requestExampleStories()),
        [dispatch]
    )

	const titleInputRef = useRef<HTMLInputElement>(null)

	const focusOnTitleInput = () => {
		const inputRef = titleInputRef.current as HTMLInputElement
		inputRef.focus()
	}

	const onType = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

	const submitTitle = () => {
        setInputValue('')
        setTitleCount(titleCount + 1)
        setTitles(titles.concat(inputValue))
        setChapterContents(chapterContents.concat(''))
        setUnsubmittedChapterContents(unsubmittedChapterContents.concat(''))
	}

	const onTitleSubmit = () => {
		funcIf(inputValue !== '', submitTitle)
	}

    const onChapterContentChange = (value: string, index: number) => {
        setUnsubmittedChapterContents(changeItemAtIndex(
            unsubmittedChapterContents,
            index,
            value
        ))
    }

	const onChapterContentSubmit = (index: number) => {
        setChapterContents(changeItemAtIndex(
            chapterContents,
            index,
            unsubmittedChapterContents[index]
        ))
        setUnsubmittedChapterContents(changeItemAtIndex(
            unsubmittedChapterContents,
            index,
            ''
        ))
        focusOnTitleInput()
	}

    const makeChapterContentEditable = (index: number) => {
        setChapterContents(changeItemAtIndex(chapterContents, index, ''))
        setUnsubmittedChapterContents(changeItemAtIndex(
            unsubmittedChapterContents,
            index,
            chapterContents[index]
        ))
    }

		return (
			<>
				<TextInput
					innerRef={titleInputRef}
					placeholder={`title chapter ${titles.length + 1}`}
					value={inputValue}
					onChange={onType}
					onEnter={onTitleSubmit}
				/>
				<Button onClick={onTitleSubmit} text="Click me!" />
				<Button
                    onClick={requestExampleStories}
					text="Request example stories?"
				/>
                <ExampleStories />
				{titles.map((title, index) => (
					<Chapter
						key={`submissions-chapter-${index}`}
						title={title}
						chapterIndex={index}
						chapterText={chapterContents[index]}
						unsubmittedChapterText={unsubmittedChapterContents[index]}
						onChapterTextChange={onChapterContentChange}
						onChapterTextSubmit={onChapterContentSubmit}
						makeChapterContentEditable={makeChapterContentEditable}
					/>
				))}
			</>
		)
}
