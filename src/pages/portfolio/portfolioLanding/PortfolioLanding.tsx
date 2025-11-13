import { useNavigate } from "react-router-dom";
import Header from "../../../components/header/header/Header";
import {
    Container,
    ContentWrapper,
    Title,
    Subtitle,
    CircleContainer,
    BigCircle,
    CreateButton,
} from "./PortfolioLandingStyles";

const PortfolioLanding = () => {
    const navigate = useNavigate();

    const handleCreateClick = () => {
        navigate("/portfolio/create");
    };

    return (
        <>
            <Header />
            <Container>
                <ContentWrapper>
                    <Title>No Portfolio Yet?</Title>
                    <Subtitle>Create Your Own!</Subtitle>
                    <CircleContainer>
                        <BigCircle>
                            <CreateButton onClick={handleCreateClick}>
                                Make it!
                            </CreateButton>
                        </BigCircle>
                    </CircleContainer>
                </ContentWrapper>
            </Container>
        </>
    );
};

export default PortfolioLanding;
