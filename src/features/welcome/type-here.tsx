import React, { useState, useRef } from 'react'

import { changeItemAtIndex, funcIf } from '../../utils'
import { TextInput } from '../../components/text-input'
import { Chapter } from './chapter'
import { Button } from '../../components/button'
import { Welcome } from '../../store/modules'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Stories } from '../../store/modules/welcome'

import { Root } from '../../store/modules'

interface TypeHereStateProps {
	exampleStories: Stories
	isLoading: boolean
}

interface TypeHereDispatchProps {
	requestExampleStories: typeof Welcome.ActionCreators.requestExampleStories
}

type TypeHereProps = TypeHereStateProps & TypeHereDispatchProps

const TypeHereComponent: React.FunctionComponent<TypeHereProps> = ({
    exampleStories,
    isLoading,
    requestExampleStories
}) => {
    const [inputValue, setInputValue] = useState('')
    const [titleCount, setTitleCount] = useState(0)
    const [titles, setTitles] = useState<string[]>([])
    const [chapterContents, setChapterContents] = useState<string[]>([])
    const [unsubmittedChapterContents, setUnsubmittedChapterContents] = useState<string[]>([])


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
				{exampleStories &&
					exampleStories.titles.length === 0 &&
					isLoading && <p>Be patient! It's loading.</p>}
				{exampleStories &&
					exampleStories.titles.length > 0 &&
					!isLoading &&
					exampleStories.titles.map((title: string, index: number) => (
						<div key={`example-story-${index}`}>
							<h3>{title}</h3>
							<p>{exampleStories.chapters[index]}</p>
						</div>
					))}
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

const mapStateToProps = (state: Root.State): TypeHereStateProps => ({
	exampleStories: state.welcome.exampleStories,
	isLoading: state.welcome.isLoading
})

const mapDipatchToProps = (
	dispatch: Dispatch<any, TypeHereDispatchProps>
): TypeHereDispatchProps =>
	bindActionCreators(
		{
			requestExampleStories: Welcome.ActionCreators.requestExampleStories
		},
		dispatch
	)

export const TypeHere = connect(
	mapStateToProps,
	mapDipatchToProps
)(TypeHereComponent)
