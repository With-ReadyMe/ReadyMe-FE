import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 80px);
    padding: 40px 60px 60px;
    background: #ffffff;
    position: relative;
    overflow: hidden;
`;

export const ContentBox = styled.div`
    max-width: 1200px;
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(135deg, #e8f0ff 0%, #c8daff 50%, #a5b8ff 100%);
    padding: 100px 80px;
    border-radius: 50px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
    position: relative;
    overflow: hidden;
`;

export const Title = styled.h1`
    font-size: 48px;
    font-weight: 700;
    color: #2d3e8e;
    margin-bottom: 30px;
    line-height: 1.3;
`;

export const Description = styled.p`
    font-size: 18px;
    line-height: 1.8;
    color: #333;
    margin-bottom: 40px;

    strong {
        font-weight: 700;
        color: #2d3e8e;
    }
`;

export const GetStartedButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 32px;
    background: linear-gradient(90deg, #a5c8ff 0%, #b8a9f9 100%);
    border: none;
    border-radius: 999px;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 4px 15px rgba(165, 200, 255, 0.4);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(165, 200, 255, 0.6);
    }

    &:active {
        transform: translateY(0);
    }
`;
