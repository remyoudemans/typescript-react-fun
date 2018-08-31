import * as React from 'react'
import { isDefined, funcIf } from '../utils'
import { Input } from './input'

interface TextInputProps {
    value: string
    placeholder: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    onEnter?: () => void
}

export const TextInput: React.SFC<TextInputProps> = ({
    value,
    placeholder,
    onChange,
    onEnter,
}) => {
    const onKeyDown = !isDefined(onEnter)
        ? undefined
        : (e: React.KeyboardEvent) => {
            funcIf(e.keyCode === 13, onEnter as () => void)
        }

    return (
        <Input 
            type='text' 
            placeholder={placeholder}
            value={value} 
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    )
}