import { useState } from "react";
import Header from "../../../components/header/header/Header";
import RegistInput from "../../../components/auth/registInput/RegistInput";
import PersonalityTags from "../../../components/portfolio/personalityTags/PersonalityTags";
import {
    Container,
    FormCard,
    StepIndicator,
    Step,
    StepNumber,
    StepLabel,
    StepArrow,
    ContentWrapper,
    LeftSection,
    RightSection,
    ProfileImageContainer,
    ProfileImage,
    CameraIcon,
    ImageMenu,
    ImageMenuItem,
    ImageInput,
    InputGroup,
    ButtonContainer,
    PreviousButton,
    NextButton,
} from "./PortfolioCreateStyles.ts";

const PortfolioCreate = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [showImageMenu, setShowImageMenu] = useState(false);
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [personalityTags, setPersonalityTags] = useState<string[]>([
        "Proactive",
        "Detail-oriented",
        "Adaptable",
    ]);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCameraClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowImageMenu(!showImageMenu);
    };

    const handleFileUploadClick = () => {
        const input = document.getElementById("profile-image-input") as HTMLInputElement;
        if (input) {
            input.click();
        }
        setShowImageMenu(false);
    };

    const handleDefaultImageClick = () => {
        setProfileImage(null);
        setShowImageMenu(false);
    };

    const handleClickOutside = () => {
        setShowImageMenu(false);
    };

    const handleNext = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
            // TODO: Implement step 2 and 3
            console.log("Moving to step", currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <>
            <Header />
            <Container>
                <FormCard>
                    <StepIndicator>
                        <Step active={currentStep === 1}>
                            <StepNumber active={currentStep === 1}>
                                1
                            </StepNumber>
                            <StepLabel active={currentStep === 1}>
                                Profile Image and Description
                            </StepLabel>
                        </Step>
                        <StepArrow>›</StepArrow>
                        <Step active={currentStep === 2}>
                            <StepNumber active={currentStep === 2}>
                                2
                            </StepNumber>
                            <StepLabel active={currentStep === 2}>
                                Skills Tags
                            </StepLabel>
                        </Step>
                        <StepArrow>›</StepArrow>
                        <Step active={currentStep === 3}>
                            <StepNumber active={currentStep === 3}>
                                3
                            </StepNumber>
                            <StepLabel active={currentStep === 3}>
                                Contact Information
                            </StepLabel>
                        </Step>
                    </StepIndicator>

                    {currentStep === 1 && (
                        <ContentWrapper>
                            <LeftSection onClick={handleClickOutside}>
                                <ProfileImageContainer>
                                    {profileImage ? (
                                        <ProfileImage
                                            src={profileImage}
                                            alt="Profile"
                                        />
                                    ) : (
                                        <ProfileImage />
                                    )}
                                    <CameraIcon onClick={handleCameraClick}>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                            <circle cx="12" cy="13" r="4" />
                                        </svg>
                                    </CameraIcon>
                                    {showImageMenu && (
                                        <ImageMenu>
                                            <ImageMenuItem onClick={handleFileUploadClick}>
                                                파일 업로드
                                            </ImageMenuItem>
                                            <ImageMenuItem onClick={handleDefaultImageClick}>
                                                기본 이미지
                                            </ImageMenuItem>
                                        </ImageMenu>
                                    )}
                                    <ImageInput
                                        id="profile-image-input"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                    />
                                </ProfileImageContainer>
                            </LeftSection>

                            <RightSection>
                                <InputGroup>
                                    <RegistInput
                                        tag="Title"
                                        helpText="자신을 나타낼 수 있는 가장 임팩트 있는 문장을 적어주세요!"
                                        placeholder="ex) 안녕하세요, 끊임없이 탐색하고 개발하는 개발자입니다."
                                        value={title}
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                        width="85%"
                                    />
                                </InputGroup>

                                <InputGroup>
                                    <RegistInput
                                        tag="SubTitle"
                                        helpText="추가 소제목을 작성해 주세요."
                                        placeholder="ex) 사용자에게 더 나은 경험을 선물하고 싶은 프론트엔드 개..."
                                        value={subTitle}
                                        onChange={(e) =>
                                            setSubTitle(e.target.value)
                                        }
                                        width="85%"
                                    />
                                </InputGroup>

                                <PersonalityTags
                                    tags={personalityTags}
                                    onTagsChange={setPersonalityTags}
                                    maxTags={4}
                                />
                            </RightSection>
                        </ContentWrapper>
                    )}

                    <ButtonContainer>
                        {currentStep > 1 && (
                            <PreviousButton onClick={handlePrevious}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M13 4l-6 6 6 6"
                                        stroke="white"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                </svg>
                                Previous
                            </PreviousButton>
                        )}
                        <NextButton onClick={handleNext}>
                            Next
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    d="M7 4l6 6-6 6"
                                    stroke="white"
                                    strokeWidth="2"
                                    fill="none"
                                />
                            </svg>
                        </NextButton>
                    </ButtonContainer>
                </FormCard>
            </Container>
        </>
    );
};

export default PortfolioCreate;
