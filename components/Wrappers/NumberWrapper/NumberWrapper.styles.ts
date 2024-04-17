import styled from "styled-components";

export const StyledNumberWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 2.5vh 3rem;
  background-color: #303041;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const StyledNumberDivider = styled.div`
  height: 7rem;
  width: 0.2rem;
  transform: rotate(25deg);
  background-color: white;
`;

export const StyledNumberIndexWrapper = styled.div`
  position: relative;
  width: 1.4rem;
  height: 1.4rem;
`;

export const StyledTotalNumber = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: white;
`;
