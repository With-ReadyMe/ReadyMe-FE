import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    background: #f5f7ff;
    padding-top: 80px;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: -10%;
        right: 10%;
        width: 500px;
        height: 500px;
        background: radial-gradient(circle, rgba(200, 218, 255, 0.4) 0%, rgba(200, 218, 255, 0) 70%);
        border-radius: 50%;
        z-index: 0;
    }

    &::after {
        content: "";
        position: absolute;
        bottom: -15%;
        left: 5%;
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, rgba(168, 195, 255, 0.3) 0%, rgba(168, 195, 255, 0) 70%);
        border-radius: 50%;
        z-index: 0;
    }
`;

export const FormWrapper = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 60px;
    background-color: #fff;
    border-radius: 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    position: relative;
    z-index: 1;
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

export const PrivacyToggle = styled.button<{ $active: boolean }>`
    width: 70px;
    height: 36px;
    border-radius: 18px;
    border: none;
    background-color: ${(props) => (props.$active ? "#4a90e2" : "#d1d5db")};
    cursor: pointer;
    position: relative;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    padding: 2px;

    &:hover {
        background-color: ${(props) => (props.$active ? "#357abd" : "#9ca3af")};
    }
`;

export const ToggleCircle = styled.div<{ $active: boolean }>`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
    transform: ${(props) => (props.$active ? "translateX(34px)" : "translateX(0)")};
    color: ${(props) => (props.$active ? "#4a90e2" : "#6b7280")};

    svg {
        width: 18px;
        height: 18px;
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
