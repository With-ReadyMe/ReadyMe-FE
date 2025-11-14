import styled from "styled-components";

export const Wrapper = styled.div<{
    width: string;
    height: string;
}>`
    position: relative;
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
    }
`;
