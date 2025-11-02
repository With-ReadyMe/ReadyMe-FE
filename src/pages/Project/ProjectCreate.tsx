import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import {
    Container,
    FormWrapper,
    FormRow,
    FormLabel,
    InputWrapper,
    Input,
    LargeInput,
    PrivacyToggle,
    ToggleCircle,
    SubmitButton,
} from "../../styled/Project/ProjectCreateStyles";

const ProjectIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6V14M6 10H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const UsersIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M14 17.5V15.8333C14 14.9493 13.6488 14.1014 13.0237 13.4763C12.3986 12.8512 11.5507 12.5 10.6667 12.5H4.33333C3.44928 12.5 2.60143 12.8512 1.97631 13.4763C1.35119 14.1014 1 14.9493 1 15.8333V17.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M7.5 9.16667C9.34095 9.16667 10.8333 7.67428 10.8333 5.83333C10.8333 3.99238 9.34095 2.5 7.5 2.5C5.65905 2.5 4.16667 3.99238 4.16667 5.83333C4.16667 7.67428 5.65905 9.16667 7.5 9.16667Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M19 17.5V15.8333C18.9993 15.0948 18.7044 14.3773 18.1614 13.8174C17.6184 13.2575 16.8611 12.8914 16.0417 12.7833"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M13.375 2.7833C14.1971 2.89047 14.9569 3.25673 15.5016 3.8177C16.0462 4.37868 16.3415 5.09743 16.3415 5.83747C16.3415 6.57751 16.0462 7.29626 15.5016 7.85724C14.9569 8.41821 14.1971 8.78447 13.375 8.89164"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ArchonIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M10 5.83333V10L12.5 11.6667"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const LinkIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8.33333 10.8333C8.69094 11.3118 9.14501 11.7109 9.66642 12.0053C10.1878 12.2997 10.7653 12.4829 11.3605 12.5433C11.9557 12.6038 12.5558 12.5402 13.1249 12.3567C13.6941 12.1732 14.2196 11.8739 14.6667 11.4778L17.1667 8.97778C17.9889 8.12635 18.4462 6.9882 18.4371 5.80666C18.4281 4.62513 17.9534 3.49434 17.1181 2.65505C16.2828 1.81575 15.1549 1.33635 13.9759 1.32272C12.797 1.30909 11.6586 1.76158 10.8056 2.58333L9.16667 4.21667"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M11.6667 9.16667C11.3091 8.68818 10.855 8.28911 10.3336 7.99471C9.81217 7.70031 9.23467 7.51713 8.63949 7.45667C8.04431 7.39621 7.44418 7.45982 6.87502 7.64332C6.30586 7.82682 5.78042 8.12614 5.33333 8.52222L2.83333 11.0222C2.01158 11.8737 1.55426 13.0118 1.5633 14.1933C1.57234 15.3749 2.04703 16.5057 2.88232 17.345C3.71762 18.1843 4.84554 18.6636 6.02449 18.6773C7.20345 18.6909 8.34185 18.2384 9.19444 17.4167L10.825 15.7833"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const LockIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect x="3" y="9" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path
            d="M6 9V6C6 4.93913 6.42143 3.92172 7.17157 3.17157C7.92172 2.42143 8.93913 2 10 2C11.0609 2 12.0783 2.42143 12.8284 3.17157C13.5786 3.92172 14 4.93913 14 6V9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
    </svg>
);

const UnlockIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect x="3" y="9" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path
            d="M6 9V6C6 4.93913 6.42143 3.92172 7.17157 3.17157C7.92172 2.42143 8.93913 2 10 2C11.0609 2 12.0783 2.42143 12.8284 3.17157C13.5786 3.92172 14 4.93913 14 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
    </svg>
);

const RocketIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M10 2L12 8L18 10L12 12L10 18L8 12L2 10L8 8L10 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ProjectCreate = () => {
    const navigate = useNavigate();
    const [isPrivate, setIsPrivate] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        teamSize: "",
        role: "",
        archon: "",
        link1: "",
        link2: "",
        link3: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        console.log("프로젝트 생성:", formData, "공개 여부:", isPrivate);
        navigate("/projects");
    };

    return (
        <>
            <Header />
            <Container>
                <FormWrapper>
                    <FormRow>
                        <FormLabel>
                            <ProjectIcon />
                            프로젝트명
                        </FormLabel>
                        <InputWrapper>
                            <Input
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                placeholder="프로젝트명을 입력해 주세요."
                            />
                            <PrivacyToggle onClick={() => setIsPrivate(!isPrivate)} $active={isPrivate}>
                                <ToggleCircle $active={isPrivate}>
                                    {isPrivate ? <LockIcon /> : <UnlockIcon />}
                                </ToggleCircle>
                            </PrivacyToggle>
                        </InputWrapper>
                    </FormRow>

                    <FormRow>
                        <FormLabel>
                            <UsersIcon />
                            개발 인원
                        </FormLabel>
                        <InputWrapper>
                            <Input
                                name="teamSize"
                                value={formData.teamSize}
                                onChange={handleInputChange}
                                placeholder="숫자만 기입해 주세요."
                            />
                        </InputWrapper>
                    </FormRow>

                    <FormRow>
                        <FormLabel>
                            <UsersIcon />
                            나의 역할
                        </FormLabel>
                        <InputWrapper>
                            <Input
                                name="role"
                                value={formData.role}
                                onChange={handleInputChange}
                                placeholder="ex) 팀장, FE, BE etc."
                            />
                        </InputWrapper>
                    </FormRow>

                    <FormRow>
                        <FormLabel>
                            <ArchonIcon />
                            Archon
                        </FormLabel>
                        <InputWrapper>
                            <LargeInput
                                name="archon"
                                value={formData.archon}
                                onChange={handleInputChange}
                                placeholder="프로젝트에 관한 성보와 가장 중요한 link를 첨부해 주세요!"
                            />
                        </InputWrapper>
                    </FormRow>

                    <FormRow>
                        <FormLabel>
                            <LinkIcon />
                            Link1
                        </FormLabel>
                        <InputWrapper>
                            <Input
                                name="link1"
                                value={formData.link1}
                                onChange={handleInputChange}
                                placeholder="링크로 링크를 넣어주세요. ex) YouTube, Notion, Figma, GitHub etc."
                            />
                        </InputWrapper>
                    </FormRow>

                    <FormRow>
                        <FormLabel>
                            <LinkIcon />
                            Link2
                        </FormLabel>
                        <InputWrapper>
                            <Input
                                name="link2"
                                value={formData.link2}
                                onChange={handleInputChange}
                                placeholder="링크로 링크를 넣어주세요. ex) YouTube, Notion, Figma, GitHub etc."
                            />
                        </InputWrapper>
                    </FormRow>

                    <FormRow>
                        <FormLabel>
                            <LinkIcon />
                            Link3
                        </FormLabel>
                        <InputWrapper>
                            <Input
                                name="link3"
                                value={formData.link3}
                                onChange={handleInputChange}
                                placeholder="링크로 링크를 넣어주세요. ex) YouTube, Notion, Figma, GitHub etc."
                            />
                        </InputWrapper>
                    </FormRow>

                    <SubmitButton onClick={handleSubmit}>
                        프로젝트 생성
                        <RocketIcon />
                    </SubmitButton>
                </FormWrapper>
            </Container>
        </>
    );
};

export default ProjectCreate;
