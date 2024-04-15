import {
  StyledBackgroundImageImage,
  StyledBackgroundImageImageInnerWraper,
  StyledBackgroundImageImageOuterWrapper,
} from "./BackgroundImage.styles";

const BackgroundImage = () => {
  return (
    <StyledBackgroundImageImageOuterWrapper>
      <StyledBackgroundImageImageInnerWraper>
        <StyledBackgroundImageImage />
      </StyledBackgroundImageImageInnerWraper>
    </StyledBackgroundImageImageOuterWrapper>
  );
};

export default BackgroundImage;
