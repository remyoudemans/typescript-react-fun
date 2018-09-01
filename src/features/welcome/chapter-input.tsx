import * as React from 'react'
import { TextInput } from '../../components/text-input'
import { Button } from "../../components/button";

interface ChapterInputProps {
	index: number
	text: string
	onTextSubmit: (index: number) => void
	onTextChange: (content: string, index: number) => void
}

export const ChapterInput: React.SFC<ChapterInputProps> = ({ index, text, onTextSubmit, onTextChange }) => {
         const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onTextChange(e.target.value, index);
         };
         const onSubmit = (e: React.MouseEvent<HTMLElement>) => {
    onTextSubmit(index);
         };
         const onEnter = () => {
           onTextSubmit(index);
         };
         return <>
             <TextInput placeholder="tell me the story" value={text} onChange={onChange} onEnter={onEnter} />
             <Button primary onClick={onSubmit} text="Submit" />
           </>;
       };
