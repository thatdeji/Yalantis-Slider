import { droidSeff } from "$/app/font";
import styled from "styled-components";

export const StyledNumberIndex = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.4rem;
  font-weight: 500;
  color: white;
  &:not(:first-of-type) {
    transform: translate(0%, 50%) matrix(1, 0, 0, 1, 0, 0);
    visibility: hidden;
    opacity: 0;
  }
`;
