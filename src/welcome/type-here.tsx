import * as React from 'react'
import { TextInput } from '../components/text-input/text-input'

export class TypeHere extends React.Component<{}, {}> {
    public state = {
        value: ''
    }
    
    public render() {
        return (
            <TextInput
                placeholder='get typing'
                value={this.state.value}
                onChange={this.onType}
            />
        )
    }
    
    private onType = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ value: e.target.value })
    }
}