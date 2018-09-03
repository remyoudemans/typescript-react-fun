import * as React from 'react'
import { changeItemAtIndex, funcIf } from '../../utils'
import { TextInput } from '../../components/text-input'
import { Chapter } from './chapter'
import { Button } from '../../components/button'
import { Welcome } from '../../store/modules'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Stories } from '../../store/modules/welcome'

import { Root } from '../../store/modules'

interface TypeHereState {
	inputValue: string
	titleCount: number
	titles: string[]
	chapterContents: string[]
	unsubmittedChapterContents: string[]
}

interface TypeHereStateProps {
	exampleStories: Stories
	isLoading: boolean
}

interface TypeHereDispatchProps {
	requestExampleStories: typeof Welcome.ActionCreators.requestExampleStories
}

type TypeHereProps = TypeHereStateProps & TypeHereDispatchProps

class TypeHereClass extends React.Component<TypeHereProps> {
	public state: TypeHereState = {
		inputValue: '',
		titleCount: 0,
		titles: [],
		chapterContents: [],
		unsubmittedChapterContents: []
	}

	private titleInputRef = React.createRef<HTMLInputElement>()

	private focusOnTitleInput = () => {
		const inputRef = this.titleInputRef.current as HTMLInputElement
		inputRef.focus()
	}

	private onType = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ inputValue: e.target.value })
	}

	private submitTitle = () => {
		this.setState((prevState: TypeHereState) => ({
			inputValue: '',
			titleCount: prevState.titleCount + 1,
			titles: [...prevState.titles, prevState.inputValue],
			chapterContents: [...prevState.chapterContents, ''],
			unsubmittedChapterContents: [...prevState.unsubmittedChapterContents, '']
		}))
	}

	private onTitleSubmit = () => {
		funcIf(this.state.inputValue !== '', this.submitTitle)
	}

	private requestExampleStories = () => {
		this.props.requestExampleStories()
	}

	private onChapterContentChange = (value: string, index: number) => {
		this.setState((prevState: TypeHereState) => ({
			unsubmittedChapterContents: changeItemAtIndex(
				prevState.unsubmittedChapterContents,
				index,
				value
			)
		}))
	}

	private onChapterContentSubmit = (index: number) => {
		this.setState(
			(prevState: TypeHereState) => ({
				chapterContents: changeItemAtIndex(
					prevState.chapterContents,
					index,
					prevState.unsubmittedChapterContents[index]
				),
				unsubmittedChapterContents: changeItemAtIndex(
					prevState.unsubmittedChapterContents,
					index,
					''
				)
			}),
			this.focusOnTitleInput
		)
	}

	private makeChapterContentEditable = (index: number) => {
		this.setState((prevState: TypeHereState) => ({
			chapterContents: changeItemAtIndex(prevState.chapterContents, index, ''),
			unsubmittedChapterContents: changeItemAtIndex(
				prevState.unsubmittedChapterContents,
				index,
				prevState.chapterContents[index]
			)
		}))
	}

	public render() {
		const { isLoading, exampleStories } = this.props
		const {
			inputValue,
			titles,
			chapterContents,
			unsubmittedChapterContents
		} = this.state
		return (
			<>
				<TextInput
					innerRef={this.titleInputRef}
					placeholder={`title chapter ${titles.length + 1}`}
					value={inputValue}
					onChange={this.onType}
					onEnter={this.onTitleSubmit}
				/>
				<Button onClick={this.onTitleSubmit} text="Click me!" />
				<Button
					onClick={this.requestExampleStories}
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
						onChapterTextChange={this.onChapterContentChange}
						onChapterTextSubmit={this.onChapterContentSubmit}
						makeChapterContentEditable={this.makeChapterContentEditable}
					/>
				))}
			</>
		)
	}
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
)(TypeHereClass)
