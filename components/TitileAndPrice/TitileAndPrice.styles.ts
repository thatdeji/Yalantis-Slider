import { droidSeff, montserrat } from "$/app/font";
import styled from "styled-components";

export const StyledTitleAndPriceContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 76%;
  z-index: 4;
  height: 20vh;
  display: flex;
`;

export const StyledTitleContainer = styled.div`
  width: 68%;
  height: 100%;
  position: relative;
`;

export const StyledPriceContainer = styled.div`
  width: 32%;
  background-color: #303041;
  height: 100%;
  position: relative;
`;

export const StyledTitleContent = styled.div`
  background-color: #da8455;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;
  padding-left: 6.5vw;
`;

export const StyledPriceContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2rem;
`;

export const StyledTitleHeading = styled.h2`
  font-size: 4.2rem;
  line-height: 4.8rem;
  letter-spacing: -0.02em;
  font-weight: 700;
  color: white;
  ${droidSeff.style};
`;

export const StyledPriceHeading = styled.h3`
  font-size: 2rem;
  line-height: 2.2rem;
  letter-spacing: 0.06em;
  font-weight: 700;
  color: #da8455;
`;

export const StyledPrice = styled.p`
  font-size: 4rem;
  line-height: 2.2rem;
  font-weight: 600;
  color: white;
`;

export const StyledTitleCTA = styled.button`
  display: flex;
  align-items: center;
  gap: 3.1rem;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: 0.06em;
  font-weight: 700;
  color: white;
  ${montserrat.style}
`;
