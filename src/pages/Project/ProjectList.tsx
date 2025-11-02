import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import ProjectListCard from "../../components/Project/ProjectListCard";
import {
    Container,
    ContentWrapper,
    FilterBar,
    DateRangeWrapper,
    DateInputWrapper,
    DateInput,
    DateSeparator,
    CalendarIcon,
    SortDropdown,
    SearchWrapper,
    SearchInput,
    SearchIconButton,
    AddButton,
    ProjectListWrapper,
    EmptyState,
} from "../../styled/Project/ProjectListStyles";

interface Project {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    teamSize: string;
    role: string;
    startDate: string;
    endDate: string;
}

const DUMMY_PROJECTS: Project[] = [
    {
        id: 1,
        title: "ReadyMe",
        description:
            "개발 브랜딩 기반 포트폴리오와 면접 대비를 지원하는 취업 지원 서비스",
        thumbnail: "https://via.placeholder.com/100/e8f0ff/000000?text=ReadyMe",
        teamSize: "1명",
        role: "개인 프로젝트",
        startDate: "2025.08",
        endDate: "2025.11",
    },
    {
        id: 2,
        title: "오늘의 식탁",
        description: "냉장고 재료 기반으로 레시피를 추천해주는 자취생 필수 서비스",
        thumbnail:
            "https://via.placeholder.com/100/fff0e8/000000?text=FoodTable",
        teamSize: "1명",
        role: "개인 프로젝트",
        startDate: "2025.08",
        endDate: "2025.11",
    },
    {
        id: 3,
        title: "스마트 분리수거 알리미",
        description: "AI with Green Campaign, CV 기술을 활용한 분리수거 가이드",
        thumbnail:
            "https://via.placeholder.com/100/e8fff0/000000?text=GreenAI",
        teamSize: "1명",
        role: "개인 프로젝트",
        startDate: "2025.08",
        endDate: "2025.11",
    },
    {
        id: 4,
        title: "FoodieMap",
        description: "사용자 리뷰 기반 맛집 지도를 제공하는 위치 기반 서비스",
        thumbnail: "https://via.placeholder.com/100/fff5e8/000000?text=FoodieMap",
        teamSize: "1명",
        role: "개인 프로젝트",
        startDate: "2025.08",
        endDate: "2025.11",
    },
    {
        id: 5,
        title: "MyFitTracker",
        description: "사용자 건강 관리 및 운동 루틴 제공을 위한 건강 관리 서비스",
        thumbnail:
            "https://via.placeholder.com/100/e8f5ff/000000?text=FitTracker",
        teamSize: "1명",
        role: "개인 프로젝트",
        startDate: "2025.08",
        endDate: "2025.11",
    },
];

const CalendarIconSVG = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M15.8333 3.33334H4.16667C3.24619 3.33334 2.5 4.07953 2.5 5.00001V16.6667C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6667V5.00001C17.5 4.07953 16.7538 3.33334 15.8333 3.33334Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M13.3333 1.66666V4.99999"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M6.66667 1.66666V4.99999"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M2.5 8.33334H17.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const SearchIconSVG = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M17.5 17.5L13.875 13.875"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ProjectList = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("latest");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [displayedProjects, setDisplayedProjects] = useState<Project[]>(DUMMY_PROJECTS);

    const handleAddProject = () => {
        navigate("/projects/new");
    };

    const handleCardClick = (id: number) => {
        navigate(`/projects/${id}`);
    };

    const handleSearch = () => {
        let filtered = [...DUMMY_PROJECTS];

        // 1. 검색어 필터링
        if (searchQuery.trim()) {
            filtered = filtered.filter((project) =>
                project.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // 2. 날짜 범위 필터링
        if (startDate || endDate) {
            filtered = filtered.filter((project) => {
                const projectStart = new Date(project.startDate.replace(/\./g, "-"));
                const projectEnd = new Date(project.endDate.replace(/\./g, "-"));

                let isValid = true;

                // 시작일 조건: 프로젝트 종료일이 선택한 시작일 이후
                if (startDate) {
                    const selectedStart = new Date(startDate);
                    isValid = isValid && projectEnd >= selectedStart;
                }

                // 종료일 조건: 프로젝트 시작일이 선택한 종료일 이전
                if (endDate) {
                    const selectedEnd = new Date(endDate);
                    isValid = isValid && projectStart <= selectedEnd;
                }

                return isValid;
            });
        }

        // 3. 정렬
        filtered.sort((a, b) => {
            switch (sortOrder) {
                case "latest":
                    return new Date(b.startDate.replace(/\./g, "-")).getTime() -
                           new Date(a.startDate.replace(/\./g, "-")).getTime();
                case "oldest":
                    return new Date(a.startDate.replace(/\./g, "-")).getTime() -
                           new Date(b.startDate.replace(/\./g, "-")).getTime();
                case "name":
                    return a.title.localeCompare(b.title);
                default:
                    return 0;
            }
        });

        setDisplayedProjects(filtered);
    };

    const filteredProjects = displayedProjects;

    return (
        <>
            <Header />
            <Container>
                <ContentWrapper>
                    <FilterBar>
                        <DateRangeWrapper>
                            <CalendarIcon
                                onClick={() => {
                                    const input = document.getElementById("project-start-date") as HTMLInputElement;
                                    if (input) {
                                        input.focus();
                                        input.showPicker?.();
                                    }
                                }}
                            >
                                <CalendarIconSVG />
                            </CalendarIcon>
                            <DateInputWrapper>
                                <DateInput
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    title="시작 날짜를 선택하세요."
                                    id="project-start-date"
                                />
                            </DateInputWrapper>
                            <DateSeparator>~</DateSeparator>
                            <DateInputWrapper>
                                <DateInput
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    title="종료 날짜를 선택하세요."
                                    id="project-end-date"
                                    min={startDate || undefined}
                                />
                            </DateInputWrapper>
                        </DateRangeWrapper>
                        <SortDropdown
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="latest">최신순으로</option>
                            <option value="oldest">오래된순으로</option>
                            <option value="name">이름순으로</option>
                        </SortDropdown>
                        <SearchWrapper>
                            <SearchInput
                                type="text"
                                placeholder="프로젝트 명을 입력해 주세요."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleSearch();
                                    }
                                }}
                            />
                            <SearchIconButton onClick={handleSearch}>
                                <SearchIconSVG />
                            </SearchIconButton>
                        </SearchWrapper>
                        <AddButton onClick={handleAddProject}>
                            + 추가 생성
                        </AddButton>
                    </FilterBar>

                    <ProjectListWrapper>
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project) => (
                                <ProjectListCard
                                    key={project.id}
                                    {...project}
                                    onClick={() => handleCardClick(project.id)}
                                />
                            ))
                        ) : (
                            <EmptyState>
                                검색 결과가 없습니다.
                                <br />
                                다른 검색어를 입력해보세요.
                            </EmptyState>
                        )}
                    </ProjectListWrapper>
                </ContentWrapper>
            </Container>
        </>
    );
};

export default ProjectList;
