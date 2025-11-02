import {
    CardWrapper,
    ThumbnailWrapper,
    ThumbnailImage,
    ContentWrapper,
    Title,
    Description,
    MetaWrapper,
    MetaItem,
    MetaHeader,
    MetaLabel,
    MetaValue,
} from "../../styled/Project/ProjectListCardStyles";

interface ProjectListCardProps {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    teamSize: string;
    role: string;
    startDate: string;
    endDate: string;
    onClick?: () => void;
}

const UserIcon = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M9 9C11.0711 9 12.75 7.32107 12.75 5.25C12.75 3.17893 11.0711 1.5 9 1.5C6.92893 1.5 5.25 3.17893 5.25 5.25C5.25 7.32107 6.92893 9 9 9Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M15.4425 16.5C15.4425 13.515 12.6037 11.0925 9 11.0925C5.39625 11.0925 2.5575 13.515 2.5575 16.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const CalendarIcon = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M14.25 3H3.75C2.92157 3 2.25 3.67157 2.25 4.5V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V4.5C15.75 3.67157 15.0784 3 14.25 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12 1.5V4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M6 1.5V4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M2.25 7.5H15.75"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ProjectListCard: React.FC<ProjectListCardProps> = ({
    title,
    description,
    thumbnail,
    teamSize,
    role,
    startDate,
    endDate,
    onClick,
}) => {
    return (
        <CardWrapper onClick={onClick}>
            <ThumbnailWrapper>
                <ThumbnailImage src={thumbnail} alt={title} />
            </ThumbnailWrapper>
            <ContentWrapper>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </ContentWrapper>
            <MetaWrapper>
                <MetaItem>
                    <MetaHeader>
                        <UserIcon />
                        <MetaLabel>개발 인원 및 본인 역할</MetaLabel>
                    </MetaHeader>
                    <MetaValue>
                        {teamSize}, {role}
                    </MetaValue>
                </MetaItem>
                <MetaItem>
                    <MetaHeader>
                        <CalendarIcon />
                        <MetaLabel>개발 기간</MetaLabel>
                    </MetaHeader>
                    <MetaValue>
                        {startDate} ~ {endDate}
                    </MetaValue>
                </MetaItem>
            </MetaWrapper>
        </CardWrapper>
    );
};

export default ProjectListCard;
