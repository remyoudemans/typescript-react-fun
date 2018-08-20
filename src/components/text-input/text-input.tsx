import * as React from 'react'

interface ITextInputProps {
    value: string
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextInput: React.SFC<ITextInputProps> = ({
    value,
    placeholder,
    onChange
}) => (
    <input placeholder={placeholder} value={value} onChange={onChange} />
)