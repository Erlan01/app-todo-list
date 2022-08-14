import { forwardRef } from "react";
import styled from "styled-components"
import { cardCss } from "./TodoCard"


const TodoInput = forwardRef((props, ref) =>
(<TextArea ref={ref} {...props} placeholder="Write TODO!"></TextArea>))

TodoInput.displayName="TodoInput";

export default TodoInput

const TextArea = styled.textarea`
    ${cardCss}
    height: 94px;
    width: 100%;
    resize: none;
   
    ::placeholder{
        font-family: "Poppins Medium";
        font-style: normal;
        font-size: 12px;
        line-height: 18px;
        color: rgba(0,0,0,0.38);
    }

    :focus{
        border: none;
    }
`;