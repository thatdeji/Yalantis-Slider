import { Arrow } from "$/svg/arrow";
import {
  StyledTitleCTA,
  StyledTitleAndPriceContainer,
  StyledTitleContent,
  StyledTitleHeading,
  StyledTitleContainer,
  StyledPriceContainer,
  StyledPriceContent,
  StyledPriceHeading,
  StyledPrice,
} from "./TitileAndPrice.styles";

const Title = () => {
  return (
    <StyledTitleAndPriceContainer>
      <StyledTitleContainer>
        <StyledTitleContent>
          <StyledTitleHeading>Glass blue house</StyledTitleHeading>
          <StyledTitleCTA>
            VIEW THE ESTATE <Arrow />
          </StyledTitleCTA>
        </StyledTitleContent>
      </StyledTitleContainer>
      <StyledPriceContainer>
        <StyledPriceContent>
          <StyledPriceHeading>SPECIAL PRICE</StyledPriceHeading>
          <StyledPrice>$657,000</StyledPrice>
        </StyledPriceContent>
      </StyledPriceContainer>
    </StyledTitleAndPriceContainer>
  );
};

export default Title;
