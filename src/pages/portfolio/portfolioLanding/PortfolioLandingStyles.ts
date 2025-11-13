import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  padding: 40px 60px 60px;
  background: linear-gradient(135deg, #e8f4ff 0%, #dce9ff 50%, #d4e3ff 100%);
  position: relative;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  position: relative;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 56px;
  font-weight: 700;
  color: #2563eb;
  margin: 0;
  margin-bottom: 8px;
  text-align: center;
  line-height: 1.2;
`;

export const Subtitle = styled.h2`
  font-size: 56px;
  font-weight: 700;
  color: #2563eb;
  margin: 0;
  margin-bottom: 60px;
  text-align: center;
  line-height: 1.2;
`;

export const CircleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
`;

export const BigCircle = styled.div`
  position: relative;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 30px 80px rgba(37, 99, 235, 0.3);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 70%
    );
  }
`;

export const CreateButton = styled.button`
  position: relative;
  z-index: 2;
  padding: 18px 50px;
  background: #ffffff;
  border: none;
  border-radius: 12px;
  color: #2563eb;
  font-weight: 700;
  font-size: 32px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;
