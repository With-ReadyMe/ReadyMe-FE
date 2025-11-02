import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    background: linear-gradient(180deg, #f8f9ff 0%, #e8f0ff 100%);
    padding-top: 80px;
`;

export const FormWrapper = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 60px;
    background-color: #fff;
    border-radius: 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

export const FormRow = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 24px;
    margin-bottom: 32px;
`;

export const FormLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 140px;
    font-size: 16px;
    font-weight: 700;
    color: #000;
    padding-top: 12px;

    svg {
        width: 20px;
        height: 20px;
    }
`;

export const InputWrapper = styled.div`
    flex: 1;
    display: flex;
    gap: 12px;
    align-items: center;
`;

export const Input = styled.input`
    flex: 1;
    padding: 12px 20px;
    border: 1px solid #e5e5e5;
    border-radius: 12px;
    font-size: 14px;
    outline: none;
    font-family: inherit;

    &::placeholder {
        color: #aaa;
    }

    &:focus {
        border-color: #4a90e2;
    }
`;

export const LargeInput = styled(Input)`
    background-color: #f8f9ff;
    border-color: #d5e0ff;
`;

export const PrivacyToggle = styled.div`
    display: flex;
    gap: 8px;
`;

export const ToggleButton = styled.button<{ $active: boolean }>`
    width: 40px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid ${(props) => (props.$active ? "#4a90e2" : "#e5e5e5")};
    background-color: ${(props) => (props.$active ? "#e8f0ff" : "#fff")};
    color: ${(props) => (props.$active ? "#4a90e2" : "#999")};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    &:hover {
        border-color: #4a90e2;
    }

    svg {
        width: 20px;
        height: 20px;
    }
`;

export const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-left: auto;
    padding: 14px 32px;
    background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
    color: #fff;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(74, 144, 226, 0.4);
    }

    &:active {
        transform: translateY(0);
    }

    svg {
        width: 20px;
        height: 20px;
    }
`;
