import * as React from 'react'

interface ITextInputProps {
    value: string
    placeholder: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const TextInput: React.SFC<ITextInputProps> = ({
    value,
    placeholder,
    onChange
}) => (
    <input type='text' placeholder={placeholder} value={value} onChange={onChange} />
)