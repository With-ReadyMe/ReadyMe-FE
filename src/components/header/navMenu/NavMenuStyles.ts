import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavMenuWrapper = styled.nav`
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const NavItem = styled(Link)<{ $active?: boolean }>`
    padding: 12px 24px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    color: ${(props) => (props.$active ? "#fff" : "#000")};
    background-color: ${(props) => (props.$active ? "#000" : "transparent")};
    transition: background-color 0.2s ease, color 0.2s ease;
    white-space: nowrap;

    &:hover {
        background-color: ${(props) => (props.$active ? "#000" : "#f0f0f0")};
    }
`;
