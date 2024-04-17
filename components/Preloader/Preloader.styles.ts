import styled from "styled-components";

export const StyledPreloaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: #303041;
  z-index: 100;
`;

export const StyledPreloaderPercentage = styled.p`
  font-size: 7.2rem;
  position: absolute;
  bottom: 2rem;
  right: 3rem;
  color: white;
`;
