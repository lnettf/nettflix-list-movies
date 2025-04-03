import { mappingScore } from "../../utils";
import { Container, Image, Score, Title } from "./PopularItem.styles";

export const PopularItem = ({ title, score }) => {

    const formattedScore = mappingScore(score);

    return (
        <Container>
            <Image src="https://placehold.co/120x100" alt="" />
            <Title>{title}</Title>
            <Score>{formattedScore}/10</Score>
        </Container>
    );
};
