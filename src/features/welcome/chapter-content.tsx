import * as React from 'react'
import { Text } from "../../components/text";

interface ChapterContentProps {
	text: string
	makeContentEditable: () => void
}

export const ChapterContent: React.SFC<ChapterContentProps> = ({
  text,
  makeContentEditable
}) => {
  const makeTextEditable = (e: React.MouseEvent) => {
    makeContentEditable();
  };
  return (
    <>
      <Text italic>{text}</Text>
      <Text tiny onClick={makeTextEditable}>
        (change?)
      </Text>
    </>
  );
};
