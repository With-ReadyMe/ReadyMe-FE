import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 80px);
    padding: 40px 20px;
    background: linear-gradient(135deg, #e8f4ff 0%, #dce9ff 50%, #d4e3ff 100%);
`;

export const FormCard = styled.div`
    background: white;
    border-radius: 24px;
    padding: 48px 60px;
    max-width: 1000px;
    width: 100%;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
    position: relative;
`;

export const StepIndicator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 48px;
    gap: 16px;
`;

export const Step = styled.div<{ active?: boolean }>`
    display: flex;
    align-items: center;
    gap: 12px;
    opacity: ${(props) => (props.active ? 1 : 0.4)};
    transition: opacity 0.3s ease;
`;

export const StepNumber = styled.div<{ active?: boolean }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${(props) => (props.active ? "#3b82f6" : "#d1d5db")};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 18px;
    transition: background 0.3s ease;
`;

export const StepLabel = styled.span<{ active?: boolean }>`
    font-size: 15px;
    font-weight: ${(props) => (props.active ? 600 : 400)};
    color: ${(props) => (props.active ? "#1f2937" : "#9ca3af")};
    white-space: nowrap;
    transition: all 0.3s ease;
`;

export const StepArrow = styled.span`
    font-size: 24px;
    color: #d1d5db;
    margin: 0 8px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    gap: 60px;
    margin-bottom: 40px;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding-left: 80px;
`;

export const LeftSection = styled.div`
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20px;
`;

export const RightSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 28px;
    max-width: 600px;
`;

export const ProfileImageContainer = styled.div`
    position: relative;
    width: 220px;
    height: 220px;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`;

export const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #9ca3af;
    object-fit: cover;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #9ca3af;
    }
`;

export const CameraIcon = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: white;
    border: 3px solid #f3f4f6;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6b7280;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s ease;
    z-index: 20;

    &:hover {
        background: #f9fafb;
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const ImageMenu = styled.div`
    position: absolute;
    bottom: -10px;
    right: -150px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    z-index: 30;
    min-width: 140px;
`;

export const ImageMenuItem = styled.button`
    width: 100%;
    padding: 12px 16px;
    border: none;
    background: white;
    color: #1f2937;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    text-align: left;
    transition: background 0.2s ease;

    &:hover {
        background: #f3f4f6;
    }

    &:active {
        background: #e5e7eb;
    }

    &:not(:last-child) {
        border-bottom: 1px solid #f3f4f6;
    }
`;

export const RemoveImageButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(239, 68, 68, 0.9);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
    z-index: 10;

    &:hover {
        background: rgba(220, 38, 38, 1);
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const ImageInput = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
`;

export const InputGroup = styled.div`
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

export const TextArea = styled.textarea`
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-size: 14px;
    color: #1f2937;
    resize: vertical;
    font-family: inherit;
    transition: all 0.2s ease;

    &::placeholder {
        color: #d1d5db;
    }

    &:focus {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
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
    gap: 8px;
    padding: 10px 18px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    color: white;
    background: ${(props) => {
        switch (props.color) {
            case "pink":
                return "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)";
            case "yellow":
                return "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)";
            case "green":
                return "linear-gradient(135deg, #10b981 0%, #34d399 100%)";
            case "blue":
                return "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)";
            default:
                return "#3b82f6";
        }
    }};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    span {
        cursor: pointer;
        min-width: 60px;
    }

    input {
        background: transparent;
        border: none;
        outline: none;
        color: white;
        font-size: 14px;
        font-weight: 600;
        min-width: 80px;
        width: auto;

        &::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }
    }

    button {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
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

export const AddTagButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #3b82f6;
    border: none;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);

    &:hover {
        background: #2563eb;
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
`;

export const PreviousButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 32px;
    background: #6b7280;
    border: none;
    border-radius: 12px;
    color: white;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(107, 114, 128, 0.3);

    &:hover {
        background: #4b5563;
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(107, 114, 128, 0.4);
    }

    &:active {
        transform: translateY(0);
    }
`;

export const NextButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 32px;
    background: #3b82f6;
    border: none;
    border-radius: 12px;
    color: white;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    margin-left: auto;

    &:hover {
        background: #2563eb;
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
    }

    &:active {
        transform: translateY(0);
    }
`;
