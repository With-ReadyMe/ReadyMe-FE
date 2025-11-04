import styled from "styled-components";

export const CardWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 20px 48px;
    background-color: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 16px;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        transform: translateY(-2px);
    }
`;

export const ThumbnailWrapper = styled.div`
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    border-radius: 12px;
    overflow: hidden;
    background-color: #f5f5f5;
`;

export const ThumbnailImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 0;
`;

export const Title = styled.h3`
    font-size: 20px;
    font-weight: 700;
    color: #000;
    margin: 0;
`;

export const Description = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #666;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const MetaWrapper = styled.div`
    flex-shrink: 0;
    display: flex;
    gap: 32px;
    align-items: center;
    padding-left: 32px;
    margin-left: 32px;
    border-left: 1px solid #e5e5e5;
`;

export const MetaItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 14px;
    color: #333;
    padding-left: 32px;

    &:first-child {
        padding-left: 0;
    }

    &:not(:first-child) {
        border-left: 1px solid #e5e5e5;
    }
`;

export const MetaHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;

    svg {
        width: 18px;
        height: 18px;
    }
`;

export const MetaLabel = styled.span`
    font-weight: 700;
    color: #000;
    font-size: 14px;
`;

export const MetaValue = styled.span`
    font-weight: 400;
    color: #666;
    font-size: 13px;
    padding-left: 24px;
`;
