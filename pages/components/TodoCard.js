import styled, { css } from "styled-components"
import Image  from "next/image"

const TodoCard = ({description, date, doubleClicked, status}) => {
    return(
        <Wrapper>
            <p className="description">{description}</p>
            <p className="date">{date}</p>
                <ImageWrapper status={status}>
                    <Image 
                    src="/arrow.png" 
                    alt="arrow"
                    width="20px"
                    height="20px"
                    onDoubleClick={doubleClicked}
                    />
                </ImageWrapper>
        </Wrapper>
    )
}

export default TodoCard

export const cardCss = css`
    background-color: #FFFF;
    border: 1px solid #666666;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 8px;
`;

const Wrapper = styled.div`
    ${cardCss}
    margin-bottom: 16px;
    position: relative;

    :last-child{
        margin: 0;
    }

    .description{
        font-family: "Poppins Medium";
        font-size: 12px;
        line-height: 18px;
        font-style: normal;
        color: black;
    }

    .date{
        font-family: "Poppins Regular";
        font-size: 12px;
        line-height: 18px;
        color: gray;
    }
`;

const ImageWrapper = styled.div`
    position: absolute;
    bottom: 8px;
    right: 8px;

    transform: ${({status}) => status === "completed" ? "rotateY(180deg)" : ""};
`;