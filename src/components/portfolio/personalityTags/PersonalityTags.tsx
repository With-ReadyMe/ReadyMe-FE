import { useState } from "react";
import {
    Container,
    LabelRow,
    Label,
    HelpText,
    TagsContainer,
    TagsList,
    Tag,
    AddTagButton,
} from "./PersonalityTagsStyles";

interface PersonalityTagsProps {
    tags: string[];
    onTagsChange: (tags: string[]) => void;
    maxTags?: number;
}

const PersonalityTags = ({ tags, onTagsChange, maxTags = 4 }: PersonalityTagsProps) => {
    const [editingTagIndex, setEditingTagIndex] = useState<number | null>(null);
    const [editingTagValue, setEditingTagValue] = useState("");

    const handleRemoveTag = (index: number) => {
        const newTags = tags.filter((_, i) => i !== index);
        onTagsChange(newTags);
        if (editingTagIndex === index) {
            setEditingTagIndex(null);
            setEditingTagValue("");
        }
    };

    const handleAddTag = () => {
        if (tags.length < maxTags) {
            onTagsChange([...tags, ""]);
            setEditingTagIndex(tags.length);
            setEditingTagValue("");
        }
    };

    const handleTagClick = (index: number, currentValue: string) => {
        setEditingTagIndex(index);
        setEditingTagValue(currentValue);
    };

    const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditingTagValue(e.target.value);
    };

    const handleTagInputBlur = () => {
        if (editingTagIndex !== null) {
            const newTags = [...tags];
            if (editingTagValue.trim() === "") {
                // Remove empty tag
                newTags.splice(editingTagIndex, 1);
            } else {
                newTags[editingTagIndex] = editingTagValue;
            }
            onTagsChange(newTags);
            setEditingTagIndex(null);
            setEditingTagValue("");
        }
    };

    const handleTagInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleTagInputBlur();
        }
    };

    const getTagColor = (index: number) => {
        const colors = ["pink", "yellow", "green", "blue"];
        return colors[index % colors.length];
    };

    const getNextTagColor = () => {
        return getTagColor(tags.length);
    };

    return (
        <Container>
            <LabelRow>
                <Label>Personality Tags</Label>
                <HelpText>자신의 성격을 나타낼 성격 태그 {maxTags}개를 만들어 보아요!</HelpText>
            </LabelRow>
            <TagsContainer>
                <TagsList>
                    {tags.map((tag, index) => (
                        <Tag key={index} color={getTagColor(index)}>
                            {editingTagIndex === index ? (
                                <input
                                    type="text"
                                    value={editingTagValue}
                                    onChange={handleTagInputChange}
                                    onBlur={handleTagInputBlur}
                                    onKeyDown={handleTagInputKeyDown}
                                    autoFocus
                                    placeholder="태그 입력"
                                />
                            ) : (
                                <span onClick={() => handleTagClick(index, tag)}>
                                    {tag || "태그 입력"}
                                </span>
                            )}
                            <button onClick={() => handleRemoveTag(index)}>×</button>
                        </Tag>
                    ))}
                    {tags.length < maxTags && (
                        <AddTagButton onClick={handleAddTag} color={getNextTagColor()}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M10 5v10M5 10h10" stroke="white" strokeWidth="2" />
                            </svg>
                        </AddTagButton>
                    )}
                </TagsList>
            </TagsContainer>
        </Container>
    );
};

export default PersonalityTags;
