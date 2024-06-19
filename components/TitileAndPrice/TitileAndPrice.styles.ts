import { droidSeff, montserrat } from "$/app/font";
import styled from "styled-components";

export const StyledTitleContent = styled.div<{ $dataColor: string }>`
  background-color: ${(d) => d.$dataColor};
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
  &:not(:first-of-type) {
    transform: translate(0%, 100%) matrix(1, 0, 0, 1, 0, 0);
    & button,
    & h2 {
      transform: translate(0%, 100%) matrix(1, 0, 0, 1, 0, 0);
      visibility: hidden;
      opacity: 0;
    }
  }
`;

export const StyledPriceContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 2.4rem;
  padding: 6.7vh 6.25rem;
  &:not(:first-of-type) {
    transform: translate(0%, 20%) matrix(1, 0, 0, 1, 0, 0);
    visibility: hidden;
    opacity: 0;
  }
`;

export const StyledTitleHeading = styled.h2<{ $dataTextColor: string }>`
  font-size: 4.2rem;
  line-height: 4.8rem;
  letter-spacing: -0.02em;
  font-weight: 700;
  color: ${(d) => d.$dataTextColor};
  ${droidSeff.style};
`;

export const StyledPriceHeading = styled.h3<{ $dataColor: string }>`
  font-size: 2rem;
  line-height: 2.2rem;
  letter-spacing: 0.06em;
  font-weight: 700;
  color: ${(d) => d.$dataColor};
`;

export const StyledPrice = styled.p`
  font-size: 4rem;
  line-height: 2.2rem;
  font-weight: 600;
  color: white;
`;

export const StyledTitleCTA = styled.button<{ $dataTextColor: string }>`
  display: flex;
  align-items: center;
  gap: 3.1rem;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: 0.06em;
  font-weight: 700;
  color: ${(d) => d.$dataTextColor};
  ${montserrat.style}
  path {
    fill: ${(d) => d.$dataTextColor};
  }
`;
