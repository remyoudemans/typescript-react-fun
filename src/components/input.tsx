import styled from 'react-emotion'

export const Input = styled("input")({
         WebkitBorderRadius: "10px",
         MozBorderRadius: "10px",
         borderRadius: "10px",
         border: "1px solid #cccccc",
         height: "20px",
         padding: "0 0 0 5px",
         " :focus": {
           outlineWidth: 0,
           boxShadow: "0 0 0 1pt #92c7f3"
         }
       });
