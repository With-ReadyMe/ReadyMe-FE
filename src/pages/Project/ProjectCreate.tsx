import Header from "../../components/Header/Header";
import styled from "styled-components";

const Container = styled.div`
    min-height: 100vh;
    background-color: #fafafa;
`;

const ContentWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 40px;
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 40px;
    color: #000;
`;

const Placeholder = styled.div`
    padding: 100px 40px;
    text-align: center;
    background-color: #fff;
    border-radius: 16px;
    border: 1px solid #e5e5e5;
    color: #999;
    font-size: 16px;
`;

const ProjectCreate = () => {
    return (
        <>
            <Header />
            <Container>
                <ContentWrapper>
                    <Title>È \¸ Ý1</Title>
                    <Placeholder>
                        \¸ Ý1 üt ì0Ð ä´Èä.
                    </Placeholder>
                </ContentWrapper>
            </Container>
        </>
    );
};

export default ProjectCreate;
