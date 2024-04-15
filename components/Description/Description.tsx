import {
  StyledDescriptionContainer,
  StyledDescriptionContent,
  StyledDescriptionSubTitle,
  StyledDescriptionTitle,
} from "./Description.styles";

const Description = () => {
  return (
    <StyledDescriptionContainer>
      <StyledDescriptionContent>
        <StyledDescriptionTitle>Sleek House Side Style</StyledDescriptionTitle>
        <StyledDescriptionSubTitle>
          To live with style, try a palatial experience of Palazzo Art -
          Apartment.
        </StyledDescriptionSubTitle>
      </StyledDescriptionContent>
    </StyledDescriptionContainer>
  );
};

export default Description;
