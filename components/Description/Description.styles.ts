import { droidSeff } from "$/app/font";
import styled from "styled-components";

export const StyledDescriptionContentWrapper = styled.div`
  position: absolute;
  top: 29vh;
  left: 0;
  padding-left: 6.5rem;
  padding-right: 2rem;
  width: 100%;
  height: 100%;
  &:not(:first-of-type) > div {
    transform: translate(0%, 5%) matrix(1, 0, 0, 1, 0, 0);
    visibility: hidden;
    opacity: 0;
  }
  /* overflow: hidden; */
`;

export const StyledDescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  max-width: 472px;
  width: 100%;
`;

export const StyledDescriptionTitle = styled.h1`
  font-size: 7.2rem;
  line-height: 8.8rem;
  letter-spacing: -0.02em;
  font-weight: 700;
  color: #2f2c44;
  ${droidSeff.style};
`;

export const StyledDescriptionSubTitle = styled.p`
  font-size: 2.4rem;
  line-height: 2.8rem;
  letter-spacing: -0.02em;
  font-weight: 400;
  color: #2f2c44;
  ${droidSeff.style};
`;
