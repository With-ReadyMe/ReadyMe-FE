import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const LabelRow = styled.div`
    display: flex;
    align-items: baseline;
    gap: 0.5em;
    margin-bottom: 4px;
`;

export const Label = styled.h4`
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 600;
    color: #1f2937;
`;

export const HelpText = styled.span`
    font-size: 12px;
    color: #9ca3af;
`;

export const TagsContainer = styled.div`
    margin-top: 4px;
`;

export const TagsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

export const Tag = styled.div<{ color: string }>`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    color: white;
    background: ${(props) => {
        switch (props.color) {
            case "pink":
                return "linear-gradient(135deg, #FF71AF 0%, #FF7DB7 100%)";
            case "yellow":
                return "linear-gradient(135deg, #FFC72F 0%, #FFCE45 100%)";
            case "green":
                return "linear-gradient(135deg, #89C37D 0%, #92C988 100%)";
            case "blue":
                return "linear-gradient(135deg, #69BBFF 0%, #76C2FF 100%)";
            default:
                return "linear-gradient(135deg, #69BBFF 0%, #76C2FF 100%)";
        }
    }};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    span {
        cursor: pointer;
        white-space: nowrap;
    }

    input {
        background: transparent;
        border: none;
        outline: none;
        color: white;
        font-size: 13px;
        font-weight: 600;
        min-width: 40px;
        max-width: 100px;
        width: 100%;

        &::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }
    }

    button {
        background: none;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        padding: 0;
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.8;
        transition: opacity 0.2s ease;
        flex-shrink: 0;

        &:hover {
            opacity: 1;
        }
    }
`;

export const AddTagButton = styled.button<{ color: string }>`
    padding: 8px 14px;
    border-radius: 8px;
    background: ${(props) => {
        switch (props.color) {
            case "pink":
                return "linear-gradient(135deg, #FF71AF 0%, #FF7DB7 100%)";
            case "yellow":
                return "linear-gradient(135deg, #FFC72F 0%, #FFCE45 100%)";
            case "green":
                return "linear-gradient(135deg, #89C37D 0%, #92C988 100%)";
            case "blue":
                return "linear-gradient(135deg, #69BBFF 0%, #76C2FF 100%)";
            default:
                return "linear-gradient(135deg, #69BBFF 0%, #76C2FF 100%)";
        }
    }};
    border: none;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    svg {
        width: 16px;
        height: 16px;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    &:active {
        transform: scale(0.95);
    }
`;
