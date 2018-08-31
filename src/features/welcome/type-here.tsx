import * as React from 'react'
import { changeItemAtIndex, funcIf } from '../../utils';
import { TextInput } from '../../components/text-input/text-input';

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

    private onChangeUnsubmittedChapterContent = (value: string, index: number) => {
        this.setState((prevState: TypeHereState) => ({
            ...prevState,
            unsubmittedChapterContents: changeItemAtIndex(
                prevState.unsubmittedChapterContents,
                index,
                value
            )
        }))
    }

    public render() {
        const { inputValue, titles, chapterContents, unsubmittedChapterContents } = this.state
        return (
            <div>
                <TextInput
                    placeholder='get typing'
                    value={inputValue}
                    onChange={this.onType}
                />
                <button onClick={this.onTitleSubmit}>Click me!</button>
                {titles.length ?
                    titles.map((title, index) =>
                        <div key={`submissions-chapter-${index}`}>
                            <h3>Chapter {index}: {title}</h3>
                            <p>
                                {chapterContents[index]
                                    ? chapterContents
                                    : <TextInput
                                        placeholder='tell me the story'
                                        value={unsubmittedChapterContents[index]}
                                        onChange={(e) => {
                                            this.onChangeUnsubmittedChapterContent(e.target.value, index)
                                        }}
                                      />
                                }
                            </p>
                        </div>
                    )
                    : null
                }
            </div>
        )
    }
    
}