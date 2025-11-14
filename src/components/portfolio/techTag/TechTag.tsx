import React from "react";
import * as S from "./TechTagStyles";

const TAG_STYLES: Record<string, { badge: string }> = {
    react: {
        badge: "https://img.shields.io/badge/react-61DAFB?logo=react&logoColor=black",
    },
    typescript: {
        badge: "https://img.shields.io/badge/typescript-3178C6?logo=typescript&logoColor=white",
    },
    javascript: {
        badge: "https://img.shields.io/badge/javascript-F7DF1E?logo=javascript&logoColor=black",
    },
    node: {
        badge: "https://img.shields.io/badge/node.js-3C873A?logo=node.js&logoColor=white",
    },
    aws: {
        badge: "https://img.shields.io/badge/AWS-FF9900?logo=amazon-aws&logoColor=black",
    },
    default: {
        badge: "https://img.shields.io/badge/default-999999",
    },
};

interface TechTagProps {
    width: string;
    height: string;
    type: string;
}

const TechTag = ({ width, height, type }: TechTagProps) => {
    const style = TAG_STYLES[type] || TAG_STYLES.default;

    return (
        <S.Wrapper width={width} height={height}>
            <img src={style.badge} alt={type} />
        </S.Wrapper>
    );
};

export default TechTag;
