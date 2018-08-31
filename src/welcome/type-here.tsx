import * as React from 'react'
import { TextInput } from '../components/text-input/text-input'

interface ITypeHereState {
    inputValue: string
    submissionCount: number
    submissions: string[]
}

export class TypeHere extends React.Component<{}, {}> {
    public state: ITypeHereState = {
        inputValue: '',
        submissionCount: 0,
        submissions: []
    }

    private onType = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ inputValue: e.target.value })
    }

    private onSubmit = () => {
        this.setState((prevState: ITypeHereState) => ({
            inputValue: '',
            submissionCount: prevState.submissionCount + 1,
            submissions: prevState.submissions.push(prevState.inputValue)
        }))

    }
    
    public render() {
        const { inputValue, submissions } = this.state
        return (
            <div>
                <TextInput
                    placeholder='get typing'
                    value={inputValue}
                    onChange={this.onType}
                />
                <button onClick={this.onSubmit}/>
                {submissions.map((submission, index) =>
                    <div key={`submissions-chapter-${index}`}>
                        <h3>Chapter {index}</h3>
                        <p>{submission}</p>
                    </div>
                )}
            </div>
        )
    }

    
}