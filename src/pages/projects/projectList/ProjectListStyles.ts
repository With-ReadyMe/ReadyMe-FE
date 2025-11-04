import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    background-color: #fafafa;
`;

export const ContentWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 60px;
`;

export const FilterBar = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 32px;
    align-items: center;
`;

export const DateRangeWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border: 1px solid #e5e5e5;
    border-radius: 24px;
    background-color: #fff;
    transition: border-color 0.2s ease;

    &:focus-within {
        border-color: #4a90e2;
    }
`;

export const DateInputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const DateInput = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    width: 110px;
    color: #333;
    font-family: inherit;
    font-size: 14px;
    padding: 0;

    /* Chrome, Safari, Edge - 브라우저 기본 달력 아이콘 숨기기 */
    &::-webkit-calendar-picker-indicator {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        opacity: 0;
    }

    /* 날짜 텍스트 색상 */
    &::-webkit-datetime-edit-text,
    &::-webkit-datetime-edit-month-field,
    &::-webkit-datetime-edit-day-field,
    &::-webkit-datetime-edit-year-field {
        color: #aaa;
    }

    /* 값이 있을 때 날짜 텍스트 색상 */
    &:not([value=""])::-webkit-datetime-edit-text,
    &:not([value=""])::-webkit-datetime-edit-month-field,
    &:not([value=""])::-webkit-datetime-edit-day-field,
    &:not([value=""])::-webkit-datetime-edit-year-field {
        color: #333;
    }
`;

export const DateSeparator = styled.span`
    color: #999;
    font-size: 14px;
    font-weight: 500;
    margin: 0 2px;
`;

export const CalendarIcon = styled.div`
    color: #4a90e2;
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    transition: color 0.2s ease;

    &:hover {
        color: #2d6bb8;
    }
`;

export const SortDropdown = styled.select`
    padding: 12px 20px;
    border: 1px solid #e5e5e5;
    border-radius: 24px;
    font-size: 14px;
    outline: none;
    background-color: #fff;
    cursor: pointer;

    &:focus {
        border-color: #4a90e2;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
`;

export const SearchInput = styled.input`
    flex: 1;
    padding: 12px 48px 12px 20px;
    border: 1px solid #e5e5e5;
    border-radius: 24px;
    font-size: 14px;
    outline: none;
    background-color: #fff;

    &::placeholder {
        color: #aaa;
    }

    &:focus {
        border-color: #4a90e2;
    }
`;

export const SearchIconButton = styled.button`
    position: absolute;
    right: 16px;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 4px;
    color: #999;

    &:hover {
        color: #4a90e2;
    }
`;

export const AddButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background-color: #4a90e2;
    color: #fff;
    border: none;
    border-radius: 24px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #3a7bc8;
    }
`;

export const ProjectListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const EmptyState = styled.div`
    text-align: center;
    padding: 80px 20px;
    color: #999;
    font-size: 16px;
`;
