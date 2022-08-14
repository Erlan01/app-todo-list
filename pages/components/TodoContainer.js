import styled from "styled-components"

const TodoContainer = (props) =>{
    return(
        <Wrapper>
        <Title>
            {props.title}
        </Title>
            {props.children}
        </Wrapper>
    )
}
export default TodoContainer

const Wrapper = styled.div`
    width: 300px;
    padding: 16px;
    background: #F9F9F9;
    border: 1px solid #E5E5E5;
    box-size: border-box;
    border-radius: 4px;
`;

const Title = styled.div`
    font-family: "Poppins Medium";
    font-size: 16px;
    line-height: 24px;
    font-style: normal;
    color: black;
    margin-bottom: 16px;
`;