import styled from "styled-components";

export const StyledHeaderWrapper = styled.header`
  position: fixed;
  top: 4rem;
  left: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const StyledLine = styled.div`
  width: 8rem;
  height: 0.3rem;
  background-color: #000000;
`;

export const StyledMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 4rem;
  align-items: center;
  svg {
    cursor: pointer;
    width: 3.7rem;
    height: 3.7rem;
  }
`;

export const StyledMenuItem = styled.li`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 22px;
  color: #1b1b33;
  cursor: pointer;
`;
