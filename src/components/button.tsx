import * as React from "react";
import styled from "react-emotion";
import { nicerBorderStyles } from "./nicer-border";

interface ButtonStyleProps {
  primary?: boolean;
}

const primaryStyles: React.CSSProperties = {
  backgroundColor: "#0079CF",
  color: "white"
};

const StyledButton = styled("button")(
  {
    borderRadius: "10px",
    ...nicerBorderStyles
  },
  ({ primary }: ButtonStyleProps) =>
    primary && {
      ...primaryStyles
    }
);

interface BasicButtonProps {
  text: string;
  onClick: React.MouseEventHandler;
}

export const Button: React.SFC<BasicButtonProps & ButtonStyleProps> = ({
  text,
  onClick,
  ...rest
}) => (
  <StyledButton onClick={onClick} {...rest}>
    {text}
  </StyledButton>
);
