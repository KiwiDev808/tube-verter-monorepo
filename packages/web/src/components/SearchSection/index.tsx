import { ButtonSearch } from "../../styles/button";
import { StyledInput, StyledSection } from "./styles";

export function SearchSection () {
    return (
        <StyledSection>
            <h2> Convert your YouTube videos to MP4 here</h2>
            <StyledInput placeholder="Insert YouTube link"></StyledInput>
            <ButtonSearch> Search </ButtonSearch>
        </StyledSection>
    )
}