import { droidSeff } from "$/app/font";
import styled from "styled-components";

export const StyledDescriptionContainer = styled.div`
  background-color: white;
  position: fixed;
  height: 100%;
  width: 43%;
  left: 0;
  top: 0;
  padding-left: 6.5rem;
  padding-top: 29vh;
`;

export const StyledDescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  max-width: 472px;
`;

export const StyledDescriptionTitle = styled.h1`
  font-size: 7.2rem;
  line-height: 8.8rem;
  letter-spacing: -0.02em;
  font-weight: 700;
  color: #1b1b33;
  ${droidSeff.style};
`;

export const StyledDescriptionSubTitle = styled.p`
  font-size: 2.4rem;
  line-height: 2.8rem;
  letter-spacing: -0.02em;
  font-weight: 400;
  color: #1b1b33;
  ${droidSeff.style};
`;
