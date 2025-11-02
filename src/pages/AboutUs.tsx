import Header from "../components/Header/Header";
import {
    Container,
    ContentBox,
    Title,
    Description,
    GetStartedButton,
} from "../styled/AboutUsStyles";

const AboutUs = () => {
    return (
        <>
            <Header />
            <Container>
                <ContentBox>
                    <Title>Ready to join ReadyMe?</Title>
                    <Description>
                        We're <strong>ReadyMe</strong> – where your career
                        journey gets a bold start.
                        <br />
                        Show your work, sharpen your skills, and grow with AI by
                        your side.
                        <br />
                        <br />
                        Now's the time to know yourself and show yourself off!
                    </Description>
                    <GetStartedButton>
                        Get Started →
                    </GetStartedButton>
                </ContentBox>
            </Container>
        </>
    );
};

export default AboutUs;
