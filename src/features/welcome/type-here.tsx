import * as React from 'react'
import { changeItemAtIndex, funcIf } from '../../utils';
import { TextInput } from '../../components/text-input';
import { Chapter } from './chapter';

interface TypeHereState {
    inputValue: string
    titleCount: number
    titles: string[]
    chapterContents: string[]
    unsubmittedChapterContents: string[]
}

export class TypeHere extends React.Component<{}, {}> {
    public state: TypeHereState = {
        inputValue: '',
        titleCount: 0,
        titles: [],
        chapterContents: [],
        unsubmittedChapterContents: []
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
        this.setState((prevState: TypeHereState) => ({
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
        }))
    }

    public render() {
        const { inputValue, titles, chapterContents, unsubmittedChapterContents } = this.state
        return (
            <>
                <TextInput
                    placeholder={`title of chapter ${titles.length + 1}`}
                    value={inputValue}
                    onChange={this.onType}
                    onEnter={this.onTitleSubmit}
                />
                <button onClick={this.onTitleSubmit}>Click me!</button>
                {titles.length ?
                    titles.map((title, index) =>
                        <Chapter
                            key={`submissions-chapter-${index}`}
                            title={title}
                            chapterIndex={index}
                            chapterText={chapterContents[index]}
                            unsubmittedChapterText={unsubmittedChapterContents[index]}
                            onChapterTextChange={this.onChapterContentChange}
                            onChapterTextSubmit={this.onChapterContentSubmit}
                        />
                    )
                    : null
                }
            </>
        )
    }
    
}