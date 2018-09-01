import styled from 'react-emotion'
import { nicerBorderStyles } from "./nicer-border";

export const Input = styled("input")({
         WebkitBorderRadius: "10px",
         MozBorderRadius: "10px",
         borderRadius: "10px",
         border: "1px solid #cccccc",
         height: "20px",
         padding: "0 0 0 5px",
         margin: "0 10px 0 10px",
         ...nicerBorderStyles
       });
